// users/ryali93/lulc:UTILES_POST/utils_post.js
exports.makeBandNames = function(months, prefix){
  prefix = prefix || 'clasificacion_';
  months = months || ee.List.sequence(1,12);
  return ee.List(months).map(function(m){ 
    return ee.String(prefix).cat(ee.Number(m).int()); 
  });
};

// Asegura que existan las 12 bandas; si alguna falta, crea banda vacía con máscara de ref
exports.ensureMonthlyBands = function(img, bandNames, maskRef){
  var ref = ee.Image(maskRef || img.select(0));
  var out = ee.Image().select();
  out = ee.Image(bandNames.iterate(function(b, acc){
    b = ee.String(b); acc = ee.Image(acc);
    var has = img.bandNames().contains(b);
    var band = ee.Image(ee.Algorithms.If(
      has, img.select(b).byte(),
      ee.Image().rename(b).byte().updateMask(ref.mask())
    ));
    return acc.addBands(band);
  }, out));
  return out.select(bandNames);
};

// Enmascara un valor (p.ej. 17 = SIN DATO) en todas las bandas
exports.maskValueAllBands = function(img, bandNames, value){
  var out = ee.Image().select();
  out = ee.Image(bandNames.iterate(function(b, acc){
    b = ee.String(b); acc = ee.Image(acc);
    var ib = img.select(b);
    var m  = ib.unmask().neq(value);
    return acc.addBands(ib.updateMask(m).rename(b));
  }, out));
  return out.select(bandNames);
};

// Forward fill: t0->tn (cada mes usa el mes previo acumulado)
function forwardFill(img, bandNames){
  var first = ee.Image(img.select([ee.String(bandNames.get(0))]));
  var acc = ee.Image(bandNames.slice(1).iterate(function(b, prev){
    b = ee.String(b); prev = ee.Image(prev);
    var prevLastIdx = ee.Number(prev.bandNames().length()).subtract(1);
    var prevLast    = prev.select(prevLastIdx);
    var cur = img.select(b).unmask(prevLast);
    return prev.addBands(cur.rename(b));
  }, first));
  return acc.select(bandNames);
}

// Backward fill: tn->t0
function backwardFill(img, bandNames){
  var rev = bandNames.reverse();
  var first = ee.Image(img.select([ee.String(rev.get(0))]));
  var acc = ee.Image(rev.slice(1).iterate(function(b, prev){
    b = ee.String(b); prev = ee.Image(prev);
    var prevLastIdx = ee.Number(prev.bandNames().length()).subtract(1);
    var prevLast    = prev.select(prevLastIdx);
    var cur = img.select(b).unmask(prevLast);
    return prev.addBands(cur.rename(b));
  }, first));
  return acc.select(rev).select(bandNames);
}

exports.gapFillBidirectional = function(img, bandNames){
  var fwd = forwardFill(img, bandNames);
  var bwd = backwardFill(fwd, bandNames);
  return bwd.select(bandNames);
};

// ---- P02 helpers (bordes y ventanas) para una clase cls ----
exports.edgeFirst = function(img, cls){ // fija mes1 si 2 y 3 == cls
  var m = img.select('clasificacion_1').neq(cls)
    .and(img.select('clasificacion_2').eq(cls))
    .and(img.select('clasificacion_3').eq(cls));
  var fix = img.select('clasificacion_1').where(m, cls);
  return fix.addBands(img.select(['clasificacion_2','clasificacion_3','clasificacion_4','clasificacion_5','clasificacion_6','clasificacion_7','clasificacion_8','clasificacion_9','clasificacion_10','clasificacion_11','clasificacion_12']));
};

exports.edgeLast = function(img, cls){ // fija mes12 si 10 y 11 == cls
  var m = img.select('clasificacion_10').eq(cls)
    .and(img.select('clasificacion_11').eq(cls))
    .and(img.select('clasificacion_12').neq(cls));
  var fix = img.select('clasificacion_12').where(m, cls);
  var head = img.select(['clasificacion_1','clasificacion_2','clasificacion_3','clasificacion_4','clasificacion_5','clasificacion_6','clasificacion_7','clasificacion_8','clasificacion_9','clasificacion_10','clasificacion_11']);
  return head.addBands(fix);
};

exports.window3 = function(img, cls){ // moda 3 (t-1==cls & t+1==cls)
  var out = img.select('clasificacion_1');
  var mids = ['2','3','4','5','6','7','8','9','10','11'];
  mids.forEach(function(s){
    var t  = 'clasificacion_' + s;
    var t0 = 'clasificacion_' + String(parseInt(s)-1);
    var t2 = 'clasificacion_' + String(parseInt(s)+1);
    var m = img.select(t0).eq(cls).and(img.select(t).neq(cls)).and(img.select(t2).eq(cls));
    var band = img.select(t).where(m, cls);
    out = out.addBands(band.rename(t));
  });
  out = out.addBands(img.select('clasificacion_12'));
  return out.select(img.bandNames());
};

exports.window4 = function(img, cls){ // moda 4 (t-1==cls & t+2==cls)
  var out = img.select('clasificacion_1');
  var mids = ['2','3','4','5','6','7','8','9','10'];
  mids.forEach(function(s){
    var t  = 'clasificacion_' + s;
    var t1 = 'clasificacion_' + String(parseInt(s)+1);
    var t0 = 'clasificacion_' + String(parseInt(s)-1);
    var t2 = 'clasificacion_' + String(parseInt(s)+2);
    var m = img.select(t0).eq(cls).and(img.select(t).neq(cls)).and(img.select(t1).neq(cls)).and(img.select(t2).eq(cls));
    out = out.addBands(img.select(t ).where(m, cls).rename(t))
             .addBands(img.select(t1).where(m, cls).rename(t1));
  });
  out = out.addBands(img.select(['clasificacion_11','clasificacion_12']));
  return out.select(img.bandNames());
};

// Mantener clases tal cual (no tocar esas clases)
// exports.keepClasses = function(original, filtered, classes){
//   if (!classes || classes.length === 0) return filtered;
//   var acc = ee.Image().select();
//   classes.forEach(function(c){
//     var m = original.eq(ee.Number(c)).selfMask();
//     var kept = original.updateMask(m);
//     acc = acc.addBands(kept);
//   });
//   return ee.Image(ee.Algorithms.If(acc.bandNames().size().gt(0), filtered.blend(acc.max()), filtered));
// };
// Mantener clases tal cual (no tocar esas clases)
exports.keepClasses = function(original, filtered, classes){
  classes = classes || [];
  if (!classes.length) return filtered;

  // Construye una colección de imágenes "kept" (misma estructura que original, pero
  // enmascaradas para cada clase a preservar)
  var keptIC = ee.ImageCollection(
    ee.List(classes).map(function(c){
      c = ee.Number(c);
      var m = original.eq(c).selfMask();     // máscara donde original == c
      return original.updateMask(m);         // mantiene mismas bandas
    })
  );

  // Unifica todas las clases preservadas
  var kept = keptIC.mosaic(); // o .max(); con categorías, mosaic es más explícito

  // Inyecta "kept" en filtered donde exista máscara en kept
  var out = filtered.where(kept.mask(), kept);

  // Devuelve con el mismo orden de bandas que filtered
  return out.select(filtered.bandNames());
};

// Mantener meses: reinyecta bandas originales para meses excluidos
exports.keepMonths = function(original, filtered, bandNamesExclude){
  bandNamesExclude = ee.List(bandNamesExclude || []);
  return ee.Image(ee.Algorithms.If(bandNamesExclude.size().gt(0),
    filtered.addBands(original.select(bandNamesExclude), null, true),
    filtered
  ));
};

// Moda temporal global (una sola banda "temporal_mode")
exports.temporalMode = function(img){
  // reduce sobre bandas -> devuelve banda 'mode'
  var modeImg = img.reduce(ee.Reducer.mode()).rename('temporal_mode');
  return modeImg;
};

// Moda espacial por banda (kernel configurable). preserve evita modificar esas clases.
exports.spatialModePerBand = function(img, kernel, preserve){
  kernel   = kernel   || ee.Kernel.square(1); // 3x3
  preserve = preserve || [];
  var out = ee.Image().select();
  img.bandNames().getInfo().forEach(function(b){
    var band = img.select([b]);
    var mode = band.reduceNeighborhood(ee.Reducer.mode(), kernel);
    // preservar clases si se listan
    if (preserve.length){
      var keepMask = ee.Image(0);
      preserve.forEach(function(c){
        keepMask = keepMask.or(band.eq(ee.Number(c)));
      });
      var mixed = band.where(keepMask.neq(1), mode);
      out = out.addBands(mixed.rename(b));
    } else {
      out = out.addBands(mode.rename(b));
    }
  });
  return out.select(img.bandNames());
};

// Remap masivo en todas las bandas (from[], to[])
exports.remapAllBands = function(img, from, to){
  var out = ee.Image().select();
  img.bandNames().getInfo().forEach(function(b){
    out = out.addBands(img.select([b]).remap(from, to).rename(b));
  });
  return out.select(img.bandNames());
};

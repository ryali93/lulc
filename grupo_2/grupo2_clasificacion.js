var utils      = require('users/ryali93/lulc:UTILES/utils.js');
var schema     = require('users/ryali93/lulc:UTILES/schema.js');
var samplesMod = require('users/ryali93/lulc:P2_MUESTRAS/RN02_samples.js');

// === CONFIG clasificación (puedes ajustar luego) ===
var cfgCLS = {
  code: 'RN02',
  year: 2023,
  blueThr: 30,
  scale: 5,
  seed: 42,
  nTrees: 200,
  trainSplit: 0.7,
  perClass: 300,
  pointsPerFeat: 30,
  minPolygonsForPPF: 5,
  doExport: true  // aquí lo dejamos en false para UI (opcional)
};

// === SCHEMA y paleta===
var SCHEMA_JS = schema.SCHEMA.slice();

// Etiqueta segura en JS (sin ee.String)
function toSafeLabelJS(code, name) {
  return String(code) + '_' + String(name)
    .toLowerCase()
    .replace(/\s+/g, '_');   // espacios -> _
}

// Diccionario de acceso rápido por código (JS)
var CODE2INFO_JS = {};  // { code: {name, color} }
SCHEMA_JS.forEach(function(o){
  CODE2INFO_JS[o.code] = { name: o.name, color: o.color };
});

// Listas base
var VALID_CODES_JS = SCHEMA_JS.map(function(d){ return d.code; });
var K_JS           = VALID_CODES_JS.length;

// Para usar en el lado EE cuando haga falta:
var VALID_CODES = ee.List(VALID_CODES_JS);
var IDX_LIST    = ee.List.sequence(0, K_JS - 1);

// Paleta para visualizar en EE (hex SIN '#', como pedías)
var PALETTE_JS = SCHEMA_JS.map(function(d){
  return d.color.replace('#','');
});

// (opcional) etiquetas “code_name” por si necesitas nombres de columnas
var LABEL_LIST = SCHEMA_JS.map(function(d){
  return toSafeLabelJS(d.code, d.name);
});

// Predictores y muestras BP05
var predictorsCLS = ['R','G','B','N','NDVI','NDWI','elevation','slope','canopy_height','segments'];
var samplesAllCLS = ee.FeatureCollection(samplesMod.RN02);

/* ============ 0) PARÁMETROS EDITABLES ============ */
var ANP = { 
  "RVS01": "Refugio de Vida Silvestre Laquipampa",
  "ZR13": "Zona Reservada Bosque de Zárate",
  "RN06": "Reserva Nacional de Salinas y Aguada Blanca",
  "RVS02": "Refugio de Vida Silvestre Los Pantanos de Villa",
  "SH01": "Santuario Histórico de Chacamarca",
  "RN02": "Reserva Nacional de Junín",
  "PN04": "Parque Nacional Huascarán",
  "SH04": "Santuario Histórico Bosque de Pomac",
  "RN17": "Reserva Nacional Illescas",
  "BP05": "Bosque de Protección de Pagaibamba",
  "CC02": "Coto de Caza Sunchubamba",
  "ZR05": "Zona Reservada Cordillera Huayhuash",
  "SN01": "Santuario Nacional de Huayllay"
};

// Lista de códigos (para el selector)
var ANP_CODIGOS = Object.keys(ANP);

// Planet/MIDAGRI: añade/quita meses según tus assets disponibles
var PLANET_ASSETS = {
  '2023-01 (ENERO)': 'projects/ee-midagri01-369019/assets/PERU_ENERO_2023',
  '2023-02 (FEBRERO)': 'projects/ee-midagri004/assets/PERU_FEBRERO_2023',
  '2023-03 (MARZO)': 'projects/ee-proyecto-354405/assets/PERU_MARZO_2023',
  '2023-04 (ABRIL)': 'projects/ee-proyecto-354405/assets/PERU_ABRIL_2023',
  '2023-05 (MAYO)': 'projects/ee-midagri005/assets/PERU_MAYO_2023',
  '2023-06 (JUNIO)': 'projects/ee-midagri005/assets/PERU_JUNIO_2023',
  '2023-07 (JULIO)': 'projects/ee-midagri100/assets/PERU_JULIO_2023',
  '2023-08 (AGOSTO)': 'projects/ee-midagri105/assets/PERU_AGOSTO_2023',
  '2023-09 (SETIEMBRE)': 'projects/ee-midagri106/assets/PERU_SETIEMBRE_2023',
  '2023-10 (OCTUBRE)': 'projects/ee-midagri106/assets/PERU_OCTUBRE_2023',
  '2023-11 (NOVIEMBRE)': 'projects/ee-midagri107/assets/PERU_NOVIEMBRE_2023',
  '2023-12 (DICIEMBRE)': 'projects/ee-midagri107/assets/PERU_DICIEMBREE_2023'
};

// Campo con el NOMBRE del ANP en tu asset (ajústalo si difiere)
var NAME_PROP = 'NOMBRE';
var NAME_FALLBACKS = ['ANP_NOMB','NOMBRE_ANP','NOM_ANP','ANP'];

/* ============ 1) FUENTES ============ */
var fc_codigos = ee.FeatureCollection('projects/ee-teledetecciondde/assets/Shp_ANP_ZA_ZR_ACR_ACP_Dissolve');
var fc_codigos_anp = ee.FeatureCollection('projects/royyali/assets/anps_grupo2');
var MBc3 = ee.Image('projects/royyali/assets/peru_collection3_integration_v1-classification_2023');
MBc3 = MBc3.rename('classification_2023');

// WorldCover por año
function worldcoverByYear(year){
  return ee.ImageCollection(year === 2021 ? 'ESA/WorldCover/v200' : 'ESA/WorldCover/v100').first();
}

// Sentinel-2 mensual (SR) con máscara simple de nubes
function s2Monthly(year, month, geom){
  var start = ee.Date.fromYMD(year, month, 1);
  var end   = start.advance(1, 'month');
  var s2 = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED')
              .filterDate(start, end)
              .filterBounds(geom)
              .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 50))
              .median();
  // Escala reflectancia (S2_SR viene *1e4*)
  return s2.multiply(0.0001)
           .copyProperties(s2, s2.propertyNames());
}

// Paleta MB
var MB_COLORS = {
  1:'#1f8d49',3:'#1f8d49',4:'#76c975',5:'#04381d',6:'#026975',
  9:'#7a5900',10:'#b6db74',11:'#519769',12:'#dbbc74',13:'#b6db74',
  15:'#edd88e',18:'#e97e4d',21:'#ffcf63',22:'#d4271e',23:'#ffa07a',
  24:'#d4271e',25:'#db4b4b',27:'#ffffff',29:'#a3b58e',30:'#9c0027',
  31:'#091077',32:'#f5d1d5',33:'#2532e4',34:'#93d6f6',35:'#9056d0',
  40:'#c71585',61:'#dcdcdc',66:'#a39358',68:'#f9a47a',70:'#fbe9e0',
  72:'#f1d5ae'
};

// Paleta densa indexada por ID (posición i -> clase i)
var MB_PALETTE = (function () {
  var keys = Object.keys(MB_COLORS);
  var maxId = 0;
  for (var i = 0; i < keys.length; i++) {
    var id = parseInt(keys[i], 10);
    if (id > maxId) maxId = id;
  }
  var arr = [];
  for (var j = 0; j <= maxId; j++) {
    arr[j] = MB_COLORS[j] || '#FFFFFF'; // color por defecto si no definimos ese ID
  }
  return arr;
})();

/* ============ 2) CLASES / LEYENDAS ============ */
var MB_CLASSES = {
  3:'Bosque', 4:'Bosque seco', 5:'Manglar', 6:'Bosque inundable',
  9:'Plantación forestal', 11:'Zona pantanosa/pastizal inun.', 12:'Pastizal/herbazal',
  13:'Otra no boscosa', 15:'Pasto', 18:'Agricultura', 21:'Mosaico agropecuario',
  23:'Playa', 24:'Infraestructura urbana', 25:'Otra área ant. sin veg.',
  29:'Afloramiento rocoso', 30:'Minería', 31:'Acuicultura', 32:'Salina costera',
  33:'Río/lago/océano', 34:'Glaciar', 35:'Palma aceitera', 40:'Arroz',
  61:'Salar', 66:'Matorral', 68:'Área natural sin veg.', 70:'Loma costera', 72:'Otros cultivos',
  27:'No observado'
};

var WC_CLASSES = {
  10:'Bosque', 20:'Matorrales', 30:'Pastizales', 40:'Cultivos',
  50:'Construcciones', 60:'Escasa vegetación', 70:'Nieve/hielo',
  80:'Agua', 90:'Humedales herbáceos', 95:'Manglares', 100:'Musgo/líquenes'
};

function Legend_WC(){
  var items = [
    ['#006400','Bosque'],['#ffbb22','Matorrales'],['#ffff4c','Pastizales'],
    ['#f096ff','Cultivos'],['#fa0000','Construcciones'],['#b4b4b4','Escasa veg.'],
    ['#f0f0f0','Nieve/hielo'],['#0064c8','Agua'],['#0096a0','Hum. herbáceos'],
    ['#00cf75','Manglares'],['#fae6a0','Musgo/líquenes']
  ];
  var p = ui.Panel({style:{position:'bottom-left', padding:'8px 15px'}});
  p.add(ui.Label({value:'Leyenda WorldCover', style:{fontWeight:'bold', fontSize:'14px'}}));
  items.forEach(function(it){
    p.add(ui.Panel({
      layout: ui.Panel.Layout.Flow('horizontal'),
      widgets:[
        ui.Label('',{backgroundColor:it[0], padding:'3px', margin:'0 3px 2px 0'}),
        ui.Label(it[1],{margin:'0 0 2px 0'})
      ]
    }));
  });
  return p;
}
// Función para la leyenda de mapbiomas
function Legend_MB(){
  var ids = Object.keys(MB_CLASSES).map(function(k){return parseInt(k,10);})//.sort(function(a,b){return a-b;});
      .filter(function(k){return MB_COLORS[k];})
      .sort(function(a,b){return a-b;});
      
  var legend = ui.Panel({style:{position:'bottom-left', padding:'8px 15px'}});
  legend.add(ui.Label({value:'Leyenda MapBiomas – C3 (2023)', style:{fontWeight:'bold', fontSize:'14px'}}));
  var grid = ui.Panel({layout: ui.Panel.Layout.Flow('horizontal')});
  var col1 = ui.Panel({layout: ui.Panel.Layout.Flow('vertical'), style:{padding:'0 10px'}});
  var col2 = ui.Panel({layout: ui.Panel.Layout.Flow('vertical'), style:{padding:'0 10px'}});
  
  ids.forEach(function(id, i){
    var color = MB_COLORS[id] || '#FFFFFF';
    var label = MB_CLASSES[id] || ('Clase ' + id);
    var item = ui.Panel({
      layout: ui.Panel.Layout.Flow('horizontal'),
      widgets: [
        ui.Label('',{backgroundColor:color, padding:'6px', margin:'0 6px 4px 0'}),
        ui.Label(id+' – '+label,{fontSize:'12px',margin:'0 0 4px 0'})
      ]
    });
    (i%2===0?col1:col2).add(item);
  });
  grid.add(col1); grid.add(col2); legend.add(grid);
  return legend;
}

// === Leyenda dinámica MapBiomas ===
function Legend_MB_dynamic(MB_clip, geom) {
  // Determinar clases presentes en el área
  var freq = MB_clip.reduceRegion({
    reducer: ee.Reducer.frequencyHistogram(),
    geometry: geom,
    scale: 30,
    maxPixels: 1e13
  }).get('classification_2023');

  return ee.Dictionary(freq).keys().evaluate(function(classKeys) {
    var ids = (classKeys || []).map(function(k){ return parseInt(k, 10); });
    if (!ids.length) return;

    // Construir leyenda solo con las clases presentes
    var legend = ui.Panel({
      style:{
        position:'bottom-left',
        padding:'8px 12px',
        backgroundColor:'rgba(255,255,255,0.85)',
        width:'380px'
      }
    });
    legend.add(ui.Label({
      value:'Leyenda MapBiomas – C3 (2023)',
      style:{fontWeight:'bold', fontSize:'14px', margin:'0 0 6px 0'}
    }));

    var grid = ui.Panel({layout: ui.Panel.Layout.Flow('horizontal')});
    var col1 = ui.Panel({layout: ui.Panel.Layout.Flow('vertical'), style:{padding:'0 10px'}});
    var col2 = ui.Panel({layout: ui.Panel.Layout.Flow('vertical'), style:{padding:'0 10px'}});

    ids.sort(function(a,b){ return a-b; }).forEach(function(id,i){
      var color = MB_COLORS[id] || '#FFFFFF';
      var label = MB_CLASSES[id] || ('Clase ' + id);
      var item = ui.Panel({
        layout: ui.Panel.Layout.Flow('horizontal'),
        widgets:[
          ui.Label('',{backgroundColor:color,padding:'6px',margin:'0 6px 4px 0',border:'1px solid #999'}),
          ui.Label(id+' – '+label,{fontSize:'12px',margin:'0 0 4px 0'})
        ]
      });
      (i%2===0?col1:col2).add(item);
    });
    grid.add(col1); grid.add(col2); legend.add(grid);

    // Quitar leyendas anteriores y agregar la nueva
    mapMB.widgets().forEach(function(w){ mapMB.remove(w); });
    mapMB.add(legend);
  });
}


// === Leyenda dinámica WorldCover ===
function Legend_WC_dynamic(WC_clip, geom) {
  var freq = WC_clip.reduceRegion({
    reducer: ee.Reducer.frequencyHistogram(),
    geometry: geom,
    scale: 10,
    maxPixels: 1e13
  }).get('Map');

  return ee.Dictionary(freq).keys().evaluate(function(classKeys) {
    var ids = (classKeys || []).map(function(k){ return parseInt(k, 10); });
    if (!ids.length) return;

    var items = [];
    ids.sort(function(a,b){ return a-b; }).forEach(function(id){
      var color;
      switch(id){
        case 10: color='#006400'; break;
        case 20: color='#ffbb22'; break;
        case 30: color='#ffff4c'; break;
        case 40: color='#f096ff'; break;
        case 50: color='#fa0000'; break;
        case 60: color='#b4b4b4'; break;
        case 70: color='#f0f0f0'; break;
        case 80: color='#0064c8'; break;
        case 90: color='#0096a0'; break;
        case 95: color='#00cf75'; break;
        case 100: color='#fae6a0'; break;
        default: color='#FFFFFF';
      }
      items.push([color, WC_CLASSES[id] || ('ID '+id)]);
    });

    var p = ui.Panel({style:{position:'bottom-left',padding:'8px 15px',backgroundColor:'rgba(255,255,255,0.8)'}});
    p.add(ui.Label({value:'Leyenda WorldCover (2021)',style:{fontWeight:'bold',fontSize:'14px'}}));
    items.forEach(function(it){
      p.add(ui.Panel({
        layout: ui.Panel.Layout.Flow('horizontal'),
        widgets:[
          ui.Label('',{backgroundColor:it[0],padding:'4px',margin:'0 6px 2px 0',border:'1px solid #555'}),
          ui.Label(it[1],{margin:'0 0 2px 0'})
        ]
      }));
    });

    mapWC.widgets().forEach(function(w){ mapWC.remove(w); });
    mapWC.add(p);
  });
}

/* ============ 3) MAPAS (fijos) ============ */
var mapMB = ui.Map(); // MapBiomas C3 2023
var mapWC = ui.Map(); // WorldCover (2020/2021)
var mapCLS = ui.Map(); // Planet / clasificación por mes

// Capas "placeholder" (evita re-crear widgets)
mapMB.layers().reset([ui.Map.Layer(MBc3, {min:0,max:72,palette:MB_PALETTE}, 'MapBiomas C3 2023'),
                      ui.Map.Layer(ee.Image(), {}, 'Límite ANP')]);

mapWC.layers().reset([ui.Map.Layer(worldcoverByYear(2021), {}, 'WorldCover'),
                      ui.Map.Layer(ee.Image(), {}, 'Límite ANP')]);

// Vincular vistas
ui.Map.Linker([mapMB, mapWC, mapCLS]);

// Grilla horizontal (sin panel izquierdo; solo mapas + sidebar derecho)
var grid = ui.Panel([mapMB, mapWC, mapCLS], ui.Panel.Layout.Flow('horizontal'), {stretch:'both'});


/* ============ 4) ÚNICO SIDEBAR DERECHO (controles + tablas) ============ */
var title = ui.Label('LINKED MAPS', {
  fontWeight:'bold', fontSize:'16px', margin:'0 0 4px 0'
});

var anpSelect = ui.Select({
  items: ANP_CODIGOS.map(function(c){ return ANP[c] + ' (' + c + ')'; }),
  value: ANP[ANP_CODIGOS[0]] + ' (' + ANP_CODIGOS[0] + ')'
});

var infoLabel = ui.Label('', {fontWeight:'bold', margin:'3px 0 4px 0'}); // Código — Nombre

var rightPanel = ui.Panel({
  widgets: [
    //title,
    ui.Label('Código ANP:'), anpSelect,
    ui.Label(''), infoLabel
  ],
  style:{width:'420px', padding:'10px', backgroundColor:'#f9f9f9'}
});

// Layout final
ui.root.widgets().reset([grid, rightPanel]);
ui.root.setLayout(ui.Panel.Layout.Flow('horizontal'));

/* ============ 5) UTILIDADES ============ */
function boundaryLayer(fc){ return ui.Map.Layer(fc.style({color:'black', width:2, fillColor:'00000000'}), {}, 'Límite ANP'); }

function getNamePropForFeature(feat){
  var p = feat.propertyNames();
  var nameProp = ee.Algorithms.If(p.contains(NAME_PROP), NAME_PROP,
                   ee.Algorithms.If(p.contains(NAME_FALLBACKS[0]), NAME_FALLBACKS[0],
                   ee.Algorithms.If(p.contains(NAME_FALLBACKS[1]), NAME_FALLBACKS[1],
                   ee.Algorithms.If(p.contains(NAME_FALLBACKS[2]), NAME_FALLBACKS[2],
                   ee.Algorithms.If(p.contains(NAME_FALLBACKS[3]), NAME_FALLBACKS[3], NAME_PROP)))));
  return ee.String(nameProp);
}

// Inspector (MB + WC)
var currentWCYear = 2021;
var currentWC = worldcoverByYear(currentWCYear);

function addInspector(map, name){
  var panel = ui.Panel({style:{width:'170px', padding:'4px', backgroundColor:'#f0f0f0'}});
  map.onClick(function(coords){
    panel.clear();
    panel.add(ui.Label('Inspector – '+name, {fontWeight:'bold', fontSize:'10px'}));
    var pt = ee.Geometry.Point([coords.lon, coords.lat]);
    var vMB = MBc3.reduceRegion({reducer: ee.Reducer.first(), geometry: pt, scale: 30})
                  .get('classification_2023');
    var vWC = currentWC.reduceRegion({reducer: ee.Reducer.first(), geometry: pt, scale: 10})
                  .get('Map');
    vMB.evaluate(function(val){
      panel.add(ui.Label('MapBiomas 2023: ' + (val!==null ? (MB_CLASSES[val] || ('ID '+val)) : 'Sin datos'), {fontSize:'10px'}));
    });
    vWC.evaluate(function(val){
      panel.add(ui.Label('WorldCover 2021: ' + (val!==null ? (WC_CLASSES[val] || ('ID '+val)) : 'Sin datos'), {fontSize:'10px'}));

    });
  });
  map.add(panel);
}
addInspector(mapMB, 'MB');
addInspector(mapWC, 'WC');

// Tabla "clásica" (aspecto tabla real)
function areaTable(image, classDict, geom, scale, titulo){
  var p = ui.Panel({style:{padding:'4px', margin:'5px 0', width:'100%'}});
  p.add(ui.Label(titulo, {fontWeight:'bold', fontSize:'14px', margin:'0 0 6px 0'}));

  // Encabezado
  var header = ui.Panel({
    layout: ui.Panel.Layout.Flow('horizontal'),
    style: {border:'1px solid #999', backgroundColor:'#eaeaea', padding:'2px 3px', margin:'0'}
  });
  header.add(ui.Label('Clase',      {fontSize:'12px', fontWeight:'bold', width:'140px'}));
  header.add(ui.Label('Área (km²)', {fontSize:'12px', fontWeight:'bold', width:'80px', textAlign:'right'}));
  header.add(ui.Label('Área (%)',   {fontSize:'12px', fontWeight:'bold', width:'80px', textAlign:'right'}));
  p.add(header);

  // Cálculo por grupos
  var areaImg = ee.Image.pixelArea().divide(1e6).rename('area').addBands(image.rename('class'));
  var stats = areaImg.reduceRegion({
    reducer: ee.Reducer.sum().group({groupField:1, groupName:'class'}),
    geometry: geom, scale: scale, maxPixels: 1e13
  });

  stats.get('groups').evaluate(function(groups){
    if(!groups){ p.add(ui.Label('Sin datos.')); return; }
    var total = groups.reduce(function(acc,g){ return acc + (g.sum||0); }, 0);
    groups.sort(function(a,b){ return (b.sum||0) - (a.sum||0); });
    groups.forEach(function(g, i){
      var id = g.class, area = g.sum||0, perc = total>0 ? (100*area/total) : 0;
      var row = ui.Panel({
        layout: ui.Panel.Layout.Flow('horizontal'),
        style: {border:'1px solid #ddd', backgroundColor:(i%2===0?'#ffffff':'#f7f7f7'), padding:'2px 3px', margin:'0'}
      });
      row.add(ui.Label(classDict[id] || ('ID '+id), {fontSize:'12px', width:'150px'}));
      row.add(ui.Label(area.toFixed(2), {fontSize:'12px', width:'80px', textAlign:'right'}));
      row.add(ui.Label(perc.toFixed(2)+'%', {fontSize:'12px', width:'80px', textAlign:'right'}));
      p.add(row);
    });
  });
  return p;
}

/* ====================== HELPERS ===================== */
function toSafeClassAndIdxCLS(imgCodes){
  var clsSafe = imgCodes.remap(VALID_CODES, VALID_CODES, 0).rename('code');
  clsSafe = clsSafe.updateMask(clsSafe.neq(0));
  var idx = clsSafe.remap(VALID_CODES, IDX_LIST, -1).rename('idx')
                   .updateMask(clsSafe.eq(clsSafe));
  return {code: clsSafe, idx: idx};
}

function getSamplesForMonthCLS(m, AOI){
  return samplesAllCLS.filter(ee.Filter.listContains('meses', m))
                      .filterBounds(AOI);
}

function rasterizeClassesCLS(samplesMonth, AOI){
  return ee.Image().byte().paint(samplesMonth, 'clase').rename('clase').clip(AOI);
}

function classPointsForMonthCLS(samplesMonth){
  var hist = ee.Dictionary(samplesMonth.aggregate_histogram('clase')); // {code: nPolygons}
  var ptsList = VALID_CODES.map(function(code){
    code = ee.Number(code);
    var nFeat = ee.Number(hist.get(code, 0));
    var ptsSmart = ee.Algorithms.If(
      nFeat.gte(cfgCLS.minPolygonsForPPF),
      nFeat.multiply(cfgCLS.pointsPerFeat),
      cfgCLS.perClass
    );
    return ee.Number(ptsSmart).min(cfgCLS.perClass).max(0).int();
  });
  return ee.List(ptsList);
}

function buildSNICForMonthCLS(m, AOI){
  var p = utils.getMonthlyPlanet(cfgCLS.year, ee.Number(m).subtract(1), AOI, cfgCLS.blueThr);
  var pExt = p.addBands(utils.loadSlopeElevation(AOI))
              .addBands(utils.loadCanopyHeight(AOI));
  var sn = utils.applySNIC(pExt);
  return {planet: pExt, snic: sn};
}

// Devuelve dict con rgb/disp/codes si se puede entrenar; si no, available:false
function classifyMonthCLS(month, AOI){
  month = ee.Number(month);
  var sm = getSamplesForMonthCLS(month, AOI);
  var hasSamples = sm.size().gt(0);

  return ee.Dictionary(ee.Algorithms.If(hasSamples, (function(){
    var ims = buildSNICForMonthCLS(month, AOI);
    var sn  = ims.snic;
    var classImg = rasterizeClassesCLS(sm, AOI);
    var classPts = classPointsForMonthCLS(sm);

    var stack = classImg.addBands(sn.select(predictorsCLS));
    var trainingAll = stack.stratifiedSample({
      numPoints: 0,
      classBand: 'clase',
      classValues: VALID_CODES,
      classPoints: classPts,
      region: AOI,
      scale: cfgCLS.scale,
      seed: cfgCLS.seed,
      geometries: false,
      dropNulls: true,
      tileScale: 2
    });

    var tbl   = trainingAll.randomColumn('rand', cfgCLS.seed);
    var train = tbl.filter(ee.Filter.lt('rand', cfgCLS.trainSplit));
    var test  = tbl.filter(ee.Filter.gte('rand', cfgCLS.trainSplit));
    var canTrain = train.size().gt(0).and(test.size().gt(0));

    return ee.Dictionary(ee.Algorithms.If(canTrain, (function(){
      var rf = ee.Classifier.smileRandomForest({
        numberOfTrees: cfgCLS.nTrees,
        seed: cfgCLS.seed
      }).train({
        features: train,
        classProperty: 'clase',
        inputProperties: predictorsCLS
      });

      var clsRaw = sn.select(predictorsCLS).classify(rf);
      var safe   = toSafeClassAndIdxCLS(clsRaw);

      return ee.Dictionary({
        available: true,
        rgb: ims.planet.select(['R','G','B']),
        codes: safe.code,
        disp:  safe.idx
      });
    })(), ee.Dictionary({available:false})));

  })(), ee.Dictionary({available:false})));
}

// Leyenda dinámica (Schema) filtrada a clases presentes en las muestras del AOI
function addSchemaLegendForAOI(AOI){
  var present = ee.Dictionary(
      samplesAllCLS.filterBounds(AOI).aggregate_histogram('clase')
    ).keys(); // ee.List

  present.evaluate(function(keys){
    var legend = ui.Panel({
      style:{
        position:'bottom-left',
        padding:'8px 12px',
        backgroundColor:'rgba(255,255,255,0.85)',
        width:'360px'
      }
    });
    legend.add(ui.Label({
      value:'Leyenda (Schema) – clases presentes en el AOI',
      style:{fontWeight:'bold', fontSize:'14px', margin:'0 0 6px 0'}
    }));

    if(!keys || !keys.length){
      legend.add(ui.Label('Sin clases en muestras del AOI.'));
      mapCLS.widgets().reset([legend]);
      return;
    }

    keys.map(function(k){ return parseInt(k,10); })
        .sort(function(a,b){ return a-b; })
        .forEach(function(code){
          var info = CODE2INFO_JS[code] || {name:('code_'+code), color:'#FFFFFF'};
          legend.add(ui.Panel({
            layout: ui.Panel.Layout.Flow('horizontal'),
            widgets:[
              ui.Label('', {backgroundColor:info.color, padding:'6px', margin:'0 6px 4px 0', border:'1px solid #999'}),
              ui.Label(code+' – '+info.name, {fontSize:'12px', margin:'0 0 4px 0'})
            ]
          }));
        });

    mapCLS.widgets().reset([legend]);
  });
}

// ---------------- mapCLS ---------------- //
var MONTHS_CLS = ee.List.sequence(1, 12);

function addLayersForMonthCLS(m, AOI){
  var mm  = (m < 10 ? '0' + m : '' + m);
  var res = classifyMonthCLS(ee.Number(m), AOI);

  res.get('available').evaluate(function(ok){
    if (!ok){
      print('Mes', m, '— sin modelo disponible (RN02 o sin muestras suficientes)');
      return;
    }
    var rgb  = ee.Image(res.get('rgb'));
    var disp = ee.Image(res.get('disp'));

    if (cfgCLS.doExport){
      var codes = ee.Image(res.get('codes'));
      var outName = cfgCLS.code + '_m' + mm;
      Export.image.toDrive({
        image: codes.toInt16(),
        description: outName,
        fileNamePrefix: outName,
        region: AOI,
        scale: cfgCLS.scale,
        maxPixels: 1e13
      });
    }

    mapCLS.addLayer(rgb,  {min:0, max:60},                                 'RGB m' + mm,   false);
    mapCLS.addLayer(disp, {min:0, max:K_JS - 1, palette: PALETTE_JS},      'Clasif m' + mm, false, 0.9);
  });
}


function populateCLS(AOI, cod){
  mapCLS.layers().reset([ui.Map.Layer(ee.Image(), {}, 'Clasificación mensual')]);
  if (cod !== 'RN02'){
    mapCLS.add(ui.Label('Sin modelo de muestras para ' + cod + '. (Implementado BP05)'));
    return;
  }
  MONTHS_CLS.getInfo().forEach(function(m){ addLayersForMonthCLS(m, AOI); });
  addSchemaLegendForAOI(AOI);
}

/* ============ 6) ACTUALIZACIÓN PRINCIPAL ============ */
function updateView(){
  var v3Row = ui.Panel({
    layout: ui.Panel.Layout.Flow('horizontal'),
    style: {padding: '0', margin: '4px 0'}
  });
  
  // var runButton = ui.Button({
  //     label: 'EJECUTAR',
  //     style: {
  //       stretch: 'horizontal',
  //       backgroundColor: '#4CAF50',
  //       color: 'red',
  //       fontWeight: 'bold',
  //       margin: '6px 0 10px 0'
  //     },
  //     onClick: function() {
  //       updateView(); // 🔁 vuelve a ejecutar toda la vista
  //     }
  //   });

  
  function col(labelText, widget, rightPad){
    return ui.Panel(
      [ui.Label(labelText, {fontSize: '11px', margin: '0 0 2px 0'}), widget],
      ui.Panel.Layout.Flow('vertical'),
      {padding: '0 ' + (rightPad || '2px') + ' 0 0'}
    );
  }

  // --- Reconstruir el sidebar (un solo panel derecho) ---
  rightPanel.clear();
  //rightPanel.add(title);
  rightPanel.add(ui.Label('Código ANP:'));
  rightPanel.add(anpSelect);
  rightPanel.add(infoLabel);
  rightPanel.add(v3Row);
  // rightPanel.add(runButton);

  var cod = anpSelect.getValue().match(/\(([^)]+)\)$/)[1];

  // WorldCover fijo 2021
  currentWC = worldcoverByYear(2021);

  // --- Geometría ANP ---
  var area = fc_codigos.filter(ee.Filter.eq('CODIGO', cod));
  var area_anp = fc_codigos_anp.filter(ee.Filter.eq('codigo', cod));
  var geom = area.geometry();
  var geom_anp = area_anp.geometry();

  // --- Código — Nombre (lado cliente, sin .find) ---
  var firstFeat = ee.Feature(area.first());
  firstFeat.propertyNames().evaluate(function(props){
    props = props || [];
    var candidates = [NAME_PROP].concat(NAME_FALLBACKS);
    var chosen = NAME_PROP;  // por defecto
    for (var i = 0; i < candidates.length; i++){
      if (props.indexOf(candidates[i]) >= 0){
        chosen = candidates[i];
        break;
      }
    }
    firstFeat.get(chosen).evaluate(function(nm){
      infoLabel.setValue('ANP: ' + cod + (nm ? (' — ' + nm) : ''));
    });
  });

  // --- MapBiomas (clip + borde) ---
  var MB_clip = MBc3.clip(area);
  mapMB.layers().set(0, ui.Map.Layer(MB_clip, {min:0, max:72, palette:MB_PALETTE}, 'MapBiomas C3 2023'));
  mapMB.layers().set(1, boundaryLayer(area));
  mapMB.layers().set(2, boundaryLayer(area_anp));

  // --- WorldCover (2021 fijo) ---
  var WC_clip = currentWC.clip(area);
  mapWC.layers().set(0, ui.Map.Layer(WC_clip, {}, 'WorldCover 2021'));
  mapWC.layers().set(1, boundaryLayer(area));
  mapWC.layers().set(2, boundaryLayer(area_anp));

  // --- Vista 3 (Planet o Sentinel-2) + RGB/NDVI ---
  var v3Layer;
  populateCLS(geom, cod); // ← añade capas RGB mXX y Clasif mXX en mapCLS
  // mapV3.layers().set(0, v3Layer);
  mapCLS.layers().set(1, boundaryLayer(area));
  mapCLS.layers().set(2, boundaryLayer(area_anp));
  
  // === Leyendas dinámicas (sólo clases visibles) ===
  Legend_MB_dynamic(MB_clip, geom);
  Legend_WC_dynamic(WC_clip, geom);

  // --- Centro y zoom sincronizados ---
  geom.centroid().coordinates().evaluate(function(c){
    [mapMB, mapWC, mapCLS].forEach(function(m){ m.setCenter(c[0], c[1], 12); });
  });

  // --- Tablas compactas ---
  rightPanel.add(areaTable(MB_clip, MB_CLASSES, geom, 30, 'MAPBIOMAS C3 (2023) – Tabla de áreas'));
  rightPanel.add(areaTable(WC_clip, WC_CLASSES, geom, 10, 'WorldCover (2021) – Tabla de áreas'));
}

/* ============ 7) EVENTOS ============ */
anpSelect.onChange(updateView);

// Inicializar
updateView();

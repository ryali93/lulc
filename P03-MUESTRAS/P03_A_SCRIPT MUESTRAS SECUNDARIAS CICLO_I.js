/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var remap_8_17 = 
    /* color: #d63617 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-69.98807229272921, -15.823283718971549]),
            {
              "original": "8,",
              "new": "17,",
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-69.94962014429171, -15.84888137941376],
                  [-69.89812173120578, -15.810235922068829],
                  [-69.91425790063937, -15.783477049119334],
                  [-69.95030678979953, -15.786120058090603],
                  [-69.99013222925265, -15.803959466846539],
                  [-69.98669900171359, -15.830055028531277]]]),
            {
              "original": "8,",
              "new": "17,",
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Polygon(
                [[[-69.98633443032492, -15.729075090368509],
                  [-69.94256077920187, -15.722796124387653],
                  [-69.91663991128195, -15.704123318126186],
                  [-69.92436467324484, -15.694703642560745],
                  [-69.94530736123312, -15.677681020059994],
                  [-69.94702397500265, -15.693216285580323],
                  [-70.00092564736593, -15.709411366223367],
                  [-70.0017839542507, -15.718665120065369]]]),
            {
              "original": "8,",
              "new": "17,",
              "system:index": "2"
            })]),
    remap_5_to_17 = 
    /* color: #d6950d */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-72.63309769230776, -13.00125241667449],
                  [-72.62829117375307, -13.007273734672088],
                  [-72.62245468693666, -13.007942760983314],
                  [-72.6106100519269, -13.010618848180519],
                  [-72.59773544865541, -13.01546918261025],
                  [-72.57885269719057, -13.019817677616597],
                  [-72.53439240055971, -13.011455119507149],
                  [-72.51962952214174, -13.015803684934918],
                  [-72.49044708805971, -13.030019616309149],
                  [-72.48581223088198, -13.022995375708863],
                  [-72.49130539494448, -13.011956880949276],
                  [-72.50177673893862, -13.000583372321172],
                  [-72.51362137394838, -12.989711148836534],
                  [-72.53181747990541, -12.985362126162057],
                  [-72.5505285699933, -12.992220165742452],
                  [-72.57816605168276, -12.999914326164099],
                  [-72.62674622136049, -12.996736332288489]]]),
            {
              "original": "5,",
              "new": "17,",
              "system:index": "0"
            })]),
    remap_9_to_7 = 
    /* color: #98ff00 */
    /* shown: false */
    ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Polygon(
                [[[-80.3086773558884, -3.4911719906355083],
                  [-80.27640501702122, -3.492200046911969],
                  [-80.21804014885716, -3.4617005668013627],
                  [-80.21426359856419, -3.423317803977981],
                  [-80.31588713372044, -3.382191708775904],
                  [-80.35021940911106, -3.4596443866409166]]]),
            {
              "original": "9,",
              "new": "7,",
              "system:index": "0"
            })]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// PASO CLASIFICACION 2023

// Parametros de entrada
var region = 114, // 101 - 114
    version_out = '1',
    year = 2023,
    months = [1,2,3,4,5,6,7,8,9,10,11,12],
    n_samples = 200, //400
    exclusion = {
      classes: [ ],
      polygons: [remap_9_to_7],
      },
    tileScale = 15,
    cloud_Blue_thr = 1600,  //NO ENMASCAR : 10000, ENMASCAR: 1600
    center_ANP = true;
//---------------------------------

var palette_1_17 = ["ff9595","b40b0b","ffbd08","4dbb3f","139b01","17ff7e","0f5e00","ffec13","ceb747","ff91fc","70ff41","1af320","00ea67","13f5ff","0021ff","3b8aff","d4d4d4"];

var area_trabajo = ee.FeatureCollection("projects/ee-eturpocayo/assets/sernanp/AUXILIAR_DATA/limite_anp_y_za_v2")
                      .filter(ee.Filter.eq('Codigo_uni', region));
                      
print(area_trabajo.first().get('anp_nomb'))

if(center_ANP){Map.centerObject(area_trabajo, 10)}

var styling = {color: 'black', fillColor: '00000000'};
Map.addLayer(area_trabajo.style(styling),{},'area_trabajo');

var area_trabajo_raster = ee.Image("projects/ee-eturpocayo/assets/sernanp/AUXILIAR_DATA/limite_anp_y_za_v2_raster").eq(region);

var mosaic_coll = ee.ImageCollection('projects/ee-anp-lineabase/assets/mosaics')
                    .filterBounds(area_trabajo.geometry().bounds())
                    .map(function(image){
                        var Mapbiomas = ee.Image('projects/mapbiomas-public/assets/peru/collection2/mapbiomas_peru_collection2_integration_v1')
                                          .select('classification_2021')
                        image = image.updateMask(image.select('B').lte(cloud_Blue_thr).or(Mapbiomas.eq(34)))
                        
                        var ndvi = image.normalizedDifference(['N', 'R']).rename('NDVI');
                        var ndwi = image.normalizedDifference(['G', 'N']).rename('NDWI');
                        
                        return image.addBands(ndvi)
                                    .addBands(ndwi)
                    })


// Mostrar en el visor del mapa la imagen solicitada

// Combinacion de bandas para color natural
var RGB = {bands: ['R', 'N', 'B'], gain: [0.2, 0.06, 0.2]}; // ANDES
// var RGB = {bands: ['R', 'G', 'B'], min:630, max:2950}; //COSTA

months.forEach(function(month){
  var mosaic_month = mosaic_coll.filter(ee.Filter.eq('month', month)).first()
  
  Map.addLayer(mosaic_month, RGB, "Imagen_Planet_"+month, false);
  
})

var tillandsia = ee.Image('users/gistin/fog_oasis/tillandsia')
Map.addLayer(tillandsia,{palette:'#b30adb'},'tillandsia', false)

var fo_class2021 = ee.Image('users/gistin/fog_oasis/fo_class2021')
Map.addLayer(fo_class2021,{"min":1,"max":6,"palette":["ff0000","ffa906","ffee06","89ff0c","27ff02","30df2f"]},'fo_class2021', false)


// Geometrias_colectadas_assets
  var folder = 'projects/ee-anp-lineabase/assets/AUXILIAR-DATA/geometry';
  var list = ee.List([]);
  
  function list_folder_to_featColl(e) {
    var path = e.id;
    var fc = ee.FeatureCollection(path)
              // .aggregate_sum('system:asset_size')
              // .divide(ee.Number(1024).pow(4))
    return fc; 
  }
  
  // Function to recursively concatenate asset lists from multiple pages
  function listAssetsRecursive(folder, pageToken) {
    var options = {};
    if (pageToken !== undefined) {
      options.pageToken = pageToken;
    }
  
    var result = ee.data.listAssets(folder, options);
    var assets = result['assets'];
    list = list.cat(assets.map(list_folder_to_featColl));
  
    if (result.nextPageToken !== null) {
      // Call the function recursively for the next page
      listAssetsRecursive(folder, result.nextPageToken);
    }
  }
  
  // Start listing assets
  listAssetsRecursive(folder);
  
  // Print the final concatenated asset list
  // print('Final Asset List:', list);
  
  var geometry_draw = ee.FeatureCollection(list).flatten();
  
  print(geometry_draw)

// GEOMETRIAS CLASE COLL
  var Samples_Collect_raster = geometry_draw
                              .reduceToImage(['clase'], ee.Reducer.first())
                              .updateMask(area_trabajo_raster)
                              .rename('clase');
  Map.addLayer(Samples_Collect_raster, {min: 1, max: 17, 
  palette: palette_1_17}, 'Samples_Collect_raster');
  
  
// Mapas referencia remap

    // Mapeo de clases Mapbiomas
    //   3: 'Bosque',
    //   4: 'Bosque seco',
    //   5: 'Manglar',
    //   6: 'Bosque inundable',
    //   9: 'Plantación forestal',
    //   11: 'Zona pantanosa o pastizal inundable',
    //   12: 'Pastizal / herbazal',
    //   13: 'Matorral y otras formaciones no boscosas',
    //   15: 'Pasto',
    //   18: 'Agricultura',
    //   21: 'Mosaico agropecuario',
    //   24: 'Infraestructura',
    //   25: 'Otra área sin vegetación',
    //   27: 'No observado',
    //   30: 'Minería',
    //   31: 'Acuicultura',
    //   32: 'Salina',
    //   33: 'Río, lago u océano',
    //   34: 'Glaciar',
    //   35: 'Palma aceitera'
      
  var remap_MB = {
      from: [3, 4, 5, 6, 9, 11, 12, 13, 15, 18, 21, 24, 25, 30, 31, 32, 33, 34],
      to:   [5, 4, 6, 5, 7, 11,  8,  9,  8,  3,  3,  1, 10,  2, 15, 10, 15, 14]
    }

  // Mapeo de clases WorldCover
  //   10: 'Bosque',
  //   20: 'Matorrales',
  //   30: 'Pastizales',
  //   40: 'Tierras de cultivo',
  //   50: 'Construcciones',
  //   60: 'Escasa vegetación',
  //   70: 'Nieve y hielo',
  //   80: 'Cuerpos de agua permanentes',
  //   90: 'Humedales herbáceos',
  //   95: 'Manglares',
  //   100: 'Musgo y líquenes'

  var remap_WC = {
      from: [10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 100],
      to:   [ 5,  9,  8,  3,  1, 10, 14, 15, 11,  6,  17]
    }
    
  var Mapbiomas = ee.Image('projects/mapbiomas-public/assets/peru/collection2/mapbiomas_peru_collection2_integration_v1')
                    .select('classification_2021')
                    .remap(remap_MB.from, remap_MB.to)
                    .updateMask(area_trabajo_raster);
                    
  var WorldCover = ee.ImageCollection('ESA/WorldCover/v200').first()
                     .remap(remap_WC.from, remap_WC.to)
                     .updateMask(area_trabajo_raster);
  
var updtReference = ee.Image(WorldCover.updateMask(Mapbiomas.eq(WorldCover))).updateMask(area_trabajo_raster)

Map.addLayer(Mapbiomas,{min: 1, max: 17, palette: palette_1_17},'Mapbiomas', false)
Map.addLayer(WorldCover,{min: 1, max: 17, palette: palette_1_17},'WorldCover', false)

// ACTUALIZAR REFERENCIAS
updtReference = updtReference.blend(ee.Image(Samples_Collect_raster)).rename('clase');
updtReference = ee.Image(updtReference).byte(),

Map.addLayer(updtReference.selfMask(),{min: 1, max: 17, palette: palette_1_17},'updtReference', false)



// Exclusión de clases en areas delimitadas con geometrías
var polygons = exclusion.polygons;
var updtReference_remap = remapWithPolygons(updtReference, polygons).rename('clase');

Map.addLayer(updtReference_remap.selfMask(),{min: 1, max: 17, palette: palette_1_17},'updtReference_remap')

var training = getSamples(updtReference_remap, mosaic_coll);
var points = training.points;
var data = training.data;

print('points',points)
print(data)
Map.addLayer(points,{},'points')


// Exportar muestras
var filename = 'samples-' + region + '-'  +   year + '-' + version_out;

// Export.table.toAsset(
//   points,
//   filename,
//   'projects/ee-anp-lineabase/assets/training_data/samples/' + filename
// );

  exportSamples(data, 'projects/ee-anp-lineabase/assets/training_data/samples/', region, version_out);

/**
 * Función para exportar las muestras de entrenamiento como assets de GEE
 */
function exportSamples(samples, outputDir, regionId, version) {
  
  // var list_months = ee.List(months);
  
  months.forEach( function(month) {
  
    var samplemonth = samples.get('samples-' + month),
        monthInt = parseInt(month, 10);
    
    var collection = ee.FeatureCollection(samplemonth)
      .map( function(feature) {
        return feature.set('month', monthInt);
      });

    // Exportar muestras
    var filename = 'samples-' + region +  '-'  +  year  + '-month'  +   month + '-' + version;

    Export.table.toAsset(
      collection,
      filename,
      outputDir + filename
    );
      
  });
}

/**
 * Función para implementar la colecta de puntos todos los años de la lista param.year
 * definida en los parámetros de usuario.
 */
function getSamples(referencePixels, mosaic_coll) {
  
  var list_months = ee.List(months);
  
  var keys = list_months.map( function(month) {
    var stringMonth = ee.String(month);
    return ee.String('samples-').cat(stringMonth);
  });
  
  var points = referencePixels
    .addBands(ee.Image.pixelLonLat())
    .stratifiedSample({
        numPoints:n_samples,
        classBand: 'clase',
        region: area_trabajo.geometry().bounds(),
        scale: 4.7,
        seed: 1,
        geometries: true,
        dropNulls: true,
        // classValues: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17], 
        // classPoints: [406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406,406],
        tileScale: tileScale
    });

  var monthMosaic;
  
  var trainingSamples = list_months.map( function(month) {
    monthMosaic = mosaic_coll
      .filterMetadata('month', 'equals', month)
      .mosaic();
    
    var training = referencePixels
      .addBands(monthMosaic)
      .sampleRegions({
        collection: points,
        properties: ['clase'],
        scale: 4.7,
        geometries: true,
        tileScale: tileScale
      });
    
    return training;
    
  });
  
  return {
    data: ee.Dictionary.fromLists(keys, trainingSamples),
    points: points
  };

}


/**
 * Función para remapear, de manera interactiva, zonas delimitadas por polígonos
 * Estos polígonos se dibujan con las herramientas de dibujo de GEE
 * y se definen como ee.FeatureCollection()
 */
function remapWithPolygons(referencePixels, polygons) {
  
  if(polygons.length > 0) {
    polygons.forEach(function( polygon ) {
      
      var excluded = polygon.map(function( layer ){
        
        var area = referencePixels.clip( layer );
        var from = ee.String(layer.get('original')).split(',');
        var to = ee.String(layer.get('new')).split(',');
        
        from = from.map( function( item ){
          return ee.Number.parse( item );
        });
        to = to.map(function(item){
          return ee.Number.parse( item );
        });
        
        return area.remap(from, to);
      });
        
      excluded = ee.ImageCollection( excluded ).mosaic();
      referencePixels = excluded.unmask( referencePixels ).rename('reference');
      referencePixels = referencePixels.mask( referencePixels.neq(17) );
    });
  } else referencePixels = referencePixels;
  
  return referencePixels;
  
}











function Legend() {
  
  var legendColors = [
          {color: "ff9595", label:'c1_area_urbana'},
          {color: "b40b0b", label:'c2_mineria'},
          {color: "ffbd08", label:'c3_agricultura'},
          {color: "4dbb3f", label:'c4_bosque_seco'},
          {color: "139b01", label:'c5_bosque'},
          {color: "17ff7e", label:'c6_manglar'},
          {color: "0f5e00", label:'c7_bosque_plantado'},
          {color: "ffec13", label:'c8_pastizales'},
          {color: "ceb747", label:'c9_arbustal_matorral'},
          {color: "ff91fc", label:'c10_poca_vegetacion'},
          {color: "70ff41", label:'c11_totoral'},
          {color: "1af320", label:'c12_bofedal'},
          {color: "00ea67", label:'c13_areas_humedas_costeras'},
          {color: "13f5ff", label:'c14_glaciar'},
          {color: "0021ff", label:'c15_Agua'},
          {color: "3b8aff", label:'c16_aguas_maritima'},
          {color: "d4d4d4", label:'c17_sin_dato'},
  ];

  // Crear un panel para la leyenda
  var legendPanel = ui.Panel({
    style: {
      position: 'bottom-left',
      padding: '8px 15px'
    }
  });

  // Crear un título para la leyenda
  var legendTitle = ui.Label({
    value: 'Leyenda general',
    style: {fontWeight: 'bold', fontSize: '16px', margin: '0 0 4px 0'}
  });

  legendPanel.add(legendTitle);

  // Crear un panel de cuadrícula para organizar en columnas
  var gridPanel = ui.Panel({
    layout: ui.Panel.Layout.Flow('horizontal'),
    style: {stretch: 'horizontal'}
  });

  // Número de columnas deseadas
  var columns = 2;

  // Crear un array de columnas como paneles
  var columnPanels = [];
  for (var i = 0; i < columns; i++) {
    columnPanels.push(ui.Panel({
      layout: ui.Panel.Layout.Flow('vertical'),
      style: {padding: '0 10px'}
    }));
  }

  // Añadir elementos a las columnas alternando entre ellas
  legendColors.forEach(function(item, index) {
    var colorBox = ui.Label('', {
      backgroundColor: item.color,
      padding: '6px',
      margin: '0 0 4px 0'
    });

    var description = ui.Label(item.label, {
      margin: '0 0 4px 6px'
    });

    var legendItem = ui.Panel({
      widgets: [colorBox, description],
      layout: ui.Panel.Layout.Flow('horizontal')
    });

    // Añadir a la columna correspondiente
    columnPanels[index % columns].add(legendItem);
  });

  // Añadir todas las columnas al panel de cuadrícula
  columnPanels.forEach(function(panel) {
    gridPanel.add(panel);
  });

  // Añadir el panel de cuadrícula a la leyenda
  legendPanel.add(gridPanel);

  return legendPanel;
}

var legend_MB = Legend();
Map.add(legend_MB);  // Añadir la leyenda al mapa



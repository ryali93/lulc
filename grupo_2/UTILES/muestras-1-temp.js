// PASO CLASIFICACION 2023

// Parametros de entrada
var region = 107, // 101 - 114
    version_out = '1',
    year = 2023,
    monthI = 6,
    months = [1,2,3,4,5,6,7,8,9,10,11,12],
    muestras_x_clase = 5000,
    min_muestras_x_clase = 200,
    tileScale = 15;
//---------------------------------

var palette_1_17 = ["ff9595","b40b0b","ffbd08","4dbb3f","139b01","17ff7e","0f5e00","ffec13","ceb747","ff91fc","70ff41","1af320","00ea67","13f5ff","0021ff","3b8aff","d4d4d4"];

var area_trabajo = ee.FeatureCollection("projects/ee-eturpocayo/assets/sernanp/AUXILIAR_DATA/limite_anp_y_za_v2")
                      .filter(ee.Filter.eq('Codigo_uni', region));

var area_trabajo_raster = ee.Image("projects/ee-eturpocayo/assets/sernanp/AUXILIAR_DATA/limite_anp_y_za_v2_raster").eq(region);

var mosaic_coll = ee.ImageCollection('projects/ee-anp-lineabase/assets/mosaics')
                    .filterBounds(area_trabajo.geometry().bounds())
    
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
      to:   [7, 4, 6, 5, 7, 12,  8,  9,  8,  3,  3,  1, 10,  2, 15, 10, 15, 14]
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
      to:   [ 7,  9,  8,  3,  1, 10, 14, 15, 12,  6,  17]
    }
    
  var Mapbiomas = ee.Image('projects/mapbiomas-public/assets/peru/collection2/mapbiomas_peru_collection2_integration_v1')
                    .select('classification_2021')
                    .remap(remap_MB.from, remap_MB.to);
                    
  var WorldCover = ee.ImageCollection('ESA/WorldCover/v200').first()
                     .remap(remap_WC.from, remap_WC.to);
  
var updtReference = ee.Image(WorldCover.updateMask(Mapbiomas.eq(WorldCover))).updateMask(area_trabajo_raster)
  

var Samples_Collect = ee.FeatureCollection([
                  c1_area_urbana,
                  c2_mineria,
                  c3_agricultura,
                  c4_bosque_seco,
                  c5_bosque,
                  c6_manglar,
                  c7_bosque_plantado,
                  c8_pastizales,
                  c9_arbustal_matorral,
                  c10_poca_vegetacion,
                  c11_totoral,
                  c12_bofedal,
                  c13_areas_humedas_costeras,
                  c14_glaciar,
                  c15_Agua,
                  c16_aguas_maritima,
                  c17_sin_dato,
                  ]).flatten();
print(Samples_Collect)

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
  var Samples_Collect_merge = Samples_Collect.merge(geometry_draw)
                                    .filterBounds(area_trabajo.geometry().bounds())
  var Samples_Collect_raster = Samples_Collect_merge
                              .reduceToImage(['clase'], ee.Reducer.first())
                              .updateMask(area_trabajo_raster)
                              .rename('clase');
  Map.addLayer(Samples_Collect_raster, {min: 1, max: 17, 
  palette: palette_1_17}, 'Samples_Collect_raster');



// Función para generar el mosaico Planet para un mes y año determinado
function getPlanetMosaic(year, month) {
  var startDate = ee.Date.fromYMD(year, month, 1);
  var endDate = startDate.advance(1, 'month');
  var collection = ee.ImageCollection('projects/ee-anp-lineabase/assets/mosaics')
    .filterBounds(area_trabajo.geometry().bounds())
    .filter(ee.Filter.eq('month', month))
    // .filterDate(startDate, endDate)
    .mosaic();
  return collection;
}

// Function for stretch visualization
function visual(image, geometry, bands, scale, stretch, name, show){
  typeof scale == 'undefined' ? scale = 100 : null;
  typeof stretch == 'undefined' ? stretch = [2, 98] : null;
  typeof name == 'undefined' ? name = 'Layer ' + Map.layers().length() : null;
  typeof show == 'undefined' ? show = true : null;
  
  var minMax = image.select(bands).reduceRegion({
    reducer: ee.Reducer.percentile(stretch),
    scale: scale,
    geometry: geometry,
    bestEffort: true
  });
  
  var scaled = ee.Image(bands.map(function(band){
    var imageBand = image.select(band);
    var min = ee.Number(minMax.get(band + '_p' + Math.round(stretch[0])));
    var max = ee.Number(minMax.get(band + '_p' + Math.round(stretch[1])));
    
    return imageBand.unitScale(min, max).rename(band);
  }));
  Map.addLayer(scaled, { min: 0, max: 1, bands: bands}, name, show);
}


// Combinacion de bandas para color natural
var RGB = {bands: ["R", "G", "B"], min: 0, max: 1500};

// Se calcula la mediana de los pixeles dentro de la imagen y se recorta segun la forma del ANP
var Planet_mosaic = getPlanetMosaic(year, monthI);
var NICFIAmerica_CLIP = Planet_mosaic.clip(area_trabajo);

// Calcular NDVI y añadirlo como banda
var ndvi = NICFIAmerica_CLIP.normalizedDifference(['N', 'R']).rename('NDVI');
var ndwi = NICFIAmerica_CLIP.normalizedDifference(['G', 'N']).rename('NDWI');

var imagenConNDVI = NICFIAmerica_CLIP.addBands(ndvi)
                                     .addBands(ndwi);

// Mostrar en el visor del mapa la imagen solicitada
Map.addLayer(NICFIAmerica_CLIP, RGB, "Imagen_Planet_RGB");
visual(Planet_mosaic, area_trabajo.geometry().bounds(), ['R', 'N', 'B'], 5, [2, 98],'Planet-' + year + '-Mes' + monthI +'s', true);

// Segmentación usando SNIC
var snic = ee.Algorithms.Image.Segmentation.SNIC({
  image: imagenConNDVI,
  size: 15,
  compactness: 0,
  connectivity: 8,
  neighborhoodSize: 256 
}).select(['clusters'], ['segments']);

Map.addLayer(snic.randomVisualizer(),{},'snic', false)

// Reproyecta la imagen a una resolución fija (por ejemplo, 30 metros)
var fixedResolutionSegments = snic.reproject({
  crs: imagenConNDVI.projection(),
  scale: 4.7  // Ajusta según la resolución de tu imagen
});

// Muestra la imagen con resolución fija en el mapa
Map.addLayer(fixedResolutionSegments.randomVisualizer(), {}, 'SNIC Segments (Fixed Resolution)',false);

// Añadir segmentación como banda
var imagenSegmentada = imagenConNDVI//.addBands(fixedResolutionSegments);

// Definir bandas para el clasificador, incluyendo NDVI y segmentos
var bandas = ['R', 'G', 'B', 'N', 'NDVI']; //, 'segments'

// Muestreo de regiones y entrenamiento del clasificador
var entrenamiento = imagenSegmentada.sampleRegions({
  collection: Samples_Collect,
  properties: ['clase'],
  scale: 5
}).filter(ee.Filter.notNull(bandas));

// Verificar la cantidad de muestras
print('Cantidad de muestras de entrenamiento:', entrenamiento.size());

// Entrenar el clasificador Random Forest
var clasificador = ee.Classifier.smileRandomForest(50).train({
  features: entrenamiento,
  classProperty: 'clase',
  inputProperties: bandas
});

// Clasificar la imagen usando el clasificador entrenado
var imagenClasificada = imagenSegmentada.classify(clasificador);

// Añadir la imagen clasificada al mapa

Map.addLayer(imagenClasificada, {min: 1, max: 17, 
palette: palette_1_17}, 'Clasificado');

Map.addLayer(Samples_Collect,{},'Samples_Collect')
// Mostrar Limite de ANP seleccionado
var styling = {color: 'black', fillColor: '00000000'};
Map.addLayer(area_trabajo.style(styling),{},'area_trabajo');


// ACTUALIZAR REFERENCIAS
updtReference = updtReference.blend(ee.Image(Samples_Collect_raster)).rename('clase');
updtReference = ee.Image(updtReference).byte(),

Map.addLayer(updtReference.selfMask(),{min: 1, max: 17, 

palette: palette_1_17},'updtReference')


// AREA CLASE
  var classAreas = getAreas(updtReference, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17], area_trabajo);
  
  print('Capa de áreas por clase', classAreas);
  
  var classAreasDictionary = classAreas.first().toDictionary();
  
  print(classAreasDictionary)

  var classNames = classAreasDictionary.keys()
    .filter(ee.Filter.stringContains('item', 'ID'))
    .filter(ee.Filter.notEquals('item', 'ORIG_FID'));
  
  print(classNames)
  
  // Generar muestras de entrenamiento con base en el área de cada clase de cobertura
  var classIds = classNames.map(
    function(name) {
      var classId = ee.String(name).split('D').get(1);
      return ee.Number.parse(classId);
    }
  );
  print(classIds)
  // Calcular áreas de cada clase y total 
  var areas = classNames.map( function(name) {
    return classAreasDictionary.get(name);
  });
  
  var totalArea = areas.reduce(ee.Reducer.sum());


  // Calcular numero ponderado de muestras y generar puntos de entrenamiento
  var pointsPerClass = areas.map(
    function(area) {
      return getPointsByArea(
        area, totalArea, muestras_x_clase, min_muestras_x_clase);
    });
  print(pointsPerClass)
  
  var training = getSamples(updtReference, mosaic_coll, classIds, pointsPerClass);
  var points = training.points;
  var data = training.data;
  print('points',points)
  Map.addLayer(points,{},'points')

// Exportar muestras
var filename = 'samples-' + region + '-'  +   year + '-' + version_out;

Export.table.toAsset(
  points,
  filename,
  'projects/ee-anp-lineabase/assets/training_data/samples/' + filename
);





/**
 * Función para calcular numero de muestras de entrenamiento con base en el área
 * que ocupa cada clase
 */
function getPointsByArea(singleArea, totalArea, sampleSize, minSamples) {
  return ee.Number(singleArea)
    .divide(totalArea)
    .multiply(sampleSize)
    .round()
    .int16()
    .max(minSamples);
}


/**
 * Función para calcular áreas (en Km2) por clase, con base en la imágen
 * de pixeles estables.
 */
function getAreas(image, classes, region){
  
  var reducer = {
      reducer: ee.Reducer.sum(),
      geometry: region.geometry(), 
      scale: 10,
      maxPixels: 1e13
  };
  
  var propFilter = ee.Filter.neq('item', 'OBJECTID');
  
  classes.forEach( function( classId, i ) {
      var imageArea = ee.Image.pixelArea()
        .divide(10000)  //has
        .mask(image.eq(classId))
        .reduceRegion(reducer);
      
      var area = ee.Number(imageArea.get('area')).round();
          
      region = region.map(function(item){
        var props = item.propertyNames();
        var selectProperties = props.filter(propFilter);
        
        return item
          .select(selectProperties)
          .set('ID' + classId.toString(), area);
      });
      
      return region;
  });
  
  return region;
  
}


/**
 * Función para implementar la colecta de puntos todos los años de la lista param.year
 * definida en los parámetros de usuario.
 */
function getSamples(referencePixels, mosaic_coll, classIds, pointsPerClass) {
  
  var list_months = ee.List(months);
  
  var keys = list_months.map( function(month) {
    var stringMonth = ee.String(month);
    return ee.String('samples-').cat(stringMonth);
  });
  
  var points = referencePixels
    .addBands(ee.Image.pixelLonLat())
    .stratifiedSample({
        numPoints: 0,
        classBand: 'clase',
        region: area_trabajo.geometry().bounds(),
        scale: 4.7,
        seed: 1,
        geometries: true,
        dropNulls: true,
        classValues: classIds, 
        classPoints: pointsPerClass,
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



// // Validación
// var muestras_validadas = Manglar_V.merge(BosqueSeco_V).merge(Suelo_V).merge(Agua_V);

// var validacion = imagenClasificada.sampleRegions({
//   collection: muestras_validadas,
//   properties: ['Class'],
//   scale: 5
// });

// var matrizConfusion = validacion.errorMatrix('Class', 'classification');

// print('Matriz de Confusión', matrizConfusion);
// print('Exactitud General', matrizConfusion.accuracy());
// print('Kappa', matrizConfusion.kappa());

// Exportar la imagen resultante
// Export.image.toDrive({
//   image: imagenClasificada,
//   description: 'imagenClasificada',
//   scale: 5,  // Ajusta esta escala según la resolución espacial de tus imágenes
//   region: area_trabajo,
//   maxPixels: 1e13,
//   fileFormat: 'GeoTIFF'
// });


// // Exportar imagen color natural
// Export.image.toDrive({
//   image: NICFIAmerica_CLIP.select("R","G","B"),
//   description: "Imagen_Planet", 
//   scale: 4.7,
//   maxPixels: 1e13,
//   region: LimiteSelect
// });



//palette
var palettes = require('users/mapbiomas/modules:Palettes.js');
var mapbiomasPalette = palettes.get('classification8');

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
    value: 'Leyenda Mapbiomas col2',
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



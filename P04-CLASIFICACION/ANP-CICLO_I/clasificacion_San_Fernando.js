/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var c1_area_urbana = /* color: #ff0000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-69.99373763967839, -15.812429788845785]),
            {
              "clase": 1,
              "system:index": "0"
            })]),
    c2_mineria = /* color: #b40b0b */ee.FeatureCollection([]),
    c3_agricultura = /* color: #ffbd08 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-70.02674254616082, -15.781012495495412]),
            {
              "clase": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-77.68739808620954, -7.595112829488631]),
            {
              "clase": 3,
              "system:index": "1"
            })]),
    c4_bosque_seco = /* color: #5bdd4a */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-77.69562114248811, -7.588973014577623]),
            {
              "clase": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.183452097976, -14.877545868227934]),
            {
              "clase": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.18277618130425, -14.878012480412547]),
            {
              "clase": 4,
              "system:index": "2"
            })]),
    c5_bosque = /* color: #139b01 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-74.92471500620302, -11.298996766488536]),
            {
              "clase": 5,
              "system:index": "0"
            })]),
    c6_manglar = /* color: #17ff7e */ee.FeatureCollection([]),
    c7_bosque_plantado = /* color: #0f5e00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-70.01386794288933, -15.802486206646622]),
            {
              "clase": 7,
              "system:index": "0"
            })]),
    c8_pastizales = /* color: #ffec13 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-70.01039086106388, -15.798535372037525]),
            {
              "clase": 8,
              "system:index": "0"
            })]),
    c9_arbustal_matorral = /* color: #ceb747 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-74.42461002368624, -14.725342189207296]),
            {
              "clase": 9,
              "system:index": "0"
            })]),
    c10_poca_vegetacion = /* color: #f8b3ff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-70.0046543568059, -15.797679391023799]),
            {
              "clase": 10,
              "system:index": "0"
            })]),
    c11_totoral = /* color: #d72fff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-69.96962504506757, -15.813095174276135]),
            {
              "clase": 11,
              "system:index": "0"
            })]),
    c12_bofedal = /* color: #00ff00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-74.98559005504937, -11.399855373752377]),
            {
              "clase": 12,
              "system:index": "0"
            })]),
    c13_areas_humedas_costeras = /* color: #ccebc5 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-76.10184896881482, -14.312496169623012]),
            {
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-76.1028360217323, -14.31536540112019]),
            {
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-76.1018275111427, -14.316030724926476]),
            {
              "system:index": "2"
            })]),
    c14_glaciar = /* color: #13f5ff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-74.96559808542669, -11.448957105795413]),
            {
              "clase": 14,
              "system:index": "0"
            })]),
    c15_Agua = /* color: #0000ff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-69.9822752003953, -15.765820726661403]),
            {
              "clase": 15,
              "system:index": "0"
            })]),
    c16_aguas_maritima = /* color: #3b8aff */ee.FeatureCollection([]),
    c17_sin_dato = /* color: #d4d4d4 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-74.93385597452577, -11.269452584852743]),
            {
              "clase": 17,
              "system:index": "0"
            })]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// PASO CLASIFICACION 2023

// Parametros de entrada 
var region = 108, // 101 - 114
    version_input = '1',
    version_out = '1',
    year = 2023,
    months = [1,2,3,4,5,6,7,8,9,10,11,12],
    tileScale = 15,
    cloud_Blue_thr = 10000,  //NO ENMASCAR : 10000, ENMASCAR: 1600
    center_ANP = false,
    Descartar_muestras = [11]; // descartar muestras automaticas;
//---------------------------------

// var palette_1_17 = ["ff9595","b40b0b","ffbd08","4dbb3f","139b01","17ff7e","0f5e00","ffec13","ceb747","ff91fc","70ff41","1af320","00ea67","13f5ff","0021ff","3b8aff","d4d4d4"];
var palette_0_17 = ["ffffff", "ff0000","b40b0b","ffbd08","5bdd4a","139b01","17ff7e","0f5e00","ffec13","ceb747","f8b3ff","d72fff","00ff00","ccebc5","13f5ff","0000ff","3b8aff","d4d4d4"];
var assets_samples = 'projects/ee-anp-lineabase/assets/training_data/samples/';

var area_trabajo = ee.FeatureCollection("projects/ee-eturpocayo/assets/sernanp/AUXILIAR_DATA/limite_anp_y_za_v2")
                      .filter(ee.Filter.eq('Codigo_uni', region));

if(center_ANP){Map.centerObject(area_trabajo, 10)}

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
      to:   [5, 4, 6, 5, 7, 13,  8,  9,  8,  3,  3,  1, 10,  2, 15, 10, 15, 14]
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
      to:   [ 7,  9,  8,  3,  1, 10, 14, 15, 13,  6,  17]
    }
    
  var Mapbiomas = ee.Image('projects/mapbiomas-public/assets/peru/collection2/mapbiomas_peru_collection2_integration_v1')
                    .select('classification_2021')
                    .remap(remap_MB.from, remap_MB.to)
                    .updateMask(area_trabajo_raster);
                    
  var WorldCover = ee.ImageCollection('ESA/WorldCover/v200').first()
                     .remap(remap_WC.from, remap_WC.to)
                     .updateMask(area_trabajo_raster);
  
// var updtReference = ee.Image(WorldCover.updateMask(Mapbiomas.eq(WorldCover))).updateMask(area_trabajo_raster)
  
Map.addLayer(Mapbiomas.selfMask(),{min: 0, max: 17, palette: palette_0_17},'Mapbiomas', false)
Map.addLayer(WorldCover.selfMask(),{min: 0, max: 17, palette: palette_0_17},'WorldCover', false)

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
  Map.addLayer(Samples_Collect_raster, {min: 0, max: 17, palette: palette_0_17}, 'Samples_Collect_raster');
  
  var masks_class = area_trabajo_raster.multiply(0).add(99).where(Samples_Collect_raster.eq(1),1)
                                                            .where(Samples_Collect_raster.eq(2),2)
                                                            // .where(Mapbiomas.eq(4),4)
                                                            .rename('mask')



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
// print(Samples_Collect)


// // Geometrias_colectadas_assets
//   var folder = 'projects/ee-anp-lineabase/assets/AUXILIAR-DATA/geometry';
//   var list = ee.List([]);
  
//   function list_folder_to_featColl(e) {
//     var path = e.id;
//     var fc = ee.FeatureCollection(path)
//               // .aggregate_sum('system:asset_size')
//               // .divide(ee.Number(1024).pow(4))
//     return fc; 
//   }
  
//   // Function to recursively concatenate asset lists from multiple pages
//   function listAssetsRecursive(folder, pageToken) {
//     var options = {};
//     if (pageToken !== undefined) {
//       options.pageToken = pageToken;
//     }
  
//     var result = ee.data.listAssets(folder, options);
//     var assets = result['assets'];
//     list = list.cat(assets.map(list_folder_to_featColl));
  
//     if (result.nextPageToken !== null) {
//       // Call the function recursively for the next page
//       listAssetsRecursive(folder, result.nextPageToken);
//     }
//   }
  
//   // Start listing assets
//   listAssetsRecursive(folder);
  
//   // Print the final concatenated asset list
//   // print('Final Asset List:', list);
  
//   var geometry_draw = ee.FeatureCollection(list).flatten();
  
//   print(geometry_draw)

// // GEOMETRIAS CLASE COLL
//   var Samples_Collect_merge = Samples_Collect.merge(geometry_draw)
//                                     .filterBounds(area_trabajo.geometry().bounds())
//   var Samples_Collect_raster = Samples_Collect_merge
//                               .reduceToImage(['clase'], ee.Reducer.first())
//                               .updateMask(area_trabajo_raster)
//                               .rename('clase');
//   Map.addLayer(Samples_Collect_raster, {min: 1, max: 17, 
//   palette: palette_0_17}, 'Samples_Collect_raster');

// // Función para generar el mosaico Planet para un mes y año determinado
// function getPlanetMosaic(year, month) {
//   var startDate = ee.Date.fromYMD(year, month, 1);
//   var endDate = startDate.advance(1, 'month');
//   var collection = ee.ImageCollection('projects/ee-anp-lineabase/assets/mosaics')
//     .filterBounds(area_trabajo.geometry().bounds())
//     .filter(ee.Filter.eq('month', month))
//     // .filterDate(startDate, endDate)
//     .mosaic();
//   return collection;
// }

// // Function for stretch visualization
// function visual(image, geometry, bands, scale, stretch, name, show){
//   typeof scale == 'undefined' ? scale = 100 : null;
//   typeof stretch == 'undefined' ? stretch = [2, 98] : null;
//   typeof name == 'undefined' ? name = 'Layer ' + Map.layers().length() : null;
//   typeof show == 'undefined' ? show = true : null;
  
//   var minMax = image.select(bands).reduceRegion({
//     reducer: ee.Reducer.percentile(stretch),
//     scale: scale,
//     geometry: geometry,
//     bestEffort: true
//   });
  
//   var scaled = ee.Image(bands.map(function(band){
//     var imageBand = image.select(band);
//     var min = ee.Number(minMax.get(band + '_p' + Math.round(stretch[0])));
//     var max = ee.Number(minMax.get(band + '_p' + Math.round(stretch[1])));
    
//     return imageBand.unitScale(min, max).rename(band);
//   }));
//   Map.addLayer(scaled, { min: 0, max: 1, bands: bands}, name, show);
// }

var altitude = ee.Image("USGS/SRTMGL1_003");
var slope = ee.Terrain.slope(altitude).int8()
    .rename('slope');

// Combinacion de bandas para color natural
// var RGB = {bands: ['R', 'N', 'B'], gain: [0.2, 0.06, 0.2]}; // ANDES
var RGB = {bands: ['R', 'G', 'B'], min:630, max:2950}; //COSTA

var clasificacion =  ee.Image([]).select([])

months.forEach(function(month){
  
  var mosaic_month = mosaic_coll.filter(ee.Filter.eq('month', month)).first().updateMask(area_trabajo_raster)
  
  Map.addLayer(mosaic_month, RGB, "Mosaic_Planet_Month"+month, false);


  var asset_samples_random = ee.FeatureCollection(assets_samples + 'samples-'+ region +'-' + year + '-month'+ month +'-'+version_input);
      // asset_samples_random = asset_samples_random.filter(ee.Filter.neq('clase', Descartar_muestras))
      asset_samples_random = asset_samples_random.filter(ee.Filter.inList('clase', Descartar_muestras).not())

  // Select_random
    // Agregar una columna aleatoria a la colección
    var randomFC = asset_samples_random.randomColumn('random',2);
    
    // Ordenar la colección por la columna aleatoria
    var sortedFC = randomFC.sort('random');
    
    
    // Seleccionar los primeros N elementos
    asset_samples_random = sortedFC.limit(1000);
    
    var styledPoints = ee.FeatureCollection(asset_samples_random).map(
    function(point) {
      var classId = point.get('clase'),
          color = ee.List(palette_0_17).get(classId);
      
      return point.set({ style: { color: color } });
    }
      );
    if(month == 12){
    // Map.addLayer(asset_samples_random) 
    Map.addLayer(
      styledPoints.style({
        styleProperty: "style",
        width: 1.5,
      }), {}, 'MUESTRAS DE ENTRENAMIENTO automatico', false
    );
    }
    
    

  // Segmentación usando SNIC
  var snic = ee.Algorithms.Image.Segmentation.SNIC({
    image: mosaic_month,
    size: 15,
    compactness: 0,
    connectivity: 8,
    neighborhoodSize: 256 
  }).select(['clusters'], ['segments']);
  
  // Map.addLayer(snic.randomVisualizer(),{},'snic', false)
  
  // Reproyecta la imagen a una resolución fija (por ejemplo, 30 metros)
  var fixedResolutionSegments = snic.reproject({
    crs: mosaic_month.projection(),
    scale: 4.7  // Ajusta según la resolución de tu imagen
  });
  
  // Muestra la imagen con resolución fija en el mapa
  // Map.addLayer(fixedResolutionSegments.randomVisualizer(), {}, 'SNIC Segments (Fixed Resolution)_Month'+month,false);
  
  // Añadir segmentación como banda
  var mosaic_month_segm = mosaic_month.addBands(fixedResolutionSegments)
                                      .addBands(slope)
                                      .addBands(masks_class);
  
  // Definir bandas para el clasificador, incluyendo NDVI y segmentos
  var bandas = ['R', 'G', 'B', 'N', 'NDVI', 'NDWI','segments', 'slope','mask']; //, 'segments'
  
  // Muestreo de regiones y entrenamiento del clasificador
  var Samples_month = Samples_Collect.merge(asset_samples_random)
  
  var entrenamiento = mosaic_month_segm.sampleRegions({
    collection: Samples_month,
    properties: ['clase'],
    scale: 5
  }).filter(ee.Filter.notNull(bandas));
  
  // Verificar la cantidad de muestras
  // print(entrenamiento.limit(2))
  // print('# de muestras de entrenamiento:'+month, entrenamiento.size());
  
  // Entrenar el clasificador Random Forest
  var clasificador = ee.Classifier.smileRandomForest(50).train({
    features: entrenamiento,
    classProperty: 'clase',
    inputProperties: bandas
  });
  

  
  // Clasificar la imagen usando el clasificador entrenado
  var imagenClasificada_month = mosaic_month_segm.classify(clasificador);
  
    clasificacion = clasificacion.addBands(imagenClasificada_month.rename('clasificacion_'+month));
    
  // Añadir la imagen clasificada al mapa
  
  Map.addLayer(imagenClasificada_month, {min: 0, max: 17, 
  palette: palette_0_17}, 'clasificacion'+month, false);
  
  if(month == 12){
  Map.addLayer(asset_samples_random,{},'samples_random', false)
  }

  
})

// print(clasificacion)

// Map.addLayer(Samples_Collect,{},'Samples_Collect')
// Mostrar Limite de ANP seleccionado
var styling = {color: 'black', fillColor: '00000000'};
Map.addLayer(area_trabajo.style(styling),{},'area_trabajo');

// Exportar to assets
var filenameExport = 'clasificacion'+ '-' + region + '-' + version_out;

clasificacion = clasificacion.set('region', region)
                             .set('version', version_out)


Export.image.toAsset({
  image: clasificacion.byte(),
  description: filenameExport,
  assetId: 'projects/ee-anp-lineabase/assets/clasificacion/' + filenameExport,
  scale: 4.7,
  pyramidingPolicy: {
    '.default': 'mode'
  },
  maxPixels: 1e13,
  region: area_trabajo.geometry().bounds()
});



// ACTUALIZAR REFERENCIAS
// updtReference = updtReference.blend(ee.Image(Samples_Collect_raster)).rename('clase');
// updtReference = ee.Image(updtReference).byte(),

// Map.addLayer(updtReference.selfMask(),{min: 1, max: 17, palette: palette_0_17},'updtReference')


// // AREA CLASE
//   var classAreas = getAreas(updtReference, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17], area_trabajo);
  
//   print('Capa de áreas por clase', classAreas);
  
//   var classAreasDictionary = classAreas.first().toDictionary();
  
//   print(classAreasDictionary)

//   var classNames = classAreasDictionary.keys()
//     .filter(ee.Filter.stringContains('item', 'ID'))
//     .filter(ee.Filter.notEquals('item', 'ORIG_FID'));
  
//   print(classNames)
  
//   // Generar muestras de entrenamiento con base en el área de cada clase de cobertura
//   var classIds = classNames.map(
//     function(name) {
//       var classId = ee.String(name).split('D').get(1);
//       return ee.Number.parse(classId);
//     }
//   );
//   print(classIds)
//   // Calcular áreas de cada clase y total 
//   var areas = classNames.map( function(name) {
//     return classAreasDictionary.get(name);
//   });
  
//   var totalArea = areas.reduce(ee.Reducer.sum());


//   // Calcular numero ponderado de muestras y generar puntos de entrenamiento
//   var pointsPerClass = areas.map(
//     function(area) {
//       return getPointsByArea(
//         area, totalArea, muestras_x_clase, min_muestras_x_clase);
//     });
//   print(pointsPerClass)
  
//   var training = getSamples(updtReference, mosaic_coll, classIds, pointsPerClass);
//   var points = training.points;
//   var data = training.data;
//   print('points',points)
//   Map.addLayer(points,{},'points')

// // Exportar muestras
// var filename = 'samples-' + region + '-'  +   year + '-' + version_out;

// Export.table.toAsset(
//   points,
//   filename,
//   'projects/ee-anp-lineabase/assets/training_data/samples/' + filename
// );





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



function Legend() {
  
  var legendColors = [
          {color: palette_0_17[1], label:'c1_area_urbana y carret'},
          // {color: palette_0_17[2], label:'c2_mineria'},
          {color: palette_0_17[3], label:'c3_agricultura'},
          {color: palette_0_17[4], label:'c4_bosque_seco'},
          // {color: palette_0_17[5], label:'c5_bosque'},
          // {color: palette_0_17[6], label:'c6_manglar'},
          // {color: palette_0_17[7], label:'c7_bosque_plantado'},
          // {color: palette_0_17[8], label:'c8_pastizales'},
          {color: palette_0_17[9], label:'c9_arbustal_matorral'},
          {color: palette_0_17[10], label:'c10_poca_vegetacion'},
          // {color: palette_0_17[11], label:'c11_totoral'},
          // {color: palette_0_17[12], label:'c12_bofedal'},
          {color: palette_0_17[13], label:'c13_areas_humedas_costeras'},
          // {color: palette_0_17[14], label:'c14_glaciar'},
          {color: palette_0_17[15], label:'c15_Agua'},
          // {color: palette_0_17[16], label:'c16_aguas_maritima'},
          {color: palette_0_17[17], label:'c17_sin_dato'},
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



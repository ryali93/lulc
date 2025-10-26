/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var Trocha = /* color: #ff14e7 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-69.8286532267413, -15.892650562981816]),
            {
              "clase": 10,
              "name": "trocha",
              "system:index": "0"
            })]),
    Area_urbana = /* color: #ff0b0b */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-70.0001854870324, -15.823180418031166]),
            {
              "clase": 1,
              "name": "area urbana",
              "system:index": "0"
            })]),
    minera = /* color: #0b4a8b */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-69.98896808111387, -15.871076961747319]),
            {
              "clase": 2,
              "name": "mineria",
              "system:index": "0"
            })]),
    Carretera_asfaltada = /* color: #ff0000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-69.88310500228499, -15.913031747014896]),
            {
              "clase": 1,
              "name": "carretera",
              "system:index": "0"
            })]),
    ref_Mineria = /* color: #f710ff */ee.Geometry.MultiPoint(
        [[-77.58245130637636, -7.768454133334814],
         [-77.57489820579042, -7.757228311366298]]),
    ref_infraestructura = /* color: #4600ff */ee.Geometry.MultiPoint(
        [[-79.20540882707316, -5.105164729058512],
         [-75.992751389251, -14.21100903559897],
         [-75.9846833045342, -14.211175443767207],
         [-75.98485496591115, -14.221825311891498],
         [-75.97240951608205, -14.219079690749053],
         [-76.0040810401299, -14.210010584019324],
         [-76.00390937875295, -14.218746885920705],
         [-75.99380833827408, -14.22346113995283],
         [-75.52608268433028, -11.020415536312523],
         [-75.55694037663815, -11.037143445634337],
         [-75.55664261252329, -11.037090727159613],
         [-75.42865050123585, -10.984952901622819]]),
    ref_Puerto = /* color: #c8008e */ee.Geometry.Point([-76.2917298300395, -13.802929520307282]),
    ref_via = /* color: #c70000 */ee.Geometry.MultiPoint(
        [[-76.00501863833755, -14.20095140859987],
         [-76.01973860141128, -14.197290235265417],
         [-69.82131153657127, -15.876986752011259],
         [-69.8247018487661, -15.879174483583132],
         [-69.82749134614158, -15.883921366593253],
         [-69.81624752595116, -15.873890864848113],
         [-69.81290012910057, -15.868318148084407]]),
    Bosque_C5 = /* color: #2db93b */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-74.36063952904837, -14.67376762212184]),
            {
              "clase": 5,
              "name": "bosque",
              "system:index": "0"
            })]),
    Agua_C15 = /* color: #0b45ff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-74.34674066152054, -14.636398063880359]),
            {
              "clase": 15,
              "name": "agua",
              "system:index": "0"
            })]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// SCRIPT PARA COLECTAR MUESTRAS A MANO DONDE ES SEGURO LA EXISTENCIA DE UNA CLASE
//
var version = '1'
var year = 2023 
var list_geom = ee.FeatureCollection([Area_urbana, minera, Carretera_asfaltada, Trocha, Bosque_C5, Agua_C15 ]).flatten()

var area_trabajo = ee.FeatureCollection("projects/ee-eturpocayo/assets/sernanp/AUXILIAR_DATA/limite_anp_y_za_v2")
var area_trabajo_raster = ee.Image("projects/ee-eturpocayo/assets/sernanp/AUXILIAR_DATA/limite_anp_y_za_v2_raster")
// Map.addLayer(area_trabajo,{},'area_trabajo')


var RGB = {bands: ['R', 'N', 'B'], gain: [0.2, 0.06, 0.2]}; // ANDES
// var RGB = {bands: ['R', 'G', 'B'], min:630, max:2950}; //COSTA

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
  
  var geometry_draw = ee.FeatureCollection(list).flatten()
                        .filter(ee.Filter.neq('name', 'Bosque_plantado'));
  
  // print(geometry_draw.size())

  // Map.addLayer(geometry_draw,{},'DRAW1')


// mosaico Planet y Sentinel para um determinado mês e ano
function getPlanetMosaic(year, month) {
  var startDate = ee.Date.fromYMD(year, month, 1);
  var endDate = startDate.advance(1, 'month');
  var collection = ee.ImageCollection('projects/ee-anp-lineabase/assets/mosaics')
    // .filterBounds(randomPoints)
    .filter(ee.Filter.eq('month', month))
    // .filterDate(startDate, endDate)
    .mosaic();
  return collection;
};

function getSentinel2(year, month) {
  var startDate = ee.Date.fromYMD(year, month, 1);
  var endDate = startDate.advance(1, 'month');
  var collection = ee.ImageCollection('COPERNICUS/S2_SR')
    .filterDate(startDate, endDate)
    .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE', 70))
    .median();
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

  
for(var monthI=1; monthI<=12; monthI++ ){
  // // var monthI = 6
  // var area_trabajo = ee.FeatureCollection("projects/ee-eturpocayo/assets/sernanp/AUXILIAR_DATA/limite_anp_y_za_v2")
  //                       .filter(ee.Filter.eq('Codigo_uni', region));
  
  // var area_trabajo_raster = ee.Image("projects/ee-eturpocayo/assets/sernanp/AUXILIAR_DATA/limite_anp_y_za_v2_raster").eq(region);

  // Combinacion de bandas para color natural
  // var RGB = {bands: ["R", "G", "B"], min: 0, max: 1500};
  
  // Se calcula la mediana de los pixeles dentro de la imagen y se recorta segun la forma del ANP
  var Planet_mosaic = getPlanetMosaic(year, monthI);
  var S2_mosaic = getSentinel2(year, monthI);
  
  var NICFIAmerica_CLIP = Planet_mosaic//.clip(area_trabajo);
  
  // Calcular NDVI y añadirlo como banda
  var ndvi = NICFIAmerica_CLIP.normalizedDifference(['N', 'R']).rename('NDVI');
  var imagenConNDVI = NICFIAmerica_CLIP.addBands(ndvi);
  
  // Mostrar en el visor del mapa la imagen solicitada
  Map.addLayer(NICFIAmerica_CLIP, RGB, 'Planet-' + year + '-Mes' + monthI, false);
  // visual(Planet_mosaic, area_trabajo.geometry().bounds(), ['R', 'N', 'B'], 5, [2, 98],'Planet-' + year + '-Mes' + monthI +'s', false);
  // Map.addLayer(S2_mosaic, 
  // {bands: ['B11', 'B8', 'B4'], min: 1000, max: 4500, gamma: 1.0},
  // 'Sentinel-' + year + '-Mes' + monthI, false);
  //   // Map.addLayer(trainning,{},'trainning')
  
 
 

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

}
 Export.table.toAsset({
   collection:list_geom, 
   description: 'MultiClas-2023-draw-' + version,
   assetId: 'projects/ee-anp-lineabase/assets/AUXILIAR-DATA/geometry/' + 'MultiClas-2023-draw-' + version, 
   }
   )
   
var Mapbiomas = ee.Image('projects/mapbiomas-public/assets/peru/collection2/mapbiomas_peru_collection2_integration_v1')
                  .select('classification_2021');

 
var WorldCover = ee.ImageCollection('ESA/WorldCover/v200').first();

var urba_min = Mapbiomas.eq(24).or(Mapbiomas.eq(30)).or(WorldCover.eq(50)).selfMask()
urba_min = urba_min.where(Mapbiomas.eq(30),2)

Map.addLayer(urba_min,{min:1, max:2, palette:['red','#ff00f5']},'referencia')

// Mostrar Limite de ANP seleccionado
  var styling = {color: 'cyan', fillColor: '00000000'};
  Map.addLayer(area_trabajo.style(styling),{},'Limite_ANP', true);
  Map.addLayer(geometry_draw,{},'DRAW1')
  



var MTC_dep = ee.FeatureCollection("projects/ee-anp-lineabase/assets/AUXILIAR-DATA/externo/MTC/red_vial_departamental_dic18"),
    MTC_nac = ee.FeatureCollection("projects/ee-anp-lineabase/assets/AUXILIAR-DATA/externo/MTC/red_vial_nacional_dic18"),
    MTC_vec = ee.FeatureCollection("projects/ee-anp-lineabase/assets/AUXILIAR-DATA/externo/MTC/red_vial_vecinal_dic18");
    
var vias_MTC = MTC_dep.merge(MTC_nac)
                      .merge(MTC_vec);
                      
var mtc_asfaltado = vias_MTC.filter(ee.Filter.inList("SUPERFIC_L", ["Asfaltado", "Asfaltado económico"]));
var mtc_no_asfaltado= vias_MTC.filter(ee.Filter.inList("SUPERFIC_L", ["Afirmado", "Trocha", "Sin afirmar"]));

// Map.addLayer(vias_MTC)
Map.addLayer(mtc_asfaltado.style({color:'red', width:2, fillColor:'00000000'}),{},'mtc_asfaltado')
Map.addLayer(mtc_no_asfaltado.style({color:'orange', width:1, fillColor:'00000000'}),{},'mtc_no_asfaltado')


var palette_0_17 = ["ffffff", "ff0000","b40b0b","ffbd08","5bdd4a","139b01","17ff7e","0f5e00","ffec13","ceb747","f8b3ff","d72fff","00ff00","ccebc5","13f5ff","0000ff","3b8aff","d4d4d4"];

// Se llama primera version de clasificacion
var assetFiltros = "projects/ee-anp-lineabase/assets/clasificacion-post"
var clasificacion_v1 = ee.ImageCollection(assetFiltros)
              // .filterMetadata('code_region', 'equals', region)
               .filterMetadata('version', 'equals','14')
               .mosaic()
               .reduce('mode')
               
               
Map.addLayer(clasificacion_v1,{min: 0, max: 17, palette: palette_0_17},'clasificacion_v14', false)
// FILTRO TEMPORAL MENSUAL,
// corrige clasificaciones mensuales 

var param = { 
    code_region: 101,  //id ANP de Clasificacion 
    year: 2023,  // Solo visualizacion
    month: 6, 
    version_input: '21',
    version_output: '22',
    exportOpcion: {   // Opciones para exportar
      DriveFolder: 'DRIVE-EXPORT',  // carpeta a exportar archivo drive
      exportClasifToDrive:  false, // exporta clasificaciones a drive (true or false)
      exportEstadistica: false, // Exporta Areas (true or false)
    },
    exclusion:{  // Indicar en la lista las clases y años a excluir en el filtro
      clases : [],  //lista de clases a excluir en todos los meses
      years  : [],  //lista de meses a excluir con todas la clases
    }
};


//---------------------ORDEN DE PRIORIDAD DE EJECUCIÓN-----------------------
// Ejemplo si se pasa 3  caso: FF NV FF NV FF NV FF =  FF FF FF FF FF FF FF   La prioridad de mantener la clase será la clase a pasar primero
var ordem_exec_first =  [];              //Filtro de primer mes
var ordem_exec_last =   [];               //Filtro de ultimo mes
var ordem_exec_middle = [5,4,6,7,8,9,12,11,13,14,16,10];  //Filtro de meses intermedios


var cloud_Blue_thr = 1600; 

// Combinacion de bandas para color natural
var RGB = {bands: ['R', 'N', 'B'], gain: [0.2, 0.06, 0.2]}; // ANDES
//--------------------------------------------

var dirinput = "projects/ee-anp-lineabase/assets/clasificacion-post";
var dirout  =   "projects/ee-anp-lineabase/assets/clasificacion-post";


var AssetRegions = 'projects/ee-eturpocayo/assets/sernanp/AUXILIAR_DATA/limite_anp_y_za_v2';
var AssetRegionsRaster = 'projects/ee-eturpocayo/assets/sernanp/AUXILIAR_DATA/limite_anp_y_za_v2_raster';

var region = ee.FeatureCollection(AssetRegions).filterMetadata('Codigo_uni', 'equals', param.code_region)
var regionRaster = ee.Image(AssetRegionsRaster).eq(param.code_region).selfMask()

Map.addLayer(region,{},'region')
Map.centerObject(region)

var prefixo_out = 'ANP'+ '-' + param.code_region + '-' 
////*************************************************************
// Do not Change from these lines
////*************************************************************

var palette_0_17 = ["ffffff", "ff0000","b40b0b","ffbd08","5bdd4a","139b01","17ff7e","0f5e00","ffec13","ceb747","f8b3ff","d72fff","00ff00","ccebc5","13f5ff","0000ff","3b8aff","d4d4d4"];
var vis = {
    'min': 0,
    'max': 17,
    'palette': palette_0_17
};

var mosaic = ee.ImageCollection('projects/ee-anp-lineabase/assets/mosaics')
                    .filterBounds(region.geometry().bounds())
                    .map(function(image){
                        var Mapbiomas = ee.Image('projects/mapbiomas-public/assets/peru/collection2/mapbiomas_peru_collection2_integration_v1')
                                          .select('classification_2021')
                        image = image.updateMask(image.select('B').lte(cloud_Blue_thr).or(Mapbiomas.eq(34).unmask(regionRaster)))
                        
                        var ndvi = image.normalizedDifference(['N', 'R']).rename('NDVI');
                        var ndwi = image.normalizedDifference(['G', 'N']).rename('NDWI');
                        
                        return image.addBands(ndvi)
                                    .addBands(ndwi)
                    })
            
var Clasificacion_TD = ee.ImageCollection(dirinput)
                      .filterMetadata('code_region', 'equals', param.code_region)
                      .filterMetadata('version', 'equals', param.version_input)
                      .mosaic()
                      
print(Clasificacion_TD)

//-----
var years = [
    1,2,3,
    4,5,6,
    7,8,9,
    10,11,12
    ];

// get band names list 
var bandNames = ee.List(
    years.map(
        function (year) {
            return 'clasificacion_' + String(year);
        }
    )
);
var bandNamesExclude = ee.List(
    param.exclusion.years.map(
        function (year) {
            return 'clasificacion_' + String(year);
        }
    )
);


// generate a histogram dictionary of [bandNames, image.bandNames()]
var bandsOccurrence = ee.Dictionary(
    bandNames.cat(Clasificacion_TD.bandNames()).reduce(ee.Reducer.frequencyHistogram())
);

print(bandsOccurrence);

// insert a masked band 
var bandsDictionary = bandsOccurrence.map(
    function (key, value) {
        return ee.Image(
            ee.Algorithms.If(
                ee.Number(value).eq(2),
                Clasificacion_TD.select([key]).byte(),
                ee.Image().rename([key]).byte().updateMask(Clasificacion_TD.select(0))
            )
        );
    }
);
// convert dictionary to image
var imageAllBands = ee.Image(
    bandNames.iterate(
        function (band, image) {
            return ee.Image(image).addBands(bandsDictionary.get(ee.String(band)));
        },
        ee.Image().select()
    )
);
Clasificacion_TD = imageAllBands

// Referencia:  https://github.com/mapbiomas-peru
//----

var mask3 = function(valor, ctime, imagem){
  var mask = imagem.select('clasificacion_'+ (parseInt(ctime) - 1)).eq (valor)
        .and(imagem.select('clasificacion_'+ (ctime)              ).neq(valor))
        .and(imagem.select('clasificacion_'+ (parseInt(ctime) + 1)).eq (valor))
  var muda_img = imagem.select('clasificacion_'+ (ctime)    ).mask(mask.eq(1)).where(mask.eq(1), valor);  
  var img_out = imagem.select('clasificacion_'+ctime).blend(muda_img)
  return img_out;
}

var mask4 = function(valor, ctime, imagem){
  var mask = imagem.select('clasificacion_'+ (parseInt(ctime) - 1)).eq (valor)
        .and(imagem.select('clasificacion_'+ (ctime)              ).neq(valor))
        .and(imagem.select('clasificacion_'+ (parseInt(ctime) + 1)).neq(valor))
        .and(imagem.select('clasificacion_'+ (parseInt(ctime) + 2)).eq (valor))
  var muda_img  = imagem.select('clasificacion_'+ (ctime)              ).mask(mask.eq(1)).where(mask.eq(1), valor);  
  var muda_img1 = imagem.select('clasificacion_'+ (parseInt(ctime) + 1)).mask(mask.eq(1)).where(mask.eq(1), valor); 
  var img_out = imagem.select('clasificacion_'+ctime).blend(muda_img).blend(muda_img1)
  return img_out;
}

var mask5 = function(valor, ctime, imagem){
  var mask = imagem.select('clasificacion_'+ (parseInt(ctime) - 1)).eq (valor)
        .and(imagem.select('clasificacion_'+ (ctime)              ).neq(valor))
        .and(imagem.select('clasificacion_'+ (parseInt(ctime) + 1)).neq(valor))
        .and(imagem.select('clasificacion_'+ (parseInt(ctime) + 2)).neq(valor))
        .and(imagem.select('clasificacion_'+ (parseInt(ctime) + 3)).eq (valor))
  var muda_img  = imagem.select('clasificacion_'+ (ctime)              ).mask(mask.eq(1)).where(mask.eq(1), valor);  
  var muda_img1 = imagem.select('clasificacion_'+ (parseInt(ctime) + 1)).mask(mask.eq(1)).where(mask.eq(1), valor);  
  var muda_img2 = imagem.select('clasificacion_'+ (parseInt(ctime) + 2)).mask(mask.eq(1)).where(mask.eq(1), valor);  
  var img_out = imagem.select('clasificacion_'+ctime).blend(muda_img).blend(muda_img1).blend(muda_img2)
  return img_out;
}

var ctimes3 = ['2','3','4','5','6','7','8','9','10','11'];
var ctimes4 = ['2','3','4','5','6','7','8','9','10'];
var ctimes5 = ['2','3','4','5','6','7','8','9'];


var window5years = function(imagem, valor){
  var img_out = imagem.select('clasificacion_1')
  for (var i_ctime=0;i_ctime<ctimes5.length; i_ctime++){  
    var ctime = ctimes5[i_ctime];  
    img_out = img_out.addBands(mask5(valor,ctime, imagem)) }
    img_out = img_out.addBands(imagem.select('clasificacion_10'))
    img_out = img_out.addBands(imagem.select('clasificacion_11'))
    img_out = img_out.addBands(imagem.select('clasificacion_12'))
  return img_out
}

var window4years = function(imagem, valor){
  var img_out = imagem.select('clasificacion_1')
  for (var i_ctime=0;i_ctime<ctimes4.length; i_ctime++){  
    var ctime = ctimes4[i_ctime];  
    img_out = img_out.addBands(mask4(valor,ctime, imagem)) }
    img_out = img_out.addBands(imagem.select('clasificacion_11'))
    img_out = img_out.addBands(imagem.select('clasificacion_12'))
  return img_out
}

var window3years = function(imagem, valor){
  var img_out = imagem.select('clasificacion_1')
  for (var i_ctime=0;i_ctime<ctimes3.length; i_ctime++){  
    var ctime = ctimes3[i_ctime];   
    img_out = img_out.addBands(mask3(valor,ctime, imagem)) }
    img_out = img_out.addBands(imagem.select('clasificacion_12'))
  return img_out
}

var filtered = Clasificacion_TD

var mask3first = function(valor, imagem){
  var mask = imagem.select('clasificacion_1').neq (valor)
        .and(imagem.select('clasificacion_2').eq(valor))
        .and(imagem.select('clasificacion_3').eq (valor))
  var muda_img = imagem.select('clasificacion_1').mask(mask.eq(1)).where(mask.eq(1), valor);  
  var img_out = imagem.select('clasificacion_1').blend(muda_img)
  img_out = img_out.addBands([imagem.select('clasificacion_2'),
                              imagem.select('clasificacion_3'),
                              imagem.select('clasificacion_4'),
                              imagem.select('clasificacion_5'),
                              imagem.select('clasificacion_6'),
                              imagem.select('clasificacion_7'),
                              imagem.select('clasificacion_8'),
                              imagem.select('clasificacion_9'),
                              imagem.select('clasificacion_10'),
                              imagem.select('clasificacion_11'),
                              imagem.select('clasificacion_12')])
  return img_out;
}

var mask3last = function(valor, imagem){
  var mask = imagem.select('clasificacion_10').eq (valor)
        .and(imagem.select('clasificacion_11').eq(valor))
        .and(imagem.select('clasificacion_12').neq (valor))
  var muda_img = imagem.select('clasificacion_12').mask(mask.eq(1)).where(mask.eq(1), valor);  
  var img_out = imagem.select('clasificacion_1')
  img_out = img_out.addBands([imagem.select('clasificacion_2'),
                              imagem.select('clasificacion_3'),
                              imagem.select('clasificacion_4'),
                              imagem.select('clasificacion_5'),
                              imagem.select('clasificacion_6'),
                              imagem.select('clasificacion_7'),
                              imagem.select('clasificacion_8'),
                              imagem.select('clasificacion_9'),
                              imagem.select('clasificacion_10'),
                              imagem.select('clasificacion_11')]);
  img_out = img_out.addBands(imagem.select('clasificacion_12').blend(muda_img));
  return img_out;
};

for (var i_class=0;i_class<ordem_exec_first.length; i_class++){  
  var id_class = ordem_exec_first[i_class]; 
  filtered = mask3first(id_class, filtered)
}

for (var i_class=0;i_class<ordem_exec_last.length; i_class++){  
  var id_class = ordem_exec_last[i_class]; 
  filtered = mask3last(id_class, filtered)
}

for (var i_class=0;i_class<ordem_exec_middle.length; i_class++){  
  var id_class = ordem_exec_middle[i_class]; 
  filtered = window3years(filtered, id_class)
}

for (var i_class=0;i_class<ordem_exec_middle.length; i_class++){  
  var id_class = ordem_exec_middle[i_class]; 
  filtered = window4years(filtered, id_class)
  // filtered = window5years(filtered, id_class)
}

for (var i_class=0;i_class<ordem_exec_middle.length; i_class++){  
  var id_class = ordem_exec_middle[i_class]; 
  filtered = window3years(filtered, id_class)
}


var classif_FT = filtered.select(bandNames)

//Excluir clase y años 
// Classes Exclude
if(param.exclusion.clases.length>0){
  var clasifi = ee.List([])
      
      param.exclusion.clases.forEach(function(clase){
        var clasif_code =Clasificacion_TD.eq(clase).selfMask()
        clasifi = clasifi.add(Clasificacion_TD.updateMask(clasif_code).selfMask())
      })
      
      clasifi = ee.ImageCollection(clasifi)
      clasifi = clasifi.max()
      Map.addLayer(clasifi,{},'clasific exclu_classe')
      classif_FT = classif_FT.blend(clasifi)
      print('Clases excluidos en el Filtro temporal', param.exclusion.clases);
}

// Year Exclude
if(param.exclusion.years.length>0){
  var yearExlud = Clasificacion_TD.select(bandNamesExclude);  //addbands
  classif_FT =  classif_FT.addBands(yearExlud,null,true); // Remplaza las clases a no modificar
  print('Años excluidos en el Filtro temporal', param.exclusion.years);
}
  
filtered =classif_FT.select(bandNames)
                    .updateMask(regionRaster);

//----

var vis = {
    'bands': ['clasificacion_' + param.month],
    'min': 0,
    'max': 17,
    'palette': palette_0_17,
    'format': 'png'
};

Map.addLayer(mosaic.filter(ee.Filter.eq('month', param.month)).mosaic().updateMask(regionRaster), RGB, 'mosaic-'+param.month, false);

  
Map.addLayer(Clasificacion_TD, vis, 'original'+param.year);

Map.addLayer(filtered, vis, 'filtered'+param.year);

filtered = filtered.set('code_region', param.code_region)
                    .set('version', param.version_output)
                    .set('descripcion', 'filtro temporal')
print(filtered);
                 
// EXPORTS 
  Export.image.toAsset({
      'image': filtered,
      'description': prefixo_out+param.version_output,
      'assetId': dirout+'/' +prefixo_out+param.version_output,
      'pyramidingPolicy': {
          '.default': 'mode'
      },
      'region': region.geometry().bounds(),
      'scale': 4.7,
      'maxPixels': 1e13
  });
  
  // Exportar a Google Drive
  if(param.exportOpcion.exportClasifToDrive){
    Export.image.toDrive({
      image: filtered.toInt8(),
      description: prefixo_out + 'DRIVE-'+param.version_output,
      folder: param.exportOpcion.DriveFolder,
      scale: 4.7,
      maxPixels: 1e13,
      region: region.geometry().bounds()
    });
  }
  
  /**
* Función para generar las estadísticas de cobertura por año y clase
*/
function getAreas(image, region) {

  var pixelArea = ee.Image.pixelArea();
  
  var reducer = {
    reducer: ee.Reducer.sum(),
    geometry: region.geometry(),
    scale: 30,
    maxPixels: 1e13
  };
  
  var bandNames = image.bandNames();
  
  var classIds = ee.List.sequence(0, 34);
  
  
  bandNames.evaluate( function(bands, error) {
    
    if(error) print(error.message);
    
    var yearsAreas = [];
  
  
    bands.forEach(function(band) {
    
      var year = ee.String(band).split('_').get(1),
          yearImage = image.select([band]);
  
      
      // Calcular áreas para cada clase cobertura
      var covers = classIds.map(function(classId) {
  
        classId = ee.Number(classId).int8();
      
        var yearCoverImage = yearImage.eq(classId),
            coverArea = yearCoverImage.multiply(pixelArea).divide(1e6);
        
        return coverArea.reduceRegion(reducer).get(band);
  
      }).add(year);
  
    
      // Generar la lista de keys para el diccionario
      var keys = classIds.map(function(item) {
  
        item = ee.Number(item).int8();
        
        var stringItem = ee.String(item);
        
        stringItem = ee.Algorithms.If(
          item.lt(10),
          ee.String('ID0').cat(stringItem),
          ee.String('ID').cat(stringItem)
        );
        
        return ee.String(stringItem);
        
      }).add('year');
  
      
      // Crear la lista de features para cada año, sin geometrías
      var dict = ee.Dictionary.fromLists(keys, covers);
  
      yearsAreas.push( ee.Feature(null, dict) );
      
    });
    
    
    yearsAreas = ee.FeatureCollection(yearsAreas);
  
    
    Export.table.toDrive({
      collection: yearsAreas,
      description: 'ESTADISTICAS-DE-COBERTURA-'+prefixo_out+param.version_output,
      fileFormat: 'CSV',
      folder: 'P02_2-FiltroTempor-CLASSIFICATION'
    });
      
  });
  
}

// Generar estadísticas de cobertura
if(param.exportOpcion.exportEstadistica){
  getAreas(filtered, region)
}
  
  
  
  

function Legend() {
  
  var legendColors = [
          {color: palette_0_17[1], label:'c1_area_urbana y carret'},
          {color: palette_0_17[2], label:'c2_mineria'},
          {color: palette_0_17[3], label:'c3_agricultura'},
          {color: palette_0_17[4], label:'c4_bosque_seco'},
          {color: palette_0_17[5], label:'c5_bosque'},
          {color: palette_0_17[6], label:'c6_manglar'},
          {color: palette_0_17[7], label:'c7_bosque_plantado'},
          {color: palette_0_17[8], label:'c8_pastizales'},
          {color: palette_0_17[9], label:'c9_arbustal_matorral'},
          {color: palette_0_17[10], label:'c10_poca_vegetacion'},
          {color: palette_0_17[11], label:'c11_totoral'},
          {color: palette_0_17[12], label:'c12_bofedal'},
          {color: palette_0_17[13], label:'c13_areas_humedas_costeras'},
          {color: palette_0_17[14], label:'c14_glaciar'},
          {color: palette_0_17[15], label:'c15_Agua'},
          {color: palette_0_17[16], label:'c16_aguas_maritima'},
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
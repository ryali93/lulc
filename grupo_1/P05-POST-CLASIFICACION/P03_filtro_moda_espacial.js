// SCRIPT FILTRO ESPACIAL

var param = { 
    code_region: 113,  //Region de Clasificacion 
    year: 2023,  // Solo visualizacion
    month: 6, 
    version_input: '23', 
    version_output: '24',
    eightConnected: true,
    min_connect_pixel: 113
};

var cloud_Blue_thr = 1600;
// Combinacion de bandas para color natural
var RGB = {bands: ['R', 'N', 'B'], gain: [0.2, 0.06, 0.2]}; // ANDES


var dirinput = "projects/ee-anp-lineabase/assets/clasificacion-post";
var dirout  =   "projects/ee-anp-lineabase/assets/clasificacion-post";


var AssetRegions = 'projects/ee-eturpocayo/assets/sernanp/AUXILIAR_DATA/limite_anp_y_za_v2';
var AssetRegionsRaster = 'projects/ee-eturpocayo/assets/sernanp/AUXILIAR_DATA/limite_anp_y_za_v2_raster';

var prefixo_out = 'ANP'+ '-' + param.code_region + '-' + param.version_output

var region = ee.FeatureCollection(AssetRegions).filterMetadata('Codigo_uni', 'equals', param.code_region)
var regionRaster = ee.Image(AssetRegionsRaster).eq(param.code_region).selfMask()

Map.addLayer(region,{},'region')
Map.centerObject(region)


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
            
            
var clasif_origin = ee.ImageCollection(dirinput)
                      .filterMetadata('code_region', 'equals', param.code_region)
                      .filterMetadata('version', 'equals', param.version_input)
                      .first()
print(clasif_origin)


var years = [
    1,2,3,
    4,5,6,
    7,8,9,
    10,11,12];    
    
// get band names list 
var bandNames = ee.List(
    years.map(
        function (year) {
            return 'clasificacion_' + String(year);
        }
    )
);

// add connected pixels bands
var imageFilledConnected = clasif_origin.addBands(
    clasif_origin
        .connectedPixelCount(150, param.eightConnected)
        .rename(bandNames.map(
            function (band) {
                return ee.String(band).cat('_connected')
            }
        ))
);

print(imageFilledConnected)
clasif_origin= imageFilledConnected;


var vis = {
      bands: 'clasificacion_1',
      min:0,
      max:17,
      palette: palette_0_17,
      format: 'png'
    };
var vis2 = {
      min:0,
      max:17,
      palette: palette_0_17,
      format: 'png'
    };
var vis3 = {
      bands: 'clasificacion_'+param.month,
      min:0,
      max:17,
      palette: palette_0_17,
      format: 'png'
    };
// Map.addLayer(clasif_origin.select(bandNames), vis, 'clasif_origin_1985', false);

var year = '1'
var moda_84 = clasif_origin.select('clasificacion_'+year).focal_mode(1, 'square', 'pixels')
moda_84 = moda_84.mask(clasif_origin.select('clasificacion_'+year+ '_connected').lte(param.min_connect_pixel))
var class_outTotal = clasif_origin.select('clasificacion_'+year).blend(moda_84)

// Map.addLayer(class_outTotal, vis, 'class4 MODA_1985', false);

var yearsCompl = years.slice(1)        
for (var i_year=0;i_year<yearsCompl.length; i_year++){  
  var yearc = yearsCompl[i_year]; 
  var moda = clasif_origin.select('clasificacion_'+yearc).focal_mode(1, 'square', 'pixels')
  moda = moda.mask(clasif_origin.select('clasificacion_'+yearc+ '_connected').lte(param.min_connect_pixel))
  var class_out = clasif_origin.select('clasificacion_'+yearc).blend(moda)
  class_outTotal = class_outTotal.addBands(class_out)
}


class_outTotal = class_outTotal.select(bandNames).updateMask(regionRaster)
                          .set('code_region', param.code_region)
                          .set('version', param.version_output)
                          .set('descripcion', 'filtro espacial')

            
print('Result', class_outTotal)


Map.addLayer(mosaic.filter(ee.Filter.eq('month', param.month)).mosaic().updateMask(regionRaster), RGB, 'mosaic-'+param.month, false);

  
Map.addLayer(clasif_origin.select(bandNames), vis3, 'class-ORIGINAL'+param.month);
Map.addLayer(class_outTotal, vis3, 'class-SPATIAL FILTER'+param.month);
Map.addLayer(region,{},'region',false)

Export.image.toAsset({
    'image': class_outTotal,
    'description': prefixo_out,
    'assetId': dirout+'/'+ prefixo_out,
    'pyramidingPolicy': {
        '.default': 'mode'
    },
    'region': region.geometry().bounds(),
    'scale': 4.7,
    'maxPixels': 1e13
});

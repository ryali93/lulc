// MOSAICOS PLANET 
var region = 114;  // 101 - 114
var version = '1'
var area_trabajo = ee.FeatureCollection("projects/ee-anp-lineabase/assets/AUXILIAR-DATA/limite_anp_y_za_v2")
                      .filter(ee.Filter.eq('Codigo_uni', region));

print(area_trabajo)
var area_trabajo_raster = ee.Image("projects/ee-anp-lineabase/assets/AUXILIAR-DATA/limite_anp_y_za_v2_raster").eq(region);
    
var nicfi = ee.ImageCollection('projects/planet-nicfi/assets/basemaps/americas')
              // .filter(ee.Filter.eq('cadence ', 'monthly'));
var vis = {'bands':['R','G','B'],'min':64,'max':5454,'gamma':1.8};


for (var month = 1; month<=12; month++){
  
  var date1 = ee.Date.fromYMD(2023, month, 1)
  var date2 = date1.advance(1, 'month')

  var basemap= nicfi.filter(ee.Filter.date(date1,date2))
  // print(basemap)
  basemap = basemap.median().updateMask(area_trabajo_raster);
  Map.addLayer(basemap, vis, 'mosaic'+month);  

  Export.image.toAsset({
    image: basemap.set('year', 2023)
                  .set('month', month)
                  .set('version',version), 
    description: 'planet-' + region + '-' +  'month' + month + '-' + version, 
    assetId: 'projects/ee-anp-lineabase/assets/mosaics/' + 'planet-' + region + '-month' + month + '-' + version, 
    region: area_trabajo.geometry().bounds(), 
    scale: 4.77,
    maxPixels: 1e13
  })
     
}

var loadBaseData = function(anp_cod) {
  var anp_za = ee.FeatureCollection('projects/ee-teledetecciondde/assets/Shp_ANP_ZA_ZR_ACR_ACP_Dissolve')
                   .filter(ee.Filter.eq('CODIGO', anp_cod));
  var anp_core = ee.FeatureCollection('projects/royyali/assets/anps_grupo2')
                   .filter(ee.Filter.eq('codigo', anp_cod));
  return {anp_za: anp_za, anp_core: anp_core};
};

var loadRemappedReference = function(anp_geom) {
  var MB_remap = ee.Image('projects/royyali/assets/peru_collection3_integration_v1-classification_2023')
                    .remap([3, 4, 5, 6, 9, 11, 12, 13, 15, 18, 21, 24, 25, 30, 31, 32, 33, 34],
                           [5, 4, 6, 5, 7, 12, 8, 9, 8, 3, 3, 1, 10, 2, 15, 10, 15, 14])
                    .rename('MBc3_2023')
                    .clip(anp_geom);

  var WC_remap = ee.ImageCollection('ESA/WorldCover/v200').first()
                    .remap([10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 100],
                           [7, 9, 8, 3, 1, 10, 14, 15, 12, 6, 17])
                    .clip(anp_geom);

  return {MB: MB_remap, WC: WC_remap};
}

var loadMapBiomas2023 = function(geometry){
  return ee.Image('projects/royyali/assets/peru_collection3_integration_v1-classification_2023')
           .clip(geometry);
};

var loadWorldCover2021 = function(geometry){
  return ee.ImageCollection('ESA/WorldCover/v200')
           .first()
           .clip(geometry);
};

var loadSlopeElevation = function(geometry){
  var srtm = ee.Image("USGS/SRTMGL1_003").clip(geometry);
  var slope = ee.Terrain.slope(srtm);
  return srtm.addBands(slope.rename('slope'));
};

var loadCanopyHeight = function(geometry){
  var canopy_ht = ee.ImageCollection("projects/sat-io/open-datasets/facebook/meta-canopy-height").mosaic();
  return canopy_ht.clip(geometry).rename('canopy_height')
}

var getMonthlyPlanet = function(year, month, geometry, blueThr) {
  var planetAssets = ee.ImageCollection([
    'projects/ee-midagri01-369019/assets/PERU_ENERO_2023',
    'projects/ee-midagri004/assets/PERU_FEBRERO_2023',
    'projects/ee-proyecto-354405/assets/PERU_MARZO_2023',
    'projects/ee-proyecto-354405/assets/PERU_ABRIL_2023',
    'projects/ee-midagri005/assets/PERU_MAYO_2023',
    'projects/ee-midagri005/assets/PERU_JUNIO_2023',
    'projects/ee-midagri100/assets/PERU_JULIO_2023',
    'projects/ee-midagri105/assets/PERU_AGOSTO_2023',
    'projects/ee-midagri106/assets/PERU_SETIEMBRE_2023',
    'projects/ee-midagri106/assets/PERU_OCTUBRE_2023',
    'projects/ee-midagri107/assets/PERU_NOVIEMBRE_2023',
    'projects/ee-midagri107/assets/PERU_DICIEMBREE_2023'
  ]);
  
  var MB_aux = ee.Image('projects/royyali/assets/peru_collection3_integration_v1-classification_2023');
  
  var withIndices = planetAssets.filterBounds(geometry.bounds())
    .map(function(img) {
      img = img.updateMask(img.select('B').lte(blueThr).or(MB_aux.eq(34)));
      return img
        .addBands(img.normalizedDifference(['N','R']).rename('NDVI'))
        .addBands(img.normalizedDifference(['G','N']).rename('NDWI'));
    });
    
  return ee.Image(withIndices.toList(12).get(month)).clip(geometry);
}

var applySNIC = function(image) { //
  var snic = ee.Algorithms.Image.Segmentation.SNIC({
    image: image,
    size: 15,
    compactness: 0,
    connectivity: 8,
    neighborhoodSize: 256
  }).select(['clusters'], ['segments']);
  
  return image.addBands(snic);
}


var classifyImage = function (segImage, samplePoints, inputBands, classProp) {
  var samples = segImage.sampleRegions({
    collection: samplePoints,
    properties: [classProp],
    scale: 5
  }).filter(ee.Filter.notNull(inputBands));

  var classifier = ee.Classifier.smileRandomForest(50).train({
    features: samples,
    classProperty: classProp,
    inputProperties: inputBands
  });

  return {
    classified: segImage.classify(classifier),
    classifier: classifier,
    training: samples
  }
}

var paletteFromSchema = function(schema){ 
  return schema.SCHEMA.map(function(d){ return d.color.replace('#',''); });
};
var codesFromSchema = function(schema){
  return schema.SCHEMA.map(function(d){ return d.code; });
};

// UTILES/utils.js
var kfoldRF = function(table, predictors, classProp, nTrees, seed, K){
  var withFold = table.randomColumn('r', seed).map(function(f){
    return ee.Feature(f).set('fold', ee.Number(f.get('r')).multiply(K).int());
  });
  var init = ee.Dictionary({oas: ee.List([]), kps: ee.List([])});
  var out = ee.List.sequence(0, K-1).iterate(function(k, acc){
    acc = ee.Dictionary(acc); k = ee.Number(k);
    var trainK = withFold.filter(ee.Filter.neq('fold', k));
    var testK  = withFold.filter(ee.Filter.eq('fold',  k));
    var rfK = ee.Classifier.smileRandomForest({numberOfTrees: nTrees, seed: seed})
      .train({features: trainK, classProperty: classProp, inputProperties: predictors});
    var cmK = testK.classify(rfK).errorMatrix(classProp, 'classification');
    return ee.Dictionary({
      oas: ee.List(acc.get('oas')).add(cmK.accuracy()),
      kps: ee.List(acc.get('kps')).add(cmK.kappa())
    });
  }, init);
  return ee.Dictionary(out);
};

exports = {
  loadBaseData: loadBaseData,
  loadRemappedReference: loadRemappedReference,
  loadMapBiomas2023: loadMapBiomas2023,
  loadWorldCover2021: loadWorldCover2021,
  loadSlopeElevation: loadSlopeElevation,
  loadCanopyHeight: loadCanopyHeight,
  getMonthlyPlanet: getMonthlyPlanet,
  applySNIC: applySNIC,
  classifyImage: classifyImage,
  paletteFromSchema: paletteFromSchema,
  codesFromSchema: codesFromSchema,
  kfoldRF: kfoldRF
};
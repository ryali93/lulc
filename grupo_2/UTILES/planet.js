exports.getPlanetMonthlyImage = function(year, month, geom) {
  var monthsES = ['ENERO','FEBRERO','MARZO','ABRIL','MAYO','JUNIO','JULIO','AGOSTO','SETIEMBRE','OCTUBRE','NOVIEMBRE','DICIEMBRE'];
  var key = year + '-' + (('0' + month).slice(-2)) + ' (' + monthsES[month - 1] + ')';
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

  var assetId = PLANET_ASSETS[key];
  if (!assetId) {
    print('⚠️ No se encontró mosaico Planet para ' + key);
    return ee.Image();
  }

  var img = ee.Image(assetId).clip(geom);
  var hasNIR = img.bandNames().contains('N');
  var ndvi = ee.Image(ee.Algorithms.If(
    hasNIR, img.normalizedDifference(['N','R']).rename('NDVI'),
    ee.Image(0).rename('NDVI')
  ));
  var ndwi = ee.Image(ee.Algorithms.If(
    hasNIR, img.normalizedDifference(['G','N']).rename('NDWI'),
    ee.Image(0).rename('NDWI')
  ));
  return img.addBands(ndvi).addBands(ndwi);
};

//var palettes = require('users/gena/packages:palettes');
var utils    = require('users/ryali93/lulc:UTILES/utils.js');
var samples  = require('users/ryali93/lulc:P2_MUESTRAS/ANP/samples');
samples = ee.FeatureCollection(samples.sh01).flatten()

// Definir las colecciones y variables necesarias
var version = '1'
var year = 2023
var month = 9
var anp_cod = 'SH01'
var cloud_blue_thr = 30

var palette_1_17       = ["ffffff", "ff0000","b40b0b","ffbd08","5bdd4a","139b01","17ff7e","0f5e00","ffec13","ceb747","f8b3ff","d72fff","00ff00","ccebc5","13f5ff","0000ff","3b8aff","d4d4d4"];
var remap_MB = {
    from: [3, 4, 5, 6, 9, 11, 12, 13, 15, 18, 21, 24, 25, 30, 31, 32, 33, 34],
    to:   [5, 4, 6, 5, 7, 12,  8,  9,  8,  3,  3,  1, 10,  2, 15, 10, 15, 14]
}
var remap_WC = {
    from: [10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 100],
    to:   [ 7,  9,  8,  3,  1, 10, 14, 15, 12,  6,  17]
}

var base        = utils.loadBaseData(anp_cod);
var planet      = utils.getMonthlyPlanet(2023, month, base.anp_za.geometry(), 30);
var mbc3        = utils.loadMapBiomas2023(base.anp_za.geometry()).remap(remap_MB.from, remap_MB.to);
var wc          = utils.loadWorldCover2021(base.anp_za.geometry()).remap(remap_WC.from, remap_WC.to);
var topography  = utils.loadSlopeElevation(base.anp_za.geometry())
var c_height    = utils.loadCanopyHeight(base.anp_za.geometry())
// Add variables:
planet = planet.addBands(topography)
planet = planet.addBands(c_height)
var snic        = utils.applySNIC(planet);

Map.centerObject(base.anp_za);
Map.addLayer(planet, {bands:['R','G','B'], min:0, max:60}, 'Planet RGB');
Map.addLayer(mbc3,   {min: 0, max: 17, palette: palette_1_17}, 'MapBiomas');
Map.addLayer(wc,     {min: 0, max: 17, palette: palette_1_17}, 'WorldCover');
Map.addLayer(snic.randomVisualizer(),{},'snic')

var resultado   = utils.classifyImage(snic, samples, ['R','G','B','N','NDVI','NDWI','elevation','slope','canopy_height','segments'], 'clase', 100);
Map.addLayer(resultado.classified, {min:0, max:17, palette: palette_1_17}, 'Clasificado');
print('Muestras usadas:', resultado.training.size());

/**** ======================================================================
      MÓDULO GENERAL DE GENERACIÓN DE SAMPLES PARA ANP
      Versión: G1 (mínima)
      Contiene:
      - LUT de clases
      - Función generarSamples(ANP, fcDict)

      ⚠️ Este módulo NO guarda ni exporta samples de ningún ANP.
      Solo provee la función para ser usada desde cada script de ANP.
====================================================================== ****/

// ======================================================
// LUT: Diccionario de clases → código numérico
// ======================================================
var CLASS_LUT = {
  c01_area_urbana: 1,
  c02_mineria: 2,
  c03_agricultura: 3,
  c04_bosque_seco: 4,
  c05_bosque: 5,
  c06_manglar: 6,
  c07_bosque_plantado: 7,
  c08_pastizal: 8,
  c09_arbustal_matorral: 9,
  c10_poca_vegetacion: 10,
  c11_totoral: 11,
  c12_bofedal: 12,
  c13_areas_humedas_costeras: 13,
  c14_glaciar: 14,
  c15_agua: 15,
  c16_agua_maritima: 16,
  c17_sin_dato: 17,
  c18_acuicultura: 18,
  c19_area_salina: 19,
  c20_banco_arena: 20,
  c21_tillandsial: 21,
  c22_cultivo_transitorio: 22,
  c23_cultivo_permanente: 23,
  c24_loma: 24,
  c25_bosque_puyas: 25,
  c26_afloramiento_rocoso: 26,
  c27_gramadal: 27,
  c28_pajonal: 28,
  c29_pasto: 29
};


// ======================================================
// Función principal: generar samples unificados
// Params:
//   ANP     = string, ej: "SH01"
//   fcDict  = { nombreClase: FeatureCollection, ... }
//
// Retorna: FeatureCollection con propiedades:
//   - anp
//   - clase
//   - inicio
//   - fin
//   - meses (array de enteros)
// ======================================================
function generarSamples(ANP, fcDict) {

  var keys = Object.keys(fcDict);

  var listFC = keys.map(function(k){

    var fc = fcDict[k];                     // FC de esa clase
    var code = CLASS_LUT[k];                // código numérico

    // Parsear meses desde el nombre si existe "_x_y"
    var inicio = 1;
    var fin = 12;

    var parts = k.split('_');               // ej: ["c11", "totoral", "4", "a", "8"] 
    if (parts.length >= 5) {
      var maybeStart = parseInt(parts[2], 10);
      var maybeEnd   = parseInt(parts[4], 10);
      if (!isNaN(maybeStart) && !isNaN(maybeEnd)) {
        inicio = maybeStart;
        fin    = maybeEnd;
      }
    }

    // Crear lista de meses activos
    var months = [];
    for (var m = inicio; m <= fin; m++) { months.push(m); }

    return fc.map(function(f){
      return f.set({
        anp: ANP,
        clase: code,
        inicio: inicio,
        fin: fin,
        meses: months
      });
    });
  });

  return ee.FeatureCollection(listFC).flatten();
}


// ======================================================
// Exportar función (único export en este módulo)
// ======================================================
exports.generarSamples = generarSamples;

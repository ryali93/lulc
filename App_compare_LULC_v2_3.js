// LÍNEA BASE DE COBERTURAS DE LA TIERRA DE LAS ÁREAS NATURALES PROTEGIDAS DE LOS BIOMAS ANDINOS Y COSTEROS (GRUPO 1)
// By: Efrain Yury Turpo Cayo
 


// Display a grid of linked maps, each with a different visualization.

/*
 * Load the FeatureCollection
 */
var featureCollection = ee.FeatureCollection('projects/ee-eturpocayo/assets/sernanp/AUXILIAR_DATA/limite_anp_y_za_v2');
var anp_y_za_raster = ee.Image("projects/ee-eturpocayo/assets/sernanp/AUXILIAR_DATA/limite_anp_y_za_v2_raster");
var ESTADISTIC_ANP_MAPBIOMAS = ee.FeatureCollection("projects/ee-eturpocayo/assets/sernanp/stadistic/ESTADISTIC_ANP_ZA_MAPBIOMAS-COL2-PERU_to_gee");
var ESTADISTIC_ANP_WoldCover= ee.FeatureCollection("projects/ee-eturpocayo/assets/sernanp/stadistic/ESTADISTIC_ANP_ZA_WoldCover_to_gee");


// Create a menu for selecting anp_nomb
var anpSelector = ui.Select({
  items: featureCollection.aggregate_array('anp_nomb').getInfo(),
  placeholder: 'Selecciona un ANP',
});

// Create a label for the selected ANP
var anpLabel = ui.Label('Selecciona un ANP:');

// Create visualization
var Mapbiomas = ee.Image('projects/mapbiomas-public/assets/peru/collection2/mapbiomas_peru_collection2_integration_v1').updateMask(anp_y_za_raster)
                  .select('classification_2021');
                  
var WorldCover = ee.ImageCollection('ESA/WorldCover/v200').first().updateMask(anp_y_za_raster);

var sentinel2 = ee.ImageCollection('COPERNICUS/S2')
                  .filterDate('2021-05-01', '2021-11-30')
                  .filter(ee.Filter.lte('CLOUDY_PIXEL_PERCENTAGE', 10))
                  .mosaic()
                  .updateMask(anp_y_za_raster);
    
    
var nicfi = ee.ImageCollection('projects/planet-nicfi/assets/basemaps/americas');
var basemap= nicfi.filter(ee.Filter.date('2021-06-01','2021-07-01')).first().updateMask(anp_y_za_raster);

//palette
var palettes = require('users/mapbiomas/modules:Palettes.js');
var mapbiomasPalette = palettes.get('classification8');


// Each map has a name and some visualization parameters.
var MAP_PARAMS = {
  'Mapbiomas_2021': [Mapbiomas,{ 
          'min': 0,
          'max': 62,
          'palette': mapbiomasPalette}],
  'WorldCover_2021': [WorldCover,{}], 
};


// Shared visualization parameters for the images.
function getVisualization(bands) {
  return {gamma: 1.3, min: 0, max: 0.3, bands: bands};
}

/*
 * Configure maps, link them in a grid
 */

// Create a map for each visualization option.
var maps = [];
Object.keys(MAP_PARAMS).forEach(function(name) {
  var map = ui.Map();
  map.add(ui.Label(name));
  // map.addLayer(basemap,{min:50, max:2500,gamma:1.8, bands: ['R','G','B']}, 'Planet_2021');
  map.addLayer(MAP_PARAMS[name][0], MAP_PARAMS[name][1], name);
  // map.addLayer(featureCollection.style({color: 'black', width: 1, fillColor: '00000000'}), {}, 'Límite ANP');
  map.setControlVisibility(true);
  map.centerObject(featureCollection.first(), 10)
  maps.push(map);
  
});

// Create a linker to synchronize maps
var linker = ui.Map.Linker(maps);

// Create a grid of maps.
var mapGrid = ui.Panel(
    [
      ui.Panel([maps[0], maps[1]], null, {stretch: 'both'}),
      // ui.Panel([maps[2], maps[3]], null, {stretch: 'both'})
    ],
    ui.Panel.Layout.Flow('horizontal'), {stretch: 'both'});

// Crear el panel derecho donde se añadirá la tabla de áreas
    var rightPanel_stat = ui.Panel({
      style: {width: '400px', padding: '10px', backgroundColor: '#f9f9f9'}
    });
    
    // Crear un layout horizontal con el panel izquierdo, la cuadrícula de mapas y el panel derecho
    var mainLayout = ui.Panel({
      widgets: [rightPanel_stat],
      layout: ui.Panel.Layout.Flow('horizontal'),
      style: {stretch: 'both'}
    });


// Create a panel for the ANP selector
var anpPanel = ui.Panel({
  widgets: [anpLabel, anpSelector],
  style: {padding: '8px', backgroundColor: '#f0f0f0'}
});

// Create a title panel
var title = ui.Label('Áreas Naturales Protegidas(ANP) PERÚ', {
  stretch: 'horizontal',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '20px',
  margin: '10px'
});


/*
 * Crear una función para la leyenda
 */
function Legend_WorldCover() {
    // Colores y etiquetas para la leyenda
    var legendColors = [
    {color: '#006400', label: 'Bosque'},
    {color: '#ffbb22', label: 'Matorrales'},
    {color: '#ffff4c', label: 'Pastizales)'},
    {color: '#f096ff', label: 'Tierras de cultivo'},
    {color: '#fa0000', label: 'Construcciones'},
    {color: '#b4b4b4', label: 'Escasa vegetacion'},
    {color: '#f0f0f0', label: 'Nieve y hielo'},
    {color: '#0064c8', label: 'Cuerpos de agua permanentes'},
    {color: '#0096a0', label: 'Humedales herbáceos'},
    {color: '#00cf75', label: 'Manglares'},
    {color: '#fae6a0', label: 'Musgo y líquenes'}
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
        value: 'Leyenda WorldCover',
        style: {fontWeight: 'bold', fontSize: '14px', margin: '0 0 4px 0'}
      });
    
      legendPanel.add(legendTitle);
    
      // Añadir cada color y etiqueta a la leyenda
      legendColors.forEach(function(item) {
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
    
        legendPanel.add(legendItem);
      });
    
      return legendPanel;
}

var legend_WC = Legend_WorldCover();



// /*
// * Crear una función para la leyenda
// */
// function Legend_Mapbiomas() {

//   var legendColors =[
//       // Color   Nombre de clase  
//     {color: mapbiomasPalette[3], label:'Bosque'},   
//     {color: mapbiomasPalette[4], label:'Bosque seco'},
//     {color: mapbiomasPalette[5], label:'Manglar'},
//     {color: mapbiomasPalette[6], label:'Bosque inundable'},     
//     {color: mapbiomasPalette[9], label:'Plantación forestal'},  
//     {color: mapbiomasPalette[11],label:'Zona pantanosa o pastizal inundable'}, 
//     {color: mapbiomasPalette[12],label:'Pastizal / herbazal'},  
//     {color: mapbiomasPalette[13],label:'Matorral y otras formaciones no boscosas'}, 
//     // {color: mapbiomasPalette[14],label:'C14-Agropecuario'},         
//     {color: mapbiomasPalette[15],label:'Pasto'},         
//     {color: mapbiomasPalette[18],label:'Agricultura'},          
//     {color: mapbiomasPalette[21],label:'Mosaico agropecuario'}, 
//     // {color: mapbiomasPalette[22],label:'C22-Area sin Vegetación'},  
//     {color: mapbiomasPalette[24],label:'Infraestructura'},//
//     {color: mapbiomasPalette[25],label:'Otra área sin vegetación'},// 
//     {color: mapbiomasPalette[27],label:'No observado'},
//     {color: mapbiomasPalette[30],label:'Minería'},             
//     {color: mapbiomasPalette[31],label:'Acuicultura'},     
//     {color: mapbiomasPalette[32],label:'Salina'},    
//     {color: mapbiomasPalette[33],label:'Río, lago u océano'},    
//     {color: mapbiomasPalette[34],label:'Glaciar'},        
//     {color: mapbiomasPalette[35],label:'Palma aceitera'},   
//     ]

//   // Crear un panel para la leyenda
//   var legendPanel = ui.Panel({
//     style: {
//       position: 'bottom-left',
//       padding: '8px 15px'
//     }
//   });

//   // Crear un título para la leyenda
//   var legendTitle = ui.Label({
//     value: 'Leyenda Mapbiomas col2',
//     style: {fontWeight: 'bold', fontSize: '16px', margin: '0 0 4px 0'}
//   });

//   legendPanel.add(legendTitle);

//   // Añadir cada color y etiqueta a la leyenda
//   legendColors.forEach(function(item) {
//     var colorBox = ui.Label('', {
//       backgroundColor: item.color,
//       padding: '6px',
//       margin: '0 0 4px 0'
//     });

//     var description = ui.Label(item.label, {
//       margin: '0 0 4px 6px'
//     });

//     var legendItem = ui.Panel({
//       widgets: [colorBox, description],
//       layout: ui.Panel.Layout.Flow('horizontal')
//     });

//     legendPanel.add(legendItem);
//   });

//   return legendPanel;
// }

// var legend_MB = Legend_Mapbiomas();


function Legend_Mapbiomas() {
  
  var legendColors = [
    {color: mapbiomasPalette[3], label: 'Bosque'},   
    {color: mapbiomasPalette[4], label: 'Bosque seco'},
    {color: mapbiomasPalette[5], label: 'Manglar'},
    {color: mapbiomasPalette[6], label: 'Bosque inundable'},     
    {color: mapbiomasPalette[9], label: 'Plantación forestal'},  
    {color: mapbiomasPalette[11],label: 'Zona pantanosa o pastizal inundable'}, 
    {color: mapbiomasPalette[12],label: 'Pastizal / herbazal'},  
    {color: mapbiomasPalette[13],label: 'Matorral y otras forma. no boscosas'}, 
    {color: mapbiomasPalette[15],label: 'Pasto'},         
    {color: mapbiomasPalette[18],label: 'Agricultura'},          
    {color: mapbiomasPalette[21],label: 'Mosaico agropecuario'}, 
    {color: mapbiomasPalette[24],label: 'Infraestructura'},
    {color: mapbiomasPalette[25],label: 'Otra área sin vegetación'},
    {color: mapbiomasPalette[27],label: 'No observado'},
    {color: mapbiomasPalette[30],label: 'Minería'},             
    {color: mapbiomasPalette[31],label: 'Acuicultura'},     
    {color: mapbiomasPalette[32],label: 'Salina'},    
    {color: mapbiomasPalette[33],label: 'Río, lago u océano'},    
    {color: mapbiomasPalette[34],label: 'Glaciar'},        
    {color: mapbiomasPalette[35],label: 'Palma aceitera'},   
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

var legend_MB = Legend_Mapbiomas();
// Map.add(legend_MB);  // Añadir la leyenda al mapa




// Crear el panel izquierdo con el título, selector de ANP y la leyenda
var leftPanel = ui.Panel({
  widgets: [title, anpPanel],
  layout: ui.Panel.Layout.Flow('vertical'),
  style: {width: '350px', padding: '10px', backgroundColor: '#ffffff'}
});

// Crear un layout horizontal con el panel izquierdo y la cuadrícula de mapas
// var mainLayout = ui.Panel({
//   widgets: [leftPanel, mapGrid],
//   layout: ui.Panel.Layout.Flow('horizontal'),
//   style: {stretch: 'both'}
// });


// PANEL DERECHO

// Crear el panel derecho donde se añadirá la tabla de áreas
var rightPanel = ui.Panel({
  style: {width: '450px', padding: '10px', backgroundColor: '#f9f9f9'}
});

// Crear un layout horizontal con el panel izquierdo, la cuadrícula de mapas y el panel derecho
var mainLayout0 = ui.Panel({
  widgets: [leftPanel, rightPanel],
  layout: ui.Panel.Layout.Flow('vertical'),
  style: {stretch: 'both',width: '450px', padding: '10px', backgroundColor: '#f9f9f9'}
});

// Crear un layout horizontal con el panel izquierdo, la cuadrícula de mapas y el panel derecho
var mainLayout = ui.Panel({
  widgets: [mapGrid, mainLayout0],
  layout: ui.Panel.Layout.Flow('horizontal'),
  style: {stretch: 'both'}
});

// MAP ON CLICK
    // Crear un panel para mostrar los valores del inspector
    // var inspectorPanel = ui.Panel({
    //   style: {width: '150px', padding: '1px', backgroundColor: '#f0f0f0'}
    // });

    // Mapeo de clases Mapbiomas
    var mapbiomasClasses = {
      3: 'Bosque',
      4: 'Bosque seco',
      5: 'Manglar',
      6: 'Bosque inundable',
      9: 'Plantación forestal',
      11: 'Zona pantanosa o pastizal inundable',
      12: 'Pastizal / herbazal',
      13: 'Matorral y otras formaciones no boscosas',
      15: 'Pasto',
      18: 'Agricultura',
      21: 'Mosaico agropecuario',
      24: 'Infraestructura',
      25: 'Otra área sin vegetación',
      27: 'No observado',
      30: 'Minería',
      31: 'Acuicultura',
      32: 'Salina',
      33: 'Río, lago u océano',
      34: 'Glaciar',
      35: 'Palma aceitera'
    };
    
    // Mapeo de clases WorldCover
    var worldCoverClasses = {
      10: 'Bosque',
      20: 'Matorrales',
      30: 'Pastizales',
      40: 'Tierras de cultivo',
      50: 'Construcciones',
      60: 'Escasa vegetación',
      70: 'Nieve y hielo',
      80: 'Cuerpos de agua permanentes',
      90: 'Humedales herbáceos',
      95: 'Manglares',
      100: 'Musgo y líquenes'
    };

/*
 * Función para crear el inspector en los mapas 1 y 2
 */
function addInspector(map, mapName) {
      var inspectorPanel = ui.Panel({
      style: {width: '150px', padding: '1px', backgroundColor: '#f0f0f0'}
    });
  map.onClick(function(coords) {
    inspectorPanel.clear();
    inspectorPanel.add(ui.Label('Inspector - ' + mapName, {fontWeight: 'bold', fontSize: '10px'}));

    var point = ee.Geometry.Point([coords.lon, coords.lat]);

    // Extraer los valores de las capas en la ubicación seleccionada
    var mapbiomasValue = Mapbiomas.reduceRegion({
      reducer: ee.Reducer.first(),
      geometry: point,
      scale: 30
    }).get('classification_2021');
    
    var worldCoverValue = WorldCover.reduceRegion({
      reducer: ee.Reducer.first(),
      geometry: point,
      scale: 10
    }).get('Map');

    mapbiomasValue.evaluate(function(result) {
      var mapbiomasClassName = result ? mapbiomasClasses[result] : 'Sin datos';
      inspectorPanel.add(ui.Label('Mapbiomas 2021: ' + (mapbiomasClassName ? mapbiomasClassName : 'Sin datos'), {fontSize: '10px'}));
    });

    worldCoverValue.evaluate(function(result) {
      var worldCoverClassName = result ? worldCoverClasses[result] : 'Sin datos';
      inspectorPanel.add(ui.Label('WorldCover 2021: ' + (worldCoverClassName ? worldCoverClassName : 'Sin datos'), {fontSize: '10px'}));
    });
  });

  map.add(inspectorPanel)
}
  
  // Añadir inspector al mapa 1 (Mapbiomas)
  addInspector(maps[0], 'click');
  addInspector(maps[1], 'click2');
  

// Crear la leyenda para cada mapa
function addLegendToMap(map, legend) {
  map.add(legend);
}


/*
 * Función para actualizar los mapas y la tabla de áreas según el ANP seleccionado
 */
function updateMaps(selectedANP) { 
  // Filtrar la colección de características por el ANP seleccionado
  var filteredFeatures = featureCollection.filter(ee.Filter.eq('anp_nomb', selectedANP));
  
  // Obtener la geometría del ANP seleccionado
  var geometry = filteredFeatures.geometry();
  
  // Obtener el centroide de la geometría del ANP seleccionado
  var centroid = geometry.centroid();
  
  // Centrar los mapas en el ANP seleccionado
  maps.forEach(function(map) {
    var center = centroid.coordinates().getInfo();
    map.setCenter(center[0], center[1], 10); // Ajustar el nivel de zoom según sea necesario
  });

  // Añadir el límite del ANP a uno de los mapas (por ejemplo, al mapa 0)
  maps[0].clear()
  maps[1].clear()
  
  maps[0].add(ui.Label('Mapbiomas_2021'));
  maps[1].add(ui.Label('WorldCover_2021'));
  
  // maps[0].addLayer(basemap.clip(filteredFeatures),{min:50, max:2500,gamma:1.8, bands: ['R','G','B']}, 'Planet_2021');
  maps[0].addLayer(Mapbiomas.clip(filteredFeatures), { 'min': 0, 'max': 62, 'palette': mapbiomasPalette}, 'Mapbiomas_2021');
  maps[1].addLayer(WorldCover.clip(filteredFeatures), {}, 'WorldCover_2021');

  maps[0].addLayer(filteredFeatures.style({color: 'black', width: 2, fillColor: '00000000'}), {}, 'Límite ANP');
  maps[1].addLayer(filteredFeatures.style({color: 'black', width: 2, fillColor: '00000000'}), {}, 'Límite ANP');
  
  addLegendToMap(maps[0], legend_MB);
  addLegendToMap(maps[1], legend_WC);
  // Filtrar las estadísticas por el ANP seleccionado
  var filteredStatsMB = ESTADISTIC_ANP_MAPBIOMAS.filter(ee.Filter.eq('anp_nomb', selectedANP));
  var filteredStatsWC = ESTADISTIC_ANP_WoldCover.filter(ee.Filter.eq('anp_nomb', selectedANP));

  // Generar la tabla de áreas
  var areaTableMB = createAreaTableMAPBIOMAS(filteredStatsMB);
  var areaTableWC = createAreaTableWoldCover(filteredStatsWC);

  // Limpiar el panel derecho y añadir la nueva tabla de áreas
  rightPanel.clear();
  rightPanel.add(areaTableMB);
  rightPanel.add(areaTableWC);
  
  addInspector(maps[0], 'click');
  addInspector(maps[1], 'click2');
}

// Conectar el selector ANP a la función updateMaps
anpSelector.onChange(updateMaps);

/*
 * Función para generar una tabla de áreas MAPBIOMAS
 */
function createAreaTableMAPBIOMAS(statsFeatureCollection) {
  // Crear un panel para la tabla
  var tablePanel = ui.Panel({
    style: {padding: '8px', margin: '8px', width: '420px'}
  });

  // Añadir encabezado a la tabla
  var header = ui.Label('MAPBIOMAS col2 - Tabla de áreas', {
    fontWeight: 'bold', fontSize: '14px', margin: '0 0 5px 0'
  });
  tablePanel.add(header);
  // Añadir encabezado a la tabla
  var headerPanel = ui.Panel({
    layout: ui.Panel.Layout.Flow('horizontal'),
    style: {
      border: '1px solid black',
      backgroundColor: '#d3d3d3',  // Fondo gris para el encabezado
      padding: '2px',
      margin: '0 0 5px 0'
    }
  });
  headerPanel.add(ui.Label('Clase', {fontSize: '12px', fontWeight: 'bold', margin: '0 5px 0 0', width: '250px'}));
  headerPanel.add(ui.Label('Área (km2)', {fontSize: '12px', fontWeight: 'bold', margin: '0 5px 0 2px'}));
  headerPanel.add(ui.Label('Área (%)', {fontSize: '12px', fontWeight: 'bold', margin: '0 0 0 20px'}));  
  tablePanel.add(headerPanel);

  // Calcular el área total
  statsFeatureCollection.aggregate_sum('classification_2021').evaluate(function(totalArea) {
    // Extraer los valores de la colección
    statsFeatureCollection.aggregate_array('level_2').evaluate(function(classes) {
      statsFeatureCollection.aggregate_array('classification_2021').evaluate(function(areas) {
        for (var i = 0; i < classes.length; i++) {
          var rowColor = (i % 2 === 0) ? '#f0f0f0' : '#ffffff';  // Alternar colores de fila
          
          var percentage = (areas[i] / totalArea) * 100;  // Calcular porcentaje del área

          var row = ui.Panel({
            widgets: [
              ui.Label(classes[i].toString(), {fontSize: '12px', margin: '0 5px 0 0', width: '250px'}),  // Columna de clase
              ui.Label(areas[i].toFixed(2), {fontSize: '12px', margin: '0 5px 0 2px'}),  // Columna de área
              ui.Label(percentage.toFixed(2) + '%', {fontSize: '12px', margin: '0 0 0 20px'})  // Columna de porcentaje
            ],
            layout: ui.Panel.Layout.Flow('horizontal'),
            style: {
              backgroundColor: rowColor,  // Aplicar color alterno de fondo
              padding: '2px',
              margin: '0 0 2px 0',
              border: '1px solid #e0e0e0'
            }
          });
          tablePanel.add(row);
        }
      });
    });
  });

  return tablePanel;
}


/*
 * Función para generar una tabla de áreas  WoldCover
 */
function createAreaTableWoldCover(statsFeatureCollection) {
    // Crear un panel para la tabla
  var tablePanel = ui.Panel({
    style: {padding: '8px', margin: '8px', width: '420px'}
  });

  // Añadir encabezado a la tabla
  var header = ui.Label('WoldCover - Tabla de áreas', {
    fontWeight: 'bold', fontSize: '14px', margin: '0 0 5px 0'
  });
  tablePanel.add(header);
  // Añadir encabezado a la tabla
  var headerPanel = ui.Panel({
    layout: ui.Panel.Layout.Flow('horizontal'),
    style: {
      border: '1px solid black',
      backgroundColor: '#d3d3d3',  // Fondo gris para el encabezado
      padding: '2px',
      margin: '0 0 5px 0'
    }
  });
  headerPanel.add(ui.Label('Clase', {fontSize: '12px', fontWeight: 'bold', margin: '0 5px 0 0', width: '250px'}));
  headerPanel.add(ui.Label('Área (km2)', {fontSize: '12px', fontWeight: 'bold', margin: '0 5px 0 2px'}));
  headerPanel.add(ui.Label('Área (%)', {fontSize: '12px', fontWeight: 'bold', margin: '0 0 0 20px'}));  
  tablePanel.add(headerPanel);

  // Calcular el área total
  statsFeatureCollection.aggregate_sum('classification_2021').evaluate(function(totalArea) {
    // Extraer los valores de la colección
    statsFeatureCollection.aggregate_array('clase_spanish').evaluate(function(classes) {
      statsFeatureCollection.aggregate_array('classification_2021').evaluate(function(areas) {
        for (var i = 0; i < classes.length; i++) {
          var rowColor = (i % 2 === 0) ? '#f0f0f0' : '#ffffff';  // Alternar colores de fila
          
          var percentage = (areas[i] / totalArea) * 100;  // Calcular porcentaje del área

          var row = ui.Panel({
            widgets: [
              ui.Label(classes[i].toString(), {fontSize: '12px', margin: '0 5px 0 0', width: '250px'}),  // Columna de clase
              ui.Label(areas[i].toFixed(2), {fontSize: '12px', margin: '0 5px 0 2px'}),  // Columna de área
              ui.Label(percentage.toFixed(2) + '%', {fontSize: '12px', margin: '0 0 0 20px'})  // Columna de porcentaje
            ],
            layout: ui.Panel.Layout.Flow('horizontal'),
            style: {
              backgroundColor: rowColor,  // Aplicar color alterno de fondo
              padding: '2px',
              margin: '0 0 2px 0',
              border: '1px solid #e0e0e0'
            }
          });
          tablePanel.add(row);
        }
      });
    });
  });

  return tablePanel;
}



// // Añadir el layout principal a la interfaz de usuario
ui.root.widgets().reset([mainLayout]);
ui.root.setLayout(ui.Panel.Layout.Flow('horizontal'));


// Connect the ANP selector to the update function
anpSelector.onChange(updateMaps);



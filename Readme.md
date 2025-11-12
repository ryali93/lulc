# README – Flujo de **postclasificación mensual** (P01 → P02A → P02B → P03)

> **Contexto**: Este README documenta el *pipeline* de postclasificación para mapas de cobertura/uso del suelo generados mensualmente y consolidados a nivel anual. Cubre: diseño, parámetros, algoritmos, buenas prácticas y resolución de problemas de los scripts **P01**, **P02A**, **P02B**, **P03**, además del módulo de utilidades **`utils_post.js`**. Está orientado a ejecutarse en **Google Earth Engine (GEE)** con assets organizados por región (ANP/Zona) y año.

---

## 0) Convenciones, assets y pre-requisitos

**Nomenclatura de bandas**

* Todas las imágenes anuales poseen 12 bandas categóricas nombradas como: `clasificacion_1`, `clasificacion_2`, …, `clasificacion_12`.
* Los valores por píxel son códigos de clase (enteros; p.ej. 1..17/29 según LUT).

**NODATA / SIN DATO**

* Se utiliza el código **`17`** para *sin dato* (**configurable** via parámetro `nodata`).
* En los scripts se enmascara `17` antes de rellenar huecos; al final se **reinyecta**.

**Estructura típica de assets**

* **Clasificación mensual cruda** por ANP (12 rasters individuales):

  * `user/clasificacion1/{CODE}/{CODE}_m01`, …, `{CODE}_m12`
* **Postclasificación** (salidas consolidadas por paso):

  * `user/clasificacion1_post/P01-{CODE}` → 12 bandas
  * `user/clasificacion1_post/P02A-{CODE}` → 12 bandas
  * `user/clasificacion1_post/P02B-{CODE}` → 12 bandas
  * `user/clasificacion1_post/P03-{CODE}` → 12 bandas

**Región / máscara**

* `REGION_FC` y `REGION_PROP` (p.ej. CODIGO) definen el *subset* espacial y sirven como máscara (
  `ee.Image(1).clip(geom).selfMask()`).

**Exportación (piramidado y tipo)**

* Exportar **categórico**: `image.byte()` + `pyramidingPolicy: {' .default': 'mode'}`.
* Mantener `scale` y `crs` consistentes con mosaicos/base.

---

## 1) **`utils_post.js`** – API de utilidades

> Módulo común que estandariza nombres, asegura bandas, enmascara valores, implementa relleno temporal, ventanas/bordes, preservaciones, modas y remapeos globales.

### 1.1 Nomenclatura y bandas

* `makeBandNames(months, prefix='clasificacion_')` → `List<string>`

  * Genera nombres `clasificacion_1..12`.
  * Útil para forzar consistencia tras cargar assets heterogéneos.

* `ensureMonthlyBands(img, bandNames, maskRef)` → `Image`

  * Garantiza que `img` **contenga todas** las bandas de `bandNames`. Si falta alguna, crea una banda vacía (misma máscara que `maskRef` o la primera banda).
  * **Usar siempre** después de leer assets intermedios.

### 1.2 Enmascarado y gap-fill temporal

* `maskValueAllBands(img, bandNames, value)` → `Image`

  * Enmascara, para **todas** las bandas, píxeles cuyo valor == `value` (p.ej. 17).

* `gapFillBidirectional(img, bandNames)` → `Image`

  * Aplica *forward fill* (propaga valores hacia delante) y luego *backward fill* (propaga hacia atrás) para cubrir huecos temporales **si existe información adyacente**.
  * Después del fill, se recomienda `unmask(nodata)` para dejar explícitos los vacíos persistentes.

### 1.3 Reglas temporales (P02A)

* `edgeFirst(img, cls)` → fija `mes1` a `cls` si `(mes2==cls) & (mes3==cls)`.
* `edgeLast(img, cls)`  → fija `mes12` a `cls` si `(mes10==cls) & (mes11==cls)`.
* `window3(img, cls)`   → si `(t−1==cls) & (t+1==cls)` entonces `t=cls`.
* `window4(img, cls)`   → si `(t−1==cls) & (t+2==cls)` entonces `t=cls` y `t+1=cls`.

> **Uso recomendado**: aplicar en el orden *3 → 4 → 3* sobre un conjunto de clases priorizadas (ver P02A).

### 1.4 Preservaciones

* `keepClasses(original, filtered, classes)` → `Image`

  * Reinyecta, desde `original`, todas las clases listadas en `classes` (p.ej. `[17]`).

* `keepMonths(original, filtered, bandNamesExclude)` → `Image`

  * Reinyecta meses completos (por nombre de banda) para **no tocarlos**.

### 1.5 Modas

* `temporalMode(img)` → `Image('temporal_mode')`

  * Calcula la **moda temporal** a lo largo de las 12 bandas.

* `spatialModePerBand(img, kernel=3×3, preserve=[])` → `Image`

  * Calcula la **moda espacial** por banda con un *kernel* vecinal (3×3 por defecto).
  * **Nota**: esta utilidad es práctica para inspección; para producción se prefiere la implementación explícita en P03 por control fino de conectividad/tamaño de parche.

### 1.6 Remapeo global

* `remapAllBands(img, from[], to[])` → `Image`

  * Aplica cambios de LUT a **todas** las bandas de `img`.

### 1.7 Errores típicos (y su causa)

* `Image.eq ... Actual type: Integer` → comparar `Image` con **constante JS**. Use `ee.Image.constant(v)` o asegure que ambos operandos sean `Image`.
* `... missing band ...` → no ejecutaste `ensureMonthlyBands` tras leer un asset.
* `Image.max(image1, image2)` faltante → Rama de `ee.Algorithms.If` devolviendo un **entero** en vez de `Image`.

---

## 2) **P01 – Relleno de vacíos mensuales (gap-fill)**

**Objetivo**

* Unificar 12 clasificaciones mensuales en un único *stack* anual estandarizado y rellenar huecos temporales (sin alterar píxeles bien clasificados).

**Entradas**

* 12 assets mensuales: `{DIR_IN_CLASS}/{CODE}/{CODE}_m01..m12`.
* `REGION_FC` + `REGION_PROP` → máscara espacial.
* Parámetros: `code_region`, `year`, `nodata` (=17), rutas I/O.

**Salida**

* Asset categórico **`P01-{code}`** con 12 bandas `clasificacion_1..12`.

**Algoritmo**

1. Construir rutas mensuales y cargar como `ee.Image(id).rename('clasificacion')`.
2. `toBands()` + `rename` → `clasificacion_1..12`.
3. `ensureMonthlyBands` para cubrir faltantes.
4. `maskValueAllBands(nodata)`.
5. `gapFillBidirectional` (forward → backward) y `unmask(nodata)`.
6. Export a `DIR_OUT_POST` con `mode`.

**Parámetros que más afectan el resultado**

* **`nodata`**: si cambias el código, ajusta el enmascarado.
* **Máscara espacial**: impide que rellenos crucen fuera de región.

**Checks (QA)**

* Contar píxeles con 17 antes/después; esperar disminución.
* Visualizar 1–2 meses *original vs. filled*.

---

## 3) **P02A – Filtro temporal mensual (ventanas/bordes)**

**Objetivo**

* Suavizar *picos* temporales (saltos de una banda) imponiendo continuidad cuando el patrón alrededor del mes lo sugiere (ventanas) o asegurando consistencia al inicio/fin del año (bordes).

**Entradas**

* `P01-{code}` (12 bandas) ya normalizado.
* Listas de clases para reglas: `ordem_exec_first`, `ordem_exec_last`, `ordem_exec_middle`.
* Exclusiones: `exclusion.classes` (p.ej. `[17]`) y `exclusion.months`.

**Salida**

* Asset categórico **`P02A-{code}`** con 12 bandas suavizadas temporalmente.

**Algoritmo (patrón recomendado)**

1. **Bordes**: `edgeFirst` sobre `ordem_exec_first`, `edgeLast` sobre `ordem_exec_last`.
2. **Ventanas**: aplicar **`window3` → `window4` → `window3`** sobre `ordem_exec_middle`.
3. **Preservaciones**: `keepClasses(original, filtered, classes)`.
4. **Meses excluidos**: `keepMonths(original, filtered, monthBands)`.

**Calibración**

* Ajustar `ordem_exec_*` según **estabilidad** esperada (bosques/agua primero; usos variables después).
* Si hay sobrecorrección, eliminar clases de `middle` o aplicar solo `window3`.

**Checks (QA)**

* Revisar mensualidades conflictivas (meses secos/húmedos) y su coherencia espacial.
* Comparar histograma de cambios por clase (antes/después).

---

## 4) **P02B – Filtro de frecuencia temporal y moda anual**

**Objetivo**

* Decidir la **clase dominante del año por píxel** mediante **frecuencia temporal** en grupos (naturales/usos) y opcionalmente reforzar con **moda anual** para clases “estables”.

**Entradas**

* `P02A-{code}` (12 bandas).
* Configuración de grupos/umbrales:

  * `FF_naturales`: `clasesNat[]`, `native_vegetation` (%), `perc_majority_nat` (%).
  * `FF_usos`: `clasesUso[]`, `usos_cobertura` (%), `perc_majority_uso` (%).
* `MODE_OVERRIDE_CLASSES` (opcional): lista de clases que se impondrán si son **moda anual** (p.ej. `[1,2]` para urbano/minería persistentes).
* Exclusiones: `exclusion.classes`, `exclusion.months`.

**Salida**

* Asset categórico **`P02B-{code}`** con 12 bandas modificadas por frecuencia/moda.

**Algoritmo**

1. Para cada clase `c`, computar **% de frecuencia anual**: `100*(#meses == c)/12`.
2. Grupo **Naturales**: si la **suma** de % de `clasesNat` > `native_vegetation`, activar filtro de grupo; la clase que tenga `% ≥ perc_majority_nat` **gana** (se escribe en todos los meses donde se aplica).
3. Grupo **Usos**: análogo con `clasesUso`, `usos_cobertura` y `perc_majority_uso`.
4. **Override por moda**: si `temporalMode(out)` pertenece a `MODE_OVERRIDE_CLASSES`, imponer esa clase.
5. **Preservaciones/meses excluidos** como en P02A.

**Calibración**

* Escenarios **estacionales** (NDVI/oscilación fuerte): bajar `perc_majority_nat` (70–80%) y exigir mayor `native_vegetation` para evitar falsos positivos.
* **Usos pequeños pero persistentes**: subir `perc_majority_uso` a 60–70% o activar `MODE_OVERRIDE_CLASSES`.

**Checks (QA)**

* Comparar mapas de **moda anual** (visual) vs. resultado.
* Validar que 17 (NODATA) se conserve si está en `exclusion.classes`.

---

## 5) **P03 – Filtro de moda espacial por mes**

**Objetivo**

* Reducir *speckle* espacial: reemplazar **parches pequeños** por la **moda espacial** del vecindario, **solo** cuando el componente conectado no supera un umbral de tamaño.

**Entradas**

* `P02B-{code}` (12 bandas).
* Parámetros de conectividad y tamaño: `eightConnected`, `min_connect_pixel`, `cpc_max`, `kernel_radius`.
* Preservaciones: `preserve_classes` (p.ej. `[17]`).
* Exclusiones por mes: `exclude_months`.

**Salida**

* Asset categórico **`P03-{code}`** con 12 bandas suavizadas espacialmente.

**Algoritmo** *(por banda mensual)*

1. `cpc = connectedPixelCount(cpc_max, eightConnected)` → tamaño de componente conectado por píxel.
2. `small = (cpc <= min_connect_pixel)`.
3. `keepMask` para clases preservadas: no aplicar filtro donde `band == preserve_class`.
4. `mode = focal_mode(kernel_radius, 'square', 'pixels')`.
5. `band.where(small & !keepMask, mode)` → reemplazo **selectivo**.

**Selección de parámetros**

* `min_connect_pixel` ≈ tamaño máximo de parche “ruidoso”. Para `scale≈5m`:

  * 50 px ≈ 1,25 ha; 113 px ≈ ~2,8 ha. Ajustar según ecosistema.
* `eightConnected = true` (8-conn) suaviza más que 4-conn.
* `kernel_radius = 1` (3×3) es un buen compromiso. Aumentar con cuidado.

**Checks (QA)**

* Revisar el mes más fragmentado pre/post.
* Reportar % de píxeles modificados por clase; vigilar sobre–alisado.

---

## 6) Buenas prácticas, rendimiento y *gotchas*

* **Asegurar bandas siempre** con `ensureMonthlyBands` tras leer *cualquier* asset intermedio.
* **Cuidado con tipos**: no mezclar constantes JS (enteros) con `Image` en expresiones; envolver constantes como `ee.Image.constant(v)` si es necesario.
* **Orden del enmascarado**: `maskValueAllBands` antes de *gap-fill*.
* **`where` + categórico**: escribir valores enteros; al final `byte()`.
* **Piramidado**: `mode` siempre; evita `mean/median` para categorías.
* **`getInfo()`**: evitar en producción (latencias y límites). `spatialModePerBand` lo usa solo para inspección ligera.
* **Conectividad**: 8-conn une diagonales; si ves “puentes” indeseados, probar 4-conn.
* **Escala**: mantener `scale` consistente; `connectedPixelCount` depende de resolución efectiva.
* **Metadatos**: homogenizar claves (`codigo`, `anio`, `descripcion`, `version` si aplica) para trazabilidad.

---

## 7) Control de calidad y validación

**Checks rápidos por paso**

* **P01**: reducción de `nodata`; visual mensual.
* **P02A**: menos “picos” temporales; revisar meses de transición.
* **P02B**: coherencia con **moda anual** y expectativas por clase/grupo.
* **P03**: reducción de parches chicos sin perder bordes críticos.

**Métricas sugeridas**

* % de píxeles modificados por paso y por clase.
* Tamaño medio de parche por clase antes/después de P03.
* Diferencia absoluta mes a mes (nº de píxeles cambiados).

**Inspección visual**

* Añadir `temporalMode()` como *layer* de diagnóstico.
* Superponer mosaicos RGB/NDVI para corroborar.

---

## 8) Presets de parámetros por ecosistema (orientativos)

**Costa árida / Lomas (alta estacionalidad)**

* P02A: aplicar `window3` → `window4` → `window3` solo a clases de vegetación herbácea/arbustiva.
* P02B: `native_vegetation=75`, `perc_majority_nat=70`; `usos_cobertura=40`, `perc_majority_uso=60`; `MODE_OVERRIDE_CLASSES` según necesidad.
* P03: `min_connect_pixel=50–80`, `kernel_radius=1`, `eightConnected=true`.

**Bosque andino/amazónico (muy estable)**

* P02A: set completo 3→4→3 con prioridad alta a bosque/agua.
* P02B: `native_vegetation=90`, `perc_majority_nat=85–90`; `MODE_OVERRIDE_CLASSES=[]`.
* P03: `min_connect_pixel=150–250`, `kernel_radius=1`.

**Zonas urbanas/mineras (parches compactos)**

* P02B: incluir `[1,2]` en `MODE_OVERRIDE_CLASSES` si la moda anual refleja persistencia.
* P03: `min_connect_pixel=25–60`, `kernel_radius=1`; considerar 4-conn si hay “puentes” diagonales.

---

## 9) Lotes y automatización

**Ejecución por lista de ANP**

* Definir `var CODES = ['BP05','RVS01', ...]` y mapear funciones por paso.
* Controlar concurrencia: GEE limita tareas simultáneas; escalonar exportaciones.

**Versionado y nombres**

* Prefijo fijo por paso: `P01-`, `P02A-`, `P02B-`, `P03-` + `{CODE}`.
* Añadir sufijos de versión si necesitas ramas: `P02B-{CODE}-v02`.

**Reanudación**

* Cada paso es **idempotente** si no cambias parámetros. Puedes relanzar sin efectos colaterales (salvo sobrescritura del asset destino).

---

## 10) Solución de problemas (FAQ)

**Q1.** *`Image.eq ... Actual type: Integer`*

* Asegúrate de no pasar `1` (entero JS) a `where/eq`. Usa imágenes: `band.eq(ee.Number(c))` o `ee.Image.constant(c)` si corresponde. En el código incluido ya se trabaja con `Image` y `Number` de EE.

**Q2.** *Faltan bandas `clasificacion_X`*

* Ejecuta `ensureMonthlyBands(img, bandNames, mask)`. Revisa que `bandNames` coincida con `1..12`.

**Q3.** *`Image.max(image1, image2) missing`*

* Alguna rama de `ee.Algorithms.If` devuelve un **entero** en vez de `Image`. Envolver retornos en `ee.Image(...)` y mantener tipos homogéneos.

**Q4.** *Resultados sobre-alisados en P03*

* Baja `min_connect_pixel` o usa 4-conn; reduce `kernel_radius`.

**Q5.** *Clases “invasivas” en P02A*

* Reduce `ordem_exec_middle` o altera el orden priorizando clases más *estables*.

**Q6.** *El filtro de frecuencia (P02B) no “gana” nunca*

* Revisa umbrales: `native_vegetation/usos_cobertura` (umbral de grupo) y `perc_majority_*` (umbral por clase). Si son demasiado altos, no se activará ningún ganador.

---

## 11) Apéndice A – Pseudocódigo resumido por paso

**P01**

```
ids = buildMonthlyAssetIds(CODE)
ic  = ImageCollection(ids.map(id → Image(id).rename('clasificacion')))
stack = ic.toBands().rename('clasificacion_1..12')
stack = ensureMonthlyBands(stack)
stack = maskValueAllBands(stack, nodata)
filled = gapFillBidirectional(stack).unmask(nodata)
Export filled → P01-CODE
```

**P02A**

```
img0 = ensureMonthlyBands(Image(P01-CODE))
working = img0
for c in ordem_exec_first:  working = edgeFirst(working, c)
for c in ordem_exec_last:   working = edgeLast(working, c)
for c in ordem_exec_middle: working = window3(working, c)
for c in ordem_exec_middle: working = window4(working, c)
for c in ordem_exec_middle: working = window3(working, c)
working = keepClasses(img0, working, exclusion.classes)
working = keepMonths(img0, working, monthsExcluded)
Export working → P02A-CODE
```

**P02B**

```
img0 = ensureMonthlyBands(Image(P02A-CODE))
winnerNat = winnerMap(img0, clasesNat, native_vegetation, perc_majority_nat)
winnerUso = winnerMap(img0, clasesUso, usos_cobertura, perc_majority_uso)
working = img0.where(winnerNat, winnerNat).where(winnerUso, winnerUso)
if MODE_OVERRIDE_CLASSES:
  tmode = temporalMode(working)
  for c in MODE_OVERRIDE_CLASSES:
    working = working.where(tmode.eq(c), c)
working = keepClasses(img0, working, exclusion.classes)
working = keepMonths(img0, working, monthsExcluded)
Export working → P02B-CODE
```

**P03**

```
img0 = ensureMonthlyBands(Image(P02B-CODE))
for each band b in 1..12:
  band = img0.select(b)
  cpc = band.connectedPixelCount(cpc_max, eightConnected)
  small = cpc.lte(min_connect_pixel)
  keep = OR_{k in preserve_classes} (band.eq(k))
  mode = band.focal_mode(kernel_radius, 'square', 'pixels')
  out_b = band.where(small.and(keep.not()), mode)
Compose out over 12 bandas y Export → P03-CODE
```

---

## 12) Apéndice B – Campos de metadatos recomendados

* `codigo` (string): ID de la región/ANP (p.ej. `BP05`).
* `anio` (int): año de referencia.
* `descripcion` (string): paso del pipeline (p.ej. `P02B_filtro_moda_frecuencia`).
* `version` (string, opcional): si manejas ramas o iteraciones (`v01`, `p01_v01`, etc.).

---

## 13) Apéndice C – Plantilla rápida de parámetros

**P01**

* `nodata=17`  |  `month_preview`  |  rutas I/O  |  `REGION_FC/PROP`

**P02A**

* `ordem_exec_first=[]`  |  `ordem_exec_last=[]`  |  `ordem_exec_middle=[...]`
* `exclusion.classes=[17]`  |  `exclusion.months=[]`

**P02B**

* `FF_naturales`: `clasesNat=[...]`, `native_vegetation=90`, `perc_majority_nat=90`
* `FF_usos`: `clasesUso=[1,2]`, `usos_cobertura=50`, `perc_majority_uso=50`
* `MODE_OVERRIDE_CLASSES=[1,2]` (opcional)

**P03**

* `eightConnected=true`  |  `min_connect_pixel=113`  |  `cpc_max=400`
* `kernel_radius=1`      |  `preserve_classes=[17]`  |  `exclude_months=[]`

---

### Contacto y mantenimiento

* Mantener este README junto a los scripts en el repositorio GEE/Code Editor.
* Registrar cambios de parámetros por ANP y año en un `CHANGELOG.md`.
* Para ejecuciones masivas, considerar un *driver* que recorra `{code_region}×{year}` y escriba un `manifest` con parámetros por región.

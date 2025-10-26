/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var c1_area_urbana = /* color: #ff0000 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-69.99373763967839, -15.812429788845785]),
            {
              "clase": 1,
              "system:index": "0"
            })]),
    c2_mineria = /* color: #b40b0b */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-80.21125169733158, -3.484942225822244]),
            {
              "clase": 2,
              "system:index": "0"
            })]),
    c3_agricultura = /* color: #ffbd08 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-70.02674254616082, -15.781012495495412]),
            {
              "clase": 3,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-77.68739808620954, -7.595112829488631]),
            {
              "clase": 3,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-80.30099210871448, -3.4620301451006834]),
            {
              "clase": 3,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-80.29830989969959, -3.4608521261728824]),
            {
              "clase": 3,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-79.15354514864107, -5.137651120139052]),
            {
              "clase": 3,
              "system:index": "4"
            })]),
    c4_bosque_seco = /* color: #5bdd4a */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-77.69562114248811, -7.588973014577623]),
            {
              "clase": 4,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.183452097976, -14.877545868227934]),
            {
              "clase": 4,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.84034163709364, -17.158555174612033]),
            {
              "clase": 4,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.84221918340407, -17.158801206060648]),
            {
              "clase": 4,
              "system:index": "3"
            })]),
    c5_bosque = /* color: #139b01 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-74.92471500620302, -11.298996766488536]),
            {
              "clase": 5,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.52350264332071, -11.026989293665109]),
            {
              "clase": 5,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.52354555866495, -11.025472861519134]),
            {
              "clase": 5,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.52805166980997, -11.026441694070094]),
            {
              "clase": 5,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53238611957804, -11.02892694558106]),
            {
              "clase": 5,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53073387882486, -11.028863761480878]),
            {
              "clase": 5,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5168722226359, -11.026441694070094]),
            {
              "clase": 5,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.52654963276163, -11.024398717350966]),
            {
              "clase": 5,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.52828770420328, -11.023619433832161]),
            {
              "clase": 5,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53318005344644, -11.023029704391371]),
            {
              "clase": 5,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53333025715128, -11.020881394286874]),
            {
              "clase": 5,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5329011037089, -11.021070951691902]),
            {
              "clase": 5,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53270798465982, -11.019596613100266]),
            {
              "clase": 5,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53272944233194, -11.019912543420448]),
            {
              "clase": 5,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53079825184122, -11.019196434207714]),
            {
              "clase": 5,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53075533649698, -11.019449178834751]),
            {
              "clase": 5,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53880196354167, -11.02372474253645]),
            {
              "clase": 5,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53865175983684, -11.02431447058361]),
            {
              "clase": 5,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54290037891643, -11.020755022615688]),
            {
              "clase": 5,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54367285511272, -11.019828295368235]),
            {
              "clase": 5,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54508906147258, -11.021028827834678]),
            {
              "clase": 5,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54380160114543, -11.024946320750457]),
            {
              "clase": 5,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54313641330974, -11.024819950825702]),
            {
              "clase": 5,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53268652698772, -11.023851112931814]),
            {
              "clase": 5,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5309913708903, -11.02153431372331]),
            {
              "clase": 5,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53817969105022, -11.021134137466444]),
            {
              "clase": 5,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54032545826213, -11.019870419397352]),
            {
              "clase": 5,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53993922016399, -11.019364930649873]),
            {
              "clase": 5,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53983193180339, -11.019828295368235]),
            {
              "clase": 5,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53940277836101, -11.020291659356841]),
            {
              "clase": 5,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53867321750896, -11.019301744495356]),
            {
              "clase": 5,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5405185773112, -11.017385091360865]),
            {
              "clase": 5,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54508906147258, -11.014773368094824]),
            {
              "clase": 5,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54478865406291, -11.017406153551047]),
            {
              "clase": 5,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54568987629192, -11.016900660570313]),
            {
              "clase": 5,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54854374668376, -11.015594799684823]),
            {
              "clase": 5,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54873686573283, -11.016690038238757]),
            {
              "clase": 5,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54905873081462, -11.014057246376796]),
            {
              "clase": 5,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53283673069255, -11.015299927070103]),
            {
              "clase": 5,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53302984974162, -11.014562744240953]),
            {
              "clase": 5,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5326650693156, -11.013951934212509]),
            {
              "clase": 5,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53142052433269, -11.01645835349993]),
            {
              "clase": 5,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53073387882488, -11.01715340716922]),
            {
              "clase": 5,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.52936058780925, -11.018690944302321]),
            {
              "clase": 5,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53560477039592, -11.011466556199752]),
            {
              "clase": 5,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5355833127238, -11.011003178317646]),
            {
              "clase": 5,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53678494236247, -11.010034294935133]),
            {
              "clase": 5,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53663473865764, -11.010160671209285]),
            {
              "clase": 5,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54159146091716, -11.011424430967878]),
            {
              "clase": 5,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5430934979655, -11.011024240964478]),
            {
              "clase": 5,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55169802448528, -11.015236740042806]),
            {
              "clase": 5,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55167656681316, -11.015657986635253]),
            {
              "clase": 5,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57026957016421, -11.065572739599666]),
            {
              "clase": 5,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57134245377017, -11.06529897592105]),
            {
              "clase": 5,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5700335357709, -11.066562498457209]),
            {
              "clase": 5,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57037685852481, -11.067004730057382]),
            {
              "clase": 5,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56835983734561, -11.068120835412833]),
            {
              "clase": 5,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56893919449283, -11.0674680195891]),
            {
              "clase": 5,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56943272095157, -11.06470933020597]),
            {
              "clase": 5,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5625574771861, -11.068394596454276]),
            {
              "clase": 5,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56281496925153, -11.06601497269395]),
            {
              "clase": 5,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56275059623518, -11.064203918648568]),
            {
              "clase": 5,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56234290046491, -11.064519800974104]),
            {
              "clase": 5,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57315756721296, -11.066878378239737]),
            {
              "clase": 5,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5712907497386, -11.072374631921098]),
            {
              "clase": 5,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.572084683607, -11.070753142520017]),
            {
              "clase": 5,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55097286996629, -11.101667115827862]),
            {
              "clase": 5,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55011456308152, -11.101151240039496]),
            {
              "clase": 5,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54989998636033, -11.100761700574967]),
            {
              "clase": 5,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55007164773728, -11.100056316978966]),
            {
              "clase": 5,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55215304193284, -11.100835397270277]),
            {
              "clase": 5,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55260365304734, -11.099951035699112]),
            {
              "clase": 5,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54902022180345, -11.101467082467098]),
            {
              "clase": 5,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54730360803391, -11.100372160590817]),
            {
              "clase": 5,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54769971015051, -11.10262516844535]),
            {
              "clase": 5,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54952361228064, -11.104288592994706]),
            {
              "clase": 5,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54971673132971, -11.104741295503468]),
            {
              "clase": 5,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53862452530029, -11.105953744153766]),
            {
              "clase": 5,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53759455703857, -11.105027286301931]),
            {
              "clase": 5,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53618907951477, -11.105122037808126]),
            {
              "clase": 5,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53670406364563, -11.105774769570653]),
            {
              "clase": 5,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53656458877686, -11.106617001946047]),
            {
              "clase": 5,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53601741813782, -11.10669069716326]),
            {
              "clase": 5,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53511619590881, -11.106490667244671]),
            {
              "clase": 5,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53917169593933, -11.103816569904353]),
            {
              "clase": 5,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53916096710327, -11.103490202016243]),
            {
              "clase": 5,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.53949356102112, -11.102574264381479]),
            {
              "clase": 5,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57039439272855, -11.030377010240205]),
            {
              "clase": 5,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57663020784575, -11.027921989057177]),
            {
              "clase": 5,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57641563112456, -11.028037826934879]),
            {
              "clase": 5,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57560023958403, -11.02809048050056]),
            {
              "clase": 5,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57627615625579, -11.028258971847382]),
            {
              "clase": 5,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5768018692227, -11.02842746309763]),
            {
              "clase": 5,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57742414171416, -11.027806151133841]),
            {
              "clase": 5,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57782110864837, -11.027890396900787]),
            {
              "clase": 5,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56428131754119, -11.022919855351281]),
            {
              "clase": 5,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5645709961148, -11.023351621826196]),
            {
              "clase": 5,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56753215486724, -11.024151967761854]),
            {
              "clase": 5,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56864795381743, -11.023425337990277]),
            {
              "clase": 5,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58022289148576, -11.070720620076267]),
            {
              "clase": 5,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58104901186235, -11.071394486966662]),
            {
              "clase": 5,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58080224863298, -11.070667974160148]),
            {
              "clase": 5,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58220772615678, -11.067835609921792]),
            {
              "clase": 5,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58580188623674, -11.069604524627987]),
            {
              "clase": 5,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5839028822542, -11.07021521889082]),
            {
              "clase": 5,
              "system:index": "104"
            })]),
    c6_manglar = /* color: #17ff7e */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-80.28266283014408, -3.418801154096598]),
            {
              "clase": 6,
              "system:index": "0"
            })]),
    c7_bosque_plantado = /* color: #0f5e00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-70.01386794288933, -15.802486206646622]),
            {
              "clase": 7,
              "system:index": "0"
            })]),
    c8_pastizales = /* color: #ffec13 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-70.01039086106388, -15.798535372037525]),
            {
              "clase": 8,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57133853030179, -11.029650395852615]),
            {
              "clase": 8,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56896745753262, -11.029355537327929]),
            {
              "clase": 8,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56801259112332, -11.029302883988828]),
            {
              "clase": 8,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56952535700772, -11.02832353016246]),
            {
              "clase": 8,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56969701838467, -11.029039617151845]),
            {
              "clase": 8,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56978284907315, -11.029271291980843]),
            {
              "clase": 8,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56888162684415, -11.030071621803378]),
            {
              "clase": 8,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56666075777981, -11.031177337052068]),
            {
              "clase": 8,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56657492709134, -11.028555205555778]),
            {
              "clase": 8,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56773364138577, -11.02793389386194]),
            {
              "clase": 8,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56824862551663, -11.028997494436059]),
            {
              "clase": 8,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5685490329263, -11.02910280121423]),
            {
              "clase": 8,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56877433848355, -11.028681573875179]),
            {
              "clase": 8,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56976139140103, -11.028439367881935]),
            {
              "clase": 8,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56718647074673, -11.027976016730138]),
            {
              "clase": 8,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56777655673001, -11.028218223105124]),
            {
              "clase": 8,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56672513079617, -11.02874475801452]),
            {
              "clase": 8,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56640326571438, -11.03113521464262]),
            {
              "clase": 8,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56625306200955, -11.031819703048171]),
            {
              "clase": 8,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56656419825528, -11.032588434279965]),
            {
              "clase": 8,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5567889791375, -11.036500855056303]),
            {
              "clase": 8,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55734687861259, -11.038775414987583]),
            {
              "clase": 8,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55699282702263, -11.039238749110385]),
            {
              "clase": 8,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55675679262932, -11.039259809734958]),
            {
              "clase": 8,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55704647120292, -11.039786324858541]),
            {
              "clase": 8,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55775457438286, -11.038817536301687]),
            {
              "clase": 8,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55756145533378, -11.03630077718253]),
            {
              "clase": 8,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5671637636071, -11.033531264196151]),
            {
              "clase": 8,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56779676493461, -11.03379452700968]),
            {
              "clase": 8,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56860142763908, -11.03358391677772]),
            {
              "clase": 8,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56937390383537, -11.03651138546694]),
            {
              "clase": 8,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57001763399894, -11.037280104423624]),
            {
              "clase": 8,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5726569276696, -11.036753584807341]),
            {
              "clase": 8,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57436281260307, -11.033963015086563]),
            {
              "clase": 8,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56724959429557, -11.03360497780771]),
            {
              "clase": 8,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56842976626213, -11.033594447292906]),
            {
              "clase": 8,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56790405329521, -11.033899832069057]),
            {
              "clase": 8,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56668096598442, -11.03325747061986]),
            {
              "clase": 8,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56600504931266, -11.035774255810953]),
            {
              "clase": 8,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56538277682121, -11.035005532913852]),
            {
              "clase": 8,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56478196200187, -11.035258263951285]),
            {
              "clase": 8,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56569391306694, -11.036321838017772]),
            {
              "clase": 8,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56348377283867, -11.036258655507536]),
            {
              "clase": 8,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56158476885612, -11.036227064247324]),
            {
              "clase": 8,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57222065622527, -11.031913104172103]),
            {
              "clase": 8,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56998905832488, -11.031755145500968]),
            {
              "clase": 8,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57082590753753, -11.031165432378664]),
            {
              "clase": 8,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57620105440337, -11.02978592027475]),
            {
              "clase": 8,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57682332689483, -11.029670083085879]),
            {
              "clase": 8,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57728466684539, -11.030070247726634]),
            {
              "clase": 8,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57462391550261, -11.029459469898251]),
            {
              "clase": 8,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57319698030669, -11.029480531223793]),
            {
              "clase": 8,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57211336786467, -11.030207146031293]),
            {
              "clase": 8,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57148036653716, -11.03048094244936]),
            {
              "clase": 8,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5720811813565, -11.03112330996751]),
            {
              "clase": 8,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57244596178252, -11.031018003913195]),
            {
              "clase": 8,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58344154230363, -11.070625857420445]),
            {
              "clase": 8,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58451442590959, -11.069667699955614]),
            {
              "clase": 8,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58463244310624, -11.070309981679538]),
            {
              "clase": 8,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58472900263078, -11.071120728729477]),
            {
              "clase": 8,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58528690210588, -11.070436332016772]),
            {
              "clase": 8,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58664946428544, -11.068741127117987]),
            {
              "clase": 8,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58780817857988, -11.068509483450553]),
            {
              "clase": 8,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58232574335344, -11.072226289270859]),
            {
              "clase": 8,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57382850519426, -11.067161734842715]),
            {
              "clase": 8,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.574322031653, -11.066129860623528]),
            {
              "clase": 8,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57810076183695, -11.060218901099711]),
            {
              "clase": 8,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57895906872172, -11.058586814801782]),
            {
              "clase": 8,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54958188471242, -11.031778907503362]),
            {
              "clase": 8,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54776871141836, -11.031041765975193]),
            {
              "clase": 8,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54505431589529, -11.030852214997683]),
            {
              "clase": 8,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54918491777822, -11.032705597087029]),
            {
              "clase": 8,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55215680536672, -11.032347558276102]),
            {
              "clase": 8,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55126631197378, -11.033221593429523]),
            {
              "clase": 8,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54623448786184, -11.03260029159968]),
            {
              "clase": 8,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54532253679677, -11.032368619394706]),
            {
              "clase": 8,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54330551561758, -11.03324265448548]),
            {
              "clase": 8,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54452860292837, -11.033221593429523]),
            {
              "clase": 8,
              "system:index": "78"
            })]),
    c9_arbustal_matorral = /* color: #ceb747 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-74.42461002368624, -14.725342189207296]),
            {
              "clase": 9,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.50629791648785, -11.08330983555879]),
            {
              "clase": 9,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.50548252494733, -11.081351485342399]),
            {
              "clase": 9,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.50346550376813, -11.078066481348069]),
            {
              "clase": 9,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.49930271537701, -11.078782446900224]),
            {
              "clase": 9,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.49698528678815, -11.08034071881095]),
            {
              "clase": 9,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.49968895347516, -11.076908298069673]),
            {
              "clase": 9,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.50473150642316, -11.077898018610616]),
            {
              "clase": 9,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.50621208579938, -11.0801301420107]),
            {
              "clase": 9,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.51724132926861, -11.079582641620725]),
            {
              "clase": 9,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.51661905677716, -11.076108096036354]),
            {
              "clase": 9,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.51790651710431, -11.080719756669485]),
            {
              "clase": 9,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.51462349327008, -11.080677641376118]),
            {
              "clase": 9,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.50093349845807, -11.076908298069673]),
            {
              "clase": 9,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.50230678947369, -11.075644820175004]),
            {
              "clase": 9,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.50619062812726, -11.084025788278948]),
            {
              "clase": 9,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.49103728184824, -11.101109189676087]),
            {
              "clase": 9,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.4889773453248, -11.101551369042747]),
            {
              "clase": 9,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.48628440747385, -11.100382750691569]),
            {
              "clase": 9,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.48742166409616, -11.100940740217435]),
            {
              "clase": 9,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.48763624081735, -11.10307793551922]),
            {
              "clase": 9,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.49168101201181, -11.102983183349561]),
            {
              "clase": 9,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.49220672497873, -11.102035659961741]),
            {
              "clase": 9,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.49417010197763, -11.10211988438738]),
            {
              "clase": 9,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.49381605038766, -11.103309551804484]),
            {
              "clase": 9,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.49518934140329, -11.10307793551922]),
            {
              "clase": 9,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.4908870781434, -11.102625230431117]),
            {
              "clase": 9,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.49058667073373, -11.101361863681884]),
            {
              "clase": 9,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.49056521306161, -11.102730510746806]),
            {
              "clase": 9,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.4888700569642, -11.100109019590963]),
            {
              "clase": 9,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.48613420376901, -11.101582953257596]),
            {
              "clase": 9,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.48573723683481, -11.101467144453105]),
            {
              "clase": 9,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.48633805165414, -11.100561728580171]),
            {
              "clase": 9,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.48593035588388, -11.100066907091184]),
            {
              "clase": 9,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.48782935986642, -11.10177245847498]),
            {
              "clase": 9,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.48771134266977, -11.100993380683697]),
            {
              "clase": 9,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.48711052785043, -11.103520111904352]),
            {
              "clase": 9,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.48809758076791, -11.100498559926125]),
            {
              "clase": 9,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.49450269589548, -11.102046188016272]),
            {
              "clase": 9,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.4953717316163, -11.103151631629917]),
            {
              "clase": 9,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.49304357419138, -11.10128816711945]),
            {
              "clase": 9,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.51075254439856, -11.035807870343532]),
            {
              "clase": 9,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5125442600205, -11.035955296405826]),
            {
              "clase": 9,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.51051651000525, -11.035418243965617]),
            {
              "clase": 9,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.50876770972754, -11.035460365761116]),
            {
              "clase": 9,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.51146064757849, -11.03804031422136]),
            {
              "clase": 9,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.51252280234839, -11.038640543879206]),
            {
              "clase": 9,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.51346693992163, -11.038714256208772]),
            {
              "clase": 9,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.51443253516699, -11.038735316870952]),
            {
              "clase": 9,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57108496170474, -11.066099207493364]),
            {
              "clase": 9,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55735660027895, -11.071375066291465]),
            {
              "clase": 9,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55705619286928, -11.071206599703086]),
            {
              "clase": 9,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55757117700014, -11.07158564939065]),
            {
              "clase": 9,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54677796792421, -11.068047833226345]),
            {
              "clase": 9,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54606986474428, -11.06726866559063]),
            {
              "clase": 9,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54301225032576, -11.057981670189237]),
            {
              "clase": 9,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.52515825531407, -11.061414312752941]),
            {
              "clase": 9,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.51273426315709, -11.051642758355522]),
            {
              "clase": 9,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.51475128433628, -11.05191653478712]),
            {
              "clase": 9,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5480215752323, -11.10339371387704]),
            {
              "clase": 9,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54876186492041, -11.102309327270444]),
            {
              "clase": 9,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54279663207129, -11.102204046802889]),
            {
              "clase": 9,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5434832775791, -11.103372657864782]),
            {
              "clase": 9,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5435369217594, -11.102983121363872]),
            {
              "clase": 9,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54329015853003, -11.104246481097729]),
            {
              "clase": 9,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5445990765293, -11.105330860508868]),
            {
              "clase": 9,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55017412825826, -11.106543505211537]),
            {
              "clase": 9,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55020631476644, -11.107364679644276]),
            {
              "clase": 9,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54112434410217, -11.101171199084868]),
            {
              "clase": 9,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54089903854492, -11.101339648410585]),
            {
              "clase": 9,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54380655311707, -11.100297366648237]),
            {
              "clase": 9,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.498238613044, -11.067601882247274]),
            {
              "clase": 9,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.49775581542131, -11.067375502330178]),
            {
              "clase": 9,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.49667756739733, -11.06738603163253]),
            {
              "clase": 9,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.49556176844713, -11.066648979554063]),
            {
              "clase": 9,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.50038438025591, -11.067375502330178]),
            {
              "clase": 9,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.50219755354998, -11.066685832202038]),
            {
              "clase": 9,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57700571710784, -11.027595536610828]),
            {
              "clase": 9,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5773597686978, -11.02821684901973]),
            {
              "clase": 9,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57739195520598, -11.028501177989249]),
            {
              "clase": 9,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57810005838591, -11.028343217484576]),
            {
              "clase": 9,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57838973695952, -11.02842746309763]),
            {
              "clase": 9,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5789798229428, -11.028564362167367]),
            {
              "clase": 9,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5785292118283, -11.029596368487368]),
            {
              "clase": 9,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5710190265866, -11.0264055617215]),
            {
              "clase": 9,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5678862064572, -11.0264055617215]),
            {
              "clase": 9,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56991395647246, -11.02414143690842]),
            {
              "clase": 9,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5812206732393, -11.06704591240737]),
            {
              "clase": 9,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57731537691362, -11.066414152862999]),
            {
              "clase": 9,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57770161501176, -11.065719215790576]),
            {
              "clase": 9,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5844307751121, -11.057439084157119]),
            {
              "clase": 9,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58468826717753, -11.057554910389323]),
            {
              "clase": 9,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58612593120951, -11.060082016791567]),
            {
              "clase": 9,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58584698147196, -11.060145194172494]),
            {
              "clase": 9,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54689967569753, -11.031526173473411]),
            {
              "clase": 9,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54721081194326, -11.031831560398915]),
            {
              "clase": 9,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54861628946706, -11.032031641315982]),
            {
              "clase": 9,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5533047908251, -11.030241438794171]),
            {
              "clase": 9,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55301511225149, -11.030094009865245]),
            {
              "clase": 9,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55419528421804, -11.0311681332256]),
            {
              "clase": 9,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.54285490450307, -11.033284776592865]),
            {
              "clase": 9,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5426081412737, -11.032379149953439]),
            {
              "clase": 9,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5431123965685, -11.032631883249854]),
            {
              "clase": 9,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5397971862261, -11.031515642884116]),
            {
              "clase": 9,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5397971862261, -11.033284776592865]),
            {
              "clase": 9,
              "system:index": "104"
            })]),
    c10_poca_vegetacion = /* color: #f8b3ff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-70.0046543568059, -15.797679391023799]),
            {
              "clase": 10,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.17948242863396, -14.876446733314484]),
            {
              "clase": 10,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55846958362028, -11.021703726652694]),
            {
              "clase": 10,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55856614314482, -11.022082840280808]),
            {
              "clase": 10,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57662990803541, -11.03847809452377]),
            {
              "clase": 10,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5824449371797, -11.038667640581508]),
            {
              "clase": 10,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57575014347853, -11.04542803663775]),
            {
              "clase": 10,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57620075459303, -11.042268992434215]),
            {
              "clase": 10,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57933357472243, -11.041005365235034]),
            {
              "clase": 10,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56939867253126, -11.037846273447867]),
            {
              "clase": 10,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5769517731172, -11.046017721123729]),
            {
              "clase": 10,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57712343449415, -11.046544224127924]),
            {
              "clase": 10,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57523515934767, -11.046481043817282]),
            {
              "clase": 10,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58423610103313, -11.05317517694237]),
            {
              "clase": 10,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58339925182048, -11.05372272668943]),
            {
              "clase": 10,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5838713206071, -11.056671053908726]),
            {
              "clase": 10,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.52972184658712, -11.043409480045577]),
            {
              "clase": 10,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.52911030293173, -11.043704324464162]),
            {
              "clase": 10,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5755221133971, -11.05381064126504]),
            {
              "clase": 10,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57442777211902, -11.054663553002092]),
            {
              "clase": 10,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56821577604053, -11.054010707203805]),
            {
              "clase": 10,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5681728606963, -11.054116005011515]),
            {
              "clase": 10,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57394497449634, -11.054758320819762]),
            {
              "clase": 10,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58228177293692, -11.038668237468698]),
            {
              "clase": 10,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57691735490714, -11.038489221751076]),
            {
              "clase": 10,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57761472925101, -11.039257935531499]),
            {
              "clase": 10,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57493252023612, -11.039331647706096]),
            {
              "clase": 10,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57089847787772, -11.039900283859694]),
            {
              "clase": 10,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57072681650077, -11.039342178015245]),
            {
              "clase": 10,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57203573450003, -11.039321117396577]),
            {
              "clase": 10,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57643455728446, -11.042343300732668]),
            {
              "clase": 10,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5679587767974, -11.040921720111005]),
            {
              "clase": 10,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56783003076468, -11.0410270226153]),
            {
              "clase": 10,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5668429778472, -11.04119550654363]),
            {
              "clase": 10,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56632799371634, -11.037667854118494]),
            {
              "clase": 10,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57675502292527, -11.02643162950977]),
            {
              "clase": 10,
              "system:index": "35"
            })]),
    c11_totoral = /* color: #d72fff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-69.96962504506757, -15.813095174276135]),
            {
              "clase": 11,
              "system:index": "0"
            })]),
    c12_bofedal = /* color: #00ff00 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-74.98559005504937, -11.399855373752377]),
            {
              "clase": 12,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55738707814496, -11.036896587944213]),
            {
              "clase": 12,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58092026582963, -11.071036495374226]),
            {
              "clase": 12,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5796542631746, -11.070288923284686]),
            {
              "clase": 12,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57978300920732, -11.068119900505806]),
            {
              "clase": 12,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57879595628984, -11.067761904910528]),
            {
              "clase": 12,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57889251581437, -11.068783244128749]),
            {
              "clase": 12,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.57836680284746, -11.071394486966662]),
            {
              "clase": 12,
              "system:index": "7"
            })]),
    c13_areas_humedas_costeras = /* color: #ccebc5 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-76.10184896881482, -14.312496169623012]),
            {
              "clase": 13,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-76.1028360217323, -14.31536540112019]),
            {
              "clase": 13,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-76.1018275111427, -14.316030724926476]),
            {
              "clase": 13,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.87179712538452, -17.14039689596638]),
            {
              "clase": 13,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-71.87781880029178, -17.13314117366334]),
            {
              "clase": 13,
              "system:index": "4"
            })]),
    c14_glaciar = /* color: #13f5ff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-74.96559808542669, -11.448957105795413]),
            {
              "clase": 14,
              "system:index": "0"
            })]),
    c15_Agua = /* color: #0000ff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-69.9822752003953, -15.765820726661403]),
            {
              "clase": 15,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58649261437101, -11.067579207818033]),
            {
              "clase": 15,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56297919742478, -11.024620331214415]),
            {
              "clase": 15,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.56293628208054, -11.024873071181215]),
            {
              "clase": 15,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.5631079434575, -11.024873071181215]),
            {
              "clase": 15,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58584121182682, -11.068056731489431]),
            {
              "clase": 15,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58562663510563, -11.068330492590809]),
            {
              "clase": 15,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58635619595768, -11.068288375514948]),
            {
              "clase": 15,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58584121182682, -11.068288375514948]),
            {
              "clase": 15,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55788186505558, -11.057674679395449]),
            {
              "clase": 15,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55805352643253, -11.057295611711123]),
            {
              "clase": 15,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.55813935712101, -11.057716797996795]),
            {
              "clase": 15,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58135655835392, -11.049061298313232]),
            {
              "clase": 15,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58131364300968, -11.049187657809854]),
            {
              "clase": 15,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.58127072766544, -11.049187657809854]),
            {
              "clase": 15,
              "system:index": "14"
            })]),
    c16_aguas_maritima = /* color: #3b8aff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-80.42016359308353, -3.4037217188605067]),
            {
              "clase": 16,
              "system:index": "0"
            })]),
    c17_sin_dato = /* color: #d4d4d4 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-74.93385597452577, -11.269452584852743]),
            {
              "clase": 17,
              "system:index": "0"
            })]);
/***** End of imports. If edited, may not auto-convert in the playground. *****/
// PASO CLASIFICACION 2023 
 
// Parametros de entrada 
var region = 113, // 101 - 114
    version_input = '2',
    version_out = '2',
    year = 2023,
    months = [1,2,3,4,5,6,7,8,9,10,11,12],
    tileScale = 15,
    cloud_Blue_thr = 1600,  //NO ENMASCAR : 10000, ENMASCAR: 1600
    center_ANP = false,
    Descartar_muestras = [9,3]; // descartar muestras automaticas;
//---------------------------------

// var palette_1_17 = ["ff9595","b40b0b","ffbd08","4dbb3f","139b01","17ff7e","0f5e00","ffec13","ceb747","ff91fc","70ff41","1af320","00ea67","13f5ff","0021ff","3b8aff","d4d4d4"];
var palette_0_17 = ["ffffff", "ff0000","b40b0b","ffbd08","5bdd4a","139b01","17ff7e","0f5e00","ffec13","ceb747","f8b3ff","d72fff","00ff00","ccebc5","13f5ff","0000ff","3b8aff","d4d4d4"];
var assets_samples = 'projects/ee-anp-lineabase/assets/training_data/samples/';

var area_trabajo = ee.FeatureCollection("projects/ee-eturpocayo/assets/sernanp/AUXILIAR_DATA/limite_anp_y_za_v2")
                      .filter(ee.Filter.eq('Codigo_uni', region));
                      
var lim_ANP = ee.FeatureCollection("projects/ee-eturpocayo/assets/sernanp/AUXILIAR_DATA/limite_anp_v2")
                      .filter(ee.Filter.eq('Codigo_uni', region));
                      
if(center_ANP){Map.centerObject(area_trabajo, 10)}

var area_trabajo_raster = ee.Image("projects/ee-eturpocayo/assets/sernanp/AUXILIAR_DATA/limite_anp_y_za_v2_raster").eq(region);

var mosaic_coll = ee.ImageCollection('projects/ee-anp-lineabase/assets/mosaics')
                    .filterBounds(area_trabajo.geometry().bounds())
                    .map(function(image){
                        var Mapbiomas = ee.Image('projects/mapbiomas-public/assets/peru/collection2/mapbiomas_peru_collection2_integration_v1')
                                          .select('classification_2021')
                        // image = image.updateMask(image.select('B').lte(cloud_Blue_thr).or(Mapbiomas.eq(34)))
                        image = image.updateMask(image.select('B').lte(cloud_Blue_thr).or(Mapbiomas.eq(34).unmask(area_trabajo_raster)))
                        
                        var ndvi = image.normalizedDifference(['N', 'R']).rename('NDVI');
                        var ndwi = image.normalizedDifference(['G', 'N']).rename('NDWI');
                        
                        return image.addBands(ndvi)
                                    .addBands(ndwi)
                    })
                    
                    
// Mapas referencia remap

    // Mapeo de clases Mapbiomas
    //   3: 'Bosque',
    //   4: 'Bosque seco',
    //   5: 'Manglar',
    //   6: 'Bosque inundable',
    //   9: 'Plantación forestal',
    //   11: 'Zona pantanosa o pastizal inundable',
    //   12: 'Pastizal / herbazal',
    //   13: 'Matorral y otras formaciones no boscosas',
    //   15: 'Pasto',
    //   18: 'Agricultura',
    //   21: 'Mosaico agropecuario',
    //   24: 'Infraestructura',
    //   25: 'Otra área sin vegetación',
    //   27: 'No observado',
    //   30: 'Minería',
    //   31: 'Acuicultura',
    //   32: 'Salina',
    //   33: 'Río, lago u océano',
    //   34: 'Glaciar',
    //   35: 'Palma aceitera'
      
  var remap_MB = {
      from: [3, 4, 5, 6, 9, 11, 12, 13, 15, 18, 21, 24, 25, 30, 31, 32, 33, 34],
      to:   [5, 4, 6, 5, 7, 12,  8,  9,  8,  3,  3,  1, 10,  2, 15, 10, 15, 14]
    }

  // Mapeo de clases WorldCover
  //   10: 'Bosque',
  //   20: 'Matorrales',
  //   30: 'Pastizales',
  //   40: 'Tierras de cultivo',
  //   50: 'Construcciones',
  //   60: 'Escasa vegetación',
  //   70: 'Nieve y hielo',
  //   80: 'Cuerpos de agua permanentes',
  //   90: 'Humedales herbáceos',
  //   95: 'Manglares',
  //   100: 'Musgo y líquenes'

  var remap_WC = {
      from: [10, 20, 30, 40, 50, 60, 70, 80, 90, 95, 100],
      to:   [ 7,  9,  8,  3,  1, 10, 14, 15, 12,  6,  17]
    }
    
  var Mapbiomas = ee.Image('projects/mapbiomas-public/assets/peru/collection2/mapbiomas_peru_collection2_integration_v1')
                    .select('classification_2021')
                    .remap(remap_MB.from, remap_MB.to)
                    .updateMask(area_trabajo_raster);
                    
  var WorldCover = ee.ImageCollection('ESA/WorldCover/v200').first()
                     .remap(remap_WC.from, remap_WC.to)
                     .updateMask(area_trabajo_raster);
  
// var updtReference = ee.Image(WorldCover.updateMask(Mapbiomas.eq(WorldCover))).updateMask(area_trabajo_raster)
  
Map.addLayer(Mapbiomas.selfMask(),{min: 0, max: 17, palette: palette_0_17},'Mapbiomas', false)
Map.addLayer(WorldCover.selfMask(),{min: 0, max: 17, palette: palette_0_17},'WorldCover', false)

var tillandsia = ee.Image('users/gistin/fog_oasis/tillandsia')
Map.addLayer(tillandsia,{palette:'#b30adb'},'tillandsia', false)

var fo_class2021 = ee.Image('users/gistin/fog_oasis/fo_class2021')
Map.addLayer(fo_class2021,{"min":1,"max":6,"palette":["ff0000","ffa906","ffee06","89ff0c","27ff02","30df2f"]},'fo_class2021', false)


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
  
  var geometry_draw = ee.FeatureCollection(list).flatten();
  
  print(geometry_draw)
  
  // Create buffer 4 m
  var geometry_draw_buf = geometry_draw.map(function(fea){
    return fea.buffer(4)
  })

// GEOMETRIAS CLASE COLL
  var Samples_Collect_raster = geometry_draw_buf
                              .reduceToImage(['clase'], ee.Reducer.first())
                              .updateMask(area_trabajo_raster)
                              .rename('clase');
  Map.addLayer(Samples_Collect_raster, {min: 0, max: 17, palette: palette_0_17}, 'Samples_Collect_raster');
  
  var masks_class = area_trabajo_raster.multiply(0).add(99).where(Samples_Collect_raster.eq(1),1)
                                                            .where(Samples_Collect_raster.eq(2),2)
                                                            .where(Samples_Collect_raster.eq(10),10)
                                                            // .where(Mapbiomas.eq(4),4)
                                                            .rename('mask')




var Samples_Collect = ee.FeatureCollection([
                  c1_area_urbana,
                  c2_mineria,
                  c3_agricultura,
                  c4_bosque_seco,
                  c5_bosque,
                  c6_manglar,
                  c7_bosque_plantado,
                  c8_pastizales,
                  c9_arbustal_matorral,
                  c10_poca_vegetacion,
                  c11_totoral,
                  c12_bofedal,
                  c13_areas_humedas_costeras,
                  c14_glaciar,
                  c15_Agua,
                  c16_aguas_maritima,
                  c17_sin_dato,
                  ]).flatten();
// print(Samples_Collect)


// // Geometrias_colectadas_assets
//   var folder = 'projects/ee-anp-lineabase/assets/AUXILIAR-DATA/geometry';
//   var list = ee.List([]);
  
//   function list_folder_to_featColl(e) {
//     var path = e.id;
//     var fc = ee.FeatureCollection(path)
//               // .aggregate_sum('system:asset_size')
//               // .divide(ee.Number(1024).pow(4))
//     return fc; 
//   }
  
//   // Function to recursively concatenate asset lists from multiple pages
//   function listAssetsRecursive(folder, pageToken) {
//     var options = {};
//     if (pageToken !== undefined) {
//       options.pageToken = pageToken;
//     }
  
//     var result = ee.data.listAssets(folder, options);
//     var assets = result['assets'];
//     list = list.cat(assets.map(list_folder_to_featColl));
  
//     if (result.nextPageToken !== null) {
//       // Call the function recursively for the next page
//       listAssetsRecursive(folder, result.nextPageToken);
//     }
//   }
  
//   // Start listing assets
//   listAssetsRecursive(folder);
  
//   // Print the final concatenated asset list
//   // print('Final Asset List:', list);
  
//   var geometry_draw = ee.FeatureCollection(list).flatten();
  
//   print(geometry_draw)

// // GEOMETRIAS CLASE COLL
//   var Samples_Collect_merge = Samples_Collect.merge(geometry_draw)
//                                     .filterBounds(area_trabajo.geometry().bounds())
//   var Samples_Collect_raster = Samples_Collect_merge
//                               .reduceToImage(['clase'], ee.Reducer.first())
//                               .updateMask(area_trabajo_raster)
//                               .rename('clase');
//   Map.addLayer(Samples_Collect_raster, {min: 1, max: 17, 
//   palette: palette_0_17}, 'Samples_Collect_raster');

// // Función para generar el mosaico Planet para un mes y año determinado
// function getPlanetMosaic(year, month) {
//   var startDate = ee.Date.fromYMD(year, month, 1);
//   var endDate = startDate.advance(1, 'month');
//   var collection = ee.ImageCollection('projects/ee-anp-lineabase/assets/mosaics')
//     .filterBounds(area_trabajo.geometry().bounds())
//     .filter(ee.Filter.eq('month', month))
//     // .filterDate(startDate, endDate)
//     .mosaic();
//   return collection;
// }

// // Function for stretch visualization
// function visual(image, geometry, bands, scale, stretch, name, show){
//   typeof scale == 'undefined' ? scale = 100 : null;
//   typeof stretch == 'undefined' ? stretch = [2, 98] : null;
//   typeof name == 'undefined' ? name = 'Layer ' + Map.layers().length() : null;
//   typeof show == 'undefined' ? show = true : null;
  
//   var minMax = image.select(bands).reduceRegion({
//     reducer: ee.Reducer.percentile(stretch),
//     scale: scale,
//     geometry: geometry,
//     bestEffort: true
//   });
  
//   var scaled = ee.Image(bands.map(function(band){
//     var imageBand = image.select(band);
//     var min = ee.Number(minMax.get(band + '_p' + Math.round(stretch[0])));
//     var max = ee.Number(minMax.get(band + '_p' + Math.round(stretch[1])));
    
//     return imageBand.unitScale(min, max).rename(band);
//   }));
//   Map.addLayer(scaled, { min: 0, max: 1, bands: bands}, name, show);
// }

var altitude = ee.Image("USGS/SRTMGL1_003");
var slope = ee.Terrain.slope(altitude).int8()
    .rename('slope');

// Combinacion de bandas para color natural
var RGB = {bands: ['R', 'N', 'B'], gain: [0.3, 0.06, 0.2]}; // ANDES

// var RGB = {bands: ['R', 'N', 'B'], gain: [0.2, 0.06, 0.2]}; // ANDES
// var RGB = {bands: ['R', 'G', 'B'], min:630, max:2950}; //COSTA

var clasificacion =  ee.Image([]).select([])

months.forEach(function(month){
  
  var mosaic_month = mosaic_coll.filter(ee.Filter.eq('month', month)).first().updateMask(area_trabajo_raster)
  
  Map.addLayer(mosaic_month, RGB, "Mosaic_Planet_Month"+month, false);


  var asset_samples_random = ee.FeatureCollection(assets_samples + 'samples-'+ region +'-' + year + '-month'+ month +'-'+version_input);

      // asset_samples_random = asset_samples_random.filter(ee.Filter.neq('clase', Descartar_muestras))
      asset_samples_random = asset_samples_random.filter(ee.Filter.inList('clase', Descartar_muestras).not())
                                                .filter(ee.Filter.and(ee.Filter.eq('clase', 1),ee.Filter.gte('NDVI', 0.5)).not())
                                                .filter(ee.Filter.and(ee.Filter.eq('clase', 15),ee.Filter.lte('NDWI', -0.5)).not())
                                                .filter(ee.Filter.and(ee.Filter.eq('clase', 10),ee.Filter.gte('NDVI', 0.5)).not())
                                                .filter(ee.Filter.and(ee.Filter.eq('clase', 12),ee.Filter.lte('NDVI', 0.5)).not())
     
     
     
  // APLICAR DELETE OUTLAYER
    // Obtenemos las clases únicas
    var clases = asset_samples_random.aggregate_array('clase').distinct();
  
    // Aplicamos la función a cada clase y unimos los resultados
    var puntosFiltrados = ee.FeatureCollection(
      clases.map(function(clase) {
        return filtrarOutliers(clase, asset_samples_random, 'NDVI');
      })//.flatten()
    ).flatten();
    
    asset_samples_random = puntosFiltrados;

  // Select_random
    // Agregar una columna aleatoria a la colección
    var randomFC = asset_samples_random.randomColumn('random',2);
    
    // Ordenar la colección por la columna aleatoria
    var sortedFC = randomFC.sort('random');
    
    
    // Seleccionar los primeros N elementos
    asset_samples_random = sortedFC//.limit(2000);
    
    
    var styledPoints = ee.FeatureCollection(asset_samples_random).map(
    function(point) {
      var classId = point.get('clase'),
          color = ee.List(palette_0_17).get(classId);
      
      return point.set({ style: { color: color } });
    }
      );
    if(month == 12){
    // Map.addLayer(asset_samples_random) 
    print(asset_samples_random.aggregate_histogram('clase'))
    print(asset_samples_random.size())
    
    Map.addLayer(
      styledPoints.style({
        styleProperty: "style",
        width: 1.5,
      }), {}, 'MUESTRAS DE ENTRENAMIENTO automatico', false
    );
    }
    
    

  // Segmentación usando SNIC
  var snic = ee.Algorithms.Image.Segmentation.SNIC({
    image: mosaic_month,
    size: 15,
    compactness: 0,
    connectivity: 8,
    neighborhoodSize: 256 
  }).select(['clusters'], ['segments']);
  
  // Map.addLayer(snic.randomVisualizer(),{},'snic', false)
  
  // Reproyecta la imagen a una resolución fija (por ejemplo, 30 metros)
  var fixedResolutionSegments = snic.reproject({
    crs: mosaic_month.projection(),
    scale: 4.7  // Ajusta según la resolución de tu imagen
  });
  
  // Muestra la imagen con resolución fija en el mapa
  // Map.addLayer(fixedResolutionSegments.randomVisualizer(), {}, 'SNIC Segments (Fixed Resolution)_Month'+month,false);
  
  // Añadir segmentación como banda
  var mosaic_month_segm = mosaic_month.addBands(fixedResolutionSegments)
                                      .addBands(slope)
                                      .addBands(masks_class);
  
  // Definir bandas para el clasificador, incluyendo NDVI y segmentos
  var bandas = ['R', 'G', 'B', 'N', 'NDVI', 'NDWI','segments', 'slope','mask']; //, 'segments'
  
  // Muestreo de regiones y entrenamiento del clasificador
  var Samples_month = Samples_Collect.merge(asset_samples_random)
  
  var entrenamiento = mosaic_month_segm.sampleRegions({
    collection: Samples_month,
    properties: ['clase'],
    scale: 5
  }).filter(ee.Filter.notNull(bandas));
  
  // Verificar la cantidad de muestras
  // print(entrenamiento.limit(2))
  // print('# de muestras de entrenamiento:'+month, entrenamiento.size());
  
  // Entrenar el clasificador Random Forest
  var clasificador = ee.Classifier.smileRandomForest(50).train({
    features: entrenamiento,
    classProperty: 'clase',
    inputProperties: bandas
  });
  

  
  // Clasificar la imagen usando el clasificador entrenado
  var imagenClasificada_month = mosaic_month_segm.classify(clasificador);
  
    clasificacion = clasificacion.addBands(imagenClasificada_month.rename('clasificacion_'+month));
    
  // Añadir la imagen clasificada al mapa
  
  Map.addLayer(imagenClasificada_month, {min: 0, max: 17, 
  palette: palette_0_17}, 'clasificacion'+month, false);
  
  if(month == 12){
  Map.addLayer(asset_samples_random,{},'samples_random', false)
  }

  
})

// print(clasificacion)

// Map.addLayer(Samples_Collect,{},'Samples_Collect')
// Mostrar Limite de ANP seleccionado
var styling = {color: 'black', fillColor: '00000000'};
Map.addLayer(area_trabajo.style(styling),{},'area_trabajo');

// Exportar to assets
var filenameExport = 'clasificacion'+ '-' + region + '-' + version_out;

clasificacion = clasificacion.set('region', region)
                             .set('version', version_out)


Export.image.toAsset({
  image: clasificacion.byte(),
  description: filenameExport,
  assetId: 'projects/ee-anp-lineabase/assets/clasificacion/' + filenameExport,
  scale: 4.7,
  pyramidingPolicy: {
    '.default': 'mode'
  },
  maxPixels: 1e13,
  region: area_trabajo.geometry().bounds()
});



// ACTUALIZAR REFERENCIAS
// updtReference = updtReference.blend(ee.Image(Samples_Collect_raster)).rename('clase');
// updtReference = ee.Image(updtReference).byte(),

// Map.addLayer(updtReference.selfMask(),{min: 1, max: 17, palette: palette_0_17},'updtReference')


// // AREA CLASE
//   var classAreas = getAreas(updtReference, [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17], area_trabajo);
  
//   print('Capa de áreas por clase', classAreas);
  
//   var classAreasDictionary = classAreas.first().toDictionary();
  
//   print(classAreasDictionary)

//   var classNames = classAreasDictionary.keys()
//     .filter(ee.Filter.stringContains('item', 'ID'))
//     .filter(ee.Filter.notEquals('item', 'ORIG_FID'));
  
//   print(classNames)
  
//   // Generar muestras de entrenamiento con base en el área de cada clase de cobertura
//   var classIds = classNames.map(
//     function(name) {
//       var classId = ee.String(name).split('D').get(1);
//       return ee.Number.parse(classId);
//     }
//   );
//   print(classIds)
//   // Calcular áreas de cada clase y total 
//   var areas = classNames.map( function(name) {
//     return classAreasDictionary.get(name);
//   });
  
//   var totalArea = areas.reduce(ee.Reducer.sum());


//   // Calcular numero ponderado de muestras y generar puntos de entrenamiento
//   var pointsPerClass = areas.map(
//     function(area) {
//       return getPointsByArea(
//         area, totalArea, muestras_x_clase, min_muestras_x_clase);
//     });
//   print(pointsPerClass)
  
//   var training = getSamples(updtReference, mosaic_coll, classIds, pointsPerClass);
//   var points = training.points;
//   var data = training.data;
//   print('points',points)
//   Map.addLayer(points,{},'points')

// // Exportar muestras
// var filename = 'samples-' + region + '-'  +   year + '-' + version_out;

// Export.table.toAsset(
//   points,
//   filename,
//   'projects/ee-anp-lineabase/assets/training_data/samples/' + filename
// );

/**
 * Función para eliminar outlayers basado en ee.Reducer.percentile([25, 75])
 * Función para calcular el rango intercuartil y filtrar los outliers
 * 
 */
function filtrarOutliers(clase, puntos, variable) {
    // Filtramos solo la clase actual
    var puntosClase = puntos.filter(ee.Filter.eq('clase', clase));
    
    // Calculamos los percentiles para NDVI
    var stats = puntosClase.reduceColumns({
      reducer: ee.Reducer.percentile([25, 75]),
      selectors: [variable]
    });
    
    // Extraemos los percentiles
    var p25 = ee.Number(stats.get('p25'));
    var p75 = ee.Number(stats.get('p75'));
    var rangoIntercuartil = p75.subtract(p25);
    
    // Establecemos los límites para filtrar outliers
    var limiteInferior = p25.subtract(rangoIntercuartil.multiply(1));
    var limiteSuperior = p75.add(rangoIntercuartil.multiply(1));
    
    // Filtramos los puntos dentro del rango
    return puntosClase.filter(ee.Filter.rangeContains(variable, limiteInferior, limiteSuperior));
}


/**
 * Función para calcular numero de muestras de entrenamiento con base en el área
 * que ocupa cada clase
 */
function getPointsByArea(singleArea, totalArea, sampleSize, minSamples) {
  return ee.Number(singleArea)
    .divide(totalArea)
    .multiply(sampleSize)
    .round()
    .int16()
    .max(minSamples);
}


/**
 * Función para calcular áreas (en Km2) por clase, con base en la imágen
 * de pixeles estables.
 */
function getAreas(image, classes, region){
  
  var reducer = {
      reducer: ee.Reducer.sum(),
      geometry: region.geometry(), 
      scale: 10,
      maxPixels: 1e13
  };
  
  var propFilter = ee.Filter.neq('item', 'OBJECTID');
  
  classes.forEach( function( classId, i ) {
      var imageArea = ee.Image.pixelArea()
        .divide(10000)  //has
        .mask(image.eq(classId))
        .reduceRegion(reducer);
      
      var area = ee.Number(imageArea.get('area')).round();
          
      region = region.map(function(item){
        var props = item.propertyNames();
        var selectProperties = props.filter(propFilter);
        
        return item
          .select(selectProperties)
          .set('ID' + classId.toString(), area);
      });
      
      return region;
  });
  
  return region;
  
}


/**
 * Función para implementar la colecta de puntos todos los años de la lista param.year
 * definida en los parámetros de usuario.
 */
function getSamples(referencePixels, mosaic_coll, classIds, pointsPerClass) {
  
  var list_months = ee.List(months);
  
  var keys = list_months.map( function(month) {
    var stringMonth = ee.String(month);
    return ee.String('samples-').cat(stringMonth);
  });
  
  var points = referencePixels
    .addBands(ee.Image.pixelLonLat())
    .stratifiedSample({
        numPoints: 0,
        classBand: 'clase',
        region: area_trabajo.geometry().bounds(),
        scale: 4.7,
        seed: 1,
        geometries: true,
        dropNulls: true,
        classValues: classIds, 
        classPoints: pointsPerClass,
        tileScale: tileScale
    });

  var monthMosaic;
  
  var trainingSamples = list_months.map( function(month) {
    monthMosaic = mosaic_coll
      .filterMetadata('month', 'equals', month)
      .mosaic();
    
    var training = referencePixels
      .addBands(monthMosaic)
      .sampleRegions({
        collection: points,
        properties: ['clase'],
        scale: 4.7,
        geometries: true,
        tileScale: tileScale
      });
    
    return training;
    
  });
  
  return {
    data: ee.Dictionary.fromLists(keys, trainingSamples),
    points: points
  };

}



// // Validación
// var muestras_validadas = Manglar_V.merge(BosqueSeco_V).merge(Suelo_V).merge(Agua_V);

// var validacion = imagenClasificada.sampleRegions({
//   collection: muestras_validadas,
//   properties: ['Class'],
//   scale: 5
// });

// var matrizConfusion = validacion.errorMatrix('Class', 'classification');

// print('Matriz de Confusión', matrizConfusion);
// print('Exactitud General', matrizConfusion.accuracy());
// print('Kappa', matrizConfusion.kappa());

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

Map.addLayer(lim_ANP.style({color: 'black', fillColor:'00000000'}), {},'anp')

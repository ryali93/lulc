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
            ee.Geometry.Point([-75.04985805730928, -11.23864151364155]),
            {
              "clase": 5,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04972931127656, -11.239904282782419]),
            {
              "clase": 5,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04960056524385, -11.241377506456464]),
            {
              "clase": 5,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04500862341035, -11.229423131414054]),
            {
              "clase": 5,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05286213140596, -11.228370785944888]),
            {
              "clase": 5,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05513664465059, -11.22622398929015]),
            {
              "clase": 5,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05642410497774, -11.231064782683296]),
            {
              "clase": 5,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05856987218965, -11.231317343588064]),
            {
              "clase": 5,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06813999395479, -11.235105730628467]),
            {
              "clase": 5,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07371898870576, -11.239567544885624]),
            {
              "clase": 5,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07637974004854, -11.240661941612215]),
            {
              "clase": 5,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.19731902476973, -11.294308762053213]),
            {
              "clase": 5,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.19367122050947, -11.295907959122797]),
            {
              "clase": 5,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.19311332103437, -11.295318782292266]),
            {
              "clase": 5,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.19869231578535, -11.291489103400234]),
            {
              "clase": 5,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.20139598247236, -11.285933873952152]),
            {
              "clase": 5,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.16440295573896, -11.290394900042717]),
            {
              "clase": 5,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.17929458018965, -11.296539218669725]),
            {
              "clase": 5,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.13695108512348, -11.194815643686672]),
            {
              "clase": 5,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.13901102164692, -11.194815643686672]),
            {
              "clase": 5,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.14124261954731, -11.192626498733675]),
            {
              "clase": 5,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.17531740287251, -11.19473144610995]),
            {
              "clase": 5,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.16312944510884, -11.191447721518905]),
            {
              "clase": 5,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.15900957206196, -11.190858331112153]),
            {
              "clase": 5,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.15660631278462, -11.189174351912213]),
            {
              "clase": 5,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.18716203788227, -11.190774132384696]),
            {
              "clase": 5,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.18166887381977, -11.1935526774646]),
            {
              "clase": 5,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.16647684195942, -11.215106545187313]),
            {
              "clase": 5,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.19480096915669, -11.222852073880919]),
            {
              "clase": 5,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.19531595328755, -11.227650829824663]),
            {
              "clase": 5,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.11068689444966, -11.192963291342247]),
            {
              "clase": 5,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.1087127886147, -11.193131687499621]),
            {
              "clase": 5,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.10708200553364, -11.177554628670844]),
            {
              "clase": 5,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08665430167622, -11.202645911263817]),
            {
              "clase": 5,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0845085344643, -11.214517202981092]),
            {
              "clase": 5,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.10939943412251, -11.220999901131949]),
            {
              "clase": 5,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99342795589527, -11.321671195028712]),
            {
              "clase": 5,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99351915100178, -11.321876336086284]),
            {
              "clase": 5,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99369081237873, -11.32253909849806]),
            {
              "clase": 5,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04978600290818, -11.403663301544823]),
            {
              "clase": 5,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05763951090378, -11.40597703940734]),
            {
              "clase": 5,
              "system:index": "41"
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
            ee.Geometry.Point([-74.99285932758411, -11.322034136799752]),
            {
              "clase": 8,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99311145523151, -11.32230765783028]),
            {
              "clase": 8,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99334748962482, -11.322596958635751]),
            {
              "clase": 8,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99347623565754, -11.322833659077226]),
            {
              "clase": 8,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99352987983784, -11.326845853257991]),
            {
              "clase": 8,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99384101608356, -11.326908972457439]),
            {
              "clase": 8,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99167379119953, -11.326319859387525]),
            {
              "clase": 8,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99094423034748, -11.325846464077157]),
            {
              "clase": 8,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99106224754414, -11.326004262600993]),
            {
              "clase": 8,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99061163642963, -11.326467137768748]),
            {
              "clase": 8,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.991577231675, -11.325762304828858]),
            {
              "clase": 8,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99121245124897, -11.325394107826416]),
            {
              "clase": 8,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99127682426533, -11.32565710573366]),
            {
              "clase": 8,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9913626549538, -11.326119981463151]),
            {
              "clase": 8,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99111589172443, -11.326340899160913]),
            {
              "clase": 8,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9934869644936, -11.327477044625784]),
            {
              "clase": 8,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99328311660847, -11.326993131368384]),
            {
              "clase": 8,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9894206483497, -11.336675264236426]),
            {
              "clase": 8,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98928117348092, -11.336349159361893]),
            {
              "clase": 8,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98918461395638, -11.336128249396772]),
            {
              "clase": 8,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98912024094003, -11.335055255708795]),
            {
              "clase": 8,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99045061661141, -11.334550316108876]),
            {
              "clase": 8,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98954939438241, -11.333908620746927]),
            {
              "clase": 8,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99009656502145, -11.333929659961962]),
            {
              "clase": 8,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99051498962777, -11.333866542312206]),
            {
              "clase": 8,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98843359543221, -11.334171610823578]),
            {
              "clase": 8,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98800444198983, -11.334308365567807]),
            {
              "clase": 8,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98795079780953, -11.334739668563376]),
            {
              "clase": 8,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00063716926856, -11.339928157246321]),
            {
              "clase": 8,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00186025657935, -11.342810454559416]),
            {
              "clase": 8,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00374853172583, -11.34354680322342]),
            {
              "clase": 8,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0059586719541, -11.344283149988977]),
            {
              "clase": 8,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00684265844477, -11.371722354027193]),
            {
              "clase": 8,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0071001505102, -11.371995827461458]),
            {
              "clase": 8,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00948195211542, -11.371280588694225]),
            {
              "clase": 8,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94674634612991, -11.414149318249859]),
            {
              "clase": 8,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94820546783401, -11.414633083494232]),
            {
              "clase": 8,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94826984085037, -11.415222013982978]),
            {
              "clase": 8,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94844150222733, -11.416441937535705]),
            {
              "clase": 8,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99179088354886, -11.363290206202942]),
            {
              "clase": 8,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99252044440091, -11.362785316542833]),
            {
              "clase": 8,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99198400259793, -11.362049017519187]),
            {
              "clase": 8,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99198400259793, -11.361565162839794]),
            {
              "clase": 8,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00735379693624, -11.330311419603394]),
            {
              "clase": 8,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00703193185446, -11.32854409777814]),
            {
              "clase": 8,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00632382867452, -11.327765631128342]),
            {
              "clase": 8,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00563718316671, -11.32568269643042]),
            {
              "clase": 8,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00465013024923, -11.325177740280154]),
            {
              "clase": 8,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00419951913473, -11.325030461235096]),
            {
              "clase": 8,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00520802972433, -11.331026761046452]),
            {
              "clase": 8,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00465013024923, -11.33138443109688]),
            {
              "clase": 8,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00385619638082, -11.331300273478195]),
            {
              "clase": 8,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00346995828268, -11.331868336923526]),
            {
              "clase": 8,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01121617791769, -11.33235224193115]),
            {
              "clase": 8,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0101003789675, -11.331300273478195]),
            {
              "clase": 8,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0087700032961, -11.330984682187575]),
            {
              "clase": 8,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01218177316305, -11.332394320588774]),
            {
              "clase": 8,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01380751760969, -11.412409995444277]),
            {
              "clase": 8,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96524435572616, -11.395625729356626]),
            {
              "clase": 8,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96571642451278, -11.395983318371995]),
            {
              "clase": 8,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04537916540822, -11.36641380107218]),
            {
              "clase": 8,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04645204901418, -11.367760154373771]),
            {
              "clase": 8,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04788971304616, -11.369043391444006]),
            {
              "clase": 8,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03810501455983, -11.364457370095483]),
            {
              "clase": 8,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.037954810855, -11.36079691478859]),
            {
              "clase": 8,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05630112051686, -11.362416777244098]),
            {
              "clase": 8,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04169457188225, -11.379488242900505]),
            {
              "clase": 8,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04036419621086, -11.37915166903004]),
            {
              "clase": 8,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05641453495598, -11.377931585414082]),
            {
              "clase": 8,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05628578892326, -11.376080414081757]),
            {
              "clase": 8,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06748669376945, -11.37637491941689]),
            {
              "clase": 8,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06710045567131, -11.377258433594779]),
            {
              "clase": 8,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06783001652336, -11.378394376366655]),
            {
              "clase": 8,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06031983128166, -11.370779265974186]),
            {
              "clase": 8,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06195061436271, -11.370358535708442]),
            {
              "clase": 8,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06229393711662, -11.368633535123587]),
            {
              "clase": 8,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98315804234123, -11.390847377611374]),
            {
              "clase": 8,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98500340214348, -11.39038460691148]),
            {
              "clase": 8,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98556130161857, -11.389290782263895]),
            {
              "clase": 8,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98955242863273, -11.38844937582638]),
            {
              "clase": 8,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98320095768547, -11.40304742435196]),
            {
              "clase": 8,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98354428043938, -11.40220605863243]),
            {
              "clase": 8,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98045437565422, -11.398293675307325]),
            {
              "clase": 8,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98071186771965, -11.397410226456628]),
            {
              "clase": 8,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98989575138664, -11.399724015242994]),
            {
              "clase": 8,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98770706883049, -11.402121921923422]),
            {
              "clase": 8,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98079769840813, -11.40418326412053]),
            {
              "clase": 8,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97041218510246, -11.401028142439001]),
            {
              "clase": 8,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97084133854484, -11.398546088760279]),
            {
              "clase": 8,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96105664005852, -11.389501133484359]),
            {
              "clase": 8,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95650761356926, -11.392782592378905]),
            {
              "clase": 8,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95234482517814, -11.390048045929515]),
            {
              "clase": 8,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95925419560051, -11.385462362873554]),
            {
              "clase": 8,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9618291162548, -11.385588575323018]),
            {
              "clase": 8,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96706478825188, -11.385209937806652]),
            {
              "clase": 8,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9406289362011, -11.385336150368097]),
            {
              "clase": 8,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.940071036726, -11.381970462905342]),
            {
              "clase": 8,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.93560784092521, -11.378436448234138]),
            {
              "clase": 8,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95625012150383, -11.368843901607672]),
            {
              "clase": 8,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95629303684807, -11.36808658153816]),
            {
              "clase": 8,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96431820622063, -11.368591461808123]),
            {
              "clase": 8,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96616356602287, -11.366193272559595]),
            {
              "clase": 8,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94776099237198, -11.364426172832614]),
            {
              "clase": 8,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95037882837052, -11.36455239460497]),
            {
              "clase": 8,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94977801355118, -11.364973133442538]),
            {
              "clase": 8,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96333926233048, -11.359587629430857]),
            {
              "clase": 8,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96059268029923, -11.360050450176905]),
            {
              "clase": 8,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96424048455948, -11.361859651340566]),
            {
              "clase": 8,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96531336816544, -11.361985874249209]),
            {
              "clase": 8,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02398605771036, -11.372961386947727]),
            {
              "clase": 8,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02460833020181, -11.372919314271378]),
            {
              "clase": 8,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02512331433267, -11.37186749534322]),
            {
              "clase": 8,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01409407086344, -11.371341584422803]),
            {
              "clase": 8,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0149523777482, -11.371636094657847]),
            {
              "clase": 8,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01548881955118, -11.371636094657847]),
            {
              "clase": 8,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02104635663004, -11.3655985739957]),
            {
              "clase": 8,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02252693600626, -11.365219909900674]),
            {
              "clase": 8,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02497311062784, -11.362674432650987]),
            {
              "clase": 8,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02879257626505, -11.36488331917169]),
            {
              "clase": 8,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03855581707926, -11.365009540741639]),
            {
              "clase": 8,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03909225888223, -11.367323592951566]),
            {
              "clase": 8,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03246183819742, -11.372603769000726]),
            {
              "clase": 8,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03301973767252, -11.372940350610342]),
            {
              "clase": 8,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00984545178385, -11.37281413255333]),
            {
              "clase": 8,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01209850735636, -11.369595553205167]),
            {
              "clase": 8,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04439230389566, -11.361538427205037]),
            {
              "clase": 8,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03216143078775, -11.41275935216498]),
            {
              "clase": 8,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03183956570597, -11.41299071938743]),
            {
              "clase": 8,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02789135403604, -11.410003964382984]),
            {
              "clase": 8,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02737636990518, -11.410361535299979]),
            {
              "clase": 8,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0245868725297, -11.409309854846747]),
            {
              "clase": 8,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0229131741044, -11.40970949387789]),
            {
              "clase": 8,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01973743863077, -11.408699878398874]),
            {
              "clase": 8,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03068085141153, -11.41252798475392]),
            {
              "clase": 8,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03239746518106, -11.412822452335272]),
            {
              "clase": 8,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03286953396768, -11.412044215921375]),
            {
              "clase": 8,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03194685406656, -11.410761172850702]),
            {
              "clase": 8,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03336306042642, -11.40764819179072]),
            {
              "clase": 8,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03595943875284, -11.407437854001662]),
            {
              "clase": 8,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03649588055582, -11.40764819179072]),
            {
              "clase": 8,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04385586209268, -11.409415023067373]),
            {
              "clase": 8,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04505749173136, -11.410677038676239]),
            {
              "clase": 8,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04666681714029, -11.411770780999136]),
            {
              "clase": 8,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04025097317667, -11.412002149027401]),
            {
              "clase": 8,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02508039898844, -11.410382568869302]),
            {
              "clase": 8,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02443666882486, -11.409457090344716]),
            {
              "clase": 8,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02778406567545, -11.414694417671981]),
            {
              "clase": 8,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02733345456095, -11.414589251407397]),
            {
              "clase": 8,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02681847043009, -11.41383205315188]),
            {
              "clase": 8,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02767677731485, -11.413516553282486]),
            {
              "clase": 8,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03327722973795, -11.413032786134895]),
            {
              "clase": 8,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04173155255289, -11.410698072222193]),
            {
              "clase": 8,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04248257107706, -11.408973316278951]),
            {
              "clase": 8,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0444352192399, -11.409225720242196]),
            {
              "clase": 8,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.073218581417, -11.381871588911897]),
            {
              "clase": 8,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07845425341407, -11.38784565885163]),
            {
              "clase": 8,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06128811571875, -11.377580278184407]),
            {
              "clase": 8,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04635357592383, -11.414054355444291]),
            {
              "clase": 8,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04952931139746, -11.413255089053354]),
            {
              "clase": 8,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03549599383155, -11.41443295452803]),
            {
              "clase": 8,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0327494118003, -11.413528522545652]),
            {
              "clase": 8,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03283524248877, -11.413255089053354]),
            {
              "clase": 8,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03283524248877, -11.41256098746671]),
            {
              "clase": 8,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0329854461936, -11.41237168673939]),
            {
              "clase": 8,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03131174776831, -11.411551382128826]),
            {
              "clase": 8,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03056072924414, -11.410815209306152]),
            {
              "clase": 8,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03034615252295, -11.410857276376024]),
            {
              "clase": 8,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02995991442481, -11.410100068164647]),
            {
              "clase": 8,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03150486681739, -11.410079034574395]),
            {
              "clase": 8,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03283524248877, -11.410710041604212]),
            {
              "clase": 8,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02332949374, -11.415631848294268]),
            {
              "clase": 8,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02275013659278, -11.417419662922505]),
            {
              "clase": 8,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02740645144263, -11.40862771308338]),
            {
              "clase": 8,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02856516573706, -11.406734673903117]),
            {
              "clase": 8,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03234171603003, -11.407092248937237]),
            {
              "clase": 8,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03324293825904, -11.4068819107364]),
            {
              "clase": 8,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0341012451438, -11.406966046035441]),
            {
              "clase": 8,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04088186953345, -11.41489568605555]),
            {
              "clase": 8,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03875755999366, -11.41350748920945]),
            {
              "clase": 8,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03937983248511, -11.414264688330942]),
            {
              "clase": 8,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00049853060523, -11.411719649934511]),
            {
              "clase": 8,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00032686922827, -11.413591622544931]),
            {
              "clase": 8,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99813818667212, -11.410710041604212]),
            {
              "clase": 8,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00487589571753, -11.408375308588525]),
            {
              "clase": 8,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00148558352271, -11.411341047231442]),
            {
              "clase": 8,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9975588295249, -11.409805597759243]),
            {
              "clase": 8,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99594950411597, -11.409300790639376]),
            {
              "clase": 8,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99502682421485, -11.409553194311501]),
            {
              "clase": 8,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99483370516577, -11.409847664978715]),
            {
              "clase": 8,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99506973955909, -11.413444389191469]),
            {
              "clase": 8,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99584221575537, -11.412476853825703]),
            {
              "clase": 8,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9845554802207, -11.404399908201633]),
            {
              "clase": 8,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98582148287574, -11.402633045724528]),
            {
              "clase": 8,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98502754900733, -11.40482058812394]),
            {
              "clase": 8,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9881389114646, -11.405746081759798]),
            {
              "clase": 8,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96580607991912, -11.3941872157889]),
            {
              "clase": 8,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96222264867522, -11.392167870925345]),
            {
              "clase": 8,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96258742910125, -11.392294080399477]),
            {
              "clase": 8,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96089227300384, -11.391768207221073]),
            {
              "clase": 8,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95484120946624, -11.392230975669428]),
            {
              "clase": 8,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95361812215545, -11.39254649917968]),
            {
              "clase": 8,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9522233734677, -11.39189441687258]),
            {
              "clase": 8,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95449788671233, -11.39065335286668]),
            {
              "clase": 8,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95653636556365, -11.388823299451571]),
            {
              "clase": 8,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95921857457854, -11.388739158781538]),
            {
              "clase": 8,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96353156667449, -11.389538494141927]),
            {
              "clase": 8,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96127851110198, -11.38653045729178]),
            {
              "clase": 8,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96584899526336, -11.385731113479082]),
            {
              "clase": 8,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95960481267669, -11.386551492624935]),
            {
              "clase": 8,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95810277562835, -11.386467351282954]),
            {
              "clase": 8,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95338208776214, -11.388612947729813]),
            {
              "clase": 8,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.950656963403, -11.390443002498388]),
            {
              "clase": 8,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94743831258513, -11.390968878127385]),
            {
              "clase": 8,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94595773320891, -11.390485072584482]),
            {
              "clase": 8,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9448204765866, -11.389286072691851]),
            {
              "clase": 8,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94449861150481, -11.388718123610133]),
            {
              "clase": 8,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94413383107879, -11.387498081007555]),
            {
              "clase": 8,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0411225090573, -11.373824831990635]),
            {
              "clase": 8,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04524238210418, -11.375507728846687]),
            {
              "clase": 8,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04622943502166, -11.373782759441829]),
            {
              "clase": 8,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0465083847592, -11.373383069918207]),
            {
              "clase": 8,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04904039006927, -11.37365654175811]),
            {
              "clase": 8,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05421168904998, -11.37435073832636]),
            {
              "clase": 8,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05528457265594, -11.375171150271026]),
            {
              "clase": 8,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05597121816375, -11.375087005564946]),
            {
              "clase": 8,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05755908590056, -11.375423584240071]),
            {
              "clase": 8,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03736741643645, -11.37197363396435]),
            {
              "clase": 8,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03751762014129, -11.37146875968749]),
            {
              "clase": 8,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0346208344052, -11.37098492099924]),
            {
              "clase": 8,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03867633443572, -11.37841070254914]),
            {
              "clase": 8,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03365523915984, -11.377422011930415]),
            {
              "clase": 8,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02743251424529, -11.373256852057372]),
            {
              "clase": 8,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02616651159026, -11.37578119864652]),
            {
              "clase": 8,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02792604070403, -11.371216322213527]),
            {
              "clase": 8,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04322536092498, -11.374960788459225]),
            {
              "clase": 8,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04401929479339, -11.374140375908588]),
            {
              "clase": 8,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04367597203948, -11.373277888371401]),
            {
              "clase": 8,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04264600377776, -11.372289179933022]),
            {
              "clase": 8,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04339702230193, -11.371910524728674]),
            {
              "clase": 8,
              "system:index": "239"
            })]),
    c9_arbustal_matorral = /* color: #ceb747 */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-74.42461002368624, -14.725342189207296]),
            {
              "clase": 9,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07146543848638, -11.389983278205548]),
            {
              "clase": 9,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07015652048712, -11.389078768387074]),
            {
              "clase": 9,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07247394907598, -11.387416987038064]),
            {
              "clase": 9,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07537073481207, -11.389583611431163]),
            {
              "clase": 9,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07519907343512, -11.387332845952054]),
            {
              "clase": 9,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07086462366705, -11.38634418632734]),
            {
              "clase": 9,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06989902842169, -11.386049691306923]),
            {
              "clase": 9,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06786054957037, -11.38764837489626]),
            {
              "clase": 9,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07065004694586, -11.392402301957585]),
            {
              "clase": 9,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07298893320684, -11.39475820096153]),
            {
              "clase": 9,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07376140940313, -11.393979915057006]),
            {
              "clase": 9,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07118511565024, -11.397825216220625]),
            {
              "clase": 9,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06753731138998, -11.393723459433279]),
            {
              "clase": 9,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08495347339601, -11.396053936918799]),
            {
              "clase": 9,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.09089724857301, -11.394728752171039]),
            {
              "clase": 9,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.09349362689943, -11.39779980580609]),
            {
              "clase": 9,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.09903286491515, -11.393274255897836]),
            {
              "clase": 9,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.10062073265196, -11.391928023259707]),
            {
              "clase": 9,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.10109280143858, -11.392327686739382]),
            {
              "clase": 9,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.09905432258726, -11.391402149404342]),
            {
              "clase": 9,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.10564182792784, -11.3893196793872]),
            {
              "clase": 9,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.10544870887877, -11.390140048183925]),
            {
              "clase": 9,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.10293816124083, -11.386774417549486]),
            {
              "clase": 9,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.10158632789732, -11.385638508223066]),
            {
              "clase": 9,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.09890411888243, -11.384628807236924]),
            {
              "clase": 9,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.09969805275084, -11.385954039046434]),
            {
              "clase": 9,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.11055563484312, -11.386248534165855]),
            {
              "clase": 9,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.11450752554227, -11.390034872829405]),
            {
              "clase": 9,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.11485084829617, -11.388920011680327]),
            {
              "clase": 9,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.11661037740994, -11.390813169531848]),
            {
              "clase": 9,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.11972173986722, -11.391128694615242]),
            {
              "clase": 9,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.11832699117947, -11.390834204548298]),
            {
              "clase": 9,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.12409910497952, -11.397186708318683]),
            {
              "clase": 9,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97411725733936, -11.294031051715981]),
            {
              "clase": 9,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97274396632373, -11.29306311137983]),
            {
              "clase": 9,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97385976527393, -11.290958881992717]),
            {
              "clase": 9,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9519729397124, -11.300806542614591]),
            {
              "clase": 9,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98038289759815, -11.30648773144909]),
            {
              "clase": 9,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98008249018848, -11.30602482398017]),
            {
              "clase": 9,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98287198756397, -11.299417790441876]),
            {
              "clase": 9,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97978208277881, -11.2974398590698]),
            {
              "clase": 9,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98712060664356, -11.294662315393202]),
            {
              "clase": 9,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98836515162647, -11.293357702262607]),
            {
              "clase": 9,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98926637385547, -11.293147280234345]),
            {
              "clase": 9,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9941158077544, -11.295335661784511]),
            {
              "clase": 9,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9845886013335, -11.291884744824106]),
            {
              "clase": 9,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9834728023833, -11.289359657339187]),
            {
              "clase": 9,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97823713038623, -11.28157383109948]),
            {
              "clase": 9,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98141286585987, -11.282499724198733]),
            {
              "clase": 9,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98686311457813, -11.280732107510069]),
            {
              "clase": 9,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9904250881499, -11.303163197575163]),
            {
              "clase": 9,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99081132624805, -11.304089021009098]),
            {
              "clase": 9,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99866483424366, -11.2995861243968]),
            {
              "clase": 9,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98390195582569, -11.30686647336747]),
            {
              "clase": 9,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9825715801543, -11.305267337418186]),
            {
              "clase": 9,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98059747431934, -11.311285092090584]),
            {
              "clase": 9,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96132848475635, -11.310780110542902]),
            {
              "clase": 9,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9547624370879, -11.312379215723158]),
            {
              "clase": 9,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95514867518604, -11.324624698809156]),
            {
              "clase": 9,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95596406672657, -11.324414299743443]),
            {
              "clase": 9,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9519729397124, -11.326307885764427]),
            {
              "clase": 9,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.928624377837, -11.325472532889474]),
            {
              "clase": 9,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.91755221902352, -11.325346293842722]),
            {
              "clase": 9,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.91639350472909, -11.323158141515169]),
            {
              "clase": 9,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.93004058419686, -11.329722548285073]),
            {
              "clase": 9,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.93218635140877, -11.330942838064688]),
            {
              "clase": 9,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9300834995411, -11.336791740902862]),
            {
              "clase": 9,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.92334579049569, -11.33186857166495]),
            {
              "clase": 9,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.91789554177743, -11.330059180468552]),
            {
              "clase": 9,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.92102836190682, -11.334224970939703]),
            {
              "clase": 9,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.92656444131356, -11.331026995788573]),
            {
              "clase": 9,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06341930608858, -11.236999905490894]),
            {
              "clase": 9,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0613164542209, -11.237420831548645]),
            {
              "clase": 9,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06191726904024, -11.243229548393293]),
            {
              "clase": 9,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06693836431612, -11.24175633418434]),
            {
              "clase": 9,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06453510503877, -11.233043170520348]),
            {
              "clase": 9,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07552143316377, -11.24453438897572]),
            {
              "clase": 9,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05938526373018, -11.233632474913223]),
            {
              "clase": 9,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03543850164522, -11.233169450134453]),
            {
              "clase": 9,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04475113134492, -11.236326422520625]),
            {
              "clase": 9,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05063053350557, -11.248785602792607]),
            {
              "clase": 9,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05908485632051, -11.247270325854068]),
            {
              "clase": 9,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05796905737031, -11.246386410626286]),
            {
              "clase": 9,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08234497289766, -11.240956586174956]),
            {
              "clase": 9,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07921215276826, -11.237589201799702]),
            {
              "clase": 9,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06818290929903, -11.229338943917734]),
            {
              "clase": 9,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06895538549531, -11.229338943917734]),
            {
              "clase": 9,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06723877172578, -11.229801974843575]),
            {
              "clase": 9,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06668087225069, -11.230475473045816]),
            {
              "clase": 9,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06921287756074, -11.229717787457773]),
            {
              "clase": 9,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06204601507295, -11.228412879837332]),
            {
              "clase": 9,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0624322531711, -11.221677778969346]),
            {
              "clase": 9,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0602006552707, -11.227991940636665]),
            {
              "clase": 9,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03449436407197, -11.236031773226575]),
            {
              "clase": 9,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03282066564668, -11.23678944223164]),
            {
              "clase": 9,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03277775030244, -11.237925942006903]),
            {
              "clase": 9,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03745552282442, -11.238851975549094]),
            {
              "clase": 9,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0468539832126, -11.240830309970663]),
            {
              "clase": 9,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06325387945131, -11.211874836891461]),
            {
              "clase": 9,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06479883184389, -11.213769164168802]),
            {
              "clase": 9,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06690168371156, -11.214358507900547]),
            {
              "clase": 9,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05621576299623, -11.218610166349743]),
            {
              "clase": 9,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06625795354799, -11.201518961722753]),
            {
              "clase": 9,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.1145806311603, -11.207202109864726]),
            {
              "clase": 9,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.11046075811342, -11.210148883452408]),
            {
              "clase": 9,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.12372500021787, -11.2088804468967]),
            {
              "clase": 9,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.12213713248106, -11.202229086165183]),
            {
              "clase": 9,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.1225233705792, -11.202144890745249]),
            {
              "clase": 9,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.11853224356504, -11.214942313279485]),
            {
              "clase": 9,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.11745935995908, -11.215657941892152]),
            {
              "clase": 9,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.09840494711729, -11.198187678371765]),
            {
              "clase": 9,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.09677416403623, -11.197219416040303]),
            {
              "clase": 9,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0979757936749, -11.194609301447805]),
            {
              "clase": 9,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0765610369, -11.197008923800496]),
            {
              "clase": 9,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06845003683897, -11.199492722475583]),
            {
              "clase": 9,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.19221209880537, -11.292751640551307]),
            {
              "clase": 9,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.2115240037126, -11.287322691393436]),
            {
              "clase": 9,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.21246814128584, -11.287659373397672]),
            {
              "clase": 9,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.2095069825334, -11.292372879989278]),
            {
              "clase": 9,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.21439933177656, -11.290058221247218]),
            {
              "clase": 9,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.2089490830583, -11.286859752992855]),
            {
              "clase": 9,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.20645999309248, -11.286144301269053]),
            {
              "clase": 9,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.20615958568281, -11.284797563775884]),
            {
              "clase": 9,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.20641707774824, -11.281136089286846]),
            {
              "clase": 9,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.20607375499434, -11.281051916910625]),
            {
              "clase": 9,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.20650290843672, -11.291110341171699]),
            {
              "clase": 9,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.20525836345381, -11.28879567224657]),
            {
              "clase": 9,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.20319842693037, -11.289426947441127]),
            {
              "clase": 9,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.20328425761885, -11.289889881701363]),
            {
              "clase": 9,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.20470046397871, -11.29119451059902]),
            {
              "clase": 9,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.20195388194746, -11.292288710907595]),
            {
              "clase": 9,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.19985103007978, -11.289553202313428]),
            {
              "clase": 9,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.20019435283369, -11.28803814018043]),
            {
              "clase": 9,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.19379996654219, -11.295192529956863]),
            {
              "clase": 9,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.19161128398603, -11.296623386504354]),
            {
              "clase": 9,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.19131087657637, -11.296076295137818]),
            {
              "clase": 9,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.18980883952803, -11.300747580141532]),
            {
              "clase": 9,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.16491793986982, -11.299148410057349]),
            {
              "clase": 9,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.15551947948164, -11.302935903697453]),
            {
              "clase": 9,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.15848063823408, -11.290226560694338]),
            {
              "clase": 9,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.15132151299935, -11.28286161756324]),
            {
              "clase": 9,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.14851707099528, -11.269267540861303]),
            {
              "clase": 9,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.18842834113688, -11.271035228070637]),
            {
              "clase": 9,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.19739764808268, -11.267626107293506]),
            {
              "clase": 9,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.20151752112956, -11.269898858969366]),
            {
              "clase": 9,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.19692557929606, -11.278905512983261]),
            {
              "clase": 9,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.20263332007976, -11.282398671970077]),
            {
              "clase": 9,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.17008173087544, -11.198015133455543]),
            {
              "clase": 9,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.16261446097798, -11.200372629600428]),
            {
              "clase": 9,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.16295778373188, -11.202224934525619]),
            {
              "clase": 9,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.14373170951313, -11.194899841238913]),
            {
              "clase": 9,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.13815271476216, -11.189847944767111]),
            {
              "clase": 9,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.13875352958149, -11.191279324382224]),
            {
              "clase": 9,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.1299129686684, -11.190437337230092]),
            {
              "clase": 9,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.13171541312641, -11.21375947552134]),
            {
              "clase": 9,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.13137209037251, -11.209549842348979]),
            {
              "clase": 9,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.13374746295793, -11.335578897606043]),
            {
              "clase": 9,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.14039934131486, -11.341175241509985]),
            {
              "clase": 9,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.14267385455949, -11.34041784799668]),
            {
              "clase": 9,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.13966978046281, -11.341680169403272]),
            {
              "clase": 9,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.1338332936464, -11.339870840321618]),
            {
              "clase": 9,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.1323741719423, -11.338903054946341]),
            {
              "clase": 9,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.13829648944719, -11.334653176020735]),
            {
              "clase": 9,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.1248639867006, -11.334442784333222]),
            {
              "clase": 9,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.1245206639467, -11.335578897606043]),
            {
              "clase": 9,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.12001455280168, -11.342858331016659]),
            {
              "clase": 9,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.11688173267228, -11.34189055576206]),
            {
              "clase": 9,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.11259019824845, -11.339323831599266]),
            {
              "clase": 9,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.10357797595842, -11.344204795481245]),
            {
              "clase": 9,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.10486543628556, -11.34605617375464]),
            {
              "clase": 9,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.09872854205949, -11.336672928341258]),
            {
              "clase": 9,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.10181844684465, -11.338019421958272]),
            {
              "clase": 9,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.10220468494279, -11.338356044371174]),
            {
              "clase": 9,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.09726942035539, -11.333517059068493]),
            {
              "clase": 9,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.09568155261857, -11.332717566654646]),
            {
              "clase": 9,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.09319246265275, -11.335200193683539]),
            {
              "clase": 9,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.11907041522844, -11.35139985734787]),
            {
              "clase": 9,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.11997163745744, -11.351652312365799]),
            {
              "clase": 9,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.14142930957658, -11.341301473566983]),
            {
              "clase": 9,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.12975633594377, -11.332885881032835]),
            {
              "clase": 9,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.12971342059953, -11.334358627614849]),
            {
              "clase": 9,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.1245206639467, -11.329477495561985]),
            {
              "clase": 9,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.11546552631242, -11.329014625266023]),
            {
              "clase": 9,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.1135343358217, -11.33961837488759]),
            {
              "clase": 9,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.11765420886857, -11.358847186482906]),
            {
              "clase": 9,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.11559427234513, -11.360109426389222]),
            {
              "clase": 9,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08556065307961, -11.345326723339936]),
            {
              "clase": 9,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.09897162363912, -11.334479926624388]),
            {
              "clase": 9,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.10068823740865, -11.335573961566215]),
            {
              "clase": 9,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0924484913149, -11.333385887495231]),
            {
              "clase": 9,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08970190928365, -11.332712630565403]),
            {
              "clase": 9,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98798307159504, -11.30754428597421]),
            {
              "clase": 9,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98969968536457, -11.315161082467975]),
            {
              "clase": 9,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98982843139729, -11.315602934611817]),
            {
              "clase": 9,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99015029647907, -11.31816987167417]),
            {
              "clase": 9,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9889486668404, -11.315939583406632]),
            {
              "clase": 9,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99240335205158, -11.31059523706185]),
            {
              "clase": 9,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98716768005451, -11.309101327140473]),
            {
              "clase": 9,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99302562454304, -11.308512177424015]),
            {
              "clase": 9,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99435600021442, -11.315560853484644]),
            {
              "clase": 9,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9953430531319, -11.313435748520279]),
            {
              "clase": 9,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99609407165607, -11.315771259058701]),
            {
              "clase": 9,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99675925949177, -11.31084772810993]),
            {
              "clase": 9,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99424871185383, -11.317938427473237]),
            {
              "clase": 9,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99594386795124, -11.31835923497211]),
            {
              "clase": 9,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99660905578693, -11.318674840190292]),
            {
              "clase": 9,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99796088913044, -11.318906283795826]),
            {
              "clase": 9,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.996802174836, -11.316612879808773]),
            {
              "clase": 9,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9918669102486, -11.315245244833653]),
            {
              "clase": 9,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99083694198688, -11.31141583215439]),
            {
              "clase": 9,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01154004183485, -11.391503912015628]),
            {
              "clase": 9,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01151858416273, -11.391020107382948]),
            {
              "clase": 9,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01259146776869, -11.391735296548985]),
            {
              "clase": 9,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00636874285414, -11.389190056327708]),
            {
              "clase": 9,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00681935396864, -11.388306579190138]),
            {
              "clase": 9,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00731288042738, -11.387970015749286]),
            {
              "clase": 9,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00387965288832, -11.390115600861892]),
            {
              "clase": 9,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00572501269056, -11.391840471274646]),
            {
              "clase": 9,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00540314760877, -11.392029785682793]),
            {
              "clase": 9,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00203429308607, -11.393123599795324]),
            {
              "clase": 9,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00134764757826, -11.391062177383674]),
            {
              "clase": 9,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00164805498792, -11.390893897343402]),
            {
              "clase": 9,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00428734865858, -11.392913251254313]),
            {
              "clase": 9,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00840722170545, -11.393333948180716]),
            {
              "clase": 9,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00750599947645, -11.393333948180716]),
            {
              "clase": 9,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01332102862074, -11.39190357609136]),
            {
              "clase": 9,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02194701281263, -11.38744413457577]),
            {
              "clase": 9,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02119599428846, -11.389694899174273]),
            {
              "clase": 9,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02293406573011, -11.390010425498312]),
            {
              "clase": 9,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02046643343641, -11.395016729661396]),
            {
              "clase": 9,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02074538317396, -11.395900185951332]),
            {
              "clase": 9,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02164660540296, -11.397099157953072]),
            {
              "clase": 9,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0191146000929, -11.391503912015628]),
            {
              "clase": 9,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03158150759413, -11.388748318101946]),
            {
              "clase": 9,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03407059755995, -11.387822769118698]),
            {
              "clase": 9,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03640948382093, -11.38725481711531]),
            {
              "clase": 9,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03711758700086, -11.386749969938176]),
            {
              "clase": 9,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0386196240492, -11.386771005255111]),
            {
              "clase": 9,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03954230395033, -11.386581687346716]),
            {
              "clase": 9,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03810463991834, -11.388769353271101]),
            {
              "clase": 9,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03720341768934, -11.387528275628855]),
            {
              "clase": 9,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94859170593216, -11.43652480113475]),
            {
              "clase": 9,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94869899429276, -11.43678769638104]),
            {
              "clase": 9,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94893502868607, -11.43702955979211]),
            {
              "clase": 9,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9505979982753, -11.43654583276344]),
            {
              "clase": 9,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94648885406448, -11.434792068620306]),
            {
              "clase": 9,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94782995857193, -11.430365520856114]),
            {
              "clase": 9,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94820546783401, -11.42985023426301]),
            {
              "clase": 9,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9486882654567, -11.429566300433773]),
            {
              "clase": 9,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94898867286636, -11.42935597889539]),
            {
              "clase": 9,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08108036984451, -11.279349494425045]),
            {
              "clase": 9,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07968562115677, -11.279728272168656]),
            {
              "clase": 9,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07869856823929, -11.280128092578424]),
            {
              "clase": 9,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0773681925679, -11.280380610445235]),
            {
              "clase": 9,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07571595181473, -11.281201291979272]),
            {
              "clase": 9,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07485764492996, -11.282106143260343]),
            {
              "clase": 9,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07393496502884, -11.283621236696716]),
            {
              "clase": 9,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07936375607498, -11.281264421230915]),
            {
              "clase": 9,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07985728253372, -11.281243378148577]),
            {
              "clase": 9,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08211033810623, -11.279265321525292]),
            {
              "clase": 9,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04911280035695, -11.367549787089649]),
            {
              "clase": 9,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05044317602834, -11.369127537935254]),
            {
              "clase": 9,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.050743583438, -11.369590343192908]),
            {
              "clase": 9,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0505075490447, -11.366750389993841]),
            {
              "clase": 9,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0499496495696, -11.365425068816052]),
            {
              "clase": 9,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04982090353688, -11.364331148281053]),
            {
              "clase": 9,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04954195379933, -11.3666241691948]),
            {
              "clase": 9,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05020714163503, -11.368938208295015]),
            {
              "clase": 9,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04999256491384, -11.369064428069157]),
            {
              "clase": 9,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99092571964836, -11.39299294101657]),
            {
              "clase": 9,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99066822758293, -11.393287428847877]),
            {
              "clase": 9,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98908035984611, -11.393708125220648]),
            {
              "clase": 9,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.985818793684, -11.394928141181397]),
            {
              "clase": 9,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98607628574943, -11.395348835126313]),
            {
              "clase": 9,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98513214817619, -11.393666055611385]),
            {
              "clase": 9,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98689167728996, -11.396106082658253]),
            {
              "clase": 9,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06252428517573, -11.334404166672876]),
            {
              "clase": 9,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0648417137646, -11.335098458747789]),
            {
              "clase": 9,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06464859471552, -11.335519241002713]),
            {
              "clase": 9,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05694529042475, -11.335119497875246]),
            {
              "clase": 9,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05743881688349, -11.335119497875246]),
            {
              "clase": 9,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0577821396374, -11.335098458747789]),
            {
              "clase": 9,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06200930104487, -11.334404166672876]),
            {
              "clase": 9,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06085058675043, -11.335498201904683]),
            {
              "clase": 9,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06297489629023, -11.334951184812216]),
            {
              "clase": 9,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08516188092203, -11.35394390418643]),
            {
              "clase": 9,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08374567456217, -11.35423843239325]),
            {
              "clase": 9,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08404608197183, -11.350409541993661]),
            {
              "clase": 9,
              "system:index": "288"
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
            ee.Geometry.Point([-75.01568321935785, -11.379063972818615]),
            {
              "clase": 10,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0156188463415, -11.37944261851154]),
            {
              "clase": 10,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01486782781733, -11.379358475067745]),
            {
              "clase": 10,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01594071142328, -11.377339024956061]),
            {
              "clase": 10,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01398806326044, -11.373952206680148]),
            {
              "clase": 10,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01164917699946, -11.375887536341338]),
            {
              "clase": 10,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01179938070429, -11.374898836961917]),
            {
              "clase": 10,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01572613470209, -11.379716084532108]),
            {
              "clase": 10,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01591925375116, -11.37998955028999]),
            {
              "clase": 10,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00671391241205, -11.378559111111324]),
            {
              "clase": 10,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99806647054804, -11.379884371183431]),
            {
              "clase": 10,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01757149450434, -11.371091260484661]),
            {
              "clase": 10,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01729254476679, -11.371511989668353]),
            {
              "clase": 10,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02151970617426, -11.371049187532126]),
            {
              "clase": 10,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02214913907696, -11.380277043499333]),
            {
              "clase": 10,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02221351209332, -11.380571544493504]),
            {
              "clase": 10,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02285724225689, -11.382359579702902]),
            {
              "clase": 10,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02584769567073, -11.386589725270271]),
            {
              "clase": 10,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02644851049007, -11.386842149113003]),
            {
              "clase": 10,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02724244435848, -11.387052502144194]),
            {
              "clase": 10,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02837970098079, -11.38682111380132]),
            {
              "clase": 10,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02898051580013, -11.386779043173311]),
            {
              "clase": 10,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02994611104549, -11.386800078488097]),
            {
              "clase": 10,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02790763219417, -11.38694732564803]),
            {
              "clase": 10,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02662017186702, -11.38703146684807]),
            {
              "clase": 10,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02616956075252, -11.385580027659728]),
            {
              "clase": 10,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0197537167889, -11.38427582960965]),
            {
              "clase": 10,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02245738347591, -11.380952201102582]),
            {
              "clase": 10,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01623465856136, -11.379753161038932]),
            {
              "clase": 10,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01529052098812, -11.37945865919811]),
            {
              "clase": 10,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00524580047602, -11.385616278707616]),
            {
              "clase": 10,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00459134147638, -11.385942327244537]),
            {
              "clase": 10,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00434457824701, -11.386110610214176]),
            {
              "clase": 10,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00267087982172, -11.386773223439544]),
            {
              "clase": 10,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00413000152582, -11.384501400242238]),
            {
              "clase": 10,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00349700019831, -11.384785379133906]),
            {
              "clase": 10,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00647961662287, -11.38448036475752]),
            {
              "clase": 10,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94573783554031, -11.430954418672348]),
            {
              "clase": 10,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94607042945816, -11.430344488768624]),
            {
              "clase": 10,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94604897178604, -11.430102619650164]),
            {
              "clase": 10,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.946220633163, -11.429555784360558]),
            {
              "clase": 10,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94619917549088, -11.428661916711288]),
            {
              "clase": 10,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94587731040909, -11.428272820500935]),
            {
              "clase": 10,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94580220855667, -11.427778562382468]),
            {
              "clase": 10,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94584512390091, -11.427473594177266]),
            {
              "clase": 10,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94286250747635, -11.427294819559606]),
            {
              "clase": 10,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9419183699031, -11.427431529571486]),
            {
              "clase": 10,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9391610590358, -11.428441078387182]),
            {
              "clase": 10,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.93963312782242, -11.430007975156325]),
            {
              "clase": 10,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05526877877828, -11.344272078564845]),
            {
              "clase": 10,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05711413858053, -11.343893386164991]),
            {
              "clase": 10,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05923844812033, -11.344082732427676]),
            {
              "clase": 10,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05805827615377, -11.343956501599834]),
            {
              "clase": 10,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05760766503927, -11.344293117016765]),
            {
              "clase": 10,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05762912271139, -11.344545578319103]),
            {
              "clase": 10,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05971051690695, -11.344503501450882]),
            {
              "clase": 10,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05994655130026, -11.343430539216591]),
            {
              "clase": 10,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06016112802145, -11.342946652968566]),
            {
              "clase": 10,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06136275766012, -11.341389796000273]),
            {
              "clase": 10,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05810119149801, -11.345134653823271]),
            {
              "clase": 10,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0569639348757, -11.345029461858072]),
            {
              "clase": 10,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05649186608908, -11.345092577041843]),
            {
              "clase": 10,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0574145459902, -11.344713885729995]),
            {
              "clase": 10,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04477597711202, -11.345471267851506]),
            {
              "clase": 10,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04252292153951, -11.343030807157545]),
            {
              "clase": 10,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0517068052065, -11.347827554938156]),
            {
              "clase": 10,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05044080255148, -11.351908934766492]),
            {
              "clase": 10,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0529298925173, -11.33697164218618]),
            {
              "clase": 10,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05168534753439, -11.339264882931444]),
            {
              "clase": 10,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05414002171135, -11.403510174435551]),
            {
              "clase": 10,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05332463017082, -11.403762583254311]),
            {
              "clase": 10,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0568866037426, -11.400523319718324]),
            {
              "clase": 10,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04843228092766, -11.39879850198903]),
            {
              "clase": 10,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04886143437004, -11.39799919266223]),
            {
              "clase": 10,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04216664066887, -11.396021944143213]),
            {
              "clase": 10,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04688732853508, -11.392277755013595]),
            {
              "clase": 10,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03663056126213, -11.404393604319988]),
            {
              "clase": 10,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03130905857658, -11.396737120727229]),
            {
              "clase": 10,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03452770939445, -11.392866731852642]),
            {
              "clase": 10,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99783509007072, -11.39231982482827]),
            {
              "clase": 10,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99856465092277, -11.391310147558228]),
            {
              "clase": 10,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99920838108635, -11.390805307578868]),
            {
              "clase": 10,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99311440220451, -11.391899126401432]),
            {
              "clase": 10,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0039719842968, -11.396148151906434]),
            {
              "clase": 10,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9975775980053, -11.398167468496807]),
            {
              "clase": 10,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00118248692131, -11.395727459144432]),
            {
              "clase": 10,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.100825981569, -11.352176728561478]),
            {
              "clase": 10,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.10142679638834, -11.353270695714961]),
            {
              "clase": 10,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.10052557415933, -11.353901828703496]),
            {
              "clase": 10,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.09919519848795, -11.35230295575476]),
            {
              "clase": 10,
              "system:index": "91"
            })]),
    c11_totoral = /* color: #d72fff */ee.FeatureCollection(
        [ee.Feature(
            ee.Geometry.Point([-69.96962504506757, -15.813095174276135]),
            {
              "clase": 11,
              "system:index": "0"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95651108317367, -11.396298837717872]),
            {
              "clase": 11,
              "system:index": "1"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95659691386214, -11.396698495053196]),
            {
              "clase": 11,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94357210688582, -11.395583660031118]),
            {
              "clase": 11,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94340044550887, -11.396509183753865]),
            {
              "clase": 11,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94159800105086, -11.389841138683556]),
            {
              "clase": 11,
              "system:index": "5"
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
            ee.Geometry.Point([-74.99258037784656, -11.322444418247498]),
            {
              "clase": 12,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99265011528095, -11.322512798431593]),
            {
              "clase": 12,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99268230178913, -11.322418118172342]),
            {
              "clase": 12,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99256428459248, -11.322165637327824]),
            {
              "clase": 12,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99254282692036, -11.322239277597154]),
            {
              "clase": 12,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9925320980843, -11.322449678262238]),
            {
              "clase": 12,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99245163181385, -11.322444418247498]),
            {
              "clase": 12,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9928217766579, -11.323086139332338]),
            {
              "clase": 12,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99301489570698, -11.323307059372782]),
            {
              "clase": 12,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9930739043053, -11.32353849923222]),
            {
              "clase": 12,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99174889305195, -11.322502278404336]),
            {
              "clase": 12,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99208685138782, -11.322470718320238]),
            {
              "clase": 12,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99245163181385, -11.321376633252946]),
            {
              "clase": 12,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99255892017445, -11.32133455297451]),
            {
              "clase": 12,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99290760734638, -11.321402933423824]),
            {
              "clase": 12,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99255355575642, -11.321502874051113]),
            {
              "clase": 12,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99270912387928, -11.321413453491498]),
            {
              "clase": 12,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99297198036274, -11.325405577402941]),
            {
              "clase": 12,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99263938644489, -11.324742821630942]),
            {
              "clase": 12,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99267157295307, -11.325216218767606]),
            {
              "clase": 12,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99280031898579, -11.325605455826484]),
            {
              "clase": 12,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99317582824787, -11.325973652556911]),
            {
              "clase": 12,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99321874359211, -11.325752734575518]),
            {
              "clase": 12,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99278959014973, -11.325847413731283]),
            {
              "clase": 12,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99277886131367, -11.326163010690864]),
            {
              "clase": 12,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99277886131367, -11.32642600789121]),
            {
              "clase": 12,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98726423957905, -11.327655881926743]),
            {
              "clase": 12,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98741444328388, -11.327813679452392]),
            {
              "clase": 12,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.987435900956, -11.328602665774712]),
            {
              "clase": 12,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99271448829731, -11.329065536737444]),
            {
              "clase": 12,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99329384544453, -11.329023457589978]),
            {
              "clase": 12,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99357279518208, -11.329170734579046]),
            {
              "clase": 12,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99304708221516, -11.328665784586477]),
            {
              "clase": 12,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99376591423115, -11.328907739902498]),
            {
              "clase": 12,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9939375756081, -11.329086576308855]),
            {
              "clase": 12,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9935942528542, -11.329444248786077]),
            {
              "clase": 12,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99420579650959, -11.329086576308855]),
            {
              "clase": 12,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9907347958699, -11.33098814076081]),
            {
              "clase": 12,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9910244744435, -11.331493086652504]),
            {
              "clase": 12,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99097083026321, -11.332092708740657]),
            {
              "clase": 12,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99192569667251, -11.330882943587811]),
            {
              "clase": 12,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99172184878738, -11.332460897118986]),
            {
              "clase": 12,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99236557895095, -11.333113115368057]),
            {
              "clase": 12,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99296639377029, -11.33363909674313]),
            {
              "clase": 12,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99513361865432, -11.334396508222994]),
            {
              "clase": 12,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99607775622756, -11.335122359007967]),
            {
              "clase": 12,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99590609485061, -11.33501716335624]),
            {
              "clase": 12,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99580953532607, -11.335090800316518]),
            {
              "clase": 12,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9960670273915, -11.33436494945141]),
            {
              "clase": 12,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99452207499893, -11.332829085023144]),
            {
              "clase": 12,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99384615832717, -11.331882315168741]),
            {
              "clase": 12,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99481175357253, -11.331661401751571]),
            {
              "clase": 12,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99558422976882, -11.331756078951257]),
            {
              "clase": 12,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99636743480117, -11.332334661156978]),
            {
              "clase": 12,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99713149958205, -11.332975165017574]),
            {
              "clase": 12,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99764648371291, -11.333238155952976]),
            {
              "clase": 12,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99781814508987, -11.333753617484565]),
            {
              "clase": 12,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99862280779433, -11.334269078086669]),
            {
              "clase": 12,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99610153132033, -11.335562985298795]),
            {
              "clase": 12,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99541488581252, -11.335868051999554]),
            {
              "clase": 12,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99639120989394, -11.336372989271483]),
            {
              "clase": 12,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99324766092849, -11.334795057334738]),
            {
              "clase": 12,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99826875620437, -11.335310516058811]),
            {
              "clase": 12,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99936309748244, -11.335783895700823]),
            {
              "clase": 12,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00037160807204, -11.335636622118434]),
            {
              "clase": 12,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00066128664565, -11.335983766869825]),
            {
              "clase": 12,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99163078857796, -11.333571993095752]),
            {
              "clase": 12,
              "system:index": "68"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99115871979134, -11.332982893752371]),
            {
              "clase": 12,
              "system:index": "69"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99177026344674, -11.332951334824724]),
            {
              "clase": 12,
              "system:index": "70"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9918882806434, -11.333067050875743]),
            {
              "clase": 12,
              "system:index": "71"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99293970657723, -11.332498989812178]),
            {
              "clase": 12,
              "system:index": "72"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99301480842965, -11.332583147078001]),
            {
              "clase": 12,
              "system:index": "73"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9927358586921, -11.33375082658479]),
            {
              "clase": 12,
              "system:index": "74"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99304699493783, -11.33486590346336]),
            {
              "clase": 12,
              "system:index": "75"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99391603065865, -11.332919775893563]),
            {
              "clase": 12,
              "system:index": "76"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99702739311593, -11.333508875367027]),
            {
              "clase": 12,
              "system:index": "77"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99749946190255, -11.333550953854392]),
            {
              "clase": 12,
              "system:index": "78"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99749946190255, -11.33375082658479]),
            {
              "clase": 12,
              "system:index": "79"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99801444603341, -11.333729787356598]),
            {
              "clase": 12,
              "system:index": "80"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99801444603341, -11.333340561355634]),
            {
              "clase": 12,
              "system:index": "81"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99795007301705, -11.333140688338386]),
            {
              "clase": 12,
              "system:index": "82"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99786424232857, -11.332930295537679]),
            {
              "clase": 12,
              "system:index": "83"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99768185211556, -11.332783020485055]),
            {
              "clase": 12,
              "system:index": "84"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9957077462806, -11.335339283841744]),
            {
              "clase": 12,
              "system:index": "85"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99528932167428, -11.334876423035833]),
            {
              "clase": 12,
              "system:index": "86"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00542223015113, -11.34045412607848]),
            {
              "clase": 12,
              "system:index": "87"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00537931480689, -11.34089593914917]),
            {
              "clase": 12,
              "system:index": "88"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00735342064185, -11.340369971130405]),
            {
              "clase": 12,
              "system:index": "89"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00784694710059, -11.340538281001775]),
            {
              "clase": 12,
              "system:index": "90"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00861942329688, -11.340369971130405]),
            {
              "clase": 12,
              "system:index": "91"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0091987804441, -11.340643474621013]),
            {
              "clase": 12,
              "system:index": "92"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00703155556006, -11.339402187445847]),
            {
              "clase": 12,
              "system:index": "93"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0064092830686, -11.339486342678988]),
            {
              "clase": 12,
              "system:index": "94"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00501453438086, -11.340117506137442]),
            {
              "clase": 12,
              "system:index": "95"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0051647380857, -11.340664513340213]),
            {
              "clase": 12,
              "system:index": "96"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00497161903662, -11.340306854903082]),
            {
              "clase": 12,
              "system:index": "97"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00525056877417, -11.34085386174331]),
            {
              "clase": 12,
              "system:index": "98"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00548660316748, -11.341232558172988]),
            {
              "clase": 12,
              "system:index": "99"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00913440742774, -11.341022171329575]),
            {
              "clase": 12,
              "system:index": "100"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99782621422095, -11.343168109861894]),
            {
              "clase": 12,
              "system:index": "101"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99733268776221, -11.341695408683051]),
            {
              "clase": 12,
              "system:index": "102"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99707519569678, -11.342074103997092]),
            {
              "clase": 12,
              "system:index": "103"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99791204490943, -11.34217929705079]),
            {
              "clase": 12,
              "system:index": "104"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99771892586035, -11.343399533642483]),
            {
              "clase": 12,
              "system:index": "105"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99759017982764, -11.344135880787748]),
            {
              "clase": 12,
              "system:index": "106"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99827682533545, -11.345776876166935]),
            {
              "clase": 12,
              "system:index": "107"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99868452110572, -11.3460082978335]),
            {
              "clase": 12,
              "system:index": "108"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99879180946631, -11.339780885799785]),
            {
              "clase": 12,
              "system:index": "109"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99842702904029, -11.339675691862938]),
            {
              "clase": 12,
              "system:index": "110"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.998555775073, -11.339360109819982]),
            {
              "clase": 12,
              "system:index": "111"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99660312691016, -11.341485022180526]),
            {
              "clase": 12,
              "system:index": "112"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99750434913916, -11.340433087343783]),
            {
              "clase": 12,
              "system:index": "113"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99688207664771, -11.340201661159892]),
            {
              "clase": 12,
              "system:index": "114"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99662458458228, -11.34049620354322]),
            {
              "clase": 12,
              "system:index": "115"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98454017242568, -11.344666123155564]),
            {
              "clase": 12,
              "system:index": "116"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98330635627883, -11.3441401620792]),
            {
              "clase": 12,
              "system:index": "117"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98455090126174, -11.34407704668494]),
            {
              "clase": 12,
              "system:index": "118"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98480839332717, -11.343687834778795]),
            {
              "clase": 12,
              "system:index": "119"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98544139465469, -11.343382776427525]),
            {
              "clase": 12,
              "system:index": "120"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9826518972792, -11.341920595668647]),
            {
              "clase": 12,
              "system:index": "121"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98238367637771, -11.343161871900797]),
            {
              "clase": 12,
              "system:index": "122"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98235148986953, -11.341846960468436]),
            {
              "clase": 12,
              "system:index": "123"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01885684589308, -11.367358295539663]),
            {
              "clase": 12,
              "system:index": "124"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01857789615553, -11.366643045131575]),
            {
              "clase": 12,
              "system:index": "125"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01836331943434, -11.36603297718861]),
            {
              "clase": 12,
              "system:index": "126"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0184276924507, -11.365401871045929]),
            {
              "clase": 12,
              "system:index": "127"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01701148609084, -11.366264382424148]),
            {
              "clase": 12,
              "system:index": "128"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01673253635329, -11.366622008327704]),
            {
              "clase": 12,
              "system:index": "129"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0142863617317, -11.366832376296637]),
            {
              "clase": 12,
              "system:index": "130"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01151832202834, -11.365233575838547]),
            {
              "clase": 12,
              "system:index": "131"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01023086170119, -11.36487594819296]),
            {
              "clase": 12,
              "system:index": "132"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00986608127516, -11.365591203035454]),
            {
              "clase": 12,
              "system:index": "133"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01173289874953, -11.365380834150432]),
            {
              "clase": 12,
              "system:index": "134"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01175435642165, -11.364181728541302]),
            {
              "clase": 12,
              "system:index": "135"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0123766289131, -11.365443944832242]),
            {
              "clase": 12,
              "system:index": "136"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01291307071608, -11.365044243611482]),
            {
              "clase": 12,
              "system:index": "137"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01108916858595, -11.36609608772602]),
            {
              "clase": 12,
              "system:index": "138"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01010211566847, -11.366054014035965]),
            {
              "clase": 12,
              "system:index": "139"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00999482730788, -11.366600971522267]),
            {
              "clase": 12,
              "system:index": "140"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01076730350417, -11.366769265922262]),
            {
              "clase": 12,
              "system:index": "141"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00928672412795, -11.366579934715267]),
            {
              "clase": 12,
              "system:index": "142"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.009115062751, -11.365927792928536]),
            {
              "clase": 12,
              "system:index": "143"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01063855747145, -11.36512839128348]),
            {
              "clase": 12,
              "system:index": "144"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01100333789748, -11.364371061341233]),
            {
              "clase": 12,
              "system:index": "145"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01156123737258, -11.365717424291939]),
            {
              "clase": 12,
              "system:index": "146"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01209767917555, -11.36596986663723]),
            {
              "clase": 12,
              "system:index": "147"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01598151782912, -11.36716896472398]),
            {
              "clase": 12,
              "system:index": "148"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01857789615553, -11.368010434053147]),
            {
              "clase": 12,
              "system:index": "149"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0193289146797, -11.367736956793692]),
            {
              "clase": 12,
              "system:index": "150"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0193289146797, -11.367021707335928]),
            {
              "clase": 12,
              "system:index": "151"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01911433795851, -11.36630645608315]),
            {
              "clase": 12,
              "system:index": "152"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0175264702217, -11.365486018612346]),
            {
              "clase": 12,
              "system:index": "153"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0099089966194, -11.36815769093031]),
            {
              "clase": 12,
              "system:index": "154"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00424628011835, -11.369976325143067]),
            {
              "clase": 12,
              "system:index": "155"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00319485418451, -11.370439129022062]),
            {
              "clase": 12,
              "system:index": "156"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00394587270868, -11.374267750456998]),
            {
              "clase": 12,
              "system:index": "157"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00377421133173, -11.374688474948991]),
            {
              "clase": 12,
              "system:index": "158"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00347380392206, -11.374814692175395]),
            {
              "clase": 12,
              "system:index": "159"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00323776952875, -11.374583293884255]),
            {
              "clase": 12,
              "system:index": "160"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00272278539789, -11.374141532988197]),
            {
              "clase": 12,
              "system:index": "161"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00394587270868, -11.374120496737959]),
            {
              "clase": 12,
              "system:index": "162"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00446085683954, -11.373762880246238]),
            {
              "clase": 12,
              "system:index": "163"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0099111055578, -11.369597666864752]),
            {
              "clase": 12,
              "system:index": "164"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01003985159052, -11.369155898237377]),
            {
              "clase": 12,
              "system:index": "165"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02319155779554, -11.392228437869276]),
            {
              "clase": 12,
              "system:index": "166"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02334176150038, -11.392354647316527]),
            {
              "clase": 12,
              "system:index": "167"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95911894884779, -11.392859484545305]),
            {
              "clase": 12,
              "system:index": "168"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96019183245375, -11.392964658855153]),
            {
              "clase": 12,
              "system:index": "169"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95956955996229, -11.39136600514723]),
            {
              "clase": 12,
              "system:index": "170"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95851813402845, -11.391008410324664]),
            {
              "clase": 12,
              "system:index": "171"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95748816576673, -11.390188044032715]),
            {
              "clase": 12,
              "system:index": "172"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96143637743666, -11.392586031157643]),
            {
              "clase": 12,
              "system:index": "173"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9624878033705, -11.393974330250217]),
            {
              "clase": 12,
              "system:index": "174"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96407567110731, -11.394752616170031]),
            {
              "clase": 12,
              "system:index": "175"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96469794359876, -11.394395025606572]),
            {
              "clase": 12,
              "system:index": "176"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96647893038465, -11.39553089995917]),
            {
              "clase": 12,
              "system:index": "177"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96710120287611, -11.395846419807217]),
            {
              "clase": 12,
              "system:index": "178"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96750889864637, -11.39639332004753]),
            {
              "clase": 12,
              "system:index": "179"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96804534044935, -11.396687804356473]),
            {
              "clase": 12,
              "system:index": "180"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96928988543226, -11.39553089995917]),
            {
              "clase": 12,
              "system:index": "181"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97781796683499, -11.390311005718152]),
            {
              "clase": 12,
              "system:index": "182"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97794134844968, -11.38946434351952]),
            {
              "clase": 12,
              "system:index": "183"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97829540003964, -11.389364426696265]),
            {
              "clase": 12,
              "system:index": "184"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97897668112942, -11.389033123294352]),
            {
              "clase": 12,
              "system:index": "185"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97865481604764, -11.388759666227452]),
            {
              "clase": 12,
              "system:index": "186"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97713668574521, -11.390190054129802]),
            {
              "clase": 12,
              "system:index": "187"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97635348071286, -11.390011256035411]),
            {
              "clase": 12,
              "system:index": "188"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9762354635162, -11.389574777862277]),
            {
              "clase": 12,
              "system:index": "189"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97698111762234, -11.390705412714123]),
            {
              "clase": 12,
              "system:index": "190"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97586531867215, -11.391089301664909]),
            {
              "clase": 12,
              "system:index": "191"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97948093642422, -11.388859583263143]),
            {
              "clase": 12,
              "system:index": "192"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95969696273038, -11.393134947746256]),
            {
              "clase": 12,
              "system:index": "193"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95373980937656, -11.390400404685174]),
            {
              "clase": 12,
              "system:index": "194"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95298879085239, -11.385688514960265]),
            {
              "clase": 12,
              "system:index": "195"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95384709773715, -11.387034777131342]),
            {
              "clase": 12,
              "system:index": "196"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94547860561069, -11.38631957614615]),
            {
              "clase": 12,
              "system:index": "197"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94543569026645, -11.386950635932283]),
            {
              "clase": 12,
              "system:index": "198"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95682971416171, -11.390589720051999]),
            {
              "clase": 12,
              "system:index": "199"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95554225383457, -11.390295229426945]),
            {
              "clase": 12,
              "system:index": "200"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95547788081821, -11.3836901453047]),
            {
              "clase": 12,
              "system:index": "201"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9552418464249, -11.383542896459147]),
            {
              "clase": 12,
              "system:index": "202"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96250325449732, -11.39495420045385]),
            {
              "clase": 12,
              "system:index": "203"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96340447672632, -11.394870061597866]),
            {
              "clase": 12,
              "system:index": "204"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96220284708765, -11.39562731040518]),
            {
              "clase": 12,
              "system:index": "205"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96885472544459, -11.396784214410093]),
            {
              "clase": 12,
              "system:index": "206"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97108632334498, -11.396384557195287]),
            {
              "clase": 12,
              "system:index": "207"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97142964609888, -11.396048003315398]),
            {
              "clase": 12,
              "system:index": "208"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96325427302149, -11.392598303073997]),
            {
              "clase": 12,
              "system:index": "209"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96316844233301, -11.392892791314042]),
            {
              "clase": 12,
              "system:index": "210"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96532467099657, -11.433475849626383]),
            {
              "clase": 12,
              "system:index": "211"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96467021199693, -11.433801843204403]),
            {
              "clase": 12,
              "system:index": "212"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96589329930772, -11.433738747702451]),
            {
              "clase": 12,
              "system:index": "213"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9659254858159, -11.433002632474661]),
            {
              "clase": 12,
              "system:index": "214"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96018555852403, -11.432392706979872]),
            {
              "clase": 12,
              "system:index": "215"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9600889989995, -11.432655606061047]),
            {
              "clase": 12,
              "system:index": "216"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95736387464036, -11.431099239948013]),
            {
              "clase": 12,
              "system:index": "217"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95783594342699, -11.431614524269921]),
            {
              "clase": 12,
              "system:index": "218"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95709565373888, -11.43156194428001]),
            {
              "clase": 12,
              "system:index": "219"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95738533231248, -11.431803812152838]),
            {
              "clase": 12,
              "system:index": "220"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95985296460618, -11.437356200452045]),
            {
              "clase": 12,
              "system:index": "221"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96004608365526, -11.436935568785177]),
            {
              "clase": 12,
              "system:index": "222"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.959638387885, -11.437608579152286]),
            {
              "clase": 12,
              "system:index": "223"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96223476621141, -11.430857371473781]),
            {
              "clase": 12,
              "system:index": "224"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96579673978319, -11.43443279745103]),
            {
              "clase": 12,
              "system:index": "225"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96472385617723, -11.434369702089608]),
            {
              "clase": 12,
              "system:index": "226"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96468094083299, -11.434874464587502]),
            {
              "clase": 12,
              "system:index": "227"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96626880856981, -11.432687153934397]),
            {
              "clase": 12,
              "system:index": "228"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96047523709764, -11.432666122019217]),
            {
              "clase": 12,
              "system:index": "229"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95899465772142, -11.431845876109644]),
            {
              "clase": 12,
              "system:index": "230"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95839384290208, -11.431866908085702]),
            {
              "clase": 12,
              "system:index": "231"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95122698041429, -11.432645090102483]),
            {
              "clase": 12,
              "system:index": "232"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95150593015184, -11.432539930495384]),
            {
              "clase": 12,
              "system:index": "233"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9589732000493, -11.437503421387847]),
            {
              "clase": 12,
              "system:index": "234"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95923069211473, -11.43695660038336]),
            {
              "clase": 12,
              "system:index": "235"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9590804884099, -11.437903020684958]),
            {
              "clase": 12,
              "system:index": "236"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95157432235672, -11.433675001006153]),
            {
              "clase": 12,
              "system:index": "237"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95147776283218, -11.433149204491727]),
            {
              "clase": 12,
              "system:index": "238"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94685363449051, -11.411057407863463]),
            {
              "clase": 12,
              "system:index": "239"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94713258422806, -11.410805005528687]),
            {
              "clase": 12,
              "system:index": "240"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9470682112117, -11.413307985425925]),
            {
              "clase": 12,
              "system:index": "241"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94723987258865, -11.413455218850165]),
            {
              "clase": 12,
              "system:index": "242"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94893502868607, -11.413476252190245]),
            {
              "clase": 12,
              "system:index": "243"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9490852323909, -11.413055585092419]),
            {
              "clase": 12,
              "system:index": "244"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94990062393143, -11.414527917206899]),
            {
              "clase": 12,
              "system:index": "245"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95148849166824, -11.416420904415437]),
            {
              "clase": 12,
              "system:index": "246"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95153140701248, -11.41623160626288]),
            {
              "clase": 12,
              "system:index": "247"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95241117156937, -11.417220161889485]),
            {
              "clase": 12,
              "system:index": "248"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95271157897903, -11.417893219068608]),
            {
              "clase": 12,
              "system:index": "249"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9529046980281, -11.416946731954368]),
            {
              "clase": 12,
              "system:index": "250"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95318364776566, -11.417472558518767]),
            {
              "clase": 12,
              "system:index": "251"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95258283294632, -11.418734538297032]),
            {
              "clase": 12,
              "system:index": "252"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95193910278275, -11.417914252079733]),
            {
              "clase": 12,
              "system:index": "253"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9475188223262, -11.41370761882829]),
            {
              "clase": 12,
              "system:index": "254"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.93934344924881, -11.419302427365679]),
            {
              "clase": 12,
              "system:index": "255"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94080257095291, -11.418461109821461]),
            {
              "clase": 12,
              "system:index": "256"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94039487518265, -11.418208714071653]),
            {
              "clase": 12,
              "system:index": "257"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9390392636506, -11.42093326323099]),
            {
              "clase": 12,
              "system:index": "258"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.93931821338815, -11.421353918648713]),
            {
              "clase": 12,
              "system:index": "259"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94017652027291, -11.41998678626001]),
            {
              "clase": 12,
              "system:index": "260"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9391465520112, -11.41981852335673]),
            {
              "clase": 12,
              "system:index": "261"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.93770888797921, -11.419481997250768]),
            {
              "clase": 12,
              "system:index": "262"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.93738702289743, -11.418787910896283]),
            {
              "clase": 12,
              "system:index": "263"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.93845990650338, -11.418346218695564]),
            {
              "clase": 12,
              "system:index": "264"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.93918946735543, -11.417820393750425]),
            {
              "clase": 12,
              "system:index": "265"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94120648853463, -11.417546964393802]),
            {
              "clase": 12,
              "system:index": "266"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97523821669867, -11.371438985926638]),
            {
              "clase": 12,
              "system:index": "267"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97352160292914, -11.370113686554502]),
            {
              "clase": 12,
              "system:index": "268"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9716762431269, -11.372070078698865]),
            {
              "clase": 12,
              "system:index": "269"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97219122725775, -11.375541063953289]),
            {
              "clase": 12,
              "system:index": "270"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97635401564887, -11.374510290929688]),
            {
              "clase": 12,
              "system:index": "271"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97088230925849, -11.372890497212621]),
            {
              "clase": 12,
              "system:index": "272"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97116125899603, -11.372259406257918]),
            {
              "clase": 12,
              "system:index": "273"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97274912673285, -11.370113686554502]),
            {
              "clase": 12,
              "system:index": "274"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97403658706, -11.369461552854384]),
            {
              "clase": 12,
              "system:index": "275"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97540987807562, -11.36975606503281]),
            {
              "clase": 12,
              "system:index": "276"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97575320082953, -11.369419479661179]),
            {
              "clase": 12,
              "system:index": "277"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98934470892728, -11.365457014174249]),
            {
              "clase": 12,
              "system:index": "278"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98794996023953, -11.36812868676409]),
            {
              "clase": 12,
              "system:index": "279"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98773538351834, -11.368591493644013]),
            {
              "clase": 12,
              "system:index": "280"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98754226446927, -11.368591493644013]),
            {
              "clase": 12,
              "system:index": "281"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9893661665994, -11.364215834924185]),
            {
              "clase": 12,
              "system:index": "282"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9889155554849, -11.362806353629864]),
            {
              "clase": 12,
              "system:index": "283"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9887009787637, -11.362574945587246]),
            {
              "clase": 12,
              "system:index": "284"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98874389410794, -11.361481014116086]),
            {
              "clase": 12,
              "system:index": "285"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98928033591092, -11.361060270125055]),
            {
              "clase": 12,
              "system:index": "286"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99003135443509, -11.360807823432443]),
            {
              "clase": 12,
              "system:index": "287"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98760663748563, -11.361438939744923]),
            {
              "clase": 12,
              "system:index": "288"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98636209250272, -11.361649311538677]),
            {
              "clase": 12,
              "system:index": "289"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98610460043729, -11.361312716594162]),
            {
              "clase": 12,
              "system:index": "290"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98563253165067, -11.360281892105066]),
            {
              "clase": 12,
              "system:index": "291"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98541795492947, -11.359398325291552]),
            {
              "clase": 12,
              "system:index": "292"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03630019662496, -11.34398675479802]),
            {
              "clase": 12,
              "system:index": "293"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03818847177145, -11.344491677721159]),
            {
              "clase": 12,
              "system:index": "294"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03788806436178, -11.34516490689665]),
            {
              "clase": 12,
              "system:index": "295"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03748036859152, -11.344807254094789]),
            {
              "clase": 12,
              "system:index": "296"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03486253259298, -11.343418715442468]),
            {
              "clase": 12,
              "system:index": "297"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03462649819967, -11.343018983366854]),
            {
              "clase": 12,
              "system:index": "298"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03366090295431, -11.342514057840168]),
            {
              "clase": 12,
              "system:index": "299"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03205157754537, -11.341861861047128]),
            {
              "clase": 12,
              "system:index": "300"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03134347436544, -11.3423036719406]),
            {
              "clase": 12,
              "system:index": "301"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0317511701357, -11.342598212156599]),
            {
              "clase": 12,
              "system:index": "302"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06379937161373, -11.306567560314015]),
            {
              "clase": 12,
              "system:index": "303"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06470059384273, -11.304147809139556]),
            {
              "clase": 12,
              "system:index": "304"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0665674113171, -11.311764695934663]),
            {
              "clase": 12,
              "system:index": "305"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06744717587398, -11.308482305458346]),
            {
              "clase": 12,
              "system:index": "306"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07107352246211, -11.312921940019216]),
            {
              "clase": 12,
              "system:index": "307"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06156777371334, -11.310039341526927]),
            {
              "clase": 12,
              "system:index": "308"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05676125515865, -11.30448447139598]),
            {
              "clase": 12,
              "system:index": "309"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0608596705334, -11.305873199023667]),
            {
              "clase": 12,
              "system:index": "310"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06109570492671, -11.304863215961776]),
            {
              "clase": 12,
              "system:index": "311"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05873536099361, -11.304989464039167]),
            {
              "clase": 12,
              "system:index": "312"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05882119168209, -11.305536538398512]),
            {
              "clase": 12,
              "system:index": "313"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05879973400997, -11.305389249250652]),
            {
              "clase": 12,
              "system:index": "314"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05925034512447, -11.304779050545973]),
            {
              "clase": 12,
              "system:index": "315"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0875852011578, -11.26842485494282]),
            {
              "clase": 12,
              "system:index": "316"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08759592999385, -11.267919797978296]),
            {
              "clase": 12,
              "system:index": "317"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08619045247005, -11.267288475525291]),
            {
              "clase": 12,
              "system:index": "318"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08621191014217, -11.26701490203192]),
            {
              "clase": 12,
              "system:index": "319"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0840017699139, -11.266825504845604]),
            {
              "clase": 12,
              "system:index": "320"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08334731091426, -11.26703594615603]),
            {
              "clase": 12,
              "system:index": "321"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0822744273083, -11.267825099698697]),
            {
              "clase": 12,
              "system:index": "322"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08143757809566, -11.26777248952989]),
            {
              "clase": 12,
              "system:index": "323"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08251046170162, -11.268908867034773]),
            {
              "clase": 12,
              "system:index": "324"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.082939615144, -11.268993042967601]),
            {
              "clase": 12,
              "system:index": "325"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08907650937007, -11.269392878312033]),
            {
              "clase": 12,
              "system:index": "326"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08924817074703, -11.269235048637222]),
            {
              "clase": 12,
              "system:index": "327"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0865230463879, -11.266699239985432]),
            {
              "clase": 12,
              "system:index": "328"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08594368924068, -11.266825504845604]),
            {
              "clase": 12,
              "system:index": "329"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0850929545308, -11.286861826378424]),
            {
              "clase": 12,
              "system:index": "330"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08466380108841, -11.286945997051633]),
            {
              "clase": 12,
              "system:index": "331"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08429902066239, -11.28629367368879]),
            {
              "clase": 12,
              "system:index": "332"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08417027462967, -11.286041161021373]),
            {
              "clase": 12,
              "system:index": "333"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08440630902298, -11.28709329567036]),
            {
              "clase": 12,
              "system:index": "334"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.084771089449, -11.28780874502909]),
            {
              "clase": 12,
              "system:index": "335"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05030784529569, -11.279663247875144]),
            {
              "clase": 12,
              "system:index": "336"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0512090675247, -11.280105154711485]),
            {
              "clase": 12,
              "system:index": "337"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0499859802139, -11.279642204675495]),
            {
              "clase": 12,
              "system:index": "338"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0502005569351, -11.279863158194827]),
            {
              "clase": 12,
              "system:index": "339"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05719575804594, -11.283156397646874]),
            {
              "clase": 12,
              "system:index": "340"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05716357153776, -11.283429955774883]),
            {
              "clase": 12,
              "system:index": "341"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05881581229093, -11.282956489619302]),
            {
              "clase": 12,
              "system:index": "342"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05982432288053, -11.282114770082018]),
            {
              "clase": 12,
              "system:index": "343"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05899820250394, -11.27968429107324]),
            {
              "clase": 12,
              "system:index": "344"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0017053905345, -11.410474914362878]),
            {
              "clase": 12,
              "system:index": "345"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00005314978132, -11.410580082151913]),
            {
              "clase": 12,
              "system:index": "346"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00202725561628, -11.405237509193942]),
            {
              "clase": 12,
              "system:index": "347"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00724146994123, -11.40776157193713]),
            {
              "clase": 12,
              "system:index": "348"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00730584295759, -11.407446065321105]),
            {
              "clase": 12,
              "system:index": "349"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99981711538801, -11.411505557015529]),
            {
              "clase": 12,
              "system:index": "350"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99936650427351, -11.411757958727401]),
            {
              "clase": 12,
              "system:index": "351"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99803612860212, -11.412094493994124]),
            {
              "clase": 12,
              "system:index": "352"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95914378216803, -11.419445277188618]),
            {
              "clase": 12,
              "system:index": "353"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96008791974127, -11.419487342979144]),
            {
              "clase": 12,
              "system:index": "354"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96049561551153, -11.419550441653238]),
            {
              "clase": 12,
              "system:index": "355"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96092476895392, -11.418162267580943]),
            {
              "clase": 12,
              "system:index": "356"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96064581921637, -11.41763644229486]),
            {
              "clase": 12,
              "system:index": "357"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95242753079474, -11.420202460463631]),
            {
              "clase": 12,
              "system:index": "358"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95232024243414, -11.420538985714826]),
            {
              "clase": 12,
              "system:index": "359"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95427289059698, -11.423630792772748]),
            {
              "clase": 12,
              "system:index": "360"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95478787472784, -11.424324867275013]),
            {
              "clase": 12,
              "system:index": "361"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.94071164181769, -11.422368834779666]),
            {
              "clase": 12,
              "system:index": "362"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97560181668341, -11.406509750815355]),
            {
              "clase": 12,
              "system:index": "363"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97566618969977, -11.406551818523118]),
            {
              "clase": 12,
              "system:index": "364"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96319928219854, -11.407834880616255]),
            {
              "clase": 12,
              "system:index": "365"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95903649380743, -11.406951461436051]),
            {
              "clase": 12,
              "system:index": "366"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95886483243048, -11.40720386719654]),
            {
              "clase": 12,
              "system:index": "367"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95051779797613, -11.40446945950909]),
            {
              "clase": 12,
              "system:index": "368"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95105423977911, -11.4042380853429]),
            {
              "clase": 12,
              "system:index": "369"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.95107569745123, -11.404511527519066]),
            {
              "clase": 12,
              "system:index": "370"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96476569226324, -11.40486910535223]),
            {
              "clase": 12,
              "system:index": "371"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98189550929061, -11.400767450235804]),
            {
              "clase": 12,
              "system:index": "372"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9820027976512, -11.40007331812679]),
            {
              "clase": 12,
              "system:index": "373"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98236757807723, -11.399799871678896]),
            {
              "clase": 12,
              "system:index": "374"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98543602519027, -11.403943608858809]),
            {
              "clase": 12,
              "system:index": "375"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98693806223861, -11.404658765504882]),
            {
              "clase": 12,
              "system:index": "376"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98738867335311, -11.404953241247549]),
            {
              "clase": 12,
              "system:index": "377"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98627287440291, -11.404700833486821]),
            {
              "clase": 12,
              "system:index": "378"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9826679854869, -11.400515038755993]),
            {
              "clase": 12,
              "system:index": "379"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97468573145858, -11.39644607995942]),
            {
              "clase": 12,
              "system:index": "380"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0429820322094, -11.374145085731262]),
            {
              "clase": 12,
              "system:index": "381"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04201643696403, -11.374103013229755]),
            {
              "clase": 12,
              "system:index": "382"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0392913126049, -11.372651508122317]),
            {
              "clase": 12,
              "system:index": "383"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96535628350968, -11.35941933079154]),
            {
              "clase": 12,
              "system:index": "384"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96505587610001, -11.3587461352411]),
            {
              "clase": 12,
              "system:index": "385"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96608584436173, -11.359629704075182]),
            {
              "clase": 12,
              "system:index": "386"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96698706659073, -11.360849866059993]),
            {
              "clase": 12,
              "system:index": "387"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96758788141007, -11.36148098227941]),
            {
              "clase": 12,
              "system:index": "388"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05911251530878, -11.338043921522365]),
            {
              "clase": 12,
              "system:index": "389"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05849024281733, -11.337959765864403]),
            {
              "clase": 12,
              "system:index": "390"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05763193593256, -11.338149116059984]),
            {
              "clase": 12,
              "system:index": "391"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06123682484858, -11.338885476738914]),
            {
              "clase": 12,
              "system:index": "392"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06091495976679, -11.339137942820557]),
            {
              "clase": 12,
              "system:index": "393"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05597969517939, -11.337770415543343]),
            {
              "clase": 12,
              "system:index": "394"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05136629567377, -11.3386330104342]),
            {
              "clase": 12,
              "system:index": "395"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05095859990351, -11.338527816074732]),
            {
              "clase": 12,
              "system:index": "396"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05093714223139, -11.338927554434676]),
            {
              "clase": 12,
              "system:index": "397"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04967113957636, -11.337644181926256]),
            {
              "clase": 12,
              "system:index": "398"
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
            ee.Geometry.Point([-75.01095456680434, -11.352418677027947]),
            {
              "clase": 15,
              "system:index": "2"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01803559860366, -11.342194097674648]),
            {
              "clase": 15,
              "system:index": "3"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00898046096938, -11.338701667768166]),
            {
              "clase": 15,
              "system:index": "4"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.99885243972915, -11.351577161692767]),
            {
              "clase": 15,
              "system:index": "5"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9814288099684, -11.342446560832382]),
            {
              "clase": 15,
              "system:index": "6"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.96482057174819, -11.34863183848093]),
            {
              "clase": 15,
              "system:index": "7"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00425977310317, -11.362053850705486]),
            {
              "clase": 15,
              "system:index": "8"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.93977260269119, -11.427715465539341]),
            {
              "clase": 15,
              "system:index": "9"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.93935417808487, -11.427820626936736]),
            {
              "clase": 15,
              "system:index": "10"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.93980478919937, -11.42785217534835]),
            {
              "clase": 15,
              "system:index": "11"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08460258473323, -11.267709357314619]),
            {
              "clase": 15,
              "system:index": "12"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0835511587994, -11.267888231888563]),
            {
              "clase": 15,
              "system:index": "13"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08356188763545, -11.268319634815018]),
            {
              "clase": 15,
              "system:index": "14"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08503173817562, -11.268182848591337]),
            {
              "clase": 15,
              "system:index": "15"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08543943394588, -11.268382766896325]),
            {
              "clase": 15,
              "system:index": "16"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08562182415889, -11.268414332931775]),
            {
              "clase": 15,
              "system:index": "17"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07932306425307, -11.264048154257361]),
            {
              "clase": 15,
              "system:index": "18"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07202745573257, -11.267667758296751]),
            {
              "clase": 15,
              "system:index": "19"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05361677305434, -11.273265428320562]),
            {
              "clase": 15,
              "system:index": "20"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05237222807143, -11.274233435390743]),
            {
              "clase": 15,
              "system:index": "21"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05293012754653, -11.275117265085738]),
            {
              "clase": 15,
              "system:index": "22"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08780430128475, -11.259502540491098]),
            {
              "clase": 15,
              "system:index": "23"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.09587238600155, -11.254451774323218]),
            {
              "clase": 15,
              "system:index": "24"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08076618482967, -11.253946692832763]),
            {
              "clase": 15,
              "system:index": "25"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01187632711897, -11.41005424281708]),
            {
              "clase": 15,
              "system:index": "26"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01024554403791, -11.410138377176104]),
            {
              "clase": 15,
              "system:index": "27"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0105674091197, -11.410580082151913]),
            {
              "clase": 15,
              "system:index": "28"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01239131124983, -11.411568657464539]),
            {
              "clase": 15,
              "system:index": "29"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05112982153615, -11.360523430608948]),
            {
              "clase": 15,
              "system:index": "30"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05149460196218, -11.361112473131504]),
            {
              "clase": 15,
              "system:index": "31"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0607214009734, -11.361617365753816]),
            {
              "clase": 15,
              "system:index": "32"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06078577398976, -11.361680477268738]),
            {
              "clase": 15,
              "system:index": "33"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03514385580739, -11.360418244316158]),
            {
              "clase": 15,
              "system:index": "34"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03231144308766, -11.364436333130294]),
            {
              "clase": 15,
              "system:index": "35"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03237581610402, -11.364268037352867]),
            {
              "clase": 15,
              "system:index": "36"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0335347337867, -11.358066188915526]),
            {
              "clase": 15,
              "system:index": "37"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01276962986564, -11.393413637825065]),
            {
              "clase": 15,
              "system:index": "38"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01315586796379, -11.394212960046275]),
            {
              "clase": 15,
              "system:index": "39"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01371376743889, -11.395096418834067]),
            {
              "clase": 15,
              "system:index": "40"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.01255505314445, -11.394423307625717]),
            {
              "clase": 15,
              "system:index": "41"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00706188908195, -11.391310147558228]),
            {
              "clase": 15,
              "system:index": "42"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0083493494091, -11.39051081717705]),
            {
              "clase": 15,
              "system:index": "43"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02534382572746, -11.393918473173589]),
            {
              "clase": 15,
              "system:index": "44"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02525799503898, -11.394717793975468]),
            {
              "clase": 15,
              "system:index": "45"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02542965641594, -11.395432973840585]),
            {
              "clase": 15,
              "system:index": "46"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0381755136547, -11.395475043188382]),
            {
              "clase": 15,
              "system:index": "47"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.03766052952385, -11.395432973840585]),
            {
              "clase": 15,
              "system:index": "48"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.98337261906242, -11.399008846175057]),
            {
              "clase": 15,
              "system:index": "49"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97663491001701, -11.392656383121597]),
            {
              "clase": 15,
              "system:index": "50"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.9770640634594, -11.391941196272127]),
            {
              "clase": 15,
              "system:index": "51"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04585736027336, -11.393329498513168]),
            {
              "clase": 15,
              "system:index": "52"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02907746067619, -11.379404099470184]),
            {
              "clase": 15,
              "system:index": "53"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.05140921101801, -11.32203286161205]),
            {
              "clase": 15,
              "system:index": "54"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04986425862543, -11.321948701241993]),
            {
              "clase": 15,
              "system:index": "55"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.0701203011059, -11.34593340435521]),
            {
              "clase": 15,
              "system:index": "56"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08179327473871, -11.34795307692252]),
            {
              "clase": 15,
              "system:index": "57"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.07183691487543, -11.325230937331881]),
            {
              "clase": 15,
              "system:index": "58"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08883139119379, -11.314374166601832]),
            {
              "clase": 15,
              "system:index": "59"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.08102079854243, -11.307641078716319]),
            {
              "clase": 15,
              "system:index": "60"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.1030792854809, -11.30351698424825]),
            {
              "clase": 15,
              "system:index": "61"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.04909178242914, -11.339537680326915]),
            {
              "clase": 15,
              "system:index": "62"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.02394339070551, -11.329102244317305]),
            {
              "clase": 15,
              "system:index": "63"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.00909468159907, -11.326072530264009]),
            {
              "clase": 15,
              "system:index": "64"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06711622700922, -11.338275349453998]),
            {
              "clase": 15,
              "system:index": "65"
            }),
        ee.Feature(
            ee.Geometry.Point([-75.06625792012446, -11.331795296530625]),
            {
              "clase": 15,
              "system:index": "66"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.97207994885416, -11.420583666277102]),
            {
              "clase": 15,
              "system:index": "67"
            }),
        ee.Feature(
            ee.Geometry.Point([-74.93637438244791, -11.410151199520993]),
            {
              "clase": 15,
              "system:index": "68"
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
var region = 101, // 101 - 114
    version_input = '2',
    version_out = '2',
    year = 2023,
    months = [1,2,3,4,5,6,7,8,9,10,11,12],
    tileScale = 15,
    cloud_Blue_thr = 1600,  //NO ENMASCAR : 10000, ENMASCAR: 1600
    center_ANP = false,
    Descartar_muestras = [9,12]; // descartar muestras automaticas;
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

var altitude = ee.Image("USGS/SRTMGL1_003").rename('altitud');
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
                                                // .filter(ee.Filter.and(ee.Filter.eq('clase', 12),ee.Filter.lte('NDVI', 0.5)).not())

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
    asset_samples_random = sortedFC//.limit(1000);
    
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
                                      .addBands(masks_class)
                                      .addBands(altitude)
                                      ;
  
  // Definir bandas para el clasificador, incluyendo NDVI y segmentos
  var bandas = ['R', 'G', 'B', 'N', 'NDVI', 'NDWI','segments', 'slope','mask','altitud']; //, 'segments'
  
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

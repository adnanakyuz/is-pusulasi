// Meslek sözlüğü: Türkçe adlar -> ülkelerin iş sitelerinde aranan adlar.
// Dil kodları: en İngilizce, de Almanca, nl Hollandaca, fr Fransızca, es İspanyolca, it İtalyanca, pl Lehçe, ar Arapça.
// Her dilde ilk ad varsayılan arama adıdır; diğerleri seçilebilir alternatiflerdir.
// tr listesindeki ilk ad sayfanın adı olur (adres: meslek/finisher-operatoru/). Değiştirirsen adres de değişir.
(function () {
  var G = {
    insaat: "İnşaat ve iş makineleri",
    ulasim: "Ulaşım ve lojistik",
    sanayi: "Sanayi ve üretim",
    tamir: "Bakım, tamir ve teknik servis",
    saglik: "Sağlık ve bakım",
    turizm: "Turizm, otel ve yiyecek",
    hizmet: "Hizmet ve satış",
    tarim: "Tarım, hayvancılık ve gıda",
    bilisim: "Bilişim, ofis ve mühendislik",
    denizcilik: "Denizcilik ve enerji"
  };
  function m(grup, tr, ad, not) { return { grup: G[grup], tr: tr, ad: ad, not: not }; }

  window.MESLEKLER = [
    // ---------------- İnşaat ve iş makineleri ----------------
    m("insaat", ["finisher operatörü", "beton finisher operatörü", "asfalt finisher operatörü", "finişer", "finisher"], {
      en: ["paver operator", "slipform paver operator", "asphalt paver operator", "concrete finisher"],
      de: ["Fertigerfahrer", "Straßenfertiger Bediener", "Gleitschalungsfertiger"],
      nl: ["machinist asfaltspreidmachine", "asfaltafwerker"],
      fr: ["conducteur de finisseur", "régleur finisseur"],
      es: ["operador de extendedora", "operador de pavimentadora"],
      it: ["operatore vibrofinitrice", "finitrice asfalto"],
      pl: ["operator rozściełacza", "operator układarki"],
      ar: ["مشغل فنشر", "مشغل فرادة اسفلت"]
    }, "Yurt dışında 'finisher' iki ayrı iş için kullanılır: makineyi süren operatör (paver / Fertiger) ve betonu elle perdahlayan usta (concrete finisher). İkisini de deneyin."),
    m("insaat", ["ekskavatör operatörü", "ekskavatör", "paletli operatörü", "kazıcı operatörü"], {
      en: ["excavator operator"], de: ["Baggerfahrer", "Baggerführer"], nl: ["machinist graafmachine"],
      fr: ["conducteur de pelle"], es: ["operador de excavadora"], it: ["escavatorista"], pl: ["operator koparki"], ar: ["مشغل حفار"]
    }),
    m("insaat", ["kepçe operatörü", "beko loder operatörü", "bekoloder", "jcb operatörü"], {
      en: ["backhoe loader operator", "backhoe operator"], de: ["Baggerlader Fahrer"], nl: ["machinist graaflaadcombinatie"],
      fr: ["conducteur de tractopelle"], es: ["operador de retroexcavadora"], it: ["operatore terna"], pl: ["operator koparko-ładowarki"], ar: ["مشغل باكهو"]
    }),
    m("insaat", ["loder operatörü", "lastikli yükleyici", "loder"], {
      en: ["wheel loader operator"], de: ["Radladerfahrer"], nl: ["machinist shovel"],
      fr: ["conducteur de chargeuse"], es: ["operador de pala cargadora"], it: ["palista"], pl: ["operator ładowarki"], ar: ["مشغل لودر"]
    }),
    m("insaat", ["dozer operatörü", "buldozer operatörü", "dozer"], {
      en: ["dozer operator", "bulldozer operator"], de: ["Planierraupenfahrer"], nl: ["machinist bulldozer"],
      fr: ["conducteur de bouteur"], es: ["operador de bulldozer"], it: ["operatore apripista"], pl: ["operator spycharki"], ar: ["مشغل بلدوزر"]
    }),
    m("insaat", ["greyder operatörü", "greyder"], {
      en: ["grader operator", "motor grader operator"], de: ["Graderfahrer"], nl: ["machinist grader"],
      fr: ["conducteur de niveleuse"], es: ["operador de motoniveladora"], it: ["operatore livellatrice"], pl: ["operator równiarki"], ar: ["مشغل جريدر"]
    }),
    m("insaat", ["silindir operatörü", "silindir", "compactor operatörü"], {
      en: ["roller operator", "compactor operator"], de: ["Walzenfahrer"], nl: ["machinist wals"],
      fr: ["conducteur de compacteur"], es: ["operador de rodillo compactador"], it: ["rullista"], pl: ["operator walca"], ar: ["مشغل مدحلة"]
    }),
    m("insaat", ["freze operatörü", "asfalt freze operatörü", "asfalt kazıma"], {
      en: ["milling machine operator", "cold planer operator"], de: ["Fräsenfahrer", "Straßenfräse Bediener"], nl: ["machinist freesmachine"],
      fr: ["conducteur de raboteuse"], es: ["operador de fresadora de asfalto"], it: ["operatore fresa stradale"], pl: ["operator frezarki drogowej"], ar: ["مشغل قشط اسفلت"]
    }),
    m("insaat", ["kule vinç operatörü", "kule vinç", "vinç operatörü"], {
      en: ["tower crane operator", "crane operator"], de: ["Turmdrehkranführer", "Kranführer"], nl: ["torenkraanmachinist"],
      fr: ["grutier"], es: ["gruista", "operador de grúa torre"], it: ["gruista"], pl: ["operator żurawia wieżowego"], ar: ["مشغل رافعة برجية"]
    }),
    m("insaat", ["mobil vinç operatörü", "mobil vinç", "teleskopik vinç"], {
      en: ["mobile crane operator"], de: ["Mobilkranführer"], nl: ["mobiele kraanmachinist"],
      fr: ["conducteur de grue mobile"], es: ["operador de grúa móvil"], it: ["operatore gru mobile"], pl: ["operator żurawia samojezdnego"], ar: ["مشغل رافعة متحركة"]
    }),
    m("insaat", ["beton pompa operatörü", "beton pompası", "pompa operatörü"], {
      en: ["concrete pump operator"], de: ["Betonpumpenfahrer", "Betonpumpenmaschinist"], nl: ["betonpompmachinist"],
      fr: ["conducteur de pompe à béton"], es: ["operador de bomba de hormigón"], it: ["pompista calcestruzzo"], pl: ["operator pompy do betonu"], ar: ["مشغل مضخة خرسانة"]
    }),
    m("insaat", ["delgi operatörü", "sondaj operatörü", "kaya delici", "delici operatörü"], {
      en: ["drill rig operator", "driller"], de: ["Bohrgeräteführer"], nl: ["boormeester"],
      fr: ["foreur"], es: ["operador de perforadora", "perforista"], it: ["operatore perforatrice"], pl: ["operator wiertnicy"], ar: ["مشغل حفارة آبار"]
    }),
    m("insaat", ["kalıpçı", "kalıp ustası", "inşaat kalıpçısı"], {
      en: ["formwork carpenter", "shuttering carpenter"], de: ["Schalungsbauer", "Betonbauer"], nl: ["bekister"],
      fr: ["coffreur"], es: ["encofrador"], it: ["carpentiere edile"], pl: ["cieśla szalunkowy"], ar: ["نجار قوالب"]
    }),
    m("insaat", ["demirci", "inşaat demircisi", "demir ustası", "betonarme demircisi"], {
      en: ["steel fixer", "rebar worker", "ironworker"], de: ["Eisenflechter"], nl: ["betonijzervlechter"],
      fr: ["ferrailleur"], es: ["ferrallista"], it: ["ferraiolo"], pl: ["zbrojarz"], ar: ["حداد مسلح"]
    }),
    m("insaat", ["duvarcı", "duvar ustası", "tuğla ustası"], {
      en: ["bricklayer", "mason"], de: ["Maurer"], nl: ["metselaar"],
      fr: ["maçon"], es: ["albañil"], it: ["muratore"], pl: ["murarz"], ar: ["بناء"]
    }),
    m("insaat", ["sıvacı", "sıva ustası", "alçı ustası"], {
      en: ["plasterer"], de: ["Stuckateur", "Verputzer"], nl: ["stukadoor"],
      fr: ["plâtrier"], es: ["yesero"], it: ["intonacatore"], pl: ["tynkarz"], ar: ["مليس"]
    }),
    m("insaat", ["alçıpancı", "alçıpan ustası", "kartonpiyerci", "asma tavan ustası"], {
      en: ["drywall installer", "drywaller"], de: ["Trockenbauer"], nl: ["afbouwmonteur"],
      fr: ["plaquiste"], es: ["instalador de pladur"], it: ["cartongessista"], pl: ["monter płyt gipsowo-kartonowych"], ar: ["فني جبس بورد"]
    }),
    m("insaat", ["fayansçı", "seramik ustası", "fayans ustası"], {
      en: ["tiler", "tile setter"], de: ["Fliesenleger"], nl: ["tegelzetter"],
      fr: ["carreleur"], es: ["alicatador", "solador"], it: ["piastrellista"], pl: ["glazurnik"], ar: ["مبلط"]
    }),
    m("insaat", ["boyacı", "inşaat boyacısı", "boya ustası"], {
      en: ["painter decorator", "construction painter"], de: ["Maler und Lackierer"], nl: ["schilder"],
      fr: ["peintre en bâtiment"], es: ["pintor de obra"], it: ["imbianchino"], pl: ["malarz budowlany"], ar: ["دهان"]
    }),
    m("insaat", ["iskele ustası", "iskeleci", "iskele kurulum"], {
      en: ["scaffolder"], de: ["Gerüstbauer"], nl: ["steigerbouwer"],
      fr: ["échafaudeur"], es: ["andamista"], it: ["ponteggiatore"], pl: ["monter rusztowań"], ar: ["عامل سقالات"]
    }),
    m("insaat", ["çatı ustası", "çatıcı", "çatı izolasyon"], {
      en: ["roofer"], de: ["Dachdecker"], nl: ["dakdekker"],
      fr: ["couvreur"], es: ["techador"], it: ["lattoniere", "copritetto"], pl: ["dekarz"], ar: ["عامل أسقف"]
    }),
    m("insaat", ["izolasyon ustası", "mantolama ustası", "su yalıtımcı"], {
      en: ["insulation installer", "waterproofer"], de: ["Isolierer", "Wärmedämmer"], nl: ["isolatiemonteur"],
      fr: ["façadier isolation", "étancheur"], es: ["aislador", "impermeabilizador"], it: ["coibentatore"], pl: ["izolator"], ar: ["فني عزل"]
    }),
    m("insaat", ["asfalt işçisi", "yol işçisi", "yol yapım"], {
      en: ["road worker", "asphalt worker"], de: ["Straßenbauer"], nl: ["wegenbouwer"],
      fr: ["ouvrier routier"], es: ["peón de obra pública"], it: ["operaio stradale"], pl: ["robotnik drogowy"], ar: ["عامل طرق"]
    }),
    m("insaat", ["inşaat işçisi", "düz işçi", "şantiye işçisi"], {
      en: ["construction worker", "general labourer"], de: ["Bauhelfer"], nl: ["bouwvakker"],
      fr: ["manœuvre bâtiment"], es: ["peón de construcción"], it: ["manovale edile"], pl: ["pomocnik budowlany"], ar: ["عامل بناء"]
    }),
    m("insaat", ["şantiye şefi", "saha şefi", "formen", "ustabaşı"], {
      en: ["site supervisor", "construction foreman", "site manager"], de: ["Polier", "Bauleiter"], nl: ["uitvoerder"],
      fr: ["chef de chantier"], es: ["encargado de obra", "jefe de obra"], it: ["capocantiere"], pl: ["kierownik budowy", "brygadzista"], ar: ["مشرف موقع"]
    }),
    m("insaat", ["mermer ustası", "mermerci", "taş ustası", "granit ustası"], {
      en: ["stonemason", "marble installer"], de: ["Steinmetz"], nl: ["steenhouwer"],
      fr: ["tailleur de pierre"], es: ["marmolista", "cantero"], it: ["marmista", "scalpellino"], pl: ["kamieniarz"], ar: ["فني رخام"]
    }),
    m("insaat", ["parke ustası", "zemin kaplamacı", "parkeci"], {
      en: ["floor layer", "flooring installer"], de: ["Bodenleger", "Parkettleger"], nl: ["vloerenlegger"],
      fr: ["solier", "parqueteur"], es: ["instalador de suelos", "parquetista"], it: ["posatore pavimenti", "parquettista"], pl: ["parkieciarz"], ar: ["مركب أرضيات"]
    }),
    m("insaat", ["cam ustası", "camcı", "alüminyum doğramacı", "pvc doğramacı"], {
      en: ["glazier", "window fitter"], de: ["Glaser", "Fensterbauer"], nl: ["glaszetter", "kozijnmonteur"],
      fr: ["vitrier", "menuisier aluminium"], es: ["cristalero", "carpintero de aluminio"], it: ["vetraio", "serramentista"], pl: ["szklarz", "monter okien"], ar: ["فني زجاج والمنيوم"]
    }),

    // ---------------- Ulaşım ve lojistik ----------------
    m("ulasim", ["tır şoförü", "kamyon şoförü", "ce ehliyetli şoför", "uluslararası şoför", "tir şoförü"], {
      en: ["truck driver", "HGV driver", "CDL driver"], de: ["LKW-Fahrer CE", "Berufskraftfahrer"], nl: ["vrachtwagenchauffeur CE"],
      fr: ["chauffeur poids lourd"], es: ["camionero", "conductor de camión"], it: ["autista patente CE", "camionista"], pl: ["kierowca C+E"], ar: ["سائق شاحنة"]
    }),
    m("ulasim", ["transmikser şoförü", "mikser şoförü", "beton mikseri"], {
      en: ["concrete mixer truck driver", "mixer driver"], de: ["Fahrmischerfahrer"], nl: ["betonmixerchauffeur"],
      fr: ["chauffeur toupie béton"], es: ["conductor de hormigonera"], it: ["autista betoniera"], pl: ["kierowca betonomieszarki"], ar: ["سائق خلاطة خرسانة"]
    }),
    m("ulasim", ["damperli kamyon şoförü", "hafriyat şoförü", "damper şoförü"], {
      en: ["dump truck driver", "tipper driver"], de: ["Kipperfahrer"], nl: ["kipwagenchauffeur"],
      fr: ["chauffeur benne"], es: ["conductor de volquete"], it: ["autista ribaltabile"], pl: ["kierowca wywrotki"], ar: ["سائق قلاب"]
    }),
    m("ulasim", ["otobüs şoförü", "servis şoförü", "midibüs şoförü"], {
      en: ["bus driver"], de: ["Busfahrer"], nl: ["buschauffeur"],
      fr: ["conducteur de bus"], es: ["conductor de autobús"], it: ["autista di autobus"], pl: ["kierowca autobusu"], ar: ["سائق حافلة"]
    }),
    m("ulasim", ["kurye", "moto kurye", "dağıtım elemanı"], {
      en: ["delivery driver", "courier"], de: ["Kurierfahrer", "Auslieferungsfahrer"], nl: ["pakketbezorger"],
      fr: ["livreur"], es: ["repartidor"], it: ["corriere", "fattorino"], pl: ["kurier"], ar: ["مندوب توصيل"]
    }),
    m("ulasim", ["forklift operatörü", "forklift", "istif makinesi"], {
      en: ["forklift operator", "forklift driver"], de: ["Staplerfahrer", "Gabelstaplerfahrer"], nl: ["heftruckchauffeur"],
      fr: ["cariste"], es: ["carretillero"], it: ["carrellista"], pl: ["operator wózka widłowego"], ar: ["مشغل رافعة شوكية"]
    }),
    m("ulasim", ["depo elemanı", "depocu", "depo işçisi", "lojistik elemanı"], {
      en: ["warehouse worker", "warehouse operative"], de: ["Lagerhelfer", "Lagerist"], nl: ["magazijnmedewerker"],
      fr: ["préparateur de commandes"], es: ["mozo de almacén"], it: ["magazziniere"], pl: ["magazynier"], ar: ["عامل مستودع"]
    }),
    m("ulasim", ["tren makinisti", "makinist", "lokomotif makinisti"], {
      en: ["train driver", "locomotive engineer"], de: ["Lokführer", "Triebfahrzeugführer"], nl: ["machinist trein"],
      fr: ["conducteur de train"], es: ["maquinista de tren"], it: ["macchinista ferroviario"], pl: ["maszynista"], ar: ["سائق قطار"]
    }),
    m("ulasim", ["uçak teknisyeni", "uçak bakım teknisyeni"], {
      en: ["aircraft maintenance technician", "aircraft mechanic"], de: ["Fluggerätmechaniker"], nl: ["vliegtuigmonteur"],
      fr: ["mécanicien aéronautique"], es: ["técnico de mantenimiento de aeronaves"], it: ["tecnico manutenzione aeromobili"], pl: ["mechanik lotniczy"], ar: ["فني صيانة طائرات"]
    }),

    // ---------------- Sanayi ve üretim ----------------
    m("sanayi", ["kaynakçı", "kaynak ustası", "argon kaynakçı", "gazaltı kaynakçı"], {
      en: ["welder", "TIG welder", "MIG welder"], de: ["Schweißer"], nl: ["lasser"],
      fr: ["soudeur"], es: ["soldador"], it: ["saldatore"], pl: ["spawacz"], ar: ["لحام"]
    }),
    m("sanayi", ["boru kaynakçısı", "boru kaynakçı", "boru montajcı"], {
      en: ["pipe welder", "pipefitter"], de: ["Rohrschweißer", "Rohrleitungsbauer"], nl: ["pijpfitter"],
      fr: ["soudeur tuyauteur", "tuyauteur"], es: ["soldador de tubería", "tubero"], it: ["saldatore tubista", "tubista"], pl: ["spawacz rurociągów"], ar: ["لحام أنابيب"]
    }),
    m("sanayi", ["çelik montajcı", "çelik konstrüksiyon ustası", "metal montaj"], {
      en: ["steel erector", "structural steel worker"], de: ["Stahlbauer", "Stahlbaumonteur"], nl: ["staalconstructiemonteur"],
      fr: ["monteur charpente métallique"], es: ["montador de estructuras metálicas"], it: ["montatore carpenteria metallica"], pl: ["monter konstrukcji stalowych"], ar: ["فني تركيب هياكل حديدية"]
    }),
    m("sanayi", ["cnc operatörü", "cnc", "cnc tezgah"], {
      en: ["CNC operator", "CNC machinist"], de: ["CNC-Bediener", "Zerspanungsmechaniker"], nl: ["CNC-operator"],
      fr: ["opérateur CNC"], es: ["operario CNC"], it: ["operatore CNC"], pl: ["operator CNC"], ar: ["مشغل CNC"]
    }),
    m("sanayi", ["tornacı", "torna ustası", "frezeci"], {
      en: ["lathe operator", "machinist"], de: ["Dreher", "Fräser"], nl: ["draaier"],
      fr: ["tourneur"], es: ["tornero"], it: ["tornitore"], pl: ["tokarz"], ar: ["خراط"]
    }),
    m("sanayi", ["sac ustası", "sac işleme", "abkant operatörü", "lazer kesim operatörü"], {
      en: ["sheet metal worker", "press brake operator"], de: ["Blechschlosser", "Konstruktionsmechaniker"], nl: ["plaatwerker"],
      fr: ["tôlier"], es: ["chapista industrial", "operario de plegadora"], it: ["lattoniere industriale", "piegatore lamiera"], pl: ["blacharz"], ar: ["فني صاج"]
    }),
    m("sanayi", ["makine montajcı", "montaj elemanı", "endüstriyel montajcı"], {
      en: ["industrial mechanic", "machine assembler"], de: ["Industriemechaniker", "Monteur"], nl: ["monteur werktuigbouw"],
      fr: ["monteur industriel"], es: ["montador industrial"], it: ["montatore meccanico"], pl: ["monter maszyn"], ar: ["فني تجميع آلات"]
    }),
    m("sanayi", ["üretim operatörü", "fabrika işçisi", "makine operatörü", "üretim elemanı"], {
      en: ["production operator", "machine operator", "factory worker"], de: ["Produktionshelfer", "Maschinenbediener"], nl: ["productiemedewerker"],
      fr: ["opérateur de production"], es: ["operario de producción"], it: ["operaio di produzione"], pl: ["operator produkcji"], ar: ["عامل إنتاج"]
    }),
    m("sanayi", ["kalite kontrol elemanı", "kalite kontrolcü", "kalite teknisyeni"], {
      en: ["quality inspector", "quality control technician"], de: ["Qualitätsprüfer"], nl: ["kwaliteitscontroleur"],
      fr: ["contrôleur qualité"], es: ["inspector de calidad"], it: ["addetto controllo qualità"], pl: ["kontroler jakości"], ar: ["مراقب جودة"]
    }),
    m("sanayi", ["endüstriyel boyacı", "fabrika boyacısı", "fırın boyacısı", "kumlamacı"], {
      en: ["industrial painter", "spray painter", "sandblaster"], de: ["Industrielackierer"], nl: ["industrieel spuiter"],
      fr: ["peintre industriel"], es: ["pintor industrial"], it: ["verniciatore industriale"], pl: ["lakiernik przemysłowy"], ar: ["دهان صناعي"]
    }),
    m("sanayi", ["oto boyacı", "kaportacı", "oto kaporta"], {
      en: ["auto body technician", "panel beater", "car painter"], de: ["Karosseriebauer", "Fahrzeuglackierer"], nl: ["autoschadehersteller"],
      fr: ["carrossier peintre"], es: ["chapista pintor"], it: ["carrozziere"], pl: ["blacharz samochodowy", "lakiernik samochodowy"], ar: ["سمكري سيارات"]
    }),
    m("sanayi", ["terzi", "dikiş makinesi operatörü", "konfeksiyon"], {
      en: ["sewing machine operator", "tailor"], de: ["Näher", "Schneider"], nl: ["naaister", "kleermaker"],
      fr: ["couturier", "opérateur de confection"], es: ["costurero", "sastre"], it: ["sarto", "cucitrice"], pl: ["szwacz", "krawiec"], ar: ["خياط"]
    }),
    m("sanayi", ["mobilyacı", "mobilya ustası", "döşemeci"], {
      en: ["furniture maker", "upholsterer"], de: ["Möbeltischler", "Polsterer"], nl: ["meubelmaker", "stoffeerder"],
      fr: ["ébéniste", "tapissier"], es: ["ebanista", "tapicero"], it: ["mobiliere", "tappezziere"], pl: ["stolarz meblowy", "tapicer"], ar: ["نجار أثاث"]
    }),
    m("sanayi", ["marangoz", "doğramacı", "ahşap ustası"], {
      en: ["carpenter", "joiner"], de: ["Tischler", "Zimmerer"], nl: ["timmerman"],
      fr: ["menuisier"], es: ["carpintero"], it: ["falegname"], pl: ["stolarz"], ar: ["نجار"]
    }),

    // ---------------- Bakım, tamir ve teknik servis ----------------
    m("tamir", ["elektrikçi", "elektrik ustası", "elektrik teknisyeni"], {
      en: ["electrician"], de: ["Elektriker", "Elektroniker"], nl: ["elektricien"],
      fr: ["électricien"], es: ["electricista"], it: ["elettricista"], pl: ["elektryk"], ar: ["كهربائي"]
    }),
    m("tamir", ["endüstriyel elektrikçi", "fabrika elektrikçisi", "bakım elektrikçisi"], {
      en: ["industrial electrician", "maintenance electrician"], de: ["Elektroniker für Betriebstechnik"], nl: ["industrieel elektricien"],
      fr: ["électricien industriel"], es: ["electricista industrial"], it: ["elettricista industriale"], pl: ["elektryk przemysłowy"], ar: ["كهربائي صناعي"]
    }),
    m("tamir", ["tesisatçı", "sıhhi tesisatçı", "su tesisatçısı", "kalorifer tesisatçısı"], {
      en: ["plumber"], de: ["Anlagenmechaniker SHK", "Installateur"], nl: ["loodgieter"],
      fr: ["plombier"], es: ["fontanero"], it: ["idraulico"], pl: ["hydraulik"], ar: ["سباك"]
    }),
    m("tamir", ["klima teknisyeni", "soğutma teknisyeni", "klimacı", "iklimlendirme"], {
      en: ["HVAC technician", "refrigeration technician"], de: ["Mechatroniker für Kältetechnik", "Klimatechniker"], nl: ["koeltechnisch monteur"],
      fr: ["frigoriste", "technicien CVC"], es: ["técnico de climatización", "frigorista"], it: ["frigorista", "tecnico climatizzazione"], pl: ["technik chłodnictwa"], ar: ["فني تكييف وتبريد"]
    }),
    m("tamir", ["asansör teknisyeni", "asansör montajcı", "asansörcü"], {
      en: ["elevator technician", "lift engineer"], de: ["Aufzugsmonteur"], nl: ["liftmonteur"],
      fr: ["ascensoriste"], es: ["técnico de ascensores"], it: ["ascensorista", "manutentore ascensori"], pl: ["konserwator dźwigów"], ar: ["فني مصاعد"]
    }),
    m("tamir", ["oto tamircisi", "oto ustası", "araç tamircisi", "oto mekanik"], {
      en: ["car mechanic", "automotive technician"], de: ["Kfz-Mechatroniker"], nl: ["automonteur"],
      fr: ["mécanicien automobile"], es: ["mecánico de automóviles"], it: ["meccanico auto"], pl: ["mechanik samochodowy"], ar: ["ميكانيكي سيارات"]
    }),
    m("tamir", ["oto elektrikçi", "araç elektrikçisi"], {
      en: ["auto electrician"], de: ["Kfz-Elektriker"], nl: ["autoelektricien"],
      fr: ["électricien automobile"], es: ["electricista de automóviles"], it: ["elettrauto"], pl: ["elektryk samochodowy"], ar: ["كهربائي سيارات"]
    }),
    m("tamir", ["kamyon tamircisi", "ağır vasıta tamircisi", "tır tamircisi"], {
      en: ["truck mechanic", "diesel mechanic", "HGV technician"], de: ["Nutzfahrzeugmechatroniker", "LKW-Mechaniker"], nl: ["truckmonteur"],
      fr: ["mécanicien poids lourds"], es: ["mecánico de camiones"], it: ["meccanico veicoli industriali"], pl: ["mechanik samochodów ciężarowych"], ar: ["ميكانيكي شاحنات"]
    }),
    m("tamir", ["iş makinesi tamircisi", "iş makinesi ustası", "iş makinesi teknisyeni"], {
      en: ["heavy equipment mechanic", "plant fitter"], de: ["Baumaschinenmechaniker", "Land- und Baumaschinenmechatroniker"], nl: ["monteur grondverzetmachines"],
      fr: ["mécanicien engins de chantier"], es: ["mecánico de maquinaria pesada"], it: ["meccanico macchine movimento terra"], pl: ["mechanik maszyn budowlanych"], ar: ["ميكانيكي معدات ثقيلة"]
    }),
    m("tamir", ["hidrolik teknisyeni", "hidrolikçi"], {
      en: ["hydraulic technician", "hydraulic fitter"], de: ["Hydrauliker", "Hydrauliktechniker"], nl: ["hydraulisch monteur"],
      fr: ["technicien hydraulique"], es: ["técnico hidráulico"], it: ["tecnico oleodinamico"], pl: ["technik hydraulik siłowy"], ar: ["فني هيدروليك"]
    }),
    m("tamir", ["bakım teknisyeni", "fabrika bakımcı", "mekanik bakımcı"], {
      en: ["maintenance technician", "maintenance fitter"], de: ["Instandhaltungsmechaniker"], nl: ["onderhoudsmonteur"],
      fr: ["technicien de maintenance"], es: ["técnico de mantenimiento"], it: ["manutentore meccanico"], pl: ["mechanik utrzymania ruchu"], ar: ["فني صيانة"]
    }),
    m("tamir", ["ısı pompası teknisyeni", "ısı pompası montajcısı", "ısıtma sistemleri montajcısı"], {
      en: ["heat pump installer", "heat pump technician"], de: ["Wärmepumpen Monteur", "Anlagenmechaniker SHK"], nl: ["warmtepomp monteur", "installatiemonteur"],
      fr: ["installateur pompe à chaleur", "technicien chauffagiste"], es: ["instalador de bombas de calor"], it: ["installatore pompe di calore"], pl: ["monter pomp ciepła"], ar: ["فني تركيب مضخات حرارية"]
    }, "Avrupa'da gaz kazanı yerine ısı pompası kurulumu hızla artıyor. Tesisat veya klima tecrübesi olanlar için geçiş yapılabilir bir alandır; bazı ülkelerde ek belge istenir."),
    m("tamir", ["elektrikli araç teknisyeni", "elektrikli araç tamircisi", "hibrit araç teknisyeni"], {
      en: ["electric vehicle technician", "EV technician"], de: ["Kfz-Mechatroniker Hochvolt", "Elektrofahrzeug Techniker"], nl: ["EV monteur", "automonteur elektrisch"],
      fr: ["technicien véhicules électriques"], es: ["técnico de vehículos eléctricos"], it: ["tecnico auto elettriche"], pl: ["mechanik pojazdów elektrycznych"], ar: ["فني سيارات كهربائية"]
    }, "Yüksek voltaj güvenliği eğitimi genelde şarttır. Oto tamircisi ya da oto elektrikçisiysen bu eğitimle iş ilanları genişler."),
    m("tamir", ["şarj istasyonu montajcısı", "şarj cihazı kurulum elektrikçisi"], {
      en: ["EV charger installer", "charge point installer"], de: ["Ladeinfrastruktur Monteur", "Elektroniker Ladesäulen"], nl: ["laadpaal monteur"],
      fr: ["installateur de bornes de recharge"], es: ["instalador de puntos de recarga"], it: ["installatore colonnine di ricarica"], pl: ["monter stacji ładowania"], ar: ["فني تركيب محطات شحن"]
    }, "Çoğu ülkede kurulumu yapacak kişinin elektrik yetki belgesi olmalıdır. Elektrikçiysen belgenin denkliğini ilgili ülkenin kurumundan sor."),
    m("tamir", ["güneş paneli montajcı", "solar montajcı", "güneş enerjisi teknisyeni"], {
      en: ["solar panel installer", "solar PV installer"], de: ["Solarteur", "PV-Monteur"], nl: ["zonnepanelen monteur"],
      fr: ["installateur photovoltaïque"], es: ["instalador de placas solares"], it: ["installatore fotovoltaico"], pl: ["monter fotowoltaiki"], ar: ["فني ألواح شمسية"]
    }),
    m("tamir", ["telefon tamircisi", "elektronik teknisyeni", "elektronikçi"], {
      en: ["electronics technician", "phone repair technician"], de: ["Elektroniker", "Handy-Reparatur Techniker"], nl: ["elektronicamonteur"],
      fr: ["technicien électronique"], es: ["técnico electrónico"], it: ["tecnico elettronico"], pl: ["elektronik", "serwisant telefonów"], ar: ["فني إلكترونيات"]
    }),

    // ---------------- Sağlık ve bakım ----------------
    m("saglik", ["hemşire", "sağlık personeli"], {
      en: ["registered nurse", "nurse"], de: ["Pflegefachkraft", "Krankenpfleger"], nl: ["verpleegkundige"],
      fr: ["infirmier"], es: ["enfermero"], it: ["infermiere"], pl: ["pielęgniarka"], ar: ["ممرض"]
    }, "Hemşirelikte diplomanın o ülkede tanınması (denklik) ve dil belgesi neredeyse her zaman şarttır. Almanya'da işverenlerin bu süreci üstlendiği ilanlar sık görülür."),
    m("saglik", ["yaşlı bakıcı", "hasta bakıcı", "bakıcı", "yaşlı bakım elemanı"], {
      en: ["caregiver", "care assistant"], de: ["Altenpfleger", "Pflegehelfer"], nl: ["verzorgende"],
      fr: ["aide-soignant"], es: ["cuidador", "auxiliar de geriatría"], it: ["badante", "operatore socio sanitario"], pl: ["opiekun osób starszych"], ar: ["مقدم رعاية"]
    }),
    m("saglik", ["doktor", "hekim", "pratisyen hekim"], {
      en: ["doctor", "physician"], de: ["Arzt", "Assistenzarzt"], nl: ["arts"],
      fr: ["médecin"], es: ["médico"], it: ["medico"], pl: ["lekarz"], ar: ["طبيب"]
    }),
    m("saglik", ["fizyoterapist"], {
      en: ["physiotherapist", "physical therapist"], de: ["Physiotherapeut"], nl: ["fysiotherapeut"],
      fr: ["kinésithérapeute"], es: ["fisioterapeuta"], it: ["fisioterapista"], pl: ["fizjoterapeuta"], ar: ["أخصائي علاج طبيعي"]
    }),
    m("saglik", ["diş teknisyeni", "diş protez teknisyeni"], {
      en: ["dental technician"], de: ["Zahntechniker"], nl: ["tandtechnicus"],
      fr: ["prothésiste dentaire"], es: ["protésico dental"], it: ["odontotecnico"], pl: ["technik dentystyczny"], ar: ["فني أسنان"]
    }),
    m("saglik", ["eczacı"], {
      en: ["pharmacist"], de: ["Apotheker"], nl: ["apotheker"],
      fr: ["pharmacien"], es: ["farmacéutico"], it: ["farmacista"], pl: ["farmaceuta"], ar: ["صيدلي"]
    }),
    m("saglik", ["ebe"], {
      en: ["midwife"], de: ["Hebamme"], nl: ["verloskundige"],
      fr: ["sage-femme"], es: ["matrona"], it: ["ostetrica"], pl: ["położna"], ar: ["قابلة"]
    }),
    m("saglik", ["ambulans şoförü", "paramedik", "acil tıp teknisyeni"], {
      en: ["paramedic", "ambulance driver"], de: ["Notfallsanitäter", "Rettungssanitäter"], nl: ["ambulanceverpleegkundige"],
      fr: ["ambulancier"], es: ["técnico en emergencias sanitarias"], it: ["soccorritore", "autista soccorritore"], pl: ["ratownik medyczny"], ar: ["مسعف"]
    }),
    m("saglik", ["çocuk bakıcısı", "dadı", "bebek bakıcısı"], {
      en: ["nanny", "childcare worker"], de: ["Kinderbetreuer", "Nanny"], nl: ["kinderopvang medewerker", "nanny"],
      fr: ["nounou", "garde d'enfants"], es: ["niñera"], it: ["babysitter", "tata"], pl: ["opiekunka do dziecka"], ar: ["مربية أطفال"]
    }),

    // ---------------- Turizm, otel ve yiyecek ----------------
    m("turizm", ["aşçı", "şef", "aşçıbaşı", "usta aşçı"], {
      en: ["cook", "chef"], de: ["Koch"], nl: ["kok"],
      fr: ["cuisinier"], es: ["cocinero"], it: ["cuoco"], pl: ["kucharz"], ar: ["طباخ"]
    }),
    m("turizm", ["aşçı yardımcısı", "komi", "mutfak elemanı", "bulaşıkçı"], {
      en: ["kitchen assistant", "kitchen porter", "commis chef"], de: ["Küchenhilfe"], nl: ["keukenhulp"],
      fr: ["commis de cuisine", "plongeur"], es: ["ayudante de cocina"], it: ["aiuto cuoco", "lavapiatti"], pl: ["pomoc kuchenna"], ar: ["مساعد طباخ"]
    }),
    m("turizm", ["dönerci", "döner ustası", "kebapçı", "kebap ustası"], {
      en: ["kebab chef", "doner kebab cook"], de: ["Dönerkoch", "Grillmeister"], nl: ["shoarma kok"],
      fr: ["cuisinier kebab"], es: ["cocinero de kebab"], it: ["cuoco kebab"], pl: ["kucharz kebab"], ar: ["معلم شاورما"]
    }, "Döner ustalarına özellikle Almanya, Avusturya, Hollanda ve İngiltere'de sürekli talep var. Bu ilanların çoğu Türk işletmelere aittir."),
    m("turizm", ["pizzacı", "pizza ustası", "pideci", "lahmacuncu"], {
      en: ["pizza chef", "pizzaiolo"], de: ["Pizzabäcker"], nl: ["pizzabakker"],
      fr: ["pizzaiolo"], es: ["pizzero"], it: ["pizzaiolo"], pl: ["pizzerman"], ar: ["معلم بيتزا"]
    }),
    m("turizm", ["garson", "servis elemanı"], {
      en: ["waiter", "server"], de: ["Kellner", "Servicekraft"], nl: ["ober", "bediening"],
      fr: ["serveur"], es: ["camarero"], it: ["cameriere"], pl: ["kelner"], ar: ["نادل"]
    }),
    m("turizm", ["barista", "barmen", "kahve ustası"], {
      en: ["barista", "bartender"], de: ["Barista", "Barkeeper"], nl: ["barista", "barmedewerker"],
      fr: ["barista", "barman"], es: ["barista", "camarero de barra"], it: ["barista"], pl: ["barista", "barman"], ar: ["باريستا"]
    }),
    m("turizm", ["kat görevlisi", "oda temizlik", "housekeeping"], {
      en: ["room attendant", "housekeeper"], de: ["Zimmermädchen", "Hauswirtschafter"], nl: ["kamermeisje", "housekeeping medewerker"],
      fr: ["femme de chambre", "valet de chambre"], es: ["camarera de pisos"], it: ["cameriera ai piani"], pl: ["pokojówka"], ar: ["عامل نظافة غرف"]
    }),
    m("turizm", ["resepsiyonist", "ön büro", "otel resepsiyon"], {
      en: ["hotel receptionist", "front desk agent"], de: ["Rezeptionist", "Hotelfachmann"], nl: ["receptionist hotel"],
      fr: ["réceptionniste"], es: ["recepcionista de hotel"], it: ["receptionist"], pl: ["recepcjonista"], ar: ["موظف استقبال"]
    }),
    m("turizm", ["kasap", "et ustası"], {
      en: ["butcher"], de: ["Metzger", "Fleischer"], nl: ["slager"],
      fr: ["boucher"], es: ["carnicero"], it: ["macellaio"], pl: ["rzeźnik"], ar: ["جزار"]
    }),
    m("turizm", ["fırıncı", "ekmek ustası"], {
      en: ["baker"], de: ["Bäcker"], nl: ["bakker"],
      fr: ["boulanger"], es: ["panadero"], it: ["panettiere", "fornaio"], pl: ["piekarz"], ar: ["خباز"]
    }),
    m("turizm", ["pastacı", "pasta ustası", "tatlıcı", "baklavacı"], {
      en: ["pastry chef", "confectioner"], de: ["Konditor"], nl: ["banketbakker"],
      fr: ["pâtissier"], es: ["pastelero"], it: ["pasticcere"], pl: ["cukiernik"], ar: ["حلواني"]
    }),
    m("turizm", ["animatör", "otel animatörü"], {
      en: ["entertainer", "animator", "activity host"], de: ["Animateur"], nl: ["animatieteam"],
      fr: ["animateur"], es: ["animador turístico"], it: ["animatore turistico"], pl: ["animator"], ar: ["منشط سياحي"]
    }),

    // ---------------- Hizmet ve satış ----------------
    m("hizmet", ["temizlik görevlisi", "temizlikçi", "temizlik personeli"], {
      en: ["cleaner", "cleaning operative"], de: ["Reinigungskraft"], nl: ["schoonmaker"],
      fr: ["agent d'entretien"], es: ["limpiador"], it: ["addetto alle pulizie"], pl: ["sprzątacz"], ar: ["عامل نظافة"]
    }),
    m("hizmet", ["güvenlik görevlisi", "özel güvenlik", "bekçi"], {
      en: ["security guard", "security officer"], de: ["Sicherheitsmitarbeiter"], nl: ["beveiliger"],
      fr: ["agent de sécurité"], es: ["vigilante de seguridad"], it: ["guardia giurata", "addetto sicurezza"], pl: ["pracownik ochrony"], ar: ["حارس أمن"]
    }),
    m("hizmet", ["berber", "erkek kuaförü"], {
      en: ["barber"], de: ["Barbier", "Friseur"], nl: ["barbier", "kapper"],
      fr: ["barbier"], es: ["barbero"], it: ["barbiere"], pl: ["barber"], ar: ["حلاق"]
    }, "Türk berberleri Almanya, İngiltere ve Hollanda'da çok aranır. Bazı ülkelerde ustalık belgesi ya da denklik istenebilir."),
    m("hizmet", ["kuaför", "bayan kuaförü", "saç tasarımcısı"], {
      en: ["hairdresser", "hair stylist"], de: ["Friseur"], nl: ["kapper"],
      fr: ["coiffeur"], es: ["peluquero"], it: ["parrucchiere"], pl: ["fryzjer"], ar: ["مصفف شعر"]
    }),
    m("hizmet", ["güzellik uzmanı", "estetisyen", "manikürcü"], {
      en: ["beautician", "nail technician"], de: ["Kosmetiker", "Nageldesigner"], nl: ["schoonheidsspecialist"],
      fr: ["esthéticienne"], es: ["esteticista"], it: ["estetista"], pl: ["kosmetyczka"], ar: ["أخصائي تجميل"]
    }),
    m("hizmet", ["satış danışmanı", "tezgahtar", "mağaza çalışanı", "reyon görevlisi"], {
      en: ["sales assistant", "retail assistant"], de: ["Verkäufer"], nl: ["verkoopmedewerker"],
      fr: ["vendeur"], es: ["dependiente"], it: ["commesso"], pl: ["sprzedawca"], ar: ["مندوب مبيعات"]
    }),
    m("hizmet", ["kasiyer"], {
      en: ["cashier"], de: ["Kassierer"], nl: ["kassamedewerker"],
      fr: ["caissier"], es: ["cajero"], it: ["cassiere"], pl: ["kasjer"], ar: ["كاشير"]
    }),
    m("hizmet", ["çağrı merkezi", "müşteri temsilcisi", "çağrı merkezi elemanı"], {
      en: ["customer service representative", "call centre agent"], de: ["Kundenberater", "Kundenservice Mitarbeiter"], nl: ["klantenservice medewerker"],
      fr: ["conseiller clientèle"], es: ["teleoperador", "atención al cliente"], it: ["operatore call center"], pl: ["konsultant call center"], ar: ["ممثل خدمة عملاء"]
    }, "Türkçe bilen müşteri temsilcilerine Avrupa'da (özellikle Almanya, Hollanda, Portekiz, Yunanistan) ayrıca ilan açılır. Aramaya 'Turkish speaking' ekleyerek de deneyin."),
    m("hizmet", ["öğretmen", "eğitmen"], {
      en: ["teacher"], de: ["Lehrer"], nl: ["leraar", "docent"],
      fr: ["enseignant"], es: ["profesor"], it: ["insegnante"], pl: ["nauczyciel"], ar: ["معلم"]
    }),
    m("hizmet", ["tercüman", "çevirmen"], {
      en: ["translator", "interpreter"], de: ["Übersetzer", "Dolmetscher"], nl: ["vertaler", "tolk"],
      fr: ["traducteur", "interprète"], es: ["traductor", "intérprete"], it: ["traduttore", "interprete"], pl: ["tłumacz"], ar: ["مترجم"]
    }),

    // ---------------- Tarım, hayvancılık ve gıda ----------------
    m("tarim", ["tarım işçisi", "mevsimlik işçi", "çiftlik işçisi", "hasat işçisi"], {
      en: ["farm worker", "seasonal farm worker", "fruit picker"], de: ["Erntehelfer", "Landarbeiter"], nl: ["landbouwmedewerker"],
      fr: ["ouvrier agricole", "saisonnier agricole"], es: ["peón agrícola", "temporero"], it: ["bracciante agricolo"], pl: ["pracownik rolny"], ar: ["عامل زراعي"]
    }),
    m("tarim", ["traktör şoförü", "traktör operatörü", "biçerdöver operatörü"], {
      en: ["tractor driver", "combine harvester operator"], de: ["Traktorfahrer", "Mähdrescherfahrer"], nl: ["trekkerchauffeur"],
      fr: ["conducteur de tracteur"], es: ["tractorista"], it: ["trattorista"], pl: ["traktorzysta"], ar: ["سائق جرار"]
    }),
    m("tarim", ["seracı", "sera işçisi", "fide üretimi"], {
      en: ["greenhouse worker", "horticulture worker"], de: ["Gärtner Gemüsebau", "Gewächshausmitarbeiter"], nl: ["kassenmedewerker", "tuinbouwmedewerker"],
      fr: ["ouvrier serriste"], es: ["trabajador de invernadero"], it: ["operaio serricolo"], pl: ["pracownik szklarni"], ar: ["عامل بيوت محمية"]
    }),
    m("tarim", ["bahçıvan", "peyzaj işçisi", "bahçe bakımcı"], {
      en: ["gardener", "landscaper"], de: ["Gärtner", "Landschaftsgärtner"], nl: ["hovenier"],
      fr: ["jardinier paysagiste"], es: ["jardinero"], it: ["giardiniere"], pl: ["ogrodnik"], ar: ["بستاني"]
    }),
    m("tarim", ["hayvan bakıcısı", "çoban", "sağımcı", "besici"], {
      en: ["livestock worker", "dairy farm worker", "stockperson"], de: ["Tierwirt", "Melker"], nl: ["melker", "veehouderij medewerker"],
      fr: ["ouvrier d'élevage", "vacher"], es: ["ganadero", "ordeñador"], it: ["allevatore", "mungitore"], pl: ["hodowca", "dojarz"], ar: ["عامل مزرعة مواشي"]
    }),
    m("tarim", ["gıda üretim elemanı", "gıda işçisi", "paketleme elemanı"], {
      en: ["food production operative", "food packer"], de: ["Produktionshelfer Lebensmittel"], nl: ["productiemedewerker voeding"],
      fr: ["opérateur agroalimentaire"], es: ["operario de industria alimentaria"], it: ["operaio alimentare"], pl: ["pracownik produkcji spożywczej"], ar: ["عامل إنتاج غذائي"]
    }),
    m("tarim", ["et işleme", "et parçalama", "kesimhane işçisi"], {
      en: ["meat processing worker", "meat cutter"], de: ["Fleischzerleger"], nl: ["uitbener", "vleesverwerker"],
      fr: ["désosseur", "ouvrier en abattoir"], es: ["despiezador de carne"], it: ["sezionatore carni"], pl: ["rozbieracz mięsa"], ar: ["عامل تقطيع لحوم"]
    }),
    m("tarim", ["orman işçisi", "ağaç kesici", "tomruk"], {
      en: ["forestry worker", "tree surgeon", "arborist"], de: ["Forstwirt", "Baumpfleger"], nl: ["bosbouwer", "boomverzorger"],
      fr: ["bûcheron", "élagueur"], es: ["operario forestal"], it: ["operaio forestale", "boscaiolo"], pl: ["pilarz", "pracownik leśny"], ar: ["عامل غابات"]
    }),

    // ---------------- Bilişim, ofis ve mühendislik ----------------
    m("bilisim", ["yazılımcı", "yazılım geliştirici", "programcı"], {
      en: ["software developer", "software engineer"], de: ["Softwareentwickler"], nl: ["softwareontwikkelaar"],
      fr: ["développeur"], es: ["desarrollador de software"], it: ["sviluppatore software"], pl: ["programista"], ar: ["مطور برمجيات"]
    }),
    m("bilisim", ["bilgi işlem", "it destek", "teknik destek", "sistem yöneticisi"], {
      en: ["IT support technician", "system administrator"], de: ["IT-Support", "Systemadministrator"], nl: ["IT-supportmedewerker"],
      fr: ["technicien support informatique"], es: ["técnico de soporte informático"], it: ["tecnico informatico"], pl: ["specjalista IT support"], ar: ["دعم فني تقنية معلومات"]
    }),
    m("bilisim", ["muhasebeci", "muhasebe elemanı", "mali müşavir"], {
      en: ["accountant", "bookkeeper"], de: ["Buchhalter"], nl: ["boekhouder"],
      fr: ["comptable"], es: ["contable"], it: ["contabile"], pl: ["księgowy"], ar: ["محاسب"]
    }),
    m("bilisim", ["inşaat mühendisi"], {
      en: ["civil engineer", "site engineer"], de: ["Bauingenieur"], nl: ["civiel ingenieur"],
      fr: ["ingénieur génie civil"], es: ["ingeniero civil"], it: ["ingegnere civile"], pl: ["inżynier budownictwa"], ar: ["مهندس مدني"]
    }),
    m("bilisim", ["makine mühendisi"], {
      en: ["mechanical engineer"], de: ["Maschinenbauingenieur"], nl: ["werktuigbouwkundig ingenieur"],
      fr: ["ingénieur mécanique"], es: ["ingeniero mecánico"], it: ["ingegnere meccanico"], pl: ["inżynier mechanik"], ar: ["مهندس ميكانيكي"]
    }),
    m("bilisim", ["elektrik mühendisi", "elektrik elektronik mühendisi"], {
      en: ["electrical engineer"], de: ["Elektroingenieur"], nl: ["elektrotechnisch ingenieur"],
      fr: ["ingénieur électricien"], es: ["ingeniero eléctrico"], it: ["ingegnere elettrico"], pl: ["inżynier elektryk"], ar: ["مهندس كهربائي"]
    }),
    m("bilisim", ["harita teknikeri", "topograf", "harita mühendisi", "jeodezi"], {
      en: ["land surveyor", "surveying technician"], de: ["Vermessungstechniker"], nl: ["landmeter"],
      fr: ["géomètre topographe"], es: ["topógrafo"], it: ["topografo"], pl: ["geodeta"], ar: ["مساح"]
    }),
    m("bilisim", ["iş güvenliği uzmanı", "isg uzmanı", "hse"], {
      en: ["health and safety officer", "HSE officer"], de: ["Fachkraft für Arbeitssicherheit"], nl: ["veiligheidskundige"],
      fr: ["responsable HSE"], es: ["técnico de prevención de riesgos laborales"], it: ["tecnico della sicurezza", "RSPP"], pl: ["specjalista BHP"], ar: ["مسؤول السلامة والصحة المهنية"]
    }),
    m("bilisim", ["teknik ressam", "autocad çizer", "proje çizer"], {
      en: ["draughtsman", "CAD technician"], de: ["Technischer Zeichner"], nl: ["tekenaar constructeur"],
      fr: ["dessinateur projeteur"], es: ["delineante"], it: ["disegnatore tecnico"], pl: ["kreślarz"], ar: ["رسام هندسي"]
    }),
    m("bilisim", ["grafik tasarımcı", "tasarımcı"], {
      en: ["graphic designer"], de: ["Grafikdesigner", "Mediengestalter"], nl: ["grafisch ontwerper"],
      fr: ["graphiste"], es: ["diseñador gráfico"], it: ["grafico"], pl: ["grafik"], ar: ["مصمم جرافيك"]
    }),

    // ---------------- Denizcilik ve enerji ----------------
    m("denizcilik", ["gemi adamı", "denizci", "güverte tayfası", "gemici"], {
      en: ["able seaman", "deckhand"], de: ["Matrose"], nl: ["matroos"],
      fr: ["matelot"], es: ["marinero"], it: ["marinaio"], pl: ["marynarz"], ar: ["بحار"]
    }),
    m("denizcilik", ["gemi makinisti", "gemi mühendisi", "makine zabiti"], {
      en: ["marine engineer", "ship engineer"], de: ["Schiffsingenieur", "Schiffsmechaniker"], nl: ["scheepswerktuigkundige"],
      fr: ["mécanicien marine"], es: ["mecánico naval"], it: ["ufficiale di macchina"], pl: ["mechanik okrętowy"], ar: ["مهندس بحري"]
    }),
    m("denizcilik", ["tersane işçisi", "gemi inşa", "gemi kaynakçısı"], {
      en: ["shipyard worker", "shipbuilder"], de: ["Schiffbauer"], nl: ["scheepsbouwer"],
      fr: ["ouvrier chantier naval"], es: ["operario de astillero"], it: ["operaio cantiere navale"], pl: ["stoczniowiec"], ar: ["عامل أحواض بناء السفن"]
    }),
    m("denizcilik", ["petrol sondaj işçisi", "platform işçisi", "rig işçisi"], {
      en: ["roustabout", "roughneck", "offshore worker"], de: ["Offshore-Arbeiter"], nl: ["offshore medewerker"],
      fr: ["ouvrier offshore"], es: ["trabajador offshore"], it: ["operaio offshore"], pl: ["pracownik offshore"], ar: ["عامل منصة نفط"]
    }),
    m("denizcilik", ["rüzgar türbini teknisyeni", "rüzgar enerjisi teknisyeni"], {
      en: ["wind turbine technician"], de: ["Servicetechniker Windenergie"], nl: ["windturbine monteur"],
      fr: ["technicien éolien"], es: ["técnico de aerogeneradores"], it: ["tecnico eolico"], pl: ["technik turbin wiatrowych"], ar: ["فني توربينات رياح"]
    }),
    m("denizcilik", ["maden işçisi", "madenci", "yer altı işçisi"], {
      en: ["miner", "underground mine worker"], de: ["Bergmann"], nl: ["mijnwerker"],
      fr: ["mineur"], es: ["minero"], it: ["minatore"], pl: ["górnik"], ar: ["عامل منجم"]
    })
  ];
})();

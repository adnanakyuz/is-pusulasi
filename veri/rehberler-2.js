// Uygulama rehberleri: orta sermayeli fikirler (20-150 bin TL).
Object.assign(window.REHBERLER, {
  "moto-kurye": {
    araclar: [
      ["Motosiklet", "Az yakan, bakımı kolay, yedek parçası bol bir model; ikinci el alırken ekspertiz yaptır."],
      ["Sertifikalı kask ve koruyucu kıyafet", "Mont, eldiven, dizlik, bot. Bu işte en önemli yatırım."],
      ["Termal teslimat çantası ve telefon tutucu", "Yemek teslimatı için şart."],
      ["Yağmurluk ve kışlık ekipman", "Kış aylarında da çalışabilmek için."],
      ["Powerbank", "Telefonun gün boyu açık kalmalı."],
      ["Gelir-gider defteri", "Yakıt, bakım, vergi, Bağ-Kur; net kazancı görmek için."]
    ],
    yapilis: [
      { baslik: "1. Başlangıç işlemleri", adimlar: [
        "Motosiklet ehliyetini (A sınıfı) ve gerekli belgeleri kontrol et.",
        "Şahıs şirketini aç; çoğu platform 'esnaf kurye' kaydı ister. Bağ-Kur kaydı otomatik başlar.",
        "Motosikletin trafik sigortasını yaptır, ferdi kaza sigortası için teklif al."
      ]},
      { baslik: "2. Platform ve çalışma düzeni", adimlar: [
        "Yemek, market ve kargo platformlarının şartlarını karşılaştır: ödeme günü, kesintiler, bölge, vardiya sistemi.",
        "Yoğun saatleri öğren (öğle ve akşam yemeği, hafta sonu) ve bu saatlerde çalış.",
        "Bölgeni iyi tanı; kestirme yollar ve otopark yerleri zaman kazandırır.",
        "Tek platforma bağlı kalma; yerel esnafla doğrudan anlaşma da yap."
      ]},
      { baslik: "3. Günlük güvenlik ve bakım", adimlar: [
        "Her sabah lastik basıncı, fren, far ve sinyalleri kontrol et.",
        "Zincir yağlaması ve yağ değişimini zamanında yap.",
        "Hız yapma: Birkaç dakika kazanmak için kaza riski almaya değmez; kaza aylarca gelir kaybıdır.",
        "Yorgunken çalışma; mola ver ve su iç."
      ]}
    ],
    fiyat: {
      aciklama: "Platform ücretleri sabittir; senin kontrolünde olan net kazancındır.",
      kalemler: [
        ["Brüt kazanç", "paket başı ücret × paket sayısı + bahşiş"],
        ["Yakıt", "günlük km × yakıt tüketimi"],
        ["Bakım ve lastik", "aylık ortalama"],
        ["Bağ-Kur primi ve vergi", "aylık"],
        ["Telefon ve internet", "aylık"],
        ["Motosiklet taksidi", "varsa"]
      ],
      sonuc: "Net kazanç = brüt − bütün masraflar. Birçok kurye yalnızca brüt kazancı görüp yanılır. Her ayın sonunda bu hesabı yap; düşükse çalışma saatini ve bölgeni değiştir."
    },
    ilkHafta: [
      "1. gün: Ehliyet, sigorta ve motosiklet durumunu kontrol et.",
      "2. gün: Mali müşavirle şahıs şirketi ve Bağ-Kur'u konuş.",
      "3. gün: Koruyucu ekipmanını tamamla.",
      "4-5. gün: 2-3 platforma başvur.",
      "6-7. gün: İlk vardiyalar; gelir-gider defterini ilk günden tut."
    ],
    ornekMesaj: "(Yerel esnafa teklif) Merhaba, [semt]te kendi motosikletimle kuryelik yapıyorum. Paket servisiniz için platform komisyonu ödemeden, saatlik ya da paket başı anlaşmayla çalışabilirim. Yoğun saatlerinizde sabit olarak sizin işletmenize çalışmayı da konuşabiliriz.",
    ipuclari: [
      "Kask ve koruyucu kıyafetten tasarruf etme.",
      "Yağmurda ilk 30 dakika yollar en kaygandır; daha yavaş git.",
      "Bağ-Kur primini aksatma; borç birikince sağlık hizmeti de etkilenebilir."
    ],
    ogrenme: [
      "Platformların kurye eğitim videoları ve güvenlik rehberleri.",
      "Güvenli motosiklet sürüş eğitimleri (motosiklet kulüpleri ve sürücü kursları).",
      "Esnaf kurye için vergi ve Bağ-Kur bilgilendirmeleri (vergi dairesi ve SGK)."
    ]
  },

  "elektronik-tamir": {
    araclar: [
      ["Lehim istasyonu ve sıcak hava tabancası", "Isı ayarlı olmalı."],
      ["Hassas tornavida seti, plastik açma aletleri, vantuz", "Telefonu çizmeden açmak için."],
      ["Büyüteçli lamba ya da mikroskop", "Küçük parçalar için."],
      ["Multimetre ve USB akım ölçer", "Şarj ve güç arızalarını teşhis için."],
      ["Antistatik mat ve bileklik", "Kartlara statik elektrik zararını önler."],
      ["Yedek parça stoku", "En çok satılan modellerin ekran, batarya, şarj soketi."]
    ],
    yapilis: [
      { baslik: "1. Kabul ve teşhis", adimlar: [
        "Cihazı müşterinin önünde incele; çizik, kırık ve çalışan/çalışmayan özellikleri kayda geçir.",
        "IMEI numarasını not et (çalıntı cihaz kontrolü için).",
        "Arızayı teşhis et, fiyat ve süre ver; müşteri onaylamadan işe başlama.",
        "Şifre isteme; gerekirse test için müşterinin yanında açtır."
      ]},
      { baslik: "2. Sık yapılan tamirler", adimlar: [
        "Ekran değişimi: Cihazı ısıtarak ekranı ayır, bağlantıları sök, yeni ekranı takmadan önce test et, sonra yapıştır.",
        "Batarya değişimi: Bataryayı delmeden ve bükmeden çıkar; şişmiş bataryaya özellikle dikkat et.",
        "Şarj soketi: Önce soketin içini temizle (çoğu sorun tozdur), olmazsa soket ya da kart değişimi.",
        "Her tamirden sonra bütün fonksiyonları (dokunmatik, kamera, ses, şarj) test et."
      ]},
      { baslik: "3. Teslim ve garanti", adimlar: [
        "Yapılan işi ve değişen parçayı yazılı belgeye geçir.",
        "Yazılı garanti ver (ör. parça ve işçilik 3 ay).",
        "Eski parçayı müşteri isterse geri ver."
      ]}
    ],
    fiyat: {
      aciklama: "Parça + işçilik.",
      kalemler: [
        ["Parça maliyeti", "orijinal / muadil seçeneğine göre"],
        ["İşçilik", "tamirin zorluğuna ve süresine göre"],
        ["Garanti riski", "geri dönen işlerin payı"],
        ["Dükkân giderleri", "kira, elektrik (dükkân açınca)"]
      ],
      sonuc: "Müşteriye orijinal ve muadil parça seçeneğini fiyat farkıyla birlikte sun; karar onun olsun. Ucuz parça şikâyet ve garanti masrafı demektir."
    },
    ilkHafta: [
      "1-2. gün: Bir kursa ya da tamircinin yanına başla.",
      "3-5. gün: Eski telefonlarda pratik yap (ikinci el bozuk cihazlar ucuza bulunur).",
      "6. gün: Güvenilir parça tedarikçisi araştır.",
      "7. gün: Kabul formu, garanti belgesi ve fiyat listesi şablonlarını hazırla."
    ],
    ornekMesaj: "Merhaba, telefon ve tablet tamiri yapıyorum: ekran, batarya, şarj soketi, hoparlör, kamera. Cihazınızı önünüzde inceleyip fiyatı önceden söylüyorum; onayınız olmadan işlem yapmıyorum. Orijinal ve muadil parça seçenekleri sunuyor, yaptığım işe yazılı garanti veriyorum.",
    ipuclari: [
      "Kişisel verilere bakmak suçtur; cihazın içindekilere dokunma.",
      "IMEI kontrolü yapmadan ikinci el cihaz alma.",
      "Zor bir işte emin değilsen 'yapamam' de; cihazı tamamen bozmak itibarını yok eder."
    ],
    ogrenme: [
      "İŞKUR ve Halk Eğitim'in elektrik-elektronik ve cep telefonu tamiri kursları.",
      "Tamir rehberlerini paylaşan ücretsiz sitelerin adım adım fotoğraflı anlatımları.",
      "Deneyimli bir tamircinin yanında çırak olarak çalışmak."
    ]
  },

  "gunes-paneli-temizlik": {
    araclar: [
      ["Saf su (deiyonize) sistemi", "Panelde kireç izi bırakmamak için."],
      ["Teleskopik yumuşak fırça", "Yerden ya da güvenli bir noktadan erişim için."],
      ["Emniyet kemeri, yaşam hattı, iş ayakkabısı, kask", "Yüksekte çalışmanın zorunlu ekipmanı."],
      ["Termal kamera ya da üretim takip uygulaması (isteğe bağlı)", "Arızalı paneli tespit edip ek hizmet sunmak için."],
      ["Araç", "Ekipman ve su taşımak için."]
    ],
    yapilis: [
      { baslik: "1. Ön hazırlık", adimlar: [
        "Yüksekte çalışma eğitim belgeni al; iş güvenliği kurallarını öğren.",
        "Panel üreticilerinin temizlik talimatlarını oku: sert kimyasal, aşındırıcı ve yüksek basınçlı su genelde yasaktır.",
        "Sahayı keşfet: çatı eğimi, erişim noktası, bağlantı noktaları, su kaynağı."
      ]},
      { baslik: "2. Temizlik", adimlar: [
        "Sabah erken ya da akşamüstü çalış; sıcak panele soğuk su dökmek camı zorlayabilir.",
        "Önce kuru tozu yumuşak fırçayla al.",
        "Saf suyla ve yumuşak fırçayla yukarıdan aşağıya yıka; panelin üzerine basma.",
        "Kuş pisliği gibi inatçı lekeleri yumuşatarak al, kazıma."
      ]},
      { baslik: "3. Rapor", adimlar: [
        "Temizlik öncesi ve sonrası üretim değerini (inverter ekranından) kaydet.",
        "Çatlak, kırık panel, gevşek kablo görürsen fotoğrafla ve müşteriye bildir; elektrik bağlantısına dokunma.",
        "Yıllık temizlik takvimi öner."
      ]}
    ],
    fiyat: {
      aciklama: "Panel sayısı ya da kurulu güç başına fiyat.",
      kalemler: [
        ["Panel sayısı / alan", "temel birim"],
        ["Erişim zorluğu", "yüksek ve eğimli çatı ek ücret"],
        ["Su ve ulaşım", "uzak arazilerde ek"],
        ["Rapor ve termal kontrol", "ek hizmet"]
      ],
      sonuc: "Arazi tipi santraller ve fabrika çatılarıyla yıllık sözleşme (ör. yılda 2-4 temizlik) bu işin asıl gelir kaynağıdır."
    },
    ilkHafta: [
      "1-2. gün: Yüksekte çalışma eğitimine kaydol.",
      "3. gün: Ekipman tedarikçilerinden teklif al.",
      "4. gün: Bölgendeki güneş enerjisi kurulum firmalarını listele.",
      "5-7. gün: Kurulum firmalarıyla görüş, iş birliği teklif et."
    ],
    ornekMesaj: "Merhaba, güneş paneli temizliği ve bakım kontrolü yapıyorum. Tozlu paneller daha az elektrik üretir; temizlik öncesi ve sonrası üretim değerlerini raporluyorum. Panel üreticilerinin talimatlarına uygun saf su ve yumuşak fırça kullanıyorum, yüksekte çalışma belgem var. Yıllık bakım sözleşmesi seçeneğim mevcut.",
    ipuclari: [
      "Panelin üzerine basmak mikro çatlaklara yol açar; asla basma.",
      "Güvenlik ekipmanı olmadan çatıya çıkma.",
      "Rapor, müşteriye temizliğin değerini gösterir; her işte rapor ver."
    ],
    ogrenme: [
      "İş güvenliği kurumlarının yüksekte çalışma eğitimleri.",
      "Panel üreticilerinin bakım ve temizlik kılavuzları.",
      "Güneş enerjisi kurulum firmalarının teknik eğitimleri."
    ]
  },

  "mantar-uretim": {
    araclar: [
      ["Hazır mantar torbaları ya da misel (tohum)", "Başlangıç için hazır aşılanmış torbalar en kolay yoldur."],
      ["Raflar", "Galvaniz ya da plastik, temizlenebilir."],
      ["Nemlendirici ve termometre-nem ölçer", "Mantar nem ve sıcaklığa çok hassastır."],
      ["Havalandırma fanı", "Karbondioksit birikmesin diye."],
      ["Temizlik ve dezenfeksiyon malzemesi", "Küf ve hastalığı önlemek için."]
    ],
    yapilis: [
      { baslik: "1. Üretim yerini hazırlamak", adimlar: [
        "Karanlık ya da az ışıklı, sıcaklığı kontrol edilebilen bir oda ya da depo seç.",
        "Duvar ve zemini temizle, dezenfekte et.",
        "Rafları kur, nemlendirici ve fanı yerleştir."
      ]},
      { baslik: "2. Yetiştirme (istiridye mantarı örneği)", adimlar: [
        "Torbaları raflara yerleştir; ilk dönemde (miselin yayılması) karanlık ve sabit sıcaklık gerekir.",
        "Torba beyazlaşınca torbada küçük kesikler aç; mantar buradan çıkar.",
        "Bu dönemde nemi yüksek tut, hafif ışık ve iyi havalandırma sağla.",
        "Mantar şapkaları açılmadan, kenarları hâlâ hafif içe kıvrıkken hasat et."
      ]},
      { baslik: "3. Hasat ve satış", adimlar: [
        "Hasadı satış gününe göre planla; mantar çabuk bozulur.",
        "Kâğıt ya da havalandırmalı kaplarda, serin taşı.",
        "Restoranlara, manavlara ve yerel pazara düzenli teslim et."
      ]}
    ],
    fiyat: {
      aciklama: "Torba başı verim ve satış fiyatı üzerinden hesapla.",
      kalemler: [
        ["Torba / misel maliyeti", "üretim başına"],
        ["Elektrik", "nemlendirici, fan, ısıtma"],
        ["Ambalaj ve taşıma", "kap ve yol"],
        ["Kayıp", "hastalık ve bozulma payı"],
        ["Satış fiyatı", "toptan (restoran) ve perakende (pazar) ayrı"]
      ],
      sonuc: "İlk birkaç döngüde kayıp yaşamak normaldir; büyük yatırımı ancak birkaç başarılı hasattan ve kesin alıcılar bulduktan sonra yap."
    },
    ilkHafta: [
      "1-2. gün: Kurs ya da eğitim ara (Halk Eğitim, tarım müdürlüğü, ziraat odası).",
      "3. gün: Üretim yerini seç ve temizle.",
      "4. gün: Alıcı ara: 3-4 restoran ve manavla konuş.",
      "5-7. gün: Az sayıda torbayla deneme üretimine başla."
    ],
    ornekMesaj: "Merhaba, [bölge]de taze istiridye mantarı üretiyorum. Hasadı sipariş gününe göre yapıyor, aynı gün taze teslim ediyorum. Restoranlar ve manavlar için haftalık düzenli teslim yapabilirim. Deneme için numune getirebilirim.",
    ipuclari: [
      "Temizlik bu işin her şeyidir; tek bir küf bütün odayı etkileyebilir.",
      "Nem ve sıcaklığı her gün kaydet; sorunun kaynağını ancak böyle bulursun.",
      "'Evde mantar, ayda şu kadar kazanç' diyen pahalı set satıcılarına güvenme."
    ],
    ogrenme: [
      "İl ve ilçe tarım müdürlüklerinin mantarcılık eğitimleri.",
      "Halk Eğitim Merkezlerinin mantar yetiştiriciliği kursları.",
      "Ziraat fakültelerinin ücretsiz yayınları ve videoları."
    ]
  },

  "urun-fotografciligi": {
    araclar: [
      ["Fotoğraf makinesi ve 1-2 lens", "İkinci el aynasız/DSLR ve bir orta lens başlangıç için yeterli."],
      ["Işık seti", "İki sürekli ışık ya da flaş, softbox."],
      ["Tripod", "Ürün ve emlak çekiminde netlik için şart."],
      ["Ürün çekim çadırı ve fonlar", "Beyaz ve renkli fonlar."],
      ["Düzenleme programı", "Ücretsiz ya da abonelikli fotoğraf düzenleme yazılımı."],
      ["Yedekleme diski", "Müşteri dosyalarını kaybetmemek için."]
    ],
    yapilis: [
      { baslik: "1. Ürün çekimi", adimlar: [
        "Ürünü temizle; toz ve parmak izi fotoğrafta büyür.",
        "Beyaz fonda, iki ışıkla gölgesiz çek; tripod kullan.",
        "Her ürün için ön, yan, arka, detay ve kullanım fotoğrafı.",
        "Pazar yerinin istediği boyut ve fon kurallarına göre düzenle."
      ]},
      { baslik: "2. Emlak çekimi", adimlar: [
        "Evi önceden toparlat, ışıkları aç, perdeleri aç.",
        "Geniş açı ve göz hizasından biraz aşağıdan çek; dikey çizgiler düz olsun.",
        "Gün ışığında, odaları köşeden çek.",
        "Kısa bir tanıtım videosu (oda oda yürüyüş) ek hizmet olarak sun."
      ]},
      { baslik: "3. Teslim", adimlar: [
        "Fotoğrafları düzenle, isimlendir, klasörle.",
        "Bulut bağlantısıyla teslim et, kendinde yedeğini tut.",
        "Kullanım haklarını sözleşmede belirt."
      ]}
    ],
    fiyat: {
      aciklama: "Fotoğraf sayısı ya da çekim günü bazlı paket.",
      kalemler: [
        ["Çekim süresi", "yarım gün / tam gün"],
        ["Fotoğraf sayısı", "teslim edilen düzenlenmiş kare"],
        ["Düzenleme süresi", "çekim süresi kadar olabilir"],
        ["Ekipman yıpranma", "pay"],
        ["Yol", "yerinde çekimlerde"]
      ],
      sonuc: "Emlakçılar ve e-ticaret satıcılarıyla aylık paket anlaşmaları düzenli gelir sağlar."
    },
    ilkHafta: [
      "1-2. gün: Ekipmanı tamamla, kendi eşyalarınla ürün çekimi pratiği yap.",
      "3. gün: Bir tanıdığın evinde emlak çekimi dene.",
      "4. gün: Portföy sayfası hazırla.",
      "5-7. gün: Emlak ofisleri ve internetten satış yapan işletmelere portföyünü götür."
    ],
    ornekMesaj: "Merhaba, emlak ilanları ve internet satışları için profesyonel fotoğraf çekiyorum. İyi fotoğraflı ilanlar daha çok görüntülenir ve daha hızlı satılır. İlan başı paket ve aylık anlaşma seçeneklerim var; portföyümü gösterebilirim.",
    ipuclari: [
      "Pahalı ekipmanla değil, ışığı öğrenerek iyi fotoğraf çekilir.",
      "Teslim süresini kısa tut; emlakçı ilanı hemen yayınlamak ister.",
      "Drone kullanacaksan SHGM kaydı ve izinleri olmadan uçurma."
    ],
    ogrenme: [
      "Halk Eğitim Merkezlerinin fotoğrafçılık kursları.",
      "Ücretsiz ışık ve ürün fotoğrafçılığı eğitim videoları.",
      "Düzenleme programlarının kendi eğitim kaynakları."
    ]
  },

  "aricilik": {
    araclar: [
      ["Kovanlar (10-20 adet) ve arılı çerçeveler", "Güvenilir üreticiden, hastalık kontrolü yapılmış."],
      ["Koruyucu kıyafet, eldiven, maske", "Tam koruma."],
      ["Körük ve kovan levyesi", "Kovanı açarken arıyı sakinleştirmek ve çerçeveleri ayırmak için."],
      ["Bal süzme makinesi ve kapak açma bıçağı", "Hasat için."],
      ["Şurup ve onaylı ilaçlar", "Kış beslemesi ve varroa mücadelesi için."]
    ],
    yapilis: [
      { baslik: "1. Kovan yeri", adimlar: [
        "Su kaynağına yakın, rüzgârdan korunaklı, sabah güneşi alan bir yer seç.",
        "Yoğun tarım ilacı kullanılan alanlardan uzak dur.",
        "Kovanları yerden yüksekte ve hafif öne eğimli yerleştir."
      ]},
      { baslik: "2. Mevsimlik iş takvimi", adimlar: [
        "İlkbahar: Kovanları kontrol et, ana arının yumurtlamasını gözle, gerekirse besle, oğul vermeyi önle.",
        "Yaz: Ballık (üst kat) ekle, bal akımını takip et, hasat zamanını belirle.",
        "Sonbahar: Hasat sonrası varroa mücadelesi, kışa yetecek bal ve şurup bırak.",
        "Kış: Kovanları açma, rüzgâr ve rutubete karşı koru."
      ]},
      { baslik: "3. Hasat ve satış", adimlar: [
        "Çerçevelerin büyük kısmı sırlanınca (kapanınca) hasat et.",
        "Kapakları aç, süzme makinesinde süz, dinlendir ve kavanozla.",
        "Balını analiz ettir, etiketle ve analiz belgesini müşteriye göster."
      ]}
    ],
    fiyat: {
      aciklama: "Kovan başı maliyet ve verim üzerinden hesapla.",
      kalemler: [
        ["Kovan ve arı alımı", "bir kerelik yatırım"],
        ["Şurup, ilaç, bakım", "yıllık"],
        ["Gezginci arıcılıkta taşıma", "yakıt ve yer kirası"],
        ["Analiz, kavanoz, etiket", "satış masrafı"],
        ["Kayıp", "kışlama ve hastalık kayıpları"]
      ],
      sonuc: "Analizli ve etiketli bal daha yüksek fiyata satılır. Polen, propolis, arı sütü gibi yan ürünler geliri artırır."
    },
    ilkHafta: [
      "1-2. gün: Arıcılık kursuna kaydol, alerji testi yaptır.",
      "3. gün: Arıcılık Kayıt Sistemi'ne kayıt şartlarını öğren.",
      "4-5. gün: Deneyimli bir arıcıyla tanış, bir sezon yanında çalışmayı konuş.",
      "6-7. gün: Kovan yerini araştır."
    ],
    ornekMesaj: "Merhaba, [bölge]de kendi kovanlarımdan elde ettiğim süzme çiçek balını satıyorum. Balım laboratuvar analizlidir, analiz belgesini paylaşabilirim. Kavanozlarımız etiketli; polen ve propolis de var.",
    ipuclari: [
      "Varroa mücadelesini aksatma; kovan kayıplarının en büyük sebebidir.",
      "Kışın kovanlara yeterli bal bırak; fazla hasat kovanı öldürür.",
      "Şeker şurubuyla beslenen arının balını 'süzme çiçek balı' diye satmak tağşiştir."
    ],
    ogrenme: [
      "İl ve ilçe tarım müdürlüklerinin arıcılık kursları.",
      "Arı yetiştiricileri birliklerinin eğitimleri.",
      "Deneyimli bir arıcının yanında bir sezon çalışmak."
    ]
  },

  "klima-kombi-servis": {
    araclar: [
      ["Vakum pompası ve manifold seti", "Klima montajı ve gaz işlemleri için."],
      ["Kaçak dedektörü ve dijital terazi", "Gaz dolumunda doğru miktar için."],
      ["Kombi bakım seti", "Baca gazı analiz cihazı, temizlik fırçaları, conta seti."],
      ["Matkap, karot ucu, montaj aparatları", "Klima montajı için."],
      ["Yetki belgeleri", "Soğutucu akışkan (F-gaz) belgesi; doğalgaz için gaz şirketinin yetkisi."]
    ],
    yapilis: [
      { baslik: "1. Klima bakımı", adimlar: [
        "Filtreleri çıkar, yıka ve kurut.",
        "İç ünitenin peteklerini ve fan bölümünü uygun temizleyiciyle temizle.",
        "Drenaj hattını kontrol et (su damlatma şikâyetlerinin çoğu buradan).",
        "Dış ünitenin peteklerini temizle, çalışma basıncını ve akımını ölç."
      ]},
      { baslik: "2. Kombi bakımı (yetki gerektiren kısımlar yetkili tarafından)", adimlar: [
        "Kombinin basıncını ve genleşme tankını kontrol et.",
        "Brülör ve eşanjörü temizle.",
        "Baca gazı analizi yap; karbonmonoksit güvenliği hayatidir.",
        "Petekleri havalandır, gerekirse sistem temizliği öner."
      ]},
      { baslik: "3. Müşteriye rapor", adimlar: [
        "Yapılan işlemleri ve ölçüm değerlerini yazılı ver.",
        "Bir sonraki bakım tarihini belirt ve hatırlatma için not al.",
        "Değiştirilmesi gereken parçaları fiyatla birlikte bildir."
      ]}
    ],
    fiyat: {
      aciklama: "Bakım paket fiyatı + parça.",
      kalemler: [
        ["Bakım işçiliği", "klima ve kombi için ayrı paket"],
        ["Montaj/söküm", "ayrı fiyat"],
        ["Gaz dolumu", "kullanılan gaz miktarına göre"],
        ["Parça", "fişli"],
        ["Yol", "uzak bölgelerde"]
      ],
      sonuc: "Sitelere toplu bakım fiyatı ver: aynı gün 20-30 daire bakımı, tek tek müşteriden çok daha kazançlıdır."
    },
    ilkHafta: [
      "1-2. gün: Gerekli belgelerin şartlarını öğren (F-gaz belgesi, gaz şirketi yetkisi).",
      "3-5. gün: Bir servis firmasında çalışmaya başla ya da çalışmayı sürdür.",
      "6-7. gün: Ekipman listesini çıkar, tedarikçilerden fiyat al."
    ],
    ornekMesaj: "Merhaba, klima bakım, montaj ve gaz dolumu ile kombi yıllık bakımı yapıyorum. Ölçüm değerlerini içeren yazılı rapor veriyorum. Siteler için toplu bakım fiyatlarım var; sonbaharda kombi, ilkbaharda klima bakımı kampanyası yapıyorum.",
    ipuclari: [
      "Yetkin olmadığın doğalgaz işine asla girme; bu hayati bir risktir.",
      "Gazı havaya boşaltma; hem çevreye zararlı hem yasaktır.",
      "Garanti süresindeki cihaza müdahale etmeden önce müşteriyi uyar."
    ],
    ogrenme: [
      "İŞKUR ve Halk Eğitim'in iklimlendirme ve doğalgaz tesisatçılığı kursları.",
      "Mesleki Eğitim Merkezlerinde ustalık belgesi.",
      "Cihaz üreticilerinin servis eğitimleri."
    ]
  },

  "etkinlik-kiralama": {
    araclar: [
      ["Masa ve sandalye seti", "Katlanır ve istiflenebilir modeller taşımayı kolaylaştırır."],
      ["Çadır ve tente", "Açık hava etkinlikleri için; rüzgâra dayanıklı sabitleme ekipmanıyla."],
      ["Ses sistemi ve mikrofon", "Küçük ve orta etkinlikler için."],
      ["Isıtıcı, aydınlatma, uzatma kabloları", "Mevsime göre."],
      ["Örtüler ve sandalye kılıfları", "Görünüşü değiştiren ucuz ekler."],
      ["Depo ve taşıma aracı", "Kendi aracın ya da kiralık kamyonet."]
    ],
    yapilis: [
      { baslik: "1. Sipariş alma", adimlar: [
        "Etkinlik türünü, tarihini, yerini, kişi sayısını ve zemini öğren.",
        "Yer keşfi yap; elektrik kaynağı ve kurulum alanını gör.",
        "Teklif ver, kapora al, sözleşme imzala (hasar ve iptal kuralları dahil)."
      ]},
      { baslik: "2. Kurulum günü", adimlar: [
        "Ekipmanı kontrol listesiyle yükle, eksiksiz say.",
        "Önce çadır, sonra masa-sandalye, en son dekor ve ses sistemi.",
        "Elektrik bağlantılarını yetkili kişiye yaptır, kabloları sabitle.",
        "Müşteriyle kurulumu kontrol et."
      ]},
      { baslik: "3. Toplama", adimlar: [
        "Etkinlik sonrası ekipmanı say, hasarları fotoğrafla.",
        "Temizle, kurut ve depoya düzenli yerleştir.",
        "Hasar varsa sözleşmeye göre müşteriye bildir."
      ]}
    ],
    fiyat: {
      aciklama: "Ürün başı kiralama + kurulum + taşıma.",
      kalemler: [
        ["Ürün kirası", "adet × gün"],
        ["Taşıma", "mesafeye göre"],
        ["Kurulum ve toplama işçiliği", "ekip × saat"],
        ["Temizlik", "örtü ve kılıf yıkama"],
        ["Depozito", "hasara karşı, iade edilir"]
      ],
      sonuc: "Düğün salonları, aşçılar ve organizatörlerle iş birliği, sezon boyu düzenli iş sağlar."
    },
    ilkHafta: [
      "1. gün: Bölgendeki talebi araştır (kır düğünü, mevlit, okul etkinliği).",
      "2. gün: En çok istenen ekipmanın listesini çıkar, ikinci el seçenekleri araştır.",
      "3. gün: Depo ve taşıma çözümünü bul.",
      "4. gün: Sözleşme ve fiyat listesini hazırla.",
      "5-7. gün: Organizatörler, aşçılar ve muhtarlıklarla tanış."
    ],
    ornekMesaj: "Merhaba, düğün, nişan, mevlit ve açık hava etkinlikleri için masa, sandalye, çadır, ses sistemi ve ısıtıcı kiralıyorum. Kurulum ve toplama ekibimizle yapılıyor. Etkinliğinizin tarihi, yeri ve kişi sayısını yazarsanız ücretsiz teklif hazırlayayım.",
    ipuclari: [
      "Rüzgâra karşı çadır sabitlemesini asla ihmal etme; kaza en çok burada olur.",
      "Her teslimde ekipmanı say; kayıp en büyük gizli masraftır.",
      "Kış için kapalı alan etkinlikleri ve ısıtıcı kiralama ile geliri dengele."
    ],
    ogrenme: [
      "Organizasyon firmalarında birkaç etkinlik çalışarak öğrenmek.",
      "Çadır ve ekipman üreticilerinin kurulum talimatları.",
      "İş sağlığı ve güvenliği temel eğitimleri."
    ]
  },

  "3d-yazici": {
    araclar: [
      ["3D yazıcı", "Güvenilir, yaygın, yedek parçası bulunan bir model."],
      ["Filamentler", "PLA (kolay), PETG (dayanıklı), TPU (esnek); ihtiyaca göre."],
      ["Dijital kumpas", "Yedek parça ölçmek için şart."],
      ["Bilgisayar ve ücretsiz çizim/dilimleme programları", "3D çizim ve yazıcıya hazırlama."],
      ["Zımpara, maket bıçağı, yapıştırıcı", "Baskı sonrası temizlik."]
    ],
    yapilis: [
      { baslik: "1. Yedek parça üretimi", adimlar: [
        "Kırık parçayı müşteriden al, kumpasla bütün ölçüleri ölç.",
        "Ücretsiz bir 3D çizim programında parçayı çiz.",
        "Önce düşük doluluk oranıyla deneme baskısı al, yerine takarak kontrol et.",
        "Ölçüleri düzelt, son baskıyı uygun malzemeyle al (ısıya maruz kalacaksa PETG/ABS)."
      ]},
      { baslik: "2. Baskı ayarları", adimlar: [
        "Tablayı her baskı öncesi seviyele ve temizle.",
        "Parçanın gücüne göre doluluk oranı ve duvar kalınlığı seç.",
        "Parçayı en dayanıklı olacağı yönde yerleştir (katman yönü dayanımı etkiler)."
      ]},
      { baslik: "3. Teslim", adimlar: [
        "Destek yapılarını temizle, gerekirse zımparala.",
        "Parçanın çizim dosyasını sakla; aynı müşteri tekrar isteyebilir.",
        "Güvenlik açısından kritik parça (fren, kask, çocuk koltuğu) asla basma."
      ]}
    ],
    fiyat: {
      aciklama: "Malzeme + makine saati + çizim emeği.",
      kalemler: [
        ["Filament", "gram × gram fiyatı"],
        ["Makine saati", "elektrik ve yıpranma payı"],
        ["Çizim süresi", "yeni parça çizimi en pahalı kısımdır"],
        ["Deneme baskıları", "ilk baskılar fiyata dahil edilmeli"]
      ],
      sonuc: "Çizim emeğini mutlaka ücretlendir; baskının kendisi ucuzdur, değer ölçü ve çizimdedir."
    },
    ilkHafta: [
      "1-2. gün: Ücretsiz bir çizim programını öğren, basit nesneler çiz.",
      "3-4. gün: Hazır modellerle yazıcıyı tanı, ayarları öğren.",
      "5. gün: Evdeki kırık bir parçayı ölçüp yeniden üret.",
      "6-7. gün: Beyaz eşya ve oto tamircilerine hizmetini tanıt."
    ],
    ornekMesaj: "Merhaba, artık satılmayan ya da bulunamayan plastik yedek parçaları (beyaz eşya düğmesi, kapak, klips, tutucu) ölçüp 3D yazıcıyla yeniden üretiyorum. Kırık parçayı getirmeniz yeterli. Ayrıca kişiye özel hediyelik, maket ve tabela harfi de yapıyorum.",
    ipuclari: [
      "Ölçüyü iki kez al; plastik baskıda küçük sapmalar parçanın oturmasını bozar.",
      "Telifli figürleri ve marka logolarını basıp satma.",
      "Yazıcıyı gözetimsiz uzun süre bırakma; yangın riskine karşı duman dedektörü kullan."
    ],
    ogrenme: [
      "3D çizim programlarının ücretsiz eğitimleri.",
      "Yazıcı üreticilerinin kullanım ve ayar rehberleri.",
      "Belediyelerin ve üniversitelerin açık atölyeleri (maker atölyeleri)."
    ]
  },

  "ekipman-kiralama": {
    araclar: [
      ["Başlangıç ekipmanları", "Kırıcı, karot makinesi, beton mikseri, jeneratör, iskele seti, taşlama gibi en çok istenenler."],
      ["Depo", "Kuru ve güvenli küçük bir depo."],
      ["Taşıma aracı", "Ekipmanı teslim etmek için."],
      ["Kiralama sözleşmesi ve teslim formu", "Kimlik, depozito, hasar kuralları."],
      ["Bakım malzemeleri", "Yağ, filtre, uç ve yedek parçalar."]
    ],
    yapilis: [
      { baslik: "1. Kiralama süreci", adimlar: [
        "Müşterinin kimliğini al, sözleşme imzalat, depozito al.",
        "Ekipmanı müşterinin önünde çalıştır, kullanımını göster.",
        "Teslim formuna ekipmanın durumunu ve aksesuarlarını yaz, fotoğrafla."
      ]},
      { baslik: "2. Geri alma", adimlar: [
        "Ekipmanı müşterinin önünde kontrol et, çalıştır.",
        "Hasar ya da eksik varsa forma göre depozitodan kes.",
        "Depozitoyu iade et, teslim formunu kapat."
      ]},
      { baslik: "3. Bakım", adimlar: [
        "Her dönüşte temizle, yağ ve filtre kontrolü yap.",
        "Aşınan uçları değiştir.",
        "Bakım defteri tut; hangi ekipman ne kadar kiralandı, ne kadar bakım gerektirdi."
      ]}
    ],
    fiyat: {
      aciklama: "Günlük ve haftalık kira.",
      kalemler: [
        ["Ekipman fiyatı", "geri dönüş hesabı için"],
        ["Günlük kira", "rakip fiyatları ve talebe göre"],
        ["Bakım ve uç masrafı", "kiralama başına"],
        ["Teslim ücreti", "kapıya teslimde"],
        ["Depozito", "ekipman değerinin bir kısmı"]
      ],
      sonuc: "Haftalık kiralamaya indirim yap; ekipmanın boşta kaldığı gün en büyük kayıptır. En çok kiralananları çoğalt."
    },
    ilkHafta: [
      "1-2. gün: Bölgendeki ustalara en çok neye ihtiyaç duyduklarını sor.",
      "3. gün: Depo ve sigorta seçeneklerini araştır.",
      "4. gün: Sözleşme ve teslim formunu hazırla.",
      "5-7. gün: İlk 3-4 ekipmanı al; hırdavatçılar ve yapı marketlerle yönlendirme anlaşması yap."
    ],
    ornekMesaj: "Merhaba, ustalara ve tadilat yapanlara günlük ve haftalık inşaat ekipmanı kiralıyorum: kırıcı, karot, beton mikseri, jeneratör, iskele. Ekipmanlarım bakımlı; teslimde kullanımını gösteriyorum. Kapıya teslim seçeneği var.",
    ipuclari: [
      "Depozitosuz ve kimliksiz kiralama yapma.",
      "Bakımsız ekipman kazaya sebep olur; sorumluluk sana döner.",
      "Hırsızlığa karşı sigorta yaptır ve ekipmanlarını işaretle."
    ],
    ogrenme: [
      "Ekipman üreticilerinin kullanım ve bakım kılavuzları.",
      "İş sağlığı ve güvenliği temel eğitimleri.",
      "Bölgedeki kiralama firmalarının çalışma düzenini gözlemlemek."
    ]
  }
});

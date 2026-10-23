// Uygulama rehberleri: yatırım gerektiren fikirler.
Object.assign(window.REHBERLER, {
  "is-makinesi-hizmet": {
    araclar: [
      ["İş makinesi", "Bölgede en çok talep gören tip: mini ekskavatör, beko loder, ekskavatör, silindir ya da finisher. İkinci el alırken bağımsız ekspertiz şart."],
      ["Taşıma çözümü", "Lowbed çekici ile anlaşma ya da küçük makine için römork."],
      ["Ataşmanlar", "Farklı kepçe genişlikleri, kırıcı (hidrolik çekiç), burgu; iş çeşidini artırır."],
      ["Belgeler", "Operatör belgesi, G sınıfı ehliyet (gerekiyorsa), makine tescili, sigorta, şirket kaydı."],
      ["Bakım seti ve yedek parça", "Filtreler, yağlar, gres tabancası, sık değişen parçalar."],
      ["İş takip defteri", "Çalışılan gün/saat, yakıt, müşteri, tahsilat."]
    ],
    yapilis: [
      { baslik: "1. Makineyi almadan önce", adimlar: [
        "Bölgendeki müteahhit, hafriyatçı ve belediyelerle konuş: hangi makine boşta kalmıyor, hangi makine için iş bulunamıyor?",
        "En az 2-3 düzenli iş bağlantısını önceden sağla; bir müteahhitle yazılı ön anlaşma en iyisidir.",
        "Aylık sabit giderini hesapla: taksit + sigorta + bakım payı + Bağ-Kur + muhasebe. Ayda kaç gün çalışman gerektiğini bul.",
        "İkinci el makinede çalışma saatine, bakım kayıtlarına, hidrolik kaçaklara, şaseye ve paletlere/lastiklere bak; bağımsız ustaya ekspertiz yaptır.",
        "Leasing ve banka kredisi tekliflerini karşılaştır; peşinatın tamamını yatırıp nakitsiz kalma."
      ]},
      { baslik: "2. İş alma ve sözleşme", adimlar: [
        "Saatlik, günlük ya da götürü (iş bitimi) fiyat ver; operatörlü kiralama olduğunu belirt.",
        "Yakıtın, taşımanın (lowbed) ve operatör yemeğinin/konaklamasının kime ait olduğunu yazılı netleştir.",
        "Ödeme planını yaz: avans, haftalık/aylık hakediş, gecikme halinde iş durdurma hakkı.",
        "Çalışılan saatleri her gün müteahhidin şantiye şefine imzalat (puantaj)."
      ]},
      { baslik: "3. Günlük çalışma", adimlar: [
        "Mesai öncesi kontrol: yağ, su, hidrolik seviye, gresleme, lastik/palet, ışıklar.",
        "Şantiyede iş güvenliği kurallarına uy; yer altı hatları (elektrik, doğalgaz, su) için şantiye şefinden plan iste.",
        "Makineyi akşam güvenli yere park et, kilitle; hırsızlık ve vandalizme karşı önlem al.",
        "İş takip defterine saatleri, yakıtı ve notları yaz."
      ]},
      { baslik: "4. Tahsilat ve büyüme", adimlar: [
        "Faturayı zamanında kes, hakedişi takip et; gecikmede nazik ama kararlı ol.",
        "Tek müşteriye bağlı kalma; belediye, özel şantiyeler ve tarım işlerini çeşitlendir.",
        "İş artarsa ikinci makineyi ancak birincinin borcu kontrol altındayken al; ikinci makineye operatör bulmak ayrı bir iştir."
      ]}
    ],
    fiyat: {
      aciklama: "Bölgendeki saatlik/günlük operatörlü kiralama fiyatlarını öğren, sonra kendi maliyetinle karşılaştır.",
      kalemler: [
        ["Aylık sabit gider", "taksit + sigorta + muhasebe + Bağ-Kur + bakım payı"],
        ["Çalışma günü", "aylık beklenen çalışma günü (yağmur ve boş günler düşülerek)"],
        ["Günlük yakıt", "makinenin saatlik tüketimi × çalışma saati (yakıt sana aitse)"],
        ["Taşıma", "lowbed ücreti; kısa işlerde fiyata eklenir"],
        ["Kendi emeğin", "operatör olarak senin günlük ücretin"],
        ["Kâr payı", "makineyi yenilemek ve kötü ayları karşılamak için"]
      ],
      sonuc: "En düşük günlük fiyat = (aylık sabit gider ÷ çalışma günü) + günlük yakıt + kendi günlük ücretin + kâr payı. Bölge fiyatı bunun altındaysa ya maliyetini düşür ya da o makineyi alma."
    },
    ilkHafta: [
      "1-2. gün: Müteahhit, hafriyatçı ve belediyelerle görüş; makine ihtiyacını ve fiyatlarını not et.",
      "3. gün: Seçtiğin makine tipinin ikinci el ve sıfır fiyatlarını, leasing tekliflerini topla.",
      "4. gün: Mali müşavirle şirket türünü, vergi ve Bağ-Kur'u konuş; aylık gider hesabını birlikte yap.",
      "5. gün: Operatör belgelerini ve ehliyetini güncelle.",
      "6-7. gün: En az 2 müteahhitten yazılı ön anlaşma iste; ancak ondan sonra makine almaya karar ver."
    ],
    ornekMesaj: "Merhaba, [kaç yıl]lık deneyimli operatörüm; kendi [makine tipi]imle operatörlü kiralama yapıyorum. Hafriyat, kanal, altyapı, arazi düzenleme ve [uzmanlık] işlerinde saatlik, günlük ya da götürü çalışıyorum. Makinem bakımlı ve sigortalı; günlük puantajla şeffaf çalışırım. Şantiyenizin ihtiyacını konuşalım.",
    ipuclari: [
      "Makinenin en büyük düşmanı boş gündür; iş takvimini 2-3 hafta önceden doldurmaya çalış.",
      "Avanssız ve yazısız uzun işe girme; tahsilat sorunu bu sektörün bir numaralı batma sebebidir.",
      "Bakımı erteleme: Küçük bir kaçak büyük bir hidrolik arızasına, o da haftalarca işsizliğe dönüşür.",
      "Kendi makinen boşken başka makine sahiplerine operatör olarak çalışmak, gelir boşluklarını kapatır."
    ],
    ogrenme: [
      "Mesleki Eğitim Merkezlerinin ve yetkili kurumların iş makinesi operatörlüğü belge programları.",
      "Makine üreticilerinin bakım ve verimli kullanım eğitimleri.",
      "KOSGEB'in girişimcilik ve makine-teçhizat destek programlarının güncel çağrıları."
    ]
  },

  "camasirhane": {
    araclar: [
      ["Profesyonel çamaşır ve kurutma makineleri", "Endüstriyel, jetonlu/kartlı ödeme sistemli."],
      ["Ödeme sistemi", "Jeton, kart ya da uygulama ile ödeme."],
      ["Dükkân", "Su, elektrik/doğalgaz altyapısı uygun, havalandırması iyi."],
      ["Bekleme alanı", "Oturma yeri, katlama masası, gerekirse kahve makinesi."],
      ["Güvenlik kamerası ve aydınlatma", "Çoğu zaman personelsiz çalıştığı için."]
    ],
    yapilis: [
      { baslik: "1. Kurulum", adimlar: [
        "Konumu öğrenci yurtları, küçük kiralık daireler ve apart otellerin yakınında seç; bir hafta yaya sayımı yap.",
        "Belediyeden ruhsat şartlarını, atık su ve elektrik projesi gerekliliklerini öğren.",
        "Makine tedarikçilerinden teklif al; kurulum, garanti ve servis süresini sor.",
        "Makine sayısını talebe göre başlat; yer bırak, sonra ekle."
      ]},
      { baslik: "2. Günlük işletme", adimlar: [
        "Makinelerin temizliği ve filtre kontrolü her gün yapılmalı.",
        "Arızalı makineye hemen 'arızalı' yaz ve servis çağır; müşteri mağdur olmasın.",
        "Kullanım talimatlarını büyük ve resimli as.",
        "Gelir ve tüketimi (su, elektrik, deterjan) makine başına takip et."
      ]},
      { baslik: "3. Ek gelirler", adimlar: [
        "Yıkama-katlama hizmeti: Müşteri çamaşırı bırakır, sen yıkayıp katlarsın.",
        "Otel, pansiyon, kuaför ve spor salonlarına toplu yıkama.",
        "Kuru temizleme teslim noktası olmak için bir kuru temizlemeciyle anlaş."
      ]}
    ],
    fiyat: {
      aciklama: "Makine başı yıkama fiyatı enerji ve suya göre belirlenir.",
      kalemler: [
        ["Su ve enerji", "makine başına bir yıkama/kurutma döngüsünün maliyeti"],
        ["Deterjan", "dahil ise"],
        ["Kira ve sabit giderler", "aylık, makine başına bölünür"],
        ["Bakım ve servis", "aylık ortalama"],
        ["Makine geri dönüş payı", "yatırım ÷ beklenen kullanım ömrü"]
      ],
      sonuc: "Enerji fiyatları değiştikçe fiyatı güncelle. Doluluk oranını saat saat izle; boş saatlerde indirim kampanyası yap."
    },
    ilkHafta: [
      "1-3. gün: Konum araştırması ve yaya sayımı.",
      "4. gün: Belediyeye ruhsat şartlarını sor.",
      "5. gün: 2-3 makine tedarikçisinden ve varsa bayilik veren firmalardan teklif al.",
      "6-7. gün: Mevcut işletmecilerle konuş, gerçek doluluk ve gider bilgisi al; iş planını yaz."
    ],
    ornekMesaj: "(Dükkân tanıtımı) Self-servis çamaşırhane: Çamaşırını kendin yıka, kurut, yaklaşık 1 saatte bitir. Kartla ödeme, haftanın her günü açık. Vaktin yoksa bırak, biz yıkayıp katlayalım. Otel ve işletmeler için toplu yıkama fiyatlarımız var.",
    ipuclari: [
      "Konum bu işin kaderidir; kira ucuz diye kötü konum seçme.",
      "Arızalı makineyi geç tamir ettirmek müşteri kaybettirir; servis anlaşmasını önceden yap.",
      "'Garantili kazanç' vaat eden bayilik tekliflerini mevcut bayilerle konuşmadan imzalama."
    ],
    ogrenme: [
      "Makine üreticilerinin işletme ve bakım eğitimleri.",
      "Belediyenin işyeri ruhsatı ve çevre mevzuatı bilgilendirmeleri.",
      "KOSGEB ve İŞKUR girişimcilik eğitimleri (iş planı hazırlamak için)."
    ]
  },

  "kahve-dukkani": {
    araclar: [
      ["Espresso makinesi ve değirmen", "Kahvenin kalitesini en çok değirmen belirler."],
      ["Buzdolabı, buz makinesi, su arıtma", "Su, kahvenin büyük kısmıdır; arıtma şart."],
      ["Tezgâh ve ekipman", "Pitcher, terazi, tamper, bardaklar, servis malzemeleri."],
      ["Kasa/POS sistemi", "Satış takibi için."],
      ["Ruhsat ve belgeler", "İşyeri ruhsatı, gıda işletme kayıt belgesi, hijyen eğitimi."]
    ],
    yapilis: [
      { baslik: "1. Açılış öncesi", adimlar: [
        "En az birkaç ay bir kahve dükkânında çalış ya da barista eğitimi al.",
        "Konum için bir hafta boyunca sabah, öğle ve akşam yaya sayımı yap.",
        "Kira sözleşmesini uzun vadeli ve artış oranı belli yap.",
        "Menüyü sade tut: 8-12 içecek ve birkaç atıştırmalık."
      ]},
      { baslik: "2. Kahve hazırlama standardı", adimlar: [
        "Her içeceğin tarifini gram ve saniye ile yaz (ör. espresso için kahve gramajı, çıkan miktar ve süre).",
        "Değirmen ayarını her sabah test et; kahve çekirdeği ve hava değiştikçe ayar değişir.",
        "Süt köpürtmeyi standartlaştır; bütün çalışanlar aynı kaliteyi tutturmalı.",
        "Makineyi her gün temizle; haftalık kireç ve derin temizlik yap."
      ]},
      { baslik: "3. İşletme", adimlar: [
        "Sabah saatlerinde hızı artır: önceden hazırlık, hızlı kasa.",
        "Sadakat kartı ya da uygulama (ör. 10 kahveye 1 hediye) kur.",
        "Günlük satış, maliyet ve fire kaydını tut; haftalık hangi ürünün kazandırdığına bak."
      ]}
    ],
    fiyat: {
      aciklama: "Bir fincan kahvenin gerçek maliyetini çıkar.",
      kalemler: [
        ["Kahve çekirdeği", "fincan başına gram × fiyat"],
        ["Süt ve şurup", "içeceğe göre"],
        ["Bardak, kapak, karıştırıcı", "al-götürde"],
        ["Kira, personel, enerji payı", "aylık giderler ÷ aylık beklenen fincan sayısı"],
        ["Vergi ve kâr", "son ekleme"]
      ],
      sonuc: "Fiyatı rakibe göre değil, bu maliyete göre koy. Aylık gider ÷ fincan başı kâr = başa baş için gereken fincan sayısı; bunu günlük hedefe çevir ve her gün takip et."
    },
    ilkHafta: [
      "1-2. gün: Barista eğitimi ya da bir dükkânda çalışma imkânı ara.",
      "3-4. gün: Aday konumlarda yaya sayımı yap.",
      "5. gün: Belediye ve tarım müdürlüğüne ruhsat ve kayıt şartlarını sor.",
      "6-7. gün: Ekipman tekliflerini topla, maliyet ve başa baş hesabını yap."
    ],
    ornekMesaj: "(Açılış duyurusu) [Dükkân adı] [tarih]te açılıyor! [Konum]da, sabah [saat]ten itibaren taze çekilmiş kahve. Açılış haftasında ikinci kahve bizden. Sadakat kartımızla her 10 kahvenin 1'i ücretsiz.",
    ipuclari: [
      "Dekorasyona değil, makine, değirmen ve konuma yatırım yap.",
      "Açılıştan önce en az 6 aylık gideri karşılayacak nakdin olsun.",
      "Müdavimlerin adını ve içeceğini hatırla; küçük dükkânın büyük zinciri yenme yolu budur."
    ],
    ogrenme: [
      "Barista eğitim programları ve kahve kavurucularının ücretsiz atölyeleri.",
      "Halk Eğitim ve İŞKUR'un barista ve servis kursları.",
      "Tarım ve Orman Bakanlığı'nın gıda işletmeleri hijyen kuralları."
    ]
  },

  "hafriyat-kamyonu": {
    araclar: [
      ["Damperli kamyon", "Bölgedeki işlere uygun tonaj; ikinci elde damper, şase ve şanzıman ekspertizi."],
      ["Yetki belgeleri", "Ticari taşımacılık yetki belgesi, hafriyat taşıma izni (belediye), SRC ve psikoteknik belgeleri."],
      ["Sigortalar", "Trafik, kasko ve gerekirse yük sigortası."],
      ["Takip cihazı / araç takip sistemi", "Sefer ve yakıt takibi için."],
      ["Sefer defteri", "Her sefer: tarih, yükleme yeri, döküm yeri, ton, müşteri, irsaliye."]
    ],
    yapilis: [
      { baslik: "1. Almadan önce", adimlar: [
        "Bölgendeki büyük projeleri ve hafriyat firmalarını araştır; düzenli iş bağlantısı bul.",
        "Aylık sabit gideri hesapla (taksit, sigorta, muayene, vergi, Bağ-Kur, muhasebe) ve ayda kaç sefere ihtiyacın olduğunu bul.",
        "İkinci el kamyonda damper silindiri, şase çatlakları, lastikler ve motor için bağımsız ekspertiz yaptır."
      ]},
      { baslik: "2. Sefer düzeni", adimlar: [
        "Yükleme yerinde aşırı yüklemeye izin verme; tonaj cezaları ve araç hasarı yüksek maliyetlidir.",
        "Kasayı branda ile ört; yola malzeme dökülmesi cezalıdır.",
        "Belediyenin izin verdiği döküm sahasına dök, döküm fişini al ve sakla.",
        "Her seferi deftere ve irsaliyeye işle."
      ]},
      { baslik: "3. Bakım ve tahsilat", adimlar: [
        "Günlük kontrol: lastik, yağ, fren, damper sistemi.",
        "Sefer sayısını müşteriyle her hafta mutabakat yap.",
        "Haftalık ya da on beş günlük ödeme iste; aylarca biriktirme."
      ]}
    ],
    fiyat: {
      aciklama: "Sefer başı ya da günlük fiyat.",
      kalemler: [
        ["Aylık sabit gider ÷ aylık sefer", "sefer başı sabit maliyet payı"],
        ["Yakıt", "mesafe × tüketim"],
        ["Lastik ve bakım", "km başı pay"],
        ["Döküm sahası ücreti", "varsa"],
        ["Şoför ücreti", "kendin değilsen"],
        ["Kâr payı", "yenileme ve kötü aylar için"]
      ],
      sonuc: "Yakıt fiyatı değiştikçe sefer fiyatını güncelleme maddesini sözleşmeye koy. Uzun mesafeli düşük fiyatlı işler kamyonu yıpratır, kazandırmaz."
    },
    ilkHafta: [
      "1-2. gün: Hafriyat firmaları ve müteahhitlerle görüş, sefer fiyatlarını öğren.",
      "3. gün: Yetki belgeleri ve belediye izinlerinin şartlarını öğren.",
      "4. gün: Mali müşavirle maliyet ve vergi hesabını yap.",
      "5-7. gün: Kamyon seçeneklerini araştır, yazılı ön iş anlaşması olmadan alma."
    ],
    ornekMesaj: "Merhaba, kendi damperli kamyonumla hafriyat ve malzeme (kum, çakıl, mıcır) taşımacılığı yapıyorum. Yetki belgelerim ve belediye iznim tam; döküm fişleriyle şeffaf çalışıyorum. Sefer ya da günlük anlaşma yapabiliriz.",
    ipuclari: [
      "Tahsilatı haftalık yap; hafriyatta en sık batma sebebi ödenmeyen seferlerdir.",
      "Aşırı yükleme kısa vadede kazandırır gibi görünür, uzun vadede kamyonu ve cebini bitirir.",
      "Yağmurlu ve inşaatın durduğu dönemler için nakit yedeği ayır."
    ],
    ogrenme: [
      "Ulaştırma Bakanlığı'nın yetki belgesi bilgilendirmeleri.",
      "SRC ve güvenli sürüş eğitimleri.",
      "Belediyelerin hafriyat yönetmelikleri."
    ]
  },

  "hali-yikama-fabrikasi": {
    araclar: [
      ["Halı yıkama makinesi", "Otomatik ya da yarı otomatik yıkama ünitesi."],
      ["Santrifüj (sıkma) makinesi", "Kurutmayı hızlandırır."],
      ["Kurutma odası", "Isıtma ve havalandırma sistemiyle."],
      ["Toz alma makinesi", "Yıkama öncesi toz alma kaliteyi artırır."],
      ["Ambalaj makinesi ve poşetler", "Teslim için."],
      ["Servis aracı", "Toplama ve teslim için."]
    ],
    yapilis: [
      { baslik: "1. Teslim alma", adimlar: [
        "Halının ölçüsünü al, kusurlarını (yırtık, leke, solma) müşterinin önünde fotoğrafla ve forma yaz.",
        "Halıya numaralı etiket tak.",
        "Teslim tarihini ve fiyatı (metrekare) yazılı ver."
      ]},
      { baslik: "2. Yıkama süreci", adimlar: [
        "Toz alma: Halının tozunu makineyle iyice çıkar.",
        "Boya testi: Görünmeyen bir köşede renk akması kontrolü yap; akıyorsa özel yıkama uygula.",
        "Lekelere ön işlem uygula.",
        "Makinede yıka, bol suyla durula (şampuan kalıntısı kirlenmeyi hızlandırır).",
        "Santrifüjde sık, kurutma odasında tamamen kurut; nemli halı koku yapar."
      ]},
      { baslik: "3. Teslim", adimlar: [
        "Halıyı fırçala, saçaklarını düzelt, ambalajla.",
        "Etiket numarasıyla teslim et; müşteriye kontrol ettir.",
        "Kokusuz, tamamen kuru teslim bu işin kalite ölçüsüdür."
      ]}
    ],
    fiyat: {
      aciklama: "Metrekare fiyatı.",
      kalemler: [
        ["Su, enerji ve kimyasal", "metrekare başına"],
        ["Personel", "yıkama ve servis ekibi"],
        ["Kira ve sabit giderler", "aylık ÷ aylık metrekare"],
        ["Servis aracı", "yakıt ve bakım"],
        ["Hasar payı", "boya akması gibi riskler için"]
      ],
      sonuc: "Yün, ipek ve el dokuma halılar için ayrı (yüksek) fiyat koy. Bayram öncesi yoğunluk için kapasite planla ve teslim tarihini gerçekçi ver."
    },
    ilkHafta: [
      "1-2. gün: Bölgedeki rakipleri, fiyatları ve teslim sürelerini incele.",
      "3. gün: Belediyeye ruhsat ve atık su şartlarını sor.",
      "4-5. gün: Makine tedarikçilerinden teklif al, tesis ziyareti yap.",
      "6-7. gün: Bir halı yıkama tesisinde birkaç gün çalışarak süreci öğren."
    ],
    ornekMesaj: "Merhaba, halılarınızı evinizden alıp tesisimizde yıkıyor, tamamen kurutup ambalajlı teslim ediyoruz. Teslim almada halının durumunu fotoğrafla kayıt altına alıyoruz. Yün ve el dokuma halılar için özel yıkama yapıyoruz. Koltuk yıkamayı da yerinde yapıyoruz.",
    ipuclari: [
      "Boya testi yapmadan yıkama; boya akması en pahalı hatadır.",
      "Kurutma kapasitesi darboğazdır; makine yerine önce kurutmayı büyüt.",
      "Teslim tarihine uymamak bu sektörde en çok şikâyet edilen şeydir."
    ],
    ogrenme: [
      "Makine tedarikçilerinin işletme eğitimleri.",
      "Mevcut bir tesiste çalışarak öğrenmek.",
      "KOSGEB ve İŞKUR girişimcilik eğitimleri."
    ]
  },

  "topraksiz-tarim": {
    araclar: [
      ["Topraksız tarım sistemi", "Yeşillik için kanal (NFT) sistemleri, sebze için damla sulamalı torba/saksı sistemleri."],
      ["Sera ya da kapalı alan", "İklim kontrolü yapılabilen."],
      ["Besin çözeltisi ve ölçüm cihazları", "pH ve EC ölçer şart."],
      ["Pompa, tank, zamanlayıcı", "Sulama ve besin dolaşımı."],
      ["Aydınlatma (kapalı alanda)", "Bitki yetiştirme lambaları."],
      ["Tohum/fide ve yetiştirme ortamı", "Taş yünü, perlit, hindistan cevizi lifi."]
    ],
    yapilis: [
      { baslik: "1. Deneme sistemi", adimlar: [
        "Küçük bir deneme sistemi kur (marul, roka, fesleğen gibi hızlı yeşilliklerle).",
        "pH ve EC değerlerini her gün ölç ve kaydet.",
        "Bir sezon boyunca büyüme süresini, verimi ve sorunları not et."
      ]},
      { baslik: "2. Günlük bakım", adimlar: [
        "Besin çözeltisini düzenli kontrol et ve tazele.",
        "Pompa ve zamanlayıcıların çalıştığını her gün kontrol et; pompa durursa bitkiler hızla zarar görür.",
        "Hastalık ve zararlı belirtilerini erken fark et, hasta bitkiyi hemen ayır.",
        "Sera sıcaklığını ve nemini takip et."
      ]},
      { baslik: "3. Hasat ve satış", adimlar: [
        "Alıcıları üretimden önce bul: restoran, market, manav, otel.",
        "Hasadı teslim gününe göre planla; yeşillikler çok çabuk solar.",
        "Kökleriyle satmak (canlı marul gibi) raf ömrünü uzatır ve fark yaratır."
      ]}
    ],
    fiyat: {
      aciklama: "Üretim maliyeti ve alıcı fiyatı.",
      kalemler: [
        ["Kurulum yatırımı", "yıllara bölünür"],
        ["Enerji", "pompa, aydınlatma, ısıtma"],
        ["Besin, tohum, yetiştirme ortamı", "üretim başına"],
        ["İşçilik", "günlük bakım ve hasat"],
        ["Ambalaj ve teslim", "üretim başına"]
      ],
      sonuc: "Enerji maliyeti kârı belirler; kurulumdan önce aylık enerji faturasını tahmin et. Hibe programları kurulum yükünü ciddi azaltabilir."
    },
    ilkHafta: [
      "1-2. gün: Tarım müdürlüğü ve ziraat odasıyla görüş, hibe programlarını öğren.",
      "3-4. gün: Çalışan bir topraksız tarım tesisini ziyaret et.",
      "5. gün: Alıcı araştırması: restoran ve marketlerle konuş.",
      "6-7. gün: Küçük deneme sistemini kur."
    ],
    ornekMesaj: "Merhaba, [bölge]de topraksız tarımla ilaçsız ve temiz yeşillik (marul, roka, fesleğen) üretiyorum. Haftalık sabit teslim yapabilir, köklü canlı ürün de verebilirim; raf ömrü çok daha uzundur. Numune getirmemi ister misiniz?",
    ipuclari: [
      "pH ve EC ölçümünü her gün yap; sorunların çoğu buradan çıkar.",
      "Pompa arızasına karşı yedek pompa ve alarm sistemi kur.",
      "Büyük yatırımdan önce en az bir sezon küçük ölçekte üret."
    ],
    ogrenme: [
      "Tarım ve Orman Bakanlığı ile ziraat fakültelerinin topraksız tarım eğitimleri.",
      "Tarım müdürlüklerinin hibe ve kırsal kalkınma programları.",
      "Çalışan tesisleri ziyaret etmek ve üreticilerle konuşmak."
    ]
  },

  "sarj-istasyonu": {
    araclar: [
      ["Şarj cihazları", "AC (yavaş) cihazlar daha ucuz; DC (hızlı) cihazlar pahalı ama daha çok gelir."],
      ["Elektrik altyapısı", "Bağlantı gücü, pano, gerekirse trafo; dağıtım şirketiyle planlanır."],
      ["Şarj ağı iş ortaklığı", "Lisanslı bir şarj ağı operatörüyle sözleşme (uygulama, ödeme, destek)."],
      ["Otopark düzenlemesi", "İşaretleme, aydınlatma, kamera."],
      ["Bakım anlaşması", "Arızaya hızlı müdahale için."]
    ],
    yapilis: [
      { baslik: "1. Fizibilite", adimlar: [
        "Konumu değerlendir: ana yol, otel, AVM, restoran, site otoparkı. Şarj süresince müşteri ne yapacak?",
        "Bölgedeki elektrikli araç sayısını ve en yakın rakip istasyonları araştır.",
        "Elektrik dağıtım şirketinden mevcut bağlantı gücünü ve artırma maliyetini öğren."
      ]},
      { baslik: "2. İş modeli ve kurulum", adimlar: [
        "Lisanslı şarj ağı firmalarının iş ortaklığı modellerini karşılaştır: yatırımı kim yapıyor, gelir nasıl paylaşılıyor, bakım kimde.",
        "Sözleşmeyi bir avukata göster; süre, çıkış şartları ve gelir paylaşımını anla.",
        "Kurulumu yetkili firmaya yaptır, kabul testlerini birlikte yap."
      ]},
      { baslik: "3. İşletme", adimlar: [
        "Cihazların çalışırlığını uygulamadan takip et; arızaya hızlı müdahale et.",
        "Kullanım verilerini izle: hangi saatlerde dolu, ortalama şarj süresi.",
        "Mevcut işletmenle birleştir: şarj eden müşteriye kafe/restoran indirimi."
      ]}
    ],
    fiyat: {
      aciklama: "Gelir, şarj edilen enerji (kWh) üzerinden gelir; fiyatı genelde ağ operatörü belirler.",
      kalemler: [
        ["Yatırım", "cihaz + altyapı (yıllara bölünür)"],
        ["Elektrik alış maliyeti", "kWh başına"],
        ["Ağ operatörü payı", "sözleşmeye göre"],
        ["Bakım ve sigorta", "yıllık"],
        ["Kullanım oranı", "günde kaç saat dolu olduğu"]
      ],
      sonuc: "Geri dönüş süresini kullanım oranı belirler. Düşük kullanımlı konumda pahalı hızlı şarj cihazı uzun yıllar kendini ödemeyebilir; başta AC cihazla başlamak daha güvenlidir."
    },
    ilkHafta: [
      "1-2. gün: Konum ve rakip analizi yap.",
      "3. gün: Elektrik dağıtım şirketine bağlantı gücünü sor.",
      "4-5. gün: 2-3 şarj ağı firmasından iş ortaklığı teklifi al.",
      "6-7. gün: Gelir-gider ve geri dönüş hesabını yap; EPDK düzenlemelerini oku."
    ],
    ornekMesaj: "(İşletme tanıtımı) Otoparkımızda elektrikli araç şarj istasyonu hizmetinizde! Aracınız şarj olurken kafemizde dinlenin; şarj eden misafirlerimize içeceklerde indirim. Uygulamadan istasyon durumunu görebilirsiniz.",
    ipuclari: [
      "Yalnızca şarj için değil, şarj süresince harcama yapılacak bir işletmeyle birlikte düşün.",
      "Sözleşmedeki gelir paylaşımını ve süreyi anlamadan imzalama.",
      "Arızalı istasyon uygulamada kötü puan alır ve müşteri bir daha gelmez."
    ],
    ogrenme: [
      "EPDK'nın şarj hizmetleri yönetmeliği ve duyuruları.",
      "Şarj ağı firmalarının iş ortaklığı bilgilendirmeleri.",
      "Elektrik dağıtım şirketlerinin bağlantı başvuru rehberleri."
    ]
  },

  "oto-detayli-bakim": {
    araclar: [
      ["Polisaj makineleri", "Dual-action (orbital) makine yeni başlayanlar için daha güvenlidir."],
      ["Pasta, cila ve seramik kaplama ürünleri", "Profesyonel seriler."],
      ["Güçlü aydınlatma", "Çiziği görmek için özel detaylama ışıkları."],
      ["Köpük makinesi, basınçlı yıkama, kurulama bezleri", "Ön yıkama için."],
      ["Buharlı temizlik ve iç detay fırçaları", "İç temizlik için."],
      ["Boya kalınlık ölçer", "Pasta öncesi boyanın ne kadar kalın olduğunu ölçmek için."]
    ],
    yapilis: [
      { baslik: "1. Ön inceleme", adimlar: [
        "Aracı ışık altında incele, çizik ve hasarları fotoğrafla.",
        "Boya kalınlığını ölç; ince ya da boyalı bölgelerde pasta yapma.",
        "Müşteriye neyin düzelip neyin düzelmeyeceğini önceden söyle."
      ]},
      { baslik: "2. Dış detaylama", adimlar: [
        "Köpükle ön yıkama, iki kova yöntemiyle elle yıkama.",
        "Kil (clay bar) ile boyadaki yapışık kirleri al.",
        "Kaput, tavan, kapılar sırasıyla bölge bölge pasta; aşamalı (kaba pasta, ince pasta, cila).",
        "Seramik kaplama yapılacaksa yüzeyi yağdan arındır, üreticinin talimatına göre uygula ve kürlenme süresine uy."
      ]},
      { baslik: "3. İç detaylama", adimlar: [
        "Bütün eşyaları çıkar, detaylı süpür.",
        "Koltukları kumaşa uygun yöntemle yıka; deri koltuklarda deri temizleyici ve bakım kremi kullan.",
        "Plastikleri buhar ve fırçayla temizle, koruyucu uygula.",
        "Koku giderme (ozon ya da uygun ürünlerle)."
      ]}
    ],
    fiyat: {
      aciklama: "Paket ve araç sınıfına göre.",
      kalemler: [
        ["Araç boyutu", "küçük, orta, SUV"],
        ["Paket", "iç temizlik, pasta-cila, seramik kaplama, boya koruma filmi"],
        ["Ürün maliyeti", "özellikle seramik ve film"],
        ["İşçilik süresi", "detaylı işler bir günü bulabilir"],
        ["Dükkân giderleri", "kira, enerji, su"]
      ],
      sonuc: "Seramik kaplamada yıllık bakım paketi sat; tekrar gelen müşteri en kârlı müşteridir. Galerilerle 'satış öncesi hazırlık' anlaşması düzenli iş getirir."
    },
    ilkHafta: [
      "1-2. gün: Sertifikalı eğitim programlarını araştır, kaydol.",
      "3-4. gün: Bir detaylama dükkânında çalışmaya başla ya da gözlem yap.",
      "5. gün: Konum ve kira araştırması.",
      "6-7. gün: Ekipman ve ürün tekliflerini topla, iş planını yaz."
    ],
    ornekMesaj: "Merhaba, aracınıza profesyonel detaylı bakım yapıyoruz: iç temizlik, pasta-cila, seramik kaplama ve boya koruma. Önce boya kalınlığını ölçüp aracınızın durumunu birlikte değerlendiriyoruz. Galeriler için satış öncesi hazırlık paketlerimiz var.",
    ipuclari: [
      "Boya kalınlığını ölçmeden pasta yapma; boyayı yakmak çok pahalıya mal olur.",
      "Işık her şeydir; çiziği göremiyorsan düzeltemezsin.",
      "Cam filmi uygulamalarında yasal sınırların dışına çıkma."
    ],
    ogrenme: [
      "Ürün üreticilerinin sertifikalı uygulama eğitimleri.",
      "Deneyimli bir detaylama ustasının yanında çalışmak.",
      "İŞKUR'un oto bakım ve temizlik kursları (açıldığında)."
    ]
  }
});

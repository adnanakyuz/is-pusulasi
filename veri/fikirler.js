// İş fikirleri kütüphanesi. İnternetsiz çalışır.
// seviye: 0 sıfır sermaye, 1 az (5-20 bin TL), 2 orta (20-150 bin TL), 3 yatırım gerektiren
// yer: ev, disari, internet   |   tur: denenmis (yıllardır tutan iş) veya yukselen (Türkiye'de/dünyada yeni)
// Kazançlar şehre ve emeğe göre çok değişir; rakam yerine asgari ücrete göre aralık verilir.
window.SON_KONTROL = "Ekim 2026";

window.SEVIYELER = [
  { ad: "Sıfır sermaye", aralik: "Cebinden para çıkmadan" },
  { ad: "Az sermaye", aralik: "5 - 20 bin TL" },
  { ad: "Orta sermaye", aralik: "20 - 150 bin TL" },
  { ad: "Yatırım gerektiren", aralik: "150 bin TL ve üstü" }
];

window.DESTEKLER = {
  iskurGirisim: { ad: "İŞKUR Uygulamalı Girişimcilik Eğitimi", aciklama: "Ücretsiz. İş planı yapmayı öğretir. Aldığın sertifika KOSGEB desteğine başvurmak için gereklidir.", url: "https://www.iskur.gov.tr/" },
  kosgeb: { ad: "KOSGEB Girişimcilik Desteği", aciklama: "Şirket kurduktan sonra bir kısmı geri ödemesiz destek. Şartlar ve tutarlar her yıl değişir, başvurmadan önce güncel duyuruya bak.", url: "https://www.kosgeb.gov.tr/" },
  iskurKurs: { ad: "İŞKUR Mesleki Eğitim Kursları", aciklama: "Ücretsiz kurs; kurs süresince günlük harçlık ödenir. Sonunda belge verilir.", url: "https://www.iskur.gov.tr/" },
  iskurIsbasi: { ad: "İŞKUR İşbaşı Eğitim Programı", aciklama: "Bir işyerinde çalışarak meslek öğrenirsin; bu sürede İŞKUR sana ödeme yapar.", url: "https://www.iskur.gov.tr/" },
  halkEgitim: { ad: "Halk Eğitim Merkezi Kursları", aciklama: "Yemek, pastacılık, el sanatları, bilgisayar gibi yüzlerce ücretsiz kurs. Başvuru e-Devlet veya e-yaygin üzerinden.", url: "https://e-yaygin.meb.gov.tr/" },
  belediye: { ad: "Belediye Meslek Kursları", aciklama: "Büyükşehir ve ilçe belediyelerinin ücretsiz meslek kursları (İstanbul'da Enstitü İstanbul gibi). Kendi belediyenin sitesine bak.", url: "" },
  gencGirisim: { ad: "Genç Girişimci Vergi İstisnası", aciklama: "29 yaşını doldurmamış ve ilk kez işe başlayanlar, belli bir sınıra kadar 3 yıl gelir vergisi ödemez. Mali müşavire sor.", url: "https://www.gib.gov.tr/" },
  esnafMuafiyeti: { ad: "Esnaf Muafiyeti Belgesi", aciklama: "Evde ürettiğin ürünleri (internetten de) satabilmen ve bazı küçük işleri vergisiz yapabilmen için vergi dairesinden alınır. Yıllık satış sınırı vardır ve her yıl güncellenir.", url: "https://www.gib.gov.tr/" },
  ustalik: { ad: "Mesleki Eğitim Merkezi (Ustalık Belgesi)", aciklama: "Yıllardır bir işi yapıyor ama belgen yoksa, MEB'e bağlı Mesleki Eğitim Merkezlerinde sınavla kalfalık ve ustalık belgesi alabilirsin. İşyeri açmak için çoğu meslekte ustalık belgesi istenir.", url: "https://mtegm.meb.gov.tr/" },
  tarimDestek: { ad: "Tarım ve Orman Bakanlığı Destekleri", aciklama: "Genç çiftçi, kırsal kalkınma ve arıcılık gibi alanlarda hibe ve destek programları. İl/ilçe tarım müdürlüğünden güncel çağrıları sor.", url: "https://www.tarimorman.gov.tr/" }
};

window.ODENEK_UYARISI = "İşsizlik ödeneği alıyorsan dikkat: Sigortalı bir işe girersen, kendi adına şirket veya vergi kaydı açarsan ödeneğin kesilir. İŞKUR'un önerdiği işi ya da kursu geçerli bir sebep olmadan reddetmek de kesintiye yol açabilir. Esnaf muafiyeti belgesi gibi durumlar kişiye göre değişebilir; başlamadan önce İŞKUR'a yazılı olarak sor ve cevabı sakla.";

window.TUZAKLAR = [
  { baslik: "Evde paketleme, boncuk dizme, kalem montajı", aciklama: "'Evde paketleme yap, haftada şu kadar kazan' ilanları önce 'malzeme', 'kayıt' ya da 'kargo' parası ister. Para yatırıldıktan sonra ya malzeme hiç gelmez ya da yaptığın iş 'kalitesiz' denerek reddedilir. Kural: İş için önce SEN para ödüyorsan bu iş değildir." },
  { baslik: "Beğeni, yorum, 'görev' karşılığı para", aciklama: "Önce küçük ödemeler yapıp güven kazanırlar, sonra 'büyük görev' için senden para yatırmanı isterler. Bu düzenli işleyen bir dolandırıcılık türüdür." },
  { baslik: "Telegram ve WhatsApp yatırım grupları", aciklama: "'Hocamız kriptoda/forexte günde %10 kazandırıyor' diyen gruplar. Hiçbir meşru yatırım kazanç garantisi vermez. Paranı geri alamazsın." },
  { baslik: "Hesabını veya IBAN'ını kiralamak", aciklama: "'Hesabına para gelecek, sen çekip vereceksin, komisyonunu al' teklifleri. Bu, dolandırıcılık parasının aklanmasıdır; ceza sorumluluğu hesabın sahibine yani sana düşer." },
  { baslik: "Saadet zinciri ve 'üye getir kazan' sistemleri", aciklama: "Kazanç ürün satışından değil yeni üye getirmekten geliyorsa sistem sonunda çöker ve en son girenler zarar eder." },
  { baslik: "Yurt dışı iş vaadiyle vize ve komisyon parası", aciklama: "'Almanya'da iş hazır, vize masrafı için şu kadar yatır' diyen kişiler. Gerçek işverenler ve izinli aracılar işçiden peşin para istemez. Türkiye'de yurt dışına işçi gönderme izni olan özel istihdam bürolarının listesi İŞKUR'dadır; oradan kontrol et." },
  { baslik: "Bayilik ve franchise 'garantili kazanç' vaatleri", aciklama: "'Şu kadar ayda yatırımını çıkarırsın' garantisi veren bayilikler. Sözleşmeyi bir avukata göstermeden ve mevcut bayilerle konuşmadan imza atma." }
];

window.FIKIRLER = [
  // ---------------- SIFIR SERMAYE ----------------
  {
    id: "ozel-ders", baslik: "Özel ders ve etüt", seviye: 0, yer: ["ev", "disari", "internet"], tur: "denenmis",
    ozet: "Bildiğin bir dersi, dili ya da beceriyi birebir öğretmek.",
    neIs: "Okul derslerinde, yabancı dilde, müzik aleti, bilgisayar kullanımı ya da ehliyet sınavı gibi bir konuda öğrencilere birebir veya küçük gruplarla ders vermek. Yüz yüze ya da görüntülü görüşmeyle yapılabilir.",
    kimeUygun: "Bir konuyu iyi bilen ve sabırla anlatabilen herkes. Üniversite mezunu olmak şart değil; örneğin iyi Almanca bilen bir usta da dil dersi verebilir.",
    sermaye: "0 TL. İnternetten ders için telefon veya bilgisayar yeterli.",
    ilkPara: "1-3 hafta. İlk öğrenci genelde tanıdık çevreden gelir.",
    adimlar: [
      "Hangi konuyu ve hangi seviyeyi (ilkokul, lise, yetişkin) öğreteceğine karar ver. Dar bir alan seçmek güven verir: 'Lise matematik' gibi.",
      "Bölgendeki saatlik ders ücretlerine bak (ilan siteleri, özel ders platformları). Başta ortalamanın biraz altında başla.",
      "Kısa bir tanıtım yazısı hazırla: ne öğretiyorsun, deneyimin ne, nerede ve hangi saatlerde.",
      "Çevrene, mahalle ve okul veli WhatsApp gruplarına ve özel ders platformlarına duyur.",
      "İlk dersi deneme dersi olarak ücretsiz ya da indirimli yap; öğrencinin eksiklerini çıkar ve bir plan sun.",
      "Her ayın sonunda veliye kısa bir ilerleme notu gönder. Tavsiye ile yeni öğrenci gelmesinin en güçlü yolu budur."
    ],
    yasal: "Düzenli ve sürekli ders veriyorsan bu serbest meslek kazancı sayılır ve vergi kaydı gerekir. Öğretmen olarak bir kurumda çalışıyorsan ayrıca kendi kurumunun kurallarına bak. Evini dershane gibi kullanıp çok sayıda öğrenciyi bir arada okutmak özel izin gerektirir.",
    kazanc: "Haftada 8-10 saat ders ile asgari ücretin yarısı ile bir katı arası. Sınav dönemlerinde artar, yaz aylarında düşer.",
    tuzaklar: [
      "Ücretsiz ya da çok ucuz başlayıp sonra fiyatı artıramamak. Başta fiyatını yaz ve indirimi 'ilk ay' diye sınırla.",
      "Dersi iptal eden öğrenciye esnek davranıp gelir kaybetmek. 24 saatten geç iptal ücretli diye baştan söyle.",
      "Her konuya girmek. Bilmediğin bir dersi kabul etmek itibar kaybettirir."
    ],
    destekler: ["halkEgitim", "gencGirisim"]
  },
  {
    id: "yasli-dijital", baslik: "Yaşlılara dijital yardım", seviye: 0, yer: ["disari", "ev"], tur: "yukselen",
    ozet: "Telefon, e-Devlet, hastane randevusu, görüntülü arama gibi işlerde yaşlılara evde yardım.",
    neIs: "Akıllı telefon kullanmakta zorlanan yaşlılara evlerinde ya da telefonda yardım etmek: MHRS'den randevu almak, e-Devlet işlemleri, görüntülü arama kurmak, fotoğrafları torunlara göndermek, dolandırıcı aramalarına karşı uyarmak. Dünyada 'dijital arkadaş' adıyla yaygınlaşan bir iş.",
    kimeUygun: "Telefonu iyi kullanan, sabırlı ve güvenilir biri. Gençler ve emekliler için de uygun.",
    sermaye: "0 TL.",
    ilkPara: "1-2 hafta.",
    adimlar: [
      "Hangi işleri yapacağını listele (randevu, e-Devlet, telefon kurulumu, haftalık ziyaret).",
      "Sabit bir fiyat koy: tek ziyaret ücreti ve aylık paket (ör. haftada bir ziyaret).",
      "Yaşlıların çocuklarına ulaş: genelde parayı ödeyen ve karar veren onlardır. Mahalle grupları, cami ve muhtarlık duyuru panoları iyi yerlerdir.",
      "Her ziyarette ne yaptığını kısa bir mesajla aileye bildir. Güven bu işin sermayesidir.",
      "Memnun kalan ailelerden tavsiye iste."
    ],
    yasal: "Düzenli gelir elde ediyorsan şahıs şirketi açman gerekir. Kimsenin şifresini kendine kaydetme, banka işlemlerini onun yerine yapma; yalnızca nasıl yapılacağını göster. Bu hem yasal hem güven açısından şarttır.",
    kazanc: "Ek gelir olarak başlar. Birkaç düzenli aile ile asgari ücretin yarısına yaklaşmak gerçekçidir.",
    tuzaklar: [
      "Para ve şifre işine karışmak. Bir yanlış anlaşılma işini bitirir.",
      "Ücreti belirsiz bırakmak ('ne verirseniz'). Fiyatı baştan söyle."
    ],
    destekler: ["iskurGirisim"]
  },
  {
    id: "evcil-hayvan", baslik: "Köpek gezdirme ve evcil hayvan bakımı", seviye: 0, yer: ["disari"], tur: "yukselen",
    ozet: "Çalışan aileler için köpek gezdirme, tatilde kedi-köpek bakımı.",
    neIs: "Gündüz evde olmayanların köpeklerini gezdirmek, tatile gidenlerin hayvanlarına evlerinde bakmak (mama, su, kum, oyun). Büyük şehirlerde hızla büyüyen bir hizmet.",
    kimeUygun: "Hayvanları seven, sorumluluk sahibi ve saatine sadık kişiler.",
    sermaye: "0 TL. Tasma, dışkı poşeti gibi küçük masraflar.",
    ilkPara: "1-3 hafta.",
    adimlar: [
      "Önce tanıdıkların hayvanlarıyla deneyim kazan, fotoğraflı referans topla.",
      "Hizmetlerini ve fiyatını yaz: 30 dakikalık yürüyüş, günlük ziyaret, gece kalma.",
      "Veteriner, pet shop ve site yöneticiliklerine ilan bırak; bu işler için kurulan uygulamalara kaydol.",
      "Her ziyaretten sonra sahibine fotoğraf gönder.",
      "Saldırgan veya hasta hayvanı ilk görüşmede tanı; uygun değilse kibarca reddet."
    ],
    yasal: "Düzenli gelirde şahıs şirketi gerekir. Saldırgan köpek ırkları ve tasmasız gezdirme konusunda belediye kurallarına uy. Bir kaza durumunda sorumluluğun kimde olduğunu sahibiyle önceden yazılı konuş.",
    kazanc: "Aynı mahallede birkaç düzenli müşteri ile ek gelir; yoğun çalışmayla asgari ücrete yaklaşır.",
    tuzaklar: [
      "Aynı anda çok sayıda köpeği gezdirip kontrolü kaybetmek.",
      "Ev anahtarını almak ama yazılı bir anlaşma yapmamak."
    ],
    destekler: ["iskurGirisim"]
  },
  {
    id: "ikinci-el-aracilik", baslik: "İkinci el eşya satış aracılığı", seviye: 0, yer: ["internet", "ev"], tur: "denenmis",
    ozet: "Başkalarının satmak istediği eşyaları fotoğraflayıp internette satmak, komisyon almak.",
    neIs: "Taşınan, evini boşaltan ya da vakti olmayan insanların eşyalarını iyi fotoğraflar ve açıklamalarla ikinci el sitelerinde satmak. Satılan her üründen yüzde komisyon alınır. Sermaye senin değil, eşya sahibinin eşyasıdır.",
    kimeUygun: "Pazarlık yapmayı seven, iyi fotoğraf çekip düzgün ilan yazabilen, güvenilir kişiler.",
    sermaye: "0 TL. Telefonun kamerası yeterli.",
    ilkPara: "1-4 hafta (ilk satışla).",
    adimlar: [
      "Önce kendi evindeki kullanılmayan eşyaları satarak öğren: hangi fotoğraf ve fiyat işe yarıyor.",
      "Komisyon oranını belirle ve yazılı bir anlaşma şablonu hazırla (eşya listesi, en düşük fiyat, komisyon).",
      "Taşınma ve ev boşaltma dönemindeki insanlara ulaş: emlakçılar ve nakliyeciler iyi kaynaktır.",
      "Gün ışığında, temiz arka planla fotoğraf çek; kusurları da göster.",
      "Satış parası doğrudan eşya sahibine yatsın, sen komisyonunu ondan al; bu güven sağlar."
    ],
    yasal: "Bu iş düzenli hale gelirse ticari kazanç sayılır ve vergi kaydı gerekir. Kendi kişisel eşyanı ara sıra satmak ise vergiye tabi değildir.",
    kazanc: "Dalgalı. Başlangıçta ek gelir; büyük ev boşaltmaları yakalayınca bir ayda asgari ücreti geçebilir.",
    tuzaklar: [
      "Sahte kargo ödemesi ve 'linke tıkla paranı al' dolandırıcılığı. Parayı hesaba geçmeden ürünü teslim etme.",
      "Eşyayı kendi evinde stoklamak; kayıp ve kırılma sorumluluğu sana kalır."
    ],
    destekler: ["iskurGirisim"]
  },
  {
    id: "ceviri-metin", baslik: "Çeviri ve metin yazarlığı", seviye: 0, yer: ["internet", "ev"], tur: "denenmis",
    ozet: "Yabancı dil biliyorsan internetten çeviri, altyazı ve ürün açıklaması yazmak.",
    neIs: "Belgeleri, internet sitelerini, ürün açıklamalarını veya video altyazılarını çevirmek; e-ticaret satıcılarına ürün metni yazmak. Yapay zekâ basit çevirileri ucuzlattı, bu yüzden değer artık 'yapay zekâ çevirisini kontrol edip düzelten insan' işinde.",
    kimeUygun: "En az bir yabancı dili iyi bilen, Türkçesi düzgün ve teslim tarihine sadık kişiler. Bir alanda (inşaat, tıp, otomotiv) uzmanlığı olan çok daha çabuk iş bulur.",
    sermaye: "0 TL. Bilgisayar gereklidir.",
    ilkPara: "2-6 hafta. Serbest çalışma sitelerinde ilk işi almak zaman alır.",
    adimlar: [
      "Uzmanlık alanını seç (ör. inşaat ve iş makineleri teknik belgeleri).",
      "3-4 kısa örnek çeviri hazırla; bu senin vitrinin olacak.",
      "Serbest çalışma sitelerine profil aç, çeviri bürolarına özgeçmiş ve örneklerini gönder.",
      "İlk işlerde hızlı ve hatasız teslim et; puan ve yorum biriktir.",
      "Yeminli tercüman olmak istiyorsan noterlerin şartlarını araştır; bu daha düzenli gelir sağlar."
    ],
    yasal: "Serbest meslek kazancıdır ve vergi kaydı gerekir. Yurt dışından döviz ile ödeme alıyorsan bunun da beyan edilmesi gerekir. 29 yaş altıysan genç girişimci istisnasına bak.",
    kazanc: "İlk aylarda düşük. Uzmanlık alanı oturduktan sonra asgari ücretin bir ile iki katı arası mümkündür.",
    tuzaklar: [
      "Ödeme alınmadan büyük işe başlamak. Yeni müşteriden avans iste.",
      "'Önce ücretsiz deneme çevirisi yap' diye uzun metin isteyenler. Deneme en fazla yarım sayfa olmalı.",
      "Yapay zekâ çevirisini kontrol etmeden teslim etmek; bir hata müşteriyi kaybettirir."
    ],
    destekler: ["gencGirisim", "iskurGirisim"]
  },

  // ---------------- AZ SERMAYE ----------------
  {
    id: "ev-yemekleri", baslik: "Ev yemekleri ve tatlı satışı", seviye: 1, yer: ["ev", "internet"], tur: "denenmis",
    ozet: "Evde yaptığın yemek, mantı, börek, tatlıyı sipariş üzerine satmak.",
    neIs: "Mantı, sarma, börek, kurabiye, pasta gibi ev ürünlerini sipariş usulüyle satmak. Çalışan aileler, ofisler ve özel günler ana müşteridir.",
    kimeUygun: "Yemeği iyi ve temiz yapan, aynı lezzeti her seferinde tutturabilen kişiler.",
    sermaye: "5-15 bin TL: ambalaj, etiket, mutfak hassas terazisi, birkaç büyük tencere/tepsi ve ilk malzemeler.",
    ilkPara: "1-3 hafta.",
    adimlar: [
      "En iyi yaptığın 3-5 ürünü seç. Az ürün = az israf ve sabit kalite.",
      "Her ürünün maliyetini tek tek hesapla (malzeme + ambalaj + gaz/elektrik). Fiyatı maliyetin en az 2 katı koy.",
      "Vergi dairesinden esnaf muafiyeti belgesini al; gıda ile ilgili kayıt gerekip gerekmediğini ilçe tarım müdürlüğüne sor.",
      "Güzel fotoğraflarla bir sosyal medya hesabı aç; önce çevrene ve mahalle gruplarına tanıt.",
      "Sipariş günleri ve teslim saatleri koy. 'Bugün söyle yarın teslim' gibi bir düzen israfı önler.",
      "Ofislere tadım kutusu götür; düzenli öğle yemeği siparişi en istikrarlı gelirdir."
    ],
    yasal: "Evde ürettiğin ürünleri satmak için vergi dairesinden esnaf muafiyeti belgesi alabilirsin; bu belgeyle internetten de satabilirsin, yıllık satış sınırını aşmamalısın. Gıda satışı hijyen kurallarına tabidir: il/ilçe tarım ve orman müdürlüğünden hangi kaydın gerektiğini öğren. Etikette içerik ve alerjen bilgisi bulunmalı.",
    kazanc: "Haftada birkaç düzenli sipariş ile ek gelir; ofis ve özel gün siparişleriyle asgari ücret düzeyine çıkabilir.",
    tuzaklar: [
      "Maliyeti hesaplamadan 'piyasa fiyatı' ile satmak; çok satıp zarar etmek.",
      "Kargo ile çabuk bozulan ürün göndermek.",
      "Hijyen ve etiketi hafife almak; tek bir şikâyet işi bitirebilir."
    ],
    destekler: ["esnafMuafiyeti", "halkEgitim", "iskurKurs", "kosgeb"]
  },
  {
    id: "el-emegi-online", baslik: "El emeği ürünleri internetten satmak", seviye: 1, yer: ["ev", "internet"], tur: "denenmis",
    ozet: "Takı, örgü, seramik, ahşap, mum gibi el ürünlerini pazar yerlerinde satmak.",
    neIs: "Kendi ürettiğin el ürünlerini Türkiye'deki pazar yerlerinde ve yurt dışına satış yapan sitelerde satmak. Yurt dışı satışta Türk el işlerine ilgi yüksektir.",
    kimeUygun: "Bir el sanatını bilen ya da öğrenmeye hazır, sabırlı ve düzenli üretebilen kişiler.",
    sermaye: "5-20 bin TL: malzeme, ambalaj, fotoğraf için ışık ve basit bir arka plan.",
    ilkPara: "3-8 hafta. Mağazanın görünür hale gelmesi zaman alır.",
    adimlar: [
      "Bir ürün ailesi seç ve onda iyi ol (ör. sadece doğal taşlı takılar).",
      "Halk Eğitim kurslarıyla tekniğini geliştir; ücretsizdir.",
      "Esnaf muafiyeti belgesini al.",
      "Ürünleri doğal ışıkta, sade arka planla çek; ölçü ve malzemeyi açıkça yaz.",
      "Bir pazar yerinde mağaza aç; ilk yorumlar için çevrene uygun fiyatla sat.",
      "Satılan ürünleri çoğalt, satmayanları bırak."
    ],
    yasal: "Esnaf muafiyeti belgesiyle evde üretip internetten satmak mümkündür (yıllık sınır var). Pazar yerlerinin bir kısmı satıcı olarak vergi levhası isteyebilir; mağaza açmadan önce kurallarına bak. Yurt dışına satışta gümrük ve kargo kurallarını öğren.",
    kazanc: "Başta ek gelir. Bir ürün tutarsa ve yurt dışına satış başlarsa asgari ücretin üzerine çıkmak mümkün ama emek ister.",
    tuzaklar: [
      "Kendi emeğini fiyata katmamak. Saatlik emeğini de maliyete ekle.",
      "Pazar yeri komisyonu ve kargo ücretini unutmak.",
      "Başkasının tasarımını kopyalamak; marka/telif şikâyeti mağazayı kapatır."
    ],
    destekler: ["esnafMuafiyeti", "halkEgitim", "belediye"]
  },
  {
    id: "evin-ustasi", baslik: "Küçük tamir ustalığı (evin ustası)", seviye: 1, yer: ["disari"], tur: "denenmis",
    ozet: "Musluk, priz, kapı, raf, perde, mobilya montajı gibi küçük ev işleri.",
    neIs: "Büyük ustaların 'küçük iş' diye gelmediği tamir ve montajları yapmak: damlayan musluk, kapı kolu, priz, avize takma, mobilya kurma, perde rayı, silikon çekme.",
    kimeUygun: "Elinden iş gelen, alet kullanmayı bilen herkes. İnşaat ve sanayi geçmişi olanlar için doğal bir iş.",
    sermaye: "5-20 bin TL: matkap, takım çantası, seviye, merdiven, temel sarf malzemesi.",
    ilkPara: "1-2 hafta.",
    adimlar: [
      "Yapabildiğin işlerin listesini çıkar; elektrik gibi riskli işlerde belge gerekip gerekmediğine bak.",
      "Fiyat listesi hazırla: gelme ücreti + iş başı ücret. Malzemeyi ayrıca yaz.",
      "Site yöneticileri, emlakçılar ve mobilya mağazaları ile tanış; en düzenli iş onlardan gelir.",
      "Her işten önce-sonra fotoğrafı çek; hem referans hem güvencedir.",
      "Zamanında git ve temiz bırak. Bu işte tavsiye her şeydir."
    ],
    yasal: "Düzenli çalışmada şahıs şirketi açılır. Elektrik tesisatı işleri için ustalık/yetki belgesi gerekir; belgen yoksa bu işleri alma. İŞKUR ve Halk Eğitim kurslarından alınan belgeler hem güven hem yasal dayanak sağlar.",
    kazanc: "Düzenli çevre kurulunca asgari ücretin bir ile iki katı arası gerçekçidir.",
    tuzaklar: [
      "Fiyatı işi gördükten sonra söylemek ve tartışmaya girmek; önce fiyat ver.",
      "Bilmediğin işe girip zarar vermek; özellikle gaz ve elektrik.",
      "Malzemeyi kendi cebinden alıp parasını alamamak."
    ],
    destekler: ["iskurKurs", "halkEgitim", "ustalik", "kosgeb"]
  },
  {
    id: "bahce-bakim", baslik: "Bahçe ve site bakımı", seviye: 1, yer: ["disari"], tur: "denenmis",
    ozet: "Müstakil ev ve sitelerin çim biçme, budama, sulama işleri.",
    neIs: "Müstakil evlerin, villaların ve sitelerin bahçelerinde düzenli bakım: çim biçme, çit budama, yaprak toplama, mevsimlik dikim ve sulama sistemi kontrolü.",
    kimeUygun: "Açık havada çalışmayı seven, bedenen dayanıklı kişiler. Yazlık bölgelere yakın yaşayanlar için çok uygun.",
    sermaye: "10-20 bin TL: çim biçme makinesi, budama makası, tırmık, el aletleri. Araç yoksa müşteriler yakın olmalı.",
    ilkPara: "1-3 hafta (mevsime bağlı).",
    adimlar: [
      "Bölgendeki müstakil ev ve siteleri listele.",
      "Aylık paket fiyatı belirle (ör. ayda iki ziyaret). Tek seferlik iş yerine aylık anlaşma ara.",
      "Site yönetimleriyle görüş; tek bir site birçok müşteri demektir.",
      "Kışın gelir düşer: kar temizliği, budama ve çatı oluğu temizliği gibi kış işlerini de ekle."
    ],
    yasal: "Düzenli çalışmada şahıs şirketi açılır. Siteler genelde fatura ister; fatura kesemiyorsan büyük işleri alamazsın. İlaçlama yapacaksan ayrı izin ve eğitim gerekir.",
    kazanc: "Mevsimlik. Yazın asgari ücretin üzerine çıkabilir, kışın düşer; yıllık ortalamayı hesapla.",
    tuzaklar: [
      "Kışı hesaba katmamak.",
      "Alet bakımını ihmal etmek; bozuk makine iş kaybı demek."
    ],
    destekler: ["iskurKurs", "halkEgitim", "kosgeb"]
  },
  {
    id: "icerik-uretici-yerel", baslik: "Yerel işletmelere sosyal medya yönetimi", seviye: 1, yer: ["internet", "disari"], tur: "yukselen",
    ozet: "Mahalledeki kafe, berber, oto yıkama gibi işletmelerin Instagram ve Google sayfalarını yönetmek.",
    neIs: "Küçük işletmelerin çoğunun sosyal medyaya vakti yoktur. Haftalık fotoğraf/video çekmek, paylaşım yapmak, Google Haritalar sayfasını güncel tutmak ve yorumlara cevap vermek için aylık ücret alınır.",
    kimeUygun: "Telefonla iyi fotoğraf ve kısa video çekebilen, sosyal medyayı iyi bilen kişiler.",
    sermaye: "5-15 bin TL: telefon tripodu, küçük ışık, bir mikrofon. Ücretsiz düzenleme uygulamaları yeterli.",
    ilkPara: "2-4 hafta.",
    adimlar: [
      "Önce bir tanıdığın işletmesini 1 ay ücretsiz yönet; öncesi ve sonrası sonuçları kaydet (takipçi, arama sayısı).",
      "Aylık paket hazırla: kaç paylaşım, kaç video, yorum cevaplama.",
      "Aynı sokaktaki işletmeleri tek tek gez ve örneklerini göster.",
      "Her ayın sonunda işletmeye sade bir rapor ver: kaç kişi gördü, kaç kişi aradı."
    ],
    yasal: "Serbest meslek veya ticari kazanç olarak vergi kaydı gerekir; işletmeler fatura ister. Müşteri ve çalışan fotoğraflarını izinsiz paylaşma.",
    kazanc: "Her işletmeden küçük bir aylık ücret; 5-6 işletme ile asgari ücretin üzerine çıkılabilir.",
    tuzaklar: [
      "Takipçi satın almak veya sahte yorum yazmak; hem yasak hem işletmeye zarar.",
      "Sınırsız revizyon kabul etmek. Pakette ne olduğunu yazılı belirle."
    ],
    destekler: ["gencGirisim", "iskurGirisim", "kosgeb"]
  },

  // ---------------- ORTA SERMAYE ----------------
  {
    id: "moto-kurye", baslik: "Motosikletli kurye", seviye: 2, yer: ["disari"], tur: "denenmis",
    ozet: "Kendi motosikletinle yemek, paket ve evrak teslimatı.",
    neIs: "Yemek ve market uygulamalarına, kargo şirketlerine veya doğrudan esnafa bağımsız (esnaf) kurye olarak teslimat yapmak.",
    kimeUygun: "Ehliyeti olan, şehrini iyi bilen, trafikte dikkatli ve dayanıklı kişiler.",
    sermaye: "60-150 bin TL: motosiklet (ikinci el olabilir), kask ve koruyucu kıyafet, çanta, telefon tutucu. Motosikletin varsa 10-20 bin TL.",
    ilkPara: "1-2 hafta.",
    adimlar: [
      "Uygulamaların ve kurye firmalarının şartlarını karşılaştır (komisyon, bölge, ödeme günü).",
      "Şahıs şirketini (esnaf kurye) aç; çoğu uygulama bunu ister.",
      "Kaliteli kask ve koruyucu ekipmana para ayır. Bu işte en büyük risk kazadır.",
      "İlk ay gelir-gider defteri tut: yakıt, bakım, sigorta, vergi. Net kazancı ancak böyle görürsün.",
      "Tek bir uygulamaya bağlı kalma; yerel esnafla doğrudan anlaşma da yap."
    ],
    yasal: "Bağımsız kurye için şahıs şirketi ve Bağ-Kur kaydı gerekir. Motosiklet ehliyeti, trafik sigortası ve mümkünse ferdi kaza sigortası şart. Kurye ehliyet sınıfı ve belge şartlarını ilçe emniyet ve belediyeden kontrol et.",
    kazanc: "Brüt kazanç asgari ücretin üzerinde görünür ama yakıt, bakım, vergi ve Bağ-Kur düşünce net kazanç ciddi azalır. Hesabı hep net üzerinden yap.",
    tuzaklar: [
      "Kazanç hesabında masrafları unutmak.",
      "Yorgun ve hızlı sürmek; tek kaza aylarca gelir kaybı demek.",
      "Ödenmeyen Bağ-Kur primini biriktirmek."
    ],
    destekler: ["kosgeb", "iskurGirisim"]
  },
  {
    id: "yerinde-temizlik", baslik: "Yerinde koltuk ve araç içi temizlik", seviye: 2, yer: ["disari"], tur: "denenmis",
    ozet: "Müşterinin evinde koltuk, yatak, araç içi ve halı yıkama.",
    neIs: "Profesyonel yıkama makinesiyle evde koltuk, yatak, sandalye; otoparkta araç içi detaylı temizlik yapmak. Kurulu bir dükkân gerekmez.",
    kimeUygun: "Titiz, bedenen dayanıklı ve müşteriyle iyi iletişim kuran kişiler.",
    sermaye: "30-80 bin TL: profesyonel koltuk yıkama makinesi, endüstriyel süpürge, kimyasallar, fırçalar. Taşıma için araç gerekebilir.",
    ilkPara: "1-3 hafta.",
    adimlar: [
      "Makineyi almadan önce kursa git ya da bu işi yapan birinin yanında birkaç gün çalış. Yanlış kimyasal kumaşı mahveder.",
      "Kumaş türlerini ve leke türlerini öğren.",
      "Fiyat listesi: koltuk takımı, yatak, araç içi. İndirimli 'ev paketi' yap.",
      "Önce-sonra videoları çek; bu işte en iyi reklam görüntüdür.",
      "Bayram ve taşınma dönemlerinde talep patlar; önceden randevu topla."
    ],
    yasal: "Şahıs şirketi gerekir. Kullandığın kimyasalların güvenlik bilgi formlarını sakla. Müşteri eşyasına zarar vermeye karşı mesleki sorumluluk sigortasını araştır.",
    kazanc: "Bayram ve sezonda yüksek, diğer zamanlarda orta. Yıllık ortalama asgari ücretin bir ile iki katı arası gerçekçidir.",
    tuzaklar: [
      "Makineyi alıp işi öğrenmeden başlamak.",
      "Kumaşın etiketine bakmadan yıkamak; zararı ödemek zorunda kalırsın.",
      "Koltuğu ıslak bırakmak; kötü koku ve şikâyet."
    ],
    destekler: ["iskurKurs", "kosgeb", "iskurGirisim"]
  },
  {
    id: "elektronik-tamir", baslik: "Telefon ve küçük elektronik tamiri", seviye: 2, yer: ["ev", "disari"], tur: "denenmis",
    ozet: "Ekran, batarya, şarj soketi değişimi gibi tamirler.",
    neIs: "Telefon, tablet ve küçük ev elektroniklerinin sık bozulan parçalarını değiştirmek. Önce evde, sonra küçük bir tezgâhla yapılabilir.",
    kimeUygun: "Elleri hassas, sabırlı ve teknik konulara meraklı kişiler.",
    sermaye: "20-60 bin TL: lehim istasyonu, sıcak hava tabancası, hassas tornavida seti, büyüteç lamba, ilk yedek parçalar.",
    ilkPara: "1-3 ay. Önce öğrenme süresi var.",
    adimlar: [
      "Kurs al ya da bir tamircinin yanında çalış. Halk Eğitim ve İŞKUR kurslarına bak.",
      "Kendi eski telefonlarında pratik yap.",
      "Önce kolay işlerle başla: batarya, ekran, şarj soketi.",
      "Güvenilir parça tedarikçisi bul; kalitesiz parça şikâyet getirir.",
      "Her tamire yazılı garanti ver (ör. 3 ay)."
    ],
    yasal: "Dükkân açınca belediyeden işyeri ruhsatı ve vergi kaydı gerekir. Müşterinin cihazındaki kişisel verilere (fotoğraf, mesaj) bakmak suçtur; şifre isteme, gerekiyorsa müşterinin yanında açtır.",
    kazanc: "Öğrenme döneminden sonra asgari ücretin bir ile iki katı; iyi bir konum ve itibarla daha fazlası.",
    tuzaklar: [
      "Ucuz parçayla müşteri kaybetmek.",
      "Yetmediğin bir işi alıp cihazı tamamen bozmak; zararı ödersin.",
      "Çalıntı cihaz alıp satmak; cihazın IMEI'sini kontrol et."
    ],
    destekler: ["iskurKurs", "halkEgitim", "ustalik", "kosgeb"]
  },
  {
    id: "gunes-paneli-temizlik", baslik: "Güneş paneli temizliği ve bakımı", seviye: 2, yer: ["disari"], tur: "yukselen",
    ozet: "Ev, tarla ve fabrika çatılarındaki güneş panellerini temizlemek.",
    neIs: "Tozlu güneş panelleri daha az elektrik üretir. Çatı ve arazi tipi santrallerde düzenli panel yıkama, görsel kontrol ve basit bakım raporu hazırlamak. Türkiye'de panel sayısı hızla arttığı için yeni bir alan.",
    kimeUygun: "Yükseklikte çalışabilen, güvenlik kurallarına uyan, bedenen dayanıklı kişiler.",
    sermaye: "40-120 bin TL: saf su sistemi, uzun saplı fırçalar, emniyet kemeri ve iskele/yaşam hattı ekipmanı. Araç gerekir.",
    ilkPara: "1-2 ay.",
    adimlar: [
      "Yüksekte çalışma eğitimi ve belgesi al; bu iş için şarttır.",
      "Panel üreticilerinin temizlik kurallarını öğren (sert kimyasal ve basınçlı su kullanılmaz).",
      "Kurulum firmalarıyla tanış; kurdukları müşterilerin bakımını sana yönlendirebilirler.",
      "Tarım arazisi ve fabrika çatısındaki santralleri hedefle; büyük ve düzenli işlerdir.",
      "Her temizlikten önce ve sonra üretim değerini kaydet; müşteriye farkı göster."
    ],
    yasal: "Şahıs şirketi, iş güvenliği ve yüksekte çalışma eğitim belgesi gerekir. Yanında çalışan olacaksa iş sağlığı ve güvenliği kuralları ağırlaşır. Elektrik bağlantılarına dokunma; bu yetkili elektrikçi işidir.",
    kazanc: "Sezonluk ve sözleşmeye bağlı. Birkaç büyük santralle yıllık sözleşme yapılınca iyi gelir sağlar.",
    tuzaklar: [
      "Güvenlik ekipmanından tasarruf etmek; düşme riski hayati.",
      "Basınçlı yıkama ile paneli çizmek ve garantiyi bozmak."
    ],
    destekler: ["iskurKurs", "kosgeb"]
  },
  {
    id: "mantar-uretim", baslik: "Küçük çaplı mantar üretimi", seviye: 2, yer: ["ev", "disari"], tur: "yukselen",
    ozet: "Kapalı bir alanda istiridye mantarı gibi kolay türleri yetiştirip satmak.",
    neIs: "Bodrum, depo ya da boş bir odada torbalarda mantar yetiştirmek ve restoranlara, manavlara, pazara satmak. İstiridye mantarı başlangıç için en kolay türdür.",
    kimeUygun: "Düzenli takip yapabilen, temizlik kurallarına uyan, kırsalda ya da kapalı alana sahip kişiler.",
    sermaye: "20-60 bin TL: hazır mantar torbaları ya da tohum (misel), raf, nemlendirici, termometre-nem ölçer, havalandırma.",
    ilkPara: "1,5-3 ay (ilk hasat).",
    adimlar: [
      "Halk Eğitim, tarım müdürlüğü veya ziraat odasının mantarcılık kursuna katıl.",
      "Önce küçük deneme yap (birkaç torba); sıcaklık ve nemi tutturmayı öğren.",
      "Ürünü kime satacağını üretimden ÖNCE bul: restoran, manav, yerel pazar.",
      "Hasat zamanını satış günlerine göre planla; mantar çabuk bozulur.",
      "Başarılı olursan torba sayısını kademeli artır."
    ],
    yasal: "Tarımsal üretim için Çiftçi Kayıt Sistemi'ne kayıt ve satışta müstahsil makbuzu/fatura konusunu ilçe tarım müdürlüğüne sor. Tarım ve Orman Bakanlığı'nın genç çiftçi ve kırsal kalkınma desteklerine bak.",
    kazanc: "Ek gelirle başlar. Satış kanalı oturursa ve hastalık yaşanmazsa düzenli bir gelir olur; ilk denemelerde kayıp yaşamak normaldir.",
    tuzaklar: [
      "Alıcı bulmadan büyük üretim yapmak.",
      "Temizliği ihmal edip küf ve hastalıkla tüm hasadı kaybetmek.",
      "İnternetteki 'evde mantar yetiştir ayda şu kadar kazan' vaatlerine inanıp pahalı set almak."
    ],
    destekler: ["tarimDestek", "halkEgitim", "kosgeb"]
  },

  // ---------------- YATIRIM ----------------
  {
    id: "is-makinesi-hizmet", baslik: "Kendi iş makinenle hizmet vermek", seviye: 3, yer: ["disari"], tur: "denenmis",
    ozet: "Operatör olarak kendi makineni alıp müteahhitlere ve belediyelere saatlik/günlük çalışmak.",
    neIs: "Ekskavatör, beko loder, mini yükleyici ya da silindir gibi bir iş makinesini alıp operatörlüğünü kendin yaparak inşaat, altyapı ve tarım işlerine kiralamak. Operatör deneyimi olanlar için en doğal 'kendi işinin patronu olma' yolu.",
    kimeUygun: "Operatörlük belgesi ve deneyimi olan, sektörde tanıdığı bulunan kişiler.",
    sermaye: "Yüksek: ikinci el küçük makineler bile milyon TL düzeyinde olabilir. Leasing (finansal kiralama) ile peşinat daha düşük tutulabilir. Ayrıca sigorta, bakım ve taşıma (lowbed) maliyeti var.",
    ilkPara: "1-2 ay (ilk iş sözleşmesiyle). Ama makinenin borcu ilk aydan başlar.",
    adimlar: [
      "Bölgende en çok hangi makineye talep olduğunu öğren: müteahhitler, hafriyatçılar, belediyeler ne arıyor?",
      "Makineyi almadan ÖNCE en az 2-3 düzenli iş bağlantısı bul.",
      "İkinci el alacaksan bağımsız bir ustaya ekspertiz yaptır, çalışma saatine ve bakım geçmişine bak.",
      "Leasing ve banka teklifleri ile aylık taksiti hesapla; makinenin ayda en az kaç gün çalışması gerektiğini çıkar.",
      "Şirketini kur, makine sigortasını yaptır, tüm işleri yazılı sözleşmeyle al.",
      "Yağmur, kış ve iş olmayan günleri hesaba katarak 3-6 aylık nakit yedeği ayır."
    ],
    yasal: "Şahıs veya limited şirket kurulur, iş makinesi tescili ve sigortası yapılır. Operatörlük belgen (G sınıfı ehliyet ve iş makinesi operatör belgesi) güncel olmalı. Kamu işleri için fatura ve vergi borcu olmaması şarttır.",
    kazanc: "Makine düzenli çalışırsa güçlü bir gelir sağlar; çalışmazsa taksit ve masraflar hızla borç biriktirir. Kazancı 'ayda kaç gün çalışacak' sorusu belirler.",
    tuzaklar: [
      "İş bağlantısı olmadan makine almak.",
      "Tahsilat sorununu hafife almak. Müteahhitlerin ödeme geciktirmesi bu sektörün en yaygın sorunudur; avans ve ara ödeme iste.",
      "Bakımı erteleyip büyük arızayla aylarca çalışamamak."
    ],
    batanlar: [
      "Tahsilat: İş yapılıyor ama para aylarca gelmiyor; bu arada taksit ödenemiyor.",
      "Fazla borçla yeni makine almak; ikinci el ve daha küçük makineyle başlamak daha güvenli.",
      "Mevsimsellik: Kış aylarında iş azalırken taksit devam ediyor.",
      "Tek müşteriye bağımlılık: O müteahhit işi bitince makine boşta kalıyor."
    ],
    destekler: ["kosgeb", "iskurGirisim"]
  },
  {
    id: "camasirhane", baslik: "Self-servis çamaşırhane", seviye: 3, yer: ["disari"], tur: "yukselen",
    ozet: "Öğrenci ve kiracıların yoğun olduğu bölgelerde jetonlu/kartlı çamaşır ve kurutma.",
    neIs: "Profesyonel çamaşır ve kurutma makineleri olan, müşterinin kendisinin kullandığı bir dükkân. Ek hizmet olarak yıkama-katlama ve kuru temizleme teslim noktası. Avrupa'da çok yaygın, Türkiye'de yeni yayılıyor.",
    kimeUygun: "Sermayesi olan, konum seçimini iyi araştıracak ve işletmeyi yakından takip edecek kişiler.",
    sermaye: "Yüksek: profesyonel makineler, dükkân tadilatı, tesisat, kira depozitosu. Bayilik sistemiyle açılan örnekler de var.",
    ilkPara: "İlk aydan küçük gelir gelir; yatırımın geri dönmesi yıllar sürebilir.",
    adimlar: [
      "Konum araştırması: üniversite, öğrenci yurdu, küçük kiralık daireler, apart oteller. Bir hafta boyunca bölgede gözlem yap.",
      "Makine tedarikçilerinden ve bayilik veren firmalardan teklif al; mevcut işletmecilerle konuş.",
      "Su, elektrik ve doğalgaz tüketimini makine başına hesapla; fiyatı buna göre belirle.",
      "Yıkama-katlama ve otellere toplu yıkama gibi ek gelirler planla.",
      "Açılıştan önce en az 6 aylık giderleri karşılayacak nakit ayır."
    ],
    yasal: "Belediyeden işyeri açma ve çalışma ruhsatı, şirket kuruluşu ve vergi kaydı gerekir. Atık su ve elektrik projeleri için belediye ve dağıtım şirketi onayı gerekebilir.",
    kazanc: "İyi konumda istikrarlı bir gelir; yanlış konumda makineler boş kalır. Kâr, kira ve enerji fiyatlarına çok duyarlıdır.",
    tuzaklar: [
      "Kirası yüksek ama hedef kitlesi olmayan yere açmak.",
      "Enerji maliyetini hesaba katmadan ucuz fiyat koymak.",
      "Bozulan makineyi geç tamir ettirmek; müşteri bir kere mağdur olursa dönmez."
    ],
    batanlar: [
      "Yanlış konum: Bu işin kaderini neredeyse tamamen konum belirler.",
      "Enerji zamları: Fiyat güncellenmeyince kâr eriyor.",
      "Bayilik bedeli ve 'garantili kazanç' vaadi ile yüksek maliyetli başlangıç.",
      "Sadece makineye güvenip ek hizmet (yıkama-katlama, kurumsal müşteri) geliştirmemek."
    ],
    destekler: ["kosgeb", "iskurGirisim"]
  },
  {
    id: "kahve-dukkani", baslik: "Küçük kahve dükkânı", seviye: 3, yer: ["disari"], tur: "denenmis",
    ozet: "Al-götür ağırlıklı küçük bir kahve noktası.",
    neIs: "Az oturma alanlı, al-götür ağırlıklı bir kahve dükkânı. Okul, hastane, ofis ve metro çıkışlarına yakın küçük noktalar büyük kafelerden daha az risklidir.",
    kimeUygun: "Sermayesi olan, sabah erkenden akşama kadar işin başında durmaya hazır, hizmet işini seven kişiler.",
    sermaye: "Yüksek: espresso makinesi, değirmen, buzdolabı, tezgâh, dekorasyon, kira depozitosu ve ilk ayların gideri.",
    ilkPara: "İlk günden satış olur ama kârlı hale gelmek aylar alır.",
    adimlar: [
      "Bir kahve dükkânında en az birkaç ay çalış ya da barista kursuna git. İşi içeriden görmeden açma.",
      "Konumda bir hafta boyunca sabah, öğle ve akşam yaya sayımı yap.",
      "Bir fincan kahvenin maliyetini çıkar (kahve, süt, bardak, kapak, kira payı, personel, enerji).",
      "Kira sözleşmesini uzun vadeli ve artış oranı belli şekilde yap.",
      "Açılıştan önce en az 6 aylık gider kadar nakit ayır.",
      "Menüyü sade tut; az ürünle iyi kalite."
    ],
    yasal: "İşyeri açma ve çalışma ruhsatı (belediye), gıda işletme kayıt belgesi (tarım müdürlüğü), şirket kuruluşu, yazar kasa/POS, çalışan varsa SGK kaydı ve hijyen eğitim belgesi gerekir.",
    kazanc: "İyi konum ve sadık müşteriyle iyi gelir; ancak sektörde ilk iki yılda kapanan işletme oranı yüksektir.",
    tuzaklar: [
      "Dekorasyona fazla para harcayıp işletme sermayesini bitirmek.",
      "Kendi kahve sevgisini iş planı sanmak.",
      "Kira artışlarını hesaba katmamak."
    ],
    batanlar: [
      "Konum: Güzel dükkân ama önünden yeterli insan geçmiyor.",
      "Nakit sıkışıklığı: İlk aylarda zarar normaldir, yedek para yoksa kapanılıyor.",
      "Yüksek kira ve personel gideri: Ciro iyi görünürken kâr kalmıyor.",
      "Fiyatı maliyete göre değil rakibe göre belirlemek."
    ],
    destekler: ["kosgeb", "iskurGirisim", "iskurKurs"]
  },

  // ================= EK FİKİRLER (Ekim 2026) =================
  // ---------------- SIFIR SERMAYE ----------------
  {
    id: "ev-temizligi", baslik: "Ev ve ofis temizliği (bireysel)", seviye: 0, yer: ["disari"], tur: "denenmis",
    ozet: "Evlere ve küçük ofislere haftalık ya da tek seferlik temizlik.",
    neIs: "Çalışan ailelerin evlerini, küçük ofisleri, muayenehaneleri ve taşınma öncesi/sonrası boş daireleri temizlemek. Düzenli müşteri bulunduğunda haftalık sabit gelir sağlar.",
    kimeUygun: "Titiz, güvenilir, bedenen dayanıklı herkes. Deneyim şart değil, ama güven şart.",
    sermaye: "0 TL. Çoğu müşteri kendi malzemesini verir; zamanla kendi temizlik çantanı oluşturursun.",
    ilkPara: "1-2 hafta.",
    adimlar: [
      "Hangi işleri yapacağını ve yapmayacağını belirle (cam silme, ütü, derin temizlik).",
      "Saatlik ya da ev büyüklüğüne göre sabit fiyat koy; taşınma temizliğini ayrı fiyatlandır.",
      "Çevrene, site yöneticilerine ve emlakçılara haber ver; boş daire temizliği emlakçılardan gelir.",
      "İlk müşterilerden kısa bir yazılı referans ya da yorum iste.",
      "Haftanın günlerini sabit müşterilerle doldurmaya çalış; tek seferlik işler dalgalıdır."
    ],
    yasal: "Bir evde düzenli çalışıyorsan ev hizmetlerinde çalışanlar için SGK bildirimi işverenin (ev sahibinin) sorumluluğundadır; ayda 10 günden az çalışmada daha basit bir bildirim usulü vardır. Kendi adına iş yapıyorsan ve gelirin düzenliyse şahıs şirketi gerekir. Ayrıntıyı SGK'dan ve vergi dairesinden sor.",
    kazanc: "Haftada 4-5 düzenli ev ile asgari ücrete yakın, daha yoğun çalışmayla üzeri.",
    tuzaklar: [
      "Değerli eşya kaybolduğunda şüpheli durumuna düşmek. Çalıştığın evde neyin nerede olduğunu ev sahibiyle netleştir, yalnız kalmak istemiyorsan söyle.",
      "Sağlığa zararlı kimyasalları karıştırmak (çamaşır suyu + tuz ruhu gibi). Asla karıştırma.",
      "Fiyatı ev görülmeden vermek."
    ],
    destekler: ["iskurKurs", "iskurGirisim"]
  },
  {
    id: "hamallik-tasinma", baslik: "Taşınma ve hamallık yardımı", seviye: 0, yer: ["disari"], tur: "denenmis",
    ozet: "Ev ve ofis taşımalarında eşya taşıma, paketleme ve kurulum.",
    neIs: "Nakliye firmalarına yardımcı eleman olarak ya da kendi küçük ekibinle taşınanlara eşya taşıma, paketleme, mobilya söküp takma hizmeti vermek. Kamyonu olmayan da nakliyecilerle anlaşarak çalışabilir.",
    kimeUygun: "Güçlü, sağlıklı, ekip çalışmasına yatkın kişiler.",
    sermaye: "0 TL. Zamanla taşıma kemeri, battaniye, streç film ve tornavida seti (birkaç bin TL).",
    ilkPara: "Birkaç gün; nakliyecilere günlük çalışmaya hemen başlanabilir.",
    adimlar: [
      "Bölgendeki nakliye firmalarını ara ve günlük eleman ihtiyaçlarını sor; ilk deneyimi buradan kazan.",
      "Doğru kaldırma tekniğini öğren; bel sağlığın bu işin sermayesidir.",
      "2-3 kişilik güvenilir bir ekip kur.",
      "Mobilya söküp takmayı öğren; taşınmada en çok aranan beceridir.",
      "Kendi müşterini bulmaya başladığında fiyatı kat, eşya miktarı ve asansör durumuna göre ver."
    ],
    yasal: "Gezici olarak yapılan hamallık, Gelir Vergisi Kanunu'ndaki esnaf muafiyeti kapsamında sayılan işlerdendir; vergi dairesinden muafiyet belgesi alınabilir. Ekip kurup kendi adına nakliye işi almaya başladığında şirket ve sigorta gerekir.",
    kazanc: "Günlük ücretle başlar; sezonda (yaz, okul tatili) yüksek, kışın düşük. Ekip kurulunca artar.",
    tuzaklar: [
      "Kırılan eşyanın parasını ödemek zorunda kalmak. Değerli eşyaları sahibine önceden göster ve yazılı not al.",
      "Bel ve diz sakatlığı. Ağır eşyayı tek başına kaldırma.",
      "Nakliyecilerin ödemeyi geciktirmesi; günlük ödeme iste."
    ],
    destekler: ["esnafMuafiyeti", "iskurKurs"]
  },
  {
    id: "cocuk-bakimi", baslik: "Saatlik çocuk bakıcılığı ve okul çıkışı refakat", seviye: 0, yer: ["disari", "ev"], tur: "denenmis",
    ozet: "Çalışan ailelerin çocuklarına okul çıkışı, akşam ya da hafta sonu bakmak.",
    neIs: "Tam zamanlı dadılık yerine saatlik çalışmak: okul çıkışı çocuğu almak, ödevine yardım etmek, ebeveyn gelene kadar bakmak, akşam ya da hafta sonu bakıcılık.",
    kimeUygun: "Çocuklarla iyi anlaşan, sorumluluk sahibi, referans gösterebilecek kişiler. Çocuk gelişimi ya da öğretmenlik geçmişi büyük avantajdır.",
    sermaye: "0 TL.",
    ilkPara: "1-3 hafta.",
    adimlar: [
      "İlk yardım eğitimi al (Halk Eğitim ve Kızılay kursları); ailelerin en çok sorduğu belge budur.",
      "Hangi yaş grubuna bakacağını ve saatlerini belirle.",
      "Okul veli gruplarında ve mahallende tanıdıklar üzerinden duyur; bu işte güven tavsiyeyle gelir.",
      "Her aileyle kuralları baştan konuş: yemek, ekran süresi, kimin çocuğu alabileceği.",
      "Düzenli aileler bulunca haftalık sabit program yap."
    ],
    yasal: "Bir ailede düzenli çalışıyorsan SGK bildirimi ev sahibinin sorumluluğundadır. Kendi evinde birden fazla çocuğa bakıp ücret almak 'kreş' sayılabilir ve izin gerektirir; bu yüzden bakımı ailenin evinde yap.",
    kazanc: "Ek gelir olarak iyidir. Birkaç düzenli aileyle asgari ücretin yarısı ile bir katı arası.",
    tuzaklar: [
      "Çocuk yanındayken telefonla meşgul olmak; tek bir olay güveni bitirir.",
      "Ailenin izni olmadan çocuğu başka bir yere götürmek ya da fotoğrafını paylaşmak."
    ],
    destekler: ["halkEgitim", "iskurKurs"]
  },
  {
    id: "ai-urun-ilan", baslik: "Esnafa yapay zekâyla ürün fotoğrafı ve ilan hazırlama", seviye: 0, yer: ["internet", "disari"], tur: "yukselen",
    ozet: "Küçük işletmelerin ürünlerini telefonla çekip yapay zekâ araçlarıyla satışa hazır hale getirmek.",
    neIs: "Mahalledeki butik, mobilyacı, ikinci el oto galerisi ya da el emeği satıcılarının ürünlerini çekip ücretsiz/ucuz yapay zekâ araçlarıyla arka planı temizlemek, ışığı düzeltmek ve pazar yerlerine uygun açıklama yazmak. Dünyada hızla yayılan yeni bir hizmet.",
    kimeUygun: "Telefonu iyi kullanan, yeni araçları öğrenmeyi seven, düzenli çalışan kişiler. Bilgisayar ya da iyi bir telefon gerekir.",
    sermaye: "0 TL. Ücretsiz araçlarla başlanır; ileride ücretli araç aboneliği gerekebilir.",
    ilkPara: "2-4 hafta.",
    adimlar: [
      "Ücretsiz arka plan silme ve fotoğraf düzeltme araçlarını öğren; kendi eşyalarında dene.",
      "Bir işletmenin 5-10 ürününü ücretsiz hazırla ve öncesi-sonrasını göster.",
      "Ürün başı ya da aylık paket fiyatı belirle.",
      "İlan metinlerini yapay zekâyla taslak olarak yaz ama mutlaka kendin kontrol et: yanlış ölçü ya da özellik müşteriye zarar verir.",
      "Pazar yerlerinin fotoğraf kurallarını öğren (beyaz zemin, boyut, filigran yasağı)."
    ],
    yasal: "Düzenli gelirde vergi kaydı gerekir. Ürünü olduğundan farklı göstermek (rengi, kusuru gizlemek) tüketiciyi yanıltmak sayılır; düzeltme yap ama gerçeği değiştirme.",
    kazanc: "Başta ek gelir. Düzenli çalışılan birkaç işletmeyle asgari ücrete yaklaşılabilir.",
    tuzaklar: [
      "Yapay zekâ çıktısını kontrol etmeden teslim etmek.",
      "Başka markaların logolarını ya da telifli görselleri kullanmak.",
      "'Yapay zekâyla ayda şu kadar kazan' kursları satan kişilere para vermek; araçların çoğunu ücretsiz öğrenebilirsin."
    ],
    destekler: ["gencGirisim", "iskurGirisim"]
  },
  {
    id: "arac-transfer-sofor", baslik: "Araç transfer ve vale şoförlüğü", seviye: 0, yer: ["disari"], tur: "yukselen",
    ozet: "Başkasının aracını servise, galeriden alıcıya ya da şehirler arası teslim etmek.",
    neIs: "Kendi aracın olmadan, ehliyetinle çalışmak: araç kiralama firmalarının araçlarını teslim etmek, servise götürüp getirmek, galeriden satılan aracı alıcıya ulaştırmak, düğün ve etkinliklerde vale hizmeti vermek.",
    kimeUygun: "Temiz sürücü sicili olan, dakik ve güvenilir ehliyet sahipleri.",
    sermaye: "0 TL. Dönüş yolu masrafı (otobüs bileti) bazen sana kalabilir; anlaşmada netleştir.",
    ilkPara: "1-3 hafta.",
    adimlar: [
      "Araç kiralama firmaları, oto servisler, galeriler ve vale firmalarıyla görüş.",
      "Teslim alırken ve teslim ederken aracın her yerini fotoğrafla, kilometre ve yakıtı kaydet.",
      "Şehirler arası işlerde dönüş masrafının kime ait olduğunu baştan yazılı belirle.",
      "Düzenli çalıştığın firmalara 'aynı gün teslim' gibi hız sözü ver ve tut."
    ],
    yasal: "Bir firmaya bağlı çalışıyorsan sigortalı olmalısın. Kendi adına iş alıyorsan şahıs şirketi gerekir. Aracın kasko ve sigortasının seni kapsayıp kapsamadığını araç sahibine sor; kapsamıyorsa yola çıkma.",
    kazanc: "İş başına ödeme; düzenli firmalarla ek gelirden asgari ücrete kadar.",
    tuzaklar: [
      "Teslimde fotoğraf çekmemek; önceki hasar sana yüklenebilir.",
      "Trafik cezasının kime ait olduğunu konuşmamak."
    ],
    destekler: ["iskurGirisim"]
  },

  // ---------------- AZ SERMAYE ----------------
  {
    id: "terzi-tadilat", baslik: "Evde terzilik ve kıyafet tadilatı", seviye: 1, yer: ["ev"], tur: "denenmis",
    ozet: "Paça kısaltma, fermuar değişimi, daraltma gibi tadilat işleri.",
    neIs: "Hazır giyim yaygınlaştıkça tadilat ihtiyacı arttı: paça, kol kısaltma, daraltma, fermuar ve astar değişimi, perde dikimi. Evde bir köşede başlanabilir, sonra küçük bir dükkâna dönüşebilir.",
    kimeUygun: "Dikiş bilen ya da Halk Eğitim kursuyla öğrenmeye hazır, sabırlı ve titiz kişiler.",
    sermaye: "8-20 bin TL: dikiş makinesi (ikinci el olabilir), overlok (ileride), makas, mezura, iplik ve sarf malzemesi.",
    ilkPara: "1-3 hafta (bilen için). Öğrenecek olan için kurs süresi eklenir.",
    adimlar: [
      "Bilmiyorsan Halk Eğitim'in ücretsiz dikiş-nakış ve tadilat kurslarına katıl.",
      "Fiyat listesi yap: paça, fermuar, daraltma, perde metre başı.",
      "Kuru temizlemeciler ve butiklerle anlaş; tadilat işlerini sana yönlendirebilirler.",
      "Teslim tarihine sadık kal; bu işte müşteri en çok gecikmeye kızar.",
      "Düğün ve bayram öncesi yoğunluğa hazırlıklı ol."
    ],
    yasal: "Evde yapılan terzilik esnaf muafiyeti kapsamında değerlendirilebilir; vergi dairesine sor. Dükkân açınca belediye ruhsatı, vergi kaydı ve meslek odası kaydı gerekir.",
    kazanc: "Ek gelirle başlar; dükkân ve düzenli kuru temizleme bağlantılarıyla asgari ücretin üzerine çıkılabilir.",
    tuzaklar: [
      "Pahalı kumaşı (deri, ipek) deneyimsizken kesmek.",
      "Teslim alırken müşterinin ölçüsünü ve isteğini yazmamak."
    ],
    destekler: ["halkEgitim", "esnafMuafiyeti", "belediye"]
  },
  {
    id: "mobil-guzellik", baslik: "Eve gelen kuaför ve manikür hizmeti", seviye: 1, yer: ["disari"], tur: "yukselen",
    ozet: "Saç, manikür, kaş-kirpik gibi hizmetleri müşterinin evinde vermek.",
    neIs: "Dükkân kirası ödemeden, çantanla müşterinin evine gitmek: yaşlılar, yeni anneler, düğün hazırlığındaki gelinler ve vakti olmayan çalışanlar ana müşterilerdir.",
    kimeUygun: "Kuaförlük ya da güzellik alanında deneyimi veya belgesi olan, iletişimi güçlü kişiler.",
    sermaye: "8-20 bin TL: taşınabilir set (fön makinesi, maşa, manikür seti, sterilizatör), kaliteli ürünler, taşıma çantası.",
    ilkPara: "1-3 hafta.",
    adimlar: [
      "Belgen yoksa Halk Eğitim ya da İŞKUR kuaförlük/güzellik kursuna katıl.",
      "Hizmet listesi ve fiyatı yaz; yol ücretini ve bölgeni belirt.",
      "Sterilizasyonu ciddiye al; aletlerini her müşteriden sonra temizle ve bunu müşteriye göster.",
      "Sosyal medyada önce-sonra fotoğraflarıyla (müşterinin izniyle) tanıt.",
      "Düğün sezonunda gelin paketleri hazırla."
    ],
    yasal: "Düzenli gelirde şahıs şirketi gerekir. Kuaförlük ve güzellik meslekleri için ustalık/mesleki yeterlilik belgesi istenebilir. Hijyen kurallarına uymak hem yasal hem sağlık açısından zorunludur.",
    kazanc: "Düzenli müşteri ve düğün sezonuyla asgari ücretin bir ile iki katı arası.",
    tuzaklar: [
      "Hijyeni ihmal edip enfeksiyona yol açmak.",
      "Yol süresini fiyata katmamak; uzak ilçelere giderken zarar etmek."
    ],
    destekler: ["halkEgitim", "iskurKurs", "ustalik"]
  },
  {
    id: "koy-urunleri", baslik: "Köy ürünleri aracılığı", seviye: 1, yer: ["internet", "disari"], tur: "denenmis",
    ozet: "Köydeki üreticilerin peynir, bal, yumurta, zeytinyağı gibi ürünlerini şehirdeki ailelere ulaştırmak.",
    neIs: "Memleketindeki ya da yakındaki köy üreticileriyle anlaşıp ürünlerini şehirde sipariş usulüyle satmak. Asıl değer, güvenilir kaynak ve düzenli teslimattır.",
    kimeUygun: "Köyle bağı olan, güvenilir üretici tanıyan, teslimat organize edebilen kişiler.",
    sermaye: "5-20 bin TL: ilk ürün alımı, ambalaj, soğuk zincir için buzluk/çanta.",
    ilkPara: "2-4 hafta.",
    adimlar: [
      "Az sayıda ürünle başla (ör. peynir ve yumurta) ve kaliteyi kendin tadarak kontrol et.",
      "Üreticinin ürününün yasal olarak satılabilir olup olmadığını öğren (kayıtlı işletme, etiket).",
      "Çevrende ve iş yerlerinde 'haftalık sipariş günü' kur; siparişi topla, sonra al.",
      "Fiyatı alış + yol + ambalaj + kendi emeğin üzerine koy.",
      "Şikâyet olursa üreticiyle birlikte çöz; tek kötü ürün tüm müşteri listesini kaybettirir."
    ],
    yasal: "Gıda satışı sıkı kurallara tabidir. Kayıtsız üretilen süt ürünü ve et satmak hem yasal risk hem sağlık riskidir. Üreticinin işletme kayıt belgesi ve ürün etiketi olmalı; il/ilçe tarım müdürlüğüne danış. Kendi adına düzenli satışta vergi kaydı gerekir.",
    kazanc: "Ek gelir olarak başlar; düzenli müşteri listesiyle istikrarlı gelir sağlar.",
    tuzaklar: [
      "Soğuk zinciri bozmak (yazın peynir, et).",
      "'Köy ürünü' diye market ürünü satan aracılara ürün almak; üreticiyi kendin tanı.",
      "Kayıtsız ürünle tüketici şikâyetine muhatap olmak."
    ],
    destekler: ["tarimDestek", "iskurGirisim", "kosgeb"]
  },
  {
    id: "mobil-arac-yikama", baslik: "Mobil ve susuz araç yıkama", seviye: 1, yer: ["disari"], tur: "yukselen",
    ozet: "Otoparkta, iş yerinde ya da sitede aracı az suyla veya susuz yıkamak.",
    neIs: "Araç sahibinin yanına giderek özel ürünlerle susuz ya da az sulu dış yıkama ve iç temizlik yapmak. Plazalar, siteler ve filo araçları en iyi müşterilerdir. Su tasarrufu nedeniyle dünyada yaygınlaşıyor.",
    kimeUygun: "Titiz, düzenli, açık havada çalışabilen kişiler.",
    sermaye: "10-20 bin TL: susuz yıkama solüsyonu, mikrofiber bezler, akülü süpürge, küçük basınçlı püskürtücü, taşıma arabası.",
    ilkPara: "1-3 hafta.",
    adimlar: [
      "Ürünleri ve tekniği öğren; yanlış bezle çizik yapmak en büyük risktir.",
      "Site ve plaza yönetimlerinden çalışma izni al; otopark sahibinin onayı olmadan çalışma.",
      "Aylık abonelik paketi sun (ör. haftada bir dış yıkama).",
      "Filo araç sahibi şirketlere (kurye, servis, kiralık araç) toplu fiyat ver."
    ],
    yasal: "Şahıs şirketi gerekir; kurumsal müşteriler fatura ister. Atık suyu yağmur ızgarasına akıtmak belediye kurallarına aykırı olabilir; susuz yöntem bu yüzden avantajlıdır.",
    kazanc: "Abonelik müşterileriyle düzenli gelir; asgari ücretin bir katı civarı gerçekçidir.",
    tuzaklar: [
      "Çok kirli (çamurlu) aracı susuz yıkamaya çalışıp boyayı çizmek.",
      "Otopark izni almadan çalışıp kovulmak."
    ],
    destekler: ["iskurGirisim", "kosgeb"]
  },
  {
    id: "bisiklet-scooter-tamir", baslik: "Bisiklet ve elektrikli scooter tamiri", seviye: 1, yer: ["disari", "ev"], tur: "yukselen",
    ozet: "Bisiklet bakımı, lastik, fren, batarya ve motor arızaları.",
    neIs: "Şehirlerde bisiklet ve elektrikli scooter sayısı arttı ama tamirci az. Lastik, fren, vites ayarı gibi temel bakımdan başlayıp elektrikli araçların batarya ve kontrol kartı arızalarına uzanan bir iş.",
    kimeUygun: "Mekaniğe meraklı, elinden iş gelen kişiler. Elektrik-elektronik bilgisi büyük avantaj.",
    sermaye: "8-20 bin TL: bisiklet tamir standı, takım seti, pompa, multimetre, sık değişen parçalar.",
    ilkPara: "2-6 hafta.",
    adimlar: [
      "Temel bisiklet bakımını video ve kurslarla öğren; kendi bisikletlerinde pratik yap.",
      "Önce mobil hizmet ver: eve ya da iş yerine gidip yerinde bakım.",
      "Kurye firmaları ve paylaşımlı scooter işletmeleriyle düzenli bakım anlaşması ara.",
      "Batarya işinde dikkatli ol: lityum bataryalar yanlış işlemde yangın çıkarır; eğitim almadan açma."
    ],
    yasal: "Düzenli gelirde şahıs şirketi; dükkân açınca belediye ruhsatı gerekir. Elektrikli scooter'larda yapılan hız sınırı değişiklikleri yasaya aykırı olabilir; bu tür istekleri kabul etme.",
    kazanc: "İlkbahar-yaz yoğun, kış sakin. Kurumsal bakım anlaşmalarıyla asgari ücretin üzerine çıkabilir.",
    tuzaklar: [
      "Lityum bataryayı bilinçsizce açmak ya da şarj etmek.",
      "Ucuz, sertifikasız parça kullanmak; fren arızası kazaya yol açar."
    ],
    destekler: ["iskurKurs", "halkEgitim", "kosgeb"]
  },
  {
    id: "semt-pazari", baslik: "Semt pazarında tezgâh", seviye: 1, yer: ["disari"], tur: "denenmis",
    ozet: "Haftalık semt pazarlarında meyve-sebze, giyim ya da ev eşyası satmak.",
    neIs: "Belediyenin semt pazarlarında tezgâh açıp hal ya da toptancıdan aldığın ürünleri satmak. Düşük sermayeyle başlanan, emek yoğun ama nakit dönen bir iş.",
    kimeUygun: "Erken kalkabilen, pazarlıkta iyi, bedenen dayanıklı kişiler.",
    sermaye: "10-20 bin TL: ilk mal, tezgâh malzemesi, tente, terazi. Aracın yoksa nakliye ücreti.",
    ilkPara: "İlk pazar gününden.",
    adimlar: [
      "Belediyenin zabıta ya da pazar yerleri müdürlüğünden tezgâh tahsis şartlarını öğren; çoğu yerde sıra ve kura vardır.",
      "Bir pazarcının yanında birkaç hafta çalışarak hal alışverişini ve fiyatlamayı öğren.",
      "Az çeşitle başla; çabuk bozulan üründe ne kadar alacağını öğrenmek zaman alır.",
      "Her gün alış-satış ve fire kaydı tut."
    ],
    yasal: "Pazar yeri işgal izni belediyeden alınır. Pazarcılar esnaf ve sanatkâr olarak kayıt yaptırır; meyve-sebzede hal kayıt sistemi kuralları vardır. Etiket ve fiyat gösterme zorunludur.",
    kazanc: "Ürüne ve semte göre değişir; iyi yerde asgari ücretin üzerinde, kötü havada ve kötü yerde düşük.",
    tuzaklar: [
      "Fazla mal alıp fire vermek.",
      "İzinsiz tezgâh açıp malına el konulması.",
      "Tartıda hile; hem suç hem itibar kaybı."
    ],
    destekler: ["iskurGirisim", "kosgeb"]
  },

  // ---------------- ORTA SERMAYE ----------------
  {
    id: "urun-fotografciligi", baslik: "Ürün, emlak ve etkinlik fotoğrafçılığı", seviye: 2, yer: ["disari", "internet"], tur: "denenmis",
    ozet: "E-ticaret satıcılarına, emlakçılara ve etkinliklere fotoğraf ve kısa video.",
    neIs: "İnternetten satış yapanlara ürün fotoğrafı, emlakçılara ev fotoğrafı ve kısa tanıtım videosu, okullara ve şirketlere etkinlik çekimi. Düğün fotoğrafçılığına göre daha az rekabetli ve daha düzenli.",
    kimeUygun: "Görsel yeteneği olan, ışığı ve kompozisyonu öğrenmeye istekli kişiler.",
    sermaye: "40-120 bin TL: fotoğraf makinesi ve lens (ikinci el olabilir), ışık seti, tripod, ürün çekimi için çadır, düzenleme yazılımı.",
    ilkPara: "1-2 ay.",
    adimlar: [
      "Bir alanda uzmanlaş: ürün, emlak ya da etkinlik.",
      "10-15 iş örneğinden oluşan bir portföy hazırla (ücretsiz ya da indirimli ilk işlerle).",
      "Emlak ofislerine 'ilan başı fotoğraf + video' paketi sun; düzenli iş getirir.",
      "Teslim süresini kısa tut; e-ticarette 48 saat iyi bir sözdür.",
      "Her iş için sözleşme yap: kaç fotoğraf, kaç düzeltme, kullanım hakkı."
    ],
    yasal: "Serbest meslek kazancı; vergi kaydı ve fatura gerekir. İnsan fotoğraflarında çekilen kişinin izni şarttır. Drone kullanacaksan SHGM kaydı ve izinleri gerekir.",
    kazanc: "Düzenli emlakçı ve satıcı müşterileriyle asgari ücretin bir ile iki katı arası.",
    tuzaklar: [
      "En pahalı ekipmanla başlamak; ikinci el ve orta seviye yeterlidir.",
      "Sınırsız düzeltme kabul etmek.",
      "Fotoğrafların kullanım hakkını belirsiz bırakmak."
    ],
    destekler: ["kosgeb", "gencGirisim", "iskurGirisim"]
  },
  {
    id: "aricilik", baslik: "Arıcılık", seviye: 2, yer: ["disari"], tur: "denenmis",
    ozet: "Kovan kurup bal, polen, propolis üretmek ve satmak.",
    neIs: "Arı kovanlarında bal ve diğer arı ürünlerini üretmek. Gezgin arıcılık (kovanları mevsime göre taşımak) verimi artırır. Kırsala yakın yaşayanlar için uygun.",
    kimeUygun: "Doğada çalışmayı seven, arı sokmasına alerjisi olmayan, sabırlı kişiler.",
    sermaye: "30-100 bin TL: 10-20 kovan, arı, koruyucu kıyafet, bal sağım makinesi, şurup ve ilaç.",
    ilkPara: "İlk hasat sezonunda (genelde 6-12 ay).",
    adimlar: [
      "Halk Eğitim ya da tarım müdürlüğünün arıcılık kursuna katıl; bir arıcının yanında bir sezon çalış.",
      "Alerji testi yaptır.",
      "Az kovanla başla (10 civarı) ve ilk yıl kayıp yaşamaya hazırlıklı ol.",
      "Arıcılık kayıt sistemine kaydol; destekler bu kayda bağlıdır.",
      "Balını analiz ettir ve etiketle; analizli bal daha iyi fiyata satılır."
    ],
    yasal: "Arıcılık Kayıt Sistemi'ne kayıt zorunludur. Satışta bal analizi ve etiket kuralları vardır. Tarım ve Orman Bakanlığı'nın arıcılık desteklerine bak.",
    kazanc: "Mevsime ve verime çok bağlı; ilk yıllarda ek gelir, kovan sayısı arttıkça ana gelire dönüşebilir.",
    tuzaklar: [
      "Varroa gibi hastalıkları geç fark edip kovanları kaybetmek.",
      "Kovan yerini tarım ilaçlaması yapılan alanlara yakın seçmek.",
      "Şeker şurubuyla beslenen arının balını 'süzme çiçek balı' diye satmak; bu tağşiştir."
    ],
    destekler: ["tarimDestek", "halkEgitim", "kosgeb"]
  },
  {
    id: "klima-kombi-servis", baslik: "Klima ve kombi bakım servisi", seviye: 2, yer: ["disari"], tur: "denenmis",
    ozet: "Yıllık kombi bakımı, klima montajı, temizliği ve gaz dolumu.",
    neIs: "Kombilerin yıllık bakımı, klimaların montajı, sökümü, temizliği ve gaz dolumu. Mevsimsel ama sürekli talep gören teknik bir iş.",
    kimeUygun: "Tesisat ya da elektrik geçmişi olan, teknik belgesini almaya hazır kişiler.",
    sermaye: "30-80 bin TL: vakum pompası, manifold, kaçak dedektörü, kombi bakım seti, ölçü aletleri. Araç gerekebilir.",
    ilkPara: "1-2 ay (belge süresi hariç).",
    adimlar: [
      "Gerekli belgeleri al: soğutucu akışkanla çalışmak için sertifika, doğalgaz işleri için gaz dağıtım şirketinin yetkisi gerekir.",
      "Bir servis firmasında çalışarak deneyim kazan.",
      "Sonbaharda kombi bakımı, ilkbaharda klima bakımı kampanyası yap.",
      "Site yönetimleriyle toplu bakım anlaşması yap.",
      "Her bakımdan sonra bir sonraki bakım tarihini müşterine hatırlat."
    ],
    yasal: "Soğutucu gaz (F-gaz) ile çalışmak için yetki belgesi gerekir. Doğalgaz tesisatına müdahale yalnızca yetkili firmalarca yapılabilir; yetkisiz müdahale hayati tehlike ve suçtur. Şahıs şirketi ve ustalık belgesi gerekir.",
    kazanc: "Mevsimsel yoğunlukla birlikte asgari ücretin bir buçuk ile üç katı arası mümkündür.",
    tuzaklar: [
      "Belgesiz doğalgaz işine girmek.",
      "Gazı havaya boşaltmak (hem çevreye zararlı hem yasak).",
      "Garanti kapsamındaki cihaza müdahale edip garantiyi bozmak."
    ],
    destekler: ["iskurKurs", "ustalik", "kosgeb"]
  },
  {
    id: "etkinlik-kiralama", baslik: "Etkinlik ekipmanı kiralama", seviye: 2, yer: ["disari"], tur: "denenmis",
    ozet: "Masa, sandalye, çadır, ses sistemi gibi ekipmanları düğün ve etkinliklere kiralamak.",
    neIs: "Kır düğünleri, nişanlar, mevlitler, okul ve şirket etkinlikleri için masa, sandalye, çadır, ısıtıcı, ses sistemi ve dekorasyon kiralamak; kurulumu ve toplamayı yapmak.",
    kimeUygun: "Organizasyon yeteneği olan, hafta sonu çalışabilen, depolama alanı ve aracı olan kişiler.",
    sermaye: "50-150 bin TL: ilk ekipman seti, depo, taşıma (kendi aracın ya da kiralık).",
    ilkPara: "1-2 ay (sezona bağlı).",
    adimlar: [
      "Bölgendeki talebi araştır: kır düğünü mü, mevlit mi, şirket etkinliği mi?",
      "En çok istenen ekipmanla başla; az ama kaliteli.",
      "Düğün salonları, organizatörler ve aşçılarla iş birliği yap.",
      "Kiralama sözleşmesi ve hasar bedeli kuralı hazırla.",
      "Ekipmanı her işten sonra temizle ve say."
    ],
    yasal: "Şahıs şirketi ve fatura gerekir. Çadır ve elektrikli ekipmanda güvenlik kurallarına uy; açık alanda elektrik bağlantısını yetkili elektrikçiye yaptır.",
    kazanc: "Yaz sezonunda yüksek, kışın düşük. Ekipman kendini birkaç sezonda öder.",
    tuzaklar: [
      "Kış aylarını hesaba katmamak.",
      "Hasarlı dönen ekipmanın bedelini almamak.",
      "Depolama maliyetini unutmak."
    ],
    destekler: ["kosgeb", "iskurGirisim"]
  },
  {
    id: "3d-yazici", baslik: "3D yazıcıyla yedek parça ve özel ürün üretimi", seviye: 2, yer: ["ev", "internet"], tur: "yukselen",
    ozet: "Bulunamayan plastik yedek parçaları, maketleri ve kişiye özel ürünleri 3D yazıcıyla üretmek.",
    neIs: "Kırılan ve artık satılmayan plastik parçaları (beyaz eşya düğmesi, araba iç trim klipsi, oyuncak parçası) ölçüp çizerek basmak; mimarlara maket, esnafa tabela harfi, kişiye özel hediyelik üretmek.",
    kimeUygun: "Teknolojiye meraklı, ölçü alıp bilgisayarda çizim yapmayı öğrenmeye hazır kişiler.",
    sermaye: "20-60 bin TL: 3D yazıcı, filamentler, kumpas, bilgisayar (ücretsiz çizim programları yeterli).",
    ilkPara: "1-3 ay (öğrenme süresi dahil).",
    adimlar: [
      "Ücretsiz 3D çizim programlarını öğren; basit bir parçayı ölçüp çizmeyi dene.",
      "Hazır model sitelerinden basarak yazıcını tanı.",
      "Yerel tamircilere (beyaz eşya, oto) 'bulunamayan parça' hizmetini tanıt.",
      "Satışa sunduğun ürünlerin telif durumuna dikkat et; başkasının modelini izinsiz satma.",
      "Hangi malzemenin (PLA, PETG, ABS) hangi işe uygun olduğunu öğren; ısıya dayanmayan parça şikâyet getirir."
    ],
    yasal: "Düzenli satışta vergi kaydı gerekir. Marka logosu, karakter ya da tescilli tasarımı izinsiz üretip satmak yasaktır. Güvenlik parçası (fren, kask, çocuk koltuğu) asla basma.",
    kazanc: "Ek gelirle başlar. Yedek parça ve maket işinde iyi müşteri bulunursa düzenli gelire döner.",
    tuzaklar: [
      "Güvenlik açısından kritik parça üretmek.",
      "Telifli figür satmak.",
      "Baskı süresini fiyata katmamak; bazı parçalar saatler sürer."
    ],
    destekler: ["gencGirisim", "kosgeb", "iskurGirisim"]
  },
  {
    id: "ekipman-kiralama", baslik: "Küçük inşaat ekipmanı kiralama", seviye: 2, yer: ["disari"], tur: "denenmis",
    ozet: "Kırıcı, karot makinesi, beton mikseri, iskele gibi ekipmanları ustalara ve ev sahiplerine kiralamak.",
    neIs: "Ustaların ve tadilat yapan ev sahiplerinin kısa süreli ihtiyaç duyduğu ekipmanları günlük ya da haftalık kiralamak. İnşaat sektöründen gelenler için tanıdık bir iş.",
    kimeUygun: "İnşaat sektörünü bilen, ekipmanın bakımını yapabilen, depo alanı olan kişiler.",
    sermaye: "50-150 bin TL: ilk ekipmanlar (kırıcı, karot, mikser, iskele seti, jeneratör), küçük depo, taşıma.",
    ilkPara: "2-4 hafta.",
    adimlar: [
      "Bölgendeki ustalara en çok neyi kiralayamadıklarını sor; o ekipmanla başla.",
      "Kiralama sözleşmesi, depozito ve hasar kuralı hazırla; kimlik fotokopisi al.",
      "Her teslimde ekipmanın çalıştığını müşterinin önünde göster.",
      "Ekipmanı her dönüşte kontrol et ve bakımını yap.",
      "Hırdavatçılar ve yapı marketlerle müşteri yönlendirme anlaşması yap."
    ],
    yasal: "Şahıs şirketi ve fatura gerekir. Ekipmanın güvenli kullanımı için kullanım talimatı ver; iskele kurulumunda iş güvenliği kuralları geçerlidir.",
    kazanc: "Ekipman sayısı ve doluluk oranına bağlı; iyi işleyen bir kiralama işi düzenli gelir sağlar.",
    tuzaklar: [
      "Depozitosuz kiralayıp ekipmanı geri alamamak.",
      "Bakımsız ekipmanla kazaya sebep olmak.",
      "Çalınma riskine karşı sigorta yaptırmamak."
    ],
    destekler: ["kosgeb", "iskurGirisim"]
  },

  // ---------------- YATIRIM ----------------
  {
    id: "hafriyat-kamyonu", baslik: "Damperli kamyonla hafriyat ve malzeme taşımacılığı", seviye: 3, yer: ["disari"], tur: "denenmis",
    ozet: "Kendi damperli kamyonunla şantiyelere hafriyat, kum, çakıl taşımak.",
    neIs: "Damperli kamyon alıp hafriyat firmalarına, müteahhitlere ve belediye işlerine sefer ya da gün usulüyle çalışmak. Şoförlük ve iş makinesi tecrübesi olanlar için doğal bir sonraki adım.",
    kimeUygun: "Ağır vasıta ehliyeti ve tecrübesi olan, sektörde bağlantısı bulunan kişiler.",
    sermaye: "Yüksek: ikinci el damperli kamyon milyonlarca TL tutabilir; ayrıca sigorta, muayene, lastik ve yakıt sermayesi gerekir. Leasing ve kredi seçenekleri yaygındır.",
    ilkPara: "İlk sözleşmeyle 1 ay içinde; ama taksit ilk aydan başlar.",
    adimlar: [
      "Bölgendeki hafriyat ve inşaat yoğunluğunu araştır; büyük projelerin takvimini öğren.",
      "Almadan önce en az bir düzenli iş bağlantısı (hafriyat firması, müteahhit) bul.",
      "İkinci el kamyonu bağımsız ustaya ekspertiz ettir; damper ve şasi durumuna bak.",
      "Yakıt, lastik, bakım, sigorta ve taksiti toplayıp ayda kaç sefer yapman gerektiğini hesapla.",
      "Gerekli yetki belgelerini ve hafriyat taşıma izinlerini al.",
      "En az 3 aylık gideri karşılayacak nakit ayır."
    ],
    yasal: "Ticari taşımacılık için şirket ve Ulaştırma Bakanlığı yetki belgesi gerekir. Hafriyat taşımak için belediyelerin ayrıca hafriyat taşıma izni ve döküm sahası kuralları vardır. Aşırı yük cezaları yüksektir.",
    kazanc: "Kamyon düzenli çalışırsa güçlü gelir sağlar. Yakıt fiyatı, tahsilat ve sefer sayısı kârı belirler.",
    tuzaklar: [
      "Tahsilatı aylarca geciktiren müteahhitlerle çalışmak.",
      "Aşırı yükleme ile ceza ve kamyona zarar.",
      "Yakıt fiyatı artışlarını sözleşmeye yansıtmamak."
    ],
    batanlar: [
      "Tahsilat: Sefer yapılıyor, para gelmiyor; taksit ödenemiyor.",
      "İnşaat durgunluğu: Projeler durunca kamyon günlerce boşta kalıyor.",
      "Yakıt ve lastik maliyetinin fiyata yansıtılmaması.",
      "Büyük bir arıza ile haftalarca çalışamamak ve yedek nakdin olmaması."
    ],
    destekler: ["kosgeb", "iskurGirisim"]
  },
  {
    id: "hali-yikama-fabrikasi", baslik: "Halı ve koltuk yıkama fabrikası", seviye: 3, yer: ["disari"], tur: "denenmis",
    ozet: "Evden alıp makineli tesiste yıkayıp geri teslim eden halı yıkama işletmesi.",
    neIs: "Halıları evden toplayıp tesiste makinelerle yıkamak, kurutmak ve ambalajlayıp teslim etmek. Yerinde koltuk yıkama da ek hizmet olarak sunulur.",
    kimeUygun: "İşletme yönetebilecek, personel çalıştırabilecek ve sermayesi olan kişiler.",
    sermaye: "Yüksek: halı yıkama makinesi, sıkma (santrifüj) ve kurutma ekipmanı, uygun büyüklükte işyeri, servis aracı.",
    ilkPara: "İlk aydan; ama yatırımın geri dönmesi uzun sürebilir.",
    adimlar: [
      "Bölgedeki rakipleri ve fiyatlarını incele; hizmet farkı yarat (hızlı teslim, kokusuz kurutma gibi).",
      "Su, elektrik ve atık su altyapısı uygun bir yer seç; kurutma için havalandırma şart.",
      "Makine tedarikçilerinden teklif al, mevcut işletmecilerle konuş.",
      "Teslim alırken halının ölçüsünü, kusurunu ve lekesini fotoğrafla kayda geçir.",
      "Bayram öncesi yoğunluğa göre kapasite ve personel planla."
    ],
    yasal: "İşyeri açma ve çalışma ruhsatı, atık su izinleri, şirket kuruluşu, personel için SGK ve iş güvenliği yükümlülükleri vardır.",
    kazanc: "Sezona çok bağlı; bayram öncesi ve bahar yoğun. İyi yönetilirse istikrarlı gelir.",
    tuzaklar: [
      "Halının boyasının akması ve zararı ödemek; yıkamadan önce test et.",
      "Kurutma kapasitesini düşük tutup teslimleri geciktirmek."
    ],
    batanlar: [
      "Teslim gecikmeleri ve kötü kokulu teslimatla itibar kaybı.",
      "Yüksek enerji ve su maliyetini fiyata yansıtamamak.",
      "Sezon dışı aylarda sabit giderleri karşılayamamak.",
      "Hasar tazminatları."
    ],
    destekler: ["kosgeb", "iskurGirisim"]
  },
  {
    id: "topraksiz-tarim", baslik: "Topraksız tarım ve modern sera", seviye: 3, yer: ["disari"], tur: "yukselen",
    ozet: "Topraksız (hidroponik) ya da modern serada yeşillik, domates, çilek gibi ürünler yetiştirmek.",
    neIs: "Toprak yerine besin çözeltisi kullanılan sistemlerde ya da iklim kontrollü modern seralarda daha az suyla daha çok ürün yetiştirmek. Marul, roka, fesleğen gibi yeşillikler hızlı döner; restoran ve marketler alıcıdır.",
    kimeUygun: "Tarıma ilgi duyan, teknik takip yapabilen, arazi veya kapalı alanı olan kişiler.",
    sermaye: "Yüksek: sera ya da kapalı alan, topraksız sistem, pompa, aydınlatma ve iklim ekipmanı. Küçük deneme sistemi daha ucuza kurulabilir.",
    ilkPara: "İlk hasatla 1,5-3 ay (yeşilliklerde).",
    adimlar: [
      "Önce küçük bir deneme sistemi kur ve bir sezon boyunca öğren.",
      "Ürünü kime satacağını önceden bul: restoran, market, yerel manav.",
      "Enerji maliyetini hesapla; aydınlatma ve ısıtma kârı belirler.",
      "Tarım müdürlüğünün hibe ve kırsal kalkınma programlarını takip et.",
      "Kademeli büyü."
    ],
    yasal: "Çiftçi Kayıt Sistemi'ne kayıt, sera için gerekli izinler ve satışta etiket/fatura kuralları vardır. Hibe programlarının şartlarını önceden öğren.",
    kazanc: "Alıcı ve enerji maliyetine çok bağlı. Doğru kurulan küçük sistemler bile istikrarlı gelir sağlayabilir.",
    tuzaklar: [
      "Alıcı bulmadan büyük yatırım yapmak.",
      "Enerji faturasını hafife almak.",
      "Hastalık ve pH kontrolünü ihmal edip tüm ürünü kaybetmek."
    ],
    batanlar: [
      "Yüksek kurulum maliyeti ve uzun geri dönüş süresi.",
      "Enerji maliyetlerinin kârı yemesi.",
      "Satış kanalının oturmaması; ürün tarlada çürüyor.",
      "Teknik bilgi eksikliğiyle ilk sezonlarda ürün kaybı."
    ],
    destekler: ["tarimDestek", "kosgeb"]
  },
  {
    id: "sarj-istasyonu", baslik: "Elektrikli araç şarj noktası", seviye: 3, yer: ["disari"], tur: "yukselen",
    ozet: "Otopark, otel, AVM ya da yol üstü işletmede elektrikli araç şarj cihazı işletmek.",
    neIs: "Elektrikli araç sayısı hızla artıyor. Mevcut bir işletmen (otopark, otel, restoran, benzin istasyonu) varsa şarj cihazı kurup ek gelir elde etmek ya da bir şarj ağının bayisi/iş ortağı olmak.",
    kimeUygun: "Uygun konumda yeri olan ya da yer kiralayabilen, uzun vadeli yatırım düşünen kişiler.",
    sermaye: "Yüksek: hızlı şarj cihazları ve elektrik altyapısı (trafo, kablolama) ciddi yatırım ister. Yavaş (AC) şarj cihazları daha ucuzdur.",
    ilkPara: "Kurulumdan hemen sonra; ama geri dönüş birkaç yıl sürebilir.",
    adimlar: [
      "Konumu araştır: yol üstü, otel, AVM ve site otoparkları öne çıkar.",
      "Şarj ağı firmalarının iş ortaklığı modellerini karşılaştır (yatırımı kim yapıyor, gelir nasıl paylaşılıyor).",
      "Elektrik dağıtım şirketinden bağlantı gücü ve maliyet bilgisi al.",
      "Lisans ve yetki gerekliliklerini EPDK düzenlemelerinden kontrol et.",
      "Bekleme süresince müşterinin harcama yapabileceği bir işletmeyle birleştir (kafe, market)."
    ],
    yasal: "Şarj hizmeti EPDK düzenlemelerine tabidir; şarj ağı işletmeciliği için lisans gerekir. Küçük işletmeler genelde lisanslı bir ağın iş ortağı olarak çalışır.",
    kazanc: "Konuma ve kullanım oranına bağlı. Bugün düşük kullanım, araç sayısı arttıkça yükselir.",
    tuzaklar: [
      "Kullanımı düşük bir konuma pahalı hızlı şarj cihazı kurmak.",
      "Elektrik altyapı maliyetini hesaba katmamak.",
      "Sözleşmedeki gelir paylaşımını anlamadan imzalamak."
    ],
    batanlar: [
      "Yanlış konum: Cihaz kuruluyor ama araç gelmiyor.",
      "Elektrik fiyatlarındaki artışın satış fiyatına yansıtılamaması.",
      "Bakım ve arıza süresinde cihazın çalışmaması."
    ],
    destekler: ["kosgeb"]
  },
  {
    id: "oto-detayli-bakim", baslik: "Oto kuaför ve detaylı bakım dükkânı", seviye: 3, yer: ["disari"], tur: "denenmis",
    ozet: "Araçlara detaylı iç-dış temizlik, pasta-cila, seramik kaplama ve koruma filmi uygulamak.",
    neIs: "Sıradan oto yıkamanın ötesinde, araç boyasını yenileyen pasta-cila, seramik kaplama, boya koruma filmi, cam filmi ve detaylı iç temizlik hizmeti veren dükkân.",
    kimeUygun: "Araçlara meraklı, titiz, teknik eğitim almaya hazır ve sermayesi olan kişiler.",
    sermaye: "Yüksek: uygun dükkân ve kira depozitosu, ışıklandırma, makineler (polisaj, buharlı temizlik, kompresör), malzeme ve eğitim.",
    ilkPara: "İlk aydan; düzenli müşteri birikmesi aylar alır.",
    adimlar: [
      "Bir detaylı bakım dükkânında çalış ya da sertifikalı eğitim al; seramik kaplama ve film uygulaması deneyim ister.",
      "Kaliteli ışıklandırmaya yatırım yap; çiziği görmeden düzeltemezsin.",
      "Galeriler ve ikinci el araç satıcılarıyla anlaş; satış öncesi bakım düzenli iş getirir.",
      "Her işin önce-sonra fotoğrafını çek ve sosyal medyada paylaş.",
      "Fiyatları araç büyüklüğüne ve boyanın durumuna göre kademelendir."
    ],
    yasal: "İşyeri ruhsatı, şirket kuruluşu, atık su ve kimyasal atık kurallarına uyum gerekir. Cam filmi uygulamalarında karayolu trafik mevzuatındaki geçirgenlik sınırlarına uy.",
    kazanc: "İyi itibarla yüksek kâr marjlı bir iştir; ama müşteri kazanmak zaman alır.",
    tuzaklar: [
      "Deneyimsizken boyayı yakmak ve araç sahibine zarar ödemek.",
      "Ucuz kaplama ürünleri kullanıp kısa sürede şikâyet almak.",
      "Yasal sınırların dışında cam filmi uygulamak."
    ],
    batanlar: [
      "Eğitimsiz başlayıp yapılan hatalarla itibar kaybetmek.",
      "Pahalı konum ve yüksek kira.",
      "Kampanyalarla fiyatı aşırı düşürüp kâr edememek.",
      "Ekonomik daralmada ilk vazgeçilen hizmetlerden olması."
    ],
    destekler: ["kosgeb", "iskurKurs", "iskurGirisim"]
  },
  {
    id: "yasli-refakat", baslik: "Yaşlıya günlük refakat ve alışveriş yardımı", seviye: 0, yer: ["disari"], tur: "yukselen",
    ozet: "Yalnız yaşayan yaşlılara hastane, market, eczane ve gezi için tıbbi olmayan günlük yardım vermek.",
    neIs: "Yaşlı nüfus artıyor ve çocukları başka şehirde yaşayan çok kişi var. Hastane randevusuna eşlik etmek, alışveriş yapmak, ilaç ve fatura işlerini takip etmek, birlikte yürüyüşe çıkmak gibi tıbbi olmayan destek verirsin. İlaç verme, hasta bakımı ve tıbbi uygulama bu işin dışındadır.",
    kimeUygun: "Sabırlı, güvenilir, insanlarla iyi anlaşan; ev dışında çalışabilen herkes. Daha önce yakınına bakmış olanlar iyi başlar.",
    sermaye: "0 TL. Telefon ve toplu taşıma kartı yeterli.",
    ilkPara: "1-4 hafta. İlk müşteriler genelde tanıdık ve mahalle çevresinden gelir.",
    adimlar: [
      "Çevrendeki apartman, cami çevresi ve mahalle gruplarında ne tür yardıma ihtiyaç olduğunu sor.",
      "Hizmet kapsamını yazılı hale getir: neler yaparsın, neler yapmazsın (tıbbi uygulama yok).",
      "Yaşlının ailesiyle tanış; çocuklara düzenli kısa bilgi mesajı atmak güveni artırır.",
      "Sabıka kaydı belgeni (e-Devlet) ve varsa referans kişilerini hazır tut.",
      "Saat başı ücretini ve iptal kuralını baştan söyle."
    ],
    yasal: "Tıbbi bakım ve hemşirelik hizmeti ruhsatlı kurumların işidir; sen yalnızca tıbbi olmayan destek ver. Düzenli ücretli iş yapacaksan vergi durumunu vergi dairesine ve İŞKUR'a sor. Yaşlının parasını ya da banka kartını kendi başına kullanma.",
    kazanc: "Asgari ücretin saatlik karşılığına yakın ya da biraz üstü bir aralık olabilir; şehre, saate ve emeğe göre değişir.",
    tuzaklar: [
      "Yaşlının banka kartını, şifresini ya da ev anahtarını emanet almak; olası bir anlaşmazlıkta kendini savunman zorlaşır.",
      "Tıbbi bir şeye karışmak (ilaç dozu, iğne) ve sorumluluk altında kalmak.",
      "Tek bir aileye tamamen bağımlı olmak; aile gidince gelir biter."
    ],
    destekler: ["iskurKurs", "belediye"]
  }
];

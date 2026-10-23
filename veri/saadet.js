// Saadet zinciri ve benzeri dolandırıcılıklar: kendini korumak için bilgi sayfası (saadet-zinciri/).
// Vakalara yalnızca mahkeme kararı, resmî suçlama ya da resmî kurum açıklaması olanlar girer.
// Durum cümlelerini kesinleşmiş gibi yazma; "ilk derece", "istinaf" gibi aşamayı belirt.
// Bu dosyayı Tara ve Denetçi değiştirmez; yalnızca elle güncellenir.
window.SAADET = {
  sonKontrol: "Ekim 2026",

  // Türler: günlük hayatta hangi kılıklarda karşına çıkar?
  turler: [
    { ad: "Klasik saadet zinciri (piramit)", nasil: "Sisteme girmek için para ödersin, sonra sen de yeni insan getirirsin. Kazancın ürün satışından değil, altına getirdiğin kişilerin ödediği paradan gelir. Yeni üye gelmeyince zincir çöker; en son girenler, yani çoğunluk, parasını kaybeder." },
    { ad: "Ponzi (yüksek getirili sahte yatırım)", nasil: "\"Paranı bize ver, her ay yüzde şu kadar kazandıralım\" denir. Aslında ortada bir yatırım yoktur; eski yatırımcıların 'kazancı' yeni gelenlerin parasıyla ödenir. İlk aylar düzenli ödeme yapıldığı için güven oluşur ve insanlar daha fazla para yatırır, çevresini de getirir." },
    { ad: "Sahte kripto, forex ve borsa platformları", nasil: "Profesyonel görünen bir site ya da uygulama, ekranda hızla büyüyen bir bakiye gösterir. Para çekmek istediğinde 'vergi', 'komisyon' ya da 'hesap doğrulama' için yeniden para istenir. Bir gün site kapanır." },
    { ad: "Hayvan, çiftlik, altın ya da arsa 'ortaklığı'", nasil: "\"Bir inek al, sütünden ve buzağısından kâr payı al\" gibi somut görünen hikâyeler. Ortada gerçek bir üretim ya da çok küçük bir üretim vardır; ödemeler yine yeni gelenlerin parasıyla yapılır." },
    { ad: "\"Ürün satıyoruz\" kılığında piramit", nasil: "Ortada bir ürün vardır ama asıl kazanç 'giriş paketi' ve üye getirmektir. Ürünler piyasa fiyatının çok üzerindedir ve üyeler aslında birbirlerine satar. Yasal doğrudan satıştan farkı için aşağıya bak." },
    { ad: "Görev karşılığı para uygulamaları", nasil: "\"Beğeni yap, yorum yaz, ürün siparişi 'işle', kazan\" denir. İlk küçük ödemeler gerçekten yapılır. Sonra 'üst seviyeye geçmek' ya da 'görevi tamamlamak' için senden para yatırman istenir ve o para geri gelmez." },
    { ad: "Dini, milli duygularla para toplama", nasil: "\"Faizsiz\", \"helal kazanç\", \"memleketimize yatırım\" gibi sözlerle güven kazanılır. Özellikle yurt dışında yaşayan işçilerden 'ortaklık' adı altında senetsiz ya da belgesiz para toplanır." }
  ],

  // Bu işaretlerden biri bile varsa dur ve araştır.
  isaretler: [
    "Kazanç garanti ediliyor ya da \"risksiz\" deniyor.",
    "Getiri, bankanın ve piyasanın çok üstünde (\"ayda %10\", \"günde %1\").",
    "Para kazanmanın asıl yolu yeni insan getirmek.",
    "Sisteme girmek için giriş ücreti, paket ya da 'aktivasyon' parası isteniyor.",
    "\"Acele et, kontenjan doluyor\", \"bu fırsat bir daha gelmez\" baskısı yapılıyor.",
    "Paranın neye yatırıldığı net anlatılmıyor ya da \"çok karışık, sen anlamazsın\" deniyor.",
    "Para çekmek zorlaştırılıyor ya da çekmek için yeniden ödeme isteniyor.",
    "Şirket SPK, BDDK ya da Ticaret Bakanlığı kaydını gösteremiyor.",
    "Lüks araba, tatil, para destesi fotoğraflarıyla 'başarı hikâyesi' anlatılıyor.",
    "Seni bu işe tanıdığın, sevdiğin biri çağırıyor ve kuşkunu 'güvensizlik' diye ayıplıyor."
  ],

  // Gerçek vakalar: ders olsun diye.
  vakalar: [
    {
      ad: "Çiftlik Bank (\"Tosuncuk\")", yer: "Türkiye", yil: "2016-2018",
      nasil: "İnternet üzerinden sanal bir çiftlik oyunu ve gerçek hayvan, süt, yumurta yatırımı adı altında insanlardan para toplandı; yüksek ve düzenli getiri vaat edildi. Ödemeler bir süre yapıldı, sonra şirket çöktü ve kurucu yurt dışına çıktı.",
      durum: "İstanbul Anadolu 6. Ağır Ceza Mahkemesi 3 Şubat 2025'te kurucu Mehmet Aydın ve kardeşi Fatih Aydın'a bilişim yoluyla nitelikli dolandırıcılık, suç gelirini aklama ve örgüt yöneticiliği suçlarından 45 bin yılı aşan hapis cezası verdi (ilk derece kararı).",
      ders: "\"Hayvan, çiftlik, gerçek üretim\" hikâyesi güven verir ama getiri gerçek dışıysa kaynak yeni gelenlerin parasıdır.",
      kaynak: { ad: "NTV", url: "https://www.ntv.com.tr/turkiye/ciftlik-bank-davasi-tosuncuk-icin-karar-aciklandi-45-bin-376-yil-6-ay-hapis-cezasi%2CJ0bZVFSwQEu962qao3UhSA" }
    },
    {
      ad: "Thodex", yer: "Türkiye", yil: "2017-2021",
      nasil: "Bir kripto para borsasıydı. Çeşitli kampanyalarla çok sayıda kullanıcı topladı. Nisan 2021'de işlemler birden durduruldu, kullanıcılar paralarına ulaşamadı ve kurucu yurt dışına çıktı.",
      durum: "Kurucu Faruk Fatih Özer Arnavutluk'tan iade edildi. 2023'te ilk derece mahkemesi 11 bin yılı aşan hapis cezası verdi; istinaf mahkemesi bu kararı bozdu ve yargılama yeniden başladı. Özer 1 Kasım 2025'te tutulduğu cezaevinde ölü bulundu.",
      ders: "Lisanssız ya da denetimi zayıf platformlarda paran senin değildir. Kripto hizmeti veren kuruluşların SPK iznini kontrol et.",
      kaynak: { ad: "Bloomberg HT", url: "https://www.bloomberght.com/thodex-in-kurucusu-cezaevindeki-odasinda-olu-bulundu-3760584" }
    },
    {
      ad: "Jetpa ve Kombassan gibi \"holding\" para toplamaları", yer: "Avrupa'daki Türk işçiler / Türkiye", yil: "1990'lar-2000'ler",
      nasil: "Avrupa'da yaşayan Türk işçilerden \"faizsiz ortaklık\", \"memlekete yatırım\" söylemiyle, çoğu zaman elden ve belgesiz para toplandı. Vaat edilen kâr payları ödenmedi, birçok kişi birikimini geri alamadı.",
      durum: "Almanya'da Frankfurt ve Köln eyalet mahkemeleri bazı mağdurların ana paralarının faiziyle iadesine hükmetti. Türkiye'de Jetpa Holding hakkında iflas kararı verildi ve kurucusu hakkında nitelikli dolandırıcılık davası açıldı.",
      ders: "Dini ya da milli duygulara seslenmek bir yatırımı güvenli yapmaz. Senetsiz, sözleşmesiz, elden para verme.",
      kaynak: { ad: "Hürriyet", url: "https://www.hurriyet.com.tr/avrupa/2-magdurun-davalarini-kazandilar-712809" }
    },
    {
      ad: "OneCoin", yer: "Dünya geneli (Türkiye dahil)", yil: "2014-2017",
      nasil: "Gerçekte bir blokzinciri olmayan sahte bir kripto para, 'eğitim paketleri' adı altında satıldı. Paket satan herkes altına yeni üye getirerek komisyon kazanıyordu; yani hem sahte yatırım hem saadet zinciriydi.",
      durum: "ABD Adalet Bakanlığı'na göre 3,5 milyondan fazla kişiden 4 milyar doları aşan para toplandı. Ortak kurucu Karl Sebastian Greenwood Eylül 2023'te ABD'de 20 yıl hapis cezası aldı. Kurucu Ruja Ignatova 2017'de ortadan kayboldu ve FBI'ın en çok arananlar listesine alındı.",
      ders: "\"Bir sonraki Bitcoin\" diye satılan, kimsenin bağımsız olarak kullanamadığı paralar ve 'paket' satışları büyük tehlike işaretidir.",
      kaynak: { ad: "CNBC", url: "https://www.cnbc.com/amp/2023/09/12/cryptoqueen-partner-gets-20-years-prison-in-4-billion-ponzi-fraud.html" }
    },
    {
      ad: "BitConnect", yer: "Dünya geneli", yil: "2016-2018",
      nasil: "Yatırımcılara bir 'yazılım botu' sayesinde günde yaklaşık %1 kazanç vaat edildi ve üye getirene komisyon verildi. Aslında eski yatırımcılara yeni gelenlerin parası ödeniyordu.",
      durum: "ABD Adalet Bakanlığı bunu klasik bir Ponzi şeması olarak tanımladı. Kurucu Satish Kumbhani 2022'de suçlandı ve hâlâ kaçak. ABD'deki tanıtıcısı Glenn Arcaro suçunu kabul etti ve 38 ay hapis cezası aldı.",
      ders: "Hiçbir gerçek yatırım her gün sabit kazanç getirmez. \"Robot\", \"yapay zekâ botu\" hikâyeleri yaygın bir yemdir.",
      kaynak: { ad: "ABD Adalet Bakanlığı (PDF)", url: "https://www.justice.gov/media/1248056/dl" }
    },
    {
      ad: "Bernard Madoff", yer: "ABD", yil: "1990'lar-2008",
      nasil: "Saygın bir yatırımcı, yıllarca piyasa ne olursa olsun istikrarlı getiri gösterdi. Getiriler sahteydi; eski yatırımcılara yeni gelenlerin parası ödeniyordu. 2008 krizinde para çekmek isteyenler artınca sistem çöktü.",
      durum: "Madoff suçunu kabul etti ve 29 Haziran 2009'da 150 yıl hapis cezası aldı. Tarihin bilinen en büyük Ponzi dolandırıcılıklarından biridir.",
      ders: "\"Hiç zarar etmeyen\" ve \"her ay aynı oranda kazandıran\" yatırım gerçek değildir. Ünlü ya da saygın olmak güvence değildir.",
      kaynak: { ad: "FBI New York", url: "https://www.fbi.gov/newyork/press-releases/2009/nyfo062909.htm" }
    }
  ],

  // Yasal doğrudan satış ile piramit arasındaki fark
  fark: [
    ["Kazanç nereden?", "Müşteriye gerçek ürün satışından.", "Yeni üye getirmekten ve giriş paketlerinden."],
    ["Giriş parası", "Yok ya da çok düşük; iade edilebilir.", "Yüksek 'paket', 'aktivasyon' ya da 'seviye' ücreti."],
    ["Ürün", "Piyasada benzerleriyle rekabet edebilen fiyatta.", "Pahalı; çoğunu üyeler kendileri alır, stok yapar."],
    ["Kayıt", "Ticaret Bakanlığı'nın doğrudan satış kurallarına tabi, şirket bilgisi açık.", "Kayıt ya da adres belirsiz, yurt dışı ya da sürekli değişen site."],
    ["Vaat", "\"Satış yaptıkça komisyon alırsın.\"", "\"Altına 2 kişi getir, 6 ayda araba sahibi ol.\""]
  ],

  // Davet edilince sorulacaklar
  sorular: [
    "Para tam olarak neyden kazanılıyor? Kimse yeni üye getirmezse ben yine kazanır mıyım?",
    "Şirketin SPK, BDDK ya da Ticaret Bakanlığı kaydı nedir? Belgesini görebilir miyim?",
    "Ödediğim parayı vazgeçersem ne zaman ve nasıl geri alırım? Bu yazılı mı?",
    "Bu kazancı sağlayan gerçek iş nedir, nerede yapılıyor, ben gidip görebilir miyim?",
    "Senin kazancın benim katılmama bağlı mı?"
  ],

  // Güncel isimleri nereden kontrol edersin?
  kontrol: [
    { ad: "SPK haftalık bülteni", aciklama: "İzinsiz yatırım, forex ve kripto sitelerine verilen erişim engelleri ve suç duyuruları her hafta burada yayınlanır.", url: "https://spk.gov.tr/" },
    { ad: "Ticaret Bakanlığı", aciklama: "Doğrudan satış şirketleri ve piramit satış sistemleriyle ilgili inceleme ve duyurular.", url: "https://ticaret.gov.tr/" },
    { ad: "BDDK", aciklama: "Bankacılık izni olmadan para toplayan, 'faizsiz kredi', 'tasarruf finansmanı' gibi faaliyetler hakkında uyarılar ve izinli kuruluş listeleri.", url: "https://www.bddk.org.tr/" }
  ],

  // Kaptırdıysan
  kaptirdiysan: [
    "Daha fazla para yatırma. \"Parayı çekmek için şu kadar daha yatır\" diyorlarsa bu, dolandırıcılığın son aşamasıdır.",
    "Bütün kanıtları sakla: dekontlar, mesajlar, site adresi, ekran görüntüleri, seni davet edenlerin bilgileri.",
    "Bankanı hemen ara; kartla ödediysen itiraz (geri ödeme) sürecini sor.",
    "Cumhuriyet Başsavcılığına ya da en yakın karakola suç duyurusunda bulun. Siber suçlar için Emniyet'in ihbar kanallarını da kullanabilirsin.",
    "Avukat tutacak paran yoksa barodan ücretsiz adli yardım isteyebilirsin.",
    "\"Paranızı geri alırız\" diyen ve önden ücret isteyen kişilere dikkat: bunlar çoğu zaman ikinci dolandırıcılıktır."
  ]
};

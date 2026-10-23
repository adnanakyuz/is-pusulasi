// İş fikirlerinin detaylı uygulama rehberleri: işi gerçekte nasıl yaparsın?
// Anahtar, veri/fikirler.js'deki fikrin id'sidir. Rehberi olan fikrin sayfasında
// "Uygulama rehberi" bölümü çıkar. Rakamlar örnektir; kullanıcı kendi bölgesine göre değiştirir.
//
// Alanlar:
//   araclar:    [ [ad, açıklama/yaklaşık fiyat], ... ]       Gerekenler listesi
//   yapilis:    [ { baslik, adimlar: [...] }, ... ]             İşin kendisi, adım adım
//   fiyat:      { aciklama, kalemler: [ [kalem, örnek], ... ], sonuc }   Fiyat nasıl hesaplanır
//   ilkHafta:   [ "1. gün: ...", ... ]                           İlk hafta planı
//   ornekMesaj: "..."                                            Kopyalanıp kullanılabilecek ilan/teklif metni
//   ogrenme:    [ "...", ... ]                                   Ücretsiz nereden öğrenilir (link yok)
//   ipuclari:   [ "...", ... ]                                   Ustaların püf noktaları
window.REHBERLER = {
  "yerinde-temizlik": {
    araclar: [
      ["Halı-koltuk yıkama makinesi (enjeksiyonlu, ıslak-kuru vakumlu)", "İşin kalbi. Profesyonel seri tercih et; ikinci el alırken motor ve pompayı denet."],
      ["Endüstriyel ıslak-kuru süpürge", "Yıkama öncesi toz ve kılları almak için."],
      ["Buharlı temizlik makinesi (isteğe bağlı)", "Yatak, araç içi plastikler ve inatçı lekeler için."],
      ["Fırça seti (yumuşak, orta, sert)", "Kumaş türüne göre köpüğü işlemek için."],
      ["Ön ilaçlama spreyi ve el püskürtücü", "Lekeye yıkamadan 5-10 dakika önce uygulanır."],
      ["Kumaş şampuanı (düşük köpüklü), leke çıkarıcılar, koku giderici", "Makineye uygun, pH değeri belli profesyonel ürünler."],
      ["Mikrofiber bezler, kova, eldiven, maske, dizlik", "Kişisel koruma ve son silme işleri için."],
      ["Uzatma kablosu ve yer koruma örtüsü", "Müşterinin zeminini ıslatmamak için."],
      ["Taşıma: araç ya da taşıma arabası", "Makine ağırdır; merdivenli binalar için tekerlekli araba şart."]
    ],
    yapilis: [
      { baslik: "1. Keşif ve kumaş kontrolü", adimlar: [
        "Koltuğun etiketine bak: W (su ile), S (yalnızca solvent/kuru temizleme), W/S, X (yalnızca süpürme). S ve X etiketli kumaşı suyla yıkama.",
        "Görünmeyen bir köşede (koltuğun arkası, altı) şampuanı dene; 5 dakika bekle, beyaz bezle sil. Boya geçerse ya da kumaş bozulursa yıkama yapma ve müşteriye söyle.",
        "Lekeleri tek tek göster ve not al: 'Bu leke tamamen çıkmayabilir' demek sonradan tartışmayı önler.",
        "Önce-durum fotoğraflarını çek."
      ]},
      { baslik: "2. Hazırlık", adimlar: [
        "Zemine koruma örtüsünü ser; yastıkları ve minderleri ayır.",
        "Bütün yüzeyi süpür: dikiş araları, minder altları, kenarlar. Toz ıslanınca çamura dönüşür.",
        "Leke spreyini lekelere uygula ve yumuşak fırçayla işle; kurumasına izin verme."
      ]},
      { baslik: "3. Yıkama", adimlar: [
        "Şampuanı makinenin talimatındaki oranda suya karıştır; fazla şampuan kumaşta kalıp tekrar kirlenmeye yol açar.",
        "Makinenin başlığıyla yukarıdan aşağıya, üst üste binen şeritler halinde püskürt ve aynı anda çek.",
        "Kirli su gelmeye devam ettikçe aynı bölgeden geçmeye devam et; ama kumaşı aşırı ıslatma (kurumazsa koku yapar).",
        "Son geçişi temiz suyla (durulama) yap ve 2-3 kez sadece vakumla çek; kumaşta mümkün olduğunca az su kalsın."
      ]},
      { baslik: "4. Kurutma ve teslim", adimlar: [
        "Kumaşın tüylerini aynı yöne fırçala.",
        "Müşteriye pencereyi açmasını ya da vantilatör çalıştırmasını söyle; kuruma genelde birkaç saat sürer.",
        "Sonra-durum fotoğrafını çek, müşteriyle birlikte kontrol et, ödemeyi al.",
        "Makinenin kirli su tankını boşalt, filtreleri temizle; bakımsız makine kötü koku yapar."
      ]},
      { baslik: "Araç içi temizlik farkı", adimlar: [
        "Önce bütün eşyaları çıkar, paspasları ayrı yıka.",
        "Koltuklar aynı yöntemle; tavan döşemesine makine başlığıyla değil, nemli bez ve köpükle dokun (tavan kumaşı yapıştırıcısı ıslanınca sarkar).",
        "Plastik yüzeyleri uygun temizleyici ve mikrofiberle sil, buharla köşeleri temizle.",
        "Aracın camlarını biraz aralık bırakarak kurumasını sağla."
      ]}
    ],
    fiyat: {
      aciklama: "Fiyatı rakibe bakarak değil, kendi maliyetine ve süresine bakarak belirle. Aşağıdaki rakamlar yalnızca örnektir; kendi bölgendeki fiyatlarla değiştir.",
      kalemler: [
        ["Kimyasal ve sarf malzemesi (bir koltuk takımı)", "malzeme faturalarından hesapla"],
        ["Yol ve yakıt", "gidiş-dönüş km × km başı masraf"],
        ["Makine yıpranma payı", "makine fiyatı ÷ makinenin dayanacağı yaklaşık iş sayısı"],
        ["Senin emeğin", "harcadığın saat × istediğin saatlik ücret (en az asgari ücretin saatlik karşılığının üstü)"],
        ["Vergi ve sigorta payı", "toplamın üzerine eklenir"]
      ],
      sonuc: "Bu toplam senin en düşük fiyatındır; altına inme. Bayram ve taşınma sezonunda talep arttığı için randevu doluluğuna göre fiyat artırılabilir. Paket fiyatı (koltuk takımı + yatak) müşteriye cazip gelir ve tek ziyarette daha çok kazandırır."
    },
    ilkHafta: [
      "1-2. gün: Kendi evindeki ve yakınlarının koltuklarında çalış; her kumaş türünü dene, süreni ölç.",
      "3. gün: Fiyat listeni hazırla (koltuk takımı, tekli, yatak, araç içi), WhatsApp İşletme hesabı aç.",
      "4. gün: İlk işlerin önce-sonra fotoğraflarıyla kısa videolar hazırla, mahalle gruplarında ve sosyal medyada paylaş.",
      "5. gün: Emlakçılar, oto galeriler ve site yönetimlerini gez; kart bırak, ilk iş için indirim öner.",
      "6-7. gün: İlk ücretli işleri yap; her müşteriden yorum ve tavsiye iste."
    ],
    ornekMesaj: "Merhaba, ben [adın]. [Semtin] ve çevresinde evinize gelerek koltuk, yatak ve araç içi yıkama yapıyorum. Profesyonel makineyle derinlemesine yıkıyor, kumaşa uygun ürün kullanıyorum; işe başlamadan önce görünmeyen bir yerde test ediyorum. Koltuk takımı, yatak ve araç içi için fiyat listemi ve önceki işlerimin fotoğraflarını gönderebilirim. Bu hafta yapılan ilk randevularda %10 indirim var. Uygun olduğunuz gün ve saati yazmanız yeterli.",
    ogrenme: [
      "Kullandığın makinenin ve kimyasalların üretici eğitim videoları ve kullanım kılavuzları (en doğru bilgi buradadır).",
      "YouTube'da 'upholstery cleaning' ve 'koltuk yıkama nasıl yapılır' aramaları; kumaş türlerine özel videolar.",
      "Bu işi yapan birinin yanında birkaç gün ücretsiz ya da yarı ücretli çalışmak: en hızlı öğrenme yolu.",
      "İŞKUR ve belediye kurslarında 'temizlik hizmetleri' kursları açılıyorsa katıl."
    ],
    ipuclari: [
      "Az ıslat, çok çek: Kumaşta kalan su kötü kokunun ve geç kurumanın asıl sebebidir.",
      "Her müşteriye 'leke garantisi' verme; 'elimden gelenin en iyisi' de.",
      "Kedi-köpek idrarı kokusu için enzimli ürün kullan; normal şampuan kokuyu çıkarmaz.",
      "Memnun müşteriye 6 ay sonra hatırlatma mesajı at; tekrar eden müşteri en ucuz müşteridir."
    ]
  },

  "freelance-hizmet": {
    araclar: [
      ["Bilgisayar ve iyi internet", "Telefonla iş yapılabilir ama teslimler için bilgisayar şart."],
      ["Ücretsiz araçlar", "Tasarım için Canva, belge için Google Dokümanlar, kurgu için CapCut ya da DaVinci Resolve (ücretsiz sürümleri yeterli)."],
      ["Bir e-posta adresi ve düzgün profil fotoğrafı", "Ad-soyad içeren, ciddi bir e-posta ve yüzünün net göründüğü bir fotoğraf."],
      ["Ödeme hesabı", "Türk platformları için kendi banka hesabın; yurt dışı için Payoneer gibi bir hizmet ya da bankanın döviz hesabı."],
      ["Portföy", "3-5 örnek iş. Müşterin yoksa hayali bir işletme için yap."]
    ],
    yapilis: [
      { baslik: "1. Satacağın hizmeti seç", adimlar: [
        "Bildiğin ve 1-2 günde teslim edebileceğin bir iş seç: logo, sosyal medya görseli, video kurgu, Excel tablosu, metin yazımı, çeviri, sunum hazırlama.",
        "Dar ve net tanımla: 'Grafik tasarım yaparım' yerine 'Kafe ve restoranlar için menü tasarımı, 48 saatte'.",
        "Platformda o hizmeti satanlara bak: fiyatları, paketleri ve en çok yorum alanların profillerini incele."
      ]},
      { baslik: "2. Profilini kur", adimlar: [
        "Başlık: ne yaptığını ve kime yaptığını tek cümlede söyle.",
        "Açıklama: müşterinin sorununu yaz, nasıl çözdüğünü anlat, teslim süreni ve kaç düzeltme yaptığını belirt.",
        "Üç paket hazırla: Temel, Standart, Premium. Müşterilerin çoğu ortadakini seçer.",
        "Portföyündeki en iyi 3 işi en üste koy."
      ]},
      { baslik: "3. İlk işi al", adimlar: [
        "Platformdaki ilanlara her gün teklif ver. Teklifinde müşterinin adını ve işinin ayrıntısını an; kopyala-yapıştır teklif iş almaz.",
        "İlk 3-5 işte fiyatı biraz düşük tut; amaç yorum biriktirmek.",
        "Müşteriye işe başlamadan önce kısa sorular sor (renk, örnek, hedef kitle); yanlış anlaşılmayı önler."
      ]},
      { baslik: "4. Teslim ve yorum", adimlar: [
        "Söz verdiğin süreden önce teslim et; bu tek başına yıldız getirir.",
        "Teslimde kısa bir açıklama yaz: ne yaptın, dosyalar nasıl kullanılır.",
        "Memnun müşteriden yorum iste ve tekrar çalışmayı teklif et.",
        "Her işi portföyüne ekle (müşterinin izniyle)."
      ]}
    ],
    fiyat: {
      aciklama: "Saatlik değerini bil, sonra iş başına fiyata çevir. Rakamlar örnektir; kendi alanındaki fiyatlara göre değiştir.",
      kalemler: [
        ["İşin süresi", "görüşme + yapım + düzeltme saatleri toplamı"],
        ["Saatlik ücretin", "başta düşük, yorumlar arttıkça yükselir"],
        ["Platform komisyonu", "platformun sitesinde yazan oran; fiyata eklenmeli"],
        ["Para çekme / döviz çevirme ücreti", "ödeme hizmetinin ücret sayfasından"],
        ["Vergi payı", "mali müşavirinin söylediği orana göre"]
      ],
      sonuc: "İş fiyatı = (saat × saatlik ücret) + komisyon + çekme ücreti + vergi payı. Yorum sayın 10'u geçince fiyatını %20-30 artırmayı dene; iş gelmeye devam ediyorsa doğru yoldasın."
    },
    ilkHafta: [
      "1. gün: Satacağın tek hizmeti seç, rakip profilleri incele.",
      "2-3. gün: 3-5 örnek iş hazırla (gerekirse hayali müşteri için).",
      "4. gün: Bir Türk ve bir yabancı platformda profil ve üç paket oluştur.",
      "5. gün: Ödeme alma yolunu kur; vergi için bir mali müşavire danış.",
      "6-7. gün: Her gün en az 5 ilana kişiye özel teklif ver; çevrene de hizmetini duyur."
    ],
    ornekMesaj: "Merhaba [müşterinin adı], ilanınızı okudum: [işin kısa özeti] istiyorsunuz. Daha önce benzer bir iş için [örnek iş] hazırladım, portföyümde görebilirsiniz. Bu işi [X] gün içinde, [Y] düzeltme hakkıyla teslim edebilirim. Başlamadan önce iki şey sormak istiyorum: [soru 1] ve [soru 2]. Uygun görürseniz hemen başlayabilirim.",
    ogrenme: [
      "Platformların kendi 'satıcı rehberi' ve yardım merkezi yazıları (ücretsiz ve en günceli).",
      "Seçtiğin beceri için YouTube'daki ücretsiz Türkçe ve İngilizce eğitimler.",
      "İŞKUR ve belediye kurslarında grafik tasarım, ofis programları ve dijital pazarlama kursları.",
      "Halk Eğitim Merkezlerinin bilgisayar ve tasarım kursları."
    ],
    ipuclari: [
      "Müşteriye 'evet' demeden önce işi tam anla; belirsiz işler en çok düzeltme isteyen işlerdir.",
      "Her mesaja birkaç saat içinde cevap ver; platformlar hızlı cevap verenleri öne çıkarır.",
      "Tek platforma bağlı kalma; bir hesap kapanırsa bütün gelirin gitmesin.",
      "İyi müşterileri platform kurallarına uyarak düzenli çalışmaya davet et; sürekli yeni müşteri aramak yorucudur."
    ]
  }
};

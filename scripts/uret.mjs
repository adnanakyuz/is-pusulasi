// Siteyi üretir: veri/ klasöründeki bilgilerden her iş fikri ve her meslek için ayrı sayfa yapar,
// hepsini _site/ klasörüne koyar. GitHub her yayında bunu kendisi çalıştırır.
// Elle denemek için:  node scripts/uret.mjs   sonra _site klasörünü bir sunucuyla aç.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const KOK = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CIKTI = path.join(KOK, "_site");
const SITE = "https://adnanakyuz.github.io/is-pusulasi/";
const SITE_ADI = "İş Pusulası";

// Tarayıcı dosyalarını (window.X = ...) Node içinde çalıştır.
const window = {};
const ortam = vm.createContext({ window, globalThis: window, console });
for (const f of ["veri/meslekler.js", "veri/ulkeler.js", "veri/fikirler.js", "veri/saadet.js", "ortak.js"]) {
  vm.runInContext(fs.readFileSync(path.join(KOK, f), "utf8"), ortam, { filename: f });
}
const { MESLEKLER, ULKELER, FIKIRLER, SEVIYELER, DESTEKLER, TUZAKLAR, ODENEK_UYARISI, SON_KONTROL, SAADET, Ortak } = window;
const { kacis, meslekYolu } = Ortak;
const YER_ADLARI = { ev: "Evde", disari: "Dışarıda", internet: "İnternette" };

// ---------------- Denetim: yanlış veri yayına çıkmasın ----------------
const hatalar = [];
const idler = new Set();
for (const f of FIKIRLER) {
  if (idler.has(f.id)) hatalar.push("Aynı kimlik iki kez: " + f.id);
  idler.add(f.id);
  for (const alan of ["baslik", "ozet", "neIs", "kimeUygun", "sermaye", "ilkPara", "yasal", "kazanc"]) if (!f[alan]) hatalar.push(f.id + ": " + alan + " eksik");
  if (!(f.seviye >= 0 && f.seviye <= 3)) hatalar.push(f.id + ": seviye 0-3 olmalı");
  if (!f.adimlar?.length || !f.tuzaklar?.length) hatalar.push(f.id + ": adımlar/tuzaklar eksik");
  if (f.seviye === 3 && !f.batanlar?.length) hatalar.push(f.id + ": yatırımlık fikirde 'batanlar' eksik");
  for (const d of f.destekler || []) if (!DESTEKLER[d]) hatalar.push(f.id + ": bilinmeyen destek " + d);
  for (const y of f.yer) if (!YER_ADLARI[y]) hatalar.push(f.id + ": bilinmeyen yer " + y);
}
const yollar = new Set();
for (const m of MESLEKLER) {
  const y = meslekYolu(m);
  if (yollar.has(y)) hatalar.push("Aynı meslek iki kez: " + y);
  yollar.add(y);
  if (!m.ad?.en?.length) hatalar.push(y + ": İngilizce ad eksik");
}
// Kesin kural 1: Bir fikrin tanıtım kısmında (başlık, özet, adımlar, kazanç...) şüpheli sistemler geçemez.
// Tuzaklar ve "batanlar" bölümünde uyarı olarak geçebilir.
const YASAK = /kripto|forex|bahis|kumar|iddaa|binary|network marketing|mlm|üye getir|saadet zinciri|garantili|pasif gelir|kesin kazanç|sinyal grubu|iban kirala|hesap kirala|önce ödeme|kayıt ücreti/i;
for (const f of FIKIRLER) {
  const tanitim = [f.baslik, f.ozet, f.neIs, f.kimeUygun, f.sermaye, f.ilkPara, f.kazanc, ...f.adimlar].join(" ");
  const bulunan = tanitim.match(YASAK);
  if (bulunan) hatalar.push(f.id + ": yasaklı ifade '" + bulunan[0] + "' (bu tür sistemler önerilemez)");
}
// Kesin kural 2: Veride yalnızca bilinen, güvenilir sitelere link olabilir. Yeni bir site eklemek için
// bu listeyi bir insanın elle güncellemesi gerekir; Tara ve Denetçi bu dosyayı değiştiremez.
const IZINLI = ["indeed.com", "adzuna.co.uk", "adzuna.com", "adzuna.de", "adzuna.it", "adzuna.nl", "arbeitsagentur.de",
  "arbeidsplassen.nav.no", "arbetsformedlingen.se", "candidat.francetravail.fr", "europa.eu", "jobs.ams.at", "karriere.at",
  "jobs.ch", "jobs.cz", "jobindex.dk", "pracuj.pl", "vdab.be", "infojobs.net", "net-empregos.com", "bayt.com", "naukrigulf.com",
  "jobbank.gc.ca", "canada.ca", "seek.com.au", "seek.co.nz", "immi.homeaffairs.gov.au", "gov.uk", "make-it-in-germany.com",
  "migration.gv.at", "kariyer.net", "google.com", "linkedin.com", "gov.tr", "flagcdn.com",
  // Saadet zinciri sayfasındaki vaka kaynakları ve resmî kurumlar
  "bddk.org.tr", "ntv.com.tr", "bloomberght.com", "hurriyet.com.tr", "cnbc.com", "justice.gov", "fbi.gov",
  // İnternetten kazanma platformları (yalnızca elle eklenir)
  "bionluk.com", "armut.com", "upwork.com", "fiverr.com", "outlier.ai", "dataannotation.tech", "telusdigital.com",
  "rentahuman.ai", "preply.com", "italki.com", "usertesting.com", "shutterstock.com", "stock.adobe.com", "etsy.com",
  "gumroad.com", "youtube.com"];
for (const f of ["veri/meslekler.js", "veri/ulkeler.js", "veri/fikirler.js", "veri/saadet.js"]) {
  for (const [, alan] of fs.readFileSync(path.join(KOK, f), "utf8").matchAll(/https?:\/\/([^/"'{\s?]+)/g)) {
    if (!IZINLI.some((i) => alan === i || alan.endsWith("." + i))) hatalar.push(f + ": izinsiz site linki " + alan);
  }
}
if (hatalar.length) { console.error("Veri hatası:\n- " + hatalar.join("\n- ")); process.exit(1); }

// ---------------- Ortak sayfa iskeleti ----------------
function sayfa({ yol, baslik, aciklama, icerik, aktif = "", ekBas = "", govdeSinif = "" }) {
  const derinlik = yol ? yol.split("/").filter(Boolean).length : 0;
  const kok = "../".repeat(derinlik);
  const tamBaslik = baslik ? baslik + " · " + SITE_ADI : SITE_ADI + " · Mesleğin dünyada nerede aranıyor?";
  const adresi = SITE + yol;
  const nav = (ad, hedef, k) => `<a href="${kok}${hedef}"${aktif === k ? ' class="aktif" aria-current="page"' : ""}>${ad}</a>`;
  return `<!doctype html>
<html lang="tr">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${kacis(tamBaslik)}</title>
<meta name="description" content="${kacis(aciklama)}">
<link rel="canonical" href="${adresi}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${SITE_ADI}">
<meta property="og:title" content="${kacis(baslik || SITE_ADI)}">
<meta property="og:description" content="${kacis(aciklama)}">
<meta property="og:url" content="${adresi}">
<meta property="og:image" content="${SITE}ikonlar/paylasim.png">
<meta property="og:locale" content="tr_TR">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#0d5443">
<link rel="manifest" href="${kok}manifest.webmanifest">
<link rel="icon" href="${kok}ikonlar/ikon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${kok}ikonlar/ikon-180.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap">
<link rel="stylesheet" href="${kok}stil.css">
${ekBas}</head>
<body data-kok="${kok}"${govdeSinif ? ` class="${govdeSinif}"` : ""}>
<a class="atla" href="#icerik">İçeriğe geç</a>
<header class="ust">
  <div class="ust-ic">
    <a class="logo" href="${kok}" aria-label="${SITE_ADI} ana sayfa">
      <img src="${kok}ikonlar/ikon.svg" alt="" width="36" height="36"><span>İş <b>Pusulası</b></span>
    </a>
    <nav class="menu" aria-label="Ana menü">
      ${nav("İş Ara", "", "ara")}
      ${nav("İş Fikirleri", "fikirler/", "fikirler")}
      ${nav("İnternetten Kazan", "internetten-para-kazanma/", "internet")}
      ${nav("Meslekler", "meslekler/", "meslekler")}
    </nav>
    <button type="button" class="kur-dugme" id="kur" hidden>Uygulamayı yükle</button>
  </div>
</header>
<main id="icerik">
${icerik}
</main>
<footer class="alt">
  <div class="alt-ic">
    <div>
      <p class="alt-logo"><img src="${kok}ikonlar/ikon.svg" alt="" width="28" height="28"> İş Pusulası</p>
      <p>Mesleğini dünyada ara, sermayene uygun gerçekçi iş fikirlerini öğren. Ücretsiz, üyelik yok, reklam yok.</p>
    </div>
    <nav aria-label="Alt menü">
      <a href="${kok}">İş Ara</a>
      <a href="${kok}fikirler/">İş Fikirleri</a>
      <a href="${kok}internetten-para-kazanma/">İnternetten Kazan</a>
      <a href="${kok}meslekler/">Bütün Meslekler</a>
      <a href="${kok}tuzaklar/">İş Tuzakları</a>
      <a href="${kok}saadet-zinciri/">Saadet Zincirinden Korun</a>
      <a href="${kok}hakkinda/">Hakkında</a>
      <a href="${kok}gizlilik/">Gizlilik ve Sorumluluk</a>
    </nav>
  </div>
  <p class="alt-not">İş Pusulası bilgi verir, iş veya kazanç garantisi vermez. İlanlar başka sitelerde yayınlanır; başvurmadan önce işvereni kendin doğrula. Bilgilerin son kontrolü: ${kacis(SON_KONTROL)}.</p>
</footer>
<div class="kur-serit" id="kur-serit" role="region" aria-label="Uygulamayı yükle">
  <img src="${kok}ikonlar/ikon-192.png" alt="">
  <p><b>İş Pusulası'nı telefonuna ekle</b>Uygulama gibi açılır, internetsiz de çalışır.</p>
  <button type="button" class="ekle" id="kur-ekle">Ekle</button>
  <button type="button" class="kapat" id="kur-kapat" aria-label="Kapat">×</button>
</div>
<dialog class="kur-pencere" id="kur-pencere">
  <div class="ic"><h2 id="kur-baslik">Uygulamayı yükle</h2><ol id="kur-adimlar"></ol><button type="button" id="kur-tamam">Tamam</button></div>
</dialog>
<script src="${kok}veri/meslekler.js"></script>
<script src="${kok}veri/ulkeler.js"></script>
<script src="${kok}ortak.js"></script>
<script src="${kok}uygulama.js"></script>
</body>
</html>
`;
}

function yaz(yol, html) {
  const dosya = path.join(CIKTI, yol, yol.endsWith(".html") || yol.endsWith(".xml") || yol.endsWith(".txt") ? "" : "index.html");
  fs.mkdirSync(path.dirname(dosya), { recursive: true });
  fs.writeFileSync(dosya, html);
}
const liste = (dizi, tip) => `<${tip}>${dizi.map((d) => `<li>${kacis(d)}</li>`).join("")}</${tip}>`;
const etiketler = (f, seviyeDe) =>
  `<div class="etiketler">${seviyeDe ? `<span class="etiket">${kacis(SEVIYELER[f.seviye].ad)}</span>` : ""}` +
  (f.tur === "yukselen" ? '<span class="etiket yeni">Yeni yükselen</span>' : '<span class="etiket">Denenmiş</span>') +
  f.yer.map((y) => `<span class="etiket">${YER_ADLARI[y]}</span>`).join("") + "</div>";
const fikirKart = (f, kok) =>
  `<a class="kart fikir-kart" href="${kok}fikir/${f.id}/" data-seviye="${f.seviye}" data-yer="${f.yer.join(" ")}" data-tur="${f.tur}">` +
  `<h3>${kacis(f.baslik)}</h3><p>${kacis(f.ozet)}</p>${etiketler(f)}<span class="kart-alt">Sermaye: ${kacis(SEVIYELER[f.seviye].aralik)}</span></a>`;

// Klasörün kendisini değil içini temizle (açık bir önizleme sunucusu klasörü kilitlemiş olabilir).
fs.mkdirSync(CIKTI, { recursive: true });
for (const f of fs.readdirSync(CIKTI)) fs.rmSync(path.join(CIKTI, f), { recursive: true, force: true });

// ---------------- Ana sayfa ----------------
const populer = ["finisher operatörü", "ekskavatör operatörü", "kaynakçı", "tır şoförü", "aşçı", "elektrikçi", "hemşire", "kule vinç operatörü"]
  .map((ad) => MESLEKLER.find((m) => m.tr[0] === ad)).filter(Boolean);
const ucuzlar = FIKIRLER.filter((f) => f.seviye <= 1).slice(0, 6);
yaz("", sayfa({
  yol: "", aktif: "ara", govdeSinif: "ana",
  aciklama: "Mesleğini Türkçe yaz; " + ULKELER.length + " ülkede hangi adla arandığını bulup o ülkenin iş sitelerinde arayalım. Sermayene göre " + FIKIRLER.length + " gerçekçi iş fikri ve adım adım kılavuzları.",
  icerik: `
<section class="kahraman">
  <div class="kahraman-ic">
    <p class="ust-baslik">Ücretsiz · Türkçe · Üyeliksiz</p>
    <h1>Mesleğin dünyada nerede aranıyor?</h1>
    <p class="giris">Mesleğini Türkçe yaz. Her ülkede o işin hangi adla arandığını bulalım ve ${ULKELER.length} ülkenin iş sitelerinde senin yerine arayalım.</p>
    <form id="ara-form" class="ara-kutu" role="search" autocomplete="off">
      <input id="ara-girdi" type="search" placeholder="Örnek: finisher operatörü" aria-label="Meslek" list="meslek-listesi">
      <datalist id="meslek-listesi">${MESLEKLER.map((m) => `<option value="${kacis(m.tr[0])}">`).join("")}</datalist>
      <button type="submit">Ara</button>
    </form>
    <div class="ornekler"><span>Sık arananlar:</span>${populer.map((m) => `<a class="cip" href="meslek/${meslekYolu(m)}/">${kacis(m.tr[0])}</a>`).join("")}</div>
    <ul class="rakamlar">
      <li><b>${MESLEKLER.length}</b> meslek</li>
      <li><b>${ULKELER.length}</b> ülke</li>
      <li><b>${Object.keys(Ortak.DIL_ADLARI).length}</b> dil</li>
      <li><b>${FIKIRLER.length}</b> iş fikri</li>
    </ul>
  </div>
</section>
<div class="sayfa">
  <div id="ara-sonuc" aria-live="polite"></div>
  <section class="blok nasil" id="nasil">
    <h2 class="bolum-baslik">Nasıl çalışır?</h2>
    <ol class="adimlar-3">
      <li><b>Mesleğini yaz</b><span>Türkçe yazman yeterli. "Finisher operatörü", "kaynakçı", "aşçı"…</span></li>
      <li><b>Adlarını gör</b><span>Aynı iş Almanya'da "Fertigerfahrer", Kanada'da "paver operator" diye aranır. Hepsini biz buluruz.</span></li>
      <li><b>İlanlara git</b><span>Her ülkenin devlet ve özel iş sitelerinde tek dokunuşla arama yaparsın.</span></li>
    </ol>
  </section>
  <section class="blok">
    <div class="bolum-bas"><h2 class="bolum-baslik">İşsiz misin? Sermayesiz başlanabilecek işler</h2><a href="fikirler/">Bütün iş fikirleri →</a></div>
    <div class="fikirler">${ucuzlar.map((f) => fikirKart(f, "")).join("")}</div>
  </section>
  <a class="tuzak-serit bilgi-serit blok" href="internetten-para-kazanma/"><b>💻 İnternetten para kazanma yolları</b><span>Evden yapılabilen gerçekçi işler: freelance, yapay zekâ eğitimi, online dil öğretmenliği ve daha fazlası.</span></a>
  <a class="tuzak-serit" href="tuzaklar/"><b>⚠️ Önce para isteyen iş tuzaklarını öğren</b><span>Evde paketleme, IBAN kiralama, yurt dışı iş vaadiyle vize parası… Nasıl tanınır?</span></a>
  <a class="tuzak-serit" href="saadet-zinciri/"><b>🛡️ Saadet zincirinden korun</b><span>Çiftlik Bank, Thodex, OneCoin… Gerçek vakalar, 10 tehlike işareti ve davet edilince sorulacak 5 soru.</span></a>
</div>`
}));

// ---------------- İş fikirleri listesi ----------------
yaz("fikirler/", sayfa({
  yol: "fikirler/", aktif: "fikirler", baslik: "Sermayene göre iş fikirleri",
  aciklama: "Sıfır sermayeden yatırımlığa " + FIKIRLER.length + " iş fikri: ne iş, kime uygun, ilk para ne zaman gelir, yasal kısım, gerçekçi kazanç ve tuzaklar.",
  icerik: `
<div class="sayfa">
  <section class="sayfa-bas">
    <h1>Sermayene göre iş fikirleri</h1>
    <p class="giris">Denenmiş, tutan işler ve Türkiye'de ve dünyada yeni yükselen iş modelleri. Her fikrin adım adım kılavuzu, yasal kısmı ve tuzakları içinde. Ucuz olanlar en üstte.</p>
  </section>
  <a class="tuzak-serit bilgi-serit" href="../internetten-para-kazanma/"><b>💻 İnternetten para kazanma yolları</b><span>Freelance, yapay zekâ eğitimi, RentAHuman, online öğretmenlik… Ödeme alma ve vergi rehberiyle.</span></a>
  <a class="tuzak-serit" href="../tuzaklar/"><b>⚠️ Başlamadan önce oku: Önce para isteyen iş tuzakları</b><span>Bir iş için önce sen para ödüyorsan, o iş değildir.</span></a>
  <div class="filtreler" id="filtreler">
    <div class="filtre-satir" data-grup="seviye"><button type="button" class="cip secili" data-deger="hepsi">Bütün sermayeler</button>${SEVIYELER.map((s, i) => `<button type="button" class="cip" data-deger="${i}">${kacis(s.ad)}</button>`).join("")}</div>
    <div class="filtre-satir" data-grup="yer"><button type="button" class="cip secili" data-deger="hepsi">Her yerde</button><button type="button" class="cip" data-deger="ev">Evde</button><button type="button" class="cip" data-deger="disari">Dışarıda</button><button type="button" class="cip" data-deger="internet">İnternette</button></div>
    <div class="filtre-satir" data-grup="tur"><button type="button" class="cip secili" data-deger="hepsi">Hepsi</button><button type="button" class="cip" data-deger="denenmis">Denenmiş, tutan işler</button><button type="button" class="cip" data-deger="yukselen">Yeni yükselenler</button></div>
  </div>
  ${SEVIYELER.map((s, i) => {
    const l = FIKIRLER.filter((f) => f.seviye === i);
    return `<section class="seviye" data-seviye="${i}"><div class="seviye-baslik"><h2>${kacis(s.ad)}</h2><span>${kacis(s.aralik)} · ${l.length} fikir</span></div><div class="fikirler">${l.map((f) => fikirKart(f, "../")).join("")}</div></section>`;
  }).join("")}
  <p class="bos" id="bos" hidden>Bu seçimlere uyan fikir yok. Filtreleri değiştir.</p>
</div>`
}));

// ---------------- Her iş fikrinin kılavuzu ----------------
for (const f of FIKIRLER) {
  const kok = "../../";
  const benzer = FIKIRLER.filter((x) => x.id !== f.id && x.seviye === f.seviye).slice(0, 3);
  const jsonld = { "@context": "https://schema.org", "@type": "Article", headline: f.baslik, description: f.ozet, inLanguage: "tr", author: { "@type": "Organization", name: SITE_ADI }, mainEntityOfPage: SITE + "fikir/" + f.id + "/" };
  yaz(`fikir/${f.id}/`, sayfa({
    yol: `fikir/${f.id}/`, aktif: "fikirler", baslik: f.baslik + ": nasıl başlanır?",
    aciklama: f.ozet + " Sermaye, ilk para, adım adım başlangıç, yasal kısım, kazanç ve tuzaklar.",
    ekBas: `<script type="application/ld+json">${JSON.stringify(jsonld)}</script>\n`,
    icerik: `
<div class="sayfa dar">
  <nav class="iz" aria-label="Konum"><a href="${kok}fikirler/">İş Fikirleri</a> › <span>${kacis(SEVIYELER[f.seviye].ad)}</span></nav>
  <article class="detay">
    <h1>${kacis(f.baslik)}</h1>
    <p class="giris">${kacis(f.ozet)}</p>
    ${etiketler(f, true)}
    <div class="ozet-tablo">
      <div><b>Başlangıç sermayesi</b>${kacis(f.sermaye)}</div>
      <div><b>İlk para ne zaman</b>${kacis(f.ilkPara)}</div>
      <div><b>Kime uygun</b>${kacis(f.kimeUygun)}</div>
    </div>
    <h2>Bu iş nedir?</h2><p>${kacis(f.neIs)}</p>
    <h2>İlk müşteriye kadar adım adım</h2>${liste(f.adimlar, "ol")}
    ${f.platformlar?.length ? `<h2>Nereden başlanır?</h2><div class="site-dugmeler">${f.platformlar.map((pl) => `<a href="${kacis(pl.url)}" target="_blank" rel="noopener nofollow">${kacis(pl.ad)} ↗</a>`).join("")}</div><p class="kaynak">Bu platformlarla bir bağımız yok. Üye olmadan önce ücretlerini, ödeme yöntemlerini ve Türkiye'den kabul edip etmediklerini kendi sitelerinden kontrol et.</p>` : ""}
    <h2>Yasal kısım</h2><p>${kacis(f.yasal)}</p>
    <h2>Gerçekçi kazanç beklentisi</h2><p>${kacis(f.kazanc)}</p>
    <p class="kaynak">Kazançlar şehre, emeğe ve mevsime göre çok değişir. Buradaki bilgiler söz değil, yön göstermek içindir.</p>
    <h2 class="tehlike-baslik">Bu işe özel tuzaklar ve sık yapılan hatalar</h2>${liste(f.tuzaklar, "ul")}
    ${f.batanlar ? `<h2 class="tehlike-baslik">Bu işte batanlar neden batıyor?</h2>${liste(f.batanlar, "ul")}` : ""}
    <h2>Ücretsiz destekler</h2>
    ${f.destekler.map((k) => { const d = DESTEKLER[k]; return `<div class="destek"><b>${d.url ? `<a href="${kacis(d.url)}" target="_blank" rel="noopener">${kacis(d.ad)} ↗</a>` : kacis(d.ad)}</b><span>${kacis(d.aciklama)}</span></div>`; }).join("")}
    <div class="not-kutu blok"><b>İşsizlik ödeneği uyarısı</b><br>${kacis(ODENEK_UYARISI)}</div>
    <p class="kaynak">Son kontrol: ${kacis(SON_KONTROL)}. Vergi, izin ve destek kuralları sık değişir; başlamadan önce vergi dairesi, belediye ve İŞKUR'dan güncel bilgiyi al.</p>
  </article>
  ${benzer.length ? `<section class="blok"><h2 class="bolum-baslik">Aynı sermayeyle başka fikirler</h2><div class="fikirler">${benzer.map((x) => fikirKart(x, kok)).join("")}</div></section>` : ""}
</div>`
  }));
}

// ---------------- Her meslek için arama sayfası ----------------
for (const m of MESLEKLER) {
  const y = meslekYolu(m), kok = "../../";
  const ingilizce = m.ad.en.slice(0, 2).join(", ");
  yaz(`meslek/${y}/`, sayfa({
    yol: `meslek/${y}/`, aktif: "ara", baslik: `Yurt dışında ${m.tr[0]} iş ilanları`,
    aciklama: `${m.tr[0]} yurt dışında "${ingilizce}" gibi adlarla aranır. ${ULKELER.length} ülkenin iş sitelerinde tek dokunuşla ara: Almanya, Körfez, Kanada, Avustralya ve daha fazlası.`,
    icerik: `
<div class="sayfa">
  <nav class="iz" aria-label="Konum"><a href="${kok}meslekler/">Meslekler</a> › <span>${kacis(m.tr[0])}</span></nav>
  <section class="sayfa-bas">
    <h1>Yurt dışında ${kacis(m.tr[0])} iş ilanları</h1>
    <p class="giris">Bu iş yurt dışında farklı adlarla aranır. Aşağıda her dildeki adı ve her ülkenin iş sitelerine hazır aramaları bulursun.</p>
    <form id="ara-form" class="ara-kutu kucuk" role="search" autocomplete="off" data-kok="${kok}">
      <input id="ara-girdi" type="search" placeholder="Başka bir meslek ara" aria-label="Meslek"><button type="submit">Ara</button>
    </form>
  </section>
  <div id="ara-sonuc" data-meslek="${y}">${Ortak.sonucHTML({ meslek: m, kok })}</div>
</div>`
  }));
}

// ---------------- Bütün meslekler ----------------
const sirali = [...MESLEKLER].sort((a, b) => a.tr[0].localeCompare(b.tr[0], "tr"));
const gruplar = {};
for (const m of sirali) (gruplar[m.grup || "Diğer"] ||= []).push(m);
yaz("meslekler/", sayfa({
  yol: "meslekler/", aktif: "meslekler", baslik: "Bütün meslekler",
  aciklama: MESLEKLER.length + " meslek için yurt dışı iş ilanı aramaları: inşaat ve iş makineleri, ulaşım, sanayi, sağlık, turizm ve daha fazlası.",
  icerik: `
<div class="sayfa">
  <section class="sayfa-bas"><h1>Bütün meslekler</h1><p class="giris">Mesleğini seç; dünyadaki adlarını ve ${ULKELER.length} ülkedeki iş ilanı aramalarını gör. Aradığın meslek yoksa <a href="../">ana sayfada</a> kendin yazarak arayabilirsin.</p></section>
  ${Object.keys(gruplar).sort((a, b) => a.localeCompare(b, "tr")).map((g) => `<section class="blok"><h2 class="bolum-baslik">${kacis(g)}</h2><div class="meslek-liste">${gruplar[g].map((m) => `<a href="../meslek/${meslekYolu(m)}/"><b>${kacis(m.tr[0])}</b><span>${kacis(m.ad.en[0])}</span></a>`).join("")}</div></section>`).join("")}
</div>`
}));

// ---------------- Tuzaklar ----------------
yaz("tuzaklar/", sayfa({
  yol: "tuzaklar/", aktif: "fikirler", baslik: "Önce para isteyen iş tuzakları",
  aciklama: "Evde paketleme, beğeni karşılığı para, IBAN kiralama, yurt dışı iş vaadiyle vize parası: iş arayanları hedef alan dolandırıcılıklar ve korunma yolları.",
  icerik: `
<div class="sayfa dar"><article class="detay">
  <h1>Önce para isteyen iş tuzakları</h1>
  <div class="bilgi-kutu"><b>Altın kural:</b> Bir iş için önce SEN para ödüyorsan, o iş değildir. Gerçek işler sana para öder.</div>
  <a class="tuzak-serit blok" href="../saadet-zinciri/"><b>🛡️ Saadet zinciri rehberi</b><span>Gerçek vakalar (Çiftlik Bank, OneCoin…), tanıma işaretleri ve davet edilince sorulacak sorular.</span></a>
  ${TUZAKLAR.map((t) => `<h2 class="tehlike-baslik">${kacis(t.baslik)}</h2><p>${kacis(t.aciklama)}</p>`).join("")}
  <div class="not-kutu blok"><b>Dolandırıldıysan</b><br>Vakit kaybetmeden bankanı ara ve hesabı durdurt; ardından savcılığa ya da en yakın karakola şikâyette bulun. Mesajları, dekontları ve ilanın ekran görüntülerini sakla.</div>
</article></div>`
}));

// ---------------- İnternetten para kazanma rehberi ----------------
{
  const internetFikirleri = FIKIRLER.filter((f) => f.yer.includes("internet")).sort((a, b) => a.seviye - b.seviye);
  yaz("internetten-para-kazanma/", sayfa({
    yol: "internetten-para-kazanma/", aktif: "internet", baslik: "İnternetten para kazanma yolları",
    aciklama: "Freelance, yapay zekâ eğitimi, RentAHuman, online dil öğretmenliği, sanal asistanlık ve " + internetFikirleri.length + " gerçekçi yol: nasıl başlanır, ödeme nasıl alınır, vergi ve dolandırıcılık uyarıları.",
    icerik: `
<div class="sayfa">
  <section class="sayfa-bas">
    <h1>İnternetten para kazanma yolları</h1>
    <p class="giris">Evden, bilgisayarla ya da telefonla yapılabilen ${internetFikirleri.length} gerçekçi yol. Her birinin adım adım kılavuzu, hangi sitelerden başlanacağı, vergi kısmı ve tuzakları içinde.</p>
  </section>
  <div class="bilgi-kutu"><b>Önce üç gerçek:</b>
    <ol class="sik">
      <li><b>Kolay para yoktur.</b> İnternetten kazanmak da bir iştir; ilk müşteri ve ilk para genelde haftalar ya da aylar sürer.</li>
      <li><b>Gerçek iş sana para öder.</b> Başlamak için senden kurs, paket, "aktivasyon" ya da "vergi" parası isteyen her şey dolandırıcılıktır.</li>
      <li><b>Platformlar komisyon alır.</b> Fiyatını komisyon ve para çekme ücretlerini hesaba katarak belirle.</li>
    </ol>
  </div>

  <section class="blok">
    <h2 class="bolum-baslik">Yollar</h2>
    <div class="fikirler">${internetFikirleri.map((f) => fikirKart(f, "../")).join("")}</div>
  </section>

  <section class="blok sayfa-dar-ic">
    <h2 class="bolum-baslik">Yurt dışından ödeme nasıl alınır?</h2>
    <ul class="sik">
      <li><b>PayPal Türkiye'de çalışmıyor.</b> Yurt dışı müşteriler ve platformlar için Türkiye'den en yaygın kullanılan yol Payoneer gibi ödeme hizmetleridir.</li>
      <li>Birçok platform doğrudan bankandaki <b>döviz hesabına</b> (SWIFT ile) ödeme yapabilir; bankanın gelen havale ücretini sor.</li>
      <li>Ödeme servislerinin Türkiye'deki durumu zaman zaman değişiyor. Hesap açmadan önce servisin güncel Türkiye kurallarına ve komisyonlarına bak.</li>
      <li>Kripto parayla ödeme alıyorsan yalnızca SPK'dan izinli kripto platformlarını kullan.</li>
    </ul>
    <h2 class="bolum-baslik">Vergi</h2>
    <ul class="sik">
      <li>Ara sıra küçük işler dışında, düzenli internet kazancı için vergi kaydı gerekir. Çoğu internet işi <b>serbest meslek</b> sayılır.</li>
      <li>Yurt dışındaki müşterilere verilen hizmetlerde <b>hizmet ihracatı</b> indirimi vardır: kazancın büyük kısmı vergiden düşülebilir.</li>
      <li>YouTube gibi platformlardan kazananlar için <b>sosyal içerik üreticiliği istisnası</b> vardır (bankada özel hesapla).</li>
      <li>29 yaş altıysan <b>genç girişimci istisnasına</b> bak.</li>
      <li>Şartlar her yıl değişir. Başlamadan önce bir mali müşavirle bir kez konuşmak en ucuz güvencedir.</li>
    </ul>
  </section>

  <section class="blok sayfa-dar-ic">
    <h2 class="bolum-baslik tehlike-baslik">İnternetteki iş tuzakları</h2>
    <ul class="sik">
      <li><b>Görev karşılığı para:</b> "Beğen, yorum yaz, ürün siparişi işle, kazan." İlk küçük ödemeler gelir, sonra "seviye atlamak" için senden para istenir.</li>
      <li><b>Kurs satan "gurular":</b> "Ben ayda şu kadar kazanıyorum, kursumu al." Gerçek kazançları çoğu zaman kurs satışından gelir.</li>
      <li><b>Fazla ödeme dolandırıcılığı:</b> Müşteri fazla para gönderir, "farkı iade et" der; sonra ilk ödeme iptal olur.</li>
      <li><b>Kimlik hırsızlığı:</b> "İşe alım için" kimlik fotoğrafı, selfie, banka bilgisi isteyen ve resmî bir sitesi olmayan işverenler.</li>
      <li><b>Para katırlığı:</b> "Hesabına para gelecek, çekip ileteceksin." Bu, dolandırıcılık parasını aklamaktır ve suçtur.</li>
      <li><b>Saadet zinciri:</b> Kazancın yolu yeni üye getirmekse uzak dur. <a href="../saadet-zinciri/">Saadet zinciri rehberine bak.</a></li>
    </ul>
    <p class="kaynak">Sitedeki platform bağlantıları bilgi içindir; bu platformlarla bir bağımız yoktur ve kimseden komisyon almıyoruz. Her platformun güncel şartlarını kendi sitesinden oku. Son kontrol: ${kacis(SON_KONTROL)}.</p>
  </section>
</div>`
  }));
}

// ---------------- Saadet zinciri rehberi ----------------
yaz("saadet-zinciri/", sayfa({
  yol: "saadet-zinciri/", aktif: "fikirler", baslik: "Saadet zinciri nedir, nasıl tanınır?",
  aciklama: "Saadet zinciri, Ponzi ve sahte yatırım tuzakları: gerçek vakalar (Çiftlik Bank, Thodex, OneCoin, Madoff), 10 tehlike işareti, yasal doğrudan satıştan farkı ve kaptırınca ne yapmalı.",
  icerik: `
<div class="sayfa dar"><article class="detay">
  <nav class="iz" aria-label="Konum"><a href="../tuzaklar/">İş Tuzakları</a> › <span>Saadet zinciri</span></nav>
  <h1>Saadet zincirinden korun</h1>
  <p class="giris">Saadet zinciri ve benzeri sistemler, kazancı gerçek bir işten değil yeni gelenlerin parasından sağlar. Bir süre sonra mutlaka çöker ve en son girenler, yani çoğunluk, parasını kaybeder. Bu sayfa günlük hayatta karşına çıktığında tanıyabilmen için hazırlandı.</p>
  <div class="bilgi-kutu"><b>Kısaca:</b> Kazanç garanti ediliyorsa, getiri gerçek dışıysa ya da para kazanmanın yolu yeni insan getirmekse, uzak dur. Türkiye'de piramit satış sistemi kurmak, yaymak ve tavsiye etmek Tüketicinin Korunması Hakkında Kanun'la yasaktır; para toplanması dolandırıcılık suçuna da girer.</div>

  <h2>Hangi kılıklarda karşına çıkar?</h2>
  ${SAADET.turler.map((t) => `<h3>${kacis(t.ad)}</h3><p>${kacis(t.nasil)}</p>`).join("")}

  <h2 class="tehlike-baslik">10 tehlike işareti</h2>
  <p>Bunlardan biri bile varsa dur ve araştır:</p>
  ${liste(SAADET.isaretler, "ol")}

  <h2>Gerçek vakalar</h2>
  <p class="kaynak">Burada yalnızca mahkeme kararı, resmî suçlama ya da resmî kurum açıklaması bulunan vakalar yer alır. Bir sistemin bu listede olmaması güvenli olduğu anlamına gelmez.</p>
  ${SAADET.vakalar.map((v) => `<section class="kart vaka">
    <h3>${kacis(v.ad)}</h3><p class="vaka-ust">${kacis(v.yer)} · ${kacis(v.yil)}</p>
    <p><b>Nasıl işledi?</b> ${kacis(v.nasil)}</p>
    <p><b>Ne oldu?</b> ${kacis(v.durum)}</p>
    <p class="vaka-ders"><b>Ders:</b> ${kacis(v.ders)}</p>
    <p class="kaynak">Kaynak: <a href="${kacis(v.kaynak.url)}" target="_blank" rel="noopener nofollow">${kacis(v.kaynak.ad)} ↗</a></p>
  </section>`).join("")}

  <h2>Yasal doğrudan satış mı, piramit mi?</h2>
  <p>Kapı kapı ya da tanıdıklara ürün satmak (doğrudan satış) yasaldır ve Ticaret Bakanlığı'nın kurallarına tabidir. Piramit ise yasaktır. Farkı şöyle anlarsın:</p>
  <div class="tablo-kutu"><table class="fark"><thead><tr><th></th><th>Yasal doğrudan satış</th><th>Piramit / saadet zinciri</th></tr></thead><tbody>
  ${SAADET.fark.map((r) => `<tr><th>${kacis(r[0])}</th><td>${kacis(r[1])}</td><td>${kacis(r[2])}</td></tr>`).join("")}
  </tbody></table></div>

  <h2>Biri seni davet ederse, şu 5 soruyu sor</h2>
  ${liste(SAADET.sorular, "ol")}
  <p>Net ve belgeli cevap alamıyorsan, ya da sorduğun için ayıplanıyorsan, bu da bir cevaptır.</p>

  <h2>Güncel isimleri nereden kontrol edersin?</h2>
  <p>Yeni sistemler sürekli ad değiştirerek ortaya çıkar. Bir ismi duyduğunda şu resmî kaynaklarda ara:</p>
  ${SAADET.kontrol.map((k) => `<div class="destek"><b><a href="${kacis(k.url)}" target="_blank" rel="noopener">${kacis(k.ad)} ↗</a></b><span>${kacis(k.aciklama)}</span></div>`).join("")}
  <p>İnternette "<i>isim + şikayet</i>", "<i>isim + SPK</i>", "<i>isim + dolandırıcılık</i>" diye aramak da çoğu zaman yeterli fikir verir.</p>

  <h2 class="tehlike-baslik">Kaptırdıysan ne yapmalısın?</h2>
  ${liste(SAADET.kaptirdiysan, "ol")}

  <p class="kaynak">Son kontrol: ${kacis(SAADET.sonKontrol)}. Davaların durumu değişebilir; burada yazan aşamalar (ilk derece, istinaf gibi) kontrol tarihindeki bilgidir. Bu sayfa hukuki tavsiye değildir.</p>
</article></div>`
}));

// ---------------- Hakkında ----------------
yaz("hakkinda/", sayfa({
  yol: "hakkinda/", baslik: "Hakkında",
  aciklama: "İş Pusulası, iş arayanlara ve kendi işini kurmak isteyenlere ücretsiz, Türkçe ve dürüst bilgi veren bağımsız bir sitedir.",
  icerik: `
<div class="sayfa dar"><article class="detay">
  <h1>Hakkında</h1>
  <p class="giris">İş Pusulası, iş arayanlara ve kendi işini kurmak isteyenlere ücretsiz, Türkçe ve dürüst bilgi vermek için kuruldu.</p>
  <h2>Neden?</h2>
  <p>Yurt dışında çalışmak isteyen ustaların ve operatörlerin önündeki ilk engel dildir: Aynı iş Almanya'da başka, Kanada'da başka bir adla aranır. Çoğu kişi bu adları bilmediği için ilanları hiç göremez. İş Pusulası bu adları senin yerine bulur ve doğrudan ilanlara götürür.</p>
  <p>İşsiz kalan ya da ek gelir arayan kişiler ise çoğu zaman ya boş vaatlerle ya da önce para isteyen tuzaklarla karşılaşır. İş Fikirleri bölümü, gerçekçi beklentiler, yasal adımlar ve ücretsiz devlet destekleriyle bu boşluğu doldurmak için var.</p>
  <h2>İlkelerimiz</h2>
  <ul>
    <li><b>Ücretsiz:</b> Üyelik yok, ücret yok, reklam yok.</li>
    <li><b>Dürüst:</b> Kazanç garantisi vermiyoruz; her fikrin tuzaklarını ve batma sebeplerini de yazıyoruz.</li>
    <li><b>Güvenli:</b> Önce para isteyen, saadet zinciri gibi işleyen ya da yasal olmayan hiçbir sistemi önermiyoruz.</li>
    <li><b>Denetimli:</b> Her hafta yeni fikir ve meslekler eklenir. Her ekleme yayına girmeden önce ayrı bir denetimden ve otomatik kural kontrolünden geçer.</li>
  </ul>
  <h2>İlanlar nereden geliyor?</h2>
  <p>İş Pusulası ilan yayınlamaz ve kimseyi işe almaz. Düğmeler seni ülkelerin devlet iş portallarına ve bilinen iş ilanı sitelerine götürür. Başvurduğun işvereni ve aracı firmayı her zaman kendin doğrula.</p>
</article></div>`
}));

// ---------------- Gizlilik ve sorumluluk ----------------
yaz("gizlilik/", sayfa({
  yol: "gizlilik/", baslik: "Gizlilik ve sorumluluk",
  aciklama: "İş Pusulası kişisel veri toplamaz, çerez kullanmaz. Bilgilerin kullanımına dair sorumluluk notu.",
  icerik: `
<div class="sayfa dar"><article class="detay">
  <h1>Gizlilik ve sorumluluk</h1>
  <h2>Kişisel veri</h2>
  <p>İş Pusulası üyelik istemez, ad, telefon ya da e-posta toplamaz ve çerez kullanmaz. Aradığın meslekler bizim sunucumuza gönderilmez; arama senin cihazında yapılır.</p>
  <h2>Ziyaretçi sayımı</h2>
  <p>Sitenin kaç kez ziyaret edildiğini görmek için çerezsiz ve kişisel bilgi tutmayan GoatCounter sayacını kullanıyoruz. Bu sayaç yalnızca hangi sayfanın kaç kez açıldığını sayar; seni tanımlayan bir bilgi saklamaz.</p>
  <h2>Cihazında saklananlar</h2>
  <p>"Uygulamayı yükle" şeridini kapattığında bunu hatırlamak için tarayıcına küçük bir not yazılır. Siteyi internetsiz açabilmen için sayfalar tarayıcının önbelleğine kaydedilir. İkisini de tarayıcı ayarlarından silebilirsin.</p>
  <h2>Başka siteler</h2>
  <p>İş ilanı düğmeleri seni başka sitelere götürür. O sitelerin kendi gizlilik kuralları geçerlidir.</p>
  <h2>Sorumluluk notu</h2>
  <p>Bu sitedeki bilgiler genel bilgilendirme amaçlıdır; hukuki, mali ya da yatırım tavsiyesi değildir. Vergi, izin, vize ve destek kuralları sık değişir. Bir karar vermeden önce vergi dairesi, belediye, İŞKUR, KOSGEB ve ilgili ülkenin resmi kurumlarından güncel bilgiyi al. Kazanç rakamları tahmindir ve garanti değildir.</p>
  <p class="kaynak">Son güncelleme: ${kacis(SON_KONTROL)}.</p>
</article></div>`
}));

// ---------------- 404 ----------------
fs.writeFileSync(path.join(CIKTI, "404.html"), sayfa({
  yol: "", baslik: "Sayfa bulunamadı", aciklama: "Aradığın sayfa bulunamadı.", ekBas: '<meta name="robots" content="noindex">\n',
  icerik: `<div class="sayfa dar"><section class="sayfa-bas"><h1>Bu sayfa bulunamadı</h1><p class="giris">Adres değişmiş ya da yanlış yazılmış olabilir.</p><p><a class="dugme" href="${SITE}">Ana sayfaya dön</a></p></section></div>`
}).replace(/data-kok=""/, `data-kok="${SITE}"`).replace(/(href|src)="(?!https?:|#|data:|\/)([^"]*)"/g, (_, a, b) => `${a}="${SITE}${b}"`));

// ---------------- Google için harita ----------------
const adresler = ["", "fikirler/", "internetten-para-kazanma/", "meslekler/", "tuzaklar/", "saadet-zinciri/", "hakkinda/", "gizlilik/"]
  .concat(FIKIRLER.map((f) => `fikir/${f.id}/`))
  .concat(MESLEKLER.map((m) => `meslek/${meslekYolu(m)}/`));
fs.writeFileSync(path.join(CIKTI, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${adresler.map((a) => `  <url><loc>${SITE}${a}</loc></url>`).join("\n")}\n</urlset>\n`);
fs.writeFileSync(path.join(CIKTI, "robots.txt"), `User-agent: *\nAllow: /\nSitemap: ${SITE}sitemap.xml\n`);

// ---------------- Sabit dosyaları kopyala ----------------
for (const f of ["stil.css", "ortak.js", "uygulama.js", "manifest.webmanifest", "veri", "ikonlar"]) {
  fs.cpSync(path.join(KOK, f), path.join(CIKTI, f), { recursive: true });
}
// Çevrimdışı dosyası: her üretimde yeni sürüm adı alır, böylece telefonlar güncel sayfayı çeker.
const surum = new Date().toISOString().replace(/\D/g, "").slice(0, 12);
fs.writeFileSync(path.join(CIKTI, "sw.js"), fs.readFileSync(path.join(KOK, "sw.js"), "utf8").replace("__SURUM__", surum));
fs.writeFileSync(path.join(CIKTI, ".nojekyll"), "");

console.log(`Hazır: ${adresler.length} sayfa (${FIKIRLER.length} fikir, ${MESLEKLER.length} meslek, ${ULKELER.length} ülke) -> _site/`);

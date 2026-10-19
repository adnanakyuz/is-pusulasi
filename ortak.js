// Hem tarayıcıda (uygulama.js) hem sayfa üretiminde (scripts/uret.mjs) kullanılan ortak işler.
// Veriler window.MESLEKLER, window.ULKELER, window.BOLGELER, window.GENEL_SITELER'den okunur.
(function (w) {
  "use strict";

  var DIL_ADLARI = { en: "İngilizce", de: "Almanca", nl: "Hollandaca", fr: "Fransızca", es: "İspanyolca", it: "İtalyanca", pl: "Lehçe", ar: "Arapça" };

  function kacis(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function sade(s) {
    return String(s).toLocaleLowerCase("tr")
      .replace(/ç/g, "c").replace(/ğ/g, "g").replace(/ı/g, "i").replace(/ö/g, "o").replace(/ş/g, "s").replace(/ü/g, "u")
      .replace(/â/g, "a").replace(/î/g, "i").replace(/û/g, "u")
      .replace(/[^a-z0-9 ]/g, " ").replace(/\s+/g, " ").trim();
  }
  // Meslek sayfasının adresi: "finisher operatörü" -> "finisher-operatoru"
  function meslekYolu(m) { return sade(m.tr[0]).replace(/ /g, "-"); }

  function puanla(sorgu, meslek) {
    var q = sade(sorgu), en = 0;
    if (!q) return 0;
    var kelimeler = q.split(" ");
    meslek.tr.forEach(function (ad) {
      var a = sade(ad), p = 0;
      if (a === q) p = 100;
      else if (a.indexOf(q) === 0 || q.indexOf(a) === 0) p = 80;
      else if (a.indexOf(q) >= 0 || q.indexOf(a) >= 0) p = 60;
      else {
        var ak = a.split(" ");
        var ortak = kelimeler.filter(function (k) {
          return k.length > 2 && ak.some(function (x) { return x.indexOf(k) === 0 || k.indexOf(x) === 0; });
        }).length;
        p = Math.round(50 * ortak / Math.max(kelimeler.length, ak.length));
      }
      if (p > en) en = p;
    });
    return en;
  }
  function meslekBul(sorgu) {
    return w.MESLEKLER
      .map(function (m) { return { m: m, p: puanla(sorgu, m) }; })
      .filter(function (x) { return x.p >= 25; })
      .sort(function (a, b) { return b.p - a.p; })
      .map(function (x) { return x.m; });
  }

  // Bir ülkede hangi adla aranacağı. secim: { dil: sıra }
  function aramaAdi(m, ulke, secim) {
    if (ulke.dil === "tr") return m.tr[0];
    var dil = m.ad[ulke.dil] ? ulke.dil : "en";
    var liste = m.ad[dil] || [m.tr[0]];
    return liste[(secim && secim[dil]) || 0] || liste[0];
  }
  function adres(sablon, terim, ulke) {
    var slug = terim.toLocaleLowerCase("en").replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "");
    return sablon
      .replace("{q}", encodeURIComponent(terim))
      .replace("{slug}", encodeURIComponent(slug).replace(/%2D/g, "-"))
      .replace("{ulke}", encodeURIComponent(ulke.en || ulke.ad));
  }

  // Arama sonucunun HTML'i. Tarayıcıda canlı, üretimde sayfaya gömülü olarak kullanılır.
  // d: { meslek, secim, bolge, digerleri, kok }  kok: siteye göreli kök ("" ya da "../../")
  function sonucHTML(d) {
    var m = d.meslek, secim = d.secim || {}, bolge = d.bolge || "Hepsi", kok = d.kok || "", html = "";

    if (m.ozel) {
      html += '<div class="not-kutu blok"><b>Bu meslek sözlüğümüzde henüz yok.</b> Yazdığın şekliyle arıyoruz. ' +
        "İngilizce adını biliyorsan aşağıya yaz; yurt dışı sonuçları çok daha iyi olur." +
        '<form id="ozel-form" class="ara-kutu kucuk" style="margin-top:10px"><input id="ozel-en" aria-label="İngilizce adı" placeholder="İngilizce adı (ör. paver operator)" value="' +
        kacis(m.ad.en[0] === m.tr[0] ? "" : m.ad.en[0]) + '"><button type="submit">Uygula</button></form></div>';
    } else {
      html += '<div class="blok"><h2 class="bolum-baslik">“' + kacis(m.tr[0]) + '” dünyada şöyle aranıyor</h2>' +
        '<p class="soluk">Her dilde aranacak adı seçebilirsin. Seçtiğin ad aşağıdaki bütün ülkelerde kullanılır.</p>';
      if (d.digerleri && d.digerleri.length) {
        html += '<p class="kucuk-yazi">Bunu mu demek istedin? ' + d.digerleri.map(function (x) {
          return '<a href="' + kok + "meslek/" + meslekYolu(x) + '/">' + kacis(x.tr[0]) + "</a>";
        }).join(" · ") + "</p>";
      }
      html += '<div class="kart diller">';
      Object.keys(DIL_ADLARI).forEach(function (dil) {
        if (!m.ad[dil]) return;
        html += '<div class="dil-satir"><b>' + DIL_ADLARI[dil] + '</b><div class="cipler">' +
          m.ad[dil].map(function (ad, i) {
            var sec = (secim[dil] || 0) === i;
            return '<button type="button" class="cip' + (sec ? " secili" : "") + '" data-dil="' + dil + '" data-i="' + i + '" dir="auto" aria-pressed="' + sec + '">' + kacis(ad) + "</button>";
          }).join("") + "</div></div>";
      });
      html += "</div>";
      if (m.not) html += '<div class="not-kutu ust-bosluk">💡 ' + kacis(m.not) + "</div>";
      html += "</div>";
    }

    html += '<div class="blok"><h2 class="bolum-baslik">Ülkeler ve iş siteleri</h2><div class="bolge-sec" role="group" aria-label="Bölge">' +
      ["Hepsi"].concat(w.BOLGELER).map(function (b) {
        return '<button type="button" class="cip' + (bolge === b ? " secili" : "") + '" data-bolge="' + kacis(b) + '" aria-pressed="' + (bolge === b) + '">' + kacis(b) + "</button>";
      }).join("") + '</div><div class="ulkeler">';

    w.ULKELER.forEach(function (u) {
      if (bolge !== "Hepsi" && u.bolge !== bolge) return;
      var terim = aramaAdi(m, u, secim);
      if (u.onEk) terim = u.onEk + " " + terim;
      html += '<div class="kart ulke"><div class="ulke-bas"><img class="bayrak" src="https://flagcdn.com/w80/' + (u.bayrakKod || u.kod) + '.png" alt="" width="36" height="24" loading="lazy">' +
        "<h3>" + kacis(u.ad) + '</h3></div><p class="aranan">Aranan ad: <code dir="auto">' + kacis(terim) + '</code></p><div class="site-dugmeler">' +
        u.siteler.map(function (s) {
          return '<a href="' + kacis(adres(s.url, terim, u)) + '" target="_blank" rel="noopener nofollow">' + kacis(s.ad) + ' <span aria-hidden="true">↗</span></a>';
        }).join("") +
        (u.genelYok ? "" : w.GENEL_SITELER.map(function (s) {
          return '<a class="genel" href="' + kacis(adres(s.url, terim, u)) + '" target="_blank" rel="noopener nofollow">' + kacis(s.ad) + ' <span aria-hidden="true">↗</span></a>';
        }).join("")) + "</div>" +
        (u.not ? '<p class="ulke-not">' + kacis(u.not) + "</p>" : "") +
        (u.resmi ? '<p class="ulke-not"><a href="' + kacis(u.resmi.url) + '" target="_blank" rel="noopener">' + kacis(u.resmi.ad) + ' <span aria-hidden="true">↗</span></a></p>' : "") +
        "</div>";
    });
    html += "</div></div>";

    html += '<div class="blok not-kutu"><b>⚠️ Yurt dışı iş ilanlarında dikkat</b><ul>' +
      "<li>Gerçek işverenler işçiden vize, kayıt ya da iş bulma ücreti istemez.</li>" +
      "<li>Pasaportunu kimseye teslim etme; sözleşmeyi imzalamadan önce Türkçe çevirisini iste.</li>" +
      "<li>Aracı firmanın yurt dışına işçi gönderme izni olup olmadığını İŞKUR'dan kontrol et.</li>" +
      '<li>Daha fazlası için <a href="' + kok + 'tuzaklar/">iş tuzakları sayfasına</a> bak.</li></ul></div>';
    return html;
  }

  w.Ortak = { DIL_ADLARI: DIL_ADLARI, kacis: kacis, sade: sade, meslekYolu: meslekYolu, meslekBul: meslekBul, aramaAdi: aramaAdi, adres: adres, sonucHTML: sonucHTML };
})(typeof window !== "undefined" ? window : globalThis);

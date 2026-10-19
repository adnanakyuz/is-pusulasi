// İş Pusulası tarayıcı kodu: meslek arama, iş fikri süzme, uygulama olarak yükleme, ziyaretçi sayacı.
// Sayfaların kendisi scripts/uret.mjs ile hazır üretilir; bu dosya yalnızca etkileşimi ekler.
(function () {
  "use strict";
  var O = window.Ortak;
  var KOK = document.body.getAttribute("data-kok") || "";
  function $(s) { return document.querySelector(s); }

  // ---------------- MESLEK ARAMA ----------------
  var durum = { meslek: null, secim: {}, bolge: "Hepsi", digerleri: [] };
  var sonuc = $("#ara-sonuc");

  function ciz() {
    sonuc.innerHTML = O.sonucHTML({ meslek: durum.meslek, secim: durum.secim, bolge: durum.bolge, digerleri: durum.digerleri, kok: KOK });
  }

  function ara(sorgu, kaydir) {
    var bulunan = O.meslekBul(sorgu);
    durum.secim = {};
    durum.bolge = "Hepsi";
    if (bulunan.length) {
      durum.meslek = bulunan[0];
      durum.digerleri = bulunan.slice(1, 4);
    } else {
      // Sözlükte yok: kullanıcının yazdığıyla (ve isterse İngilizce adıyla) aranır.
      durum.meslek = { tr: [sorgu], ad: { en: [sorgu] }, ozel: true };
      durum.digerleri = [];
    }
    ciz();
    var g = $("#ara-girdi");
    if (g) g.value = sorgu;
    if (kaydir) sonuc.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  var form = $("#ara-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var q = $("#ara-girdi").value.trim();
      if (!q) return;
      if (!$(".ana")) { location.href = KOK + "#ara/" + encodeURIComponent(q); return; }
      if (location.hash === "#ara/" + encodeURIComponent(q)) ara(q, true);
      else location.hash = "#ara/" + encodeURIComponent(q);
    });
  }

  if (sonuc) {
    sonuc.addEventListener("click", function (e) {
      var t = e.target.closest("button");
      if (!t) return;
      if (t.hasAttribute("data-dil")) {
        durum.secim[t.getAttribute("data-dil")] = +t.getAttribute("data-i");
        ciz();
      } else if (t.hasAttribute("data-bolge")) {
        durum.bolge = t.getAttribute("data-bolge");
        ciz();
      }
    });
    sonuc.addEventListener("submit", function (e) {
      if (e.target.id !== "ozel-form") return;
      e.preventDefault();
      var en = $("#ozel-en").value.trim();
      durum.meslek.ad.en = [en || durum.meslek.tr[0]];
      ciz();
    });
    // Meslek sayfası: hazır gelen sonucu canlandır.
    var yol = sonuc.getAttribute("data-meslek");
    if (yol) {
      durum.meslek = window.MESLEKLER.filter(function (m) { return O.meslekYolu(m) === yol; })[0];
    }
  }

  function hashOku() {
    var h = decodeURIComponent(location.hash.slice(1));
    if (sonuc && h.indexOf("ara/") === 0 && h.length > 4) ara(h.slice(4), document.readyState === "complete");
  }
  if ($(".ana")) { window.addEventListener("hashchange", hashOku); hashOku(); }

  // ---------------- İŞ FİKRİ SÜZME ----------------
  var filtreler = $("#filtreler");
  if (filtreler) {
    var secili = { seviye: "hepsi", yer: "hepsi", tur: "hepsi" };
    filtreler.addEventListener("click", function (e) {
      var t = e.target.closest("button");
      if (!t) return;
      var grup = t.parentNode.getAttribute("data-grup");
      secili[grup] = t.getAttribute("data-deger");
      t.parentNode.querySelectorAll("button").forEach(function (b) { b.classList.toggle("secili", b === t); });
      var toplam = 0;
      document.querySelectorAll("section.seviye").forEach(function (bolum) {
        var gorunen = 0;
        bolum.querySelectorAll(".fikir-kart").forEach(function (k) {
          var uy = (secili.seviye === "hepsi" || k.getAttribute("data-seviye") === secili.seviye) &&
            (secili.yer === "hepsi" || k.getAttribute("data-yer").split(" ").indexOf(secili.yer) >= 0) &&
            (secili.tur === "hepsi" || k.getAttribute("data-tur") === secili.tur);
          k.hidden = !uy;
          if (uy) gorunen++;
        });
        bolum.hidden = gorunen === 0;
        toplam += gorunen;
      });
      $("#bos").hidden = toplam > 0;
    });
  }

  // ---------------- UYGULAMA OLARAK YÜKLEME ----------------
  // Android ve bilgisayarda tarayıcının kendi kurulum penceresi açılır; iPhone'da adımlar gösterilir.
  var kurulu = window.matchMedia("(display-mode: standalone)").matches || navigator.standalone === true;
  var iPhone = /iphone|ipad|ipod/i.test(navigator.userAgent) || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  var telefon = window.matchMedia("(pointer: coarse)").matches;
  var kurIstemi = null;
  var serit = $("#kur-serit"), dugme = $("#kur");

  function adim(no, html) { return '<li><span class="no">' + no + "</span><span>" + html + "</span></li>"; }
  function kurGoster() {
    if (kurulu || !dugme) return;
    dugme.hidden = false;
    if (iPhone || telefon) dugme.textContent = "Ana ekrana ekle";
    var kapali = 0;
    try { kapali = Number(localStorage.getItem("ip-kur-kapat")) || 0; } catch (e) {}
    if (telefon && Date.now() - kapali > 14 * 864e5) serit.classList.add("on");
  }
  function kurGizle() { if (dugme) dugme.hidden = true; if (serit) serit.classList.remove("on"); }
  function kur() {
    if (kurIstemi) {
      kurIstemi.prompt();
      kurIstemi.userChoice.then(function (c) { kurIstemi = null; if (c.outcome === "accepted") kurGizle(); });
      return;
    }
    var ol = $("#kur-adimlar");
    $("#kur-baslik").textContent = iPhone || telefon ? "Ana ekrana ekle" : "Uygulamayı yükle";
    if (iPhone) {
      ol.innerHTML = adim(1, "Ekranın altındaki (iPad'de üstteki) <b>Paylaş</b> simgesine (kutudan çıkan ok) dokun.") +
        adim(2, "Listede aşağı kaydır ve <b>Ana Ekrana Ekle</b>'yi seç.") + adim(3, "Sağ üstteki <b>Ekle</b>'ye dokun.");
    } else if (telefon) {
      ol.innerHTML = adim(1, "Tarayıcının sağ üstündeki <b>⋮</b> menüsüne dokun.") +
        adim(2, "<b>Ana ekrana ekle</b> ya da <b>Uygulamayı yükle</b>'yi seç.") + adim(3, "<b>Ekle</b> / <b>Yükle</b>'ye dokun.");
    } else {
      ol.innerHTML = adim(1, "Adres çubuğunun sağındaki <b>yükle</b> simgesine tıkla. Görmüyorsan sağ üstteki <b>⋮</b> / <b>…</b> menüsünü aç.") +
        adim(2, "<b>İş Pusulası'nı yükle</b> ya da <b>Uygulamalar → Bu siteyi uygulama olarak yükle</b>'yi seç.") +
        adim(3, "<b>Yükle</b>'ye tıkla. Firefox bu özelliği desteklemez; Chrome ya da Edge kullan.");
    }
    $("#kur-pencere").showModal();
  }
  window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); kurIstemi = e; kurGoster(); });
  window.addEventListener("appinstalled", kurGizle);
  if (dugme) {
    kurGoster();
    dugme.onclick = kur;
    $("#kur-ekle").onclick = kur;
    $("#kur-kapat").onclick = function () {
      serit.classList.remove("on");
      try { localStorage.setItem("ip-kur-kapat", String(Date.now())); } catch (e) {}
    };
    $("#kur-tamam").onclick = function () { $("#kur-pencere").close(); };
  }

  // ---------------- İNTERNETSİZ ÇALIŞMA VE SAYAÇ ----------------
  var yerel = location.hostname === "localhost" || location.hostname === "127.0.0.1" || location.protocol === "file:";
  if ("serviceWorker" in navigator && !yerel) {
    window.addEventListener("load", function () { navigator.serviceWorker.register(KOK + "sw.js").catch(function () {}); });
  }
  // GoatCounter: çerezsiz, kişisel bilgi tutmaz; yalnızca sayfa açılışlarını sayar.
  if (!yerel) {
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://gc.zgo.at/count.js";
    s.setAttribute("data-goatcounter", "https://finansalokuryazar.goatcounter.com/count");
    document.head.appendChild(s);
  }
})();

// İnternetsiz çalışma: açılan sayfaları cihaza kaydeder. Önce internetten tazesini dener,
// internet yoksa kayıtlı kopyayı gösterir. __SURUM__ her yayında scripts/uret.mjs tarafından değiştirilir.
const SURUM = "is-pusulasi-__SURUM__";
const TEMEL = ["./", "fikirler/", "meslekler/", "tuzaklar/", "stil.css", "ortak.js", "uygulama.js",
  "veri/meslekler.js", "veri/ulkeler.js", "veri/fikirler.js", "ikonlar/ikon.svg", "ikonlar/ikon-192.png", "manifest.webmanifest"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(SURUM).then((c) => c.addAll(TEMEL)));
  self.skipWaiting();
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((k) => Promise.all(k.filter((x) => x !== SURUM).map((x) => caches.delete(x)))));
  self.clients.claim();
});
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then((r) => {
      if (r.ok) { const kopya = r.clone(); caches.open(SURUM).then((c) => c.put(e.request, kopya)); }
      return r;
    }).catch(() => caches.match(e.request).then((r) => r || caches.match("./")))
  );
});

# İş Pusulası

Mesleğini Türkçe yaz, dünyada hangi adla arandığını ve 32 ülkenin iş sitelerinde nerede aranıyor olduğunu bul.
Sermayene göre gerçekçi iş fikirleri ve adım adım kılavuzları. Ücretsiz, üyeliksiz, reklamsız.

Site: https://adnanakyuz.github.io/is-pusulasi/

## Nasıl çalışır?
- `veri/meslekler.js`: meslek sözlüğü (Türkçe ad → 8 dildeki adları)
- `veri/ulkeler.js`: ülkeler ve iş siteleri
- `veri/fikirler.js`: iş fikirleri, destekler, tuzaklar
- `scripts/uret.mjs`: bu verilerden her fikir ve meslek için ayrı sayfa üretir (`_site/`)
- `.github/workflows/yayinla.yml`: main dalına her değişiklikte siteyi üretir ve yayınlar
- `TARA.md`: haftalık Tara görevinin talimatı (Pazartesi 09:00). Yeni bulunanları `claude/tara-...` dalına yazar.
- `DENETCI.md`: haftalık Denetçi görevinin talimatı (Pazartesi 10:00). Tara dalını inceler, uygun olanı main'e alır.
- `scripts/uret.mjs` içindeki kesin kurallar: yasaklı ifadeler ve izinli site listesi; bozulursa hiçbir şey yayınlanmaz.

Elle denemek için: `node scripts/uret.mjs`, ardından `_site` klasörünü bir yerel sunucuyla aç.

# Haftalık Tara görevi (Claude için talimat)

Sen İş Pusulası'nın haftalık içerik araştırmacısısın. Site: https://adnanakyuz.github.io/is-pusulasi/
Bu depo sitenin kaynağıdır. Görevin, son taramadan bu yana çıkan yeni ve gerçekçi iş modellerini ve
eksik meslekleri bulup eklemek. Hiçbir şeyi doğrudan main dalına gönderme. Gönderdiğin dalı
bağımsız bir Denetçi görevi (DENETCI.md) inceler; uygun bulduğunu yayına alır, şüpheli olanı çıkarır.
Sadece `veri/fikirler.js`, `veri/meslekler.js` ve `TARA_GUNLUGU.md` dosyalarını değiştir, mevcut kayıtları silme ve link ekleme;
aksi halde Denetçi bütün çalışmanı reddeder.

## Adımlar

1. `TARA_GUNLUGU.md` dosyasını oku. Son tarama tarihini ve daha önce önerilip reddedilen/eklenen fikirleri öğren.
   Son taramadan bugüne kadar geçen bütün günleri kapsa (birkaç hafta geçtiyse hepsini).
2. Web'de araştır: Türkiye'de ve dünyada yeni yayılan, küçük sermayeyle yapılabilen iş modelleri;
   işsizlere uygun işler; yurt dışında Türklerin çok aradığı ama `veri/meslekler.js`'de olmayan meslekler.
3. En fazla **3 yeni iş fikri** ve en fazla **5 yeni meslek** seç. Kalite sayıdan önemlidir; uygun bir şey yoksa ekleme.
4. Ekle:
   - İş fikirleri `veri/fikirler.js` içindeki `window.FIKIRLER` dizisinin sonuna, mevcut fikirlerle **aynı alanlarla**
     (id, baslik, seviye, yer, tur, ozet, neIs, kimeUygun, sermaye, ilkPara, adimlar, yasal, kazanc, tuzaklar,
     yatırımlık ise batanlar, destekler). Destek anahtarları `window.DESTEKLER`'de olanlardan seçilir.
   - Meslekler `veri/meslekler.js` içine doğru gruba, `m(grup, [türkçe adlar], { en, de, nl, fr, es, it, pl, ar })` biçiminde.
5. `node scripts/uret.mjs` çalıştır. Hata verirse düzelt; hata varken gönderme.
6. `TARA_GUNLUGU.md`'nin başına bugünün tarihini ve eklediklerini (ya da "yeni bir şey bulunamadı") yaz.
7. Değişiklikleri `claude/tara-YYYY-AA-GG` adlı yeni bir dala commit'le ve gönder. Commit mesajı Türkçe ve
   sade olsun; her eklenen fikir/meslek için bir satır ve kaynağını yaz. Denetçi bu mesajı okur.

## Kesin kurallar

- Önce para isteyen, saadet zinciri/üye getirme, "görev karşılığı para", kripto/forex sinyal, bahis,
  IBAN/hesap kiralama gibi sistemleri **asla** önerme.
- Kazanç için rakam vaadi verme; asgari ücrete göre aralık ve "şehre/emeğe göre değişir" dili kullan.
- Yasal kısımda emin olmadığın şeyi kesin gibi yazma; "vergi dairesine / belediyeye / İŞKUR'a sor" de.
- Dil saygılı, cesaret verici, sade Türkçe; boş vaat yok.
- Mevcut fikirleri ve meslekleri silme ya da adlarını değiştirme (sayfa adresleri bozulur).

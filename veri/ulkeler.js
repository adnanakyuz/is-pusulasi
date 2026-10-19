// Ülkeler ve iş siteleri.
// Adres şablonunda {q} = arama adı, {slug} = tireli küçük harf (ör. paver-operator), {ulke} = ülkenin İngilizce adı.
// dil: o ülkede hangi dildeki meslek adıyla aranacağı. Sözlükte o dil yoksa İngilizce kullanılır. "tr" = Türkçe ad.
// bayrakKod: flagcdn.com'daki bayrak kodu (yoksa kod kullanılır). genelYok: Google/LinkedIn düğmeleri eklenmez.
window.BOLGELER = ["Avrupa", "Körfez ve Orta Doğu", "Kuzey Amerika", "Okyanusya", "Türkiye"];

window.ULKELER = [
  // ---------------- Avrupa ----------------
  {
    kod: "de", ad: "Almanya", en: "Germany", bolge: "Avrupa", dil: "de",
    not: "Ustalar için 'Fırsat Kartı' (Chancenkarte) ve nitelikli iş gücü vizesi var. Diplomanın ve ustalık belgesinin denkliği önemli.",
    resmi: { ad: "Make it in Germany (resmi, Türkçe)", url: "https://www.make-it-in-germany.com/tr/" },
    siteler: [
      { ad: "Arbeitsagentur (devlet)", url: "https://www.arbeitsagentur.de/jobsuche/suche?was={q}" },
      { ad: "Indeed DE", url: "https://de.indeed.com/jobs?q={q}" },
      { ad: "Adzuna DE", url: "https://www.adzuna.de/search?q={q}" }
    ]
  },
  {
    kod: "at", ad: "Avusturya", en: "Austria", bolge: "Avrupa", dil: "de",
    not: "Eksik meslekler listesindeki işler için 'Kırmızı-Beyaz-Kırmızı Kart' ile başvurulabilir.",
    resmi: { ad: "Migration.gv.at (resmi)", url: "https://www.migration.gv.at/en/" },
    siteler: [
      { ad: "AMS (devlet)", url: "https://jobs.ams.at/public/emps/jobs?query={q}" },
      { ad: "Karriere.at", url: "https://www.karriere.at/jobs/{slug}" },
      { ad: "Indeed AT", url: "https://at.indeed.com/jobs?q={q}" }
    ]
  },
  {
    kod: "ch", ad: "İsviçre", en: "Switzerland", bolge: "Avrupa", dil: "de",
    not: "AB dışı vatandaşlara çalışma izni sınırlı ve kotalıdır; genelde yüksek nitelik aranır.",
    siteler: [
      { ad: "Jobs.ch", url: "https://www.jobs.ch/en/vacancies/?term={q}" },
      { ad: "Indeed CH", url: "https://ch.indeed.com/jobs?q={q}" }
    ]
  },
  {
    kod: "nl", ad: "Hollanda", en: "Netherlands", bolge: "Avrupa", dil: "nl",
    siteler: [
      { ad: "Indeed NL", url: "https://nl.indeed.com/jobs?q={q}" },
      { ad: "Adzuna NL", url: "https://www.adzuna.nl/search?q={q}" }
    ]
  },
  {
    kod: "be", ad: "Belçika", en: "Belgium", bolge: "Avrupa", dil: "nl",
    not: "Kuzeyde Hollandaca, güneyde Fransızca konuşulur. Fransızca adıyla da aramayı deneyin.",
    siteler: [
      { ad: "Indeed BE", url: "https://be.indeed.com/jobs?q={q}" },
      { ad: "VDAB (devlet)", url: "https://www.vdab.be/vindeenjob/vacatures?trefwoord={q}" }
    ]
  },
  {
    kod: "lu", ad: "Lüksemburg", en: "Luxembourg", bolge: "Avrupa", dil: "fr",
    siteler: [
      { ad: "Indeed LU", url: "https://lu.indeed.com/jobs?q={q}" }
    ]
  },
  {
    kod: "fr", ad: "Fransa", en: "France", bolge: "Avrupa", dil: "fr",
    siteler: [
      { ad: "France Travail (devlet)", url: "https://candidat.francetravail.fr/offres/recherche?motsCles={q}" },
      { ad: "Indeed FR", url: "https://fr.indeed.com/jobs?q={q}" }
    ]
  },
  {
    kod: "es", ad: "İspanya", en: "Spain", bolge: "Avrupa", dil: "es",
    siteler: [
      { ad: "InfoJobs", url: "https://www.infojobs.net/jobsearch/search-results/list.xhtml?keyword={q}" },
      { ad: "Indeed ES", url: "https://es.indeed.com/jobs?q={q}" }
    ]
  },
  {
    kod: "it", ad: "İtalya", en: "Italy", bolge: "Avrupa", dil: "it",
    siteler: [
      { ad: "Indeed IT", url: "https://it.indeed.com/jobs?q={q}" },
      { ad: "Adzuna IT", url: "https://www.adzuna.it/search?q={q}" }
    ]
  },
  {
    kod: "pt", ad: "Portekiz", en: "Portugal", bolge: "Avrupa", dil: "en",
    siteler: [
      { ad: "Indeed PT", url: "https://pt.indeed.com/jobs?q={q}" },
      { ad: "Net-Empregos", url: "https://www.net-empregos.com/pesquisa-empregos.asp?chaves={q}" }
    ]
  },
  {
    kod: "uk", bayrakKod: "gb", ad: "Birleşik Krallık", en: "United Kingdom", bolge: "Avrupa", dil: "en",
    not: "Çalışma vizesi için lisanslı bir işverenin sponsor olması gerekir (Skilled Worker).",
    resmi: { ad: "gov.uk çalışma vizeleri (resmi)", url: "https://www.gov.uk/browse/visas-immigration/work-visas" },
    siteler: [
      { ad: "Indeed UK", url: "https://uk.indeed.com/jobs?q={q}" },
      { ad: "Adzuna UK", url: "https://www.adzuna.co.uk/search?q={q}" }
    ]
  },
  {
    kod: "ie", ad: "İrlanda", en: "Ireland", bolge: "Avrupa", dil: "en",
    siteler: [
      { ad: "Indeed IE", url: "https://ie.indeed.com/jobs?q={q}" }
    ]
  },
  {
    kod: "pl", ad: "Polonya", en: "Poland", bolge: "Avrupa", dil: "pl",
    siteler: [
      { ad: "Pracuj.pl", url: "https://www.pracuj.pl/praca/{q};kw" },
      { ad: "Indeed PL", url: "https://pl.indeed.com/jobs?q={q}" }
    ]
  },
  {
    kod: "cz", ad: "Çekya", en: "Czech Republic", bolge: "Avrupa", dil: "en",
    siteler: [
      { ad: "Jobs.cz", url: "https://www.jobs.cz/prace/?q%5B%5D={q}" },
      { ad: "Indeed CZ", url: "https://cz.indeed.com/jobs?q={q}" }
    ]
  },
  {
    kod: "se", ad: "İsveç", en: "Sweden", bolge: "Avrupa", dil: "en",
    siteler: [
      { ad: "Platsbanken (devlet)", url: "https://arbetsformedlingen.se/platsbanken/annonser?q={q}" },
      { ad: "Indeed SE", url: "https://se.indeed.com/jobs?q={q}" }
    ]
  },
  {
    kod: "no", ad: "Norveç", en: "Norway", bolge: "Avrupa", dil: "en",
    siteler: [
      { ad: "Arbeidsplassen (devlet)", url: "https://arbeidsplassen.nav.no/stillinger?q={q}" },
      { ad: "Indeed NO", url: "https://no.indeed.com/jobs?q={q}" }
    ]
  },
  {
    kod: "dk", ad: "Danimarka", en: "Denmark", bolge: "Avrupa", dil: "en",
    siteler: [
      { ad: "Jobindex", url: "https://www.jobindex.dk/jobsoegning?q={q}" },
      { ad: "Indeed DK", url: "https://dk.indeed.com/jobs?q={q}" }
    ]
  },
  {
    kod: "fi", ad: "Finlandiya", en: "Finland", bolge: "Avrupa", dil: "en",
    siteler: [
      { ad: "Indeed FI", url: "https://fi.indeed.com/jobs?q={q}" }
    ]
  },
  {
    kod: "eu", ad: "Bütün Avrupa (EURES)", en: "Europe", bolge: "Avrupa", dil: "en", genelYok: true,
    not: "Avrupa Birliği'nin resmi iş portalı: 30'dan fazla ülkenin devlet ilanları tek yerde.",
    siteler: [
      { ad: "EURES (AB resmi)", url: "https://europa.eu/eures/portal/jv-se/search?keywordsEverywhere={q}" }
    ]
  },

  // ---------------- Körfez ve Orta Doğu ----------------
  {
    kod: "ae", ad: "Birleşik Arap Emirlikleri", en: "United Arab Emirates", bolge: "Körfez ve Orta Doğu", dil: "en",
    not: "Vize genelde işveren üzerinden çıkar. İşe alım için işçiden ücret alınması yasaktır.",
    siteler: [
      { ad: "Bayt", url: "https://www.bayt.com/en/uae/jobs/{slug}-jobs/" },
      { ad: "Naukrigulf", url: "https://www.naukrigulf.com/{slug}-jobs-in-uae" },
      { ad: "Indeed AE", url: "https://ae.indeed.com/jobs?q={q}" }
    ]
  },
  {
    kod: "sa", ad: "Suudi Arabistan", en: "Saudi Arabia", bolge: "Körfez ve Orta Doğu", dil: "en",
    not: "Büyük altyapı projeleri nedeniyle iş makinesi operatörlerine talep yüksek. Vize işveren sponsorludur.",
    siteler: [
      { ad: "Bayt", url: "https://www.bayt.com/en/saudi-arabia/jobs/{slug}-jobs/" },
      { ad: "Naukrigulf", url: "https://www.naukrigulf.com/{slug}-jobs-in-saudi-arabia" },
      { ad: "Indeed SA", url: "https://sa.indeed.com/jobs?q={q}" }
    ]
  },
  {
    kod: "qa", ad: "Katar", en: "Qatar", bolge: "Körfez ve Orta Doğu", dil: "en",
    siteler: [
      { ad: "Bayt", url: "https://www.bayt.com/en/qatar/jobs/{slug}-jobs/" },
      { ad: "Naukrigulf", url: "https://www.naukrigulf.com/{slug}-jobs-in-qatar" }
    ]
  },
  {
    kod: "kw", ad: "Kuveyt", en: "Kuwait", bolge: "Körfez ve Orta Doğu", dil: "en",
    siteler: [
      { ad: "Bayt", url: "https://www.bayt.com/en/kuwait/jobs/{slug}-jobs/" },
      { ad: "Naukrigulf", url: "https://www.naukrigulf.com/{slug}-jobs-in-kuwait" }
    ]
  },
  {
    kod: "om", ad: "Umman", en: "Oman", bolge: "Körfez ve Orta Doğu", dil: "en",
    siteler: [
      { ad: "Bayt", url: "https://www.bayt.com/en/oman/jobs/{slug}-jobs/" },
      { ad: "Naukrigulf", url: "https://www.naukrigulf.com/{slug}-jobs-in-oman" }
    ]
  },
  {
    kod: "bh", ad: "Bahreyn", en: "Bahrain", bolge: "Körfez ve Orta Doğu", dil: "en",
    siteler: [
      { ad: "Bayt", url: "https://www.bayt.com/en/bahrain/jobs/{slug}-jobs/" },
      { ad: "Naukrigulf", url: "https://www.naukrigulf.com/{slug}-jobs-in-bahrain" }
    ]
  },
  {
    kod: "iq", ad: "Irak", en: "Iraq", bolge: "Körfez ve Orta Doğu", dil: "en",
    not: "Kuzey Irak'ta çok sayıda Türk inşaat firması çalışır; bu ilanlar Türkiye'deki sitelerde de yayınlanır. Güvenlik durumunu Dışişleri Bakanlığı'nın seyahat uyarılarından kontrol edin.",
    siteler: [
      { ad: "Bayt", url: "https://www.bayt.com/en/iraq/jobs/{slug}-jobs/" }
    ]
  },

  // ---------------- Kuzey Amerika ----------------
  {
    kod: "us", ad: "ABD", en: "United States", bolge: "Kuzey Amerika", dil: "en",
    not: "Çalışma vizesi almak zordur; usta ve operatör işlerinde işveren sponsorluğu gerekir.",
    siteler: [
      { ad: "Indeed US", url: "https://www.indeed.com/jobs?q={q}" },
      { ad: "Adzuna US", url: "https://www.adzuna.com/search?q={q}" }
    ]
  },
  {
    kod: "ca", ad: "Kanada", en: "Canada", bolge: "Kuzey Amerika", dil: "en",
    not: "Job Bank'ta yabancı çalışan kabul eden ilanlar ayrıca işaretlenir.",
    resmi: { ad: "Canada.ca göç ve çalışma (resmi)", url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada.html" },
    siteler: [
      { ad: "Job Bank (devlet)", url: "https://www.jobbank.gc.ca/jobsearch/jobsearch?searchstring={q}" },
      { ad: "Indeed CA", url: "https://ca.indeed.com/jobs?q={q}" }
    ]
  },

  // ---------------- Okyanusya ----------------
  {
    kod: "au", ad: "Avustralya", en: "Australia", bolge: "Okyanusya", dil: "en",
    not: "Usta ve operatör meslekleri sık sık 'nitelikli meslek' listelerinde yer alır; beceri değerlendirmesi gerekir.",
    resmi: { ad: "Avustralya İçişleri (resmi)", url: "https://immi.homeaffairs.gov.au/visas/working-in-australia" },
    siteler: [
      { ad: "Seek", url: "https://www.seek.com.au/{slug}-jobs" },
      { ad: "Indeed AU", url: "https://au.indeed.com/jobs?q={q}" }
    ]
  },
  {
    kod: "nz", ad: "Yeni Zelanda", en: "New Zealand", bolge: "Okyanusya", dil: "en",
    siteler: [
      { ad: "Seek NZ", url: "https://www.seek.co.nz/{slug}-jobs" },
      { ad: "Indeed NZ", url: "https://nz.indeed.com/jobs?q={q}" }
    ]
  },

  // ---------------- Türkiye ----------------
  {
    kod: "tr", ad: "Türkiye", en: "Türkiye", bolge: "Türkiye", dil: "tr",
    siteler: [
      { ad: "İŞKUR (devlet)", url: "https://esube.iskur.gov.tr/Istihdam/AcikIsIlanAra.aspx" },
      { ad: "Kariyer.net", url: "https://www.kariyer.net/is-ilanlari?kw={q}" },
      { ad: "Indeed TR", url: "https://tr.indeed.com/jobs?q={q}" }
    ]
  },
  {
    kod: "tr-yd", bayrakKod: "tr", ad: "Türk firmalarının yurt dışı şantiyeleri", en: "abroad", bolge: "Türkiye", dil: "tr", onEk: "yurt dışı", genelYok: true,
    not: "Türk müteahhitler Irak, Libya, Türkmenistan, Özbekistan, Afrika ve Körfez'de büyük projeler yürütür. Bu ilanlar genelde Türkiye'deki sitelerde 'yurt dışı' notuyla yayınlanır.",
    siteler: [
      { ad: "Kariyer.net", url: "https://www.kariyer.net/is-ilanlari?kw={q}" },
      { ad: "Indeed TR", url: "https://tr.indeed.com/jobs?q={q}" },
      { ad: "Google", url: "https://www.google.com/search?q={q}+i%C5%9F+ilan%C4%B1" }
    ]
  }
];

// Her ülkede çalışan ek aramalar.
window.GENEL_SITELER = [
  { ad: "Google İş İlanları", url: "https://www.google.com/search?q={q}+jobs+{ulke}&ibp=htl;jobs" },
  { ad: "LinkedIn", url: "https://www.linkedin.com/jobs/search/?keywords={q}&location={ulke}" }
];

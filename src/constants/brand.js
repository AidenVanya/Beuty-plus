export const PRIMARY  = '#D4AF37'
export const ACCENT   = '#E91E8C'
export const CHARCOAL = '#0D0B08'
export const TL       = '#6B5E52'
export const CREAM    = '#FAF8F5'
export const BLUSH    = '#F0E6DF'
export const WA       = 'https://wa.me/905072075163'

export const NAV_LINKS = [
  { id: 'home',     label: 'Ana Sayfa',  path: '/'         },
  { id: 'services', label: 'Hizmetler',  path: '/services' },
  { id: 'about',    label: 'Hakkımızda', path: '/about'    },
  { id: 'contact',  label: 'İletişim',   path: '/contact'  },
]

export const SVC_PALETTE = {
  nail:    { img: '/uploads/img_10.png' },
  lash:    { img: '/uploads/img_1.png'  },
  brow:    { img: '/uploads/img_3.png'  },
  hair:    { img: '/uploads/img_6.png'  },
  skin:    { img: '/uploads/img_5.png'  },
  massage: { img: '/uploads/img_8.png'  },
}

export const SERVICES = [
  {
    id: 'nail',
    category: 'tirnak',
    title: 'Protez Tırnak',
    subtitle: 'Nail Art & Akrilik',
    desc: 'Kalıcı ojeden akrilik proteze, en trend tasarımlara kadar tırnak sanatında uzmanız.',
    longDesc: 'Uluslararası sertifikalı tırnak uzmanlarımız, kalıcı oje uygulamasından profesyonel akrilik proteze kadar geniş bir yelpazede hizmet sunmaktadır. Her uygulama steril malzemelerle, titizlikle gerçekleştirilir.',
    price: '₺250\'den başlayan',
    priceRange: '₺250 – ₺800',
    duration: '60–90 dk',
    features: ['Kalıcı oje', 'Akrilik protez', 'Nail art tasarım', 'Manikür & bakım'],
  },
  {
    id: 'lash',
    category: 'kirpik',
    title: 'İpek Kirpik',
    subtitle: 'Lash Lift & Volume',
    desc: 'Doğal ya da dramatik – uzman kirpik tekniklerimizle bakışlarınıza derinlik katıyoruz.',
    longDesc: 'Kirpik uzatma ve lash lift uygulamalarında en kaliteli ipek kirpik malzemeleri kullanılır. Gözlerinizin şekline özel tasarlanmış uygulamalarla doğal ama etkileyici bir bakış elde edin.',
    price: '₺350\'den başlayan',
    priceRange: '₺350 – ₺900',
    duration: '90–120 dk',
    features: ['İpek kirpik uzatma', 'Lash lift', 'Volüm tekniği', 'Bakım serumu'],
  },
  {
    id: 'brow',
    category: 'kirpik',
    title: 'Kaş Tasarımı',
    subtitle: 'Shaping & Tinting',
    desc: 'Yüz hatlarınıza özel kaş şekillendirme, renklendirme ve ipek brow lift uygulamaları.',
    longDesc: 'Yüz geometrinize göre kişiselleştirilmiş kaş tasarımı, doğal görünümlü renklendirme ve brow lift işlemleriyle kaşlarınıza en ideal formu kazandırıyoruz. Her adımda yüzünüzün doğal güzelliği ön planda.',
    price: '₺150\'den başlayan',
    priceRange: '₺150 – ₺450',
    duration: '30–60 dk',
    features: ['Kaş şekillendirme', 'Kaş boyama', 'Brow lift', 'İplik & ağda'],
  },
  {
    id: 'hair',
    category: 'sac',
    title: 'Saç Bakımı',
    subtitle: 'Keratin & Boyama',
    desc: 'Saçınızı güçlendiren bakım, renk ve şekillendirme hizmetleri profesyonel ellerde.',
    longDesc: 'Saç sağlığı için özel formüllü keratin bakımı, doğal ve sentetik boya seçenekleri ile profesyonel şekillendirme hizmetleri sunuyoruz. Her saç tipine uygun özelleştirilmiş bakım protokolleri.',
    price: '₺500\'den başlayan',
    priceRange: '₺500 – ₺2000',
    duration: '90–180 dk',
    features: ['Keratin bakım', 'Saç boyama', 'Röfle & balayage', 'Hasar onarım'],
  },
  {
    id: 'skin',
    category: 'cilt',
    title: 'Cilt Bakımı',
    subtitle: 'Peeling & Hydration',
    desc: 'Dermatologji destekli cilt bakım protokolleriyle parlak ve sağlıklı bir ten görünümü.',
    longDesc: 'Cilt tipinize özel hazırlanan protokollerle derin temizlik, kimyasal peeling ve yoğun nemlendirme uygulamaları yapıyoruz. Dermatolog onaylı ürünlerle cildinizi yenileyin ve parlatın.',
    price: '₺400\'den başlayan',
    priceRange: '₺400 – ₺1500',
    duration: '60–90 dk',
    features: ['Derin temizlik', 'Kimyasal peeling', 'Hyaluronik nemlendirme', 'Anti-aging bakım'],
  },
  {
    id: 'massage',
    category: 'spa',
    title: 'Masaj & SPA',
    subtitle: 'Relax & Wellness',
    desc: 'Stres atmak için aromaterapi masajı, refleksoloji ve wellness ritüelleri ile tam rahatlama.',
    longDesc: 'Aromaterapiden sıcak taş masajına kadar geniş bir SPA menüsüyle bedeninizi ve zihninizi yenilenmiş hissedeceksiniz. Uzman terapistlerimiz her seans için size özel bir wellness programı hazırlar.',
    price: '₺300\'den başlayan',
    priceRange: '₺300 – ₺1200',
    duration: '60–120 dk',
    features: ['Aromaterapi masajı', 'Sıcak taş terapisi', 'Refleksoloji', 'SPA ritüeli'],
  },
]

export const SERVICE_CATEGORIES = [
  { id: 'all',    label: 'Tümü' },
  { id: 'tirnak', label: 'Tırnak' },
  { id: 'kirpik', label: 'Kirpik & Kaş' },
  { id: 'sac',    label: 'Saç' },
  { id: 'cilt',   label: 'Cilt' },
  { id: 'spa',    label: 'SPA' },
]

export const REVIEWS = [
  { name: 'Selin K.',   text: 'Uzun süredir aradığım salonu buldum! Hem tırnak hem de kirpik uygulaması mükemmeldi. Kesinlikle tavsiye ederim.', rating: 5 },
  { name: 'Merve T.',   text: 'Hijyen konusunda çok titiz davranıyorlar. Personel çok ilgili ve profesyonel. Sonuçtan çok memnunum.', rating: 5 },
  { name: 'Ayşe D.',    text: 'Kaş tasarımım harika oldu. Yüzümün şekline göre düşünülmüş bir tasarım. Teşekkürler Başak Hanım!', rating: 5 },
  { name: 'Zeynep M.',  text: 'Cilt bakımı sonrası cildimdeki değişim inanılmaz. Ürünlerin kalitesi ve uzmanların bilgisi üst düzey.', rating: 5 },
  { name: 'Fatma A.',   text: 'SPA seansı gerçekten harikaydı, kendimi tamamen yenilenmiş hissettim. Fiyat/kalite dengesi mükemmel.', rating: 5 },
  { name: 'Elif S.',    text: 'Saç boyama konusunda tam istediğim rengi aldım. Ustalar çok deneyimli, kesinlikle tekrar geleceğim.', rating: 5 },
]

export const VALUES = [
  { icon: 'check',   title: 'Hijyen & Kalite',  desc: 'Steril malzemeler ve antibakteryel ürünler kullanılıyor. Her seansta tek kullanımlık malzeme.' },
  { icon: 'sparkle', title: 'Uzman Ekip',        desc: 'Alanında eğitimli, uluslararası sertifikalı ve deneyimli kadromuz her zaman yanınızda.' },
  { icon: 'star',    title: 'Kişiye Özel',       desc: 'Her müşterimize özel bakım ve danışmanlık hizmeti. Yüz tipinize ve tercihinize göre tasarım.' },
]

export const HOURS = [
  { day: 'Pazartesi – Cuma', time: '09:00 – 20:00' },
  { day: 'Cumartesi',        time: '09:00 – 19:00' },
  { day: 'Pazar',            time: '10:00 – 17:00' },
]

export const TIMELINE = [
  { year: '2022', month: 'Mart',    title: 'Kuruluş',              desc: 'Sancaktepe\'nin kalbinde Başak Beauty Studio kapılarını açtı.' },
  { year: '2022', month: 'Yaz',     title: 'İlk 100 Müşteri',      desc: 'Açılıştan yalnızca 3 ay sonra 100 mutlu müşteri hedefine ulaştık.' },
  { year: '2023', month: 'Ocak',    title: 'Uzman Kadro',          desc: 'Kirpik ve kaş alanında sertifikalı uzmanlar ekibimize katıldı.' },
  { year: '2024', month: 'Mart',    title: 'SPA & Masaj',          desc: 'Yeni SPA bölümümüzle masaj ve wellness hizmetleri sunmaya başladık.' },
  { year: '2025', month: 'Bugün',   title: '500+ Müşteri',         desc: 'Mutlu müşteri ailemiz büyümeye devam ediyor. Teşekkürler!' },
]

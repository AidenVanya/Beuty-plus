export interface Service {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  duration: string;
  priceRange: string;
  features: string[];
  image: string;
}

export const SERVICES: Service[] = [
  {
    id: 'nail',
    category: 'tirnak',
    title: 'Protez Tırnak',
    subtitle: 'Tırnak Tasarımı',
    description: 'Ellerin en zarif süsü olan tırnaklarınız için kalıcı ve estetik çözümler sunuyoruz. Uzman ekibimiz, en son trendleri ve teknik yetkinliği harmanlayarak hayalinizdeki görünümü hayata geçirir.',
    duration: '60 – 90 dk',
    priceRange: '₺250 – ₺800',
    features: ['Kalıcı oje & jel', 'Akrilik protez', 'Nail art tasarım', 'Manikür & bakım'],
    image: 'assets/uploads/img_10.png'
  },
  {
    id: 'lash',
    category: 'kirpik',
    title: 'İpek Kirpik',
    subtitle: 'Kirpik Uzatma',
    description: 'Gözlerinizi derinleştiren, ifadenizi güçlendiren ipek kirpik uygulamalarıyla her bakışınızı özel kılıyoruz. %100 doğal ipek ipliklerle uygulanan tekniğimiz, gün boyu konfor ve zarafet sunar.',
    duration: '90 – 120 dk',
    priceRange: '₺350 – ₺900',
    features: ['İpek kirpik uzatma', 'Lash lift & botox', 'Volüm tekniği', 'Bakım serumu'],
    image: 'assets/uploads/img_1.png'
  },
  {
    id: 'brow',
    category: 'kirpik',
    title: 'Kaş Tasarımı',
    subtitle: 'Kaş Şekillendirme',
    description: 'Yüz hatlarınıza en uygun kaş formunu profesyonel altın oran hesaplamasıyla belirliyor, kalıcı pigmentasyon ve şekillendirme teknikleriyle mükemmel sonuçlar elde ediyoruz.',
    duration: '30 – 60 dk',
    priceRange: '₺150 – ₺450',
    features: ['Kaş şekillendirme', 'Kaş boyama', 'Brow lift', 'İplik & ağda'],
    image: 'assets/uploads/img_3.png'
  },
  {
    id: 'hair',
    category: 'sac',
    title: 'Saç Bakımı',
    subtitle: 'Saç Uzmanı',
    description: 'Saçlarınızın ihtiyacına özel formüle edilmiş bakım protokollerimizle hem renk hem de yapısal dönüşümlerde en parlak sonuçları elde ediyoruz. Her saç tipi için kişiselleştirilmiş yaklaşım.',
    duration: '90 – 180 dk',
    priceRange: '₺500 – ₺2.000',
    features: ['Keratin bakım', 'Saç boyama', 'Röfle & balayage', 'Hasar onarım'],
    image: 'assets/uploads/img_6.png'
  },
  {
    id: 'skin',
    category: 'cilt',
    title: 'Cilt Bakımı',
    subtitle: 'Dermatolojik Bakım',
    description: 'Dermatoloji destekli profesyonel cilt analizi ile başlayan sürecimizde cildinizin derinlemesine ihtiyaçlarını belirliyor, kişiye özel serum ve teknoloji kombinasyonlarıyla parlak bir cilde kavuşmanızı sağlıyoruz.',
    duration: '60 – 90 dk',
    priceRange: '₺400 – ₺1.500',
    features: ['Derin temizlik', 'Kimyasal peeling', 'Hyaluronik nemlendirme', 'Anti-aging bakım'],
    image: 'assets/uploads/img_5.png'
  },
  {
    id: 'spa',
    category: 'spa',
    title: 'Masaj & SPA',
    subtitle: 'Terapi & Ritüel',
    description: 'Bedeninizi ve zihninizi yenileyen bütünsel SPA deneyimimizle günlük hayatın yorgunluğunu geride bırakın. Aromaterapi, taş terapisi ve geleneksel masaj tekniklerini harmanlayan özel ritüellerimiz sizi sarıp sarmalıyor.',
    duration: '60 – 120 dk',
    priceRange: '₺300 – ₺1.200',
    features: ['Aromaterapi masajı', 'Sıcak taş terapisi', 'Refleksoloji', 'SPA ritüeli'],
    image: 'assets/uploads/img_8.png'
  }
];

export const CATEGORIES = [
  { key: 'all',    label: 'Tümü' },
  { key: 'tirnak', label: 'Tırnak' },
  { key: 'kirpik', label: 'Kirpik & Kaş' },
  { key: 'sac',    label: 'Saç' },
  { key: 'cilt',   label: 'Cilt' },
  { key: 'spa',    label: 'SPA' }
];

export const REVIEWS = [
  { name: 'Selin K.', text: 'Chronos Beauty\'de geçirdiğim her dakika bir ayrıcalıktı. İpek kirpiklerim mükemmel oldu!', rating: 5 },
  { name: 'Merve T.', text: 'Cilt bakımı sonrası aynamda kendimi tanıyamadım. Ekibin uzmanlığı gerçekten üst düzey.', rating: 5 },
  { name: 'Ayşe D.', text: 'Kaş tasarımım yüzümün tüm ifadesini değiştirdi. Teşekkürler Chronos Beauty!', rating: 5 },
  { name: 'Zeynep M.', text: 'SPA ritüeli için gelmiştim, kendimi yeniden doğmuş gibi hissettim. Kesinlikle tekrar geleceğim.', rating: 5 },
  { name: 'Fatma A.', text: 'Balayage boyamda tam istediğim sonucu aldım. Çok titiz ve ilgili bir ekip.', rating: 5 },
  { name: 'Elif S.', text: 'Protez tırnak uygulamam hem estetik hem de son derece dayanıklı çıktı. Hayranım!', rating: 5 }
];

export const TIMELINE = [
  { year: '2022', month: 'Mart', title: 'Kuruluş', description: 'Chronos Beauty, Sancaktepe İstanbul\'da "zamanın ötesinde güzellik" vizyonuyla kapılarını açtı.' },
  { year: '2022', month: 'Yaz', title: 'İlk 100 Müşteri', description: 'Hızla büyüyen müşteri ağımızla ilk 100 memnun müşterimize ulaştık.' },
  { year: '2023', month: 'Ocak', title: 'Uzman Ekip Genişlemesi', description: 'Sertifikalı kirpik ve kaş tasarım uzmanları ekibimize katıldı.' },
  { year: '2024', month: 'Mart', title: 'SPA & Masaj', description: 'Holistic güzellik anlayışımızı tamamlayan SPA ve masaj hizmetlerimiz hizmete girdi.' },
  { year: '2025', month: 'Bugün', title: '500+ Mutlu Müşteri', description: 'Büyüyen ailemizle güzelliği bir sanata dönüştürmeye devam ediyoruz.' }
];

export const VALUES = [
  { icon: '✦', title: 'Hijyen & Kalite', description: 'Steril malzemeler ve tek kullanımlık ekipmanlarla standartların ötesinde hijyen.' },
  { icon: '◈', title: 'Uzman Ekip', description: 'Uluslararası sertifikalı, sürekli kendini geliştiren güzellik profesyonelleri.' },
  { icon: '◇', title: 'Kişiye Özel', description: 'Yüz yapısı, cilt tonu ve tercihlerinize göre özelleştirilmiş güzellik protokolleri.' },
  { icon: '✧', title: 'Müşteri Memnuniyeti', description: 'Her ziyarette beklentilerin ötesine geçen, unutulmaz deneyimler yaratmak.' },
  { icon: '◉', title: 'Sertifikalı Hizmet', description: 'Dünya standartlarında eğitim ve sertifikasyonla garanti altına alınan mükemmellik.' },
  { icon: '❋', title: 'Sadık Müşteri Kitlesi', description: '500+ memnun müşterimiz güzellik yolculuklarına Chronos\'la devam ediyor.' }
];

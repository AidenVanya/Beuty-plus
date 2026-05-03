import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import SectionHeader from '../components/SectionHeader'
import Icon from '../components/Icon'
import { FadeUp, FadeIn, SlideIn, StaggerContainer, staggerItem } from '../components/AnimatedSection'
import { PRIMARY, ACCENT, CHARCOAL, TL, VALUES, TIMELINE } from '../constants/brand'

function PageHero({ title, subtitle, eyebrow, bgImage }) {
  return (
    <section style={{ position: 'relative', height: '40vh', minHeight: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <motion.img
        src={bgImage}
        alt=""
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,11,8,0.75), rgba(13,11,8,0.5))' }} />
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 5%' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginBottom: 16 }}
        >
          <div style={{ width: 28, height: 1, background: PRIMARY }} />
          <span style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: PRIMARY, fontWeight: 500 }}>{eyebrow}</span>
          <div style={{ width: 28, height: 1, background: PRIMARY }} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25 }}
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 400, color: '#fff', marginBottom: 12, lineHeight: 1.05 }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', maxWidth: 480, margin: '0 auto' }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}

function StorySection() {
  return (
    <section style={{ padding: '100px 5%', background: 'var(--cream)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="about-grid">
          <SlideIn direction="left">
            <div style={{ position: 'relative', minHeight: 400 }}>
              <div style={{ width: '75%', aspectRatio: '3/4', borderRadius: '80px 20px 80px 20px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(201,160,154,0.3)' }}>
                <img src="/uploads/collage.png" alt="Başak Beauty" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
              </div>
              <div style={{ position: 'absolute', right: 0, bottom: '15%', width: '50%', aspectRatio: '1/1', borderRadius: '20px 80px 20px 80px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(201,169,110,0.3)', border: '4px solid #fff' }}>
                <img src="/uploads/img_7.png" alt="Cilt Bakımı" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
              </div>
              <div style={{ position: 'absolute', top: '10%', right: '12%', background: '#fff', borderRadius: 14, padding: '14px 18px', boxShadow: '0 8px 30px rgba(44,44,44,0.1)', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, fontWeight: 600, color: PRIMARY, lineHeight: 1 }}>2022</div>
                <div style={{ fontSize: 10, color: TL, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Kuruluş</div>
              </div>
            </div>
          </SlideIn>

          <SlideIn direction="right" delay={0.15}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{ height: 1, width: 32, background: PRIMARY }} />
                <span style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: PRIMARY, fontWeight: 500 }}>Hikayemiz</span>
              </div>
              <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: CHARCOAL, lineHeight: 1.15, marginBottom: 24 }}>
                Güzelliği <em>Bir Sanata</em><br />Dönüştürüyoruz
              </h2>
              <p style={{ fontSize: 15, color: TL, lineHeight: 1.9, marginBottom: 20 }}>
                <strong style={{ color: CHARCOAL, fontWeight: 500 }}>Başak Beauty Studio</strong>, 2022 yılında İstanbul Sancaktepe'de bir tutkuyla hayata geçti. Kurucumuz, güzellik sektöründeki deneyimini ve sanatsal bakış açısını birleştirerek müşterilerine sadece bir hizmet değil, bir deneyim sunmak istedi.
              </p>
              <p style={{ fontSize: 15, color: TL, lineHeight: 1.9, marginBottom: 20 }}>
                Bugün tırnak, kirpik, kaş, saç ve cilt bakımı alanlarında uzmanlaşmış sertifikalı kadromuzla hizmet veriyoruz. Her müşterimize kişiselleştirilmiş bir yaklaşım benimsiyoruz çünkü her yüz, her stil ve her beklenti benzersizdir.
              </p>
              <p style={{ fontSize: 15, color: TL, lineHeight: 1.9 }}>
                Misyonumuz; kaliteli ürünler, steril ortam ve uzman ellerin buluşmasıyla her müşterimizin kendini en güzel hissetmesini sağlamak. Kapımızdan çıkarken yüzünüzdeki gülümseme, bizim en büyük ödülümüzdür.
              </p>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const extended = [
    { icon: 'check',   title: 'Hijyen & Kalite',   desc: 'Steril malzemeler ve antibakteryel ürünler kullanılıyor. Her seansta tek kullanımlık malzeme kesinlikle uygulanır.' },
    { icon: 'sparkle', title: 'Uzman Ekip',         desc: 'Alanında eğitimli, uluslararası sertifikalı ve deneyimli kadromuz her zaman yanınızda. Sürekli eğitimle kendini güncelleyen uzmanlar.' },
    { icon: 'star',    title: 'Kişiye Özel',        desc: 'Her müşterimize özel bakım ve danışmanlık hizmeti. Yüz tipinize, renginize ve tercihinize göre kişiselleştirilmiş tasarım.' },
    { icon: 'heart',   title: 'Müşteri Memnuniyeti', desc: 'Müşteri memnuniyeti her şeyin önünde. Kapımızdan çıkarken kendinizi en güzel hissetmeniz için elimizden geleni yaparız.' },
    { icon: 'award',   title: 'Sertifikalı Hizmet', desc: 'Uluslararası güzellik standartlarına uygun, sertifikalı tekniklerle uygulama. Güncel trendleri takip eden ekip.' },
    { icon: 'users',   title: 'Sadık Müşteri Kitlesi', desc: '500+ mutlu müşteri ailemiz her geçen gün büyüyor. Hizmet kalitemizi görmek için müşteri yorumlarımıza bakabilirsiniz.' },
  ]
  return (
    <section style={{ padding: '100px 5%', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader eyebrow="Neden Biz?" title="Değerlerimiz" subtitle="Başak Beauty Studio'yu tercih etmek için birçok nedeniniz var." />
        <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 28 }}>
          {extended.map(v => (
            <motion.div
              key={v.title}
              variants={staggerItem}
              whileHover={{ y: -6, boxShadow: '0 20px 50px rgba(212,175,55,0.12)' }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              style={{ background: 'var(--cream)', borderRadius: 20, padding: '32px 28px', border: '1px solid rgba(201,169,110,0.1)' }}
            >
              <div style={{ width: 56, height: 56, borderRadius: 16, background: `${PRIMARY}16`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                <Icon name={v.icon} size={24} color={PRIMARY} />
              </div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontWeight: 500, color: CHARCOAL, marginBottom: 10 }}>{v.title}</h3>
              <p style={{ fontSize: 13, color: TL, lineHeight: 1.8 }}>{v.desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

function TimelineSection() {
  return (
    <section style={{ padding: '100px 5%', background: 'linear-gradient(180deg, var(--cream) 0%, #F5EDEA 100%)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionHeader eyebrow="Yolculuğumuz" title="Tarihçemiz" subtitle="2022'den bu yana büyüyen bir hikaye." />

        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: `linear-gradient(to bottom, transparent, ${PRIMARY}60 15%, ${PRIMARY}60 85%, transparent)`, transform: 'translateX(-50%)' }} className="timeline-hide-mobile" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
            {TIMELINE.map((item, i) => {
              const isEven = i % 2 === 0
              return (
                <motion.div
                  key={item.year + item.month}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  style={{ display: 'flex', justifyContent: isEven ? 'flex-start' : 'flex-end' }}
                  className="timeline-row"
                >
                  <div style={{ width: '44%', background: '#fff', borderRadius: 16, padding: '24px 28px', boxShadow: '0 8px 32px rgba(44,44,44,0.07)', border: '1px solid rgba(201,169,110,0.12)', position: 'relative' }} className="timeline-card">
                    {/* Dot */}
                    <div style={{ position: 'absolute', top: '50%', [isEven ? 'right' : 'left']: -22, transform: 'translateY(-50%)', width: 12, height: 12, borderRadius: '50%', background: PRIMARY, boxShadow: `0 0 0 4px ${PRIMARY}30` }} className="timeline-dot" />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, fontWeight: 600, color: PRIMARY, lineHeight: 1 }}>{item.year}</span>
                      <span style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: TL, fontWeight: 500 }}>{item.month}</span>
                    </div>
                    <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, fontWeight: 500, color: CHARCOAL, marginBottom: 8 }}>{item.title}</h4>
                    <p style={{ fontSize: 13, color: TL, lineHeight: 1.75 }}>{item.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

function GallerySection() {
  const images = [
    { src: '/uploads/img_1.png',  alt: 'İpek Kirpik' },
    { src: '/uploads/img_3.png',  alt: 'Kaş Tasarımı' },
    { src: '/uploads/img_5.png',  alt: 'Cilt Bakımı' },
    { src: '/uploads/img_6.png',  alt: 'Saç Bakımı' },
    { src: '/uploads/img_7.png',  alt: 'Güzellik Bakım' },
    { src: '/uploads/img_8.png',  alt: 'Masaj SPA' },
    { src: '/uploads/img_10.png', alt: 'Protez Tırnak' },
    { src: '/uploads/collage.png', alt: 'Başak Beauty' },
  ]
  return (
    <section style={{ padding: '100px 5%', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader eyebrow="Çalışmalarımız" title="Galeri" subtitle="Ekibimizin çalışmalarından kareler." />
        <FadeIn>
          <div className="gallery-masonry">
            {images.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                style={{ position: 'relative', overflow: 'hidden', borderRadius: 12, marginBottom: 16, cursor: 'pointer', breakInside: 'avoid', display: 'block' }}
              >
                <img src={img.src} alt={img.alt} style={{ width: '100%', display: 'block', borderRadius: 12 }} />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{ position: 'absolute', inset: 0, background: `linear-gradient(to top, ${PRIMARY}80, transparent)`, borderRadius: 12, display: 'flex', alignItems: 'flex-end', padding: 16 }}
                >
                  <span style={{ color: '#fff', fontSize: 12, fontWeight: 500, letterSpacing: '0.06em' }}>{img.alt}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

export default function About() {
  return (
    <PageWrapper>
      <PageHero
        eyebrow="Başak Beauty Studio"
        title="Hakkımızda"
        subtitle="2022'den bu yana güzelliği bir sanata dönüştürüyoruz."
        bgImage="/uploads/collage.png"
      />
      <StorySection />
      <ValuesSection />
      <TimelineSection />
      <GallerySection />
    </PageWrapper>
  )
}

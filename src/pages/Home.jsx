import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import SectionHeader from '../components/SectionHeader'
import Icon from '../components/Icon'
import { FadeUp, FadeIn, StaggerContainer, staggerItem, SlideIn } from '../components/AnimatedSection'
import { PRIMARY, ACCENT, CHARCOAL, TL, WA, SERVICES, REVIEWS, VALUES } from '../constants/brand'

function useCounter(target, inView, duration = 1500) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.round(start))
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return count
}

function StatCounter({ num, label, suffix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useCounter(num, inView)
  return (
    <div ref={ref}>
      <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 40, fontWeight: 500, color: PRIMARY, lineHeight: 1 }}>{count}{suffix}</div>
      <div style={{ fontSize: 11, letterSpacing: '0.12em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', marginTop: 6 }}>{label}</div>
    </div>
  )
}

function HeroSection() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '0 5%' }}>
      {/* Background */}
      <motion.div
        style={{ position: 'absolute', inset: 0, zIndex: 0 }}
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        <img src="/uploads/img_9.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }} />
      </motion.div>
      <div style={{ position: 'absolute', inset: 0, zIndex: 1, background: 'linear-gradient(135deg, rgba(13,11,8,0.72) 0%, rgba(13,11,8,0.45) 60%, rgba(13,11,8,0.3) 100%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 180, zIndex: 1, background: 'linear-gradient(to top, rgba(13,11,8,0.6), transparent)' }} />

      {/* Floating decorative circles */}
      <motion.div
        style={{ position: 'absolute', top: '18%', right: '8%', width: 120, height: 120, borderRadius: '50%', background: 'radial-gradient(circle, rgba(233,30,140,0.15), transparent)', zIndex: 2 }}
        animate={{ y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        style={{ position: 'absolute', bottom: '25%', left: '5%', width: 80, height: 80, borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,175,55,0.12), transparent)', zIndex: 2 }}
        animate={{ y: [0, 16, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />

      <div style={{ position: 'relative', zIndex: 3, width: '100%', maxWidth: 1200, margin: '0 auto', textAlign: 'center', paddingTop: 100, paddingBottom: 60 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginBottom: 24 }}
        >
          <div style={{ width: 32, height: 1, background: 'var(--gold)' }} />
          <span style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>İstanbul Sancaktepe</span>
          <div style={{ width: 32, height: 1, background: 'var(--gold)' }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(48px, 7vw, 88px)', fontWeight: 400, lineHeight: 1.05, color: '#FFFFFF', marginBottom: 28 }}
        >
          Güzelliğiniz<br />
          <em style={{ color: PRIMARY }}>Bizim Tutkumuz</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.75)', maxWidth: 520, margin: '0 auto 40px' }}
        >
          2022'den bu yana profesyonel güzellik ve bakım hizmetleriyle yanınızdayız.
          Tırnak, kirpik, kaş ve cilt bakımında uzmanlaşmış ekibimizle sizi karşılıyoruz.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
          className="hero-ctas"
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a href={WA} target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: 10, background: PRIMARY, color: '#fff', padding: '14px 32px', borderRadius: 99, fontSize: 14, fontWeight: 500, textDecoration: 'none', letterSpacing: '0.04em', boxShadow: `0 6px 30px ${PRIMARY}50`, transition: 'all 0.25s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 10px 35px ${PRIMARY}60` }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = `0 6px 30px ${PRIMARY}50` }}
          >
            <Icon name="sparkle" size={16} color="#fff" />
            Randevu Al
          </a>
          <Link to="/services"
            style={{ background: 'transparent', border: `1.5px solid ${ACCENT}`, color: '#fff', padding: '14px 32px', borderRadius: 99, fontSize: 14, fontWeight: 500, textDecoration: 'none', letterSpacing: '0.04em', transition: 'all 0.25s', display: 'inline-block' }}
            onMouseEnter={e => { e.currentTarget.style.background = ACCENT }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
          >
            Hizmetlerimiz
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function StatsBar() {
  return (
    <section style={{ padding: '60px 5%', background: CHARCOAL }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <StaggerContainer style={{ display: 'flex', gap: 60, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { num: 500, suffix: '+', label: 'Mutlu Müşteri' },
            { num: 3,   suffix: '+', label: 'Yıllık Deneyim' },
            { num: 10,  suffix: '+', label: 'Hizmet Çeşidi' },
          ].map(s => (
            <motion.div key={s.label} variants={staggerItem} style={{ textAlign: 'center' }}>
              <StatCounter num={s.num} suffix={s.suffix} label={s.label} />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

function ServicesPreview() {
  const preview = SERVICES.slice(0, 3)
  return (
    <section style={{ padding: '100px 5%', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader eyebrow="Ne Yapıyoruz" title="Popüler Hizmetler" subtitle="En çok tercih edilen güzellik hizmetlerimizden bir seçki." />
        <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 28 }}>
          {preview.map(svc => (
            <motion.div
              key={svc.id}
              variants={staggerItem}
              whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(212,175,55,0.18)' }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              style={{ background: 'var(--cream)', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid rgba(201,169,110,0.12)', cursor: 'pointer' }}
            >
              <div style={{ width: '100%', aspectRatio: '4/3', overflow: 'hidden' }}>
                <motion.img
                  src={`/uploads/${svc.id === 'nail' ? 'img_10' : svc.id === 'lash' ? 'img_1' : 'img_3'}.png`}
                  alt={svc.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <div style={{ padding: '24px 26px 28px' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: PRIMARY, marginBottom: 6, fontWeight: 500 }}>{svc.subtitle}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontWeight: 500, color: CHARCOAL, marginBottom: 10 }}>{svc.title}</h3>
                <p style={{ fontSize: 13, color: TL, lineHeight: 1.75, marginBottom: 20 }}>{svc.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 13, color: PRIMARY, fontWeight: 500 }}>{svc.price}</span>
                  <a href={WA} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: TL, textDecoration: 'none', letterSpacing: '0.04em', fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = PRIMARY}
                    onMouseLeave={e => e.currentTarget.style.color = TL}
                  >
                    Randevu Al <Icon name="arrow" size={14} color="currentColor" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
        <FadeUp delay={0.2} style={{ textAlign: 'center', marginTop: 48 }}>
          <Link to="/services"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 10, border: `1.5px solid ${PRIMARY}`, color: PRIMARY, padding: '13px 36px', borderRadius: 99, fontSize: 13, fontWeight: 500, textDecoration: 'none', letterSpacing: '0.06em', transition: 'all 0.25s' }}
            onMouseEnter={e => { e.currentTarget.style.background = PRIMARY; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = PRIMARY }}
          >
            Tüm Hizmetleri Gör <Icon name="arrow" size={14} color="currentColor" />
          </Link>
        </FadeUp>
      </div>
    </section>
  )
}

function AboutPreview() {
  return (
    <section style={{ padding: '100px 5%', background: 'linear-gradient(180deg, var(--cream) 0%, #F5EDEA 100%)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="about-grid">
          <SlideIn direction="left">
            <div style={{ position: 'relative', minHeight: 400 }}>
              <div style={{ width: '75%', aspectRatio: '3/4', borderRadius: '80px 20px 80px 20px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(201,160,154,0.3)' }}>
                <img src="/uploads/collage.png" alt="Hizmetlerimiz" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
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
                Başak Beauty<br /><em>Hakkımızda</em>
              </h2>
              <p style={{ fontSize: 15, color: TL, lineHeight: 1.9, marginBottom: 20 }}>
                <strong style={{ color: CHARCOAL, fontWeight: 500 }}>Başak Beauty Studio</strong>, 2022 yılında İstanbul Sancaktepe'de kapılarını açtı. Kadın ve erkeklere yönelik güzellik ve bakım hizmetleri sunuyoruz.
              </p>
              <p style={{ fontSize: 15, color: TL, lineHeight: 1.9, marginBottom: 36 }}>
                Misyonumuz; sürdürülebilir bir hizmet anlayışıyla her müşterimize en iyi deneyimi sunmak. Hijyen bizim için öncelik.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 40 }}>
                {VALUES.map(v => (
                  <div key={v.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                    <div style={{ width: 44, height: 44, minWidth: 44, borderRadius: 12, background: `${PRIMARY}14`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon name={v.icon} size={18} color={PRIMARY} />
                    </div>
                    <div>
                      <div style={{ fontWeight: 500, fontSize: 14, color: CHARCOAL, marginBottom: 3 }}>{v.title}</div>
                      <div style={{ fontSize: 13, color: TL, lineHeight: 1.7 }}>{v.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: PRIMARY, color: '#fff', padding: '13px 32px', borderRadius: 99, fontSize: 13, fontWeight: 500, textDecoration: 'none', letterSpacing: '0.04em', transition: 'all 0.25s', boxShadow: `0 4px 20px ${PRIMARY}40` }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'none' }}
              >
                Daha Fazla <Icon name="arrow" size={14} color="#fff" />
              </Link>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}

function ReviewsSection() {
  return (
    <section style={{ padding: '100px 5%', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader eyebrow="Müşteri Yorumları" title="Onlar Ne Diyor?" />
        <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
          {REVIEWS.slice(0, 3).map(r => (
            <motion.div
              key={r.name}
              variants={staggerItem}
              whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(44,44,44,0.08)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              style={{ background: 'var(--cream)', borderRadius: 'var(--radius)', padding: '30px 28px', border: '1px solid rgba(201,169,110,0.1)' }}
            >
              <div style={{ display: 'flex', gap: 3, marginBottom: 20 }}>
                {Array.from({ length: r.rating }).map((_, i) => <Icon key={i} name="star" size={14} color={PRIMARY} />)}
              </div>
              <p style={{ fontSize: 14, color: TL, lineHeight: 1.8, marginBottom: 20, fontStyle: 'italic' }}>"{r.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: `${PRIMARY}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Cormorant Garamond, serif', fontSize: 16, fontWeight: 600, color: PRIMARY }}>
                  {r.name[0]}
                </div>
                <span style={{ fontSize: 13, fontWeight: 500, color: CHARCOAL }}>{r.name}</span>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}

function CTABanner() {
  return (
    <section style={{ padding: '80px 5%', background: `linear-gradient(135deg, ${CHARCOAL} 0%, #1a1208 100%)`, position: 'relative', overflow: 'hidden' }}>
      <motion.div
        style={{ position: 'absolute', top: '-30%', right: '-5%', width: 400, height: 400, borderRadius: '50%', background: `radial-gradient(circle, ${PRIMARY}15, transparent 70%)` }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <FadeUp>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginBottom: 20 }}>
            <div style={{ width: 24, height: 1, background: PRIMARY }} />
            <span style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: PRIMARY, fontWeight: 500 }}>Hemen Başlayın</span>
            <div style={{ width: 24, height: 1, background: PRIMARY }} />
          </div>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 400, color: '#fff', marginBottom: 20, lineHeight: 1.1 }}>
            Güzelliğinize <em style={{ color: PRIMARY }}>Yatırım Yapın</em>
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.65)', lineHeight: 1.8, marginBottom: 40 }}>
            WhatsApp üzerinden kolayca randevu alın, uzman ekibimiz sizi en iyi şekilde karşılasın.
          </p>
          <a href={WA} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: `linear-gradient(135deg, #25D366, #128C7E)`, color: '#fff', padding: '16px 40px', borderRadius: 99, fontSize: 14, fontWeight: 500, textDecoration: 'none', letterSpacing: '0.04em', boxShadow: '0 8px 30px rgba(37,211,102,0.3)', transition: 'all 0.25s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 14px 40px rgba(37,211,102,0.4)' }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(37,211,102,0.3)' }}
          >
            <Icon name="whatsapp" size={20} color="#fff" />
            WhatsApp ile Randevu Al
          </a>
        </FadeUp>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <PageWrapper>
      <HeroSection />
      <StatsBar />
      <ServicesPreview />
      <AboutPreview />
      <ReviewsSection />
      <CTABanner />
    </PageWrapper>
  )
}

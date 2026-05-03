import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import SectionHeader from '../components/SectionHeader'
import Icon from '../components/Icon'
import { FadeUp, StaggerContainer, staggerItem } from '../components/AnimatedSection'
import { PRIMARY, ACCENT, CHARCOAL, TL, WA, SERVICES, SERVICE_CATEGORIES, SVC_PALETTE } from '../constants/brand'

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

function CategoryFilter({ active, onChange }) {
  return (
    <FadeUp>
      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 56 }}>
        {SERVICE_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            style={{
              padding: '9px 22px', borderRadius: 99, fontSize: 12, fontWeight: 500,
              letterSpacing: '0.06em', cursor: 'pointer', transition: 'all 0.25s',
              background: active === cat.id ? PRIMARY : 'transparent',
              color: active === cat.id ? '#fff' : TL,
              border: `1.5px solid ${active === cat.id ? PRIMARY : 'rgba(201,169,110,0.3)'}`,
              boxShadow: active === cat.id ? `0 4px 16px ${PRIMARY}40` : 'none',
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </FadeUp>
  )
}

function ServiceCard({ svc }) {
  const palette = SVC_PALETTE[svc.id] ?? SVC_PALETTE.nail
  return (
    <motion.div
      layout
      variants={staggerItem}
      whileHover={{ y: -6, boxShadow: '0 28px 70px rgba(212,175,55,0.16)' }}
      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      style={{ background: '#fff', borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(201,169,110,0.12)', display: 'flex', flexDirection: 'column' }}
    >
      {/* Image */}
      <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
        <motion.img
          src={palette.img}
          alt={svc.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          whileHover={{ scale: 1.06 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <div style={{ position: 'absolute', top: 14, left: 14, background: `${PRIMARY}ee`, color: '#fff', fontSize: 9, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', padding: '5px 12px', borderRadius: 99 }}>
          {svc.subtitle}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '28px 28px 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 26, fontWeight: 500, color: CHARCOAL, marginBottom: 10 }}>{svc.title}</h3>
        <p style={{ fontSize: 14, color: TL, lineHeight: 1.8, marginBottom: 22 }}>{svc.longDesc}</p>

        {/* Features */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', marginBottom: 24 }}>
          {svc.features.map(f => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: PRIMARY, flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: TL }}>{f}</span>
            </div>
          ))}
        </div>

        {/* Meta */}
        <div style={{ display: 'flex', gap: 20, marginBottom: 24, paddingTop: 20, borderTop: '1px solid rgba(201,169,110,0.12)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <Icon name="clock" size={14} color={PRIMARY} />
            <span style={{ fontSize: 12, color: TL }}>{svc.duration}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
            <span style={{ fontSize: 12, color: PRIMARY, fontWeight: 600 }}>{svc.priceRange}</span>
          </div>
        </div>

        {/* CTA */}
        <a href={WA} target="_blank" rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`, color: '#fff', padding: '13px 24px', borderRadius: 10, fontSize: 13, fontWeight: 500, textDecoration: 'none', letterSpacing: '0.04em', transition: 'opacity 0.2s', marginTop: 'auto' }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <Icon name="whatsapp" size={16} color="#fff" />
          WhatsApp ile Randevu Al
        </a>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory)

  return (
    <PageWrapper>
      <PageHero
        eyebrow="Profesyonel Bakım"
        title="Hizmetlerimiz"
        subtitle="Her hizmetimizde en kaliteli ürünleri ve en güncel teknikleri kullanıyoruz."
        bgImage="/uploads/img_5.png"
      />

      <section style={{ padding: '80px 5%', background: 'var(--cream)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 32 }}>
                {filtered.map(svc => (
                  <ServiceCard key={svc.id} svc={svc} />
                ))}
              </StaggerContainer>
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 20px', color: TL }}>
              <p style={{ fontSize: 16 }}>Bu kategoride henüz hizmet bulunmuyor.</p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{ padding: '80px 5%', background: '#fff' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <FadeUp>
            <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 400, color: CHARCOAL, marginBottom: 16 }}>
              Aklınızda Soru mu Var?
            </h3>
            <p style={{ fontSize: 15, color: TL, lineHeight: 1.8, marginBottom: 36 }}>
              Hangi hizmetin size uygun olduğundan emin değil misiniz? Uzman ekibimiz size en uygun bakım programını belirlemenize yardımcı olacak.
            </p>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: `linear-gradient(135deg, #25D366, #128C7E)`, color: '#fff', padding: '14px 36px', borderRadius: 99, fontSize: 14, fontWeight: 500, textDecoration: 'none', boxShadow: '0 6px 24px rgba(37,211,102,0.3)', transition: 'all 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(37,211,102,0.4)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,211,102,0.3)' }}
            >
              <Icon name="whatsapp" size={18} color="#fff" />
              Danışmak İstiyorum
            </a>
          </FadeUp>
        </div>
      </section>
    </PageWrapper>
  )
}

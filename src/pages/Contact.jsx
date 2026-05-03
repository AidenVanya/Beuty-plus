import { useState } from 'react'
import { motion } from 'framer-motion'
import PageWrapper from '../components/PageWrapper'
import SectionHeader from '../components/SectionHeader'
import Icon from '../components/Icon'
import { FadeUp, StaggerContainer, staggerItem } from '../components/AnimatedSection'
import { PRIMARY, ACCENT, CHARCOAL, TL, WA, HOURS } from '../constants/brand'

function PageHero() {
  return (
    <section style={{ position: 'relative', height: '40vh', minHeight: 320, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
      <motion.img
        src="/uploads/img_9.png"
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
          <span style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: PRIMARY, fontWeight: 500 }}>Bize Ulaşın</span>
          <div style={{ width: 28, height: 1, background: PRIMARY }} />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.25 }}
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 400, color: '#fff', marginBottom: 12, lineHeight: 1.05 }}
        >
          Randevu & İletişim
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', maxWidth: 480, margin: '0 auto' }}
        >
          Sizi güzelleştirmek için sabırsızlanıyoruz.
        </motion.p>
      </div>
    </section>
  )
}

function InfoCards() {
  const cards = [
    { icon: 'mappin',  title: 'Adres',   value: 'Veysel Karani, Çolakoğlu Sokağı No:10, Sancaktepe / İstanbul', link: null },
    { icon: 'phone',   title: 'Telefon', value: '+90 507 207 51 63', link: WA },
    { icon: 'mail',    title: 'E-posta', value: 'info@basakbeauty.com', link: 'mailto:info@basakbeauty.com' },
  ]
  return (
    <StaggerContainer style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20, marginBottom: 40 }}>
      {cards.map(card => (
        <motion.div
          key={card.title}
          variants={staggerItem}
          whileHover={{ y: -4, boxShadow: '0 16px 40px rgba(212,175,55,0.12)' }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          style={{ display: 'flex', alignItems: 'flex-start', gap: 16, background: '#fff', borderRadius: 16, padding: '22px 22px', border: '1px solid rgba(201,169,110,0.12)' }}
        >
          <div style={{ width: 44, height: 44, minWidth: 44, borderRadius: 12, background: `${PRIMARY}14`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name={card.icon} size={18} color={PRIMARY} />
          </div>
          <div>
            <div style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: TL, marginBottom: 5, fontWeight: 500 }}>{card.title}</div>
            {card.link ? (
              <a href={card.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, color: CHARCOAL, fontWeight: 500, textDecoration: 'none' }}
                onMouseEnter={e => e.currentTarget.style.color = PRIMARY}
                onMouseLeave={e => e.currentTarget.style.color = CHARCOAL}
              >{card.value}</a>
            ) : (
              <div style={{ fontSize: 14, color: CHARCOAL, fontWeight: 500 }}>{card.value}</div>
            )}
          </div>
        </motion.div>
      ))}
    </StaggerContainer>
  )
}

function HoursCard() {
  return (
    <FadeUp style={{ marginBottom: 40 }}>
      <div style={{ background: '#fff', borderRadius: 16, padding: '28px 28px', border: '1px solid rgba(201,169,110,0.12)', boxShadow: '0 4px 20px rgba(44,44,44,0.04)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: `${PRIMARY}14`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name="clock" size={16} color={PRIMARY} />
          </div>
          <span style={{ fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', color: TL, fontWeight: 600 }}>Çalışma Saatleri</span>
        </div>
        {HOURS.map((h, i) => (
          <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: i < HOURS.length - 1 ? 12 : 0, marginBottom: i < HOURS.length - 1 ? 12 : 0, borderBottom: i < HOURS.length - 1 ? '1px solid rgba(201,169,110,0.1)' : 'none' }}>
            <span style={{ fontSize: 14, color: TL }}>{h.day}</span>
            <span style={{ fontSize: 14, fontWeight: 600, color: PRIMARY }}>{h.time}</span>
          </div>
        ))}
      </div>
    </FadeUp>
  )
}

function AppointmentForm() {
  const [form,    setForm]    = useState({ name: '', phone: '', service: '', date: '', time: '', message: '' })
  const [sent,    setSent]    = useState(false)
  const [focused, setFocused] = useState(null)

  const inputStyle = field => ({
    width: '100%', padding: '13px 16px', background: 'var(--cream)',
    border: `1.5px solid ${focused === field ? PRIMARY : 'rgba(201,169,110,0.2)'}`,
    borderRadius: 10, fontSize: 14, color: CHARCOAL, outline: 'none',
    transition: 'border-color 0.2s', fontFamily: 'DM Sans, sans-serif',
    boxSizing: 'border-box',
  })

  const label = text => (
    <label style={{ fontSize: 10, letterSpacing: '0.12em', textTransform: 'uppercase', color: TL, display: 'block', marginBottom: 6, fontWeight: 500 }}>{text}</label>
  )

  return (
    <FadeUp>
      <div style={{ background: '#fff', borderRadius: 20, padding: '40px 36px', boxShadow: '0 12px 50px rgba(44,44,44,0.07)', border: '1px solid rgba(201,169,110,0.1)' }}>
        <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 26, fontWeight: 500, color: CHARCOAL, marginBottom: 28 }}>Randevu Formu</h3>

        {sent ? (
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            style={{ textAlign: 'center', padding: '48px 20px' }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontSize: 56, marginBottom: 20 }}
            >✨</motion.div>
            <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, marginBottom: 10, color: CHARCOAL }}>Teşekkürler!</h4>
            <p style={{ fontSize: 14, color: TL, lineHeight: 1.75, marginBottom: 32 }}>Randevu talebiniz alındı. En kısa sürede WhatsApp veya telefon ile sizi arayacağız.</p>
            <button onClick={() => setSent(false)} style={{ background: PRIMARY, color: '#fff', border: 'none', padding: '12px 32px', borderRadius: 99, cursor: 'pointer', fontSize: 13, fontWeight: 500, letterSpacing: '0.04em' }}>
              Yeni Randevu
            </button>
          </motion.div>
        ) : (
          <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>{label('Ad Soyad')}<input type="text" placeholder="Adınız" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} style={inputStyle('name')} required /></div>
              <div>{label('Telefon')}<input type="tel" placeholder="+90 5xx xxx xx xx" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)} style={inputStyle('phone')} required /></div>
            </div>
            <div>
              {label('Hizmet')}
              <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })} onFocus={() => setFocused('service')} onBlur={() => setFocused(null)} style={{ ...inputStyle('service'), appearance: 'none' }} required>
                <option value="">Hizmet seçiniz...</option>
                <option>Protez Tırnak</option>
                <option>İpek Kirpik</option>
                <option>Kaş Tasarımı</option>
                <option>Saç Bakımı</option>
                <option>Cilt Bakımı</option>
                <option>Masaj &amp; SPA</option>
              </select>
            </div>
            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <div>
                {label('Tercih Edilen Tarih')}
                <input type="date" value={form.date} onChange={e => setForm({ ...form, date: e.target.value })} onFocus={() => setFocused('date')} onBlur={() => setFocused(null)} style={inputStyle('date')} />
              </div>
              <div>
                {label('Tercih Edilen Saat')}
                <select value={form.time} onChange={e => setForm({ ...form, time: e.target.value })} onFocus={() => setFocused('time')} onBlur={() => setFocused(null)} style={{ ...inputStyle('time'), appearance: 'none' }}>
                  <option value="">Saat seçiniz...</option>
                  {['09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30'].map(t => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
            <div>
              {label('Mesajınız (İsteğe Bağlı)')}
              <textarea placeholder="Eklemek istediğiniz notlar..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} style={{ ...inputStyle('message'), height: 90, resize: 'vertical' }} />
            </div>
            <button type="submit" style={{ width: '100%', background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`, color: '#fff', border: 'none', padding: '15px 24px', borderRadius: 10, fontSize: 14, fontWeight: 500, cursor: 'pointer', letterSpacing: '0.04em', marginTop: 4, transition: 'opacity 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Randevu Talep Et
            </button>
          </form>
        )}
      </div>
    </FadeUp>
  )
}

function SocialLinks() {
  return (
    <FadeUp delay={0.1}>
      <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
        {[
          { name: 'instagram', href: '#', label: 'Instagram' },
          { name: 'facebook',  href: '#', label: 'Facebook'  },
          { name: 'tiktok',    href: '#', label: 'TikTok'    },
        ].map(s => (
          <motion.a
            key={s.name} href={s.href} title={s.label}
            whileHover={{ y: -3, background: PRIMARY }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{ width: 44, height: 44, borderRadius: 12, background: '#fff', border: '1px solid rgba(201,169,110,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', boxShadow: '0 2px 8px rgba(44,44,44,0.05)' }}
          >
            <Icon name={s.name} size={17} color={CHARCOAL} />
          </motion.a>
        ))}
      </div>
    </FadeUp>
  )
}

export default function Contact() {
  return (
    <PageWrapper>
      <PageHero />

      <section style={{ padding: '80px 5%', background: 'linear-gradient(180deg, var(--cream) 0%, #F0E6DF 100%)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* WhatsApp CTA */}
          <FadeUp style={{ marginBottom: 48 }}>
            <a href={WA} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 20, background: 'linear-gradient(135deg, #25D366, #128C7E)', padding: '22px 32px', borderRadius: 20, textDecoration: 'none', boxShadow: '0 10px 40px rgba(37,211,102,0.25)', transition: 'all 0.25s', maxWidth: 500 }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 18px 50px rgba(37,211,102,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 10px 40px rgba(37,211,102,0.25)' }}
            >
              <Icon name="whatsapp" size={32} color="#fff" />
              <div>
                <div style={{ fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 3 }}>WhatsApp ile Randevu Al</div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>Hızlı ve kolay — anında yanıt</div>
              </div>
              <div style={{ marginLeft: 'auto' }}><Icon name="arrow" size={20} color="rgba(255,255,255,0.8)" /></div>
            </a>
          </FadeUp>

          {/* Info + Form grid */}
          <div className="contact-grid">
            {/* Left: info */}
            <div>
              <InfoCards />
              <HoursCard />
              <SocialLinks />
            </div>

            {/* Right: form + map */}
            <div>
              <AppointmentForm />
              <FadeUp delay={0.15} style={{ marginTop: 24 }}>
                <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid rgba(201,169,110,0.1)', boxShadow: '0 4px 20px rgba(44,44,44,0.06)' }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.2!2d29.2345!3d40.9812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac5a!2sBa%C5%9Fak+Beauty!5e0!3m2!1str!2str!4v1"
                    width="100%" height="320"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Başak Beauty Konum"
                  />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}

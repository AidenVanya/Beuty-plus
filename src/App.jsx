import { useState, useEffect } from 'react'

// ── Brand tokens ──────────────────────────────────────────────
const PRIMARY  = '#D4AF37'
const ACCENT   = '#E91E8C'
const CHARCOAL = '#0D0B08'
const TL       = '#6B5E52'   // text-light
const WA       = 'https://wa.me/905072075163'

// ── Icons ─────────────────────────────────────────────────────
function Icon({ name, size = 20, color = 'currentColor' }) {
  const icons = {
    menu:      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
    close:     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
    arrow:     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>,
    phone:     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 11 19.79 19.79 0 01.04 2.39 2 2 0 012 .21h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>,
    mappin:    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    clock:     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    mail:      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    check:     <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
    sparkle:   <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5"><path d="M12 2 L13.5 8.5 L20 10 L13.5 11.5 L12 18 L10.5 11.5 L4 10 L10.5 8.5 Z"/></svg>,
    star:      <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
    instagram: <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
    facebook:  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
    tiktok:    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.37 6.37 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.16 8.16 0 004.77 1.52V6.75a4.85 4.85 0 01-1-.06z"/></svg>,
    whatsapp:  <svg width={size} height={size} viewBox="0 0 24 24" fill={color}><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12.05 1.993C6.495 1.993 1.993 6.495 1.993 12.05c0 1.862.487 3.612 1.338 5.131L1.5 22.5l5.432-1.794A10.015 10.015 0 0012.05 22.1c5.554 0 10.057-4.502 10.057-10.057 0-5.553-4.503-10.05-10.057-10.05zm0 18.37a8.31 8.31 0 01-4.237-1.158l-.303-.18-3.145 1.038 1.054-3.064-.197-.317a8.313 8.313 0 01-1.272-4.433c0-4.594 3.739-8.333 8.334-8.333 4.594 0 8.333 3.74 8.333 8.334 0 4.594-3.74 8.333-8.333 8.333z"/></svg>,
  }
  return icons[name] ?? null
}

// ── Logo ──────────────────────────────────────────────────────
function Logo({ size = 40 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <defs>
        <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#E91E8C"/>
          <stop offset="50%"  stopColor="#FF6B35"/>
          <stop offset="100%" stopColor="#D4AF37"/>
        </linearGradient>
      </defs>
      <circle cx="30" cy="30" r="28" stroke="url(#lg)" strokeWidth="2"/>
      <text x="50%" y="54%" dominantBaseline="middle" textAnchor="middle"
        fontFamily="Cormorant Garamond, serif" fontSize="28" fontWeight="600" fill="#D4AF37">B</text>
    </svg>
  )
}

// ── Hero background ───────────────────────────────────────────
function HeroBg() {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
      <img
        src="/uploads/img_9.png"
        alt=""
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%', transform: 'scale(1.04)', transition: 'transform 8s ease' }}
        onLoad={e => { e.target.style.transform = 'scale(1)' }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(13,11,8,0.72) 0%, rgba(13,11,8,0.45) 60%, rgba(13,11,8,0.3) 100%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 180, background: 'linear-gradient(to top, rgba(13,11,8,0.6), transparent)' }} />
      <div style={{ position: 'absolute', top: '-5%', right: '-3%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(233,30,140,0.08) 0%, rgba(255,107,53,0.06) 40%, transparent 70%)' }} />
    </div>
  )
}

// ── Service card images ───────────────────────────────────────
const SVC_PALETTE = {
  nail:    { img: '/uploads/img_10.png' },
  lash:    { img: '/uploads/img_1.png'  },
  brow:    { img: '/uploads/img_3.png'  },
  hair:    { img: '/uploads/img_6.png'  },
  skin:    { img: '/uploads/img_5.png'  },
  massage: { img: '/uploads/img_8.png'  },
}

function ServiceImg({ service }) {
  const p = SVC_PALETTE[service] ?? SVC_PALETTE.nail
  return (
    <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: 'var(--radius) var(--radius) 0 0', overflow: 'hidden' }}>
      <img src={p.img} alt={service}
        style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', transition: 'transform 0.4s ease', display: 'block' }} />
    </div>
  )
}

// ── Section header helper ─────────────────────────────────────
function SectionHeader({ eyebrow, title, subtitle, center = true }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: 64 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: center ? 'center' : 'flex-start', marginBottom: 16 }}>
        <div style={{ height: 1, width: 40, background: `${PRIMARY}60` }} />
        <span style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: PRIMARY, fontWeight: 500 }}>{eyebrow}</span>
        <div style={{ height: 1, width: 40, background: `${PRIMARY}60` }} />
      </div>
      <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, color: CHARCOAL, marginBottom: subtitle ? 16 : 0 }}>
        {title}
      </h2>
      {subtitle && <p style={{ fontSize: 15, color: TL, maxWidth: 480, margin: '0 auto', lineHeight: 1.8 }}>{subtitle}</p>}
    </div>
  )
}

// ── Navbar ────────────────────────────────────────────────────
const NAV_LINKS = [
  { id: 'home',     label: 'Ana Sayfa'  },
  { id: 'services', label: 'Hizmetler'  },
  { id: 'about',    label: 'Hakkımızda' },
  { id: 'contact',  label: 'İletişim'   },
]

function Navbar({ active, setActive }) {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = id => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
    setActive(id)
    setMobileOpen(false)
  }

  const logoColor = scrolled ? CHARCOAL : '#fff'
  const navBg     = scrolled ? 'rgba(250,247,244,0.95)' : 'transparent'
  const textColor = scrolled ? TL : 'rgba(255,255,255,0.75)'


  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: navBg, backdropFilter: scrolled ? 'blur(12px)' : 'none', borderBottom: scrolled ? '1px solid rgba(201,169,110,0.15)' : 'none', transition: 'all 0.35s ease', padding: scrolled ? '14px 5%' : '22px 5%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => scrollTo('home')}>
          <Logo size={36} />
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontWeight: 600, color: logoColor, letterSpacing: '0.04em', lineHeight: 1, transition: 'color 0.35s' }}>Başak Beauty</div>
            <div style={{ fontSize: 9, letterSpacing: '0.2em', color: scrolled ? TL : 'rgba(255,255,255,0.6)', textTransform: 'uppercase', transition: 'color 0.35s' }}>Studio</div>
          </div>
        </div>

        {/* Desktop links */}
        <div className="desktop-nav">
          {NAV_LINKS.map(link => (
            <button key={link.id} onClick={() => scrollTo(link.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0', fontFamily: 'DM Sans, sans-serif', fontSize: 13, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500, color: active === link.id ? PRIMARY : textColor, borderBottom: active === link.id ? `1px solid ${PRIMARY}` : '1px solid transparent', transition: 'all 0.2s' }}>
              {link.label}
            </button>
          ))}
          <button onClick={() => scrollTo('contact')} style={{ background: PRIMARY, color: '#fff', border: 'none', cursor: 'pointer', padding: '10px 24px', borderRadius: 99, fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', boxShadow: `0 4px 20px ${PRIMARY}40`, transition: 'opacity 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
            Randevu Al
          </button>
        </div>

        {/* Mobile burger */}
        <button className="mobile-burger" onClick={() => setMobileOpen(v => !v)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
          <Icon name={mobileOpen ? 'close' : 'menu'} size={24} color={scrolled ? CHARCOAL : '#fff'} />
        </button>
      </nav>

      {/* Mobile full-screen menu */}
      {mobileOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 99, background: 'rgba(250,247,244,0.97)', backdropFilter: 'blur(16px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32 }}>
          {NAV_LINKS.map(link => (
            <button key={link.id} onClick={() => scrollTo(link.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 400, color: active === link.id ? PRIMARY : CHARCOAL, letterSpacing: '0.04em' }}>
              {link.label}
            </button>
          ))}
          <button onClick={() => scrollTo('contact')} style={{ background: PRIMARY, color: '#fff', border: 'none', cursor: 'pointer', padding: '14px 40px', borderRadius: 99, fontSize: 14, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 16 }}>
            Randevu Al
          </button>
        </div>
      )}
    </>
  )
}

// ── Hero ──────────────────────────────────────────────────────
function HeroSection() {
  const scrollToServices = () => {
    const el = document.getElementById('services')
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }

  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', padding: '0 5%' }}>
      <HeroBg />
      <div style={{ position: 'relative', zIndex: 1, width: '100%', maxWidth: 1200, margin: '0 auto', textAlign: 'center', paddingTop: 100, paddingBottom: 60 }}>

        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'center', marginBottom: 24, animation: 'fadeIn 0.6s ease both' }}>
          <div style={{ width: 32, height: 1, background: 'var(--gold)' }} />
          <span style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>İstanbul Sancaktepe</span>
          <div style={{ width: 32, height: 1, background: 'var(--gold)' }} />
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(48px, 7vw, 88px)', fontWeight: 400, lineHeight: 1.05, color: '#FFFFFF', marginBottom: 28, animation: 'fadeIn 0.7s 0.1s ease both' }}>
          Güzelliğiniz<br />
          <em style={{ color: PRIMARY }}>Bizim Tutkumuz</em>
        </h1>

        {/* Subtext */}
        <p style={{ fontSize: 16, lineHeight: 1.8, color: 'rgba(255,255,255,0.75)', maxWidth: 520, margin: '0 auto 40px', animation: 'fadeIn 0.7s 0.2s ease both' }}>
          2022'den bu yana profesyonel güzellik ve bakım hizmetleriyle yanınızdayız.
          Tırnak, kirpik, kaş ve cilt bakımında uzmanlaşmış ekibimizle sizi karşılıyoruz.
        </p>

        {/* CTAs */}
        <div className="hero-ctas" style={{ display: 'flex', gap: 16, flexWrap: 'wrap', justifyContent: 'center', animation: 'fadeIn 0.7s 0.3s ease both' }}>
          <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 10, background: PRIMARY, color: '#fff', padding: '14px 32px', borderRadius: 99, fontSize: 14, fontWeight: 500, textDecoration: 'none', letterSpacing: '0.04em', boxShadow: `0 6px 30px ${PRIMARY}50`, transition: 'all 0.25s' }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = `0 10px 35px ${PRIMARY}60` }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = `0 6px 30px ${PRIMARY}50` }}>
            <Icon name="sparkle" size={16} color="#fff" />
            Randevu Al
          </a>
          <button onClick={scrollToServices} style={{ background: 'transparent', border: `1.5px solid ${ACCENT}`, color: '#fff', padding: '14px 32px', borderRadius: 99, fontSize: 14, fontWeight: 500, cursor: 'pointer', letterSpacing: '0.04em', transition: 'all 0.25s' }}
            onMouseEnter={e => { e.currentTarget.style.background = ACCENT }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
            Hizmetlerimiz
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', gap: 40, marginTop: 52, justifyContent: 'center', flexWrap: 'wrap', animation: 'fadeIn 0.7s 0.4s ease both' }}>
          {[['500+', 'Mutlu Müşteri'], ['3+', 'Yıllık Deneyim'], ['10+', 'Hizmet Çeşidi']].map(([num, lbl]) => (
            <div key={lbl}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 500, color: PRIMARY, lineHeight: 1 }}>{num}</div>
              <div style={{ fontSize: 11, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', marginTop: 4 }}>{lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Services ──────────────────────────────────────────────────
const SERVICES = [
  { id: 'nail',    title: 'Protez Tırnak', subtitle: 'Nail Art & Akrilik',   desc: 'Kalıcı ojeden akrilik proteze, en trend tasarımlara kadar tırnak sanatında uzmanız.',                          price: '₺250\'den başlayan' },
  { id: 'lash',    title: 'İpek Kirpik',   subtitle: 'Lash Lift & Volume',   desc: 'Doğal ya da dramatik – uzman kirpik tekniklerimizle bakışlarınıza derinlik katıyoruz.',                          price: '₺350\'den başlayan' },
  { id: 'brow',    title: 'Kaş Tasarımı',  subtitle: 'Shaping & Tinting',    desc: 'Yüz hatlarınıza özel kaş şekillendirme, renklendirme ve ipek brow lift uygulamaları.',                          price: '₺150\'den başlayan' },
  { id: 'hair',    title: 'Saç Bakımı',    subtitle: 'Keratin & Boyama',     desc: 'Saçınızı güçlendiren bakım, renk ve şekillendirme hizmetleri profesyonel ellerde.',                             price: '₺500\'den başlayan' },
  { id: 'skin',    title: 'Cilt Bakımı',   subtitle: 'Peeling & Hydration',  desc: 'Dermatologji destekli cilt bakım protokolleriyle parlak ve sağlıklı bir ten görünümü.',                        price: '₺400\'den başlayan' },
  { id: 'massage', title: 'Masaj & SPA',   subtitle: 'Relax & Wellness',     desc: 'Stres atmak için aromaterapi masajı, refleksoloji ve wellness ritüelleri ile tam rahatlama.',                  price: '₺300\'den başlayan' },
]

function ServicesSection() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="services" style={{ padding: '100px 5%', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader eyebrow="Ne Yapıyoruz" title="Hizmetlerimiz" subtitle="Her hizmetimizde en kaliteli ürünleri ve en güncel teknikleri kullanıyoruz." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 24 }}>
          {SERVICES.map(svc => (
            <div key={svc.id} onMouseEnter={() => setHovered(svc.id)} onMouseLeave={() => setHovered(null)} style={{ background: 'var(--cream)', borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid rgba(201,169,110,0.12)', boxShadow: hovered === svc.id ? '0 20px 50px rgba(44,44,44,0.10)' : '0 2px 12px rgba(44,44,44,0.04)', transform: hovered === svc.id ? 'translateY(-6px)' : 'none', transition: 'all 0.3s cubic-bezier(0.34,1.56,0.64,1)' }}>
              <ServiceImg service={svc.id} />
              <div style={{ padding: '24px 26px 28px' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: PRIMARY, marginBottom: 6, fontWeight: 500 }}>{svc.subtitle}</div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, fontWeight: 500, color: CHARCOAL, marginBottom: 10 }}>{svc.title}</h3>
                <p style={{ fontSize: 13, color: TL, lineHeight: 1.75, marginBottom: 20 }}>{svc.desc}</p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 13, color: PRIMARY, fontWeight: 500 }}>{svc.price}</span>
                  <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: TL, textDecoration: 'none', letterSpacing: '0.04em', fontWeight: 500, transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = PRIMARY}
                    onMouseLeave={e => e.currentTarget.style.color = TL}>
                    Randevu Al <Icon name="arrow" size={14} color="currentColor" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── About ─────────────────────────────────────────────────────
const VALUES = [
  { icon: 'check',   title: 'Hijyen & Kalite', desc: 'Steril malzemeler ve antibakteryel ürünler kullanılıyor.' },
  { icon: 'sparkle', title: 'Uzman Ekip',       desc: 'Alanında eğitimli, sertifikalı ve deneyimli kadromuz.'  },
  { icon: 'star',    title: 'Kişiye Özel',      desc: 'Her müşterimize özel bakım ve danışmanlık hizmeti.'     },
]

function AboutSection() {
  return (
    <section id="about" style={{ padding: '100px 5%', background: 'linear-gradient(180deg, var(--cream) 0%, #F5EDEA 100%)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="about-grid">
          {/* Image collage */}
          <div className="about-img-col" style={{ position: 'relative', minHeight: 440 }}>
            <div style={{ width: '75%', aspectRatio: '3/4', borderRadius: '80px 20px 80px 20px', overflow: 'hidden', boxShadow: '0 30px 80px rgba(201,160,154,0.3)' }}>
              <img src="/uploads/collage.png" alt="Hizmetlerimiz"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
            </div>
            <div style={{ position: 'absolute', right: 0, bottom: '15%', width: '50%', aspectRatio: '1/1', borderRadius: '20px 80px 20px 80px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(201,169,110,0.3)', border: '4px solid #fff' }}>
              <img src="/uploads/img_7.png" alt="Cilt Bakımı"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
            </div>
            <div style={{ position: 'absolute', top: '10%', right: '12%', background: '#fff', borderRadius: 14, padding: '14px 18px', boxShadow: '0 8px 30px rgba(44,44,44,0.1)', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, fontWeight: 600, color: PRIMARY, lineHeight: 1 }}>2022</div>
              <div style={{ fontSize: 10, color: TL, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Kuruluş</div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
              <div style={{ height: 1, width: 32, background: PRIMARY }} />
              <span style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: PRIMARY, fontWeight: 500 }}>Hikayemiz</span>
            </div>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, color: CHARCOAL, lineHeight: 1.15, marginBottom: 24 }}>
              Başak Beauty<br /><em>Hakkımızda</em>
            </h2>
            <p style={{ fontSize: 15, color: TL, lineHeight: 1.9, marginBottom: 20 }}>
              <strong style={{ color: CHARCOAL, fontWeight: 500 }}>Başak Beauty Studio</strong>, 2022 yılında İstanbul Sancaktepe'de kapılarını açtı. Kadın ve erkeklere yönelik güzellik ve bakım hizmetleri sunuyoruz. Her biri alanında uzman, sertifikalı ekibimizle hizmetinizdeyiz.
            </p>
            <p style={{ fontSize: 15, color: TL, lineHeight: 1.9, marginBottom: 36 }}>
              Misyonumuz; sürdürülebilir bir hizmet anlayışıyla her müşterimize en iyi deneyimi sunmak. Hijyen bizim için öncelik; tüm malzemelerimiz steril ve antibakteryel ürünlerden oluşuyor.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
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
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Reviews ───────────────────────────────────────────────────
const REVIEWS = [
  { name: 'Selin K.', text: 'Uzun süredir aradığım salonu buldum! Hem tırnak hem de kirpik uygulaması mükemmeldi. Kesinlikle tavsiye ederim.',        rating: 5 },
  { name: 'Merve T.', text: 'Hijyen konusunda çok titiz davranıyorlar. Personel çok ilgili ve profesyonel. Sonuçtan çok memnunum.',                    rating: 5 },
  { name: 'Ayşe D.',  text: 'Kaş tasarımım harika oldu. Yüzümün şekline göre düşünülmüş bir tasarım. Teşekkürler Başak Hanım!',                       rating: 5 },
]

function ReviewsSection() {
  return (
    <section style={{ padding: '80px 5%', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader eyebrow="Müşteri Yorumları" title="Onlar Ne Diyor?" />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 24 }}>
          {REVIEWS.map(r => (
            <div key={r.name} style={{ background: 'var(--cream)', borderRadius: 'var(--radius)', padding: '30px 28px', border: '1px solid rgba(201,169,110,0.1)' }}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Contact ───────────────────────────────────────────────────
const HOURS = [
  { day: 'Pazartesi – Cuma', time: '09:00 – 20:00' },
  { day: 'Cumartesi',        time: '09:00 – 19:00' },
  { day: 'Pazar',            time: '10:00 – 17:00' },
]

function ContactSection() {
  const [form, setForm]       = useState({ name: '', phone: '', service: '', message: '' })
  const [sent, setSent]       = useState(false)
  const [focused, setFocused] = useState(null)

  const inputStyle = field => ({
    width: '100%', padding: '14px 16px', background: 'var(--cream)',
    border: `1.5px solid ${focused === field ? PRIMARY : 'rgba(201,169,110,0.2)'}`,
    borderRadius: 10, fontSize: 14, color: CHARCOAL, outline: 'none',
    transition: 'border-color 0.2s', fontFamily: 'DM Sans, sans-serif',
  })

  return (
    <section id="contact" style={{ padding: '100px 5%', background: 'linear-gradient(180deg, var(--cream) 0%, #F0E6DF 100%)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeader eyebrow="Bize Ulaşın" title="Randevu & İletişim" />

        <div className="contact-grid">
          {/* Info column */}
          <div>
            {/* WhatsApp CTA */}
            <a href={WA} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: 16, background: 'linear-gradient(135deg, #25D366, #128C7E)', padding: '20px 28px', borderRadius: 'var(--radius)', textDecoration: 'none', marginBottom: 32, boxShadow: '0 8px 30px rgba(37,211,102,0.25)', transition: 'all 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 40px rgba(37,211,102,0.35)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none';             e.currentTarget.style.boxShadow = '0 8px 30px rgba(37,211,102,0.25)' }}>
              <Icon name="whatsapp" size={28} color="#fff" />
              <div>
                <div style={{ fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: 2 }}>WhatsApp ile Randevu Al</div>
                <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.75)' }}>Hızlı ve kolay randevu</div>
              </div>
              <div style={{ marginLeft: 'auto' }}><Icon name="arrow" size={18} color="rgba(255,255,255,0.8)" /></div>
            </a>

            {/* Info cards */}
            {[
              { icon: 'mappin', title: 'Adres',   value: 'Veysel Karani, Çolakoğlu Sokağı No:10, Sancaktepe / İstanbul' },
              { icon: 'phone',  title: 'Telefon', value: '+90 507 207 51 63' },
              { icon: 'mail',   title: 'E-posta', value: 'info@basakbeauty.com' },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 20, background: '#fff', borderRadius: 12, padding: '18px 20px', border: '1px solid rgba(201,169,110,0.1)', boxShadow: '0 2px 12px rgba(44,44,44,0.04)' }}>
                <div style={{ width: 40, height: 40, minWidth: 40, borderRadius: 10, background: `${PRIMARY}14`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name={item.icon} size={18} color={PRIMARY} />
                </div>
                <div>
                  <div style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: TL, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 14, color: CHARCOAL, fontWeight: 500 }}>{item.value}</div>
                </div>
              </div>
            ))}

            {/* Hours */}
            <div style={{ background: '#fff', borderRadius: 'var(--radius)', padding: '22px 24px', border: '1px solid rgba(201,169,110,0.1)', boxShadow: '0 2px 12px rgba(44,44,44,0.04)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                <Icon name="clock" size={16} color={PRIMARY} />
                <span style={{ fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: TL, fontWeight: 500 }}>Çalışma Saatleri</span>
              </div>
              {HOURS.map(h => (
                <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 10, marginBottom: 10, borderBottom: '1px solid rgba(201,169,110,0.08)' }}>
                  <span style={{ fontSize: 13, color: TL }}>{h.day}</span>
                  <span style={{ fontSize: 13, fontWeight: 500, color: PRIMARY }}>{h.time}</span>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 12, marginTop: 24 }}>
              {[
                { name: 'instagram', href: '#', label: 'Instagram' },
                { name: 'facebook',  href: '#', label: 'Facebook'  },
                { name: 'tiktok',    href: '#', label: 'TikTok'    },
              ].map(s => (
                <a key={s.name} href={s.href} title={s.label} style={{ width: 44, height: 44, borderRadius: 12, background: '#fff', border: '1px solid rgba(201,169,110,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'all 0.2s', boxShadow: '0 2px 8px rgba(44,44,44,0.05)' }}
                  onMouseEnter={e => { e.currentTarget.style.background = PRIMARY; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#fff';  e.currentTarget.style.transform = 'none' }}>
                  <Icon name={s.name} size={17} color={CHARCOAL} />
                </a>
              ))}
            </div>
          </div>

          {/* Form + map column */}
          <div>
            <div style={{ background: '#fff', borderRadius: 'var(--radius)', padding: '36px 32px', boxShadow: '0 8px 40px rgba(44,44,44,0.06)', border: '1px solid rgba(201,169,110,0.1)', marginBottom: 24 }}>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, fontWeight: 500, color: CHARCOAL, marginBottom: 24 }}>Randevu Formu</h3>

              {sent ? (
                <div style={{ textAlign: 'center', padding: '40px 20px' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✨</div>
                  <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, marginBottom: 8, color: CHARCOAL }}>Teşekkürler!</h4>
                  <p style={{ fontSize: 14, color: TL, lineHeight: 1.7 }}>Randevu talebiniz alındı. En kısa sürede sizi arayacağız.</p>
                  <button onClick={() => setSent(false)} style={{ marginTop: 24, background: PRIMARY, color: '#fff', border: 'none', padding: '10px 24px', borderRadius: 99, cursor: 'pointer', fontSize: 13 }}>
                    Yeni Randevu
                  </button>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSent(true) }} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                  <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                    <div>
                      <label style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: TL, display: 'block', marginBottom: 6 }}>Ad Soyad</label>
                      <input type="text" placeholder="Adınız" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)} style={inputStyle('name')} required />
                    </div>
                    <div>
                      <label style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: TL, display: 'block', marginBottom: 6 }}>Telefon</label>
                      <input type="tel" placeholder="+90 5xx xxx xx xx" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)} style={inputStyle('phone')} required />
                    </div>
                  </div>
                  <div>
                    <label style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: TL, display: 'block', marginBottom: 6 }}>Hizmet</label>
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
                  <div>
                    <label style={{ fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase', color: TL, display: 'block', marginBottom: 6 }}>Mesajınız (İsteğe Bağlı)</label>
                    <textarea placeholder="Tercih ettiğiniz tarih ve saat..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)} style={{ ...inputStyle('message'), height: 90, resize: 'vertical' }} />
                  </div>
                  <button type="submit" style={{ width: '100%', background: `linear-gradient(135deg, ${PRIMARY}, ${ACCENT})`, color: '#fff', border: 'none', padding: '15px 24px', borderRadius: 10, fontSize: 14, fontWeight: 500, cursor: 'pointer', letterSpacing: '0.04em', marginTop: 4, transition: 'opacity 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}>
                    Randevu Talep Et
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div style={{ borderRadius: 'var(--radius)', overflow: 'hidden', border: '1px solid rgba(201,169,110,0.1)', boxShadow: '0 4px 20px rgba(44,44,44,0.06)' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3011.2!2d29.2345!3d40.9812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac5a!2sBa%C5%9Fak+Beauty!5e0!3m2!1str!2str!4v1"
                width="100%" height="220"
                style={{ border: 0, display: 'block' }}
                allowFullScreen loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Başak Beauty Konum" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────
function Footer() {
  const scrollTo = id => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
  }
  return (
    <footer style={{ background: CHARCOAL, color: 'rgba(255,255,255,0.6)', padding: '48px 5% 28px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 32, borderBottom: '1px solid rgba(255,255,255,0.08)', flexWrap: 'wrap', gap: 24 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <Logo size={32} />
            <div>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontWeight: 500, color: '#fff', lineHeight: 1 }}>Başak Beauty Studio</div>
              <div style={{ fontSize: 10, letterSpacing: '0.15em', color: PRIMARY, textTransform: 'uppercase', marginTop: 3 }}>Since 2022</div>
            </div>
          </div>
          <div className="footer-links" style={{ display: 'flex', gap: 28, flexWrap: 'wrap' }}>
            {[['home', 'Ana Sayfa'], ['services', 'Hizmetler'], ['about', 'Hakkımızda'], ['contact', 'İletişim']].map(([id, lbl]) => (
              <button key={id} onClick={() => scrollTo(id)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: 12, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = PRIMARY}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                {lbl}
              </button>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, flexWrap: 'wrap', gap: 16 }}>
          <div style={{ fontSize: 12 }}>© 2025 Başak Beauty Studio — Tüm Hakları Saklıdır.</div>
          <div style={{ fontSize: 12 }}>
            <a href={WA} style={{ color: PRIMARY, textDecoration: 'none' }}>+90 507 207 51 63</a>
            {' · '}
            <span>Sancaktepe, İstanbul</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────
export default function App() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const ids = ['home', 'services', 'about', 'contact']
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.4 },
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el) })
    return () => observer.disconnect()
  }, [])

  return (
    <div>
      <Navbar active={active} setActive={setActive} />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

import { Link } from 'react-router-dom'
import { PRIMARY, CHARCOAL, TL, WA, NAV_LINKS } from '../constants/brand'
import Icon from './Icon'
import Logo from './Logo'

export default function Footer() {
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
            {NAV_LINKS.map(link => (
              <Link
                key={link.id}
                to={link.path}
                style={{ fontSize: 12, letterSpacing: '0.06em', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = PRIMARY}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
              >
                {link.label}
              </Link>
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

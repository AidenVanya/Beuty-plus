import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { PRIMARY, TL, CHARCOAL, NAV_LINKS } from '../constants/brand'
import Icon from './Icon'
import Logo from './Logo'

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const logoColor = scrolled ? CHARCOAL : '#fff'
  const navBg     = scrolled ? 'rgba(250,247,244,0.95)' : 'transparent'
  const textColor = scrolled ? TL : 'rgba(255,255,255,0.75)'

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          background: navBg,
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,169,110,0.15)' : 'none',
          transition: 'all 0.35s ease',
          padding: scrolled ? '14px 5%' : '22px 5%',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <Logo size={36} />
          <div>
            <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontWeight: 600, color: logoColor, letterSpacing: '0.04em', lineHeight: 1, transition: 'color 0.35s' }}>Başak Beauty</div>
            <div style={{ fontSize: 9, letterSpacing: '0.2em', color: scrolled ? TL : 'rgba(255,255,255,0.6)', textTransform: 'uppercase', transition: 'color 0.35s' }}>Studio</div>
          </div>
        </Link>

        <div className="desktop-nav">
          {NAV_LINKS.map(link => (
            <NavLink
              key={link.id}
              to={link.path}
              style={({ isActive }) => ({
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '4px 0', textDecoration: 'none',
                fontFamily: 'DM Sans, sans-serif', fontSize: 13,
                letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500,
                color: isActive ? PRIMARY : textColor,
                borderBottom: isActive ? `1px solid ${PRIMARY}` : '1px solid transparent',
                transition: 'all 0.2s',
                display: 'inline-block',
              })}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            style={{
              background: PRIMARY, color: '#fff', border: 'none', cursor: 'pointer',
              padding: '10px 24px', borderRadius: 99, fontSize: 12, fontWeight: 500,
              letterSpacing: '0.08em', textTransform: 'uppercase',
              boxShadow: `0 4px 20px ${PRIMARY}40`,
              textDecoration: 'none', display: 'inline-block',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={e => e.currentTarget.style.opacity = '1'}
          >
            Randevu Al
          </Link>
        </div>

        <button className="mobile-burger" onClick={() => setMobileOpen(v => !v)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
          <Icon name={mobileOpen ? 'close' : 'menu'} size={24} color={scrolled ? CHARCOAL : '#fff'} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99,
              background: 'rgba(250,247,244,0.97)', backdropFilter: 'blur(16px)',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 32,
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, duration: 0.3 }}
              >
                <NavLink
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  style={({ isActive }) => ({
                    background: 'none', border: 'none', cursor: 'pointer',
                    textDecoration: 'none',
                    fontFamily: 'Cormorant Garamond, serif', fontSize: 32, fontWeight: 400,
                    color: isActive ? PRIMARY : CHARCOAL,
                    letterSpacing: '0.04em',
                    display: 'block',
                  })}
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.07, duration: 0.3 }}
            >
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                style={{
                  background: PRIMARY, color: '#fff', border: 'none', cursor: 'pointer',
                  padding: '14px 40px', borderRadius: 99, fontSize: 14, fontWeight: 500,
                  letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none',
                  display: 'inline-block', marginTop: 16,
                }}
              >
                Randevu Al
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

import { PRIMARY, CHARCOAL, TL } from '../constants/brand'
import { FadeUp } from './AnimatedSection'

export default function SectionHeader({ eyebrow, title, subtitle, center = true }) {
  return (
    <div style={{ textAlign: center ? 'center' : 'left', marginBottom: 64 }}>
      <FadeUp delay={0}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: center ? 'center' : 'flex-start', marginBottom: 16 }}>
          <div style={{ height: 1, width: 40, background: `${PRIMARY}60` }} />
          <span style={{ fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', color: PRIMARY, fontWeight: 500 }}>{eyebrow}</span>
          <div style={{ height: 1, width: 40, background: `${PRIMARY}60` }} />
        </div>
      </FadeUp>
      <FadeUp delay={0.1}>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, color: CHARCOAL, marginBottom: subtitle ? 16 : 0 }}>
          {title}
        </h2>
      </FadeUp>
      {subtitle && (
        <FadeUp delay={0.2}>
          <p style={{ fontSize: 15, color: TL, maxWidth: 480, margin: center ? '0 auto' : undefined, lineHeight: 1.8 }}>{subtitle}</p>
        </FadeUp>
      )}
    </div>
  )
}

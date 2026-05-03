export default function Logo({ size = 40 }) {
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

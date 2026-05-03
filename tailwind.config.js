/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        gold:       '#D4AF37',
        'gold-light': '#F0D98A',
        charcoal:   '#0D0B08',
        blush:      '#F0E6DF',
        cream:      '#FAF8F5',
        pink:       '#E91E8C',
        'text-light': '#6B5E52',
      },
      borderRadius: {
        brand: '16px',
      },
    },
  },
  plugins: [],
}

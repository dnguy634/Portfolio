/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          950: '#050505',
          900: '#0A0A0A',
          850: '#0D0D0D',
          800: '#121212',
          700: '#1A1A1A',
          600: '#262626',
          500: '#333333',
        },
        ink: {
          100: '#E8E8E6',
          300: '#9A9A96',
          500: '#6B6B68',
          700: '#454543',
        },
        amber: {
          DEFAULT: '#FFB02E',
          dim: '#A67320',
          glow: 'rgba(255,176,46,0.18)',
        },
      },
      fontFamily: {
        display: ['"JetBrains Mono"', 'monospace'],
        body: ['"JetBrains Mono"', 'monospace'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        scanlines:
          'repeating-linear-gradient(to bottom, rgba(255,255,255,0.015) 0px, rgba(255,255,255,0.015) 1px, transparent 1px, transparent 3px)',
      },
      boxShadow: {
        line: '0 1px 0 0 rgba(255,255,255,0.06)',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        scan: 'scan 6s linear infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
}

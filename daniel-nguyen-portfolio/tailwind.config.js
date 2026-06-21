/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          950: '#070A10',
          900: '#0A0E14',
          850: '#0D1119',
          800: '#11161F',
          700: '#171D29',
          600: '#222A38',
        },
        ink: {
          100: '#E9ECF2',
          300: '#B7BFCC',
          500: '#8B95A7',
          700: '#5C6577',
        },
        signal: {
          indigo: '#6E7BFF',
          cyan: '#22D3EE',
          violet: '#A78BFA',
          amber: '#F5B868',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.035) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(110,123,255,0.18), transparent)',
      },
      backgroundSize: {
        grid: '44px 44px',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(110,123,255,0.15), 0 8px 40px -8px rgba(110,123,255,0.25)',
        'glow-cyan': '0 0 0 1px rgba(34,211,238,0.15), 0 8px 40px -8px rgba(34,211,238,0.25)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 60px -20px rgba(0,0,0,0.55)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        'float-slow': 'float 14s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3.5s ease-in-out infinite',
        blink: 'blink 1.1s step-end infinite',
        marquee: 'marquee 28s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-22px) translateX(10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.45 },
          '50%': { opacity: 0.9 },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}

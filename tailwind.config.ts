import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ada: {
          ivory: 'var(--ada-ivory)',
          'deep-navy': 'var(--ada-deep-navy)',
          'sea-mist': 'var(--ada-sea-mist)',
          pine: 'var(--ada-pine)',
          brass: 'var(--ada-brass)',
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'Noe Display', 'Canela', 'serif'],
        body: ['Inter', 'Source Sans 3', 'system-ui', 'sans-serif'],
        arabic: ['IBM Plex Sans Arabic', 'Tajawal', 'sans-serif'],
      },
      fontSize: {
        'h1-mobile': ['1.75rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h1-desktop': ['3.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h2-mobile': ['1.375rem', { lineHeight: '1.3', letterSpacing: '-0.005em' }],
        'h2-desktop': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.005em' }],
        'lead-mobile': ['1.125rem', { lineHeight: '1.6' }],
        'lead-desktop': ['1.375rem', { lineHeight: '1.6' }],
        'body-mobile': ['1rem', { lineHeight: '1.6' }],
        'body-desktop': ['1.125rem', { lineHeight: '1.6' }],
      },
      animation: {
        'fade-up': 'fadeUp 180ms cubic-bezier(0.2, 0, 0, 1)',
        'fade-in': 'fadeIn 240ms cubic-bezier(0.2, 0, 0, 1)',
        'swipe': 'swipe 280ms cubic-bezier(0.2, 0, 0, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        swipe: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        }
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'container': '1200px',
      },
      boxShadow: {
        'soft': 'var(--shadow-soft)',
        'crisp': 'var(--shadow-crisp)',
        'hover': 'var(--shadow-hover)',
      },
      borderRadius: {
        'pill': '14px',
      }
    },
  },
  plugins: [],
};
export default config;

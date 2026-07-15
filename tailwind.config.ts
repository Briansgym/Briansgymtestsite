import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1e5a99',
          light: '#2c79bf',
          dark: '#143d6b',
        },
        navy: {
          DEFAULT: '#070f1d',
          light: '#0b1a30',
          medium: '#102240',
          surface: '#0c1424',
        },
        accent: {
          DEFAULT: '#e63946',
          dark: '#c02734',
        },
        success: '#10b981',
        warning: '#f59e0b',
      },
      fontFamily: {
        heading: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        body: ['var(--font-pt-sans)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(30, 90, 153, 0.35)',
        'glow-accent': '0 10px 40px rgba(230, 57, 70, 0.35)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.7s ease forwards',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;

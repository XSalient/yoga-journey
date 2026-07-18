import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: { 500: '#173F35', 600: '#0f2822' },
        terra: { 500: '#B7684D', 600: '#9f5840' },
        gold: { 500: '#C6A15B' },
        bg: { primary: '#F7F3EC', secondary: '#EDE4D7' },
        text: { primary: '#202522', muted: '#626A64' },
        white: '#FFFFFF',
        success: '#2F7D5A',
        error: '#B42318',
        border: '#D4CCBE',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        display: ['56px', { lineHeight: '1.1' }],
        h1: ['42px', { lineHeight: '1.2' }],
        h2: ['32px', { lineHeight: '1.25' }],
        h3: ['20px', { lineHeight: '1.3' }],
        body: ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        eyebrow: ['12px', { lineHeight: '1' }],
      },
      spacing: {
        xs: '8px',
        sm: '12px',
        md: '16px',
        lg: '24px',
        xl: '32px',
        '2xl': '48px',
        '3xl': '64px',
        '4xl': '80px',
      },
      borderRadius: { sm: '4px', md: '8px', lg: '12px' },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
        md: '0 4px 8px rgba(0, 0, 0, 0.08)',
        lg: '0 8px 16px rgba(0, 0, 0, 0.1)',
        xl: '0 12px 24px rgba(0, 0, 0, 0.12)',
      },
      maxWidth: { container: '1280px' },
    },
  },
  plugins: [],
};

export default config;

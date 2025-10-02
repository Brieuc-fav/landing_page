import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#b8860b',
        secondary: '#5b3b29',
        accent: '#f3e6c5',
        surface: '#fdf8ef',
        'text-primary': '#2c1a0b',
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 20px 45px -20px rgba(91, 59, 41, 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;

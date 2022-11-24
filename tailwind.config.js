// default tw config
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{jsx,js,tsx,ts,html}'],
  darkMode: 'media',
  theme: {
    container: {
      center: true,
      padding: '24px',
      screens: {
        sm: '40rem',
      },
    },
    extend: {
      colors: {
        page: {
          primary: 'var(--page-primary)',
          secondary: 'var(--page-secondary)',
        },
        fg: {
          primary: 'var(--fg-primary)',
          secondary: 'var(--fg-secondary)',
          accent: 'var(--fg-accent)',
          'accent-hover': 'var(--fg-accent-hover)',
          'accent-boldest': 'var(--fg-accent-boldest)',
          'accent-weakest': 'var(--fg-accent-weakest)',
        },

        text: {
          50: 'rgb(227, 228, 232)',
        },
        purple: {
          25: '#f0f0ff',
          50: '#E6E6FF',
          100: '#C4C6FF',
          200: '#A2A5FC',
          300: '#8888FC',
          400: '#7069FA',
          500: '#5D55FA',
          600: '#4D3DF7',
          700: '#3525E6',
          800: '#1D0EBE',
          900: '#0C008C',
        },

        teal: {
          50: '#EFFCF6',
          100: '#C6F7E2',
          200: '#8EEDC7',
          300: '#65D6AD',
          400: '#3EBD93',
          500: '#27AB83',
          600: '#199473',
          700: '#147D64',
          800: '#0C6B58',
          900: '#014D40',
        },
        gray: colors.stone,
      },
      boxShadow: {
        float: '0 4px 14px 0 rgba(60,38,110,0.13)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

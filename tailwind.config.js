module.exports = {
  content: ['./src/**/*.{jsx,js,tsx,ts,html}'],
  theme: {
    container: {
      center: true,
    },
    customForms: (theme) => ({
      default: {
        'input, textarea, multiselect': {
          // backgroundColor: '#F0F4F8',
          boxShadow: theme('boxShadow.default'),
          // border: 'none',
          borderColor: theme('colors.gray.100'),
        },
      },
      dark: {
        'input, textarea, multiselect': {
          backgroundColor: theme('colors.gray.800'),
          boxShadow: theme('boxShadow.default'),
          borderColor: theme('colors.gray.700'),
          '&:focus': {
            // borderColor: theme('colors.purple.500'),
            // boxShadow: `0 0 0 2px ${theme('colors.puprle.400')}`,
          },
        },
      },
    }),
    extend: {
      screens: {
        light: { raw: '(prefers-color-scheme: light)' },
        dark: { raw: '(prefers-color-scheme: dark)' },
      },
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
        gray: {
          25: '#f8fafc',
          50: '#F0F4F8',
          100: '#D9E2EC',
          200: '#BCCCDC',
          300: '#9FB3C8',
          400: '#829AB1',
          500: '#627D98',
          600: '#486581',
          700: '#334E68',
          800: '#243B53',
          900: '#102A43',
        },
      },
      boxShadow: {
        float: '0 4px 14px 0 rgba(60,38,110,0.13)',
      },
    },
  },
  variants: {
    shadow: ['active'],
    backgroundColor: ['hover', 'focus', 'responsive', 'active', 'disabled'],
    border: ['responsive'],
  },
  plugins: [
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/typography'),
  ],
}

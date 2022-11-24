module.exports = {
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  rules: {
    'react/no-unescaped-entities': 'off',
    'react/self-closing-comp': [
      'error',
      {
        component: true,
        html: true,
      },
    ],
  },
}

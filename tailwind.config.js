/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './config/*.json', 
    './layout/*.liquid', 
    './assets/*.liquid', 
    './sections/*.liquid', 
    './snippets/*.liquid', 
    './templates/*.liquid', 
    './templates/*.json', 
    './templates/customers/*.liquid', 
    './templates/customers/*.json',
  ],
  theme: {
    screens: {
      'ms': '320px',
      'mm': '480px',
      'ml': '568px',
      'ts': '768px',
      'md': '768px',
      'tl': '868px',
      'ds': '1024px',
      'lg': '1024px',
      'dm': '1200px',
      'xl': '1200px',
      'dl': '1440px',
    },
    extend: {
      colors: {
        clifford: '#da373d',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
    colors: {
      primary : '#06b6d4',
      text: '#1f2937',
      'text-white' : '#fafafa',
      grey: '#e5e7eb'
    },
    fontFamily: {
      sans: ['Roboto Condensed']
    }
  },
  plugins: [],
}


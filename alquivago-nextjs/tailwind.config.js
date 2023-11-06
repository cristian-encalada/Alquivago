/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      height: {
        'medio' : '50vh'
      },
      colors: {
        azul: {
          50: '#f5f6fa',
          100: '#ebedf3',
          200: '#d2d8e5',
          300: '#abb8ce',
          400: '#7e91b2',
          500: '#5e7499',
          600: '#4a5c80',
          700: '#3c4a68',
          800: '#354057',
          900: '#30394a',
          950: '#202431',
        },
        dorado: {
          50: '#f9f8f1',
          100: '#efead6',
          200: '#ddd3aa',
          300: '#cdbc82',
          400: '#bfa660',
          500: '#b48e4c',
          600: '#9e7441',
          700: '#845a39',
          800: '#6d4933',
          900: '#5b3d2c',
          950: '#332015',
        },
      },
    },
  },

  plugins: [],
}

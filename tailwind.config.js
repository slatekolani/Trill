/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.tsx',
    './resources/**/*.ts',
    './resources/**/*.jsx',
    './resources/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50:  '#fbfaf3',
          100: '#f3efd9',
          200: '#e4ddb3',
          300: '#d0c98f',
          400: '#d09868',
          500: '#989868',
          600: '#7f7f56',
          700: '#666642',
          800: '#4f4f35',
          900: '#3c3c2a',
        },
        navy: {
          50:  '#fbf4f4',
          100: '#efdada',
          200: '#ddb6b6',
          300: '#c88b8b',
          400: '#a85d5d',
          500: '#844040',
          600: '#683030',
          700: '#572929',
          800: '#452222',
          900: '#351c1c',
          950: '#241313',
        },
      },
      fontFamily: {
        serif: ['"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans:  ['"Poppins"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

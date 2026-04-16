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
          50:  '#fdf9ec',
          100: '#faf0c9',
          200: '#f4dd8e',
          300: '#edc853',
          400: '#e8b82a',
          500: '#d9a216',
          600: '#b87d10',
          700: '#8e5b10',
          800: '#744914',
          900: '#623d15',
        },
        navy: {
          50:  '#f0f3f9',
          100: '#dce3f0',
          200: '#c1cce4',
          300: '#97acd3',
          400: '#6684bc',
          500: '#4564a5',
          600: '#334f8a',
          700: '#2b3f71',
          800: '#27365f',
          900: '#1a2340',
          950: '#0f1628',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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

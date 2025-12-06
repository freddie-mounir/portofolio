/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./dist/**/*.html','./index.html'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/container-queries')],
}


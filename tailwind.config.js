/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./dist/**/*.html'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/container-queries')],
}


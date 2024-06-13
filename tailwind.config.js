/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tungsten: ['"Tungsten Bold"', 'sans-serif'],
        rubik: ['"Rubik"', 'sans-serif'],
      },
      rotate: {
        '124': '124deg'
      }
    },
  },
  plugins: [],
}
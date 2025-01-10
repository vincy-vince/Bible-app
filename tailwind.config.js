/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./client/**/*.html"],
  theme: {
    extend: {
      screens: { 'sm': { 'max': '640px' } },
    },
  },
  plugins: [],
}



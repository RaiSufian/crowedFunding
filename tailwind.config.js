/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'shadow1': 'rgb(0, 0, 0) 0px 6px 13px -10px',
      }
    },
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
    },
  },
  plugins: [],
}

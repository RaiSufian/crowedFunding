/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'shadow1': 'rgb(0, 0, 0) 0px 6px 13px -10px',
      },
      animation: {
        'menu_ani': 'menu 0.3s linear',
      },
      keyframes: {
        menu: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0%)' },
        }
      }
    },
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
    },

  },
  plugins: [],
}

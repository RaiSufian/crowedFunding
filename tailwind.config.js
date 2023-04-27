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
      },
      animation: {
        'dropdown': 'wiggle 0.3s ease-out',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'translateY(10px)' },
          '100%': { transform: 'translate(0px)' },
        }
      }
    },
    fontFamily: {
      'mont': ['Montserrat', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
      'title': ['Bruno Ace', 'cursive'],
    },
  },
  plugins: [require("tw-elements/dist/plugin")]
}

/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss'

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      colors: {
        bground: "#313030",
        primary: "#222",
        placeholder: "rgba(255, 255, 255, 0.17)",
        icob: "#454DFD",
        blueviolet: {
          "100": "#454dfd",
          "200": "rgba(68, 46, 204, 0.7)",
          "300": "rgba(69, 77, 253, 0.55)",
        },
        darkslateblue: "#16214d",
        midnightblue: "#04063e",
        gray: {
          "100": "#232536",
          "200": "#22002b",
          "300": "#01032b",
          "400": "#08020f",
          "500": "rgba(255, 255, 255, 0.7)",
          "600": "rgba(255, 255, 255, 0.3)",
        },
      },
      fontFamily: {
        "MuseoModerno": 'MuseoModerno',
        "DMSans": "DM Sans",
        inter: ["Inter", "sans-serif"],
        "roboto-flex": "'Roboto Flex'",
        "roboto-mono": "Roboto Mono",
      },
      fontSize: {
        "2xl": "21px",
        lgi: "19px",
        base: "16px",
        xl: "20px",
        "12xl": "31px",
        lg: "18px",
        "5xl": "24px",
        mid: "17px",
        mini: "15px",
      },
    },

  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          /* IE and Edge */
          '-ms-overflow-style': 'none',

          /* Firefox */
          'scrollbar-width': 'none',

          /* Safari and Chrome */
          '&::-webkit-scrollbar': {
            display: 'none'
          }
        }
      }
      )
    })
  ],
}

const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
      },
      colors: {
        whitesmoke: "#E0E0E0",
        bg: "#1C1E2A",
      },
      keyframes: {
        titleGradient: {
          "0%": {
            background: "linear-gradient(90deg, #EB3349 0%, #F48343 100%)",
            "background-position-x": "-1000px",
            "background-position-y": "-1000px",
            "background-clip": "text",
            "background-size": "2600px 2000px",
          },
          "50%": {
            background: "linear-gradient(90deg, #EB3349 0%, #F48343 100%)",
            "background-position-x": "0px",
            "background-position-y": "0px",
            "background-clip": "text",
            "background-size": "2600px 2000px",
          },
          "100%": {
            background: "linear-gradient(90deg, #EB3349 0%, #F48343 100%)",
            "background-position-x": "-1000px",
            "background-position-y": "-1000px",
            "background-clip": "text",
            "background-size": "2600px 2000px",
          },
        },
      },
      animation: {
        titleGradient: "titleGradient 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

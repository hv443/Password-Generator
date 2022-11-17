/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#24232b",
        secondary: "#d1cfd7",
        active: "#a5ffaf",
        off: "#676571",
        dark: "#101014",
        state1: "rgb(232, 50, 50)",
        state1: "#f7ce72",
        state3: "rgb(72, 204, 72)",
      },
      // keyframes: {
      //   fade: {
      //     '0%': {
      //       opacity: "1"
      //     },
      //     '100%': {
      //       opacity: "0"
      //     },
      //   }
      // },
      // animation: {
      //   fade: 'fade 1s ease-in-out 1',
      // },

    },
  },
  plugins: [],
}
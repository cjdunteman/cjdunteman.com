/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      // xs: "540px",
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      // typography: ({ theme }) => ({
      //   DEFAULT: {
      //     css: {
      //       color: theme("colors.black"),
      //       a: {
      //         color: theme("colors.purple"),
      //       },
      //       "h1, h2": {
      //         color: theme("colors.black"),
      //       },
      //     },
      //   },
      //   dark: {
      //     css: {
      //       color: theme("colors.white"),
      //       "h1, h2": {
      //         color: theme("colors.white"),
      //       },
      //     },
      //   },
      // }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
  // variants: {
  //   typography: ["dark"],
  // },
  darkMode: "class",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "540px",
    },
    extend: {
      colors: {
        white: "#F4F5F8",
        black: "#000000",
        purple: "#5E6AD2",
        gray: "#222326",
        lightGray: "#a8a5a1",
        dark: "#232120",
        darkGray: "#666666",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.black"),
            a: {
              color: theme("colors.purple"),
            },
            "h1, h2": {
              color: theme("colors.black"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.white"),
            "h1, h2": {
              color: theme("colors.white"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
  // variants: {
  //   typography: ["dark"],
  // },
  darkMode: "class",
};

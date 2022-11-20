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
    colors: {
      white: "#ffffff",
      black: "#000000",
      // light mode specific
      gray: "#696969",
      // dark mode specific
      lightGray: "#a8a5a1",
      dark: "#232120",
      // undetermined
      darkGray: "#666666",
      blue: "#0070f3",
      lightBlue: "#839fff",
    },
    // fontFamily: {
    //   sans: "Inter",
    //   mono: "SFMono-Regular",
    // },
    // fontSizes: {
    //   sm: ["14px", { lineHeight: "18px", letterSpacing: "-0.03em" }],
    //   md: ["16px", { lineHeight: "24px", letterSpacing: "-.03em" }],
    //   lg: ["18px", { lineHeight: "28px", letterSpacing: "-.03em" }],
    //   xl: ["24px", { lineHeight: "36px", letterSpacing: "-0.03em" }],
    //   "2xl": ["36px", { lineHeight: "48px", letterSpacing: "-0.032em" }],
    //   "3xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.032em" }],
    //   "4xl": ["56px", { lineHeight: "64px", letterSpacing: "-0.032" }],
    // },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.black"),
            a: {
              color: theme("colors.blue"),
            },
            "h1, h2": {
              color: theme("colors.black"),
            },
            code: { color: theme("colors.lightBlue") },
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
        fontFamily: {
          sans: ["var(--font-inter"],
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

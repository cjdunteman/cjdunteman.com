/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "540px",
    },
    colors: {
      white: "#fcfcfc",
      darkGray: "#666666",
      gray: "#888888",
      lightGray: "#a8a5a1",
      dark: "#232120",
      black: "#000000",
      purple: "#a130e8",
    },
    fontFamily: {
      sans: "Inter",
      mono: "SFMono-Regular",
    },
    // fontSizes: {
    //   sm: ["14px", { lineHeight: "18px", letterSpacing: "-0.03em" }],
    //   md: ["16px", { lineHeight: "24px", letterSpacing: "-.03em" }],
    //   lg: ["18px", { lineHeight: "28px", letterSpacing: "-.03em" }],
    //   xl: ["24px", { lineHeight: "36px", letterSpacing: "-0.03em" }],
    //   "2xl": ["36px", { lineHeight: "48px", letterSpacing: "-0.032em" }],
    //   "3xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.032em" }],
    //   "4xl": ["56px", { lineHeight: "64px", letterSpacing: "-0.032" }],
    // },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};

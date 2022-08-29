/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    colors: {
      white: "#FFFFFF",
      dark: "#1c0732",
      light: "#fefefe",
      purple: {
        light: "#B37FEE",
        DEFAULT: "#9e5dea",
        dark: "#7A1FE2",
      },
      green: {
        light: "#75CAAA",
        DEFAULT: "#429777",
        dark: "#214C3C",
      },
    },
    fontSizes: {
      sm: ["14px", { lineHeight: "18px", letterSpacing: "-0.03em" }],
      md: ["16px", { lineHeight: "24px", letterSpacing: "-.03em" }],
      lg: ["18px", { lineHeight: "28px", letterSpacing: "-.03em" }],
      xl: ["24px", { lineHeight: "36px", letterSpacing: "-0.03em" }],
      "2xl": ["36px", { lineHeight: "48px", letterSpacing: "-0.032em" }],
      "3xl": ["48px", { lineHeight: "56px", letterSpacing: "-0.032em" }],
      "4xl": ["56px", { lineHeight: "64px", letterSpacing: "-0.032" }],
    },
    extend: {},
  },
  plugins: [],
};

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
    colors: {
      white: "#F4F5F8",
      black: "#000000",
      gray: "hsl(0, 0%, 26.7%)",
      darkGray: "hsl(246, 6%, 54%)",
      // purple: "hsl(234, 56.3%, 59.6%)",
      purple: {
        // DEFAULT: "hsl(266, 56%, 38%)",
        // 100: "hsl(266, 33%, 11%)",
        // 200: "hsl(266, 56%, 18%)",
        // 300: "hsl(266, 56%, 27%)",
        // 400: "hsl(266, 56%, 38%)",
        // 500: "hsl(266, 56%, 49%)",
        // 600: "hsl(266, 56%, 60%)",
        // 700: "hsl(266, 56%, 69%)",
        // 800: "hsl(266, 56%, 85%)",
        // 900: "hsl(266, 56%, 95%)",
        100: "hsl(261, 88%, 95%)",
        200: "hsl(261, 59%, 83%)",
        300: "hsl(261, 60%, 71%)",
        400: "hsl(261, 60%, 56%)",
        500: "hsl(261, 60%, 50%)",
        600: "hsl(261, 60%, 39%)",
        700: "hsl(265, 70%, 29%)",
        800: "hsl(266, 80%, 19%)",
        900: "hsl(266, 79%, 10%)",
      },
      blue: {
        100: "hsl(235, 100%, 96%)",
        200: "hsl(235, 93%, 89%)",
        300: "hsl(235, 94%, 83%)",
        400: "hsl(241, 88%, 69%)",
        500: "hsl(256, 83%, 52%)",
        600: "hsl(256, 82%, 39%)",
        700: "hsl(256, 82%, 30%)",
        800: "hsl(256, 82%, 17%)",
        900: "hsl(256, 82%, 11%)",
      },
      dark: "hsl(250, 24%, 9%)",
      another: "hsl(250, 24%, 93%)",
      other: "hsl(250, 24%, 12%)",
    },
    // borderWidth: {
    //   DEFAULT: "1px",
    //   0: "0",
    //   2: "2px",
    //   3: "3px",
    //   4: "4px",
    //   6: "6px",
    //   8: "8px",
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

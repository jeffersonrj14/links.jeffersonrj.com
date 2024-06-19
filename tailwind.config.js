const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss/types').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/styles/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Light colors
        "primary-light": "#FFFFFF", //Don't Change
        "secondary-light": "#DFE6E9",
        "ternary-light": "#f6f7f8",

        // Dark colors
        "primary-dark": "#212121", //Don't Change
        "secondary-dark": "#102D44",
        "ternary-dark": "#1E3851",

        //Personal-color //Don't Change
        "jefferson-dark": "#212121",
        "jefferson-light": "#DFE6E9",
        "jefferson-main": "#13C4A5",
        "jefferson-maindark": "#138ba5",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "6rem",
          "2xl": "8rem",
        },
      },
    },
    listStyleType: {
      square: "square",
    },
  },
  plugins: [],
};

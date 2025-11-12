/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3faf7",
          100: "#e6f5ee",
          200: "#ccebdc",
          300: "#99d7b9",
          400: "#66c395",
          500: "#33af72",
          600: "#00984f",
          700: "#008444",
          800: "#006e38",
          900: "#005837", // dein Basis-Dunkelgrün
          950: "#003c22",
        },
        secondary: {
          50: "#f6fef0",
          100: "#edfde1",
          200: "#dbfac3",
          300: "#b7f586",
          400: "#94f149",
          500: "#71ec0c",
          600: "#5fd405",
          700: "#4ab301",
          800: "#378b00",
          900: "#295e00",
          950: "#183500",
        },
        accent: {
          50: "#fff8f0",
          100: "#ffeedb",
          200: "#ffd9b7",
          300: "#ffb471",
          400: "#ff8e2b",
          500: "#ff7a00",
          600: "#e66d00",
          700: "#bf5900",
          800: "#994600",
          900: "#713200",
          950: "#4a2200",
        },
      },
      fontFamily: {
        serif: ['"Abril Fatface"', "Georgia", "serif"],
        sans: ['"Lato"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

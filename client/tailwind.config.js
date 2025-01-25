/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whiteText: "#fff",
        darkText: "#000000",
        lightText: "#9b9b9b",
        greenText: "#1d8221",
        redText: "#E02B2B ",
        skyText: "#32BDE8",
        blue: "#2973B2",
        light_blue: "#608BC1",
        deep_blue: "#133E87",
        sea_blue: "#C6E7FF",
      },
      flex: {
        full: "0 0 100%",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};

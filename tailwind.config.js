/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        ricetteHero: "url('/img/ricetta_peperone.webp')",
        sanCusumanoHero: "url('/imgSanCusumano/familyPattern.webp')",
      },
      colors: {
        yellowLight: "#f8efd3",
        yellowLightOpac: "rgba(248, 239, 211, 0.8)",
        yellowDark: "#F5C23C",
        red: "#DD332D",
        black: "#000000",
        bolliniPaginazione: "rgba(0, 0, 0, 0.1)",
        trasparent: "#00000000",
      },
    },
  },
  plugins: [],
};

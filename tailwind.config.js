/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        //paleta de cores do projeto
        background: "#FFFFFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        rouge: ["Rouge Script", "cursive"],
      },
      backgroundImage: {
        "granito-pitaia": "url('/src/assets/GRANITO_BRANCO_PITAYA.jpg')",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fade-in 1s ease-out",
      },
    },
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        "html, body": {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
        },
      });
    },
    //require("@tailwindcss/forms"),
  ],
};

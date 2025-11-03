/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        // 🎞️ Movimento contínuo para cobrir 100% do conteúdo
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        // velocidade ajustável
        marquee: "marquee 40s linear infinite",
      },
      colors: {
        brand: {
          dark: "#0f6677",
          teal: "#0e8a8a",
          aqua: "#2cd4c5",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 10px 25px -10px rgba(0,0,0,.15)",
      },
      borderRadius: {
        xl2: "1rem",
      },
      maxWidth: {
        container: "1120px",
      },
    },
  },
  plugins: [],
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        customRed: "var(--brand-primary)",
        customGold: "#cfa63a",
        customDark: "#1a1a1a",
        customLightGray: "#f8f8f8",
      },

      fontFamily: {
        sans: [
          "Montserrat",
          "sans-serif",
        ],

        serif: [
          "Cormorant Garamond",
          "serif",
        ],
      },

      translate: {
        34: "8.5rem",
        46: "11.5rem",
        64: "16rem",
      },
    },
  },

  plugins: [],
};
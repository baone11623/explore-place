// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      colors: {
        primary: "#10B981",
        secondary: "#FCD34D",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};

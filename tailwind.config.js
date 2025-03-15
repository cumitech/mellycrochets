module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  important: true,
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      "colors": {
        cyan: "#00c4cc",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

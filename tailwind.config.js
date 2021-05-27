module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: "#00C4CC",
        "cyan-light": "#00EDF5",
        "cyan-dark": "#009EA3",
        cerise: "#F61067",
        "cerise-light": "##F83A83",
        "cerise-dark": "#D90858",
        snow: "#FCF7F8",
        // "snow-light" does not exist
        "snow-dark": "#F4E1E5",
        coral: "#5B616A",
        "coral-light": "#717884",
        "coral-dark": "#4B5058",
        denim: "#275DAD",
        "denim-light": "#3775D2",
        "denim-dark": "#225096",
      },
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};

//? CooLors theme :https://coolors.co/00c4cc-fcf7f8-275dad-5b616a-f61067

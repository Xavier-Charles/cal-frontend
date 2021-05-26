module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: "#00C4CC",
        cerise: "#F61067",
        "cerise-dark": "#D90858",
        snow: "#FCF7F8",
        coral: "#5B616A",
        denim: "#275DAD",
      },
    },
  },
  
  variants: {
    extend: {},
  },
  plugins: [],
};

//? CooLors theme :https://coolors.co/00c4cc-fcf7f8-275dad-5b616a-f61067

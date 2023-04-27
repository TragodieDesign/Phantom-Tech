const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {

  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: '#62D920',
      },
      container: {
        center: true,
        padding: {
          
          default: "1rem",
          md: "2rem",
        },
      },
    },
  },
};

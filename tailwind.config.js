const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    code: "layers",
    content: ["./public/**/*.html", "./src/**/*.vue"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald,
        gray: colors.coolGray,
      },
    },
  },
  variants: {
    appearance: ['hover', 'focus'],
  },
  plugins: [],
};

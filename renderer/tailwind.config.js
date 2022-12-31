const colors = require('tailwindcss/colors');
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT( {
  content: [
    './renderer/pages/**/*.{js,ts,jsx,tsx}',
    './renderer/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      // use colors only specified
      white: colors.white,
      gray: colors.gray,
      blue: colors.blue,
      pink: colors.pink
    },
    extend: {},
  },
  plugins: [],
});

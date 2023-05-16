/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/build/**/*.{html,js}"],
  theme: {
    extend: {
      backdropBlur: {
        xs: "60px",
      },
    },
  },
  plugins: [],
};

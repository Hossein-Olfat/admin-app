/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "640px" },
        xss: { max: "540px" },
      },
      gridTemplateColumns: {
        autofit: "repeat(auto-fit,minmax(240px,1fr))",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("table-tr", "& tr");
      addVariant("table-td", "& td");
      addVariant("table-th", "& th");
      addVariant("table-th-div", "& .th-div");
      addVariant("all-childeren", "& *");
      addVariant("users-name", "& .user-name");
    }),
  ],
};

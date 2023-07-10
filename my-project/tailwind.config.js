/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: { max: "590px" },
        xss: { max: "490px" },
      },
    },
  },
  plugins: [],
};

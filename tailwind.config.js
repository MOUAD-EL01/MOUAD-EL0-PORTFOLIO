/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#66FCF1",
        headingColor: "#C5C6C7",
        smallTextColor: "#193256",
      },
    },
  },
  plugins: [],
};

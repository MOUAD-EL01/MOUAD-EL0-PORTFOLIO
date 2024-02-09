/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#202833",
        headingColor: "#1B385E",
        smallTextColor: "#193256",
      },
    },
  },
  plugins: [],
};

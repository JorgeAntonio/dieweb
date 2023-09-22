/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3ce234",

          secondary: "#2bc4a0",

          accent: "#15a883",

          neutral: "#34293d",

          "base-100": "#ffffff",

          info: "#7fade6",

          success: "#35e3d5",

          warning: "#dba20f",

          error: "#f04d47",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

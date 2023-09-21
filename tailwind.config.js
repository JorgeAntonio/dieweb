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
          primary: "#07af0c",

          secondary: "#f4adbe",

          accent: "#e4a4fc",

          neutral: "#222a3a",

          "base-100": "#e4e9f1",

          info: "#91c3f7",

          success: "#3de1b2",

          warning: "#f8bc68",

          error: "#e41b4a",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

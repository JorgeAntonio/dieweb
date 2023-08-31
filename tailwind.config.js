/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#8734aa",

          secondary: "#fc551e",

          accent: "#a5222f",

          neutral: "#232028",

          "base-100": "#f0f0f5",

          info: "#5dceea",

          success: "#5cd6c8",

          warning: "#fcc14a",

          error: "#eb1920",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

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

                    "primary": "#1e87c9",

                    "secondary": "#73cadd",

                    "accent": "#ed9690",

                    "neutral": "#1e1820",

                    "base-100": "#f0e0f0",

                    "info": "#7ec1f1",

                    "success": "#0f6157",

                    "warning": "#8e5c0b",

                    "error": "#f54d52",
                },
            },
        ],
    },
    plugins: [require("daisyui")],
};

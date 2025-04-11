/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "slide-in-right": "slideInRight 1s ease-in-out",
        "slide-in-left": "slideInLeft 1s ease-in-out",
        "slide-in-up": "slideInUp 1s ease-in-out",
        "zoom-in": "zoomIn 1s ease-in-out",
        visible: "fadeIn 1s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideInUp: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        zoomIn: {
          "0%": { transform: "scale(0.5)", opacity: 0 },
          "100%": { transform: "scale(1)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};

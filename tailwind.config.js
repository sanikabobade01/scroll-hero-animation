/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#0a1020",
        ice: "#e8edf4",
        cobalt: "#3b6cff",
        amber: "#ffb347",
      },
      fontFamily: {
        display: ['"Segoe UI"', "system-ui", "-apple-system", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

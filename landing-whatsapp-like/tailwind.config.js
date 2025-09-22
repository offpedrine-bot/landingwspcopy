/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        wsp: "#25D366",
        wspDark: "#1aaa4f",
        lightGreen: "#e8f8ee"
      },
      boxShadow: {
        soft: "0 8px 26px rgba(37,211,102,.25)"
      },
      borderRadius: {
        xl2: "1.25rem"
      },
      fontFamily: {
        inter: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"]
      }
    },
  },
  plugins: [],
};
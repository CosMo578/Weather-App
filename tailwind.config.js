/** @type {import('tailwindcss').Config} */
export default {
  mode: "JIT",
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-ele": "#2b3945",
        "dark-bg": "#202c37",
        "light-text": "#111517",
        "light-input": "#111517",
        "light-bg": "#111517",
      },
    },
  },
  plugins: [],
};


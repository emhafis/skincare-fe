/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#C97C91",
        "background-light": "#FFFFFF",
        "background-dark": "#1A1A1A",
        "content-light": "#1A1A1A",
        "content-dark": "#F2F2F2",
        "subtle-light": "#F5F5F5",
        "subtle-dark": "#262626",
        "accent-light": "#E5E5E5",
        "accent-dark": "#333333",
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
}


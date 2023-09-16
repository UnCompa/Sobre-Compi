/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pastel': '#fff',
        'pastel-2': '#b0f2c2',
        'pastel-3': '#b0bff2',
        'pastel-4': '#f2b0e0',
        'pastel-5': '#f2e3b0',
      },
      fontFamily: {
        'Monte': ['Montserrat', "sans-serif"],
        'Poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
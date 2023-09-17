/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      gridTemplateRows: {
        'layout': '96px 1fr 100%'
      },
      colors: {
        'pastel': '#eaffc2',
        'pastel-2': '#a3ffac',
        'pastel-3': '#cce5ff',
        'pastel-4': '#ffca99',
        'pastel-5': '#ff8097',
      },
      fontFamily: {
        'Monte': ['Montserrat', "sans-serif"],
        'Poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
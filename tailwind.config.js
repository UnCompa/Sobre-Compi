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
      backgroundImage: {
        "fondo": "url('/src/Imagenes/helado.jpg')",
      },
      gridTemplateRows: {
        'layout': '96px 1fr 100%'
      },
      colors: {
        'pastel-1': '#64c27b', /*Verde*/
        'pastel-2': '#f7bfd8', /*Rosado*/
        'pastel-3': '#fbd5e5', /*Rosado*/
        'pastel-4': '#9bfab0', /*Verde*/
        'pastel-5': '#c5ff7a', /*Verde*/
      },
      fontFamily: {
        'Monte': ['Montserrat', "sans-serif"],
        'Poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [],
}
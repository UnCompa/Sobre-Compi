/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";

export default {
  darkMode: "class",
  content: [
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        fondo: "url('/src/Imagenes/helado.jpg')",
      },
      gridTemplateRows: {
        layout: "96px 1fr 100%",
      },
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        "pastel-1": "#64c27b" /*Verde*/,
        "pastel-2": "#f7bfd8" /*Rosado*/,
        "pastel-3": "#fbd5e5" /*Rosado*/,
        "pastel-4": "#9bfab0" /*Verde*/,
        "pastel-5": "#c5ff7a" /*Verde*/,
      },
      fontFamily: {
        Monte: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [
    nextui(),
  ],
};

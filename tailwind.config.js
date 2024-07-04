/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Outfit"],
        secondary: ["DM Sans"],

      },
      colors: {
        "primary": "rgb(45 212 191)",
        "primary2": "#e2e4e7",
        "secondary": "#E5F4F0",
        "secondary2": "#ECF0F2",
        "dark": "#182d31",
        "heading": "#05264E",
        "Description": "#45474e",
        "Description2": "#abacab",
        "heading2": '#CBCCD5',
        "dp": "#9CA3AF",
        "db": "#E5E7EB",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
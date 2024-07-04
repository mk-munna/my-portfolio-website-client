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
        "primary": "#4286F4",
        "primary2": "#e2e4e7",
        "secondary": "#E5F4F0",
        "secondary2": "#ECF0F2",
        "dark": "#182d31",
        "heading": "#05264E",
        "Description": "#4F5E64",
        "Description2": "#abacab",
        "heading2": '#CBCCD5',
        "dp": "#9CA3AF",
        "db": "#E5E7EB",
      }
    },
  },
  plugins: [],
}
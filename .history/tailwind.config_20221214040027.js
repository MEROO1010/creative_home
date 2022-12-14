/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      fontFamily:{
        "verdana":['../assets/fonts/verdana.ttf'],
        "schuyler":['../assets/fonts/Schuyler.ttf']
      }
    },
  },
  plugins: [],
}

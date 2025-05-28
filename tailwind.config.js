/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        tt: ['"TT Travels"', 'sans-serif'], // custom class: font-tt
      },
    },
  },
  plugins: [require('daisyui')]
}


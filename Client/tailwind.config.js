/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs':{'max': '600px'},
        'xss':{'max': '350px'}
      }
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkBlue": "#131e57",
        "lightBlue": "#245ec1",

      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manope: ['Manope', 'sans-serif'],
      },
      colors: {
        "darkBlue": "#131e57",
        "lightBlue": "#245ec1",
        "darkText": "#19243b",
        "grayText": "#475062",
        "hoverText": "#245ec1"

      },
      backgroundImage: {
        'zapier': "url('./src/assets/images/integration/Group39990.png')",
      }
    },
  },
  plugins: [],
}


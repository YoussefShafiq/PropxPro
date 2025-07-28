/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem', // or your preferred padding
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
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
        'zapier': "url('/Group39990.png')",
        'demo': "url('/Frame39787.png')",
        'helpcenter': "url('/herosection.png')",
      }
    },
  },
  plugins: [],
}


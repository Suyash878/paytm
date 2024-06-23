/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:
      {
        '112':'28rem',
        '128': '32rem',
        '144': '36rem' 
      },
      height:
      {
        '128': '32rem',
        '144': '36rem' ,
        '160': '40rem',
        '176': '44rem'
      },
      fontFamily:
      {
        roboto:['Roboto','sans-serif'],
        Poppins:['Poppins','sans-serif']
      }
    },
  },
  plugins: [],
}
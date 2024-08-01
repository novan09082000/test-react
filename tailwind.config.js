/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'manrope': ['Manrope'],
    },
    extend: {
      colors: {
        'primary': '#00B69B',
        'secondary': '#007B70'
      },
    },
  },
  plugins: [],
}


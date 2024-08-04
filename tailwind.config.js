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
        'secondary': '#007B70',
        'content' : '#EFF3FD'
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.25, 0.1, 0.25, 1)' // Ganti dengan cubic-bezier yang diinginkan
      },
      transitionProperty: {
        'margin': 'margin'
      },
      transitionDuration: {
        '500': '500ms'
      }
    },
  },
  plugins: [],
}


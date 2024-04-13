/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundColor: {
        'new-100': 'rgb(161, 121, 89)',
      },
    },
  },
  plugins: [],
}

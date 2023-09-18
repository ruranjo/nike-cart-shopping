/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xl': {'max': '1200px'},
      'lg': {'max': '980px'},
      'md': {'max': '760px'},
      'sm': {'max': '560px'},
      'xsm': {'max': '360px'},
    }
  },
  plugins: [],
}
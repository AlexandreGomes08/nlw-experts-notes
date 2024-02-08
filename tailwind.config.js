/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}


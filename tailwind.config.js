/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        coveredByYourGrace: ["Covered By Your Grace", "sans-serif"],
        manrope: ["Manrope", "sans-serif"]
      },
    },
  },
  plugins: [],
}


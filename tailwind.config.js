/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Set Lexend as Default font
        sans: ['Lexend', 'sans-serif'],
        // Add custom fonts : Outfit
        outfit: ['Outfit', 'sans-serif']
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#1e1e1e',
        light: '#f9f9f9',
      },
    },
  },
  plugins: [],
}
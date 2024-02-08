/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        "15": "15px"
      },
      spacing: {
        "82": "20.5rem",
        "83": "20.75rem"
      },
      backgroundImage: {
        'city': "url('/city.svg')"
      }
    },
  },
  plugins: [],
}


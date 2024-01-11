/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'header-bg-color': '#1c1e21'
      }
    },
  },
  plugins: [],
};

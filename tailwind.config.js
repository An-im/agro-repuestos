/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: "#2B2F36",
        technicalGreen: "#15803d",
      },
      maxWidth: {
        layout: "1200px",
      },
    },
  },
  plugins: [],
}

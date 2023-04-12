/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        header_img: "url('./src/assets/All Images/Vector-1.png')",
      },
    },
  },
  plugins: [],
};

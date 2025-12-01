/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          50: "#F8E8EE",
          100: "#FDCEDF",
          200: "#F2BED1",
          400: "#F8AEBF",
          500: "#F07B91",
        },
        gray: {
          700: "#444",
          800: "#333",
          900: "#111",
        },
      },
      fontFamily: {
        pretendard: ["Pretendard Variable", "Noto Sans KR", "sans-serif"],
      },
    },
  },
  plugins: [],
};

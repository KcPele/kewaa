/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "primary-black": "#1E1E1E",
        faq: "rgba(151, 71, 255, 0.15)",
      },
      borderColor: {
        faq: "rgba(151, 71, 255, 0.15)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "src/pages/**/*.{js,ts,jsx,tsx}",
    "src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#075985",
        secondary: "#0F4C75",
      },
      textColor: {
        primary: "#075985",
        secondary: "#6b7280",
      },
      fontFamily: {
        monserrat: ["Montserrat", "sans-serif"],
      },
      borderColor: {
        primary: "#075985",
        secondary: "#6b7280",
      },
      boxShadow: {
        primary: "0 0 0 3px rgba(7, 89, 133, 0.5)",
      },
    },
  },
  plugins: [],
};

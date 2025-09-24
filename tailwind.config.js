/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        "fira-code": ["FiraCode", "monospace"],
        sans: ["Poppins", "sans-serif"], // Set Poppins as default sans
      },
    },
  },
  plugins: [],
};

// tailwind.config.cjs
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ ensures all components are scanned
  ],
  // tailwind.config.js
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#2C6FA6',
        hover: '#7DB9E8',
        heading: '#1A3C59',
        sectionLight: '#FFFFFF',
        sectionAlt: '#F5F7FA',
        borderFocus: '#B5D8F5',
      },
    },
  },
},
  plugins: [],
};

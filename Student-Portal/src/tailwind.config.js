/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',  // Include all app files (main page.js here)
    './src/components/**/*.{js,ts,jsx,tsx}',  // Include all components
    './src/styles/**/*.{css}',  // Include styles
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

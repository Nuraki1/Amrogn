/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customRed: '#ED1F24',
        customLightRed: '#E1DDD2',
        customYellow: '#F3EC19',
        customCream: '#F7F7F7',
        customByellow: '#ECC500',
        customNav : '#c5aa6a'
      }
    },
  },
  plugins: [],
};
 

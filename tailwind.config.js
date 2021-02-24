module.exports = {
  purge: [],// ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        likepink: '#fdcbcb',
        likeblue: '#7a80be',
        likepurple: '#a3a8dc',
        likestrongblue: "#1862a8"
      }
    },

  },
  fontFamily: {
    "poppins": ['Poppins', "sans-serif"],
    "purple": ['Purple Purse', "cursive"],
    "quandro": ['Quando', "serif"]
  },
  variants: {
    extend: {},
  },
  plugins: [],
}


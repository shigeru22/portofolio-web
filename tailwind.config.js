module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      'heading': ['NTR', 'sans'],
      'sans': ['Montserrat', 'sans-serif']
    },
    fontSize: {
      base: ['24px', '24px']
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        144: '36rem',
        160: '42rem'
      },
      color: {
        bg: {
          DEFAULT: '#fafffc'
        }
      },
      fontSize: {
        cardhead: ['20px', '20px'],
        carddesc: ['16px', '16px'],
        base: ['24px', '28px']
      }
    },
    fontFamily: {
      'heading': ['NTR', 'sans'],
      'sans': ['Montserrat', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: []
}

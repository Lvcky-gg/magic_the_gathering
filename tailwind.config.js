module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '500px',
        md: [{ min: '668px', max: '767px' }, { min: '868px' }],
        lg: '1100px',
        xl: '1400px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}

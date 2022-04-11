module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'background': '#F9F9F9',
      'lightBlue': '#3DB0FF',
      'mezechBlue': '#272262',
      'error': '#EF4444',
      'sub': '#282C40' ,
      'audioBlue': '#081494'
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {}
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

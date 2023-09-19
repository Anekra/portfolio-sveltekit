/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#73ACCA',
        onPrimary: '#004066',
        secondary: '#A2BCCB',
        onSecondary: '#334041',
        tertiary: '#77CAA2',
        onTertiary: '#172921',
        error: '#ff5449',
        neutral: '#8f9193'
      },
      boxShadow: {
        primaria: '0 5px 0 #3A89B1',
        darkPrimaria: '0 5px 0 #002942',
        secundaria: '0 5px 0 #334041',
        terciaria: '0 5px 0 #172921',
      },
      backgroundColor: {
        primary: '#73ACCA',
        secondary: '#A2BCCB',
        tertiary: '#77CAA2',
        error: '#ff5449',
        neutral: '#8f9193',
        dark: '#191C1E'
      },
      fontFamily: {
        sans: ['Andika', 'sans-serif'],
        serif: ['Baskervville', 'serif'],
      },
    },
  },
  plugins: [],
}

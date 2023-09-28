/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#73ACCA',
        onPrimary: '#002A60',
        primaryContainer: '#162538',
        secondary: '#A2BCCB',
        onSecondary: '#334041',
        tertiary: '#77CAA2',
        onTertiary: '#172921',
        error: '#ff5449',
        neutral: '#8f9193',
        dark: '#191C1E',
        light: '#C7D9E2'
      },
      boxShadow: {
        primaria: '0 5px 0 #3A89B1',
        darkPrimaria: '0 5px 0 #001837',
        secundaria: '0 5px 0 #334041',
        terciaria: '0 5px 0 #172921',
        neonWhite: '0 0 10px #FFFFFF',
        neonBlack: '0 0 10px #000000'
      },
      backgroundImage: {
        gradient: 'linear-gradient(40deg, #214550, #0F1A19)'
      },
      fontFamily: {
        sans: ['Andika', 'sans-serif'],
        serif: ['Baskervville', 'serif'],
      }
    },
  },
  plugins: [],
}

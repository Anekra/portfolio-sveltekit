/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			screens: {
				hh: { raw: '(hover: hover)' },
				hn: { raw: '(hover: none)' },
				mobile: { max: '440px' },
				mobileMd: { max: '540px' },
				rsm: { max: '629px' }
			},
			colors: {
				primary: '#73ACCA',
				onPrimary: '#002A60',
				primaryContainer: '#162538',
				secondary: '#A2BCCB',
				onSecondary: '#5a7274',
				tertiary: '#00ccaa',
				onTertiary: '#172921',
				error: '#ff5449',
				neutral: '#8f9193',
				dark: '#191C1E',
				light: '#C7D9E2'
			},
			boxShadow: {
				primaria: '0 5px 0 #3A89B1',
				onPrimaria: '0 5px 0 #00060f',
				secundaria: '0 5px 0 #668f92',
				terciaria: '0 5px 0 #172921',
				neonWhite: '0 0 10px #FFFFFF',
				neonBlack: '0 0 10px #000000'
			},
			backgroundImage: {
				gradient: 'linear-gradient(40deg, #214550, #0F1A19)'
			},
			fontFamily: {
				sans: ['Andika', 'sans-serif'],
				serif: ['Baskervville', 'serif']
			},
			animation: {
				shake: 'shake 200ms 3'
			},
			keyframes: {
				shake: {
					'0%': { transform: 'translateX(0)' },
					'40%': { transform: 'translateX(10px)' },
					'100%': { transform: 'translateX(-10px)' }
				}
			}
		}
	},
	plugins: []
};

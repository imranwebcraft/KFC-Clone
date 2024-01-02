/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				primary: ['Poppins', 'sans-serif'],
			},
			colors: {
				yellow: '#fce000',
				offWhite: '#b8b8b8',
				// greenBg: '#72aa52',
				// greenText: '#72aa52',
			},
		},
	},
	plugins: [],
};

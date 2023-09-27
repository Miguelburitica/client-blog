/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#A1EEE8',
				secondary: '#261C3F',
				tertiary: '#4D387B',
				quaternary: '#1F4152',
				quinary: '#684F6A',
			}
		},
	},
	plugins: [],
}

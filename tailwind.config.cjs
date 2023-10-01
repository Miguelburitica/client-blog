/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				'primary': { DEFAULT: '#85B0B1', 100: '#182626', 200: '#314b4c', 300: '#497172', 400: '#619798', 500: '#85b0b1', 600: '#9ec0c1', 700: '#b6d0d0', 800: '#cee0e0', 900: '#e7efef' },
				'secondary': { DEFAULT: '#5E5E60', 100: '#131313', 200: '#252526', 300: '#383839', 400: '#4b4b4c', 500: '#5e5e60', 600: '#7d7d80', 700: '#9e9ea0', 800: '#bebebf', 900: '#dfdfdf' },
				'tertiary': { DEFAULT: '#888C85', 100: '#1b1c1b', 200: '#373935', 300: '#525550', 400: '#6e716b', 500: '#888c85', 600: '#a1a49e', 700: '#b8bbb7', 800: '#d0d1cf', 900: '#e7e8e7' },
				'quaternary': { DEFAULT: '#CD9B79', 100: '#301e12', 200: '#5f3b23', 300: '#8f5935', 400: '#bc7749', 500: '#cd9b79', 600: '#d7af94', 700: '#e1c3af', 800: '#ebd7c9', 900: '#f5ebe4' },
				'quinary': { DEFAULT: '#E3BAA7', 100: '#3c2013', 200: '#774026', 300: '#b35f39', 400: '#d08a6a', 500: '#e3baa7', 600: '#e8c7b8', 700: '#eed5ca', 800: '#f4e3db', 900: '#f9f1ed' }
			}
		},
	},
	plugins: [],
}

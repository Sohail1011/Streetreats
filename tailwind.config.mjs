/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'display': ['Poppins', 'sans-serif']
		},
		colors: {
			"beige": "#E6E8D2",
			"bittersweet_shimmer": "#B85043",
			"persian_red": "#B6473A",
			"eerie_black": "#181818",
			"gavy_gray": "#575757",
			"celadon": "#7ED4A7",
			"white": "#FFFFFF",
			"black": "#000000",
			"grey": "#808080"
		},
		extend: {},
	},
	plugins: [],
}

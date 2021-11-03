module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				"sans": ["Nunito", "sans-serif"]
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
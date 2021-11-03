module.exports = {
	purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				"sans": ["Nunito", "sans-serif"]
			},
			colors: {
				"green": {
					"vlight": "#5BBA6F",
					"light": "#3FA34D",
					DEFAULT: "#2A9134",
					"dark": "#137547",
					"vdark": "#054A29"
				}
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

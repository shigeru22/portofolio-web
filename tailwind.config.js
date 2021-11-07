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
			},
			width: {
				"75": "18.75rem",
				"100": "25rem",
				"175": "43.75rem",
				"140": "35rem",
				"240": "60rem"
			},
			height: {
				"18": "4.5rem",
				"100": "25rem",
				"105": "26.25rem",
				"120": "30rem",
				"138": "34.5rem",
				"140": "35rem"
			},
			minWidth: {
				"56": "14rem"
			},
			maxWidth: {
				"175": "43.75rem"
			},
			minHeight: {
				"56": "14rem"
			},
			maxHeight: {
				"138": "34.5rem",
				"160": "40rem"
			},
			zIndex: {
				"-10": "-10"
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

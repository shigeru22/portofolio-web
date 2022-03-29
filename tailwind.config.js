module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],
	theme: {
		colors: {
			"black": "#000000",
			"white": "#ffffff",
			"light": {
				"0": "#042a2b",
				"20": "#4d9361",
				"40": "#93ff96",
				"60": "#d0ffb7",
				"80": "#f2f5de",
				"100": "#fceff9"
			},
			"dark": {
				"0": "#030b0d",
				"20": "#092327",
				"40": "#032f36",
				"60": "#0f3b42",
				"80": "#559741",
				"100": "#99e0f2"
			}
		},
		fontFamily: {
			"sans": [ "Jost", "sans-serif" ]
		},
		extend: {
			minWidth: {
				"50": "12.5rem"
			},
			minHeight: {
				"24": "6rem"
			}
		}
	},
	plugins: []
};

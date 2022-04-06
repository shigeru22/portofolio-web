module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}"
	],
	darkMode: "media",
	theme: {
		colors: {
			"black": "#111111",
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
				"0": "#0e2a22",
				"20": "#0f2e25",
				"40": "#184d47",
				"60": "#035956",
				"80": "#00917c",
				"100": "#a5f0c5"
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

/** @type {import('tailwindcss').Config} */
module.exports = {
	important: true,
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			chillax: ["'Chillax', sans-serif"],
			renade: ["'Ranade', sans-serif"]
		},
		extend: {
			flexGrow: {
				2: "2",
				3: "3"
			},
			zIndex: {
				60: "60",
				70: "70",
				80: "80",
				90: "90",
				100: "100"
			},
			colors: {
				primary: {
					main: "#b20000",
					light: "#ed371c",
					dark: "#590000"
				}
			}
		}
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio")
	]
};

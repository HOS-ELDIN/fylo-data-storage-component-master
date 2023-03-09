/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	theme: {
		fontFamily: {
			serif: ["Raleway", "sans-serif"],
		},
		extend: {
			colors: {
				// ### Primary

				GradientaFrom: "hsl(6, 100%, 80%)",
				GradientTo: "hsl(335, 100%, 65%)",

				// ### Neutral

				PaleBlue: "hsl(243, 100%, 93%)",
				GrayishBlue: "hsl(229, 7%, 55%)",
				//div bg
				DarkBlue: "hsl(228, 56%, 26%)",
				//icon bg and dark text
				VeryDarkBlue: "hsl(229, 57%, 11%)",
			},
			backgroundImage: {
				"desk": "url(/images/bg-desktop.png)",
				"mobile": "url(/images/bg-mobile.png)",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};



const defaultTheme = require('tailwindcss/defaultTheme');
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {

			fontFamily: {
				sans: ['Lexend', ...defaultTheme.fontFamily.sans]

			},

			colors: {
				primary: '#BA76F9ff' /* primary color */,
				'primary-focus': '#8617f7ff' /* primary color - focused */,
				'primary-content': '#080602ff' /* Foreground content color to use on primary color */,

				secondary: '#ffdf8aff' /* secondary color */,
				'secondary-focus': '#957e45ff' /* secondary  color - focused */,
				'secondary-content': '#080602ff' /* Foreground content color to use on secondary color */,

				accent: '#452c02ff' /* Accent color */,
				'accent-focus': '#382402ff' /* Accent color - focused */,
				'accent-content': '#080602ff' /* Foreground content color to use on accent color */,

				neutral: '#ffc029ff' /* Neutral color */,
				'neutral-focus': '#e9a30cff' /* Neutral color - focused */,
				'neutral-content': '#080602ff' /* Foreground content color to use on neutral color */,

				'base-100': '#080602ff' /* Base color of page, used for blank backgrounds */,
				'base-200': '#1C1B1Cff' /* Base color, a little darker */,
				'base-300': '#272627ff' /* Base color, even more darker dcdfe6 */,
				'base-content': '#f8f6e8ff' /* Foreground content color to use on base color */,

				info: '#2094f3' /* Info */,
				success: '#61a744ff' /* Success */,
				warning: '#ff9900' /* Warning */,
				error: '#e63023ff' /* Error */
			}


		},


	},

};

module.exports = config;

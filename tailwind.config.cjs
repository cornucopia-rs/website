

const defaultTheme = require('tailwindcss/defaultTheme');
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {

			fontFamily: {
				sans: ['Lexend', ...defaultTheme.fontFamily.sans]

			},

			colors: {
				primary: '#018bc0ff' /* primary color */,
				'primary-focus': '#00b2e3ff' /* primary color - focused */,
				'primary-content': '#080602ff' /* Foreground content color to use on primary color */,

				secondary: '#9464B4ff' /* secondary color */,
				'secondary-focus': '#6A4186ff' /* secondary  color - focused */,
				'secondary-content': '#f6f6f6ff' /* Foreground content color to use on secondary color */,

				accent: '#ffdf8aff' /* Accent color */,
				'accent-focus': '#452c02ff' /* Accent color - focused */,
				'accent-content': '#080602ff' /* Foreground content color to use on accent color */,

				neutral: '#ffc029ff' /* Neutral color */,
				'neutral-focus': '#d68000ff' /* Neutral color - focused */,
				'neutral-content': '#080602ff' /* Foreground content color to use on neutral color */,

				'base-100': '#0f1419ff' /* Base color of page, used for blank backgrounds */,
				'base-200': '#191f26' /* Base color, a little darker */,
				'base-300': '#272627ff' /* Base color, even more darker dcdfe6 */,
				'base-content': '#c5c5c5ff' /* Foreground content color to use on base color */,

				info: '#2094f3' /* Info */,
				success: '#61a744ff' /* Success */,
				warning: '#ff9900' /* Warning */,
				error: '#e63023ff' /* Error */
			}


		},


	},

};

module.exports = config;

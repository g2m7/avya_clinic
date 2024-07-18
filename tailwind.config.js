/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'macha-green': '#527359'
			}
		}
	},
	plugins: ['import {aspect-ratio} from tailwindcss']
};

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'macha-green': '#527359'
			},
			animation: {
				'shine': 'shine 4s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 2s ease-in-out infinite'
			},
			keyframes: {
				shine: {
					'0%': { transform: 'translateX(-100%)' },
					'20%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.6' }
				}
			}
		}
	},
	plugins: ['import {aspect-ratio} from tailwindcss']
};

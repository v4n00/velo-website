/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

const radialGradientPlugin = plugin(
	function ({ matchUtilities, theme }) {
		matchUtilities(
			{
				// map to bg-radient-[*]
				'bg-radient': (value) => ({
					'background-image': `radial-gradient(${value},var(--tw-gradient-stops))`,
				}),
			},
			{ values: theme('radialGradients') }
		);
	},
	{
		theme: {
			radialGradients: _presets(),
		},
	}
);

function _presets() {
	const shapes = ['circle', 'ellipse'];
	const pos = {
		c: 'center',
		t: 'top',
		b: 'bottom',
		l: 'left',
		r: 'right',
		tl: 'top left',
		tr: 'top right',
		bl: 'bottom left',
		br: 'bottom right',
	};
	let result = {};
	for (const shape of shapes) for (const [posName, posValue] of Object.entries(pos)) result[`${shape}-${posName}`] = `${shape} at ${posValue}`;

	return result;
}

module.exports = {
	darkMode: ['class'],
	content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './app/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
	prefix: '',
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		fontFamily: {
			'roboto-mono': ['Roboto Mono', 'monospace'],
			roboto: ['Roboto', 'sans-serif'],
		},
		extend: {
			dropShadow: {
				primary: '0 0 15px hsla(var(--primary) / 0.4)',
				'sky-500': '0 0 15px hsla(200, 100%, 50%, 0.3)',
				'green-500': '0 0 15px hsla(120, 100%, 50%, 0.2)',
			},
			fontFamily: {
				cocktail: ['Cocktail Shaker', 'cursive'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))',
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))',
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))',
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				shine: {
					from: { backgroundPosition: '200% 0' },
					to: { backgroundPosition: '-200% 0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				shine: 'shine 8s ease-in-out infinite',
			},
		},
	},
	plugins: [require('tailwindcss-animate'), radialGradientPlugin],
};

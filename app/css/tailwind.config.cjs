/* eslint-env node */
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./app/src/index.html', './app/src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				'gray-light': '#E2E3E5',
				gray: '#F3F4F6',
				'gray-darken': '#C4C4C4',
				'gray-extra-darken': '#6B7280',
				purple: '#5D5FEF',
				'iris-100': '#5D5FEF',
				'light-blue-50': '#F0F9FF',
				'blue-darken': '#111827',
			},
			gridTemplateColumns: {
				operations: 'repeat(auto-fit, minmax(52px, 1fr));',
				numbers: 'repeat(auto-fit, minmax(72px, 1fr));',
			},
			boxShadow: {
				md: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
			},
			fontSize: {
				sm: ['12px', {lineHeight: '14.52px'}],
				md: ['14px', {lineHeight: '16.94px'}],
				'md-lg': ['19px', {lineHeight: '22.99px'}],
				lg: ['36px', {lineHeight: '43.57px'}],
			},
		},
	},
	plugins: [],
};

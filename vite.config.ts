import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	root: './app/src',
	publicDir: '../public',
	css: {postcss: './app/css/postcss.config.js'},
	plugins: [react()],
});

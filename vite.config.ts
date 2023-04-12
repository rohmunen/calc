import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default ({ mode }) =>
  defineConfig({
    publicDir: '../public',
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './app')
      }
    },
    css: { postcss: './app/css/postcss.config.js' },
    plugins: [svgr(), react()],
    base: mode === 'development' ? './' : '/calc/'
  });

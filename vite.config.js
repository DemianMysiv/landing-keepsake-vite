import vituum from 'vituum';
import pug from '@vituum/vite-plugin-pug';
import path from 'path';

export default {
  base: process.env.VITE_BASE || '/landing-keepsake-vite/',
  plugins: [
    vituum({
      imports: {
        filenamePattern: {
          '+.css': [],
          '+.scss': [],
        },
      },
    }),
    pug({ root: './src', options: { doctype: 'html' } }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, 'src'),
      '@assets': path.resolve(import.meta.dirname, 'src/assets'),
    },
  },
};

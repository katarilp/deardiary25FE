// vite.config.js
import {resolve} from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // List your html files here, e.g:
        index: resolve(__dirname, 'index.html'),
        submit: resolve(__dirname, 'src/pages/submit.html'),
        diary: resolve(__dirname, 'src/pages/diary.html'),
      },
    },
  },
  base: './',
});

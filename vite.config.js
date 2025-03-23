// vite.config.js
import {resolve} from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // List your html files here, e.g:
        Kirjautuminen: resolve(__dirname, 'index.html'),
        Uusi_merkintä: resolve(__dirname, 'src/pages/submit.html'),
        Historia: resolve(__dirname, 'src/pages/diary.html'),
      },
    },
  },
  base: './',
});

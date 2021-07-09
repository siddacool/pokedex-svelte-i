import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      constants: resolve('./src/constants'),
      routes: resolve('./src/routes'),
      pages: resolve('./src/pages'),
      store: resolve('./src/store'),
      components: resolve('./src/components'),
    },
  },
});

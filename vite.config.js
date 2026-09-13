import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Relative asset paths so the built site works when it is hosted from
  // any folder (e.g. GitHub Pages project sites, which are served under
  // /Movie-watch-list/ instead of the domain root).
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Predictable, readable output file names instead of hashed ones
        // like "index-CPuprhLv.js". If long-term browser caching ever
        // matters, switch these back to "[name].js" / "[name]-[hash].js".
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
});

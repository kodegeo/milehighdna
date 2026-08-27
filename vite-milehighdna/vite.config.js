import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: {
      // react-helmet-async@2.0.5 is inert in this app (renders, never writes to
      // document.head — reproduced in an isolated React root). Alias it to a
      // drop-in shim so the metadata already written in ~97 page components
      // actually reaches the DOM. See src/lib/helmetShim.jsx.
      'react-helmet-async': fileURLToPath(new URL('./src/lib/helmetShim.jsx', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3001',
    },
  },
})

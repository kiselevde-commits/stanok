import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Base path for GitHub Pages deployment (repo name "stanok")
  base: '/stanok/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: true,
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Для корректной работы на GitHub Pages в поддиректории /stanok/
  base: '/stanok/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: true,
  },
})

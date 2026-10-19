import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Base path для GitHub Pages (repo name "stanok")
  // Измените '/stanok/' на имя вашего репозитория, если другое
  base: '/stanok/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: true,
  },
})

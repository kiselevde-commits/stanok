import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Base path: '/' для локальной разработки, '/stanok/' для GitHub Pages
  // Измените '/stanok/' на имя вашего репозитория, если другое
  base: process.env.NODE_ENV === 'production' ? '/stanok/' : '/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    // Убедимся что NODE_ENV установлен в production при сборке
    envDir: '.',
  },
})

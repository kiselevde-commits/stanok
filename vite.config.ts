import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Base path: '/' для локальной разработки, '/stanok/' для GitHub Pages
  // Измените '/stanok/' на имя вашего репозитория, если другое
  base: import.meta.env.MODE === 'production' ? '/stanok/' : '/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: true,
  },
})

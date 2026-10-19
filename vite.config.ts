import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => ({
  // Base path: '/' для dev, '/stanok/' для production (GitHub Pages)
  // Измените '/stanok/' на имя вашего репозитория, если другое
  base: mode === 'production' ? '/stanok/' : '/',
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    open: true,
  },
}))

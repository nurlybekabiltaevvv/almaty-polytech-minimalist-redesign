import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: "/almaty-polytech-minimalist-redesign/", // ← имя репозитория
  plugins: [
    react(),
    tailwindcss(),
  ],
})
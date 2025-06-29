import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// Imprting Plugin of Tailwind CSS
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
})

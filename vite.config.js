import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// The tailwindcss() plugin turns on Tailwind CSS for the project
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
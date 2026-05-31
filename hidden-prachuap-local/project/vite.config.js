import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'

// Replace 'hidden-prachuap' with your actual GitHub repo name if different
export default defineConfig({
  plugins: [react()],
  base: '/hidden-prachuap-github/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

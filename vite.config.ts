// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/tollyaisite/', // Replace with your repo name if different
  plugins: [react()],
})

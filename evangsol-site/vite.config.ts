import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/netsuite-landing/evangsol-site/',
  plugins: [react()],
  server: {
    port: 3003
  }
})

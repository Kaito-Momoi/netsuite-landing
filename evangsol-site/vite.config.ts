import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/netsuite-landing/' : '/',
  plugins: [react()],
  server: {
    port: 3003
  }
}))

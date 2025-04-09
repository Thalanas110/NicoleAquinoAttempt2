import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    hmr: {
      host: '0.0.0.0',
    },
    cors: true,
    strictPort: true,
    fs: {
      strict: false,
      allow: ['..']
    },
    // Allow all hosts (using string array)
    allowedHosts: ['all'],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets')
    }
  }
})
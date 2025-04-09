import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000,
    // Disable HMR for Replit environment
    hmr: false,
    cors: true,
    strictPort: true,
    fs: {
      strict: false,
      allow: ['..']
    },
    origin: 'http://0.0.0.0:5000',
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    watch: {
      usePolling: true
    },
    // Add the specific Replit host
    allowedHosts: [
      'bc82b440-9fb8-4ac9-becd-6aeb73f46ecb-00-4pnqg219k21l.janeway.replit.dev',
      'localhost',
      '127.0.0.1',
      '.replit.dev',
      '.repl.co'
    ],
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@assets': resolve(__dirname, './src/assets')
    }
  }
})
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import dotenv from 'dotenv'

dotenv.config()

export default defineConfig({

  logLevel: 'info',

  plugins: [reactRefresh()],
  server: {
    host: process.env.VITE_HOST || null,
    port: process.env.VITE_PORT || null,
    hmr: {
      clientPort: process.env.VITE_CLIENT_PORT || null
    },
  },
  build: {
    outDir: 'dist',
  },
})

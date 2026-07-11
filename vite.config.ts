import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production base matches GitHub Pages project URL: /portfolio/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  base: mode === 'production' ? '/portfolio/' : '/',
}))

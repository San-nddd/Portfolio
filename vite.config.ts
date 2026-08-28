import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages is served from the repository root by default.
// If deploying to https://<username>.github.io/<repo>/, set base to `/<repo>/`.
// Otherwise (user/org page or custom subdomain), use '/'.
const base = process.env.VITE_BASE || '/My-porto/'

export default defineConfig({
  plugins: [react()],
  base,
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  server: {
    port: 5173,
    open: false,
  },
})

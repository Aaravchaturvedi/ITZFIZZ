import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// IMPORTANT for GitHub Pages: `base` must match your repo name.
// Example: if your repo URL is https://<username>.github.io/ITZFIZZ/
// then base must be '/ITZFIZZ/'. Change it if your repo name differs.
export default defineConfig({
  base: '/ITZFIZZ/',
  plugins: [react()],
})

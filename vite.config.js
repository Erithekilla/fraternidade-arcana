import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

// https://vite.dev/config/
export default defineConfig({
  root,
  base: '/fraternidade-arcana/',
  plugins: [react()],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(root, 'index.html'),
        trabalhos: resolve(root, 'trabalhos', 'index.html'),
        oiac: resolve(root, 'oiac', 'index.html'),
        grupos: resolve(root, 'grupos', 'index.html')
      }
    }
  }
})

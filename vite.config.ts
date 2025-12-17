import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  base: '/2025-merry-christmas/',
  plugins: [vue(), UnoCSS()],
  server: {
    host: true
  }
})

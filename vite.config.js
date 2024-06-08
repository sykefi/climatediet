import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const path = require('path')

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: process.env.BASE_URL,
  server: {
    port: 3000,
  },
  plugins: [vue()]
})

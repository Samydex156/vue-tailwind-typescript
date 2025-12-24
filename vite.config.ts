import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite' // Importamos el plugin

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(), // Agregamos el plugin aquí
  ],
  server:{
    host: true,
    open: true,
  }
})
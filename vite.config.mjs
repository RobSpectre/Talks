import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuePugPlugin from 'vue-pug-plugin'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  },
  css: {
    preprocesserOptions: {
      scss: {
        quietDeps: true
      }
    }
  },
  plugins: [vue({
    template: {
      preprocessOptions: {
        plugins: [
          vuePugPlugin
        ]
      }
    }
  })]
})

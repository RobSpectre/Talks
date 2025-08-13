import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/')
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.js'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'tests/',
        'dist/',
        'coverage/',
        '**/*.config.js',
        '**/*.config.mjs',
        'src/components/ui/**', // UI components are external
        'src/views/**', // Application views, not base components
        'src/router/**', // Router configuration
        'src/lib/**', // Utility functions
        'src/main.js', // Application entry point
        'src/App.vue', // Root application component
        'babel.config.js',
        'postcss.config.js',
        'tailwind.config.js'
      ],
      include: [
        'src/**/*.{js,vue}'
      ],
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80
        }
      }
    }
  }
})
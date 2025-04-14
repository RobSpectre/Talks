import eslintPluginVue from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default [
  // Base config for non-Vue files
  {
    files: ['**/*.js'],
    ignores: [
      'src/components/ui/*',
      'src/components/ui/**/*'
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module'
    }
  },
  // Vue specific config
  {
    files: ['**/*.vue'],
    ignores: [
      'src/components/ui/*',
      'src/components/ui/**/*'
    ],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        console: 'readonly',
        Audio: 'readonly',
        fetch: 'readonly'
      }
    },
    plugins: {
      vue: eslintPluginVue
    },
    rules: {
      // Add your Vue rules manually here
      'vue/comment-directive': 'off',
      'vue/html-self-closing': 'error',
      'vue/component-name-in-template-casing': ['error', 'PascalCase'],
      // Add more rules as needed
    }
  }
]

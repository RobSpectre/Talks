module.exports = {
  moduleFileExtensions: ['vue', 'js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\js$': 'babel-jest'
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  testEnvironment: 'jsdom',
  setupFiles: [
    './tests/setupTests.js',
    'fake-indexeddb/auto'
  ],
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    '!**/node_modules/**'
  ],
  coverageReporters: [
    'html',
    'text-summary',
    'json'
  ],
  globals: {
    'vue-jest': {
      pug: {
        doctype: 'html'
      }
    }
  }
}

module.exports = {
  root: true,
  env: {
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
        'src/components/ui/**'
      ],
      env: {
        jest: true
      },
      rules: {
        'no-unused-expressions': 'off',
        'no-sequences': 'off'
      }
    }
  ]
}

module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint', 'svelte3'],

  extends: ['plugin:@typescript-eslint/recommended'],

  env: {
    node: true,
    browser: true,
  },

  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ['*.ts', '*.tsx'],

      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'error',
        '@typescript-eslint/no-var-requires': 'error',
      },
    },

    {
      files: ['*.svelte'],
      processor: 'svelte3/svelte3',

      rules: {
        'no-multiple-empty-lines': 'off',
        'no-duplicate-imports': 'off',
      },
    },
  ],

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },

  settings: {
    'svelte3/typescript': true,
    'svelte3/ignore-styles': () => true,
  },
};

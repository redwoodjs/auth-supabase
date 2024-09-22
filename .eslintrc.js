module.exports = {
  root: true,

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],

  env: {
    node: true,
  },

  ignorePatterns: ['dist'],

  rules: {
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}

module.exports = {
  root: true,

  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',

    // This one has to come last.
    // See https://github.com/prettier/eslint-plugin-prettier#recommended-configuration.
    'plugin:prettier/recommended',
  ],

  parser: '@typescript-eslint/parser',

  plugins: ['@typescript-eslint'],

  env: {
    node: true,
  },

  ignorePatterns: ['dist'],

  rules: {
    'prettier/prettier': 'warn',

    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
}

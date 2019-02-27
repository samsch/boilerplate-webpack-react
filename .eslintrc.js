// By default eslint ignore it's own config files, so:
// If making changes, lint with
// npx eslint .eslintrc.js --ignore-pattern '!.eslintrc.js'
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaVersion: '2019',
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'array-callback-return': 'warn',
    'eqeqeq': ['error', 'always', { 'null': 'ignore' }],
    'no-empty-function': 'warn',
    'no-eval': 'warn',
    'no-implied-eval': 'warn',
    'no-invalid-this': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-self-compare': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-return': 'warn',
    'no-void': 'error',
    'no-warning-comments': 'warn',
    'no-with': 'error',
    'prefer-promise-reject-errors': 'error',
    'no-shadow-restricted-names': 'error',
    'no-use-before-define': 'error',
    'no-duplicate-imports': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'react/prop-types': ['error', { skipUndeclared: true }],

    // style rules
    'semi': ['error', 'always'],
    'wrap-iife': ['warn', 'inside'],
    'space-before-function-paren': 'warn',
    'no-trailing-spaces': 'error',
    'quotes': ['warn', 'single'],
    'arrow-spacing': 'warn',
  },

  // Notes about React plugin custom settings: https://github.com/yannickcr/eslint-plugin-react#configuration
  'settings': {
    'react': {
      'version': 'detect',
    },
  },
};

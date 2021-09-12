module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12
  },
  plugins: ['prettier'],
  rules: {
    'class-methods-use-this': false
  }
};
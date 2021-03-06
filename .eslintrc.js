module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks',
  ],
  rules: {
    'react/require-default-props': 0,
    'react/jsx-props-no-spreading': ['error', {
      html: 'enforce',
      custom: 'ignore',
      exceptions: [''],
    }],
  },
};

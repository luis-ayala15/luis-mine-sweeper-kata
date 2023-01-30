module.exports = {
  env: {
    jest: true,
    commonjs: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  plugins: ['jest'],
  extends: ['eslint:recommended', 'prettier', 'plugin:jest/recommended'],
  overrides: [
    {
      files: ['*.test.js'],
    },
  ],
};

'use strict';

module.exports = {
  extends: ['yialo/preset-webpack'],
  globals: {
    process: 'readonly',
  },
  ignorePatterns: [
    '*.html',
    '/dist/',
    '/extra/',
  ],
  overrides: [
    {
      extends: ['yialo/preset-webpack-typescript-jest'],
      files: ['./**/*.{spec,test}.ts?(x)'],
    },
    {
      extends: ['yialo/preset-node'],
      files: ['./*.js', './config/**/*.js', './postcss/**/*.js'],
      settings: {
        'import/resolver': 'node',
      },
    },
    {
      extends: ['yialo/preset-webpack-typescript'],
      files: ['./src/**/*.ts?(x)'],
    },
  ],
  rules: {
    'import/no-unassigned-import': [
      'error',
      {
        allow: ['**/*.{?(s)css,jp?(e)g,png,svg}'],
      },
    ],
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './config/webpack.config.js',
      },
    },
  },
};

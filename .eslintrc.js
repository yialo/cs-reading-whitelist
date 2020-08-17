'use strict';

module.exports = {
  extends: ['yialo/preset-web-babel'],
  globals: {
    process: 'readonly',
  },
  ignorePatterns: [
    '*.html',
    '/dist/',
    '/extra/',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  overrides: [
    {
      files: ['./**/*.{spec,test}.ts?(x)'],
      extends: ['yialo/preset-web-ts-check-jest'],
    },
    {
      files: [
        './*.js',
        './config/**/*.js',
        './postcss/**/*.js',
      ],
      extends: ['yialo/preset-node'],
      settings: {
        'import/resolver': 'node',
      },
    },
    {
      files: ['./src/**/*.ts?(x)'],
      extends: ['yialo/preset-web-ts-check'],
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

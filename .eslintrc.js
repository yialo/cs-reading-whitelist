'use strict';

module.exports = {
  extends: ['yialo/preset-web-babel'],
  ignorePatterns: [
    '*.html',
    '/dist/',
    '/extra/',
  ],
  parserOptions: {
    babelOptions: {
      configFile: './babel.config.js',
    },
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
        './scripts/**/*.js',
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
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.config.js',
      },
    },
  },
};

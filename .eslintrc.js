'use strict';

const tsParserOptions = {
  tsconfigRootDir: __dirname,
  project: ['./tsconfig.json'],
};

const srcResolverSettings = {
  'import/resolver': {
    webpack: {
      config: './webpack.config.js',
    },
  },
};

module.exports = {
  ignorePatterns: [
    '*.html',
    '/dist/',
    '/extra/',
  ],
  overrides: [
    {
      files: [
        './*.js',
      ],
      extends: ['yialo/preset-node'],
      settings: {
        'import/resolver': 'node',
      },
    },
    {
      files: ['./src/**/*.js?(x)'],
      extends: ['yialo/preset-web-babel'],
      parserOptions: {
        babelOptions: {
          configFile: './babel.config.js',
        },
      },
      settings: srcResolverSettings,
    },
    {
      files: ['./src/**/*.ts?(x)'],
      extends: ['yialo/preset-web-ts-check'],
      parserOptions: tsParserOptions,
      settings: srcResolverSettings,
    },
    {
      files: ['./**/*.{spec,test}.ts?(x)'],
      extends: ['yialo/preset-web-ts-check-jest'],
      parserOptions: tsParserOptions,
      settings: srcResolverSettings,
    },
  ],
};

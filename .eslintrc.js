'use strict';

const tsConfigMixin = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
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
      files: ['./*.js'],
      extends: ['yialo/presets/node'],
    },
    {
      files: ['./src/**/*.ts?(x)'],
      extends: ['yialo/presets/web-react-ts-check'],
      ...tsConfigMixin,
    },
    {
      files: ['./src/**/*.{spec,test}.ts?(x)'],
      extends: ['yialo/presets/web-react-ts-check-jest'],
      ...tsConfigMixin,
    },
  ],
};

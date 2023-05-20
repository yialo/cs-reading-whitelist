'use strict';

const tsConfigMixin = {
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    // TODO: rethink after plugin update
    'react/jsx-filename-extension': [
      'error',
      {
        allow: 'always',
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unstable-nested-components': [
      'error',
      {
        allowAsProps: true,
      },
    ],
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
  ignorePatterns: ['*.html', '/dist/', '/extra/'],
  overrides: [
    {
      files: ['./*.js'],
      extends: ['yialo/presets/node'],
      rules: {
        indent: 'off',
      },
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

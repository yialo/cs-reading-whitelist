'use strict';

module.exports = {
  ignoreFiles: [
    '**/*.html',
    '**/*.js',
    '**/*.jsx',
    '**/*.md',
    '**/*.ts',
    '**/*.tsx',
    './dist/**',
    './docs/**',
    './node_modules/**',
  ],
  reports: {
    reportInvalidScopeDisables: true,
    reportNeedlessDisables: true,
  },
  customSyntax: 'postcss-scss',
  plugins: ['stylelint-scss'],
  rules: {},
};

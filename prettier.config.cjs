'use strict';

module.exports = {
  plugins: [
    '@awmottaz/prettier-plugin-void-html',
    '@ianvs/prettier-plugin-sort-imports',
  ],
  quoteProps: 'consistent',
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    '^(react|react-dom/.+)$',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/',
    '',
    '^[.]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderTypeScriptVersion: '5.7.3',
};

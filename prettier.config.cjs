'use strict';

module.exports = {
  plugins: [
    '@prettier/plugin-oxc',
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
  importOrderTypeScriptVersion: '5.8.3',
};

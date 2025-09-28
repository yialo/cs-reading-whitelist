'use strict';

module.exports = {
  plugins: [
    require.resolve('@prettier/plugin-oxc'),
    require.resolve('@awmottaz/prettier-plugin-void-html'),
    require.resolve('@ianvs/prettier-plugin-sort-imports'),
  ],
  quoteProps: 'consistent',
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    '<BUILTIN_MODULES>',
    '',
    '^(react|react-dom/.+)$',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/',
    '',
    '^[.]',
  ],
  importOrderTypeScriptVersion: '5.9.2',
};

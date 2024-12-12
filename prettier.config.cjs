'use strict';

module.exports = {
  plugins: [
    '@awmottaz/prettier-plugin-void-html',
    '@trivago/prettier-plugin-sort-imports',
  ],
  quoteProps: 'consistent',
  singleQuote: true,
  trailingComma: 'all',
  importOrder: [
    '^react$',
    '<THIRD_PARTY_MODULES>',
    '^@shared/(.*)$',
    '^@entities/(.*)$',
    '^@/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  importOrderTypeScriptVersion: '5.7.2',
};

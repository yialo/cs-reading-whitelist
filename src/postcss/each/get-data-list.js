'use strict';

const postcss = require('postcss');

module.exports = (dataString) => {
  if (dataString.startsWith('(') && dataString.endsWith(')')) {
    return postcss.list.comma(dataString.replace(/[()]/g, ''))
      .filter((str) => (str !== ''));
  }
  throw new Error('Bad data structure parameter');
};

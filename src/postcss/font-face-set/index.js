'use strict';

const postcss = require('postcss');
const getFontFaces = require('./get-set');

module.exports = postcss.plugin('postcss-font-face-set', (options) => {
  return (css) => {
    if (css.source.input.file.includes('index')) {
      css.walkAtRules()
    }
  };
});

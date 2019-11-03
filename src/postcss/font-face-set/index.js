'use strict';

const postcss = require('postcss');

const getFontFaces = require('./get-set');
const { fonts } = require('../../json/fonts.json');

module.exports = postcss.plugin('postcss-font-face-set', () => (
  (css) => {
    if (css.source.input.file.includes('index')) {
      css.walkAtRules('font-face-set', (atRule) => {
        atRule.walkDecls('is-active', (decl) => {
          if (decl.value === 'true') {
            const fontFaces = getFontFaces(fonts, atRule.source);

            atRule.replaceWith(fontFaces);
          }
        });
      });
    }
  }
));

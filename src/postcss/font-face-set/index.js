'use strict';

const path = require('path');
const postcss = require('postcss');
const getFontFaces = require('./get-font-faces.js');

module.exports = postcss.plugin('postcss-font-face-set', (options) => {
  const { pathAliasEnum } = options;

  return (css) => {
    css.walkAtRules('font-face-set', (atRule) => {
      let basePath;
      atRule.walkDecls(('entry'), (decl) => {
        const pathAlias = decl.value.slice(1, -1);
        basePath = pathAliasEnum[pathAlias];
      });

      let relativePath;
      atRule.walkDecls(('relative-path'), (decl) => {
        relativePath = decl.value.slice(1, -1);
      });

      const fontDataPath = path.join(basePath, relativePath);
      const fontData = require(fontDataPath);

      atRule.walkDecls('public-path-base', (decl) => {
        const pathBase = decl.value.slice(1, -1);
        const fontFaces = getFontFaces({
          fontData,
          pathBase,
          srcMap: atRule.source,
        });
        atRule.replaceWith(fontFaces);
      });
    });
  };
});

'use strict';

const path = require('path');
const postcss = require('postcss');
const getFontFaces = require('./get-font-faces.js');

module.exports = postcss.plugin('postcss-font-face-set', (options) => {
  const { pathAliasEnum } = options;

  return (root) => {
    root.walkAtRules('font-face-set', (atRule) => {
      const fontPathData = {};
      atRule.walkDecls((decl) => {
        const value = decl.value.slice(1, -1);
        if (decl.prop === 'alias' && value !== '') {
          fontPathData.alias = value;
        } else if (decl.prop === 'data-relative-path') {
          fontPathData.dataRelativePath = value;
        } else if (decl.prop === 'file-path-base') {
          fontPathData.filePathBase = value;
        }
      });
      const basePath = pathAliasEnum[fontPathData.alias];
      const fontPath = path.join(basePath, fontPathData.dataRelativePath);
      const fontList = require(fontPath).fonts;
      const fontFaces = getFontFaces({
        fontList,
        pathBase: fontPathData.filePathBase,
        srcMap: atRule.source,
      });
      atRule.replaceWith(fontFaces);
    });
  };
});

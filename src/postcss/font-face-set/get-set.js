'use strict';

const postcss = require('postcss');

module.exports = (fontList, srcMap) => {
  const fontFaces = [];

  const getDecl = (prop, value) => postcss.decl({
    prop: `font-${prop}`,
    value,
    source: srcMap,
  });

  fontList.forEach((font) => {
    const { family, fileNameBase, localBase, sets } = font;

    sets.forEach((set) => {
      const { weight, style, localSuffix } = set;

      const createDecls = () => {
        const familyDecl = getDecl('family', `"${family}"`);
        const weightDecl = getDecl('weight', `${weight}`);
        const styleDecl = getDecl('style', style);
        const displayDecl = getDecl('display', 'swap');

        const filePathBase = `https://yialo.github.io/cs-reading-whitelist/assets/fonts/${fileNameBase}_${weight}_${style}.woff`;
        const srcValue = (
          `local("${localBase.os} ${localSuffix.os}"),
          local("${localBase.postScript}-${localSuffix.postScript}"),
          url("${filePathBase}2") format("woff2"),
          url("${filePathBase}") format("woff")`
        );

        const srcDecl = postcss.decl({
          prop: 'src',
          value: srcValue,
          source: srcMap,
        });

        return [
          familyDecl,
          weightDecl,
          styleDecl,
          displayDecl,
          srcDecl,
        ];
      };

      const atRule = postcss.atRule({
        name: 'font-face',
        params: '',
        raws: {
          between: ' ',
          semicolon: true,
        },
        source: srcMap,
      });

      atRule.append(createDecls());
      fontFaces.push(atRule);
    });
  });

  return fontFaces;
};

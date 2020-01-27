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
    const { family, fileNameBase, sets } = font;

    sets.forEach((set) => {
      const { weight, style } = set;

      const createDecls = () => {
        const familyDecl = getDecl('family', `"${family}"`);
        const weightDecl = getDecl('weight', `${weight}`);
        const styleDecl = getDecl('style', style);
        const displayDecl = getDecl('display', 'swap');

        const basePath = (process.env.NODE_ENV === 'production')
          ? 'https://yialo.github.io/cs-reading-whitelist'
          : '';

        const filePath = `${basePath}/assets/fonts/${fileNameBase}_${weight}_${style}`;
        const srcValue = (
          `url("${filePath}.woff2") format("woff2"),
          url("${filePath}.woff") format("woff")`
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

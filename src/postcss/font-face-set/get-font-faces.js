'use strict';

const postcss = require('postcss');

const getFontFaces = ({ fontData, pathBase, srcMap }) => {
  const { fonts } = fontData;

  const fontFaces = [];
  fonts.forEach((font) => {
    const { family, fileNameBase, sets } = font;

    sets.forEach((set) => {
      const { weight, style } = set;
      const getDecl = (prop, value) => postcss.decl({
        prop: `font-${prop}`,
        value,
        source: srcMap,
      });

      const createDecls = () => {
        const fontFamilyDecl = getDecl('family', `"${family}"`);
        const fontWeightDecl = getDecl('weight', `${weight}`);
        const fontStyleDecl = getDecl('style', style);
        const fontDisplayDecl = getDecl('display', 'swap');

        const filePathBase = `${pathBase}${fileNameBase}_${weight}_${style}`;
        const srcValue = (
          `url("${filePathBase}.woff2") format("woff2"),
          url("${filePathBase}.woff") format("woff")`
        );

        const srcDecl = postcss.decl({
          prop: 'src',
          value: srcValue,
          source: srcMap,
        });

        return [
          fontFamilyDecl,
          fontWeightDecl,
          fontStyleDecl,
          fontDisplayDecl,
          srcDecl,
        ];
      };

      const fontFaceAtRule = postcss.atRule({
        name: 'font-face',
        params: '',
        raws: {
          between: ' ',
          semicolon: true,
        },
        source: srcMap,
      });

      fontFaceAtRule.append(createDecls());
      fontFaces.push(fontFaceAtRule);
    });
  });

  return fontFaces;
};

module.exports = getFontFaces;

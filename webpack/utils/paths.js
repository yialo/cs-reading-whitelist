const path = require('path');

module.exports = {
  getAlias: (absPathToSrc) => ({
    'Components': path.join(absPathToSrc, 'js/components'),
    'Css': path.join(absPathToSrc, 'css'),
    '#json': path.join(absPathToSrc, 'json'),
  }),

  getPath: (isProduction) => ({
    SRC: path.resolve(__dirname, '../../src'),
    DIST: path.resolve(__dirname, isProduction ? '../../docs' : '../../dist'),
    ROOT: path.resolve(__dirname, '../../'),
  }),
};

const path = require('path');

module.exports = {
  getAlias: (absPathToSrc) => ({
    '#': absPathToSrc,
    '#components': path.join(absPathToSrc, 'js/components'),
    '#css': path.join(absPathToSrc, 'css'),
    '#json': path.join(absPathToSrc, 'json'),
  }),

  getPath: (isProduction) => ({
    SRC: path.resolve(__dirname, '../src'),
    DIST: path.resolve(__dirname, isProduction ? '../docs' : '../dist'),
    ROOT: path.resolve(__dirname, '../'),
  }),
};

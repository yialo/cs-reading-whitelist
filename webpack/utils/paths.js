const path = require('path');

module.exports = {
  path,

  getAlias: (absPathToSrc) => ({
    '#components': path.join(absPathToSrc, 'js/components'),
    '#css': path.join(absPathToSrc, 'css'),
    '#js': path.join(absPathToSrc, 'js'),
    '#json': path.join(absPathToSrc, 'json'),
  }),

  getPath: (isProduction) => ({
    SRC: path.resolve(__dirname, '../../src'),
    CONFIG: path.resolve(__dirname, '../../config'),
    DIST: path.resolve(__dirname, isProduction ? '../../docs' : '../../dist'),
    ROOT: path.resolve(__dirname, '../../'),
  }),
};

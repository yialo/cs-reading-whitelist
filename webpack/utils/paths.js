const path = require('path');

const absPathToSrc = path.resolve(__dirname, '../../src');

module.exports = {
  path,

  aliasEnum: {
    '#components': path.join(absPathToSrc, 'js/components'),
    '#css': path.join(absPathToSrc, 'css'),
    '#js': path.join(absPathToSrc, 'js'),
    '#json': path.join(absPathToSrc, 'json'),
  },

  getPathEnum: (isProduction) => ({
    SRC: absPathToSrc,
    CONFIG: path.resolve(__dirname, '../../config'),
    DIST: path.resolve(__dirname, isProduction ? '../../docs' : '../../dist'),
    ROOT: path.resolve(__dirname, '../../'),
  }),
};

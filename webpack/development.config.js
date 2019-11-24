'use strict';

const merge = require('webpack-merge');

const baseConfig = require('./base.config');

const devConfig = merge(baseConfig.core, {
  mode: 'development',

  devServer: {
    writeToDisk: (filePath) => !filePath.match(/\.hot-update\.js(?:on|\.map)?$/),
    overlay: true,
    port: 8081,
  },

  devtool: 'source-map',
});

module.exports = new Promise((resolve) => {
  resolve(devConfig);
});

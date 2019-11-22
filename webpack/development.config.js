'use strict';

process.env.NODE_ENV = 'development';

const merge = require('webpack-merge');

const baseConfig = require('./base.config');

const devConfig = merge(baseConfig, {
  mode: 'development',

  devServer: {
    hot: true,
    inline: true,
    contentBase: baseConfig.externals.path.SRC,
    watchContentBase: true,
    writeToDisk: (filePath) => !filePath.match(/\.hot-update\.js(?:on|\.map)?$/),
    overlay: true,
    port: 8081,
  },

  devtool: 'source-map',

  watchOptions: {
    aggregateTimeout: 200,
  },
});

module.exports = new Promise((resolve) => {
  resolve(devConfig);
});

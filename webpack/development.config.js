'use strict';

const merge = require('webpack-merge');

const baseConfig = require('./base.config');

process.env.NODE_ENV = 'development';

const devConfig = merge(baseConfig, {
  mode: 'development',

  // FIXME: add hot-reload for HTML/Pug template update watching
  devServer: {
    hot: true,
    inline: true,
    contentBase: baseConfig.externals.path.SRC,
    writeToDisk: true,
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

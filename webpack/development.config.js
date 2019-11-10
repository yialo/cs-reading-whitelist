'use strict';

const merge = require('webpack-merge');

const baseConfig = require('./base.config');

process.env.NODE_ENV = 'development';

const devConfig = merge(baseConfig, {
  mode: 'development',

  devServer: {
    contentBase: baseConfig.externals.path.SRC,
    overlay: true,
    port: 8081,
  },

  devtool: 'cheap-module-eval-source-map',
});

module.exports = new Promise((resolve) => {
  resolve(devConfig);
});

'use strict';

const merge = require('webpack-merge');
const webpack = require('webpack');

process.env.NODE_ENV = 'development';

const baseConfig = require('./base.config');

const devConfig = merge(baseConfig, {
  mode: 'development',

  devServer: {
    contentBase: baseConfig.externals.path.SRC,
    overlay: true,
    port: 8081,
  },

  devtool: 'cheap-module-eval-source-map',

  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map',
    }),
  ],
});

module.exports = new Promise((resolve) => {
  resolve(devConfig);
});

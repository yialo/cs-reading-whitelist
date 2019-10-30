const merge = require('webpack-merge');
const webpack = require('webpack');

process.env.NODE_ENV = 'production';

const baseConfig = require('./base.config');

const productionConfig = merge(baseConfig, {
  mode: 'production',

  devtool: false,
});

module.exports = new Promise((resolve) => {
  resolve(productionConfig);
});

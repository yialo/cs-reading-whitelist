'use strict';

const merge = require('webpack-merge');

const baseConfig = require('./base.config');

process.env.NODE_ENV = 'production';

const productionConfig = merge(baseConfig, {
  mode: 'production',

  devtool: false,
});

module.exports = new Promise((resolve) => {
  resolve(productionConfig);
});

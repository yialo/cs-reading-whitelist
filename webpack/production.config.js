'use strict';

const merge = require('webpack-merge');

process.env.NODE_ENV = 'production';

const baseConfig = require('./base.config');

const productionConfig = merge(baseConfig, {
  mode: 'production',

  devtool: false,
});

module.exports = new Promise((resolve) => {
  resolve(productionConfig);
});

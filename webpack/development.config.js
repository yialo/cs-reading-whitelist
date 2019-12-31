const merge = require('webpack-merge');

const baseConfig = require('./base.config');

const serverOptions = {
  host: '0.0.0.0',
  overlay: true,
  port: 8081,
  writeToDisk: (filePath) => !filePath.match(/\.hot-update\.js(?:on|\.map)?$/),
};

const devConfig = merge(baseConfig.core, {
  mode: 'development',

  devServer: serverOptions,

  devtool: 'source-map',
});

module.exports = new Promise((resolve) => {
  resolve(devConfig);
});

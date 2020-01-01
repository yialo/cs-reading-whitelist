const merge = require('webpack-merge');

const baseConfig = require('./base.config');

const serverOptions = {
  host: '0.0.0.0',
  port: 8081,
  overlay: true,
  writeToDisk: (filePath) => !filePath.match(/\.hot-update\.js(?:on|\.map)?$/),
};

module.exports = merge(baseConfig.core, {
  mode: 'development',

  devServer: serverOptions,

  devtool: 'source-map',
});

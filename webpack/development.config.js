const merge = require('webpack-merge');

require('dotenv').config();

const baseConfig = require('./base.config.js');

module.exports = merge(baseConfig, {
  mode: 'development',

  devServer: {
    host: process.env.WDS_HOST,
    port: process.env.WDS_PORT,
    overlay: true,
    writeToDisk: (filePath) => !filePath.match(/\.hot-update\.js(?:on|\.map)?$/),
  },

  devtool: 'source-map',
});

const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.config');

const Path = baseConfig.externals.path;

module.exports = merge(baseConfig, {
  mode: 'development',

  devtool: 'cheap-module-source-map',

  devServer: {
    contentBase: Path.PUBLIC,
    overlay: true,
    port: 8081,
  },
});

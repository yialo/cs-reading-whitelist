const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = [
  new CaseSensitivePathsPlugin(),
  new CleanWebpackPlugin({
    cleanStaleWebpackAssets: false,
  }),
];

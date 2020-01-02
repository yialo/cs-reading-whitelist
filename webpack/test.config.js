const path = require('path');

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { getPath } = require('./utils/paths.js');

const isProduction = (process.env.NODE_ENV === 'production');

const pathEnum = getPath(isProduction);

module.exports = {
  mode: 'development',

  target: 'node',

  entry: path.join(pathEnum.SRC, 'tests.js'),

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
      },
    ],
  },

  output: {
    filename: 'test_output.js',
    path: pathEnum.TEST,
  },

  plugins: [
    new CaseSensitivePathsPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
  ],

  resolve: {
    alias: {
      '@': pathEnum.SRC,
    },
  },

  devtool: false,

  stats: {
    assets: false,
    entrypoints: false,
    modules: false,
  },
};

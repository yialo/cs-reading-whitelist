const path = require('path');

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { path: basePath } = require('./base.config');

module.exports = {
  mode: 'development',

  target: 'node',

  entry: path.join(basePath.SRC, 'tests.js'),

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
    path: basePath.TEST,
  },

  plugins: [
    new CaseSensitivePathsPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
  ],

  resolve: {
    alias: {
      '@': basePath.SRC,
    },
  },

  devtool: false,

  stats: {
    assets: false,
    entrypoints: false,
    modules: false,
  },
};

const path = require('path');
const cssExtractPlugin = require('mini-css-extract-plugin');

const Path = {
  SRC: path.resolve(__dirname, './src'),
  DIST: path.resolve(__dirname, './dist'),
  PUBLIC: path.resolve(__dirname, './public'),
  ASSETS: 'assets/',
};

module.exports = {
  context: Path.SRC,

  entry: 'index.js',

  externals: {
    path: Path,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: [
          'style-loader',
          {
            loader: cssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },

  output: {
    filename: 'bundle.js',
    path: Path.DIST,
    publicPath: '/',
  },

  plugins: [
    new cssExtractPlugin({
      filename: '[name].css',
    }),
  ],
};

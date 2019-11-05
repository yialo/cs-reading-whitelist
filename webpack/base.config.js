'use strict';

const fs = require('fs');
const path = require('path');

const CssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const Path = {
  SRC: path.join(__dirname, '../src'),
  DIST: path.join(__dirname, '../docs'),
};

const PAGES_DIR = path.join(Path.SRC, './pug/pages');
const PAGES = fs.readdirSync(PAGES_DIR).filter((filename) => filename.endsWith('.pug'));

module.exports = {
  context: Path.SRC,

  entry: {
    'app': Path.SRC,
  },

  externals: {
    path: Path,
  },

  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              pretty: true,
            },
          },
        ],
      },
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
          CssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/img',
        },
      },
    ],
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
  },

  output: {
    filename: 'assets/js/[name].js',
    path: Path.DIST,
    publicPath: '/',
  },

  plugins: [
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new CssExtractPlugin({
      filename: 'assets/css/[name].css',
    }),
    new CopyPlugin([
      {
        from: path.join(Path.SRC, 'static/fonts/'),
        to: path.join(Path.DIST, 'assets/fonts'),
      },
    ]),

    ...PAGES.map((page) => (
      new HtmlPlugin({
        // inject: false,
        filename: page.replace('.pug', '.html'),
        template: `${PAGES_DIR}/${page}`,
      })
    )),
  ],

  // FIXME: aliases do not working now
  resolve: {
    alias: {
      '@': Path.SRC,
      'Public': 'https://yialo.github.io/cs-reading-whitelist',
    },
  },

  stats: {
    assets: false,
    // entrypoints: false,
    modules: false,
  },
};

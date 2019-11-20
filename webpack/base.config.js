'use strict';

const path = require('path');

const CaseSensitivePathPlugin = require('case-sensitive-paths-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const Path = {
  SRC: path.resolve(__dirname, '../src'),
  DIST: path.resolve(__dirname, '../dist'),
  ROOT: path.resolve(__dirname, '../'),
};

const isProduction = (process.env.NODE_ENV === 'production');
const assetHash = (isProduction ? '.[contenthash]' : '');

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
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.join(Path.ROOT, 'babel.config.js'),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: [
          'style-loader',
          {
            loader: CssExtractPlugin.loader,
            options: {
              hmr: !isProduction,
              reloadAll: true,
            },
          },
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
              config: {
                path: Path.ROOT,
              },
            },
          },
        ],
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
        options: {
          name: `[name]${assetHash}.[ext]`,
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
      minChunks: 2,
    },
    noEmitOnErrors: true,
  },

  output: {
    filename: `assets/js/[name]${assetHash}.js`,
    path: Path.DIST,
    publicPath: '/',
  },

  plugins: [
    new CaseSensitivePathPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: isProduction,
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
    new HtmlPlugin({
      filename: 'index.html',
      template: path.join(Path.SRC, 'pug/pages/index.pug'),
    }),
    new ManifestPlugin({
      filter: (descriptor) => descriptor.isChunk,
    }),
  ],

  resolve: {
    alias: {
      '@': Path.SRC,
    },
  },

  stats: {
    assets: false,
    entrypoints: false,
    modules: false,
  },
};

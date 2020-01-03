const path = require('path');

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DefinePlugin } = require('webpack');

const { getAlias, getPath } = require('./utils/paths.js');

const isProduction = (process.env.NODE_ENV === 'production');

const pathEnum = getPath(isProduction);
const aliasEnum = getAlias(pathEnum.SRC);

const assetHash = isProduction ? '.[contenthash]' : '';
const publicPath = isProduction ? 'https://yialo.github.io/cs-reading-whitelist/' : '/';

module.exports = {
  mode: 'none',

  target: 'web',

  context: pathEnum.SRC,

  entry: {
    'app': pathEnum.SRC,
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
              self: true,
            },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.join(pathEnum.CONFIG, 'babel.config.js'),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: CssExtractPlugin.loader,
            options: {
              hmr: !isProduction,
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
                path: pathEnum.CONFIG,
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
    path: pathEnum.DIST,
    publicPath,
  },

  plugins: [
    new CaseSensitivePathsPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
    }),
    new CssExtractPlugin({
      filename: `assets/css/[name]${assetHash}.css`,
    }),
    new CopyPlugin([
      {
        from: path.join(pathEnum.SRC, 'static/fonts/'),
        to: path.join(pathEnum.DIST, 'assets/fonts'),
      },
    ]),
    new HtmlPlugin({
      filename: 'index.html',
      template: path.join(pathEnum.SRC, 'pug/pages/index.pug'),
    }),
    new ManifestPlugin({
      filter: (descriptor) => descriptor.isChunk,
    }),
    new DefinePlugin({
      publicPath: JSON.stringify(publicPath),
    }),
  ],

  resolve: {
    alias: aliasEnum,
  },

  stats: {
    assets: true,
    entrypoints: false,
    modules: false,
  },
};

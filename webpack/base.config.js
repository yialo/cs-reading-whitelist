const path = require('path');

const CaseSensitivePathPlugin = require('case-sensitive-paths-webpack-plugin');
const CssExtractPlugin = require('extract-css-chunks-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const { getAlias, getPath } = require('./_utils');

const isProduction = (process.env.NODE_ENV === 'production');

const pathEnum = getPath(isProduction);
const aliasEnum = getAlias(pathEnum.SRC);

const assetHash = (isProduction ? '.[contenthash]' : '');

const config = {
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
              configFile: path.join(pathEnum.ROOT, 'babel.config.js'),
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: '/node_modules/',
        use: [
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
              config: {
                path: pathEnum.ROOT,
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
    publicPath: isProduction ? 'https://yialo.github.io/cs-reading-whitelist/' : '/',
  },

  plugins: [
    new CaseSensitivePathPlugin(),
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
  ],

  resolve: {
    alias: aliasEnum,
  },

  stats: {
    assets: false,
    entrypoints: true,
    modules: true,
  },
};

module.exports = {
  core: config,
  path: pathEnum,
};

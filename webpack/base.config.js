const fs = require('fs');
const path = require('path');

const CssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const Path = {
  SRC: path.join(__dirname, '../src'),
  DIST: path.join(__dirname, '../dist'),
};

const PAGES_DIR = path.join(Path.SRC, './pug/pages');
const PAGES = fs.readdirSync(PAGES_DIR).filter((filename) => filename.endsWith('.pug'));

module.exports = {
  context: Path.SRC,

  entry: {
    'app': Path.SRC,
  },

  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        loader: 'babel-loader',
      },

      // FIXME: find out reason of index.css emission
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
        test: /\.(png|jpe?g|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'assets/img',
        },
      },
      {
        test: /\.woff2?/i,
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'assets/fonts',
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
    filename: `assets/js/[name].[hash].js`,
    path: Path.DIST,
    publicPath: '/',
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CssExtractPlugin({
      filename: `assets/css/[name].[hash].css`,
    }),

    ...PAGES.map((page) => (
      new HtmlPlugin({
        // favicon: 'favicons/favicon.ico',
        filename: page,
        template: `${PAGES_DIR}/${page}`,
      })
    )),
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

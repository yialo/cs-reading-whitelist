const fs = require('fs');
const path = require('path');

const CssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const Path = {
  SRC: path.join(__dirname, '../src'),
  DIST: path.join(__dirname, '../dist'),
  ASSETS: 'assets/',
};

const PAGES_DIR = path.join(Path.SRC, './html');
const PAGES = fs.readdirSync(PAGES_DIR).filter((filename) => filename.endsWith('.html'));

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
        exclude: '/node_modules/',
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
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
    filename: `${Path.ASSETS}js/[name].[hash].js`,
    path: Path.DIST,
    publicPath: '/',
  },

  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      {
        from: Path.ASSETS,
        to: `${Path.DIST}/${Path.ASSETS}`,
      },
    ]),
    new CssExtractPlugin({
      filename: `${Path.ASSETS}css/[name].[hash].css`,
    }),

    // TODO: add favicon
    ...PAGES.map((page) => (
      new HtmlPlugin({
        filename: page,
        template: `${PAGES_DIR}/${page}`,
      })
    )),
  ],

  resolve: {
    alias: {
      '~': Path.SRC,
    },
  },

  stats: {
    entrypoints: false,
    modules: false,
  },
};

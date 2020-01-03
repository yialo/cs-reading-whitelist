const path = require('path');

const merge = require('webpack-merge');
const CssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { DefinePlugin } = require('webpack');

const commonPlugins = require('./parts/common-plugins.js');

module.exports = (env = {}) => {
  const isDevelopment = (env.target === 'development');
  const isProduction = (env.target === 'production');
  const isTest = (env.target === 'test');

  const ROOT_PATH = path.resolve(__dirname, '../');

  const pathEnum = {
    SRC: path.resolve(ROOT_PATH, 'src'),
    CONFIG: path.resolve(ROOT_PATH, 'config'),
    DIST: path.resolve(ROOT_PATH, isProduction ? 'docs' : 'dist'),
    TEST: path.resolve(ROOT_PATH, 'tests'),
  };

  const aliasEnum = {
    '#components': path.join(pathEnum.SRC, 'js/components'),
    '#css': path.join(pathEnum.SRC, 'css'),
    '#js': path.join(pathEnum.SRC, 'js'),
    '#json': path.join(pathEnum.SRC, 'json'),
  };

  const assetHash = isProduction ? '.[contenthash]' : '';
  const publicPath = isProduction ? 'https://yialo.github.io/cs-reading-whitelist/' : '/';

  const baseConfig = {
    mode: 'none',

    context: pathEnum.SRC,

    entry: {
      'app': pathEnum.SRC,
    },

    module: {
      rules: [
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
          test: /\.pug$/,
          use: [
            {
              loader: 'pug-loader',
              options: {
                pretty: !isProduction,
                self: true,
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
      ...commonPlugins,
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

  if (isDevelopment) {
    const developmentConfigPart = require('./parts/development.js');
    return merge(baseConfig, developmentConfigPart);
  }

  if (isProduction) {
    const productionConfigPart = require('./parts/production.js');
    return merge(baseConfig, productionConfigPart);
  }

  if (isTest) {
    return {
      mode: 'none',

      entry: path.join(pathEnum.SRC, 'tests.js'),

      module: {
        rules: [
          {
            test: /\.jsx?$/,
            exclude: '/node_modules/',
          },
        ],
      },

      output: {
        filename: 'test_output.js',
        path: pathEnum.TEST,
      },

      plugins: commonPlugins,

      stats: {
        assets: false,
        entrypoints: false,
        modules: false,
      },
    };
  }

  return baseConfig;
};

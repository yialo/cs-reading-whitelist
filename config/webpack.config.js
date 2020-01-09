'use strict';

const path = require('path');

const cssnano = require('cssnano');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const CssOptimizationPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DefinePlugin, ProgressPlugin } = require('webpack');

module.exports = (env = {}) => {
  console.log('env:', env);

  const { purpose } = env;

  process.env.BABEL_ENV = purpose;
  process.env.NODE_ENV = purpose;

  const isDevelopment = (purpose === 'development');
  const isProduction = (purpose === 'production');
  const isTest = (purpose === 'test');

  const assetHash = isProduction ? '.[contenthash]' : '';
  const publicPath = isProduction ? 'https://yialo.github.io/cs-reading-whitelist/' : '/';

  const ROOT_PATH = path.resolve(__dirname, '../');
  const CONFIG_PATH = path.join(ROOT_PATH, 'config');
  const DIST_PATH = path.join(ROOT_PATH, isProduction ? 'docs' : 'dist');
  const SRC_PATH = path.join(ROOT_PATH, 'src');

  const pathEnum = {
    CONFIG: CONFIG_PATH,
    DIST: DIST_PATH,
    SRC: SRC_PATH,
    ROOT: ROOT_PATH,
    BABEL_CONFIG: path.join(CONFIG_PATH, 'babel.config.js'),
    ENV_FILE: path.join(ROOT_PATH, '.env'),
    FONTS_INPUT: path.join(SRC_PATH, 'static/fonts/'),
    FONTS_OUTPUT: path.join(DIST_PATH, 'assets/fonts'),
    TEST_INPUT: path.join(SRC_PATH, 'tests.js'),
    TEST_OUTPUT: path.join(ROOT_PATH, 'tests'),
    PUG_TEMPLATE_INPUT: path.join(SRC_PATH, 'pug/pages/index.pug'),
  };

  const aliasEnum = {
    '#components': path.join(SRC_PATH, 'js/components'),
    '#css': path.join(SRC_PATH, 'css'),
    '#js': path.join(SRC_PATH, 'js'),
    '#json': path.join(SRC_PATH, 'json'),
  };

  require('dotenv').config({ path: pathEnum.ENV_FILE });

  return {
    context: pathEnum.SRC,

    devServer: (() => {
      if (isDevelopment) {
        return {
          host: process.env.WDS_HOST,
          port: process.env.WDS_PORT,
          hot: true,
          overlay: true,
          writeToDisk: (filePath) => !filePath.match(/\.hot-update\.js(?:on|\.map)?$/),
        };
      }

      return {};
    })(),

    devtool: isDevelopment ? 'source-map' : false,

    entry: (() => {
      if (isTest) {
        return pathEnum.TEST_INPUT;
      }

      return {
        'app': pathEnum.SRC,
      };
    })(),

    mode: (isDevelopment || isProduction) ? purpose : 'none',

    module: {
      rules: (() => {
        if (isTest) {
          return [
            {
              test: /\.jsx?$/,
              exclude: '/node_modules/',
            },
          ];
        }

        return [
          {
            test: /\.jsx?$/,
            exclude: '/node_modules/',
            use: [
              {
                loader: 'babel-loader',
                options: {
                  configFile: pathEnum.BABEL_CONFIG,
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
              {
                loader: CssExtractPlugin.loader,
                options: {
                  hmr: isDevelopment,
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
        ];
      })(),
    },

    optimization: (() => {
      const output = {
        noEmitOnErrors: true,
      };

      if (!isTest) {
        output.splitChunks = {
          cacheGroups: {
            vendor: {
              name: 'vendors',
              test: /[\\/]node_modules[\\/]/,
              chunks: 'all',
              enforce: true,
            },
          },
          minChunks: 2,
        };
      }

      if (isProduction) {
        output.minimizer = [
          new TerserPlugin({
            extractComments: false,
            terserOptions: {
              output: {
                comments: false,
              },
            },
          }),
          new CssOptimizationPlugin({
            assetNameRegExp: /\.css$/,
            cssProcessor: cssnano,
            cssProcessorPluginOptions: {
              preset: [
                'default',
                {
                  discardComments: true,
                },
                {
                  normalizeCharset: {
                    add: true,
                  },
                },
              ],
            },
            canPrint: true,
          }),
        ];
      }

      return output;
    })(),

    output: (() => {
      if (isTest) {
        return {
          filename: 'test_output.js',
          path: pathEnum.TEST_OUTPUT,
        };
      }

      return {
        filename: `assets/js/[name]${assetHash}.js`,
        path: pathEnum.DIST,
        publicPath,
      };
    })(),

    plugins: (() => {
      const output = [
        new CaseSensitivePathsPlugin(),
        new CleanWebpackPlugin({
          cleanStaleWebpackAssets: false,
        }),
        new DefinePlugin({
          'publicPath': JSON.stringify(publicPath),
        }),
        new ProgressPlugin(),
      ];

      if (!isTest) {
        const mainPlugins = [
          new CssExtractPlugin({
            filename: `assets/css/[name]${assetHash}.css`,
          }),
          new CopyPlugin([
            {
              from: pathEnum.FONTS_INPUT,
              to: pathEnum.FONTS_OUTPUT,
            },
          ]),
          new HtmlPlugin({
            filename: 'index.html',
            template: pathEnum.PUG_TEMPLATE_INPUT,
          }),
          new ManifestPlugin({
            filter: (descriptor) => descriptor.isChunk,
          }),
        ];

        output.push(...mainPlugins);
      }

      return output;
    })(),

    resolve: {
      alias: aliasEnum,
    },

    stats: {
      assets: false,
      entrypoints: false,
      modules: false,
    },

    target: 'web',
  };
};

const path = require('path');

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DefinePlugin } = require('webpack');

module.exports = (env = {}) => {
  process.env.NODE_ENV = env.target;

  const isDevelopment = (env.target === 'development');
  const isProduction = (env.target === 'production');
  const isTest = (env.target === 'test');

  const ROOT_PATH = path.resolve(__dirname, '../');

  const pathEnum = {
    SRC: path.join(ROOT_PATH, 'src'),
    CONFIG: path.join(ROOT_PATH, 'config'),
    DIST: path.join(ROOT_PATH, isProduction ? 'docs' : 'dist'),
  };

  const aliasEnum = {
    '#components': path.join(pathEnum.SRC, 'js/components'),
    '#css': path.join(pathEnum.SRC, 'css'),
    '#js': path.join(pathEnum.SRC, 'js'),
    '#json': path.join(pathEnum.SRC, 'json'),
  };

  const assetHash = isProduction ? '.[contenthash]' : '';
  const publicPath = isProduction ? 'https://yialo.github.io/cs-reading-whitelist/' : '/';

  return {
    context: pathEnum.SRC,

    devServer: (() => {
      if (isDevelopment) {
        require('dotenv').config();

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
        return path.join(pathEnum.SRC, 'tests.js');
      }

      return {
        'app': pathEnum.SRC,
      };
    })(),

    mode: (() => {
      if (isDevelopment) {
        return 'development';
      }

      if (isProduction) {
        return 'production';
      }

      return 'none';
    })(),

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
      };

      if (isProduction) {
        const cssnano = require('cssnano');
        const CssOptimizationPlugin = require('optimize-css-assets-webpack-plugin');
        const TerserPlugin = require('terser-webpack-plugin');

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
          path: path.join(ROOT_PATH, 'tests'),
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
      ];

      if (!isTest) {
        const mainPlugins = [
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
        ];

        output.push(...mainPlugins);
      }

      return output;
    })(),

    resolve: {
      alias: aliasEnum,
    },

    stats: {
      assets: !isTest,
      entrypoints: false,
      modules: false,
    },

    target: 'web',
  };
};

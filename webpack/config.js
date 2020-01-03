const path = require('path');

const merge = require('webpack-merge');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DefinePlugin } = require('webpack');

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
                pretty: !isProduction,
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

  if (isDevelopment) {
    require('dotenv').config();

    const developmentConfig = merge(baseConfig, {
      mode: 'development',

      devServer: {
        host: process.env.WDS_HOST,
        port: process.env.WDS_PORT,
        overlay: true,
        writeToDisk: (filePath) => !filePath.match(/\.hot-update\.js(?:on|\.map)?$/),
      },

      devtool: 'source-map',
    });

    console.log(developmentConfig.resolve.alias);

    return developmentConfig;
  }

  if (isProduction) {
    const cssnano = require('cssnano');
    const CssOptimizationPlugin = require('optimize-css-assets-webpack-plugin');
    const TerserPlugin = require('terser-webpack-plugin');

    return merge(baseConfig, {
      mode: 'production',

      optimization: {
        minimizer: [
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
        ],
      },

      devtool: false,
    });
  }

  if (isTest) {
    return {
      mode: 'development',

      target: 'node',

      entry: path.join(pathEnum.SRC, 'tests.js'),

      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: '/node_modules/',
          },
        ],
      },

      output: {
        filename: 'test_output.js',
        path: pathEnum.TEST,
      },

      plugins: [
        new CaseSensitivePathsPlugin(),
        new CleanWebpackPlugin({
          cleanStaleWebpackAssets: false,
        }),
      ],

      devtool: false,

      stats: {
        assets: false,
        entrypoints: false,
        modules: false,
      },
    };
  }

  return baseConfig;
};

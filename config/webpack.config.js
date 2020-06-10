'use strict';

const path = require('path');

const cssnano = require('cssnano');
const dotEnv = require('dotenv');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const CssOptimizationPlugin = require('optimize-css-assets-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin');
const { DefinePlugin, ProgressPlugin } = require('webpack');

module.exports = (env = {}) => {
  const { analyze: needAnalyze, purpose } = env;

  process.env.BABEL_ENV = purpose;
  process.env.NODE_ENV = purpose;

  const isDevelopment = (purpose === 'development');
  const isProduction = (purpose === 'production');

  const assetHash = isProduction ? '.[contenthash]' : '';

  const rootPath = path.resolve(__dirname, '../');

  const PATH = {
    BABEL_CONFIG: path.join(rootPath, 'config/babel.config.js'),
    CONFIG: path.join(rootPath, 'config'),
    DIST: path.join(rootPath, 'dist'),
    ENTRY: path.join(rootPath, 'src/index.ts'),
    LOCAL_ENV_FILE: path.join(rootPath, '.env.local'),
    PUG_TEMPLATE: path.join(rootPath, 'src/pug/pages/index.pug'),
    RESPONSE_INPUT: path.join(rootPath, 'src/static'),
    RESPONSE_OUTPUT: path.join(rootPath, 'dist/response'),
    SRC: path.join(rootPath, 'src'),
  };

  const Alias = {
    '@': PATH.SRC,
    'styles$': path.join(PATH.SRC, 'css/index.css'),
  };

  dotEnv.config({ path: PATH.LOCAL_ENV_FILE });
  dotEnv.config({ path: path.join(rootPath, `.env.${purpose}`) });

  return {
    context: PATH.SRC,

    devServer: isDevelopment ? {
      host: process.env.WDS_HOST || '127.0.0.1',
      port: process.env.WDS_PORT || 8081,
      hot: false,
      inline: true,
      overlay: true,
      writeToDisk: (filePath) => !filePath.match(/\.hot-update\.js(?:on|\.map)?$/),
    } : {},

    devtool: isDevelopment ? 'eval-source-map' : false,

    entry: {
      app: PATH.ENTRY,
    },

    mode: (isDevelopment || isProduction) ? purpose : 'none',

    module: {
      rules: (() => {
        const scriptLoaderRule = {
          test: /\.(?:j|t)sx?$/,
          loader: 'babel-loader',
          options: {
            configFile: PATH.BABEL_CONFIG,
            cacheDirectory: true,
          },
        };

        const templateLoaderRule = {
          test: /\.pug$/,
          loader: 'pug-loader',
          options: {
            pretty: !isProduction,
          },
        };

        const styleLoaderRule = {
          test: /\.css$/,
          use: [
            (isProduction ? CssExtractPlugin.loader : 'style-loader'),
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
                  ctx: {
                    pathAliasEnum: Alias,
                  },
                  path: PATH.CONFIG,
                },
              },
            },
          ],
        };

        const getFileLoaderRule = ({ testRegexp, outputSubdir }) => ({
          test: testRegexp,
          loader: 'file-loader',
          options: {
            name: `[name]${assetHash}.[ext]`,
            outputPath: `assets/${outputSubdir}`,
          },
        });

        return [
          scriptLoaderRule,
          templateLoaderRule,
          styleLoaderRule,
          getFileLoaderRule({
            testRegexp: /\.(jpe?g|png|svg)$/,
            outputSubdir: 'img',
          }),
          getFileLoaderRule({
            testRegexp: /\.ico$/,
            outputSubdir: 'favicons',
          }),
          getFileLoaderRule({
            testRegexp: /\.woff2?$/,
            outputSubdir: 'fonts',
          }),
        ];
      })(),
    },

    optimization: (() => {
      const optimizationConfig = {
        noEmitOnErrors: true,
        splitChunks: {
          chunks: 'all',
          minChunks: 2,
          cacheGroups: {
            default: false,
            vendor: {
              name: 'vendors',
              test: /[\\/]node_modules[\\/]/,
              enforce: true,
            },
          },
        },
      };
      if (isProduction) {
        optimizationConfig.minimizer = [
          new TerserPlugin({
            extractComments: false,
            terserOptions: {
              compress: {
                drop_console: true,
                drop_debugger: true,
              },
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
      return optimizationConfig;
    })(),

    output: {
      filename: `assets/js/[name]${assetHash}.js`,
      path: PATH.DIST,
      publicPath: process.env.PUBLIC_PATH,
    },

    plugins: (() => {
      const pluginList = [
        new CaseSensitivePathsPlugin(),
        new CleanPlugin({
          cleanStaleWebpackAssets: false,
        }),
        new ProgressPlugin(),
        new CssExtractPlugin({
          filename: `assets/css/[name]${assetHash}.css`,
        }),
        new HtmlPlugin({
          filename: 'index.html',
          template: PATH.PUG_TEMPLATE,
        }),
        new CopyPlugin({
          patterns: [
            {
              from: PATH.RESPONSE_INPUT,
              to: PATH.RESPONSE_OUTPUT,
              transformPath: (targetPath) => {
                if (path.extname(targetPath) === '.json') {
                  return targetPath;
                }
              },
            },
          ],
        }),
        new DefinePlugin({
          'process.env.PUBLIC_PATH': JSON.stringify(process.env.PUBLIC_PATH),
        }),
      ];
      if (needAnalyze) {
        pluginList.push(new BundleAnalyzerPlugin({
          analyzerPort: 8889,
        }));
      }
      return pluginList;
    })(),

    resolve: {
      alias: Alias,
    },

    stats: (() => {
      const statsConfig = {
        colors: true,
      };
      if (isDevelopment) {
        Object.assign(statsConfig, {
          assets: false,
          entrypoints: false,
          modules: false,
        });
      }
      return statsConfig;
    })(),

    target: 'web',
  };
};

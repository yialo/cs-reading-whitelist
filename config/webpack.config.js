'use strict';

const path = require('path');

const autoprefixer = require('autoprefixer');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const cssnano = require('cssnano');
const dotEnv = require('dotenv');
const HtmlPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const CssOptimizationPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { DefinePlugin, ProgressPlugin } = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = (env = {}) => {
  const { analyze: needAnalyze, target } = env;

  process.env.BABEL_ENV = target;
  process.env.NODE_ENV = target;

  const isDevelopment = (target === 'development');
  const isProduction = (target === 'production');

  const assetHash = isProduction ? '.[contenthash]' : '';

  const rootPath = path.resolve(__dirname, '../');

  const PATH = {
    SRC: path.join(rootPath, 'src'),
    DIST: path.join(rootPath, 'dist'),
    CONFIG: path.join(rootPath, 'config'),
  };

  const Alias = {
    '@': PATH.SRC,
    'scss': path.join(PATH.SRC, 'scss'),
    'ts': path.join(PATH.SRC, 'ts'),
  };

  dotEnv.config({ path: path.join(rootPath, '.env.local') });
  dotEnv.config({ path: path.join(rootPath, `.env.${target}`) });

  return {
    context: PATH.SRC,

    devServer: isDevelopment ? {
      historyApiFallback: true,
      host: process.env.WDS_HOST || '127.0.0.1',
      port: process.env.WDS_PORT || 8081,
      hot: false,
      inline: true,
      overlay: true,
      writeToDisk: (filePath) => !filePath.match(/\.hot-update\.js(?:on|\.map)?$/),
    } : {},

    devtool: isDevelopment ? 'eval-source-map' : false,

    entry: {
      app: path.join(PATH.SRC, 'index.ts'),
    },

    mode: (isDevelopment || isProduction) ? target : 'none',

    module: {
      rules: (() => {
        const scriptLoaderRule = {
          test: /\.(?:j|t)sx?$/,
          loader: 'babel-loader',
          options: {
            configFile: path.join(PATH.CONFIG, 'babel.config.js'),
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
          test: /\.s?css$/,
          use: [
            (isProduction ? CssExtractPlugin.loader : 'style-loader'),
            {
              loader: 'css-loader',
              options: {
                modules: {
                  exportGlobals: true,
                  exportLocalsConvention: 'asIs',
                  exportOnlyLocals: false,
                  localIdentName: isProduction ? '[hash:base64]' : '[path][name]__[local]',
                },
                esModule: true,
                importLoaders: 2,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  autoprefixer(),
                ],
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  fiber: false,
                },
                sourceMap: true,
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
          template: path.join(PATH.SRC, 'pug/pages/index.pug'),
        }),
        new CopyPlugin({
          patterns: [
            {
              from: path.join(PATH.SRC, 'static'),
              to: path.join(PATH.DIST, 'response'),
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
      extensions: [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
      ],
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

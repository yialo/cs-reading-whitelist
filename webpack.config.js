'use strict';

const path = require('path');

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const dotEnv = require('dotenv');
const TsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { DefinePlugin, ProgressPlugin } = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const PATH = {
  SRC: path.join(__dirname, 'src'),
  DIST: path.join(__dirname, 'dist'),
  STATIC: path.join(__dirname, 'static'),
  CSS_MODULES_IDENT_CONTEXT: path.join(__dirname, 'src/ts'),
};

const ALIAS = {
  '@': PATH.SRC,
  'common': path.join(PATH.SRC, 'ts/common'),
  'domains': path.join(PATH.SRC, 'ts/domains'),
  'react-dom': '@hot-loader/react-dom',
  'scss': path.join(PATH.SRC, 'scss'),
  'ts': path.join(PATH.SRC, 'ts'),
};

const SERVER_DEFAULTS = {
  HOST: '127.0.0.1',
  PORT: 8081,
};

module.exports = (env = {}) => {
  const {
    analyze: needAnalyze,
    target,
    tscheck: needTypeCheck,
    write,
  } = env;

  process.env.BABEL_ENV = target;
  process.env.NODE_ENV = target;

  const isDevelopment = (target === 'development');
  const isProduction = (target === 'production');

  const assetHash = isProduction ? '.[contenthash]' : '';

  dotEnv.config({ path: path.join(__dirname, '.env.local') });
  dotEnv.config({ path: path.join(__dirname, `.env.${target}`) });

  const stats = {
    all: isDevelopment ? false : undefined,
    colors: true,
    errors: true,
    errorsCount: true,
    warnings: true,
    warningsCount: true,
  };

  return {
    context: PATH.SRC,

    devServer: isDevelopment ? {
      contentBase: PATH.STATIC,
      historyApiFallback: true,
      host: process.env.WDS_HOST || SERVER_DEFAULTS.HOST,
      port: process.env.WDS_PORT || SERVER_DEFAULTS.PORT,
      publicPath: process.env.PUBLIC_PATH,
      stats,
      hot: true,
      inline: true,
      overlay: true,
      writeToDisk: write
        ? (filePath) => !filePath.match(/\.hot-update\.js(?:on|\.map)?$/)
        : false,
    } : {},

    devtool: isDevelopment ? 'eval-source-map' : false,

    entry: {
      app: ['react-hot-loader/patch', path.join(PATH.SRC, 'index.ts')],
    },

    mode: (isDevelopment || isProduction) ? target : 'none',

    module: {
      rules: (() => {
        const scriptLoaderRule = {
          test: /\.(?:j|t)sx?$/,
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        };

        const templateLoaderRule = {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: isProduction,
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
                  localIdentContext: PATH.CSS_MODULES_IDENT_CONTEXT,
                  localIdentName: isProduction ? '[hash:base64]' : '[path][local]',
                },
                esModule: true,
                importLoaders: 2,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: ['autoprefixer'],
                },
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
        chunkIds: isProduction ? 'deterministic' : 'named',
        emitOnErrors: false,
        runtimeChunk: 'single',
        splitChunks: {
          chunks: 'all',
          minChunks: 2,
          cacheGroups: {
            default: false,
            defaultVendors: {
              name: 'vendors',
              test: /[\\/]node_modules[\\/]/,
              priority: 0,
              enforce: true,
            },
            reactDom: {
              name: 'react-dom',
              test: /[\\/]node_modules[\\/]@hot-loader[\\/]react-dom[\\/]/,
              priority: 1,
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

          new CssMinimizerPlugin({
            test: /\.css$/,
            minimizerOptions: {
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

    performance: {
      maxEntrypointSize: 400000,
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
          template: path.join(PATH.SRC, 'html/index.html'),
          favicon: path.join(PATH.SRC, 'favicons/favicon.ico'),
        }),
        new CopyPlugin({
          patterns: [
            {
              from: PATH.STATIC,
              to: path.join(PATH.DIST, 'response'),
            },
          ],
        }),
        new DefinePlugin({
          '__GLOBAL_ENV_VARIABLE__MODE__': JSON.stringify(process.env.NODE_ENV),
          '__GLOBAL_ENV_VARIABLE__PUBLIC_PATH__': JSON.stringify(process.env.PUBLIC_PATH),
        }),
      ];

      if (needAnalyze) {
        pluginList.push(new BundleAnalyzerPlugin({
          analyzerPort: 8889,
        }));
      }

      if (needTypeCheck) {
        pluginList.push(new TsCheckerWebpackPlugin({
          typescript: {
            configFile: path.join(__dirname, 'tsconfig.json'),
            diagnosticOptions: {
              semantic: true,
              syntactic: true,
            },
          },
        }));
      }
      return pluginList;
    })(),

    resolve: {
      alias: ALIAS,
      extensions: [
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
      ],
    },

    stats,

    target: 'web',
  };
};

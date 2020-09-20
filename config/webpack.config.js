'use strict';

const path = require('path');

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const { CleanWebpackPlugin: CleanPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const cssnano = require('cssnano');
const dotEnv = require('dotenv');
const TsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const CssExtractPlugin = require('mini-css-extract-plugin');
const CssOptimizationPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { DefinePlugin, ProgressPlugin } = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const ROOT_PATH = path.resolve(__dirname, '../');

const PATH = {
  SRC: path.join(ROOT_PATH, 'src'),
  DIST: path.join(ROOT_PATH, 'dist'),
  CONFIG: path.join(ROOT_PATH, 'config'),
  STATIC: path.join(ROOT_PATH, 'static'),
};

const ALIAS = {
  '@': PATH.SRC,
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

  dotEnv.config({ path: path.join(ROOT_PATH, '.env.local') });
  dotEnv.config({ path: path.join(ROOT_PATH, `.env.${target}`) });

  return {
    context: PATH.SRC,

    devServer: isDevelopment ? {
      contentBase: PATH.STATIC,
      historyApiFallback: true,
      host: process.env.WDS_HOST || SERVER_DEFAULTS.HOST,
      port: process.env.WDS_PORT || SERVER_DEFAULTS.PORT,
      hot: true,
      inline: true,
      open: true,
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
        noEmitOnErrors: true,
        splitChunks: {
          chunks: 'all',
          minChunks: 2,
          cacheGroups: {
            default: false,
            reactDom: {
              name: 'react-dom',
              test: /[\\/]node_modules[\\/]@hot-loader[\\/]react-dom[\\/]/,
              priority: 1,
              enforce: true,
            },
            vendor: {
              name: 'vendors',
              test: /[\\/]node_modules[\\/]/,
              priority: 0,
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
          template: path.join(PATH.SRC, 'pug/index.pug'),
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
          'process.env.PUBLIC_PATH': JSON.stringify(process.env.PUBLIC_PATH),
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
            configFile: path.join(ROOT_PATH, 'tsconfig.json'),
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

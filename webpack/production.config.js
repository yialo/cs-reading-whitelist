const cssnano = require('cssnano');
const merge = require('webpack-merge');
const CssOptimizationPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const baseConfig = require('./base.config');

module.exports = merge(baseConfig, {
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

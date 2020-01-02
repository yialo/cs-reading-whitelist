const merge = require('webpack-merge');
const cssnano = require('cssnano');
const CssOptimizePlugin = require('optimize-css-assets-webpack-plugin');
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
      new CssOptimizePlugin({
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

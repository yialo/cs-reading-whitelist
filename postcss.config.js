module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-advanced-variables': {},
    'postcss-color-function': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'custom-media-queries': true,
        'custom-properties': false,
        'custom-selectors': true,
        'matches-pseudo-class': true,
        'nesting-rules': true,
        'not-pseudo-class': true,
      },
    },
    './src/postcss/font-face-set': {},
  },
};

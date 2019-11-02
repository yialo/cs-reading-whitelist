module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-advanced-variables': {},
    'postcss-color-function': {},
    'postcss-preset-env': {
      stage: 3,
      features: {
        'custom-media-queries': true,
        'custom-selectors': true,
        'matches-pseudo-class': true,
        'nesting-rules': true,
        'not-pseudo-class': true,
      },
    },
    'cssnano': (
      process.env.NODE_ENV === 'production'
        ? {
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
        }
        : false
    ),
  },
};

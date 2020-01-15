'use strict';

module.exports = {
  ignore: ['../**/node_modules/**'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        helpers: true,
      },
    ],
  ],
  presets: [
    [
      '@babel/preset-env', {
        corejs: 3,
        useBuiltIns: 'usage',
        loose: false,
        modules: false,
      },
    ],
    [
      '@babel/preset-react',
      {
        development: (process.env.BABEL_ENV === 'development'),
        throwIfNamespace: true,
        useBuiltIns: false,
        useSpread: false,
      },
    ],
  ],
};

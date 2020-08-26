'use strict';

module.exports = {
  ignore: ['../node_modules/**'],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
        helpers: true,
      },
    ],
    'react-hot-loader/babel',
  ],
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: 3,
        loose: false,
        modules: (process.env.BABEL_ENV === 'test' ? 'auto' : false),
        useBuiltIns: 'usage',
      },
    ],
    [
      '@babel/preset-react',
      {
        development: (process.env.BABEL_ENV === 'development'),
        pragma: 'React.createElement',
        pragmaFrag: 'React.Fragment',
        throwIfNamespace: true,
        useBuiltIns: false,
        useSpread: false,
      },
    ],
    [
      '@babel/preset-typescript',
      {
        onlyRemoveTypeImports: true,
      },
    ],
  ],
};

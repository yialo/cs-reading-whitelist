'use strict';

module.exports = {
  ignore: ['./node_modules/**'],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: 3,
      },
    ],
    process.env.BABEL_ENV === 'development' && 'react-refresh/babel',
  ].filter(Boolean),
  presets: [
    [
      '@babel/preset-env',
      {
        corejs: '3.30',
        modules: process.env.BABEL_ENV === 'test' ? 'auto' : false,
        useBuiltIns: 'usage',
      },
    ],
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
        development: process.env.BABEL_ENV === 'development',
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

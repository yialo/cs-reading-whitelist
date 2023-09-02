'use strict';

const path = require('path');

process.env.BABEL_ENV = 'test';

module.exports = {
  roots: ['<rootDir>/src'],
  globals: {
    __GLOBAL_ENV_VARIABLE__PUBLIC_PATH__: true,
  },
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
  },
  transform: {
    '^.+\\.[jt]sx?$': [
      'babel-jest',
      {
        configFile: path.join(__dirname, 'babel.config.cjs'),
      },
    ],
  },
};

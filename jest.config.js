'use strict';

const path = require('path');

process.env.BABEL_ENV = 'test';

module.exports = {
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.[jt]sx?$': [
      'babel-jest',
      {
        configFile: path.join(__dirname, 'babel.config.js'),
      },
    ],
  },
};

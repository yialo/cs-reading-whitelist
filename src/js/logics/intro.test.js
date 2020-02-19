/* eslint-disable */
'use strict';

const { sum } = require('./intro.js');

test('Should return sum of two values', () => {
  expect(sum(1, 3)).toBe(4);
});

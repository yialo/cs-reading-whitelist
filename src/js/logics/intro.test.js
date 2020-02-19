/* eslint-disable */
'use strict';

const { sum } = require('./intro.js');

test('Should return sum of two values', () => {
  expect(sum(1, 3)).toBe(4);
});


test('Should return value correctly compared with another', () => {
  expect(sum(2, 3)).toBeGreaterThan(4);
  expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
  expect(sum(2, 3)).toBeLessThan(7);
  expect(sum(2, 3)).toBeLessThanOrEqual(5);
});

test('Should sum float values correctly', () => {
  expect(sum(0.5, 0.25)).toBe(0.75);
  expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});

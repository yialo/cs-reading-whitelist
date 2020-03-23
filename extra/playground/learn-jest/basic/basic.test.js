/* eslint-disable strict, import/no-commonjs */
'use strict';

const { sum, nativeNull } = require('./basic.js');

describe('Sums two numeric values', () => {
  test('should return sum of two values', () => {
    expect(sum(1, 3)).toBe(4);
  });


  test('should return value correctly compared with another', () => {
    expect(sum(2, 3)).toBeGreaterThan(4);
    expect(sum(2, 3)).toBeGreaterThanOrEqual(5);
    expect(sum(2, 3)).toBeLessThan(7);
    expect(sum(2, 3)).toBeLessThanOrEqual(5);
  });

  test('should sum float values correctly', () => {
    expect(sum(0.5, 0.25)).toBe(0.75);
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
  });
});

describe('Returns null', () => {
  test('should return null value', () => {
    expect(nativeNull()).toBe(null);
    expect(nativeNull()).toBeNull();
    expect(nativeNull()).toBeFalsy();
    expect(nativeNull()).toBeDefined();
    expect(nativeNull()).not.toBeTruthy();
    expect(nativeNull()).not.toBeUndefined();
  });
});

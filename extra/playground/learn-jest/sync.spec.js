/* eslint-disable strict, import/no-commonjs */
'use strict';

const Lodash = require('./sync.js');

let _;

describe('Lodash', () => {
  beforeEach(() => {
    _ = new Lodash();
  });

  afterEach(() => {
    _ = undefined;
  });

  describe('Lodash: compact', () => {
    let array;

    beforeEach(() => {
      array = [false, 32, 0, true, '', null, undefined, Number.NaN, 'hello'];
    });

    test('should be defined', () => {
      expect(_.compact).toBeDefined();
    });

    test('should remove falsy values from array', () => {
      const result = [32, true, 'hello'];
      expect(_.compact(array)).toEqual(result);
    });

    test('should not contain falsy values', () => {
      expect(_.compact(array)).not.toContain(false);
      expect(_.compact(array)).not.toContain(0);
      expect(_.compact(array)).not.toContain('');
      expect(_.compact(array)).not.toContain(null);
      expect(_.compact(array)).not.toContain(undefined);
      expect(_.compact(array)).not.toContain(Number.NaN);
    });
  });

  describe('Lodash: groupBy', () => {
    test('should be defined', () => {
      expect(_.groupBy).toBeDefined();
    });

    test.each([
      [
        [2.2, 3.5, 4.7, 3.1],
        Math.floor,
        {
          2: [2.2],
          3: [3.5, 3.1],
          4: [4.7],
        },
      ],
      [
        ['-1.52', '0.55', '-3', '0.55'],
        Number.parseFloat,
        {
          '-1.52': ['-1.52'],
          '0.55': ['0.55', '0.55'],
          '-3': ['-3'],
        },
      ],
    ])('should group items of array %O by %O', (array, iteratee, result) => {
      expect(_.groupBy(array, iteratee)).toEqual(result);
    });

    test('should group array by repeating items', () => {
      const array = [3, 5, 2, 4, 2, 3];
      const result = {
        2: [2, 2],
        3: [3, 3],
        4: [4],
        5: [5],
      };
      expect(_.groupBy(array)).toEqual(result);
    });
  });
});

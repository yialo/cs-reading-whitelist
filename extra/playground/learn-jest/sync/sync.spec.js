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

    test('should NOT contain falsy values', () => {
      [false, 0, '', null, undefined, Number.NaN].forEach((falsyValue) => {
        expect(_.compact(array)).not.toContain(falsyValue);
      });
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
        [16, -1.52, 0.55, 0, -3, 0.55],
        Number.isInteger,
        {
          'true': [16, 0, -3],
          'false': [-1.52, 0.55, 0.55],
        },
      ],
      [
        ['one', 'two', 'three', 'four'],
        'length',
        {
          3: ['one', 'two'],
          4: ['four'],
          5: ['three'],
        },
      ],
    ])('should group items of array %O passed through %O', (array, iteratee, result) => {
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

    test('should throw an error if type of iteratee distinct from Function or String', () => {
      const array = [1, 2, 3, 4, 5];
      const getBadResult = () => {
        _.groupBy(array, 54);
      };
      expect(getBadResult).toThrow();
    });

    test('should throw an error if iteratee is of String type but array items have no properties with such key', () => {
      const array = [1, 2, 3, 4, 5];
      const getBadResult = () => {
        _.groupBy(array, 'length');
      };
      expect(getBadResult).toThrow();
    });

    test('should NOT return an array', () => {
      expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
    });
  });
});
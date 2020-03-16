/* eslint-disable strict, import/no-commonjs */
'use strict';

const map = require('./mock.js');

describe('Map function', () => {
  let array;
  let fn;

  beforeEach(() => {
    array = [1, 1, 2, 3, 5, 8];
    fn = jest.fn((x) => x ** 2);
    map(array, fn);
  });

  test('should call callback', () => {
    expect(fn).toHaveBeenCalled();
  });

  test('should call callback 6 times', () => {
    expect(fn).toHaveBeenCalledTimes(6);
    expect(fn.mock.calls.length).toBe(6);
  });

  test('should exponentiate to 2 each array element', () => {
    expect(fn.mock.results[0].value).toBe(1);
    expect(fn.mock.results[1].value).toBe(1);
    expect(fn.mock.results[2].value).toBe(4);
    expect(fn.mock.results[3].value).toBe(9);
    expect(fn.mock.results[4].value).toBe(25);
    expect(fn.mock.results[5].value).toBe(64);
  });

  test('should fn to work', () => {
    fn
      .mockReturnValueOnce(100)
      .mockReturnValueOnce(200)
      .mockReturnValue('Bob');

    expect(fn()).toBe(100);
    expect(fn()).toBe(200);
    expect(fn()).toBe('Bob');
    expect(fn()).toBe('Bob');
  });
});

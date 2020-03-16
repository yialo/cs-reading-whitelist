/* eslint-disable strict, import/no-commonjs, promise/catch-or-return */
'use strict';

const Ajax = require('./async.js');

describe('Ajax: echo', () => {
  const testString = 'some data';

  test('should return value with promise', () => {
    return Ajax.echo(testString).then((data) => {
      expect(data).toBe(testString);
    });
  });

  test('should await value in async function', async () => {
    await expect(Ajax.echo(testString)).resolves.toBe(testString);
  });

  test('should return rejected promise', () => {
    return expect(Ajax.echo()).rejects.toThrow('Promise rejected');
  });

  test('should throw an error in async function', async () => {
    try {
      await Ajax.echo(testString);
    } catch (err) {
      expect(err.message).toBe('Promise rejected');
    }
  });
});

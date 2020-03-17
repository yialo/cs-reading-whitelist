/* eslint-disable strict, import/no-commonjs, promise/catch-or-return */
'use strict';

jest.mock('axios');

const axios = require('axios');
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

describe('Ajax: get', () => {
  let response;
  let todoList;

  beforeEach(() => {
    todoList = [
      {
        id: 1,
        title: 'Todo #1',
        isComplete: false,
      },
    ];
    response = {
      data: todoList,
    };
  });

  test('should return data from backend', () => {
    axios.get.mockReturnValue(response);
    return expect(Ajax.get()).resolves.toEqual(todoList);
  });
});

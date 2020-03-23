/* eslint-env node */
/* eslint-disable strict, import/no-commonjs */
'use strict';

const axios = require('axios');

module.exports = class Ajax {
  static echo(data) {
    return new Promise((resolve, reject) => {
      global.setTimeout(() => {
        if (data) {
          resolve(data);
        } else {
          reject(new Error('Promise rejected'));
        }
      }, 100);
    });
  }

  static async get() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      return response.data;
    } catch (err) {
      console.warn(err.message);
    }
  }
};

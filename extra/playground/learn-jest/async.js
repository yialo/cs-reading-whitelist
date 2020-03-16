/* eslint-env node */
/* eslint-disable strict, import/no-commonjs */
'use strict';

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
};

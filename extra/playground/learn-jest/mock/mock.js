/* eslint-env node */
/* eslint-disable strict, import/no-commonjs */
'use strict';

module.exports = function map(array, callback, thisArg) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    result.push(callback.call(thisArg, item, i, array));
  }
  return result;
};

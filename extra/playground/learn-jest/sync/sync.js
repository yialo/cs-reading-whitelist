/* eslint-env node */
/* eslint-disable strict, import/no-commonjs */
'use strict';

module.exports = class Lodash {
  compact(array) {
    return array.filter((val) => Boolean(val));
  }

  groupBy(array, prop) {
    return array.reduce((acc, it) => {
      let key;
      if (prop === undefined) {
        key = it;
      } else if (typeof prop === 'function') {
        key = prop(it);
      } else if (typeof prop === 'string' && it[prop] !== undefined) {
        key = it[prop];
      } else {
        throw new Error('Unexpected iteratee');
      }

      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(it);
      return acc;
    }, {});
  }
};

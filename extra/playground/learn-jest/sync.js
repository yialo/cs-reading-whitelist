/* eslint-env node */
/* eslint-disable strict, import/no-commonjs */
'use strict';

module.exports = class Lodash {
  compact(array) {
    return array.filter((val) => Boolean(val));
  }

  groupBy(array, prop) {
    const result = {};

    array.forEach((it) => {
      const key = prop ? prop(it) : it;
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(it);
    });

    return result;
  }
};

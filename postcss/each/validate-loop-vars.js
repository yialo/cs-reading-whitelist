'use strict';

const dataStructureArgAmountMap = new Map([
  ['dict', { min: 2, max: 3 }],
  ['list', { min: 1, max: 2 }],
]);

module.exports = (loopVars, type) => {
  const { length } = loopVars;
  const { min, max } = dataStructureArgAmountMap.get(type);

  if (length < min || length > max) {
    throw new Error(`Unexpected amount of iteration variables (${length}) for data structure of type ${type}`);
  }
};

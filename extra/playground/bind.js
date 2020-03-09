/* eslint-env node */
/* eslint-disable prefer-rest-params, strict */
'use strict';

const person = {
  name: 'Bob',
};

function simple(tel, email) {
  console.log(`Name: Basil, tel: ${tel}, email: ${email}`);
}

function info(tel, email) {
  console.log(`Name: ${this.name}, tel: ${tel}, email: ${email}`);
}

function bind(fn, ctx, ...boundArgs) {
  return function (...args) {
    const allArgs = [...boundArgs, ...args];
    if (ctx === null || typeof ctx !== 'object') {
      return fn(...allArgs);
    }
    const fieldId = Symbol('fieldId');
    ctx[fieldId] = fn;
    const result = ctx[fieldId](...allArgs);
    delete ctx[fieldId];
    return result;
  };
}

console.group('ES6 bind:');
bind(simple, null)('321475', 'basil@gmail.com');
bind(info, person)('123456', 'bob@gmail.com');
bind(info, person, '123456')('bob@gmail.com');
bind(info, person, '123456', 'bob@gmail.com')();
console.log(person);
console.groupEnd();

function _legacyBind_(fn, ctx) {
  const boundArgs = Array.prototype.slice.call(arguments, 2);
  return function () {
    const args = Array.prototype.slice.call(arguments);
    const allArgs = boundArgs.concat(args);
    return fn.apply(ctx, allArgs);
  };
}

console.group('Legacy bind:');
_legacyBind_(simple, null)('321475', 'basil@gmail.com');
_legacyBind_(info, person)('123456', 'bob@gmail.com');
_legacyBind_(info, person, '123456')('bob@gmail.com');
_legacyBind_(info, person, '123456', 'bob@gmail.com')();
console.groupEnd();

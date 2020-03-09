/* eslint-env node */
/* eslint-disable strict */
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

bind(simple, null)('123456', 'bob@gmail.com');
bind(info, person)('123456', 'bob@gmail.com');
bind(info, person, '123456')('bob@gmail.com');
bind(info, person, '123456', 'bob@gmail.com')();
console.log(person);

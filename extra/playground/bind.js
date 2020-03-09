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
    if (ctx === null || typeof ctx !== 'object') {
      return fn(...boundArgs, ...args);
    }
    const field = Symbol('field');
    ctx[field] = fn;
    return ctx[field](...boundArgs, ...args);
  };
}

bind(simple, null)('123456', 'bob@gmail.com');
bind(info, person)('123456', 'bob@gmail.com');
bind(info, person, '123456')('bob@gmail.com');
bind(info, person, '123456', 'bob@gmail.com')();

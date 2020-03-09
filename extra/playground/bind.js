/* eslint-disable strict */
'use strict';

const person = {
  name: 'Bob',
};

function info(tel, email) {
  console.log(`Name: ${this.name}, tel: ${tel}, email: ${email}`);
}

function bind(fn, ctx, ...boundArgs) {
  return function (...args) {
    const field = Symbol('field');
    ctx[field] = fn;
    return ctx[field](...boundArgs, ...args);
  };
}

bind(info, person)('123456', 'bob@gmail.com');
bind(info, person, '123456')('bob@gmail.com');
bind(info, person, '123456', 'bob@gmail.com')();

'use strict';

const person = {
  name: 'Bob',
};

function info(tel, email) {
  console.log(`Name: ${this.name}, tel: ${tel}, email: ${email}`);
}

function bind(fn, ctx, ...args) {
  return fn.bind(ctx, ...args);
}

bind(info, person)('123456', 'bob@gmail.com');
bind(info, person, '123456')('bob@gmail.com');
bind(info, person, '123456', 'bob@gmail.com')();

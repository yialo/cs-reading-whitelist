/* eslint-env node */
/* eslint-disable prefer-rest-params, strict */
'use strict';

const person = {
  name: 'Bob',
  age: 25,
  isHired: true,
};

function showSimpleInfo(tel, email) {
  console.log(`Name: Basil, tel: ${tel}, email: ${email}`);
}

function showComplexInfo(tel, email) {
  console.log(`Name: ${this.name}, tel: ${tel}, email: ${email}`);
}

function call(fn, ctx, ...args) {
  if (ctx === null || typeof ctx !== 'object') {
    return fn(...args);
  }
  const fieldId = Symbol('fieldId');
  ctx[fieldId] = fn;
  const result = ctx[fieldId](...args);
  delete ctx[fieldId];
  return result;
}

console.group('call:');
call(showSimpleInfo, null, '321475', 'basil@gmail.com');
call(showComplexInfo, person, '123456', 'bob@gmail.com');
console.log(person);
console.groupEnd();

function apply(fn, ctx, argList) {
  if (ctx === null || typeof ctx !== 'object') {
    return fn(...argList);
  }
  const fieldId = Symbol('fieldId');
  ctx[fieldId] = fn;
  const result = ctx[fieldId](...argList);
  delete ctx[fieldId];
  return result;
}

console.group('apply:');
apply(showSimpleInfo, null, ['321475', 'basil@gmail.com']);
apply(showComplexInfo, person, ['123456', 'bob@gmail.com']);
console.log(person);
console.groupEnd();

function bindWithCall(fn, ctx, ...boundArgs) {
  return function (...args) {
    return call(fn, ctx, ...boundArgs, ...args);
  };
}

console.group('bind with call:');
bindWithCall(showSimpleInfo, null)('321475', 'basil@gmail.com');
bindWithCall(showComplexInfo, person)('123456', 'bob@gmail.com');
bindWithCall(showComplexInfo, person, '123456')('bob@gmail.com');
bindWithCall(showComplexInfo, person, '123456', 'bob@gmail.com')();
console.log(person);
console.groupEnd();

function bindWithApply(fn, ctx, ...boundArgs) {
  return function (...args) {
    return apply(fn, ctx, [...boundArgs, ...args]);
  };
}

console.group('bind with apply:');
bindWithApply(showSimpleInfo, null)('321475', 'basil@gmail.com');
bindWithApply(showComplexInfo, person)('123456', 'bob@gmail.com');
bindWithApply(showComplexInfo, person, '123456')('bob@gmail.com');
bindWithApply(showComplexInfo, person, '123456', 'bob@gmail.com')();
console.log(person);
console.groupEnd();

function _legacyBind_(fn, ctx) {
  const getArgs = function (args, leftShift) {
    return Array.prototype.slice.call(args, leftShift);
  };
  const boundArgs = getArgs(arguments, 2);
  return function () {
    const args = getArgs(arguments);
    const allArgs = boundArgs.concat(args);
    return fn.apply(ctx, allArgs);
  };
}

console.group('Legacy bind:');
_legacyBind_(showSimpleInfo, null)('321475', 'basil@gmail.com');
_legacyBind_(showComplexInfo, person)('123456', 'bob@gmail.com');
_legacyBind_(showComplexInfo, person, '123456')('bob@gmail.com');
_legacyBind_(showComplexInfo, person, '123456', 'bob@gmail.com')();
console.groupEnd();

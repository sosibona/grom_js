'use strict'

let resultOfOpertaion = 0;

export function add(number) {
  return resultOfOpertaion += number;
}

export function decrease(number) {
  return resultOfOpertaion -= number;
}

export function reset() {
  return resultOfOpertaion = 0;
}

export function getMemo() {
  return resultOfOpertaion;
}

// console.log(add(5));
// console.log(add(5));
// console.log(getMemo());
// console.log(decrease(100));
// console.log(reset());
// console.log(decrease(100));


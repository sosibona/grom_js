'use strict'

export function createCalculator() {
  let result = 0;

  function add(number) {
    return result += number;
  }

  function decrease(number) {
    return result -= number;
  }

  function reset() {
    return result = 0;
  }

  function getMemo() {
    return result;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  }
}

const calc1 = createCalculator();
const calc2 = createCalculator();

console.log(calc1.add(10));
console.log(calc2.decrease(10));
console.log(calc1.getMemo());

console.log(calc2.reset());
console.log(calc2.getMemo());

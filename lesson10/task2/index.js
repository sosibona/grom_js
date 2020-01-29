const arr = [1.1, 2.2, 3.4, '  15.66t', 'test', null, NaN, Infinity, undefined];

function getParsedIntegers(arr) {
  return arr.map(el => Number.parseInt(el));
}

function getParsedIntegersV2(arr) {
  return arr.map(el => parseInt(el));
}

function getParsedFloats(arr) {
  return arr.map(el => Number.parseFloat(el));
}

function getParsedFloatsV2(arr) {
  return arr.map(el => parseFloat(el));
}


console.log(getParsedIntegers(arr));
console.log(getParsedIntegersV2(arr));

console.log(getParsedFloats(arr));
console.log(getParsedFloatsV2(arr));

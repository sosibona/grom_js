const arr = [1.1, 2.2, 3.4, '  15.66t', 'test', null, NaN, Infinity, undefined];

function getParsedIntegers(arr) {
  return arr.filter(el => Number.parseInt(el));
}

function getParsedIntegersV2(arr) {
  return arr.filter(el => parseInt(el));
}

function getParsedFloats(arr) {
  return arr.filter(el => Number.parseFloat(el));
}

function getParsedFloatsV2(arr) {
  return arr.filter(el => parseFloat(el));
}


console.log(getParsedIntegers(arr));
console.log(getParsedIntegersV2(arr));

console.log(getParsedFloats(arr));
console.log(getParsedFloatsV2(arr));

const arr = [1, 2, 3.5, 'test', null, NaN, Infinity, undefined];

function getFiniteNumbers(arr) {
  return arr.filter(el => Number.isFinite(el));
}

function getFiniteNumbersV2 (arr) {
  return arr.filter(el => isFinite(el));
}

function getNaN(arr) {
  return arr.filter(el => Number.isNaN(el));
}

function getNaNV2(arr) {
  return arr.filter(el => isNaN(el));
}

function getInteger(arr) {
  return arr.filter(el => Number.isInteger(el));
}

console.log(getFiniteNumbers(arr));
console.log(getFiniteNumbersV2(arr));
console.log(getNaN(arr));
console.log(getNaNV2(arr));
console.log(getInteger(arr));

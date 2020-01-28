function flatArray(array) {
  return array.reduce((acc, elem) => acc.concat(elem), []);
}

console.log(flatArray([1, 2, [1, 2, 3], ['a']]));


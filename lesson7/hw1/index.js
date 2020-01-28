function squareArray(array) {
  return array.map(elem => Math.pow(elem, 2));
}

const result = squareArray([1, 2, 3, 4]);

console.log(result);

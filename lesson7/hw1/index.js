export function squareArray(array) {
  if (!Array.isArray(array)) return null;
  return array.map(elem => Math.pow(elem, 2));
}

const result = squareArray([]);

console.log(result);

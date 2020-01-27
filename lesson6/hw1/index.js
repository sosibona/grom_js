function squareArray(arr) {
  if (!Array.isArray(arr)) return null;
  return arr.map(idx => idx * idx);
}

console.log(squareArray([1, 2, 3]));

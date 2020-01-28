function reverseArray(array) {
  if (!Array.isArray(array)) return null;
  const copyArray = array.slice();
  return copyArray.reverse();
}

const result = reverseArray([1, 2, 4, 4, 5, 6, 10]);
console.log(result);

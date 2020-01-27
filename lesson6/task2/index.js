function getSum(arr) {
  if (!Array.isArray(arr)) return null;
  return arr.reduce((index, sum) => index + sum, 0);
}

console.log(getSum([1, 2, 3]));

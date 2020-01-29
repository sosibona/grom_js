const getMaxAbsoluteNumber = arr => {
  if (!Array.isArray(arr)) return null;

  return Math.max(...arr.map(el => Math.abs(el)));
}

const listNumbers = [-2, 10, 1234, -12000, 100];

console.table(getMaxAbsoluteNumber(listNumbers));

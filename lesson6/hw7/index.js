function checker(arr) {
  if (!Array.isArray(arr)) return null;
  const maxElement = Math.max(...arr);
  const minElement = Math.min(...arr);
  return maxElement + minElement > 1000 ? true : false;
}
function sortDesc(array) {
  return array.sort((a, b) => {
    return b - a;
  });
}

console.log(sortDesc([1, 5, 3, 7, -10]));

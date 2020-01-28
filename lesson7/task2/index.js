function sortDesc(array) {
  const copyArray = array.slice();
  return copyArray.sort((a, b) => {
    return b - a;
  });
}

console.log(sortDesc([1, 5, 3, 7, -10]));

function sortDesc(array) {
  const sortArray = array.sort((a, b) => {
    return b - a;
  });

  return sortArray;
}

console.log(sortDesc([1, 5, 3, 7, -10]));

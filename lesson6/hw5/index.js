function removeDuplicates(array) {
  const uniqueArray = [...new Set(array)];
  return uniqueArray;
}

// console.log(removeDuplicates([1, 1, 2, 1]));

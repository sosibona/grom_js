function cloneArr(arr) {
  const copyArray = [];
  for (let i = 0; i < arr.length; i++) {
    copyArray.push(arr[i]);
  }
  return copyArray;
}

console.log(cloneArr([1,2,3,4]));
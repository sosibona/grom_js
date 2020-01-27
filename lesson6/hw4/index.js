function uniqueCount(array) {
  const uniqueAray = [];
  for (let i = 0; i < array.length; i++) {
    if (uniqueAray.indexOf(array[i]) === -1) uniqueAray.push(array[i]);
  }
  return uniqueAray.length;
}

console.log(uniqueCount([1, 2, 4, 1, 3,4 ,5, 5]));
function getSpecialNumbers(array) {
  return array.filter(elem => elem % 3 === 0);
}

console.log(getSpecialNumbers([1,2,3,4,5,6,7,8,9,10]));

function transformToObject(array) {
  const obj = {};
  array.forEach(elem => obj[elem] = elem);
  return obj
}

const result = transformToObject([1, 2, 3]);

console.log(result);

const copyObj = obj => {
  const copyObj = Object.assign({}, obj);
  return copyObj;
}

const user = {
  name: 'Taras',
  age: 32,
}

console.log(copyObj(user));

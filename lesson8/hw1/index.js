const pickProps = (obj, arr) => {
  const newObj = {};
  for (let props in obj) {
    if (arr.includes(props)) newObj[props] = obj[props];
  }
  return newObj;
}

const obj = {
  a: 1,
  b: 2,
  c: 3,
}

let arr = ['b', 'c', 't'];

console.log(pickProps(obj, arr));

export function getOwnProps(obj){
  let arr = []
  // return Object.keys(obj).filter(el => typeof el !== 'function');
  for (let prop in obj) {
    if (typeof obj[prop] !== 'function') {
    arr.push(prop);
    }
  return arr;
  }
}

const obj = {
  name: 'Test',
  sayHi(){
    console.log('Hi');
  }
}

console.log(getOwnProps(obj));


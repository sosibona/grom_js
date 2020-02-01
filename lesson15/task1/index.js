
export function makeCounter() {
  let count = 0;
  return function (){
    return count++;
  }
}

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1());
console.log(counter1());
console.log(counter1());
console.log(counter1());

console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());























// function makeCounter() {
//   let count = 0;

//   return function (){
//     let i = 0;
//     i++;
//     count++;
//     return [i, count]
//   }
// }

// const test1 = makeCounter();
// console.log(test1());
// console.log(test1());
// console.log(test1());

// const test2 = makeCounter();
// console.log(test2());
// console.log(test2());
// console.log(test2());
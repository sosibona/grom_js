let calls = [];

export function spy(){
  return function (){
    calls.push([...arguments]);
    return calls;
  }
}

function sum(a, b) {
  return a + b;
}

const test = spy(sum);
const test2 = spy(sum);
console.log(test(5, 2, 4));
console.log(test2(5, 2, 4));



export function spy(func){

  call.calls = [];

  function call(){
    call.calls.push([...arguments]);
    return func.apply(this, arguments);
  }
  return call;
}

function sum(a, b) {
  return a + b;
}

const test = spy(sum);
test(5, 2, 4);
test(1, 1, 1);
console.log(test.calls);


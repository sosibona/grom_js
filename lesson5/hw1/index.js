export function getSum (a, b) {
  let sumEven = 0;
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) sumEven += i;
  }
  return sumEven;
}

// console.log(getSum(1,6));

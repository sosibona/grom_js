let sumEven = 0;

function getSum (a, b) {
  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) sumEven += i;
  }
  return sumEven;
}

// console.log(getSum(1,6));

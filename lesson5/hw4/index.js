export function compareSums(a, b, c, d) {
  return sum(a, b) > sum(c, d) ? true : false;
}

export function sum(from, to) {
  let sum = 0;
  for (let i = from; i <= to; i++) {
    sum += i;
  }
  return sum;
}

// module.export = {compareSums, sum}

// console.log(compareSum(1, 6, 2, 4));
function findDivCount (a, b, n) {
  let count = 0;
  for (let i = a; i <= b; i++) {
    if (n % i === 0) count++;
  }
  return count;
}

console.log(findDivCount(50, 100, 200));

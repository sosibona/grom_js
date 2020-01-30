function getRandomNumbers(length, start, end) {
  if (end < start || length < 1 || end - start === 1) return null;

  const res = [];

  while (res.length !== length) {
    let a = (Math.random() * (start - end + 1)) + end;
    res.push(Math.trunc(a));
  }
  return res;
}

console.log(getRandomNumbers(10, -0.1 , 0.1));

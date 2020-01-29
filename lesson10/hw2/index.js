function getRandomNumbers(length, start, end) {
  if (end < start || length < 1 || end - start < 2) return null;

  const res = [];

  while (res.length !== length) {
    res.push(Math.floor(Math.random() * (start - end + 1)) + end);
  }
  return res;
}

console.log(getRandomNumbers(5, -70, 200));

function getRandomNumbers(length, start, end) {
  if (end < start || length < 1 || end - start < 2) return null;
  if (end - start === 2) {
    const res = new Array(2);
    return res.fill((end + start) / 2);
  }

  const res = [];

  while (res.length !== 5) {
    let randomNumber = Math.trunc(end * Math.random());
    if (randomNumber > start) res.push(randomNumber);
  }

  return res;
}

console.log(getRandomNumbers(5, 8, 10));

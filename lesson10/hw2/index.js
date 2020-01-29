function getRandomNumbers(length, start, end) {
  const res = []
  while (res.length !== 5) {
    let randomNumber = Math.trunc(end * Math.random());
    if (randomNumber > start) res.push(randomNumber);
  }

  return res;
}

console.log(getRandomNumbers(5, 1, 10));

function getRandomNumbers(length, start, end) {
  if (end < start || length < 1 || end - start === 1 || Math.ceil(start) === Math.ceil(end)) return null;

  const res = [];

  while (res.length !== length) {
    let a = (Math.random() * (start - end + 1)) + end;
    res.push(Math.floor(a));
  }
  return res;
}

console.log(getRandomNumbers(10, -0.1 , 0.1));

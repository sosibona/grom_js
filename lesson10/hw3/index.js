function superRound(number, count) {
  const countRound = Math.pow(10, count);
  return [
    Math.floor(number * countRound) / countRound,
    Math.round(number * countRound) / countRound,
    Math.ceil(number * countRound) / countRound,
    Math.trunc(number * countRound) / countRound,
    +number.toFixed(count)
  ]
}

console.log(superRound(1.1234567, 4));

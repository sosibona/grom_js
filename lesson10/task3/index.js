function multiRound(number) {
  return [
    Math.floor(number * 100)/ 100,
    Math.round(number * 100)/ 100,
    Math.ceil(number * 100)/ 100,
    Math.trunc(number * 100)/ 100,
    +number.toFixed(2)
  ]
}

console.log(multiRound(-19.456));

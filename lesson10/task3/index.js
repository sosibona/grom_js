function multiRound(number) {
  return [
    Math.floor(number * 100)/ 100,
    Math.round(number * 100)/ 100,
    Math.ceil(number * 100)/ 100,
    Math.trunc(number * 100)/ 100,
    number.toFixed(2)
  ]
}

let number = Math.random() * 10;

console.log(multiRound(number));

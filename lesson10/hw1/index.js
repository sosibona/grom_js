const getTotalPrice = arr => {
  let total = arr.reduce((acc, elem) => acc + elem);
  return Math.floor(total * 100) / 100;
}

const prices = [12.56, 134.125, 1, 1.235];
console.log(getTotalPrice(prices));

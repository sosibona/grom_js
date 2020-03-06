const getSum = numbers => {
  return numbers
    .filter(numbers => !isNaN(numbers))
    .reduce((acc, number) => acc + Number(number), 0);
}

export const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
  .then(numbers => getSum(numbers))
  .catch(() => Promise.reject(new Error('Can\'t calculate')))
}

asyncSum(asyncNumbers1, asyncNumbers2, asyncNumbers3)
  
  .then(result => console.log(result));
const getValueWithDelay = (value, delay) => new Promise(resolve => {
  setTimeout(() => {
    console.log(value);
    resolve(value);
  }, delay);
});

const asyncNumbers1 = getValueWithDelay(56, 1000);
const asyncNumbers2 = getValueWithDelay(undefined, 2000);
const asyncNumbers3 = getValueWithDelay('10', 3000);

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
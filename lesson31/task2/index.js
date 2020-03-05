export const asyncCalculator = num => new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`initial value: ${num}`);
      resolve(num)
    }, 500);
  })
  .then(value => new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = value * value;
        console.log(`squered value: ${result}`);
        resolve(result)
      }, 500);
    }))
    .then(value => {
      const result = value * 2;
      console.log(`doubled value: ${result}`);
      return result;
    });

    asyncCalculator(5).then(value => console.log(value));
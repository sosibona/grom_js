export const maxFibonacci = (value) => {

  const fibobacci = [0, 1]
  let i = 2;

  while (true) {
    fibobacci[i] = fibobacci[i - 1] + fibobacci[i - 2];

    fibobacci.push(fibobacci[i])
    
    if (fibobacci[i] > value) return fibobacci[i - 1];
    i++;
  }
}

// console.log(maxFibonacci(15));



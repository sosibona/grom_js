export const maxFibonacci = (value) => {

  if (value === 1) return 0;

  const fibobacci = [0, 1]
  let i = 2;

  while (true) {
    fibobacci[i] = fibobacci[i - 1] + fibobacci[i - 2];

    
    if (fibobacci[i] >= value) {
      console.log(fibobacci);
      
      return fibobacci[i - 1];
    }
    fibobacci.push(fibobacci[i])
    i++;
  }
}

console.log(maxFibonacci(1));



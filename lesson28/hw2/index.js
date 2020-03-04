export const maxFibonacci = (value) => {

  const fibobacci = [1, 1]
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

console.log(maxFibonacci(12));



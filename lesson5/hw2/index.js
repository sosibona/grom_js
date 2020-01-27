function getPrimes (number) {
  let count = 0;
  console.log(1);
  
  for (let i = 1; i <= number; i++) {
    count = 0;
    for (let j = 1; j <= number; j++) {
       if (i % j === 0) count++; 
    }
    if (count === 2) console.log(i);
  }
}

getPrimes(10);
export function sumOfSquares(){
  return [...arguments].reduce((acc, idx) => acc + Math.pow(idx, 2));
}

sumOfSquares(1, 2, 4);

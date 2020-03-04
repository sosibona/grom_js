export const mult = a => b => a * b;

const twice = mult(7);

const triple = twice(9);

console.log(triple);
console.log(mult(5)(4));

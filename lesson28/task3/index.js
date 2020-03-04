export const mult = a => b => a * b;

export const twice = mult(7);

export const triple = twice(9);

console.log(triple);
console.log(mult(5)(4));

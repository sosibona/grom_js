export const mult = a => b => a * b;

export const twice = mult(7)(2);

export const triple = mult(9)(3);

console.log(triple);
console.log(twice);
console.log(mult(5)(4));

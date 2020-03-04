export function sum(value){
  return value <= 1 ? value : sum(value - 1) + value;
}

sum(4);

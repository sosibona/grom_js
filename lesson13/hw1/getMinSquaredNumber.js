export function getMinSquaredNumber(arr) {
  
  if (!Array.isArray(arr) || arr.length === 0) return null;

  const absNumbers =  arr.map(el => Math.abs(el));

  return Math.min(...absNumbers);
}

// console.log(getMinSquaredNumber([-2, 4, 19, -24.2]));

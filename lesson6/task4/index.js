function swap(arr) {
  const [first, ...arrCopy] = arr;
  
  return [...arrCopy, first];
}

console.log(swap([1, 2, 3]));
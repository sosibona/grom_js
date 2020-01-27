function reverseArray(arr) {
  if (!Array.isArray(arr)) return null;

  const [...arrCopy] = arr;
  return arrCopy.reverse();
  
}

reverseArray([1, 2,3,4])
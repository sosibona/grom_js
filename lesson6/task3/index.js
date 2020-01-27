function getSpecialNumbers(m, n) {
  const arr = [];
  for (let i = m; i <= n; i++) {
    if (i % 3 === 0) arr.push(i);
  }
  return arr;
}

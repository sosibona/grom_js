function reverseString(str) {
  if (typeof str === 'string') return null;
  return str.split('').reverse().join('');
}

// const reverseString = str => str.split('').reverse().join('');

console.log(reverseString('abc def'));

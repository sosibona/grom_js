function calc(str) {
  const [a, operation, b] = str.trim().split(' ');
  let result;

  switch (operation) {
    case '+':
      result = Number(a) + Number(b);
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
  }

  return str + ' = ' + result;
}

console.log(calc('1 / 0'));
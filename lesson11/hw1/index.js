function splitString(str, number = 10) {


  
  const arrStr = [];
  let startPosition = 0;

  if (typeof str !== 'string') return null;

  while(true) {
    let piece = str.substr(startPosition, number);
    if (piece.length === 0) break;

    startPosition += number;
    arrStr.push(piece);
  }

  let lastElement = arrStr[arrStr.length - 1];

  lastElement += '.'.repeat(number - lastElement.length);
  arrStr[arrStr.length - 1] = lastElement;
  
  return arrStr;

}

console.log(splitString('asdasadasd', 3));

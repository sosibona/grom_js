function splitText(str, number) {
  const arr = [];
  let startPosition = 0;

  while (true) {
    let piece = str.substr(startPosition, number);
    if (piece.length === 0) break;
    arr.push(piece[0].toUpperCase() + piece.slice(1));
    startPosition += number;
  }
  return arr.join('\n');
}

console.log(splitText('I will be front end developer', 4));

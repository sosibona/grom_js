function countOccurrences(string, subString) {
  return string.split(subString).length - 1;
}

console.log(countOccurrences('tmatma mama', 'ma'));

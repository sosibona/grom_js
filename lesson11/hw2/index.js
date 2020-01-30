function countOccurrences(string, subString) {
  if (subString.length === 0) return null;
  return string.split(subString).length - 1;
}

console.log(countOccurrences('tmatma mama', ''));

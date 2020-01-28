function getMessagesBestStudents(allStudents, noPassedStudents) {
  return allStudents
  .filter(name => !noPassedStudents.includes(name))
  .map(name => 'Good job, ' + name);
}

const result = getMessagesBestStudents(['Ann', 'Bill', 'Duck'], ['Duck']);

console.log(result);

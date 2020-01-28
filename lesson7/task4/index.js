function getMessagesForBestStudents(allStudents, noPassedStudents) {
  return allStudents
  .filter(name => !noPassedStudents.includes(name))
  .map(name => 'Good job, ' + name);
}

const result = getMessagesForBestStudents(['Ann', 'Bill', 'Duck'], ['Duck']);

console.log(result);

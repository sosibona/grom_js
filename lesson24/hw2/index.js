const monthOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const students = [
  {name: 'Tom', birthDate: '11/15/2010'},
  {name: 'Ann', birthDate: '11/02/2002'},
  {name: 'Bob', birthDate: '11/05/2000'},
  {name: 'Rob', birthDate: '01/10/2011'},
  {name: 'Karl', birthDate: '08/23/1999'},
  {name: 'Yan', birthDate: '08/30/1987'},
  {name: 'Zak', birthDate: '08/03/1988'},
  {name: 'Jerry', birthDate: '12/06/2012'},
  {name: 'John', birthDate: '01/05/2013'},
];

export function studentsBirthDays(students){

  const month = {};
  for (let i = 0; i < students.length; i++) {
    const studentsCopy = Object.assign({}, students[i]);
   
    let checkMonth = monthOfYear[new Date(studentsCopy.birthDate).getMonth()];
    if (!month.hasOwnProperty(checkMonth)) {
      month[checkMonth] = [];
      month[checkMonth].push(studentsCopy)
    } else {
      month[checkMonth].push(studentsCopy);
    }
  }

  for (let students in month) {
    month[students] = month[students]
        .sort((a, b) => new Date(a.birthDate) - new Date(b.birthDate))
        .map(elem => elem.name);
  }
  
  return month;
}

console.log(studentsBirthDays(students));
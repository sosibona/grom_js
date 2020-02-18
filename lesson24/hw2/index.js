const monthOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const students = [
  {name: 'Tom', birthDay: '11/15/2010'},
  {name: 'Ann', birthDay: '11/02/2002'},
  {name: 'Bob', birthDay: '11/05/2000'},
  {name: 'Rob', birthDay: '01/10/2011'},
  {name: 'Karl', birthDay: '08/23/1999'},
  {name: 'Yan', birthDay: '08/30/1987'},
  {name: 'Zak', birthDay: '08/03/1988'},
  {name: 'Jerry', birthDay: '12/06/2012'},
  {name: 'John', birthDay: '01/05/2013'},
];

export function studentsBirthDays(students){

  const month = {};
  for (let i = 0; i < students.length; i++) {
    let checkMonth = monthOfYear[new Date(students[i].birthDay).getUTCMonth()];
    if (!month.hasOwnProperty(checkMonth)) {
      month[checkMonth] = [];
      month[checkMonth].push(students[i])
    } else {
      month[checkMonth].push(students[i]);
    }
  }

  // console.log(month);

  for (let students in month) {
    month[students] = month[students]
        .map(objName => ({name: objName.name, birthDay: objName.birthDay = new Date(objName.birthDay).getDate()}))
        .sort((a, b) => a.birthDay - b.birthDay)
        .map(elem => elem.name);
  }

}

studentsBirthDays(students);
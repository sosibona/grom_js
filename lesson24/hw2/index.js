const monthOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const students = [
  {name: 'Tom', birthDay: '01/15/2010'},
  {name: 'Ann', birthDay: '01/02/2002'},
  {name: 'Bob', birthDay: '01/05/2000'},
  {name: 'Rob', birthDay: '01/10/2011'},
  {name: 'Karl', birthDay: '03/23/1999'},
  {name: 'Yan', birthDay: '03/30/1987'},
  {name: 'Zak', birthDay: '03/03/1988'},
  {name: 'Jerry', birthDay: '03/06/2012'},
  {name: 'John', birthDay: '01/06/2013'},
];

export function studentsBirthDays(students){

  const month = {};
  const s1 = [];
  for (let i = 0; i < students.length; i++) {
    const studentsCopy = Object.assign({}, students[i]);
    s1.push(studentsCopy);
  }
  const s3 = s1
      .map(elem => ({
        name: elem.name,
        birthDay: elem.birthDay,
        month: new Date(elem.birthDay).getMonth(),
      })).sort((a, b) => a.month - b.month).map(elem => ({
        name: elem.name,
        birthDay: elem.birthDay,
      }));
  
  for (let i = 0; i < s3.length; i++) {
  
    let checkMonth = monthOfYear[new Date(s3[i].birthDay).getMonth()];
    if (!month.hasOwnProperty(checkMonth)) {
      month[checkMonth] = [];
      month[checkMonth].push(s3[i])
    } else {
      month[checkMonth].push(s3[i]);
    }
  }

  for (let students in month) {
    month[students] = month[students]
        .map(objName => ({name: objName.name, birthDay: objName.birthDay = new Date(objName.birthDay).getDate()}))
        .sort((a, b) => b.birthDay - a.birthDay)  
        .map(elem => elem.name);
  }

  return month;
}

console.log(studentsBirthDays(students));
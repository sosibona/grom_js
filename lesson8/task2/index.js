const concatProps = obj => {
  const arr = [];
  
  for (let prop in obj) {
    arr.push(obj[prop]);
  }
  return arr;
}

console.log(concatProps({ name: 'John Doe', age: 17, interest: 'football' }));

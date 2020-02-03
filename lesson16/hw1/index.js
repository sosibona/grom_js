function createArrayOfFunction(sizeOfArray) {

  let arr = [];

  for (let i = 0; i < sizeOfArray; i++){
    arr.push(function(){
      return i;
    });
  }
  return arr;
}

// console.log(createArrayOfFunction(5)[2]());
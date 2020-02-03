export function createArrayOfFunctions(sizeOfArray) {
  
  var arr = [];
  if (sizeOfArray === undefined) return arr;
  if (typeof sizeOfArray !== "number") return null;


  for (let i = 0; i < sizeOfArray; i++){
    arr.push(function(){
      return i;
    });
  }
  return arr;
}

// console.log(createArrayOfFunctions());
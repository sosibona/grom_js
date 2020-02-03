export function createArrayOfFunctions(sizeOfArray) {
  
  let arr = [];
  if (typeof sizeOfArray !== "number") return null;
  if (sizeOfArray === undefined) return arr;


  for (let i = 0; i < sizeOfArray; i++){
    arr.push(function(){
      return i;
    });
  }
  return arr;
}

// console.log(createArrayOfFunctions());
function searchMaxElement(arr) {
  return Math.max(...arr); 
}

function searchMinElement(arr) {
  return Math.min(...arr); 
}



function sortDesc(arr) {
  const sortDescArray = [];
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    sortDescArray.push(searchMaxElement(arr));
    arr.splice(arr.indexOf(searchMaxElement(arr)), 1);
  }
  return sortDescArray;
}

function sortAsc(arr) {
  const sortAscArray = [];
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    sortAscArray.push(searchMinElement(arr));
    arr.splice(arr.indexOf(searchMinElement(arr)), 1);
  }
  return sortAscArray;
}


console.log(sortAsc([1, 5, 6, 100, -100 ,12]));
console.log(sortDesc([1, 5, 6, 100, -100 ,12]));
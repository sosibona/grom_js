localStorage.setItem('user', JSON.stringify({name: 'Taras'}));
localStorage.setItem('isAdmin', JSON.stringify(true));
localStorage.setItem('Adress', JSON.stringify("Lviv"));

console.log(localStorage);

console.log(Object.entries(localStorage));

export const getLocalStorageData = () => {
  return Object.entries(localStorage)
    .reduce(function(acc, arr){
      acc[arr[0]] = arr[1];
      return acc;
    }, {})
  }

const a = getLocalStorageData();
console.log(a);



// const getLacalStorageData = () => {
//   return Object.entries(localStorage)
//     .reduce((acc, [key, value]) => {
//       return {
//         ...acc,
//         [key]: value,
//       }
//     }, {});
// }
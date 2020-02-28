
// const test = document.querySelector('.red-box');

// // const testClickRandomColor = () => {
// //   const color = Math.random().toString(16).substring(9);
// //   console.log(color);
  
// //   document.querySelector('.red-box').style.backgroundColor = '#' + color;
// // }


// // test.addEventListener('click', testClickRandomColor);
// test.addEventListener('click', testCalculateDate);

// const dateNow = new Date();

// function getMonday(dateNow){
//   const getDate = dateNow.getDate();
//   const getDay = dateNow.getDay();

//   const getMonday = dateNow.setDate(getDate - getDay)
// }

// function testCalculateDate(){
  
// }

// const users = [{name: 'Taras', married: true}, {name: 'Taras', married: false}, {name: 'Taras', married: true}];

// const count = users.reduce(function (acc, user) {
//   user.married ? acc.married++ : acc.unmarried++;
//   return acc;
// }, {married: 0, unmarried: 0});

// console.log(count);


// const dayTransactions = [{ currency: 'USD', amount: 60, operation: 'sell' }, { currency: 'EUR', amount: 160, operation: 'buy' }, { currency: 'EUR', amount: 90, operation: 'sell' }];
// // { EUR: 70, USD: 60 }
// function getTotalBalance(transactions) {
//     const result = dayTransactions.reduce(function(acc, transaction) {
//         const { currency, amount, operation } = transaction;

//         if (acc[currency] === undefined) {
//           acc[currency] = 0;
//         }
//         const newTotal = (operation === 'sell') ? acc[currency] - amount  : acc[currency] + amount;
        
//         acc[currency] = newTotal;
//         return acc;
//     }, {});
//     console.log(result);
    
//     return result
// }


// console.log(getTotalBalance(dayTransactions));

// import {start} from './start.js'
// import {stopLine} from './stoop.js'

// const btnRed = document.querySelector('.red-box');



// export let timerId;
// let i = 0;
// export function go(){
//   timerId = setInterval(countLineTime, 1000);
// }

// function countLineTime(){
//   console.log(i++);
// }

// const admin = ['1', '4'];
// const users = [{ id: '1',  name: 'Bob' }, { id: '2', name: 'Bob' }, { id: '3', name: 'Bob' }, { id: '4', name: 'Bob' }];

// // const usersCopy = [];
// // users.forEach(user => {
// //   usersCopy.push(Object.assign({}, user));
// // });

// function getAdmins(adminIds, usersList) {
//   const result = usersList.map(user => ({
//      ...user,
//      isAdmin: adminIds.includes(user.id)
//   }));
//   return result;
// }

// console.log(getAdmins(admin, users));

// console.log(users);


const user  = {name: 'taras'};
const user2 = {...user}
console.log(user);
console.log(user2);
user2.name = 'Nik';
console.log(user);
console.log(user2);


















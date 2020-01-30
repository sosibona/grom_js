// function cleanTransactionsList(arr) {
//   const cleanArray = arr.filter(el => isFinite(el)).map(el => '$' + Number(el).toFixed(2));
//   return cleanArray;
// }

const cleanTransactionsList = arr => arr
      .filter(el => isFinite(el))
      .map(el => '$' + Number(el).toFixed(2));

const transaction = [' 1.23  ', '2 dollars', 22];

console.log(cleanTransactionsList(transaction));

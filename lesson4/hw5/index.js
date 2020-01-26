let sum = 0;
let wholeNumber;
let remainderNumber;
let sumDivisionWhole = 0;
let sumDivisionRemainder  = 0;
for (let i = 0; i <= 1000; i++) {
  sum += i;
}

wholeNumber = Math.trunc(sum / 1234);
remainderNumber = sum % 1234;

console.log(wholeNumber > remainderNumber ? true : false);




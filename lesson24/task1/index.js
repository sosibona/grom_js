const weekDays = ['Su', 'Mo', 'Th', 'We', 'Tu', 'Fr', 'Sa']

const getDayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  console.log(day);
  
  const dateInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInFuture).getDay()];

  // return dateInFuture;
};

const res = getDayOfWeek(new Date(), 1);
// console.log(new Date(res));
console.log(res);

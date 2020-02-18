const weekDays = ['Su', 'Mo', 'Th', 'We', 'Tu', 'Fr', 'Sa']

export const DayOfWeek = (date, days) => {
  const day = new Date(date).getDate();
  console.log(day);
  
  const dateInFuture = new Date(date).setDate(day + days);

  return weekDays[new Date(dateInFuture).getDay()];

  // return dateInFuture;
};

const res = DayOfWeek(new Date(), 1);
// console.log(new Date(res));
console.log(res);

export function getDiff(startDate, endDate){

  const startTime = startDate.getTime();
  const endTime = endDate.getTime();
  if (endTime - startTime < 0) {
    const newTime = startTime;
    startTime = endTime;
    endTime = newTime;
  }
  const day = 1000 * 60 * 60 * 24; // milisecond * second * minutes * hours in 1 day
  const hour = 1000 * 60 * 60; // milisecond * second * minutes in 1 hour
  const minute = 1000 * 60; // milisecond * second *  in 1 minute
  const second = 1000; // milisecond  *  in 1 second
  
  const days = Math.trunc((endTime - startTime) / day);
  let division = (endTime - startTime) % day;

  const hours = Math.trunc(division / hour);
  division = division % hour;

  const minutes = Math.trunc(division / minute);
  division = division % minute;

  const seconds = Math.trunc(division / second);
  
  return `${days}d ${hours}h ${minutes}m ${seconds}s`;

}

const startDate = new Date(2020, 1, 12);
const endDate = new Date()

console.log(getDiff(startDate, endDate));
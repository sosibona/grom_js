export const pinger = (number, period) => {
  console.log('ping');
  let i = number;
  const intervalId = setInterval(() => {
    if (--i > 0) {
      console.log('ping');
    } else {
      clearInterval(intervalId)
    }
  }, period);
} 

pinger(5, 1000);
const year = {
  years: 31536000000,
  month: 2419200000,
  day: 86400000,
  hour: 3600000,
  minute: 60000,
  second: 1000,
  milisecond: 1,
}

export const shmoment = initValue => {

  let res = initValue;

  const calendar = {

    add(time, value) {
      new Date(res.setMilliseconds(year[time] * value));
      return this;
    },
    subtract(time, value) {
      new Date(res.setMilliseconds(res.getMilliseconds() - (year[time] * value)));
      return this;
    },
    result(){
      return res;
    }
  }
  return calendar;
}

shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('minutes', 2).add('days', 8).subtract('years', 1).result(); // ... Jan 15 2019 17:19:17 ...
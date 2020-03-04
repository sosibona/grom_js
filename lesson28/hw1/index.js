export const shmoment = initValue => {

  const copyDate = new Date(initValue);


  const calendar = {

    add(time, value) {
      switch (time) {
        case 'years':
          new Date(copyDate.setFullYear(copyDate.getFullYear() + value));
          return this;
        case 'months':
          new Date(copyDate.setMonth(copyDate.getMonth() + value));
          return this;
        case 'days':
          new Date(copyDate.setDate(copyDate.getDate() + value));
          return this;
        case 'hours':
          new Date(copyDate.setHours(copyDate.getHours() + value));
          return this;
        case 'minutes':
          new Date(copyDate.setMinutes(copyDate.getMinutes() + value));
          return this;
        case 'seconds':
          new Date(copyDate.setSeconds(copyDate.getSeconds() + value));
          return this;
        case 'milliseconds':
          new Date(copyDate.setMilliseconds(copyDate.getMilliseconds() + value));
          return this;
      }
    },
    subtract(time, value) {
      switch (time) {
        case 'years':
          new Date(copyDate.setFullYear(copyDate.getFullYear() - value));
          return this;
        case 'months':
          new Date(copyDate.setMonth(copyDate.getMonth() - value));
          return this;
        case 'days':
          new Date(copyDate.setDate(copyDate.getDate() - value));
          return this;
        case 'hours':
          new Date(copyDate.setHours(copyDate.getHours() - value));
          return this;
        case 'minutes':
          new Date(copyDate.setMinutes(copyDate.getMinutes() - value));
          return this;
        case 'seconds':
          new Date(copyDate.setSeconds(copyDate.getSeconds() - value));
          return this;
        case 'milliseconds':
          new Date(copyDate.setMilliseconds(copyDate.getMilliseconds() - value));
          return this;
      }
    },
    result(){
      return copyDate;
    }
  }
  return calendar;
}

shmoment(new Date(2020, 0, 7, 17, 17, 17)).add('minutes', 2).add('days', 8).subtract('years', 1).result(); // ... Jan 15 2019 17:19:17 ...
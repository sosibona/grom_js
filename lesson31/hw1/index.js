export const delay = (time) => new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  }).then(() => console.log('Done'));

  delay(3000);
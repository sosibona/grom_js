export function delay(delay, callback) {

  return function() {
    setTimeout(() => callback.apply(this, arguments), delay);
  };

}
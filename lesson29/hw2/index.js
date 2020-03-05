export function delay(delay, callback, context, ...arguments) {

  return function() {
    setTimeout(() => callback.apply(this, [arguments]), delay);
  };

}
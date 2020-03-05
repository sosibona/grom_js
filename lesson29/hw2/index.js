export function delay(delay, callback, context, arguments) {

      setTimeout(() => callback.apply(context, [...arguments]), delay);

}
export function delay(delay, callback, context, ...arguments) {

      setTimeout(() => callback.call(context, ...arguments), delay);

}
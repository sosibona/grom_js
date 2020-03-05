export function delay(delay, callback, context, ...args) {

      setTimeout(() => {
        callback.call(context, ...args)
      }, delay);

}
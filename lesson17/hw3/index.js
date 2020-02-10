export function bind(func, context, [arg1]) {
  return function (...arguments) {
    return func.call(context, [arguments], [arg1])
  }
}
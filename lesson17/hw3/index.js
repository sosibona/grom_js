export function bind(func, context) {
  return function (...arguments) {
    return func.apply(context, arguments)
  }
}
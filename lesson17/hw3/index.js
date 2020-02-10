export function bind(func, context, [args]) {
  return function (...arguments) {
    return func.apply(context, arguments, [args])
  }
}
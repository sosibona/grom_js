export function bind(func, context, [arg1], [arg2]) {
  return function () {
    return func.apply(context, [arg1], [arg2])
  }
}
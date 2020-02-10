export function bind(func, context, [arg1], [arg2]) {
  return function (this, ...arguments) {
    return func.apply(context, [arg1], [arg2])
  }
}
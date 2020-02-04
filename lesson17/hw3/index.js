export function bind(func, context, [arg1], [arg2]) {
  return function(...arg2) {
    return func.apply(context, [arg1], [arg2]);
  }
}
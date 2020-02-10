export function bind(func, context, [arg1]){

	return function(...args) {
		return func.apply(
					context,
          args,
          arg1
        );
    }
  }
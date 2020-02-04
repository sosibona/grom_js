export function defer(func, ms) {
  return function() {
    setTimeout(() => {func.call(this,...arguments)}, ms);
  }
}

// const sayHi = () => {
//   console.log('Hi');
// }

const user = {
  name: 'Taras',
  sayHi(){
    console.log(`Hi, my name is ${this.name}`);
  }
}

// sayHi();

const deferDone = defer(user.sayHi, 1500);

deferDone.call({name: 'Ann'});

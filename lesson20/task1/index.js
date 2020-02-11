export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty(){
    const user = new User('', null);
    return user;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto(){
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge){
    if (newAge < 0) return false;

    this.age = newAge;
    if (newAge >= 25) this.requestNewPhoto();
    return newAge;
  }
}

const user1 = new User('Taras', 32);
console.log(user1);
console.log(User.createEmpty());

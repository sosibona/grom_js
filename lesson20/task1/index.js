export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty(){
    
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto(){
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge){
    if (age < 0) return false;

    this.age = newAge;
    if (age >= 25) this.requestNewPhoto();
    return newAge;
  }
}
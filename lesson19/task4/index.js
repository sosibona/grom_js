export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function(){
  console.log(`Hi, I am ${this.name}`);
}

User.prototype.requestNewPhoto = function(){
  console.log(`New photo request was sent for ${this.name}`);
}

User.prototype.setAge = function(age){
  if (age < 0) return fasle;

  this.age = age;
  this.requestNewPhoto();
  return age;
}

// const user1 = new User('Taras', 32);
// console.log(user1);
// user1.sayHi();
// user1.requestNewPhoto();
// user1.setAge(33);
// console.log(user1.age);

export class User {
  constructor(id, name, sessionId){
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id(){
    return this._id;
  }

  // set id(value){
  //   this.id = value;
  // }

  get name(){
    return this.name;
  }

  // set name(value){
  //   this.name = value;
  // }

  get sessionId(){
    return this.sessionId;
  }

  // set sessionId(value){
  //   this.sessionId = value;
  // }
 

}

export class UserRepository{
  constructor(users) {
    this.users = users;
  }

  getUserNames(){
    return this.users.map(el => el.name);
  }

  getUserIds(){
    return this.users.map(el => el.id);
  }

  getUserNamesById(id){
    return this.users.filter(el => el.id === id.toString()).map(el => el.name);
  }


}

const user1 = new User('1234', 'Taras', 's1');
console.log(user1);
// console.log(user1.id = '2222');
// console.log(user1);

// // const list = new UserRepository([
// //   {id: '1', name: 'Taras', sessionId: '1'},
// //   {id: '2', name: 'Olesya', sessionId: '2'},
// //   {id: '3', name: 'Ivan', sessionId: '3'}
// // ]);

// // console.log(list);
// // console.log(list.getUserNames());
// // console.log(list.getUserIds()); 
// // console.log(list.getUserNamesById(2)); 


// // const user2 = new User('dasda', 'taras', 'dasdas');


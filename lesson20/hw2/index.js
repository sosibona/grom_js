export class User {
  constructor(id, name, sessionId){
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id(){
    return this._id;
  }

  get name(){
    return this._name;
  }


  get sessionId(){
    return this._sessionId;
  }
}

export class UserRepository{
  constructor(users) {
    this._users = users;
  }

  get users(){
    return this._users;
  }

  getUserNames(){
    return this.users.map(el => el._name);
  }

  getUserIds(){
    return this.users.map(el => el._id);
  }

  getUserNamesById(id){
    return this.users.filter(el => el._id === id.toString()).map(el => el._name);
  }


}

// const user1 = new User('1234', 'Taras', 's1');
// console.log(user1);
// // console.log(user1.id = '2222');
// // console.log(user1);

// const list = new UserRepository([
//   {id: '1', name: 'Taras', sessionId: '1'},
//   {id: '2', name: 'Olesya', sessionId: '2'},
//   {id: '3', name: 'Ivan', sessionId: '3'}
// ]);

// console.log(list);
// console.log(list.getUserNames());
// console.log(list.getUserIds()); 
// console.log(list.getUserNamesById(2)); 


// // const user2 = new User('dasda', 'taras', 'dasdas');


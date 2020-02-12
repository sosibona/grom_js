class User {
  constructor(id, name, sessionId){
    this.id = id;
    this.name = name;
    this.sessionId = sessionId;
  }

}

class UserRepository{
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

const user1 = new User('adsa', 'dsadas', 'fsdfsd');
// console.log(listOfUsers);
const list = new UserRepository([
  {id: '1', name: 'Taras', sessionId: '1'},
  {id: '2', name: 'Olesya', sessionId: '2'},
  {id: '3', name: 'Ivan', sessionId: '3'}
]);

console.log(list);
console.log(list.getUserNames());
console.log(list.getUserIds()); 
console.log(list.getUserNamesById(2)); 


// const user2 = new User('dasda', 'taras', 'dasdas');


export const requestUserData = (userId, callback) => {

setTimeout(() => {
  if (userId === 'broken') {
    callback(null, 'Failed to load user data')
  }
  callback({name: 'John', age: 17, userId: userId, email:'userid777@example.com'});
}, 2000);
}



const user = {
  name: 'John', 
  age: 17, 
  userId: 'userid777', 
  email:  'userid777@example.com',
}
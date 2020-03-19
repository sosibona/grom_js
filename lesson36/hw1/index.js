const fetchUser = user => {
  return fetch(`https://api.github.com/users/${user}`)
    .then(function(response) {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error');
    })
    .then(function(userData){
      return userData.blog;
    })
}

export const getUsersBlogs = async usersList => {
  const allPromise = usersList.map(user => fetchUser(user))
  const usersData = await Promise.all(allPromise);
  console.log(usersData);
  return usersData;
};

const users = ['google', 'facebook', 'sosibona'];

getUsersBlogs(users);


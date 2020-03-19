export const getUsersBlogs = async usersList => {
  const requests = usersList
      .map(userId => fetch(`https://api.github.com/users/${userId}`)
          .then(response => {
              if (response.ok) {
                return response.json();
              }
              throw new Error('Error');
          }));
  const usersData = await Promise.all(requests);
  return usersData.map(user => user.blog);
};

const users = ['google', 'facebook', 'sosibona'];

getUsersBlogs(users);
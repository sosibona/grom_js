const getUserData = (user) => {

  const url = `https://api.github.com/users/${user}`
  const response = fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Error');
      })
      .then(value => value.blog)
      .catch(err => err);

  return response;
}

export const getUsersBlogs = async userList => {
  try {
      const promiseList = userList.map(user => getUserData(user));
      const response = await Promise.all(promiseList)
      return response;
  }
  catch (err) {
      return console.log(err.message)
  }
}

getUsersBlogs(['facebook', 'github', 'sosibona'])
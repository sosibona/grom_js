const getUserData = (user) => {

  const url = `https://api.github.com/users/${user}`
  const response = fetch(url)
      .then(response => response.json())
      .then(value => value.blog)
      .catch(err => alert(err.message));

  return response;
}

export const getUsersBlogs = async userList => {
  try {
      const promiseList = userList.map(user => getUserData(user));

      const response = await Promise.all(promiseList)
      console.log(response)
      return response;
  }
  catch (err) {
      return console.log(err.message)
  }
}

getUsersBlogs(['facebook', 'github', 'sosibona'])
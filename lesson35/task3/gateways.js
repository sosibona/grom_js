export const fetchUserData = userName => {
  return fetch(`https://api.github.com/users/${userName}`)
    .then(response => response.json());
    // .then(rs => console.log(rs));
}

export const fetchReposetories = url => {
  return fetch(url)
    .then(response => response.json());
}

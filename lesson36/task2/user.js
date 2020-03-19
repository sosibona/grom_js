const userNameElem = document.querySelector('.user__name');
const userLocationElem = document.querySelector('.user__location');
export const userAvatarElem = document.querySelector('.user__avatar');

export const renderUserData = user => {
  const { avatar_url, name, location } = user;
  userAvatarElem.src = avatar_url;
  userNameElem.textContent = name;
  userLocationElem.textContent = location
    ? `from ${location}`
    : ``;
}

const listElem = document.querySelector('.repo-list');

export const renderRepos = reposList => {
  console.log(reposList)
  const reposListElems = reposList
    .map(({ name }) => {
      const listElem = document.createElement('li');
      listElem.classList.add('repo-list__item');
      listElem.textContent = name;

      return listElem;
    });
    listElem.innerHTML = '';
    listElem.append(...reposListElems);
}
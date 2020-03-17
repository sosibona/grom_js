import { fetchUserData, fetchReposetories } from './gateways.js';
import { renderUserData, userAvatarElem, renderRepos } from './user.js';
import { showSpinner, hideSpinner } from './spinner.js';




const defaultAvatar = 'https://avatars3.githubusercontent.com/u10001';

userAvatarElem.src = defaultAvatar;

const showUserBtnElem = document.querySelector('.name-form__btn');
const userNameInputElem = document.querySelector('.name-form__input');
const listElem = document.querySelector('.repo-list');

const onSearchUser = () => {
    showSpinner()
    listElem.innerHTML = '';
    const userName = userNameInputElem.value;
    fetchUserData(userName)
        .then(userData => {
            renderUserData(userData);
            return userData.repos_url;   
        })
        .then(repo_url => fetchReposetories(repo_url))
        .then(repoList => {
            renderRepos(repoList);
            hideSpinner()
        })
        .catch(err => {
            hideSpinner()
            alert(err.message);
        });
};

showUserBtnElem.addEventListener('click', onSearchUser);

// fetch ('https://api.github.com/users/sosibona/repos')
//     .then(response => response.json())
//     .then(data => console.log(data));
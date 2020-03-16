const loginForm = document.querySelector('.login-form');
const loginFormBtn = document.querySelector('.submit-button');
const errorForm = document.querySelector('.error-text');
let newUser;
const dataBaseUsers = 'https://5e6b6f91d708a000160b48ba.mockapi.io/api/v1/use';

const isValidity = () => {

  
  if (loginForm.reportValidity()) {
    loginFormBtn.disabled = false;
  }
}

loginForm.addEventListener('input', isValidity);

const onFormSubmit = event => {
  event.preventDefault();
  console.log(event);
  
  const formData = [...new FormData(loginForm)]
    .reduce((acc, arr) => ({...acc, [arr[0]]: arr[1]}) ,{});

    addNewUser(formData)
      .then(response => response.json())
      .then(user => {
        alert(JSON.stringify(user));
        loginForm.reset();
        loginFormBtn.disabled = true;
      })
      .catch(() => {
        
        errorForm.textContent = 'Failed to create user';
        loginForm.reset();
        loginFormBtn.disabled = true;
      })
  
}
loginForm.addEventListener('submit', onFormSubmit);

const addNewUser = user => {
  return fetch(dataBaseUsers, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    },
    body: JSON.stringify(user),
  });
}


// console.log(newUser);

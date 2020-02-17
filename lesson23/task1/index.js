const emailInputElem = document.querySelector('#email');
const passwordInputElem = document.querySelector('#password');

const emailErrorText = document.querySelector('.error-text-email');
const passwordErrorText = document.querySelector('.error-text-password');

const isRequired = value => {
  return value ? undefined : 'Required';
}

const isEmail = value => {
  return value.includes('@') ? undefined : 'Should be an email';
}

const validatorsByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
}

const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators.map(func => func(value))
  .filter(errorText => errorText)
  .join(', ');
}

const onEmailChange = event => {
  const errorText = validate('email', event.target.value);
  emailErrorText.textContent = errorText;
}

const onPasswordChange = event => {
  const errorText = validate('password', event.target.value);
  passwordErrorText.textContent = errorText;
}

emailInputElem.addEventListener('input', onEmailChange)
passwordInputElem.addEventListener('input', onPasswordChange)

const formElem = document.querySelector('.form');

const onFormSubmit = event => {
  event.preventDefault();
  const formData = [...new FormData(formElem)]
      .reduce((acc, [field, value]) => ({...acc, [field]: value}), {});
      
  alert(JSON.stringify(formData));
}

formElem.addEventListener('submit', onFormSubmit);

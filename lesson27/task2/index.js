const counterElem = document.querySelector('.counter');

const counterValueElem = document.querySelector('.counter__value');


const onCounterChange = e => {
  const isButton = e.target.classList.contains('counter__btn')
  
  if (!isButton) {
    return;
  }
  
  const action = e.target.dataset.action;
  
  const oldValue = Number(counterValueElem.textContent);

  const newValue = action === 'decrease'
  ? oldValue - 1
  : oldValue + 1;

  localStorage.setItem('counterValue', newValue);
  
  counterValueElem.textContent = newValue
}

counterElem.addEventListener('click', onCounterChange);

const onStorageChange = e => {
  console.log(e);
  counterValueElem.textContent = e.newValue;
  // return localStorage.getItem('counterValue');
}

window.addEventListener('storage', onStorageChange);

const onDocumentLoaded = () => {
  counterValueElem.textContent = localStorage.getItem('counter__value') || 0;  
}

document.addEventListener('DOMContentLoaded', onDocumentLoaded);
'use strict'

let message = 'Just learn it!';

function sendMessage(name) {
  const sender = 'Your Gromcode';

  console.log(`${name}, ${message} ${sender}`);
}

function setMessage(text) {
  message = text;
}

sendMessage('Taras');
setMessage('Good job!');
sendMessage('Ann');

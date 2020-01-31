'use strict'

let message = 'Just learn it!';

export function sendMessage(name) {
  const sender = 'Gromcode';

  console.log(`${name}, ${message}. Your ${sender}`);
}

function setMessage(text) {
  message = text;
}

sendMessage('Taras');
setMessage('Good job!');
sendMessage('Ann');
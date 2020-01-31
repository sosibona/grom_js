'use strict'

let message = 'Just learn it';
let sender = 'Gromcode';

export const createMessenger = () => {
  function sendMessage(name) {
    // const sender = 'Gromcode';

    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setMessage(text) {
    message = text;
  }

  function setSender(nameSender) {
    sender  = nameSender;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
};

console.log(createMessenger());

// const mes1 = createMessanger();
// const mes2 = createMessanger();

// mes1.sentMessage('Taras');
// // mes2.sentMessage('Olesya');
// mes1.setMessage('Good job');
// // mes2.setMessage('Good job');
// mes1.setSender('JS');
// mes1.sentMessage('Taras');
// // mes2.sentMessage('Olesya');
'use strict'

let message = 'Just learn it';
let sender = 'Gromcode';

const createMessanger = () => {
  function sentMessage(name) {
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
    sentMessage,
    setMessage,
    setSender,
  }
}

// const mes1 = createMessanger();
// const mes2 = createMessanger();

// mes1.sentMessage('Taras');
// // mes2.sentMessage('Olesya');
// mes1.setMessage('Good job');
// // mes2.setMessage('Good job');
// mes1.setSender('JS');
// mes1.sentMessage('Taras');
// // mes2.sentMessage('Olesya');
export default function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
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
    setSender
  }
}


const mes1 = createMessenger();
const mes2 = createMessenger();

mes1.sendMessage('Taras');
mes2.sendMessage('Olesya');

mes1.setMessage('Good job');
mes2.setMessage('Good job');

mes1.setSender('JS');
mes2.setSender('html');

mes1.sendMessage('Taras');
mes2.sendMessage('Olesya');
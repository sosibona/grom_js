  const player = ['Taras', 'Vasyl', 'Ivan', 'Andriy', 'Oleg', 'Kostya', 'Rostyslav', 'Nik', 'Volodymyr'];
  // const attemps = 2;
  // const diceNumber = 2;


  const listPlayer = document.querySelector('.game-table');
  const listWinner = document.querySelector('.winner');

function createNewGame(player, attemps, diceNumber){
  const resultOfGame = player.map(playerName => ({name: playerName, score: dropCube(attemps, diceNumber)}));      
  console.log(resultOfGame);
  
  return resultOfGame;
}

function dropCube(attemps, diceNumber) {
  const result = [];
  for (let i = 1; i <= diceNumber * attemps; i++) {
    result.push(Math.floor(Math.random() * (1 - 7) + 7));
  }
  return result.reduce((acc, idx) => acc + idx, 0);
}

// function checkWinner(resOfGame){
//   const sortWinner = resOfGame.sort((a, b) => b.score - a.score);
//   const winner = []
//   winner.push(sortWinner[0]);
//   for (let i = 1; i < sortWinner.length; i++) {
    
//     if (sortWinner[0].score === sortWinner[i].score) winner.push(sortWinner[i]);
//   }
//   return winner;
// }

// const renderTable = listOfPlayers => {
//   const listPlayerItem = listOfPlayers.map(({name, score}) => {
//     const listLine = document.createElement('tr')
//     const cellName = document.createElement('td')
//     listLine.append(cellName)
//     cellName.textContent = name;
//     const cellScore = document.createElement('td');
//     listLine.append(cellScore)
//     cellScore.textContent = score;

//     return listLine;
//   });

//   listWinner.append(...listPlayerItem);

//   return listPlayerItem;
// }


// // const res = createNewGame(player, attemps, diceNumber);
// const win = checkWinner(res);
// renderTable(win);

// const renderGameTable = resultOfGame => {
//   const listPlayer = document.querySelector('.game-table');

//   const listPlayerItem = resultOfGame.sort((a, b) => b.score - a.score).map(({name, score}) => {
//     const listLine = document.createElement('tr')
//     const cellName = document.createElement('td')
//     listLine.append(cellName)
//     cellName.textContent = name;
//     const cellScore = document.createElement('td');
//     listLine.append(cellScore)
//     cellScore.textContent = score;

//     return listLine;
//   });

//   listPlayer.append(...listPlayerItem);

//   return listPlayerItem;
// };

// renderGameTable(res);


const attemps2 = document.querySelector('#number');
const diceNumber2 = document.querySelector('#diceNumber');
const newGame = document.querySelector('.start-game');

// const onAttemps = 
// console.log(onAttemps);

const onDiceNumber = () => console.log(event.target.value);
// console.log(onDiceNumber);

// const startNewGame = () => createNewGame(player, attemps2, diceNumber2)


attemps2.addEventListener('input', function(){
  return event.target.value;
});
diceNumber2.addEventListener('input', onDiceNumber);
newGame.addEventListener('click', () => createNewGame(player, onAttemps, onDiceNumber));







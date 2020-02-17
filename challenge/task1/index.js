function runGame(players, attemps, diceNumber) {
  const resultOfGame = [];
  for (let player of players) {
    resultOfGame.push({name: player, score: dropCube(attemps, diceNumber)});
  }
  showResults(resultOfGame)
  const winner = checkWinners(resultOfGame);
  console.log(`############## - WINNER - ##############`);
  
  showResults(winner);
}

function showResults(results){
  results.forEach(player => console.log(player));
}

function sortWinner(gameResults){
  return gameResults.sort(function(a, b){
    return b.score - a.score;
  });  
}

function checkWinners(winner) {
  const sortWinnerOfGame = sortWinner(winner);
  const realWinner = [];
  let maxScore = 0;

  sortWinnerOfGame.forEach((playerResult) => {
    if (maxScore <= playerResult.score) {
      maxScore = playerResult.score;
      realWinner.push(playerResult);
    }
  });

  return realWinner;
}


function dropCube(attemps, diceNumber) {
  const result = [];
  for (let i = 1; i <= diceNumber * attemps; i++) {
    result.push(Math.floor(Math.random() * (1 - 7) + 7));
  }
  return result.reduce((acc, idx) => acc + idx, 0);
}

const winners = resultOfGame => {
  while (true) {

  }
}


runGame(['Taras', 'Vasyl', 'Ivan', 'Andriy', 'Oleg', 'Kostya', 'Rostyslav', 'Nik', 'Volodymyr'], 2, 2);

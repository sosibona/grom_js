const generateNamberRange = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i++) {
    result.push(i);
  }

  return result;
}

const getLineSeats = () => generateNamberRange(1, 10)
    .map(seatNumber => 
      `<div 
          class="sector__seat" 
          data-seat-number="${seatNumber}"
      ></div>`
    ).join('');


const getSectorLine = () => {
  const lineSeats = getLineSeats();
  return generateNamberRange(1, 10)
    .map(lineNumber => 
      `<div 
          class="sector__line" 
          data-line-number="${lineNumber}"
      >${lineSeats}</div>`
    ).join('');
}

const arenaElem = document.querySelector('.arena');

const renderArena = () => {
  const sectorLine = getSectorLine();

  const sectorString = generateNamberRange(1,3)
    .map(sectorNumber => 
      `<div 
          class="sector" 
          data-sector-number="${sectorNumber}"
      >${sectorLine}</div>`
    ).join('');

    console.log(sectorString);
    

  arenaElem.innerHTML = sectorString;
}

renderArena();


const onSeatSelected = event => {
  const isSeat = event.target.classList.contains('sector__seat');

  if (!isSeat) {
    return;
  }

  const seatNumber = event.target.dataset.seatNumber;
  const lineNumber = event.target.parentNode.dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

  const board = document.querySelector('.board__selected-seat');
  board.innerHTML = `S ${seatNumber} - L ${lineNumber} - S ${sectorNumber}`;

  // console.log(seatNumber, lineNumber, sectorNumber);
  
  
}

arenaElem.addEventListener('click', onSeatSelected);
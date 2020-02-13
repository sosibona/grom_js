const elemDiv = document.querySelector('.rect_div');
const elemP = document.querySelector('.rect_p');
const elemSpan = document.querySelector('.rect_span');

// const logTarget = (text, color) => {
//   const eventListElem = document.querySelector('.vents-list');

//   eventListElem.innerHTML += `<span style="color: ${color}">${text}</span>`;
// }

function logTarget (text, color){
  const eventListElem = document.querySelector('.events-list');

  eventListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
}

const logGreenDiv = logTarget.bind(null, 'DIV', 'green');
const logGreenP = logTarget.bind(null, 'P', 'green');
const logGreenSpan = logTarget.bind(null, 'Span', 'green');

const logGreyDiv = logTarget.bind(null, 'DIV', 'grey');
const logGreyP = logTarget.bind(null, 'P', 'grey');
const logGreySpan = logTarget.bind(null, 'Span', 'grey');



elemDiv.addEventListener('click', logGreyDiv, true);
elemP.addEventListener('click', logGreyP, true);
elemSpan.addEventListener('click', logGreySpan, true);


elemDiv.addEventListener('click', logGreenDiv);
elemP.addEventListener('click', logGreenP);
elemSpan.addEventListener('click', logGreenSpan);
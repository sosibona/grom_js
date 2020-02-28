import {timerId} from './index.js'

const btnRed = document.querySelector('.red-box');

btnRed.addEventListener('click', stopLine);

export function stopLine(){
  clearInterval(timerId)
}
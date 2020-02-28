import {go } from './index.js';
const btnGreen = document.querySelector('.green-box');

btnGreen.addEventListener('click', start)

export function start(){
  go();
}
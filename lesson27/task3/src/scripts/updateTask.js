
import {listElem, renderListItems} from './index.js';
import { sortingTask } from './sortTask.js'
import {setItem, getItem} from './storage.js'

const checkboxAllElem = document.querySelector('.list');

export function makeDoneTask(event) {
  const listTaskNow = event.target.closest('.list__item');
  listTaskNow.classList.toggle('list__item_done')

  const tasksList = getItem('tasksList');

  isDoneTask(tasksList, listTaskNow);

  setItem('tasksList', tasksList);

  listElem.innerHTML = '';
  renderListItems(sortingTask());
}

//check on done task
checkboxAllElem.addEventListener('click', makeDoneTask);
  
function isDoneTask(listTask, checkboxItem){
  listTask.forEach(elem => {
    if (elem.text === checkboxItem.textContent) {
      elem.done = !elem.done;
    }
  });
}
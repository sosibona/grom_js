import {setItem, getItem} from './storage.js'
import { renderListItems, listElem } from './index.js';

const btnCreateTask = document.querySelector('.todo__button');
let getTextFromInput = document.querySelector('.task-input')

btnCreateTask.addEventListener('click', createNewTask);

export function createNewTask(){
    let inputValue = getTextFromInput.value;
    if (inputValue.length === 0) return;

    const taskList = getItem('taskList') || [];

    taskList.push({
        text: inputValue,
        dateCreate: new Date(),
        done: false,
      });
      getTextFromInput.value = '';

      setItem('taskList', taskList);

      listElem.innerHTML = '';
      renderListItems();    
}
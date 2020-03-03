import {setItem, getItem} from './storage.js'
import { createNewTask } from './createTask.js';
import { sortingTask } from './sortTask.js';
import { makeDoneTask } from './updateTask.js'


document.addEventListener('DOMContentLoaded', () => {
  renderListItems();
});


export const listElem = document.querySelector('.list');

  export const renderListItems = () => {
    const taskList = getItem('taskList') || [];
    const listTasks = sortingTask(taskList);

    const makeListTasks = listTasks
      .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      const checkboxElem = document.createElement('input');

      checkboxElem.classList.add('list__checkbox');
      listItemElem.classList.add('list__item'); 
      checkboxElem.setAttribute('type', 'checkbox');

      if (done) listItemElem.classList.add('list__item_checked');
        checkboxElem.checked = done;
      listItemElem.append(checkboxElem, text);
      return listItemElem;
    });

    listElem.append(...makeListTasks);
    return makeListTasks;
  };


import {setItem, getItem} from './storage.js'
import { createNewTask } from './createTask.js';
import { sortingTask } from './sortTask.js';
import { makeDoneTask } from './updateTask.js'


document.addEventListener('DOMContentLoaded', () => {
  renderListItems();
});

const onStorageChange = e => {
  if (e.key === 'tasksList') {
    listElem.innerHTML = '';
    renderListItems();
  }
}

window.addEventListener('storage', onStorageChange)


export const listElem = document.querySelector('.list');

  export const renderListItems = () => {
    const tasksList = getItem('tasksList') || [];
    const listTasks = sortingTask(tasksList);

    const makeListTasks = listTasks
      .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      const checkboxElem = document.createElement('input');

      checkboxElem.classList.add('list__item-checkbox');
      listItemElem.classList.add('list__item'); 
      checkboxElem.setAttribute('type', 'checkbox');

      if (done) listItemElem.classList.add('list__item_done');
        checkboxElem.checked = done;
      listItemElem.append(checkboxElem, text);
      return listItemElem;
    });

    listElem.append(...makeListTasks);
    return makeListTasks;
  };


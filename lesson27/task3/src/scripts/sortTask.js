import {setItem, getItem} from './storage.js'

export function sortingTask(){

  const tasksList = getItem('tasksList') || [];

  const sortedTask = tasksList.sort((a, b) => a.done - b.done);
  const sortTask = [];
  const doneTask = sortedTask.filter(elem => elem.done === true).sort((a, b) => b.dateConfirmed - a.dateConfirmed);
  const notDoneTask = sortedTask.filter(elem => elem.done === false).sort((a, b) => b.dateCreate - a.dateCreate);
  sortTask.push(...notDoneTask, ...doneTask);

  setItem('tasksList', sortTask);

  return sortTask;
}
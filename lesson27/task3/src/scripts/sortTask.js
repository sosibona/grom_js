import {setItem, getItem} from './storage.js'

export function sortingTask(){

  const taskList = getItem('taskList') || [];

  const sortedTask = taskList.sort((a, b) => a.done - b.done);
  const sortTask = [];
  const doneTask = sortedTask.filter(elem => elem.done === true).sort((a, b) => b.dateConfirmed - a.dateConfirmed);
  const notDoneTask = sortedTask.filter(elem => elem.done === false).sort((a, b) => b.dateCreate - a.dateCreate);
  sortTask.push(...notDoneTask, ...doneTask);

  setItem('taskList', sortTask);

  return sortTask;
}
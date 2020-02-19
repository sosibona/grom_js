const btnCreateTask = document.querySelector('.todo__button');
const listElem = document.querySelector('.list');

const task = [
  { text: 'Buy milk', dateCreate: new Date(2019, 1), done: false, dateConfirmed: null },
  { text: 'Pick up Tom from airport', dateCreate: new Date(2018, 1), done: false, dateConfirmed: null },
  { text: 'Visit party', dateCreate: new Date(2020, 1), done: false, dateConfirmed: null },
  { text: 'Visit doctor', dateCreate: new Date(2018, 5), done: false, dateConfirmed: null },
  { text: 'Buy meat', dateCreate: new Date(2019, 7), done: false, dateConfirmed: null },
];    

// create new task
btnCreateTask.addEventListener('click', createNewTask);

function createNewTask(){
    let getText = document.querySelector('.task-input').value;
    if (getText.length === 0) return;
    task.push({
        text: getText,
        dateCreate: new Date(),
        done: false,
      });
      document.querySelector('.task-input').value = '';
      listElem.innerHTML = '';
      renderListItems(task);    
}

// make in html page list of Task
  const renderListItems = listItems => {
    const listTasks = sortingTask(listItems);

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
  
  renderListItems(task);


// make a done task
const checkboxAllElem = document.querySelector('.list');

function makeDoneTask(event) {
  const listTaskNow = event.target.closest('.list__item');
  listTaskNow.classList.toggle('list__item_checked')
  isDoneTask(task, listTaskNow);
  listElem.innerHTML = '';
  renderListItems(sortingTask(task));
}

//check on done task
checkboxAllElem.addEventListener('click', () => makeDoneTask(event));
  
function isDoneTask(listTask, checkboxItem){
  listTask.forEach(elem => {
    if (elem.text === checkboxItem.textContent) {
      elem.done = !elem.done;
    }
  });
}
  
//refresh our task by sort done and not done by time 

function sortingTask(listTask){
    const sortedTask = listTask.sort((a, b) => a.done - b.done);
    const sortTask = [];
    const doneTask = sortedTask.filter(elem => elem.done === true).sort((a, b) => b.dateConfirmed - a.dateConfirmed);
    const notDoneTask = sortedTask.filter(elem => elem.done === false).sort((a, b) => b.dateCreate - a.dateCreate);
    sortTask.push(...notDoneTask, ...doneTask);
    return sortTask;
}

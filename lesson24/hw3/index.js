const btnCreateTask = document.querySelector('.todo__button');

const task = [
    { text: 'Buy milk', dateCreate: new Date(2019, 1), done: false, dateConfirmed: null },
    { text: 'Pick up Tom from airport', dateCreate: new Date(2018, 1), done: false, dateConfirmed: null },
    { text: 'Visit party', dateCreate: new Date(2020, 1), done: false, dateConfirmed: null },
    { text: 'Visit doctor', dateCreate: new Date(2018, 5), done: false, dateConfirmed: null },
    { text: 'Buy meat', dateCreate: new Date(2019, 7), done: false, dateConfirmed: null },
  ];    
// create new task
function createNewTask(){
    let getText = document.querySelector('.task-input').value;
    if (getText.length === 0) return;
    task.unshift({
        text: getText,
        dateCreate: new Date(),
        done: false,
      });
      document.querySelector('.task-input').value = '';
      const listElem = document.querySelector('.list');
      listElem.innerHTML = '';
      renderListItems(task);    
}

  btnCreateTask.addEventListener('click', createNewTask);
// make in html page list of Task
  const renderListItems = listItems => {
    const listElem = document.querySelector('.list');

    const listTasks = refreshTask(listItems);
  
    const alistTasks = listTasks.sort((a, b) => a.done - b.done)
      .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      const checkboxElem = document.createElement('input');

      checkboxElem.classList.add('list__checkbox');
      listItemElem.classList.add('list__item'); 

      checkboxElem.setAttribute('type', 'checkbox');
      if (done) listItemElem.classList.add('list__item_checked');
        checkboxElem.checked = done;
      listItemElem.append(checkboxElem, text);
      console.log(listItemElem);
      return listItemElem;
    });

    listElem.append(...alistTasks);
  
    return alistTasks;
  };
  
  renderListItems(task);

// make a done task

  const checkboxAllElem = document.querySelectorAll('.list');
  const listElem = document.querySelector('.list');
  console.log(checkboxAllElem);

  for(let i = 0; i < checkboxAllElem.length; i++) {
      
    checkboxAllElem[i].addEventListener('click', function(){
        if (event.target.tagName !== 'INPUT') return;
        const checkboxItem = event.target.parentNode;
        console.log(checkboxItem.textContent);
        if (checkboxItem.classList.contains('list__item_checked')) {
            checkboxItem.classList.remove('list__item_checked');
            isDoneTask(task, checkboxItem);
            const newTask = refreshTask(task);
            listElem.innerHTML = '';
            console.log(newTask);
            renderListItems(newTask); 
        } else {
            checkboxItem.classList.add('list__item_checked');
            isDoneTask(task, checkboxItem);
            const newTask = refreshTask(task);
            listElem.innerHTML = '';
            console.log(newTask);
            
            renderListItems(newTask); 
        }
    });
}
//check on done task
function isDoneTask(listTask, checkboxItem){
    listTask.forEach(elem => {
        if (elem.text === checkboxItem.textContent) {
            elem.done = !elem.done;
            if (elem.dateConfirmed) {
              elem.dateConfirmed = null;
            } else {
              elem.dateConfirmed = new Date();
            }
        }
    });
}

//refresh our task by sort done and not done by time 

function refreshTask(listTask){
    const sortTask = [];
    const doneTask = listTask.filter(elem => elem.done === true).sort((a, b) => b.dateConfirmed - a.dateConfirmed);
    const notDoneTask = listTask.filter(elem => elem.done === false).sort((a, b) => b.dateCreate - a.dateCreate);
    sortTask.push(...notDoneTask, ...doneTask);
    return sortTask;
}

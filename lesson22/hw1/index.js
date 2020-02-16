const btnCreateTask = document.querySelector('.todo__button');

const task = [
    { text: 'Buy milk', dateCreate: new Date(), done: false },
    { text: 'Pick up Tom from airport', dateCreate: new Date(), done: false },
    { text: 'Visit party', dateCreate: new Date(), done: false },
    { text: 'Visit doctor', dateCreate: new Date(), done: true },
    { text: 'Buy meat', dateCreate: new Date(), done: true },
  ];    

function createNewTask(){
    let getText = document.querySelector('.task-input').value;
    if (getText.length === 0) return;
    task.push({
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



  const renderListItems = listItems => {
    const  listElem = document.querySelector('.list');
  
    const listTasks = listItems.sort((a, b) => a.done - b.done)
      .map(({ text, done }) => {
      const listItemElem = document.createElement('li');
      const checkboxElem = document.createElement('input')
      checkboxElem.classList.add('list__checkbox');
      checkboxElem.setAttribute('type', 'checkbox');
      listItemElem.classList.add('list__item'); 
      if (done) listItemElem.classList.add('list__item_checked');
        checkboxElem.checked = done;
      listItemElem.append(checkboxElem, text);
      return listItemElem;
    });

    console.log(listTasks);
    
    listElem.append(...listTasks);
  
    return listTasks;
  };
  
  renderListItems(task);


//   const checkboxElem = document.querySelector('.list__checkbox');

//   checkboxElem.addEventListener('click', doneTask);

//   function doneTask(){
//       const listItemElem = document.querySelector('.list__item');

//       listItemElem.classList.toggle('list__item_checked')

//       checkboxElem.setAttribute.toggle('checked', 'checked');
//   }

  
  
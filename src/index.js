import {toDo, addToDo, showToDos} from './todo.js';


function component() {
    const element = document.createElement('div');

    const btn = document.createElement('button');
    btn.textContent = 'Add';
    btn.addEventListener('click', () => {
        let newItem = toDo(1, 'Grocery shopping', false, '2022-06-17', 'low', 'Buy stuff and things');
        addToDo(newItem);
        showToDos();
    }); 

    element.append(btn);
  
    return element;
  }
  
  document.body.appendChild(component());
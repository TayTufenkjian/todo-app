import './style.css';
import {toDo, addToDo, showToDoForm, showToDos} from './todo.js';


function component() {
    const element = document.createElement('div');

    const btn = document.createElement('button');
    btn.textContent = 'Add';
    btn.addEventListener('click', () => {
        showToDoForm();
    }); 

    element.append(btn);
  
    return element;
  }
  
  document.body.appendChild(component());
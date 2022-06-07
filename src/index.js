import './style.css';
import {toDo, addToDo, showToDoForm, showToDos} from './todo.js';


document.addEventListener('DOMContentLoaded', () => {
    showToDos();
    listenForNewToDo();
});


function listenForNewToDo() {
    let btnAdd = document.getElementById('add-button');
    btnAdd.addEventListener('click', () => {
        let title = document.getElementById('title').value;
        let dueDate = document.getElementById('due-date').value;
        let priority = document.getElementById('priority').value;
        let description = document.getElementById('description').value;
        let complete = false;
        
        let newToDo = toDo(title, complete, dueDate, priority, description);
        
        addToDo(newToDo);

        showToDos();

        // Clear the form
        document.getElementById('add-toDo').reset();
    })
  }
  
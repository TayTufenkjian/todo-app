import {getToDos, toDoFactory, addToDo} from './todo.js';

function showToDoForm() {
    document.getElementById('add-todo').classList.remove('hidden');
}

function showToDos() {
    const allToDos = document.getElementById('all-todos');
    allToDos.innerHTML = '';   
    const toDos = getToDos();
    for (let item of toDos) {
        let itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.title} due on ${item.dueDate}`;
        allToDos.append(itemDiv);
    }
    document.body.appendChild(allToDos);
}

function listenForNewToDo() {
    let btnAdd = document.getElementById('add-button');
    btnAdd.addEventListener('click', () => {
        let title = document.getElementById('title').value;
        let dueDate = document.getElementById('due-date').value;
        let priority = document.getElementById('priority').value;
        let description = document.getElementById('description').value;
        let complete = false;
        
        let newToDo = toDoFactory(title, complete, dueDate, priority, description);
        
        addToDo(newToDo);

        showToDos();

        // Clear the form
        document.getElementById('add-todo').reset();
    })
  }


export {showToDoForm, showToDos, listenForNewToDo};
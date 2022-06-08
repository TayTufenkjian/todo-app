import {getToDos, toDoFactory, addToDo} from './todo.js';

function showToDoForm() {
    document.getElementById('add-todo').classList.remove('hidden');
}

function hideToDoForm() {
    document.getElementById('add-todo').classList.add('hidden');
}

function resetToDoForm() {
    document.getElementById('add-todo').reset();
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

function listenForAddNewForm() {
    let btnAddNew = document.getElementById('add-new');
    btnAddNew.addEventListener('click', () => {
        showToDoForm();
    });
}

function listenForAddNewToDo() {
    let btnAddItem = document.getElementById('add-item');
    btnAddItem.addEventListener('click', () => {
        let title = document.getElementById('title').value;
        let dueDate = document.getElementById('due-date').value;
        let priority = document.getElementById('priority').value;
        let description = document.getElementById('description').value;
        let complete = false;
        
        let newToDo = toDoFactory(title, complete, dueDate, priority, description);
        
        addToDo(newToDo);
        showToDos();

        resetToDoForm();
        hideToDoForm();

    })
  }


export {showToDoForm, showToDos, listenForAddNewForm, listenForAddNewToDo};
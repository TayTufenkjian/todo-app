import {getToDos, toDoFactory, addToDo} from './todo.js';


function createFormInput(type, id, name, labelText) {
    let div = document.createElement('div');
    div.classList.add('form-field');
    
    let label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText;

    let input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.name = name;

    div.append(label, input);   
    return div;
}


function showAddToDoForm() {
    let form = document.createElement('form');
    form.id = 'add-new';

    let titleField = createFormInput('text', 'title', 'title', 'Title');
    let dueDateField = createFormInput('date', 'due-date', 'due-date', 'Due');
    let priorityField = createFormInput('number', 'priority', 'priority', 'Priority');

    let btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'add-item';
    btn.textContent = 'Add item';
    btn.addEventListener('click', () => {
        let title = document.getElementById('title').value;
        let dueDate = document.getElementById('due-date').value;
        let priority = document.getElementById('priority').value;
        let complete = false;
        
        let newToDo = toDoFactory(title, complete, dueDate, priority);
        
        addToDo(newToDo);
        showToDos();

        form.reset();
        form.remove();
    })

    form.append(titleField, dueDateField, priorityField, btn);
    document.getElementById('form-container').append(form);
}


function showEditToDoForm() {
    let form = document.createElement('form');
    form.id = 'edit-todo';

    let titleField = createFormInput('text', 'title', 'title', 'Title');
    let dueDateField = createFormInput('date', 'due-date', 'due-date', 'Due');
    let priorityField = createFormInput('number', 'priority', 'priority', 'Priority');
    
    let descriptionField = document.createElement('textarea');
    descriptionField.id = 'description';
    descriptionField.name = 'description';
    descriptionField.placeholder = 'Description';

    let btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'edit-item';
    btn.textContent = 'Save';

    form.append(titleField, dueDateField, priorityField, descriptionField, btn);
    document.getElementById('form-container').append(form);
}


function showToDos() {
    const allToDos = document.getElementById('all-todos');
    allToDos.innerHTML = '';   
    const toDos = getToDos();
    for (let item of toDos) {
        let itemDiv = document.createElement('div');
        itemDiv.id = item.id;
        itemDiv.textContent = `${item.title} due on ${item.dueDate}`;
        let btn = document.createElement('button');
        btn.textContent = 'Edit';
        btn.addEventListener('click', () => {
            showEditToDoForm();
        });

        allToDos.append(itemDiv, btn);
    }
}


function listenForAddNewForm() {
    let btnAddNew = document.getElementById('add-new');
    btnAddNew.addEventListener('click', () => {
        showAddToDoForm();
    });
}


export {showToDos, listenForAddNewForm};
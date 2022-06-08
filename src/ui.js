import {getToDos, getToDo, toDoFactory, addToDo, editToDo, markDone} from './todo.js';


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
        
        let newToDo = toDoFactory(title, dueDate, priority);
        
        addToDo(newToDo);
        form.remove();
        showToDos();
    })

    form.append(titleField, dueDateField, priorityField, btn);
    document.getElementById('form-container').append(form);
}


function showEditToDoForm(id) {
    let form = document.createElement('form');
    form.id = 'edit-todo';

    let titleField = createFormInput('text', 'title', 'title', 'Title');
    let dueDateField = createFormInput('date', 'due-date', 'due-date', 'Due');
    let priorityField = createFormInput('number', 'priority', 'priority', 'Priority');

    let descriptionField = document.createElement('div');
    descriptionField.classList.add('form-field');
    let descriptionLabel = document.createElement('label')
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.textContent = 'Description';
    let descriptionArea = document.createElement('textarea');
    descriptionArea.id = 'description';
    descriptionArea.name = 'description';
    descriptionField.append(descriptionLabel, descriptionArea);
   
    let btn = document.createElement('button');
    btn.type = 'button';
    btn.id = 'edit-item';
    btn.textContent = 'Save';
    btn.addEventListener('click', () => {
        let title = document.getElementById('title').value;
        let dueDate = document.getElementById('due-date').value;
        let priority = document.getElementById('priority').value;
        let description = document.getElementById('description').value;

        editToDo(id, title, dueDate, priority, description);
        form.remove();
        showToDos();
    })

    form.append(titleField, dueDateField, priorityField, descriptionField, btn);
    document.getElementById('form-container').append(form);

    // Pre-fill form fields with any existing values
    let toDo = getToDo(id);
    document.getElementById('title').value = toDo.title;
    document.getElementById('due-date').value = toDo.dueDate;
    document.getElementById('priority').value = toDo.priority;
    document.getElementById('description').value = toDo.description;
}


function showToDos() {
    const allToDos = document.getElementById('all-todos');
    allToDos.innerHTML = '';   
    const toDos = getToDos();
    for (let item of toDos) {
        let itemDiv = document.createElement('li');
        itemDiv.id = item.id;

        if (item.complete) {
            itemDiv.classList.add('done');
        }

        let titleDiv = document.createElement('div');
        titleDiv.textContent = `${item.title}`;

        let dueDateDiv = document.createElement('div');
        dueDateDiv.textContent = `${item.dueDate}`;

        let btnEditDiv = document.createElement('div');
        let btnEdit = document.createElement('button');
        btnEdit.textContent = 'Edit';
        btnEdit.addEventListener('click', () => {
            showEditToDoForm(item.id);
        });
        btnEditDiv.append(btnEdit);

        let btnDoneDiv = document.createElement('div');
        let btnDone = document.createElement('button');
        btnDone.textContent = 'Mark done';
        btnDone.addEventListener('click', () => {
            markDone(item.id);
            showToDos();
        });
        btnDoneDiv.append(btnDone);
        
        itemDiv.append(titleDiv, dueDateDiv, btnEditDiv, btnDoneDiv);
        allToDos.append(itemDiv);
    }
}


function listenForAddNewForm() {
    let btnAddNew = document.getElementById('add-new');
    btnAddNew.addEventListener('click', () => {
        showAddToDoForm();
    });
}


export {showToDos, listenForAddNewForm};
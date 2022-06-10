import {createFormInput, createButtonInDiv, clearPageContent, createPageHeader} from './ui-helpers.js';
import {getToDos, getToDo, addToDo, editToDo, markDone, deleteToDo} from './todo.js';
import {showListItems} from './list-ui.js';


function showAddToDoForm(list=0) {
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
        
        addToDo(title, dueDate, priority, list);
        form.remove();

        if (list === 0) {
            showAllToDos();
        } else {
            showListItems(list);
        }
    })

    form.append(titleField, dueDateField, priorityField, btn);
    document.querySelector('main').append(form);
}


function showEditToDoForm(id) {
    let form = document.createElement('form');
    form.classList.add('edit-todo');

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

        // If editing from a list page, reload that list
        // Otherwise, reload all todos
        let header = document.querySelector('h1');
        if (header.id === '') {
            showAllToDos();
        } else {
            showListItems(parseInt(header.id));
        }

    });

    form.append(titleField, dueDateField, priorityField, descriptionField, btn);
    document.querySelector('.todos').insertBefore(form, document.getElementById(`item-${id + 1}`));

    // Pre-fill form fields with any existing values
    let toDo = getToDo(id);
    document.getElementById('title').value = toDo.title;
    document.getElementById('due-date').value = toDo.dueDate;
    document.getElementById('priority').value = toDo.priority;
    document.getElementById('description').value = toDo.description;
}


function showToDos(arrToDos) {
    let div = document.createElement('div');
    div.classList.add('todos');

    for (let item of arrToDos) {
        let itemDiv = document.createElement('li');
        itemDiv.id = `item-${item.id}`;

        if (item.done) {
            itemDiv.classList.add('done');
        }

        let titleDiv = document.createElement('div');
        titleDiv.textContent = `${item.title}`;

        let dueDateDiv = document.createElement('div');
        dueDateDiv.textContent = `${item.dueDate}`;

        let btnEditDiv = createButtonInDiv('Edit', showEditToDoForm, item.id, false);
        let btnDoneDiv = createButtonInDiv('Mark done', markDone, item.id, true);
        let btnDeleteDiv = createButtonInDiv('Delete', deleteToDo, item.id, true);
        
        itemDiv.append(titleDiv, dueDateDiv, btnEditDiv, btnDoneDiv, btnDeleteDiv);
        div.append(itemDiv);
    }
    return div;
}


function showAllToDos() {
    clearPageContent();
    let header = createPageHeader('All To Dos');

    let allToDos = getToDos();
    let allToDosDiv = showToDos(allToDos);

    let btn = createButtonInDiv('Add new', showAddToDoForm, 0, false);

    document.querySelector('main').append(header, allToDosDiv, btn);
}


function listenForShowToDos() {
    document.getElementById('show-todos').addEventListener('click', () => {
        showAllToDos();
    });
}


export {showToDos, showAllToDos, listenForShowToDos, showAddToDoForm};
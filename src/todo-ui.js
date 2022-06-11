import {createFormInput, createButton,createButtonInDiv, clearPageContent, createPageHeader} from './ui-helpers.js';
import {getToDos, getToDo, addToDo, editToDo, setDone, deleteToDo} from './todo.js';
import {showListItems} from './list-ui.js';


function showAddToDoForm(listID=0) {
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
        
        addToDo(title, dueDate, priority, listID);
        form.remove();

        // If adding a new todo from the all todos page, reload all todo items
        // Otherwise reload list items
        if (listID === 0) {
            showAllToDos();
        } else {
            showListItems(listID);
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

        // If editing from the all todos page, reload all todo items
        // Otherwise reload list items
        let header = document.querySelector('h1');
        if (header.id === '') {
            showAllToDos();
        } else {
            showListItems(parseInt(header.id));
        }
    });

    form.append(titleField, dueDateField, priorityField, descriptionField, btn);

    // Remove the todo details and show the form in its place
    document.getElementById(`details-${id}`).remove();
    document.getElementById(`${id}`).append(form);
    

    // Pre-fill form fields with any existing values
    let toDo = getToDo(id);
    document.getElementById('title').value = toDo.title;
    document.getElementById('due-date').value = toDo.dueDate;
    document.getElementById('priority').value = toDo.priority;
    document.getElementById('description').value = toDo.description;
}


function showToDos(arrToDos, listID=0) {
    // Generate an HTML unordered list from any array of todo items
    let unorderedList = document.createElement('ul');
    unorderedList.classList.add('todos');
    
    for (let item of arrToDos) {
        let todoElement = document.createElement('li');
        todoElement.id = `${item.id}`;

        let titleDiv = document.createElement('div');
        titleDiv.textContent = `${item.title}`;

        let dueDateDiv = document.createElement('div');
        dueDateDiv.textContent = `${item.dueDate}`;

        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        // If the todo item is done, check the box and add strikethrough styling
        if (item.done) {
            checkbox.checked = true;
            todoElement.classList.add('done');
        }

        // Listen for a click on the checkbox to toggle the done state and strikethrough styling
        checkbox.addEventListener('click', () => {
            setDone(parseInt(item.id), checkbox.checked);
            if (checkbox.checked === true) {
                checkbox.parentElement.classList.add('done');
            } else {
                checkbox.parentElement.classList.remove('done');
            }
         });
       
        let summary = document.createElement('div');
        summary.classList.add('summary');
        summary.addEventListener('click', () => {
            toggleDetails(item.id, listID);
        });

        summary.append(titleDiv, dueDateDiv);
        todoElement.append(checkbox, summary);
        unorderedList.append(todoElement);
    }
    return unorderedList;
}


function showAllToDos() {
    clearPageContent();
    let header = createPageHeader('All To Dos');
    document.querySelector('main').append(header);

    let allToDos = getToDos();
    let allToDosDiv = showToDos(allToDos);

    let btnDiv = createButtonInDiv('Add new', showAddToDoForm);
    btnDiv.classList.add('add-new');

    document.querySelector('main').append(allToDosDiv, btnDiv);
}


function listenForShowToDos() {
    document.getElementById('show-todos').addEventListener('click', () => {
        showAllToDos();
    });
}


function showToDoDetails(id, listID=0) {
    let divDetails = document.createElement('div');
    divDetails.id = `details-${id}`;
    divDetails.classList.add('todo-details');

    // Get the additional properties of the todo item
    let toDo = getToDo(id);
    let propertiesToShow = [
        {'Priority': toDo.priority},
        {'Description': toDo.description}
    ]

    propertiesToShow.forEach(property => {
        for (let key in property) {     
            let divContainer = document.createElement('div');
            divContainer.classList.add('todo-property');
            let propertyName = document.createElement('div');
            propertyName.classList.add('detail-name');
            propertyName.textContent = key;
            let propertyValue = document.createElement('div');
            propertyValue.classList.add('detail-value');
            propertyValue.textContent = `${property[key]}`;
          
            divContainer.append(propertyName, propertyValue);
            divDetails.append(divContainer);
        }
    })

    // Create the action buttons for edit, mark done, and delete
    let editFunction = () => {
        showEditToDoForm(id);
    }

    let deleteFunction = () => {
        deleteToDo(id);
        if (listID === 0) {
            showAllToDos();
        } else {
            showListItems(listID);
        }
    }

    let btnEdit = createButton('Edit', editFunction);
    btnEdit.classList.add('edit');

    let btnDelete = createButton('Delete', deleteFunction);
    btnDelete.classList.add('delete');
    
    let buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('options');    
    buttonsContainer.append(btnEdit, btnDelete);

    // Add the properties and the buttons
    divDetails.append(buttonsContainer);
    document.getElementById(`${id.toString()}`).append(divDetails);
}


function toggleDetails(id, listID) {
    if (document.getElementById(`details-${id}`)) {
        document.getElementById(`details-${id}`).remove();
    } else {
        showToDoDetails(id, listID);
    }
}


function reloadItems() {
    //If editing from the all todos page, reload all todo items
    //Otherwise reload list items
    let header = document.querySelector('h1');
    if (header.id === '') {
        showAllToDos();
    } else {
        showListItems(parseInt(header.id));
    }   
}


export {showToDos, showAllToDos, listenForShowToDos, showAddToDoForm};
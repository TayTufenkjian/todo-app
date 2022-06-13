import {createInput, createFormField, createPriorityField,createButton,createButtonInDiv, clearPageContent, createPageHeader} from './ui-helpers.js';
import {getToDosSortedByDate, getToDo, addToDo, editToDo, setDone, deleteToDo, getMonthAndDay} from './todo.js';
import {showListItems} from './list-ui.js';
import {getLists, getListName} from './list.js';
import highPriorityIcon from './img/icon-high-priority.svg';
import mediumPriorityIcon from './img/icon-medium-priority.svg';
import lowPriorityIcon from './img/icon-low-priority.svg';
 

function showAddToDoForm(listID=0) {
    // Check if the add-new-item form is already on the page
    if (document.getElementById('add-new-item')) {return}

    let form = document.createElement('form');
    form.id = 'add-new-item';

    let titleField = createFormField('text', 'title', 'title', 'Title', true);
    let dueDateField = createFormField('date', 'due-date', 'due-date', 'Due');
    let priorityField = createPriorityField('priority');

    let btnAdd = document.createElement('input');
    btnAdd.type = 'submit';
    btnAdd.id = 'add-item';
    btnAdd.value = 'Add item';

    form.onsubmit = () => {
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

        // Prevent the form from actually submitting
        return false;
    }

    let cancelFunction = () => document.getElementById('add-new-item').remove();
    let btnCancel = createButton('Cancel', cancelFunction);

    form.append(titleField, dueDateField, priorityField, btnAdd, btnCancel);
    document.querySelector('main').append(form);
}


function showEditToDoForm(id) {
    let form = document.createElement('form');
    form.classList.add('edit-todo');

    let titleInput = createInput('text', `title-${id}`, 'title');
    titleInput.classList.add('title');

    let dueDateInput = createInput('date', `due-date-${id}`, 'due-date');

    let priorityField = createPriorityField(`priority-${id}`);

    let descriptionField = document.createElement('div');
    descriptionField.classList.add('form-field');
    let descriptionLabel = document.createElement('label')
    descriptionLabel.setAttribute('for', `description-${id}`);
    descriptionLabel.textContent = 'Description';
    let descriptionArea = document.createElement('textarea');
    descriptionArea.id = `description-${id}`;
    descriptionArea.name = 'description';
    descriptionField.append(descriptionLabel, descriptionArea);

    let listField = document.createElement('div');
    listField.classList.add('form-field');
    let listLabel = document.createElement('label');
    listLabel.textContent = 'List';
    listLabel.for = `list-${id}`;
    let listSelect = document.createElement('select');
    listSelect.name = 'list';
    listSelect.id = `list-${id}`;
    let lists = getLists();
    for (let list of lists) {
        let listOption = document.createElement('option');
        listOption.value = list.id;
        listOption.textContent = getListName(list.id);
        listSelect.append(listOption);
    }
    listField.append(listLabel, listSelect);
   
    let btnSave = document.createElement('button');
    btnSave.type = 'button';
    btnSave.class = 'edit-item';
    btnSave.textContent = 'Save';
    btnSave.addEventListener('click', () => {
        let title = document.getElementById(`title-${id}`).value;
        let dueDate = document.getElementById(`due-date-${id}`).value;
        let priority = document.getElementById(`priority-${id}`).value;
        let description = document.getElementById(`description-${id}`).value;
        let list = parseInt(document.getElementById(`list-${id}`).value);

        editToDo(id, title, dueDate, priority, description, list);
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

    // Replace the summary title and date with the relevant input elements
    let todoElement = document.getElementById(`todo-${id}`);
    let summary = document.querySelector(`#todo-${id} .summary`);
    let summaryInputs = document.createElement('div');
    summaryInputs.classList.add('summary-inputs');
    summaryInputs.append(titleInput, dueDateInput);
    todoElement.insertBefore(summaryInputs, summary);
    summary.remove();

    // Append the other fields and the button to the form
    form.append(priorityField, descriptionField, listField, btnSave);

    // Remove the todo details and show the form in its place
    document.getElementById(`details-${id}`).remove();
    document.getElementById(`todo-${id}`).append(form);
    
    // Pre-fill all input elements with any existing values
    let toDo = getToDo(id);
    document.getElementById(`title-${id}`).value = toDo.title;
    document.getElementById(`due-date-${id}`).value = toDo.dueDate;
    document.getElementById(`priority-${id}`).value = toDo.priority;
    document.getElementById(`description-${id}`).value = toDo.description;
    document.getElementById(`list-${id}`).value = `${toDo.list}`;

    // Create and append the Cancel button
    let cancelFunction = () => {
        document.querySelector(`#todo-${id} .edit-todo`).remove();
        document.querySelector(`#todo-${id} .summary-inputs`).remove();
        document.querySelector(`#todo-${id}`).append(summary);
        showToDoDetails(id, toDo.list);
    }
    let btnCancel = createButton('Cancel', cancelFunction);
    form.append(btnCancel);
}


function showToDos(arrToDos, listID=0) {
    // Generate an HTML unordered list from any array of todo items
    let unorderedList = document.createElement('ul');
    unorderedList.classList.add('todos');
    
    for (let item of arrToDos) {
        let todoElement = document.createElement('li');
        todoElement.id = `todo-${item.id}`;
        todoElement.classList.add('collapsed');

        let titleDiv = document.createElement('div');
        titleDiv.classList.add('title');
        titleDiv.textContent = `${item.title}`;

        let dueDateDiv = document.createElement('div');
        dueDateDiv.classList.add('due');
        let displayDate = getMonthAndDay(item.dueDate);
        dueDateDiv.textContent = `${displayDate.month} ${displayDate.day}`;

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

        // Display icon based on priority level
        let priorityIndicator = document.createElement('img');
        switch (item.priority) {
            case 'high':
                priorityIndicator.src = highPriorityIcon;
                break;
            case 'medium':
                priorityIndicator.src = mediumPriorityIcon;
                break;
            case 'low':
                priorityIndicator.src = lowPriorityIcon;
                break;
            default:
                console.log('Woops. Something went wrong');
        }
       
        let summary = document.createElement('div');
        summary.classList.add('summary');
        summary.addEventListener('click', (event) => {
            toggleDetails(item.id, listID);
        });

        summary.append(titleDiv, dueDateDiv);
        todoElement.append(checkbox, summary, priorityIndicator);
        unorderedList.append(todoElement);
    }
    return unorderedList;
}


function showAllToDos() {
    clearPageContent();
    let header = createPageHeader('All To Dos');
    document.querySelector('main').append(header);

    let allToDos = getToDosSortedByDate();
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
        {'Description': toDo.description},
        {'List': getListName(toDo.list)}
    ]

    propertiesToShow.forEach(property => {
        for (let key in property) {     
            let divContainer = document.createElement('div');
            divContainer.classList.add('todo-property', `${key.toLowerCase()}`);
            let propertyName = document.createElement('div');
            propertyName.classList.add('detail-name');
            propertyName.textContent = key;
            let propertyValue = document.createElement('div');
            propertyValue.classList.add('detail-value');
            propertyValue.textContent = `${property[key]}`;

            // Add an extra class for a clickable list name
            if (key === 'List' && toDo.list) {
                propertyValue.classList.add('clickable');
            }
          
            divContainer.append(propertyName, propertyValue);
            divDetails.append(divContainer);
        }
    })

    // Create the action buttons for edit and delete
    let editFunction = () => {
        showEditToDoForm(id);
    }

    let deleteFunction = () => {
        let confirmDelete = confirm('Do you really want to delete this to-do item?');
        if (confirmDelete) {
            deleteToDo(id);
            if (listID === 0) {
                showAllToDos();
            } else {
                showListItems(listID);
            }
        }
    }

    let btnEdit = createButton('Edit', editFunction);
    btnEdit.classList.add('edit');

    let btnDelete = createButton('Delete', deleteFunction);
    btnDelete.classList.add('delete');
    
    let buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('options');    
    buttonsContainer.append(btnEdit, btnDelete);

    // Add the properties and the buttons to the page
    divDetails.append(buttonsContainer);
    document.getElementById(`todo-${id}`).append(divDetails);

    // Listen for a click on the list name
    document.querySelector(`#details-${id} .list`).addEventListener('click', () => {
        if (toDo.list) {
            showListItems(toDo.list);
        }
    });
}


function toggleDetails(id, listID) {
    let toDoElement = document.getElementById(`todo-${id}`);
    if (document.getElementById(`details-${id}`)) {
        document.getElementById(`details-${id}`).remove();
        toDoElement.classList.remove('active');
        toDoElement.classList.add('collapsed');
    } else {
        showToDoDetails(id, listID);
        toDoElement.classList.add('active');
        toDoElement.classList.remove('collapsed');
    }
}


export {showToDos, showAllToDos, listenForShowToDos, showAddToDoForm};
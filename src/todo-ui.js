import {
  createInput, createFormField, createPriorityField, createButton, createButtonInDiv,
  clearPageContent, createPageHeader, updateActiveNavItem,
} from './ui-helpers';

import {
  getToDosSortedByDate, getToDo, addToDo, editToDo, setDone, deleteToDo, getMonthAndDay,
} from './todo';

import { showListItems } from './list-ui';
import { getLists, getListName } from './list';
import highPriorityIcon from './img/icon-high-priority.svg';
import mediumPriorityIcon from './img/icon-medium-priority.svg';
import lowPriorityIcon from './img/icon-low-priority.svg';

// Get the main element to which multiple functions will append child elements
const main = document.querySelector('main');

function showAddToDoForm(listID = 0) {
  // Check if the add-new-item form is already on the page
  if (document.getElementById('add-new-item')) {
    return;
  }

  const form = document.createElement('form');
  form.id = 'add-new-item';

  const titleField = createFormField('text', 'title', 'title', 'Title', true);
  const dueDateField = createFormField('date', 'due-date', 'due-date', 'Due');
  const priorityField = createPriorityField('priority');

  // Using a submit input to trigger validation for required form elements
  const btnAdd = document.createElement('input');
  btnAdd.type = 'submit';
  btnAdd.id = 'add-item';
  btnAdd.classList.add('primary');
  btnAdd.value = 'Add item';

  form.onsubmit = () => {
    const title = document.getElementById('title').value;
    const dueDate = document.getElementById('due-date').value;
    const priority = document.getElementById('priority').value;

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
  };

  const cancelFunction = () => document.getElementById('add-new-item').remove();
  const btnCancel = createButton('Cancel', cancelFunction, 'secondary');

  form.append(titleField, dueDateField, priorityField, btnAdd, btnCancel);
  main.append(form);
}

function showEditToDoForm(id, listID = 0) {
  const form = document.createElement('form');
  form.classList.add('edit-todo');

  const titleInput = createInput('text', `title-${id}`, 'title');
  titleInput.classList.add('title');

  const dueDateInput = createInput('date', `due-date-${id}`, 'due-date');
  dueDateInput.classList.add('due');

  const priorityField = createPriorityField(`priority-${id}`);

  const descriptionField = document.createElement('div');
  descriptionField.classList.add('form-field');
  const descriptionLabel = document.createElement('label');
  descriptionLabel.setAttribute('for', `description-${id}`);
  descriptionLabel.textContent = 'Description';
  const descriptionArea = document.createElement('textarea');
  descriptionArea.id = `description-${id}`;
  descriptionArea.name = 'description';
  descriptionField.append(descriptionLabel, descriptionArea);

  const listField = document.createElement('div');
  listField.classList.add('form-field');
  const listLabel = document.createElement('label');
  listLabel.textContent = 'List';
  listLabel.for = `list-${id}`;
  const listSelect = document.createElement('select');
  listSelect.name = 'list';
  listSelect.id = `list-${id}`;
  const lists = getLists();
  lists.forEach((list) => {
    const listOption = document.createElement('option');
    listOption.value = list.id;
    listOption.textContent = getListName(list.id);
    listSelect.append(listOption);
  });
  listField.append(listLabel, listSelect);

  const btnSave = document.createElement('button');
  btnSave.type = 'button';
  btnSave.classList.add('edit-item', 'primary');
  btnSave.textContent = 'Save';
  btnSave.addEventListener('click', () => {
    const title = document.getElementById(`title-${id}`).value;
    const dueDate = document.getElementById(`due-date-${id}`).value;
    const priority = document.getElementById(`priority-${id}`).value;
    const description = document.getElementById(`description-${id}`).value;
    const list = parseInt(document.getElementById(`list-${id}`).value, 10);

    editToDo(id, title, dueDate, priority, description, list);
    form.remove();

    // If editing from the all todos page, reload all todo items
    // Otherwise reload list items
    if (listID === 0) {
      showAllToDos();
    } else {
      showListItems(listID);
    }
  });

  // Get the todo item element
  const toDoElement = document.getElementById(`todo-${id}`);

  // Replace the current title and date with the corresponding input elements
  const currentTitle = document.querySelector(`#todo-${id} .title`);
  const currentDueDate = document.querySelector(`#todo-${id} .due`);
  toDoElement.insertBefore(titleInput, currentTitle);
  toDoElement.insertBefore(dueDateInput, currentDueDate);
  currentTitle.remove();
  currentDueDate.remove();

  // Remove priority indicator icon
  const priorityIndicator = document.querySelector(`#todo-${id} img`);
  priorityIndicator.remove();

  // Append the other fields and the button to the form
  form.append(priorityField, descriptionField, listField, btnSave);

  // Remove the todo details and show the form in its place
  document.getElementById(`details-${id}`).remove();
  toDoElement.append(form);

  // Pre-fill all input elements with any existing values
  const toDo = getToDo(id);
  document.getElementById(`title-${id}`).value = toDo.title;
  document.getElementById(`due-date-${id}`).value = toDo.dueDate;
  document.getElementById(`priority-${id}`).value = toDo.priority;
  document.getElementById(`description-${id}`).value = toDo.description;
  document.getElementById(`list-${id}`).value = `${toDo.list}`;

  // Create and append the Cancel button
  const cancelFunction = () => {
    document.querySelector(`#todo-${id} .edit-todo`).remove();
    document.querySelector(`#todo-${id} input.title`).remove();
    document.querySelector(`#todo-${id} input.due`).remove();
    toDoElement.append(currentTitle, currentDueDate, priorityIndicator);
    toDoElement.classList.remove('active');
  };
  const btnCancel = createButton('Cancel', cancelFunction, 'secondary');
  form.append(btnCancel);
}

function showToDos(arrToDos, listID = 0) {
  // Generate an HTML unordered list from any array of todo items
  const unorderedList = document.createElement('ul');
  unorderedList.classList.add('todos');

  arrToDos.forEach((item) => {
    const todoElement = document.createElement('li');
    todoElement.id = `todo-${item.id}`;
    todoElement.classList.add('collapsed');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title', 'summary');
    titleDiv.textContent = `${item.title}`;
    titleDiv.addEventListener('click', () => {
      toggleDetails(item.id, listID);
    });

    const dueDateDiv = document.createElement('div');
    dueDateDiv.classList.add('due', 'summary');
    const displayDate = getMonthAndDay(item.dueDate);
    dueDateDiv.textContent = `${displayDate.month} ${displayDate.day}`;
    dueDateDiv.addEventListener('click', () => {
      toggleDetails(item.id, listID);
    });

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // If the todo item is done, check the box and add strikethrough styling
    if (item.done) {
      checkbox.checked = true;
      todoElement.classList.add('done');
    }

    // Listen for a click on the checkbox to toggle the done state and strikethrough styling
    checkbox.addEventListener('click', () => {
      setDone(parseInt(item.id, 10), checkbox.checked);
      if (checkbox.checked === true) {
        checkbox.parentElement.classList.add('done');
      } else {
        checkbox.parentElement.classList.remove('done');
      }
    });

    // Display icon based on priority level
    const priorityIndicator = document.createElement('img');
    priorityIndicator.classList.add('priority-icon');
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
        console.log('Woops. Something went wrong with the priority icon.');
    }

    todoElement.append(checkbox, titleDiv, dueDateDiv, priorityIndicator);
    unorderedList.append(todoElement);
  });
  return unorderedList;
}

function showAllToDos() {
  clearPageContent();
  const header = createPageHeader('All To Dos');
  main.append(header);

  const allToDos = getToDosSortedByDate();
  const allToDosDiv = showToDos(allToDos);

  const btnDiv = createButtonInDiv('Add new', showAddToDoForm, 'primary');
  btnDiv.classList.add('add-new');

  main.append(allToDosDiv, btnDiv);
}

function listenForShowToDos() {
  document.getElementById('show-todos').addEventListener('click', () => {
    showAllToDos();
  });
}

function showToDoDetails(id, listID = 0) {
  const divDetails = document.createElement('div');
  divDetails.id = `details-${id}`;
  divDetails.classList.add('todo-details');

  // Get the additional properties of the todo item
  const toDo = getToDo(id);
  const propertiesToShow = [
    { Priority: toDo.priority },
    { Description: toDo.description },
    { List: getListName(toDo.list) },
  ];

  propertiesToShow.forEach((property) => {
    const keys = Object.keys(property);
    keys.forEach((key) => {
      const divContainer = document.createElement('div');
      divContainer.classList.add('todo-property', `${key.toLowerCase()}`);
      const propertyName = document.createElement('div');
      propertyName.classList.add('detail-name');
      propertyName.textContent = key;
      const propertyValue = document.createElement('div');
      propertyValue.classList.add('detail-value');
      propertyValue.textContent = `${property[key]}`;

      // Add an extra class for a clickable list name
      if (key === 'List' && toDo.list) {
        propertyValue.classList.add('clickable');
      }

      divContainer.append(propertyName, propertyValue);
      divDetails.append(divContainer);
    });
  });

  // Create the edit and delete buttons
  const editFunction = () => {
    showEditToDoForm(id, listID);
  };

  const deleteFunction = () => {
    // eslint-disable-next-line no-restricted-globals
    const confirmDelete = confirm('Do you really want to delete this to-do item?');
    if (confirmDelete) {
      deleteToDo(id);
      if (listID === 0) {
        showAllToDos();
      } else {
        showListItems(listID);
      }
    }
  };

  const btnEdit = createButton('Edit', editFunction, 'primary');
  const btnDelete = createButton('Delete', deleteFunction, 'secondary');

  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('options');
  buttonsContainer.append(btnEdit, btnDelete);

  // Add the properties and the buttons to the page
  divDetails.append(buttonsContainer);
  document.getElementById(`todo-${id}`).append(divDetails);
  document.getElementById(`details-${id}`).style.maxHeight = `${divDetails.scrollHeight}px`;

  // Listen for a click on the list name
  document.querySelector(`#details-${id} .list`).addEventListener('click', () => {
    if (toDo.list) {
      showListItems(toDo.list);
      updateActiveNavItem('show-lists');
    }
  });
}

function toggleDetails(id, listID) {
  const toDoElement = document.getElementById(`todo-${id}`);
  if (document.getElementById(`details-${id}`)) {
    document.getElementById(`details-${id}`).style.maxHeight = null;
    toDoElement.classList.remove('active');
    setTimeout(() => { document.getElementById(`details-${id}`).remove(); }, 500);
    setTimeout(() => { toDoElement.classList.add('collapsed'); }, 700);
  } else {
    showToDoDetails(id, listID);
    toDoElement.classList.add('active');
    toDoElement.classList.remove('collapsed');
  }
}

export {
  showToDos, showAllToDos, listenForShowToDos, showAddToDoForm,
};

import {
  createFormField, clearPageContent, createPageHeader, createButtonInDiv,
  updateActiveNavItem, createButton,
} from './ui-helpers';

import {
  getLists, addList, getListItems, getListName, deleteList,
} from './list';

import { showAddToDoForm, showToDos } from './todo-ui';

const main = document.querySelector('main');

function showLists() {
  clearPageContent();
  const header = createPageHeader('Your Lists');
  const unorderedList = document.createElement('ul');
  unorderedList.classList.add('lists');

  // Skip the default list when displaying the user's lists
  const userLists = getLists().slice(1);
  userLists.forEach((list) => {
    const listElement = document.createElement('li');
    listElement.id = list.id;
    listElement.textContent = list.name;
    listElement.addEventListener('click', () => {
      // eslint-disable-next-line no-use-before-define
      showListItems(list.id);
    });
    unorderedList.append(listElement);
  });

  main.append(header, unorderedList);
}

function listenForShowLists() {
  document.getElementById('show-lists').addEventListener('click', () => {
    showLists();
  });
}

function showListItems(listID) {
  clearPageContent();

  const listName = getListName(listID);
  const header = createPageHeader(listName);
  header.id = listID;

  const listItems = getListItems(listID);
  const listItemsDiv = showToDos(listItems, listID);

  const addFunction = () => {
    showAddToDoForm(listID);
  };
  const btnDiv = createButtonInDiv('Add new', addFunction, 'primary');
  btnDiv.classList.add('list', 'options');

  const deleteFunction = () => {
    // eslint-disable-next-line no-restricted-globals
    const confirmDelete = confirm('Do you really want to delete this list? You will also delete all to-do items in the list.');
    if (confirmDelete) {
      deleteList(listID);
      showLists();
    }
  };
  const btnDeleteList = createButton('Delete list', deleteFunction, 'secondary');
  btnDiv.append(btnDeleteList);

  main.append(header, listItemsDiv, btnDiv);
}

function listenForAddNewList() {
  document.getElementById('add-list').addEventListener('click', () => {
    clearPageContent();
    const header = createPageHeader('Add New List');

    const form = document.createElement('form');
    form.id = 'add-new-list';

    const listNameField = createFormField('text', 'list-name', 'list-name', 'Name of list', true);

    const btnAdd = document.createElement('input');
    btnAdd.type = 'submit';
    btnAdd.id = 'add-list';
    btnAdd.classList.add('primary');
    btnAdd.value = 'Add list';

    form.append(listNameField, btnAdd);

    form.onsubmit = () => {
      const listName = document.getElementById('list-name').value;
      addList(listName);
      showLists();
      updateActiveNavItem('show-lists');
      // Prevent the form from actually submitting
      return false;
    };

    main.append(header, form);
  });
}

export { listenForAddNewList, listenForShowLists, showListItems };

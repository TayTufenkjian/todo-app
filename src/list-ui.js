import { createFormField, clearPageContent, createPageHeader, createButtonInDiv, updateActiveNavItem, createButton} from './ui-helpers.js';
import { getLists, addList, getListItems, getListName, deleteList } from './list.js';
import { showAddToDoForm, showToDos } from './todo-ui.js';


let main = document.querySelector('main');

function listenForAddNewList() {
    document.getElementById('add-list').addEventListener('click', () => {
        
        clearPageContent();
        let header = createPageHeader('Add New List');
        let content = createFormField('text', 'list-name', 'list-name', 'Name of list');
        
        let btnFunction = () => {
            let listName = document.getElementById('list-name').value;
            addList(listName);
            showLists();
            updateActiveNavItem('show-lists');
        }
        let btnDiv = createButtonInDiv('Add list', btnFunction, 'primary')
        
        main.append(header, content, btnDiv);
    });
}


function showLists() {
    clearPageContent();
    let header = createPageHeader('Your Lists');
    let unorderedList = document.createElement('ul');
    unorderedList.classList.add('lists');

    // Skip the default list when displaying the user's lists
    let userLists = getLists().slice(1);
    for (let list of userLists) {
        let listElement = document.createElement('li');
        listElement.id = list.id;
        listElement.textContent = list.name;
        listElement.addEventListener('click', () => {
            showListItems(list.id);
        });
        unorderedList.append(listElement);
    }

    main.append(header, unorderedList);
}


function listenForShowLists() {
    document.getElementById('show-lists').addEventListener('click', () => {       
       showLists();
    });
}


function showListItems(listID) {
    clearPageContent();

    let listName = getListName(listID);
    let header = createPageHeader(listName);
    header.id = listID;

    let listItems = getListItems(listID);
    let listItemsDiv = showToDos(listItems, listID);    

    let addFunction = () => {
        showAddToDoForm(listID);
    }
    let btnDiv = createButtonInDiv('Add new', addFunction, 'primary');
    btnDiv.classList.add('list','options');

    let deleteFunction = () => {
        let confirmDelete = confirm('Do you really want to delete this list? You will also delete all to-do items in the list.');
        if (confirmDelete) {
            deleteList(listID);
            showLists();
        }
    }
    let btnDeleteList = createButton('Delete list', deleteFunction, 'secondary')
    btnDiv.append(btnDeleteList);

    main.append(header, listItemsDiv, btnDiv);
}


export {listenForAddNewList, listenForShowLists, showListItems};
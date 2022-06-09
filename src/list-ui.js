import { createFormInput, clearPageContent, createPageHeader, createButtonInDiv} from './ui-helpers.js';
import { getLists, addList, getListItems, getListName } from './list.js';
import { showAddToDoForm } from './todo-ui.js'


let main = document.querySelector('main');

function listenForAddNewList() {
    document.getElementById('add-list').addEventListener('click', () => {
        
        clearPageContent();
        let header = createPageHeader('Add New List');
        let content = createFormInput('text', 'list-name', 'list-name', 'Name of list');
        
        main.append(header, content);

        let btnDiv = document.createElement('div');
        let btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = 'Add list';
        btn.addEventListener('click', () => {
            let listName = document.getElementById('list-name').value;
            addList(listName);
            showLists();
        });
        btnDiv.append(btn);

        main.append(btnDiv);

    });
}


function showLists() {
    clearPageContent();
    let header = createPageHeader('Your Lists');
    let contents = document.createElement('ul');

    // Skip the default list when displaying the user's lists
    let userLists = getLists().slice(1);
    for (let list of userLists) {
        let listElement = document.createElement('li');
        listElement.id = list.id;
        listElement.textContent = list.name;
        listElement.addEventListener('click', () => {
            showListItems(list.id);
        });
        contents.append(listElement);
    }

    main.append(header, contents);
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

    let contents = document.createElement('ul');
    let listItems = getListItems(listID);
    for (let item of listItems) {
        let itemElement = document.createElement('li');
        itemElement.textContent = item.title;
        contents.append(itemElement);
    }

    let btn = createButtonInDiv('Add new', showAddToDoForm, listID, false);

    main.append(header, contents, btn);
}


export {listenForAddNewList, listenForShowLists, showListItems};
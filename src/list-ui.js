import { createFormInput, clearPageContent} from "./ui-helpers.js";
import { getLists, addList } from "./list.js";


let main = document.querySelector('main');

function listenForAddNewList() {
    document.getElementById('add-list').addEventListener('click', () => {
        clearPageContent();

        let header = document.createElement('h1');
        header.textContent = 'Add New List';

        let content = createFormInput('text', 'list-name', 'list-name', 'Name of list');
        
        main.append(header, content);

        let btnDiv = document.createElement('div');
        let btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = 'Add list';
        btn.addEventListener('click', () => {
            let listName = document.getElementById('list-name').value;
            addList(listName);
        });
        btnDiv.append(btn);

        main.append(btnDiv);

    });
}


function listenForViewLists() {
    document.getElementById('view-lists').addEventListener('click', () => {
        clearPageContent();

        let header = document.createElement('h1');
        header.textContent = 'Your Lists';

        let contents = document.createElement('ul');

        let lists = getLists();

        for (let list of lists) {
            let listElement = document.createElement('li');
            listElement.textContent = list.name;
            contents.append(listElement);
        }

        main.append(header, contents);

    });
}

export {listenForAddNewList, listenForViewLists};
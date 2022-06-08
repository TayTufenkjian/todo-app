import { createFormInput, createButtonInDiv } from "./ui-helpers.js";
import { addList } from "./list.js";

function listenForAddNewList() {
    document.getElementById('add-list').addEventListener('click', () => {
        // Clear current page content
        let main = document.querySelector('main');
        main.innerHTML = '';

        // Create new page content
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

export {listenForAddNewList};
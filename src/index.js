import './style.css';
import {showAllToDos, listenForShowToDos} from './todo-ui.js';
import {listenForAddNewList, listenForShowLists} from './list-ui.js';


document.addEventListener('DOMContentLoaded', () => {
    showAllToDos();
    listenForShowToDos();
    listenForAddNewList();
    listenForShowLists();    

    // Highlight active nav menu item
    document.getElementById('show-todos').classList.add('active');

    let navItems = document.querySelectorAll('nav ul li');

    navItems.forEach(navItem => navItem.addEventListener('click', (event) => {
        for (let item of navItems) {
            item.classList.remove('active');
        }
        event.target.classList.add('active');
    }));
});
  
import './style.css';
import './normalize.css';
import {showAllToDos, listenForShowToDos} from './todo-ui.js';
import {listenForAddNewList, listenForShowLists} from './list-ui.js';
import {listenForActiveNavItem} from './ui-helpers.js';


document.addEventListener('DOMContentLoaded', () => {
    listenForActiveNavItem();
    showAllToDos();
    listenForShowToDos();
    listenForAddNewList();
    listenForShowLists();
});
  
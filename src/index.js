import './style.css';
import {showAllToDos, listenForShowToDos} from './todo-ui.js';
import {listenForAddNewList, listenForShowLists} from './list-ui.js';


document.addEventListener('DOMContentLoaded', () => {
    showAllToDos();
    listenForShowToDos();
    listenForAddNewList();
    listenForShowLists();    
});
  
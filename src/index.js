import './style.css';
import {showToDos, listenForShowToDos} from './todo-ui.js';
import {listenForAddNewList, listenForShowLists} from './list-ui.js';


document.addEventListener('DOMContentLoaded', () => {
    showToDos();
    listenForShowToDos();
    listenForAddNewList();
    listenForShowLists();    
});
  
import './style.css';
import {showToDos, listenForAddNewForm} from './todo-ui.js';
import {listenForAddNewList} from './list-ui.js';


document.addEventListener('DOMContentLoaded', () => {
    showToDos();
    listenForAddNewForm();
    listenForAddNewList();
});
  
import './style.css';
import {showToDos, listenForShowToDos} from './todo-ui.js';
import {listenForAddNewList, listenForShowLists} from './list-ui.js';
import { addList } from './list';


document.addEventListener('DOMContentLoaded', () => {
    showToDos(); 
    listenForShowToDos();
    listenForAddNewList();
    listenForShowLists();

    addList('Groceries');
    addList('Vacation Planning');
    addList('Other stuff');
});
  
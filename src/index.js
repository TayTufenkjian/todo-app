import './style.css';
import {showToDos, listenForAddNewForm} from './todo-ui.js';
import {listenForAddNewList, listenForViewLists} from './list-ui.js';
import { addList } from './list';


document.addEventListener('DOMContentLoaded', () => {
    showToDos();
    listenForAddNewForm();
    listenForAddNewList();
    listenForViewLists();

    addList('Groceries');
    addList('Vacation Planning');
    addList('Other stuff');
});
  
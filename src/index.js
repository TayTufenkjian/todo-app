import './style.css';
import {showToDoForm, showToDos, listenForAddNew, listenForNewToDo} from './ui.js';


document.addEventListener('DOMContentLoaded', () => {
    showToDos();
    listenForAddNew();
    listenForNewToDo();
});
  
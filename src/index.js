import './style.css';
import {showToDos, listenForAddNewForm, listenForAddNewToDo} from './ui.js';


document.addEventListener('DOMContentLoaded', () => {
    showToDos();
    listenForAddNewForm();
    listenForAddNewToDo();
});
  
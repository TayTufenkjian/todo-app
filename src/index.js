import './style.css';
import {showToDoForm, showToDos, listenForNewToDo} from './ui.js';


document.addEventListener('DOMContentLoaded', () => {
    showToDos();
    listenForNewToDo();
});
  
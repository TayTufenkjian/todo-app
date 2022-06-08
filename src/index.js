import './style.css';
import {showToDos, listenForAddNewForm} from './ui.js';


document.addEventListener('DOMContentLoaded', () => {
    showToDos();
    listenForAddNewForm();
});
  
import {showToDos} from './todo-ui.js';

// Helper functions for creating HTML elements

function createFormInput(type, id, name, labelText) {
    let div = document.createElement('div');
    div.classList.add('form-field');
    
    let label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText;

    let input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.name = name;

    div.append(label, input);   
    return div;
}

function createButtonInDiv(text, functionToRun, arg, reloadToDos) {
    let div = document.createElement('div');
    let btn = document.createElement('button');
    btn.textContent = text;
    btn.addEventListener('click', () => {     
        functionToRun(arg);   

        if (reloadToDos) { 
            showToDos();
        }
    });
    div.append(btn);
    return div;
}

function clearPageContent() {
    let main = document.querySelector('main');
    main.innerHTML = '';
}

export {createFormInput, createButtonInDiv, clearPageContent};
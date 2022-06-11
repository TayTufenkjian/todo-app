import {showAllToDos} from './todo-ui.js';

// Helper functions for creating HTML elements

function createInput(type, id, name) {
    let input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.name = name;
    return input;
}

function createFormField(type, id, name, labelText) {
    let div = document.createElement('div');
    div.classList.add('form-field');
    
    let label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText;

    let input = createInput(type, id, name);

    div.append(label, input);   
    return div;
}

function createButton(text, functionOnClick) {
    let btn = document.createElement('button');
    btn.textContent = text;
    btn.addEventListener('click', () => {     
        functionOnClick();
    });
    return btn;
}

function createButtonInDiv(text, functionOnClick) {
    let div = document.createElement('div');
    let btn = createButton(text, functionOnClick);
    div.append(btn);
    return div;
}

function clearPageContent() {
    let main = document.querySelector('main');
    main.innerHTML = '';
}

function createPageHeader(text) {
    let header = document.createElement('h1');
    header.textContent = text;
    return header;
}

export {createInput, createFormField, createButton, createButtonInDiv, clearPageContent, createPageHeader};
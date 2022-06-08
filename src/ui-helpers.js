import {showToDos} from './ui.js';

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

function createButtonInDiv(text, functionToRun, id, reloadToDos) {
    let div = document.createElement('div');
    let btn = document.createElement('button');
    btn.textContent = text;
    btn.addEventListener('click', () => {
        functionToRun(id);
        if (reloadToDos) { 
            showToDos();
        }
    });
    div.append(btn);
    return div;
}

export {createFormInput, createButtonInDiv};
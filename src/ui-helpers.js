// Helper functions for creating/updating HTML elements

function createInput(type, id, name, required=false) {
    let input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.name = name;
    input.required = required;
    return input;
}

function createFormField(type, id, name, labelText, required=false) {
    let div = document.createElement('div');
    div.classList.add('form-field');
    
    let label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = labelText;

    let input = createInput(type, id, name, required);

    div.append(label, input);   
    return div;
}

function createPriorityField(fieldID) {
    let priorityField = document.createElement('div');
    priorityField.classList.add('form-field');
    let priorityLabel = document.createElement('label');
    priorityLabel .textContent = 'Priority';
    priorityLabel.for = fieldID;
    let prioritySelect = document.createElement('select');
    prioritySelect.id = fieldID;
    let priorityLevels = ['low', 'medium', 'high'];
    for (let level of priorityLevels) {
        let priorityOption = document.createElement('option');
        priorityOption.value = level;
        priorityOption.textContent = level;
        prioritySelect.append(priorityOption);
    }
    priorityField.append(priorityLabel, prioritySelect);
    return priorityField;
}


function createButton(text, functionOnClick, btnClass=false) {
    let btn = document.createElement('button');
    btn.textContent = text;
    btn.type = 'button';
    if (btnClass) btn.classList.add(btnClass);
    btn.addEventListener('click', () => {     
        functionOnClick();
    });
    return btn;
}

function createButtonInDiv(text, functionOnClick, btnClass=false) {
    let div = document.createElement('div');
    let btn = createButton(text, functionOnClick, btnClass);
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

function updateActiveNavItem(navItemID) {
    let navItems = document.querySelectorAll('nav ul li');
    for (let item of navItems) {
        item.classList.remove('active');
    }
    document.getElementById(navItemID).classList.add('active');
}

export {createInput, createFormField, createPriorityField, createButton, createButtonInDiv, clearPageContent, createPageHeader, updateActiveNavItem};
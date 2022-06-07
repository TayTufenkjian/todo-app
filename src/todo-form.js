// const formFields = {
//     id: 'text', 
//     title: 'text', 
//     'complete', 
//     'dueDate', 
//     'priority', 
//     'description'
// }

function showToDoForm() {
    let toDoForm = document.createElement('form');

    for (item of formFields) {
        let fieldDiv = document.createElement('div');
        let fieldLabel = document.createElement('label');
        let fieldInput = document.createElement('input');
        
        fieldLabel.setAttribute('for', item)        
    }
}
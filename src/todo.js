let toDos = [];


function toDo(title, complete, dueDate, priority, description) {
    const id = toDos.length + 1;
    return {id, title, complete, dueDate, priority, description};
}

function addToDo(item) {
    toDos.push(item);
}

function showToDoForm() {
    document.getElementById('add-toDo').classList.remove('hidden');
}

function showToDos() {
    const allToDos = document.createElement('div');
    for (let item of toDos) {
        let itemDiv = document.createElement('div');
        itemDiv.textContent = `${item.title} due on ${item.dueDate}`;
        allToDos.append(itemDiv);
    }
    document.body.appendChild(allToDos);
}

export {toDo, addToDo, showToDoForm, showToDos};


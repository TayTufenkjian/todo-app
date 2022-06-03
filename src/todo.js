let toDos = [];

function toDo(id, title, complete, dueDate, priority, description) {
    return {id, title, complete, dueDate, priority, description};
}

function addToDo(item) {
    toDos.push(item);
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

export {toDo, addToDo, showToDos};


let toDos = [];

function getToDos() {
    return toDos;
}

function toDoFactory(title, complete, dueDate, priority) {
    const id = toDos.length + 1;
    let description = '';
    return {id, title, complete, dueDate, priority, description};
}

function addToDo(item) {
    toDos.push(item);
}



export {getToDos, toDoFactory, addToDo};


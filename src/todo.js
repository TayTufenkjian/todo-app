let toDos = [];

function getToDos() {
    return toDos;
}

function getToDo(id) {
    for (let item of toDos) {
        if (item.id === id) {
            return item;
        }
    }
}

function toDoFactory(title, dueDate, priority) {
    const id = toDos.length + 1;
    let done = false;
    let description = '';
    return {id, title, done, dueDate, priority, description};
}

function addToDo(item) {
    toDos.push(item);
}

function editToDo(id, title, dueDate, priority, description) {
    let toDo = getToDo(id);
    toDo.title = title;
    toDo.dueDate = dueDate;
    toDo.priority = priority;
    toDo.description = description;
}

function markDone(id) {
    let toDo = getToDo(id);
    toDo.complete = true;
}

export {getToDos, getToDo, toDoFactory, addToDo, editToDo, markDone};


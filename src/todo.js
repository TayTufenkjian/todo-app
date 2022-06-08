
function getToDos() {
    try {
        let toDos = JSON.parse(localStorage.getItem("toDos"));
        return toDos;
    }
    catch(err) {
        let toDos = [];
        localStorage.setItem("toDos", JSON.stringify(toDos));
    }
}

function getToDo(id) {
    let toDos = getToDos();
    for (let item of toDos) {
        if (item.id === id) {
            return item;
        }
    }
}

function toDoFactory(title, dueDate, priority) {
    const id = getToDos().length + 1;
    let done = false;
    let description = '';
    return {id, title, done, dueDate, priority, description};
}

function addToDo(title, dueDate, priority) {
    let newToDo = toDoFactory(title, dueDate, priority);
    let toDos = getToDos();
    toDos.push(newToDo);
    localStorage.setItem("toDos", JSON.stringify(toDos));
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

function deleteToDo(id) {
    for (let item of toDos) {
        if (item.id === id) {
            toDos.splice(toDos.indexOf(item), 1);
        }
    }
}

export {getToDos, getToDo, toDoFactory, addToDo, editToDo, markDone, deleteToDo};

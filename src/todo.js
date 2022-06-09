// Logic for handling todo items

function getToDos() {
    if (localStorage.getItem('toDos') === null) {
        let toDos = [];
        localStorage.setItem('toDos', JSON.stringify(toDos));
    } 
    return JSON.parse(localStorage.getItem('toDos'));
}


function getToDo(id) {
    let toDos = getToDos();
    for (let item of toDos) {
        if (item.id === id) {
            return item;
        }
    }
}


function toDoFactory(title, dueDate, priority, list) {
    const id = getToDos().length + 1;
    let done = false;
    let description = '';
    return {id, title, done, dueDate, priority, description, list};
}


// Default list for a new todo item is the default list (id 0)
function addToDo(title, dueDate, priority, list=0) {
    let newToDo = toDoFactory(title, dueDate, priority, list);
    let toDos = getToDos();
    toDos.push(newToDo);
    localStorage.setItem('toDos', JSON.stringify(toDos));
}


function editToDo(id, title, dueDate, priority, description) {
    let toDos = getToDos();
    for (let item of toDos) {
        if (item.id === id) {
            item.title = title;
            item.dueDate = dueDate;
            item.priority = priority;
            item.description = description;
        }
    }
    localStorage.setItem('toDos', JSON.stringify(toDos));
}


function markDone(id) {
    let toDos = getToDos();
    for (let item of toDos) {
        if (item.id === id) {
            item.done = true;
        }
    }
    localStorage.setItem('toDos', JSON.stringify(toDos));
}


function deleteToDo(id) {
    let toDos = getToDos();
    for (let item of toDos) {
        if (item.id === id) {
            toDos.splice(toDos.indexOf(item), 1);
        }
    }
    localStorage.setItem('toDos', JSON.stringify(toDos));
}


export {getToDos, getToDo, toDoFactory, addToDo, editToDo, markDone, deleteToDo};

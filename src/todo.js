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
    // Calculate the ID based on the largest existing ID value
    let toDos = getToDos();
    let maxCurrentID = 0;
    for (let toDo of toDos) {
        if (toDo['id'] > maxCurrentID) maxCurrentID = toDo['id'];
    }
    const id = maxCurrentID + 1;
   
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


function editToDo(id, title, dueDate, priority, description, list) {
    let toDos = getToDos();
    for (let item of toDos) {
        if (item.id === id) {
            item.title = title;
            item.dueDate = dueDate;
            item.priority = priority;
            item.description = description;
            item.list = list;
        }
    }
    localStorage.setItem('toDos', JSON.stringify(toDos));
}


function setDone(id, bool) {
    let toDos = getToDos();
    for (let item of toDos) {
        if (item.id === id) {
            item.done = bool;
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


function getMonthAndDay(dateText) {
    let monthChart = {
        '01': 'Jan',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'May',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Aug',
        '09': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec'
    }

    let month = monthChart[dateText.substring(5, 7)];
    let day = dateText.substring(8, 10);

    return{month, day};
}


export {getToDos, getToDo, toDoFactory, addToDo, editToDo, setDone, deleteToDo, getMonthAndDay};

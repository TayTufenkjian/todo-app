let lists = [];

function getLists() {
    return lists;
}

function listFactory(name) {
    let toDos = [];
    return {name, toDos};
}

function addList(name) {
    let newList = listFactory(name);
    lists.push(newList);
}


export {getLists, addList};
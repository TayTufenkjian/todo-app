// Logic for handling lists

function getLists() {
    if (localStorage.getItem('lists') === null) {
        let lists = [];
        localStorage.setItem('lists', JSON.stringify(lists));
    } 
    return JSON.parse(localStorage.getItem('lists'));
}

function listFactory(name) {
    const id = getLists().length + 1;
    let toDos = [];
    return {id, name, toDos};
}

function addList(name) {
    let newList = listFactory(name);
    let lists = getLists();
    lists.push(newList);
    localStorage.setItem("lists", JSON.stringify(lists));
}


export {getLists, addList};
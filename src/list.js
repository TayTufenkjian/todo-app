// Logic for handling lists

function getLists() {
    if (localStorage.getItem('lists') === null) {
        // Initialize with a default list for todo items that do not have a user-specified list
        let lists = [{id: 0, name: 'default'}];  
        localStorage.setItem('lists', JSON.stringify(lists));
    } 
    return JSON.parse(localStorage.getItem('lists'));
}

function listFactory(name) {
    const id = getLists().length;
    return {id, name};
}

function addList(name) {
    let newList = listFactory(name);
    let lists = getLists();
    lists.push(newList);
    localStorage.setItem("lists", JSON.stringify(lists));
}


export {getLists, addList};
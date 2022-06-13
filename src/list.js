import {getToDos} from './todo.js';

// Logic for handling lists and their todo items

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
    console.log(`add lists returned ${lists}`);
    lists.push(newList);
    localStorage.setItem("lists", JSON.stringify(lists));
}


function getListItems(listID) {
    let toDos = getToDos();
    let listItems = [];
    for (let item of toDos) {
        if (item.list === listID) {
            listItems.push(item);
        }
    }
    return listItems;
}


function getListName(listID) {
    let lists = getLists();
    for (let list of lists) {
        if (list.id === listID) {
            return list.id ? list.name : '(none)';
        }
    }
}


export {getLists, addList, getListItems, getListName};
import {getToDosSortedByDate, deleteToDo} from './todo.js';

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
    // Calculate the ID based on the largest existing ID value
    let lists = getLists();
    let maxCurrentID = 0;
    for (let list of lists) {
        if(list['id'] > maxCurrentID) {
            maxCurrentID = list['id'];
        }
    }
    const id = maxCurrentID + 1;
    return {id, name};
}


function addList(name) {
    let newList = listFactory(name);
    let lists = getLists();
    lists.push(newList);
    localStorage.setItem("lists", JSON.stringify(lists));
}


function getListItems(listID) {
    let toDos = getToDosSortedByDate();
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


function deleteList(listID) {
    // First delete all todo items in the list
    let listItems = getListItems(listID);
    for (let item of listItems) {
        deleteToDo(item.id);
    }
    // Then delete the list
    let lists = getLists();
    for (let list of lists) {
        if (list.id === listID) {
            lists.splice(lists.indexOf(list), 1);
        }
    }
    localStorage.setItem('lists', JSON.stringify(lists));
}


export {getLists, addList, getListItems, getListName, deleteList};
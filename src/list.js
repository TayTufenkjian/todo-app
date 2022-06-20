import { getToDosSortedByDate, deleteToDo } from './todo';

// Logic for handling lists and their todo items

function getLists() {
  if (localStorage.getItem('lists') === null) {
    // Initialize with a default list for todo items that do not have a user-specified list
    const lists = [{ id: 0, name: 'default' }];
    localStorage.setItem('lists', JSON.stringify(lists));
  }
  return JSON.parse(localStorage.getItem('lists'));
}

function listFactory(name) {
  // Calculate the ID based on the largest existing ID value
  const lists = getLists();
  let maxCurrentID = 0;
  lists.forEach((list) => {
    if (list.id > maxCurrentID) {
      maxCurrentID = list.id;
    }
  });
  const id = maxCurrentID + 1;
  return { id, name };
}

function addList(name) {
  const newList = listFactory(name);
  const lists = getLists();
  lists.push(newList);
  localStorage.setItem('lists', JSON.stringify(lists));
}

function getListItems(listID) {
  const toDos = getToDosSortedByDate();
  const listItems = toDos.filter((item) => item.list === listID);
  return listItems;
}

function getListName(listID) {
  const lists = getLists();
  const listName = lists.find((list) => list.id === listID).name;
  return listName === 'default' ? '(none)' : listName;
}

function deleteList(listID) {
  // First delete all todo items in the list
  const listItems = getListItems(listID);
  listItems.forEach((item) => deleteToDo(item.id));

  // Then delete the list
  const lists = getLists();
  const listIndex = lists.findIndex((list) => list.id === listID);
  lists.splice(listIndex, 1);
  localStorage.setItem('lists', JSON.stringify(lists));
}

export {
  getLists, addList, getListItems, getListName, deleteList,
};

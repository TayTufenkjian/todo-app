// Logic for handling todo items

function getToDos() {
  if (localStorage.getItem("toDos") === null) {
    const toDos = [];
    localStorage.setItem("toDos", JSON.stringify(toDos));
  }
  return JSON.parse(localStorage.getItem("toDos"));
}

function getToDosSortedByDate() {
  const toDos = getToDos();
  function compare(a, b) {
    if (a.dueDate < b.dueDate) return -1;
    if (a.dueDate > b.dueDate) return 1;
    return 0;
  }
  return toDos.sort(compare);
}

function getToDo(id) {
  const toDos = getToDos();
  return toDos.find((item) => item.id === id);
}

function toDoFactory(title, dueDate, priority, list) {
  // Calculate the ID based on the largest existing ID value
  const toDos = getToDos();
  let maxCurrentID = 0;
  toDos.forEach((item) => {
    if (item.id > maxCurrentID) {
      maxCurrentID = item.id;
    }
  });

  const id = maxCurrentID + 1;
  const done = false;
  const description = "";

  return {
    id,
    title,
    done,
    dueDate,
    priority,
    description,
    list,
  };
}

// Default list for a new todo item is the default list (id 0)
function addToDo(title, dueDate, priority = "low", list = 0) {
  const newToDo = toDoFactory(title, dueDate, priority, list);
  const toDos = getToDos();
  toDos.push(newToDo);
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function editToDo(id, title, dueDate, priority, description, list) {
  const toDos = getToDos();
  const itemIndex = toDos.findIndex((item) => item.id === id);
  toDos[itemIndex].title = title;
  toDos[itemIndex].dueDate = dueDate;
  toDos[itemIndex].priority = priority;
  toDos[itemIndex].description = description;
  toDos[itemIndex].list = list;
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function setDone(id, bool) {
  const toDos = getToDos();
  const itemIndex = toDos.findIndex((item) => item.id === id);
  toDos[itemIndex].done = bool;
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function deleteToDo(id) {
  const toDos = getToDos();
  const itemIndex = toDos.findIndex((item) => item.id === id);
  toDos.splice(itemIndex, 1);
  localStorage.setItem("toDos", JSON.stringify(toDos));
}

function getMonthAndDay(dateText) {
  if (dateText === "") {
    return { month: "", day: "" };
  }

  const monthChart = {
    "01": "Jan",
    "02": "Feb",
    "03": "Mar",
    "04": "Apr",
    "05": "May",
    "06": "Jun",
    "07": "Jul",
    "08": "Aug",
    "09": "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  const month = monthChart[dateText.substring(5, 7)];
  const day = dateText.substring(8, 10);

  return { month, day };
}

export {
  getToDos,
  getToDosSortedByDate,
  getToDo,
  toDoFactory,
  addToDo,
  editToDo,
  setDone,
  deleteToDo,
  getMonthAndDay,
};

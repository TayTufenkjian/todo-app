import "./style.css";
import "./normalize.css";
import { showAllToDos, listenForShowToDos } from "./todo-ui";
import { listenForAddNewList, listenForShowLists } from "./list-ui";
import { listenForActiveNavItem } from "./ui-helpers";

document.addEventListener("DOMContentLoaded", () => {
  listenForActiveNavItem();
  showAllToDos();
  listenForShowToDos();
  listenForAddNewList();
  listenForShowLists();
});

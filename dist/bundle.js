/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\n\n\nfunction component() {\n    const element = document.createElement('div');\n    element.innerHTML = 'To Do App';\n\n    const btn = document.createElement('button');\n    btn.textContent = 'Add';\n    btn.addEventListener('click', () => {\n        let newItem = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.toDo)(1, 'Grocery shopping', false, '2022-06-17', 'low', 'Buy stuff and things');\n        (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.addToDo)(newItem);\n        (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.showToDos)();\n    }); \n\n    element.append(btn);\n  \n    return element;\n  }\n  \n  document.body.appendChild(component());\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToDo\": () => (/* binding */ addToDo),\n/* harmony export */   \"showToDos\": () => (/* binding */ showToDos),\n/* harmony export */   \"toDo\": () => (/* binding */ toDo)\n/* harmony export */ });\nlet toDos = [];\n\nfunction toDo(id, title, complete, dueDate, priority, description) {\n    return {id, title, complete, dueDate, priority, description};\n}\n\nfunction addToDo(item) {\n    toDos.push(item);\n}\n\nfunction showToDos() {\n    const allToDos = document.createElement('div');\n    for (let item of toDos) {\n        let itemDiv = document.createElement('div');\n        itemDiv.textContent = `${item.title} due on ${item.dueDate}`;\n        allToDos.append(itemDiv);\n    }\n    document.body.appendChild(allToDos);\n}\n\n\n\nfunction toDoForm() {\n    const form = document.createElement('form');\n    \n    const formHeader = document.createElement(h2);\n    formHeader.textContent = 'Add a new to-do';\n\n    const field = document.createElement('div');\n    field.classList.add('form-field');\n    \n    // Incomplete\n}\n\n//# sourceURL=webpack://todo-app/./src/todo.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
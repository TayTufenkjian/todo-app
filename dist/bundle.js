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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n\\nbody {\\n    display: grid;\\n    gap: 1rem;\\n    grid-template-columns: 200px 1fr;\\n    height: 100vh;\\n    margin: 0;\\n}\\n\\nbody, button, input[type=\\\"date\\\"] {\\n    font-family: -apple-system, BlinkMacSystemFont, avenir next, \\n        avenir, segoe ui, helvetica neue, helvetica, Cantarell, Ubuntu, \\n        roboto, noto, arial, sans-serif;\\n}\\n\\n.done {\\n    text-decoration: line-through;\\n}\\n\\n.edit-todo {\\n    margin-bottom: 1rem;\\n}\\n\\n.form-field, .todo-property {\\n    display: grid;\\n    grid-template-columns: 200px 200px;\\n    margin-bottom: 1rem;\\n}\\n\\nli {\\n    list-style: none;\\n}\\n\\n.lists li {\\n    cursor: pointer;\\n    font-size: 1.5rem;\\n    padding: 1rem 0;\\n}\\n\\nmain > * {\\n    margin-bottom: 1rem;\\n}\\n\\nnav {\\n    background: rgb(187, 187, 251);\\n    padding: 1rem;\\n}\\n\\nnav ul {\\n    cursor: pointer;\\n    display: grid;\\n    gap: 1rem;\\n    margin-top: 1rem;\\n}\\n\\n.options button {\\n    margin-right: 1rem;\\n}\\n\\n.todos .summary {\\n    display: grid;\\n    grid-template-columns: 200px 100px;\\n    margin-bottom: 1rem;\\n    padding: 0.5rem 0;\\n}\\n\\n.todos li:hover {\\n    background: #e5e5e5;\\n}\\n\\n.todo-details {\\n    grid-column: 1 / 3;\\n    margin-top: 1rem;\\n}\\n\\nul {\\n    margin: 0;\\n    padding: 0;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-app/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-app/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _todo_ui_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-ui.js */ \"./src/todo-ui.js\");\n/* harmony import */ var _list_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-ui.js */ \"./src/list-ui.js\");\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    (0,_todo_ui_js__WEBPACK_IMPORTED_MODULE_1__.showAllToDos)();\n    (0,_todo_ui_js__WEBPACK_IMPORTED_MODULE_1__.listenForShowToDos)();\n    (0,_list_ui_js__WEBPACK_IMPORTED_MODULE_2__.listenForAddNewList)();\n    (0,_list_ui_js__WEBPACK_IMPORTED_MODULE_2__.listenForShowLists)();    \n});\n  \n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/list-ui.js":
/*!************************!*\
  !*** ./src/list-ui.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listenForAddNewList\": () => (/* binding */ listenForAddNewList),\n/* harmony export */   \"listenForShowLists\": () => (/* binding */ listenForShowLists),\n/* harmony export */   \"showListItems\": () => (/* binding */ showListItems)\n/* harmony export */ });\n/* harmony import */ var _ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-helpers.js */ \"./src/ui-helpers.js\");\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.js */ \"./src/list.js\");\n/* harmony import */ var _todo_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-ui.js */ \"./src/todo-ui.js\");\n\n\n\n\n\nlet main = document.querySelector('main');\n\nfunction listenForAddNewList() {\n    document.getElementById('add-list').addEventListener('click', () => {\n        \n        (0,_ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__.clearPageContent)();\n        let header = (0,_ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createPageHeader)('Add New List');\n        let content = (0,_ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createFormInput)('text', 'list-name', 'list-name', 'Name of list');\n        \n        main.append(header, content);\n\n        let btnDiv = document.createElement('div');\n        let btn = document.createElement('button');\n        btn.type = 'button';\n        btn.textContent = 'Add list';\n        btn.addEventListener('click', () => {\n            let listName = document.getElementById('list-name').value;\n            (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.addList)(listName);\n            showLists();\n        });\n        btnDiv.append(btn);\n\n        main.append(btnDiv);\n\n    });\n}\n\n\nfunction showLists() {\n    (0,_ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__.clearPageContent)();\n    let header = (0,_ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createPageHeader)('Your Lists');\n    let unorderedList = document.createElement('ul');\n    unorderedList.classList.add('lists');\n\n    // Skip the default list when displaying the user's lists\n    let userLists = (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.getLists)().slice(1);\n    for (let list of userLists) {\n        let listElement = document.createElement('li');\n        listElement.id = list.id;\n        listElement.textContent = list.name;\n        listElement.addEventListener('click', () => {\n            showListItems(list.id);\n        });\n        unorderedList.append(listElement);\n    }\n\n    main.append(header, unorderedList);\n}\n\n\nfunction listenForShowLists() {\n    document.getElementById('show-lists').addEventListener('click', () => {       \n       showLists();\n    });\n}\n\n\nfunction showListItems(listID) {\n    (0,_ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__.clearPageContent)();\n\n    let listName = (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.getListName)(listID);\n    let header = (0,_ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createPageHeader)(listName);\n    header.id = listID;\n\n    let listItems = (0,_list_js__WEBPACK_IMPORTED_MODULE_1__.getListItems)(listID);\n    let listItemsDiv = (0,_todo_ui_js__WEBPACK_IMPORTED_MODULE_2__.showToDos)(listItems, listID);    \n\n    let btnFunction = () => {\n        (0,_todo_ui_js__WEBPACK_IMPORTED_MODULE_2__.showAddToDoForm)(listID);\n    }\n    let btn = (0,_ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createButtonInDiv)('Add new', btnFunction);\n\n    main.append(header, listItemsDiv, btn);\n}\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/list-ui.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addList\": () => (/* binding */ addList),\n/* harmony export */   \"getListItems\": () => (/* binding */ getListItems),\n/* harmony export */   \"getListName\": () => (/* binding */ getListName),\n/* harmony export */   \"getLists\": () => (/* binding */ getLists)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\n\n// Logic for handling lists and their todo items\n\nfunction getLists() {\n    if (localStorage.getItem('lists') === null) {\n        // Initialize with a default list for todo items that do not have a user-specified list\n        let lists = [{id: 0, name: 'default'}];  \n        localStorage.setItem('lists', JSON.stringify(lists));\n    } \n    return JSON.parse(localStorage.getItem('lists'));\n}\n\nfunction listFactory(name) {\n    const id = getLists().length;\n    return {id, name};\n}\n\nfunction addList(name) {\n    let newList = listFactory(name);\n    let lists = getLists();\n    console.log(`add lists returned ${lists}`);\n    lists.push(newList);\n    localStorage.setItem(\"lists\", JSON.stringify(lists));\n}\n\n\nfunction getListItems(listID) {\n    let toDos = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.getToDos)();\n    let listItems = [];\n    for (let item of toDos) {\n        if (item.list === listID) {\n            listItems.push(item);\n        }\n    }\n    return listItems;\n}\n\n\nfunction getListName(listID) {\n    let lists = getLists();\n    for (let list of lists) {\n        if (list.id === listID) {\n            return list.name;\n        }\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/list.js?");

/***/ }),

/***/ "./src/todo-ui.js":
/*!************************!*\
  !*** ./src/todo-ui.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"listenForShowToDos\": () => (/* binding */ listenForShowToDos),\n/* harmony export */   \"showAddToDoForm\": () => (/* binding */ showAddToDoForm),\n/* harmony export */   \"showAllToDos\": () => (/* binding */ showAllToDos),\n/* harmony export */   \"showToDos\": () => (/* binding */ showToDos)\n/* harmony export */ });\n/* harmony import */ var _ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui-helpers.js */ \"./src/ui-helpers.js\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _list_ui_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-ui.js */ \"./src/list-ui.js\");\n\n\n\n\n\nfunction showAddToDoForm(listID=0) {\n    let form = document.createElement('form');\n    form.id = 'add-new';\n\n    let titleField = (0,_ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createFormInput)('text', 'title', 'title', 'Title');\n    let dueDateField = (0,_ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createFormInput)('date', 'due-date', 'due-date', 'Due');\n    let priorityField = (0,_ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createFormInput)('number', 'priority', 'priority', 'Priority');\n\n    let btn = document.createElement('button');\n    btn.type = 'button';\n    btn.id = 'add-item';\n    btn.textContent = 'Add item';\n    btn.addEventListener('click', () => {\n        let title = document.getElementById('title').value;\n        let dueDate = document.getElementById('due-date').value;\n        let priority = document.getElementById('priority').value;\n        \n        (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.addToDo)(title, dueDate, priority, listID);\n        form.remove();\n\n        // If adding a new todo from the all todos page, reload all todo items\n        // Otherwise reload list items\n        if (listID === 0) {\n            showAllToDos();\n        } else {\n            (0,_list_ui_js__WEBPACK_IMPORTED_MODULE_2__.showListItems)(listID);\n        }\n    })\n\n    form.append(titleField, dueDateField, priorityField, btn);\n    document.querySelector('main').append(form);\n}\n\n\nfunction showEditToDoForm(id) {\n    let form = document.createElement('form');\n    form.classList.add('edit-todo');\n\n    let titleField = (0,_ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createFormInput)('text', 'title', 'title', 'Title');\n    let dueDateField = (0,_ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createFormInput)('date', 'due-date', 'due-date', 'Due');\n    let priorityField = (0,_ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createFormInput)('number', 'priority', 'priority', 'Priority');\n\n    let descriptionField = document.createElement('div');\n    descriptionField.classList.add('form-field');\n    let descriptionLabel = document.createElement('label')\n    descriptionLabel.setAttribute('for', 'description');\n    descriptionLabel.textContent = 'Description';\n    let descriptionArea = document.createElement('textarea');\n    descriptionArea.id = 'description';\n    descriptionArea.name = 'description';\n    descriptionField.append(descriptionLabel, descriptionArea);\n   \n    let btn = document.createElement('button');\n    btn.type = 'button';\n    btn.id = 'edit-item';\n    btn.textContent = 'Save';\n    btn.addEventListener('click', () => {\n        let title = document.getElementById('title').value;\n        let dueDate = document.getElementById('due-date').value;\n        let priority = document.getElementById('priority').value;\n        let description = document.getElementById('description').value;\n\n        (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.editToDo)(id, title, dueDate, priority, description);\n        form.remove();\n\n        // If editing from the all todos page, reload all todo items\n        // Otherwise reload list items\n        let header = document.querySelector('h1');\n        if (header.id === '') {\n            showAllToDos();\n        } else {\n            (0,_list_ui_js__WEBPACK_IMPORTED_MODULE_2__.showListItems)(parseInt(header.id));\n        }\n    });\n\n    form.append(titleField, dueDateField, priorityField, descriptionField, btn);\n\n    // Remove the todo details and show the form in its place\n    document.getElementById(`details-${id}`).remove();\n    document.getElementById(`${id}`).append(form);\n    \n\n    // Pre-fill form fields with any existing values\n    let toDo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.getToDo)(id);\n    document.getElementById('title').value = toDo.title;\n    document.getElementById('due-date').value = toDo.dueDate;\n    document.getElementById('priority').value = toDo.priority;\n    document.getElementById('description').value = toDo.description;\n}\n\n\nfunction showToDos(arrToDos, listID=0) {\n    // Generate an HTML unordered list from any array of todo items\n    let unorderedList = document.createElement('ul');\n    unorderedList.classList.add('todos');\n    \n    for (let item of arrToDos) {\n        let todoElement = document.createElement('li');\n        todoElement.id = `${item.id}`;\n\n        if (item.done) {\n            todoElement.classList.add('done');\n        }\n\n        let titleDiv = document.createElement('div');\n        titleDiv.textContent = `${item.title}`;\n\n        let dueDateDiv = document.createElement('div');\n        dueDateDiv.textContent = `${item.dueDate}`;\n\n        let container = document.createElement('div');\n        container.classList.add('summary');\n        container.addEventListener('click', () => {\n            toggleDetails(item.id);\n        });\n\n        container.append(titleDiv, dueDateDiv);\n        todoElement.append(container);\n        unorderedList.append(todoElement);\n    }\n    return unorderedList;\n}\n\n\nfunction showAllToDos() {\n    (0,_ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__.clearPageContent)();\n    let header = (0,_ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createPageHeader)('All To Dos');\n    document.querySelector('main').append(header);\n\n    let allToDos = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.getToDos)();\n    let allToDosDiv = showToDos(allToDos);\n\n    let btn = (0,_ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createButtonInDiv)('Add new', showAddToDoForm);\n\n    document.querySelector('main').append(allToDosDiv, btn);\n}\n\n\nfunction listenForShowToDos() {\n    document.getElementById('show-todos').addEventListener('click', () => {\n        showAllToDos();\n    });\n}\n\n\nfunction showToDoDetails(id, listID=0) {\n    let divDetails = document.createElement('div');\n    divDetails.id = `details-${id}`;\n    divDetails.classList.add('todo-details');\n\n    // Get the additional properties of the todo item\n    let toDo = (0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.getToDo)(id);\n    let propertiesToShow = [\n        {'Priority': toDo.priority},\n        {'Description': toDo.description}\n    ]\n\n    propertiesToShow.forEach(property => {\n        for (let key in property) {     \n            let divContainer = document.createElement('div');\n            divContainer.classList.add('todo-property');\n            let propertyName = document.createElement('div');\n            propertyName.classList.add('detail-name');\n            propertyName.textContent = key;\n            let propertyValue = document.createElement('div');\n            propertyValue.classList.add('detail-value');\n            propertyValue.textContent = `${property[key]}`;\n          \n            divContainer.append(propertyName, propertyValue);\n            divDetails.append(divContainer);\n        }\n    })\n\n    // Create the action buttons for edit, mark done, and delete\n    let editFunction = () => {\n        showEditToDoForm(id);\n    }\n\n    // This is going to move but not sure where to put it yet\n    // let markDoneFunction = () => {\n    //     markDone(item.id);\n    //     if (listID === 0) {\n    //         showAllToDos();\n    //     } else {\n    //         showListItems(listID);\n    //     }\n    // }\n\n    let deleteFunction = () => {\n        ;(0,_todo_js__WEBPACK_IMPORTED_MODULE_1__.deleteToDo)(id);\n        if (listID === 0) {\n            showAllToDos();\n        } else {\n            (0,_list_ui_js__WEBPACK_IMPORTED_MODULE_2__.showListItems)(listID);\n        }\n    }\n\n    let btnEdit = (0,_ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createButton)('Edit', editFunction);\n    btnEdit.classList.add('edit');\n\n    let btnDelete = (0,_ui_helpers_js__WEBPACK_IMPORTED_MODULE_0__.createButton)('Delete', deleteFunction);\n    btnDelete.classList.add('delete');\n    \n    let buttonsContainer = document.createElement('div');\n    buttonsContainer.classList.add('options');    \n    buttonsContainer.append(btnEdit, btnDelete);\n\n    // Add the properties and the buttons\n    divDetails.append(buttonsContainer);\n    document.getElementById(`${id.toString()}`).append(divDetails);\n}\n\n\nfunction toggleDetails(id) {\n    if (document.getElementById(`details-${id}`)) {\n        document.getElementById(`details-${id}`).remove();\n    } else {\n        showToDoDetails(id);\n    }\n}\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/todo-ui.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addToDo\": () => (/* binding */ addToDo),\n/* harmony export */   \"deleteToDo\": () => (/* binding */ deleteToDo),\n/* harmony export */   \"editToDo\": () => (/* binding */ editToDo),\n/* harmony export */   \"getToDo\": () => (/* binding */ getToDo),\n/* harmony export */   \"getToDos\": () => (/* binding */ getToDos),\n/* harmony export */   \"markDone\": () => (/* binding */ markDone),\n/* harmony export */   \"toDoFactory\": () => (/* binding */ toDoFactory)\n/* harmony export */ });\n// Logic for handling todo items\n\nfunction getToDos() {\n    if (localStorage.getItem('toDos') === null) {\n        let toDos = [];\n        localStorage.setItem('toDos', JSON.stringify(toDos));\n    } \n    return JSON.parse(localStorage.getItem('toDos'));\n}\n\n\nfunction getToDo(id) {\n    let toDos = getToDos();\n    for (let item of toDos) {\n        if (item.id === id) {\n            return item;\n        }\n    }\n}\n\n\nfunction toDoFactory(title, dueDate, priority, list) {\n    const id = getToDos().length + 1;\n    let done = false;\n    let description = '';\n    return {id, title, done, dueDate, priority, description, list};\n}\n\n\n// Default list for a new todo item is the default list (id 0)\nfunction addToDo(title, dueDate, priority, list=0) {\n    let newToDo = toDoFactory(title, dueDate, priority, list);\n    let toDos = getToDos();\n    toDos.push(newToDo);\n    localStorage.setItem('toDos', JSON.stringify(toDos));\n}\n\n\nfunction editToDo(id, title, dueDate, priority, description) {\n    let toDos = getToDos();\n    for (let item of toDos) {\n        if (item.id === id) {\n            item.title = title;\n            item.dueDate = dueDate;\n            item.priority = priority;\n            item.description = description;\n        }\n    }\n    localStorage.setItem('toDos', JSON.stringify(toDos));\n}\n\n\nfunction markDone(id) {\n    let toDos = getToDos();\n    for (let item of toDos) {\n        if (item.id === id) {\n            item.done = true;\n        }\n    }\n    localStorage.setItem('toDos', JSON.stringify(toDos));\n}\n\n\nfunction deleteToDo(id) {\n    let toDos = getToDos();\n    for (let item of toDos) {\n        if (item.id === id) {\n            toDos.splice(toDos.indexOf(item), 1);\n        }\n    }\n    localStorage.setItem('toDos', JSON.stringify(toDos));\n}\n\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/todo.js?");

/***/ }),

/***/ "./src/ui-helpers.js":
/*!***************************!*\
  !*** ./src/ui-helpers.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"clearPageContent\": () => (/* binding */ clearPageContent),\n/* harmony export */   \"createButton\": () => (/* binding */ createButton),\n/* harmony export */   \"createButtonInDiv\": () => (/* binding */ createButtonInDiv),\n/* harmony export */   \"createFormInput\": () => (/* binding */ createFormInput),\n/* harmony export */   \"createPageHeader\": () => (/* binding */ createPageHeader)\n/* harmony export */ });\n/* harmony import */ var _todo_ui_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-ui.js */ \"./src/todo-ui.js\");\n\n\n// Helper functions for creating HTML elements\n\nfunction createFormInput(type, id, name, labelText) {\n    let div = document.createElement('div');\n    div.classList.add('form-field');\n    \n    let label = document.createElement('label');\n    label.setAttribute('for', id);\n    label.textContent = labelText;\n\n    let input = document.createElement('input');\n    input.type = type;\n    input.id = id;\n    input.name = name;\n\n    div.append(label, input);   \n    return div;\n}\n\nfunction createButton(text, functionOnClick) {\n    let btn = document.createElement('button');\n    btn.textContent = text;\n    btn.addEventListener('click', () => {     \n        functionOnClick();\n    });\n    return btn;\n}\n\nfunction createButtonInDiv(text, functionOnClick) {\n    let div = document.createElement('div');\n    let btn = createButton(text, functionOnClick);\n    div.append(btn);\n    return div;\n}\n\nfunction clearPageContent() {\n    let main = document.querySelector('main');\n    main.innerHTML = '';\n}\n\nfunction createPageHeader(text) {\n    let header = document.createElement('h1');\n    header.textContent = text;\n    return header;\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/ui-helpers.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
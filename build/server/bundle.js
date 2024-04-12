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

/***/ "./client/components/App.js":
/*!**********************************!*\
  !*** ./client/components/App.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Landing */ \"./client/components/Landing.js\");\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.less */ \"./client/components/style.less\");\n// ./client/components/App/index.js\n\n\n\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    className: _style_less__WEBPACK_IMPORTED_MODULE_2__[\"default\"].landingPage\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Landing__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://honey-store/./client/components/App.js?");

/***/ }),

/***/ "./client/components/Landing.js":
/*!**************************************!*\
  !*** ./client/components/Landing.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Landing)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.less */ \"./client/components/style.less\");\n\n\nfunction Landing() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"section\", {\n    className: _style_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].initialContent\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", {\n    className: _style_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title\n  }, \"Stefanov Zlatni Med\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", {\n    className: _style_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].landingText\n  }, \"U na\\u0161oj online prodavnici, med nije samo proizvod, ve\\u0107 putovanje kroz vreme i prostor, pru\\u017Eaju\\u0107i vam da osetite su\\u0161tinu prirode u svakom zalogaju. Od pa\\u017Eljivo biranih cvetova do va\\u0161e trpeze, na\\u0161 med je simbol posve\\u0107enosti, tradicije i neupitne kvalitete.Zala\\u017Eemo se za odr\\u017Eivu praksu p\\u010Delarstva, po\\u0161tuju\\u0107i p\\u010Dele i prirodu koja nam omogu\\u0107ava da kreiramo ovaj dragoceni eliksir\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", {\n    className: _style_less__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showMore\n  }, \"Saznaj vise\"));\n}\n\n//# sourceURL=webpack://honey-store/./client/components/Landing.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _client_components_App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../client/components/App */ \"./client/components/App.js\");\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nvar port = 3000;\napp.get('/', function (req, res) {\n  var jsx = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default().renderToString(\n  /*#__PURE__*/\n  // [A]\n  react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_client_components_App__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null));\n  var clientBundleScript = \"<script src=\\\"http://localhost:8080/scripts/bundle.js\\\"></script>\"; // [B]\n  var clientBundleStyle = \"<link rel=\\\"stylesheet\\\" href=\\\"http://localhost:8080/styles/bundle.css\\\">\"; // [B]\n\n  res.send(\"\\n        <!DOCTYPE html>\\n        <html lang=\\\"en\\\">\\n            <head>\\n                <meta charset=\\\"UTF-8\\\">\\n                <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n                <title>Stefanov Zlatni Med</title>\\n                \".concat(clientBundleStyle, \" <!-- [B] -->\\n            </head>\\n            <body>\\n                <div id='ssr-app'>\").concat(jsx, \"</div> <!-- [A] -->\\n                \").concat(clientBundleScript, \" <!-- [B] -->\\n            </body>\\n        </html>\\n    \"));\n});\napp.listen(port, function () {\n  console.log(\"App listening on http://localhost:\".concat(port));\n});\n\n//# sourceURL=webpack://honey-store/./server/index.js?");

/***/ }),

/***/ "./client/components/style.less":
/*!**************************************!*\
  !*** ./client/components/style.less ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"app\": \"app_bG9Dx\",\n\t\"landingPage\": \"landingPage_LLOnS\",\n\t\"title\": \"title_Qq6eU\",\n\t\"initialContent\": \"initialContent_ueii4\",\n\t\"example\": \"example_WDOsA\",\n\t\"dude\": \"dude_0+0u8\",\n\t\"content\": \"content_eqXQV\",\n\t\"landingText\": \"landingText_zi6YG\",\n\t\"menuItemDescription\": \"menuItemDescription_ehnyz\",\n\t\"menuItemText\": \"menuItemText_GXq3A\",\n\t\"showMore\": \"showMore_Uc+ke\",\n\t\"menu\": \"menu_ewqfU\",\n\t\"selectedMenuItem\": \"selectedMenuItem_3JrVa\"\n});\n\n\n//# sourceURL=webpack://honey-store/./client/components/style.less?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/index.js");
/******/ 	
/******/ })()
;
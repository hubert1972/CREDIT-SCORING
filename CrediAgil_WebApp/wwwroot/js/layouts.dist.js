(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/layouts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/layouts.js":
/*!*******************************!*\
  !*** ./wwwroot/js/layouts.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// isSmallScreen\n$('#helpers-isSmallScreen').click(function () {\n  alert(window.layoutHelpers.isSmallScreen());\n}); // isLayout1\n\n$('#helpers-isLayout1').click(function () {\n  alert(window.layoutHelpers.isLayout1());\n}); // isCollapsed\n\n$('#helpers-isCollapsed').click(function () {\n  alert(window.layoutHelpers.isCollapsed());\n}); // isFixed\n\n$('#helpers-isFixed').click(function () {\n  alert(window.layoutHelpers.isFixed());\n}); // isOffcanvas\n\n$('#helpers-isOffcanvas').click(function () {\n  alert(window.layoutHelpers.isOffcanvas());\n}); // isNavbarFixed\n\n$('#helpers-isNavbarFixed').click(function () {\n  alert(window.layoutHelpers.isNavbarFixed());\n}); // isFooterFixed\n\n$('#helpers-isFooterFixed').click(function () {\n  alert(window.layoutHelpers.isFooterFixed());\n}); // isReversed\n\n$('#helpers-isReversed').click(function () {\n  alert(window.layoutHelpers.isReversed());\n}); // setCollapsed\n\n$('#helpers-setCollapsed-false-true').click(function () {\n  window.layoutHelpers.setCollapsed(false, true);\n});\n$('#helpers-setCollapsed-true-true').click(function () {\n  window.layoutHelpers.setCollapsed(true, true);\n});\n$('#helpers-setCollapsed-false-false').click(function () {\n  window.layoutHelpers.setCollapsed(false, false);\n});\n$('#helpers-setCollapsed-true-false').click(function () {\n  window.layoutHelpers.setCollapsed(true, false);\n}); // toggleCollapsed\n\n$('#helpers-toggleCollapsed-true').click(function () {\n  window.layoutHelpers.toggleCollapsed(true);\n});\n$('#helpers-toggleCollapsed-false').click(function () {\n  window.layoutHelpers.toggleCollapsed(false);\n}); // setPosition\n\n$('#helpers-setPosition-collapse').click(function () {\n  window.layoutHelpers.setCollapsed(true, false);\n});\n$('#helpers-setPosition-false-false').click(function () {\n  window.layoutHelpers.setPosition(false, false);\n});\n$('#helpers-setPosition-true-false').click(function () {\n  window.layoutHelpers.setPosition(true, false);\n});\n$('#helpers-setPosition-false-true').click(function () {\n  window.layoutHelpers.setPosition(false, true);\n});\n$('#helpers-setPosition-true-true').click(function () {\n  window.layoutHelpers.setPosition(true, true);\n}); // setNavbarFixed\n\n$('#helpers-setNavbarFixed-reset').click(function () {\n  window.layoutHelpers.setPosition(false, false);\n});\n$('#helpers-setNavbarFixed-true').click(function () {\n  window.layoutHelpers.setNavbarFixed(true);\n});\n$('#helpers-setNavbarFixed-false').click(function () {\n  window.layoutHelpers.setNavbarFixed(false);\n}); // setFooterFixed\n\n$('#helpers-setFooterFixed-true').click(function () {\n  window.layoutHelpers.setFooterFixed(true);\n});\n$('#helpers-setFooterFixed-false').click(function () {\n  window.layoutHelpers.setFooterFixed(false);\n}); // setReversed\n\n$('#helpers-setReversed-true').click(function () {\n  window.layoutHelpers.setReversed(true);\n});\n$('#helpers-setReversed-false').click(function () {\n  window.layoutHelpers.setReversed(false);\n});\n\n//# sourceURL=webpack:///./wwwroot/js/layouts.js?");

/***/ })

/******/ })));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/ui_sidenav.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/ui_sidenav.js":
/*!**********************************!*\
  !*** ./wwwroot/js/ui_sidenav.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Vertical\n$(function () {\n  new SideNav($('#sidenav-1')[0]);\n  $('#sidenav-1-toggle-collapsed').click(function () {\n    $('#sidenav-1').toggleClass('sidenav-collapsed');\n  });\n}); // Horizontal\n\n$(function () {\n  new SideNav($('#sidenav-2')[0], {\n    orientation: 'horizontal'\n  });\n}); // Horizontal (Show dropdown on hover)\n\n$(function () {\n  new SideNav($('#sidenav-3')[0], {\n    orientation: 'horizontal',\n    showDropdownOnHover: true\n  });\n}); // Horizontal (within container)\n\n$(function () {\n  new SideNav($('#sidenav-4')[0], {\n    orientation: 'horizontal'\n  });\n}); // No animation\n\n$(function () {\n  new SideNav($('#sidenav-5')[0], {\n    animate: false\n  });\n  new SideNav($('#sidenav-6')[0], {\n    orientation: 'horizontal',\n    animate: false\n  });\n  $('#sidenav-5-toggle-collapsed').click(function () {\n    $('#sidenav-5').toggleClass('sidenav-collapsed');\n  });\n}); // No accordion\n\n$(function () {\n  new SideNav($('#sidenav-7')[0], {\n    accordion: false\n  });\n  new SideNav($('#sidenav-8')[0], {\n    orientation: 'horizontal',\n    accordion: false\n  });\n  $('#sidenav-7-toggle-collapsed').click(function () {\n    $('#sidenav-7').toggleClass('sidenav-collapsed');\n  });\n}); // Elements\n\n$(function () {\n  $('.sidenavs-9').each(function () {\n    new SideNav(this);\n  });\n  $('#sidenavs-9-toggle-collapsed').click(function () {\n    $('.sidenavs-9').toggleClass('sidenav-collapsed');\n  });\n}); // Colors (vertical)\n\n$(function () {\n  $('.sidenavs-10').each(function () {\n    new SideNav(this);\n  });\n  $('#sidenavs-10-toggle-collapsed').click(function () {\n    $('.sidenavs-10').toggleClass('sidenav-collapsed');\n  });\n}); // Colors (horizontal)\n\n$(function () {\n  $('.sidenavs-11').each(function () {\n    new SideNav(this, {\n      orientation: 'horizontal'\n    });\n  });\n}); // With background\n\n$(function () {\n  $('.sidenavs-12').each(function () {\n    new SideNav(this);\n  });\n  $('#sidenavs-12-toggle-collapsed').click(function () {\n    $('.sidenavs-12').toggleClass('sidenav-collapsed');\n  });\n});\n\n//# sourceURL=webpack:///./wwwroot/js/ui_sidenav.js?");

/***/ })

/******/ })));
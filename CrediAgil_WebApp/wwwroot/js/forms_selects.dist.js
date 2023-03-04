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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/forms_selects.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/forms_selects.js":
/*!*************************************!*\
  !*** ./wwwroot/js/forms_selects.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Bootstrap Select\n$(function () {\n  $('.selectpicker').selectpicker();\n}); // Select2\n\n$(function () {\n  $('.select2-demo').each(function () {\n    $(this).wrap('<div class=\"position-relative\"></div>').select2({\n      placeholder: 'Select value',\n      dropdownParent: $(this).parent()\n    });\n  });\n}); // Bootstrap Tagsinput\n\n$(function () {\n  var $el = $('#bs-tagsinput-1');\n  $el.tagsinput({\n    tagClass: function tagClass(item) {\n      switch (item.continent) {\n        case 'Europe':\n          return 'badge badge-primary';\n\n        case 'America':\n          return 'badge badge-danger';\n\n        case 'Australia':\n          return 'badge badge-success';\n\n        case 'Africa':\n          return 'badge badge-default';\n\n        case 'Asia':\n          return 'badge badge-warning';\n      }\n    },\n    itemValue: 'value',\n    itemText: 'text'\n  });\n  $el.tagsinput('add', {\n    value: 1,\n    text: 'Amsterdam',\n    continent: 'Europe'\n  });\n  $el.tagsinput('add', {\n    value: 4,\n    text: 'Washington',\n    continent: 'America'\n  });\n  $el.tagsinput('add', {\n    value: 7,\n    text: 'Sydney',\n    continent: 'Australia'\n  });\n  $el.tagsinput('add', {\n    value: 10,\n    text: 'Beijing',\n    continent: 'Asia'\n  });\n  $el.tagsinput('add', {\n    value: 13,\n    text: 'Cairo',\n    continent: 'Africa'\n  });\n  $('#bs-tagsinput-2').tagsinput({\n    tagClass: 'badge badge-primary'\n  });\n  $('#bs-tagsinput-3').tagsinput({\n    tagClass: 'badge badge-secondary'\n  });\n  $('#bs-tagsinput-4').tagsinput({\n    tagClass: 'badge badge-success'\n  });\n  $('#bs-tagsinput-5').tagsinput({\n    tagClass: 'badge badge-info'\n  });\n  $('#bs-tagsinput-6').tagsinput({\n    tagClass: 'badge badge-warning'\n  });\n  $('#bs-tagsinput-7').tagsinput({\n    tagClass: 'badge badge-danger'\n  });\n  $('#bs-tagsinput-8').tagsinput({\n    tagClass: 'badge badge-dark'\n  });\n});\n\n//# sourceURL=webpack:///./wwwroot/js/forms_selects.js?");

/***/ })

/******/ })));
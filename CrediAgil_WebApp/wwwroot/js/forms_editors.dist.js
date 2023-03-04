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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/forms_editors.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/forms_editors.js":
/*!*************************************!*\
  !*** ./wwwroot/js/forms_editors.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Bootstrap Markdown\n$(function () {\n  $('#bs-markdown').markdown({\n    iconlibrary: 'fa',\n    footer: '<div id=\"md-character-footer\"></div><small id=\"md-character-counter\" class=\"text-muted\">350 character left</small>',\n    onChange: function onChange(e) {\n      var contentLength = e.getContent().length;\n\n      if (contentLength > 350) {\n        $('#md-character-counter').removeClass('text-muted').addClass('text-danger').html(contentLength - 350 + ' character surplus.');\n      } else {\n        $('#md-character-counter').removeClass('text-danger').addClass('text-muted').html(350 - contentLength + ' character left.');\n      }\n    }\n  }); // Update character counter\n\n  $('#markdown').trigger('change'); // *******************************************************************\n  // Fix icons\n\n  $('.md-editor .fa-header').removeClass('fa fa-header').addClass('fas fa-heading');\n  $('.md-editor .fa-picture-o').removeClass('fa fa-picture-o').addClass('far fa-image');\n}); // Quill\n\n$(function () {\n  if (!window.Quill) {\n    return $('#quill-editor,#quill-toolbar,#quill-bubble-editor,#quill-bubble-toolbar').remove();\n  }\n\n  var editor = new Quill('#quill-editor', {\n    modules: {\n      toolbar: '#quill-toolbar'\n    },\n    placeholder: 'Type something',\n    theme: 'snow'\n  }); // Get HTML content:\n  //\n  // var content = editor.root.innerHTML;\n  //\n\n  var bubbleEditor = new Quill('#quill-bubble-editor', {\n    placeholder: 'Compose an epic...',\n    modules: {\n      toolbar: '#quill-bubble-toolbar'\n    },\n    theme: 'bubble'\n  });\n});\n\n//# sourceURL=webpack:///./wwwroot/js/forms_editors.js?");

/***/ })

/******/ })));
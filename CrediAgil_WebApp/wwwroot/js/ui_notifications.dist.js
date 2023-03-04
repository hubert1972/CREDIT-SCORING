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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/ui_notifications.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/ui_notifications.js":
/*!****************************************!*\
  !*** ./wwwroot/js/ui_notifications.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Growl\n$(function () {\n  var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';\n  $('.bs4-toast').toast({\n    autohide: false\n  });\n  $('#growl-default').click(function () {\n    $.growl({\n      title: 'Growl',\n      message: 'The kitten is awake!',\n      location: isRtl ? 'tl' : 'tr'\n    });\n  });\n  $('#growl-notice').click(function () {\n    $.growl.notice({\n      message: 'The kitten is cute!',\n      location: isRtl ? 'tl' : 'tr'\n    });\n  });\n  $('#growl-warning').click(function () {\n    $.growl.warning({\n      message: 'The kitten is ugly!',\n      location: isRtl ? 'tl' : 'tr'\n    });\n  });\n  $('#growl-error').click(function () {\n    $.growl.error({\n      message: 'The kitten is attacking!',\n      location: isRtl ? 'tl' : 'tr'\n    });\n  });\n  $('#growl-static').click(function () {\n    $.growl({\n      title: 'Growl',\n      message: 'The kitten is awake!',\n      duration: 9999 * 9999,\n      location: isRtl ? 'tl' : 'tr'\n    });\n  });\n  $('#growl-small').click(function () {\n    $.growl({\n      title: 'Growl',\n      message: 'The kitten is awake!',\n      size: 'small',\n      location: isRtl ? 'tl' : 'tr'\n    });\n  });\n  $('#growl-large').click(function () {\n    $.growl({\n      title: 'Growl',\n      message: 'The kitten is awake!',\n      size: 'large',\n      location: isRtl ? 'tl' : 'tr'\n    });\n  });\n}); // Toastr\n\n$(function () {\n  var curMsgIndex = -1;\n\n  function getMessage() {\n    var msgs = ['My name is Inigo Montoya. You killed my father. Prepare to die!', 'Are you the six fingered man?', 'Inconceivable!', 'I do not think that means what you think it means.', 'Have fun storming the castle!'];\n    curMsgIndex++;\n\n    if (curMsgIndex === msgs.length) {\n      curMsgIndex = 0;\n    }\n\n    return msgs[curMsgIndex];\n  }\n\n  ;\n  $('#toastr-show').click(function () {\n    var msg = $('#toastr-message').val() || getMessage();\n    var title = $('#toastr-title').val() || '';\n    var type = $('#toastr-type').val();\n    toastr[type](msg, title, {\n      positionClass: $('input[name=\"toastr-position\"]:checked').val(),\n      closeButton: $('#toastr-close-button').prop('checked'),\n      progressBar: $('#toastr-progress-bar').prop('checked'),\n      preventDuplicates: $('#toastr-prevent-duplicates').prop('checked'),\n      newestOnTop: $('#toastr-newest-on-top').prop('checked'),\n      rtl: $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl'\n    });\n  });\n  $('#toastr-clear').on('click', function () {\n    toastr.clear();\n  });\n});\n\n//# sourceURL=webpack:///./wwwroot/js/ui_notifications.js?");

/***/ })

/******/ })));
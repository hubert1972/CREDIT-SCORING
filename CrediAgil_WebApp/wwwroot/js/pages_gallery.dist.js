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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/pages_gallery.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/pages_gallery.js":
/*!*************************************!*\
  !*** ./wwwroot/js/pages_gallery.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  $('#gallery-thumbnails').on('click', '.gallery-thumbnail > .img-thumbnail', function (e) {\n    e.preventDefault(); // Select only visible thumbnails\n\n    var links = $('#gallery-thumbnails').find('.gallery-thumbnail:not(.d-none) > .img-thumbnail');\n    window.blueimpGallery(links, {\n      container: '#gallery-lightbox',\n      carousel: true,\n      hidePageScrollbars: true,\n      disableScroll: true,\n      index: this\n    });\n  });\n  var msnry = new Masonry('#gallery-thumbnails', {\n    itemSelector: '.gallery-thumbnail:not(.d-none)',\n    columnWidth: '.gallery-sizer',\n    originLeft: !($('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl')\n  });\n  $('#gallery-filter').on('click', '.nav-link', function (e) {\n    e.preventDefault(); // Set active filter\n\n    $('#gallery-filter .nav-link').removeClass('active');\n    $(this).addClass('active'); // Show all\n\n    if (this.getAttribute('href') === '#all') {\n      $('#gallery-thumbnails .gallery-thumbnail').removeClass('d-none'); // Show thumbnails only with selected tag\n    } else {\n      $('#gallery-thumbnails .gallery-thumbnail:not([data-tag=\"' + this.getAttribute('href').replace('#', '') + '\"])').addClass('d-none');\n      $('#gallery-thumbnails .gallery-thumbnail[data-tag=\"' + this.getAttribute('href').replace('#', '') + '\"]').removeClass('d-none');\n    } // Relayout\n\n\n    msnry.layout();\n  });\n});\n\n//# sourceURL=webpack:///./wwwroot/js/pages_gallery.js?");

/***/ })

/******/ })));
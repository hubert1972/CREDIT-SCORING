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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/ui_tour.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/ui_tour.js":
/*!*******************************!*\
  !*** ./wwwroot/js/ui_tour.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  function setupTour(tour) {\n    var backButtonClass = 'btn btn-sm btn-secondary md-btn-flat';\n    var nextButtonClass = 'btn btn-sm btn-primary';\n    var isRtl = $('html').attr('dir') === 'rtl';\n    tour.addStep({\n      title: 'Title of first step',\n      text: '<p>Content of first step</p><p><strong>Second</strong> line</p>',\n      attachTo: {\n        element: '#tour-1',\n        on: isRtl ? 'left' : 'right'\n      },\n      buttons: [{\n        action: tour.cancel,\n        classes: backButtonClass,\n        text: 'Exit'\n      }, {\n        action: tour.next,\n        classes: nextButtonClass,\n        text: 'Next'\n      }]\n    });\n    tour.addStep({\n      title: 'Title of second step',\n      text: 'Content of second step',\n      attachTo: {\n        element: '#tour-2',\n        on: isRtl ? 'right' : 'left'\n      },\n      buttons: [{\n        action: tour.back,\n        classes: backButtonClass,\n        text: 'Back'\n      }, {\n        action: tour.next,\n        classes: nextButtonClass,\n        text: 'Next'\n      }]\n    });\n    tour.addStep({\n      title: 'Title of third step',\n      text: 'Content of third step',\n      attachTo: {\n        element: '#tour-3',\n        on: 'bottom'\n      },\n      buttons: [{\n        action: tour.back,\n        classes: backButtonClass,\n        text: 'Back'\n      }, {\n        action: tour.next,\n        classes: nextButtonClass,\n        text: 'Next'\n      }]\n    });\n    tour.addStep({\n      title: 'Title of fourth step',\n      text: 'Content of fourth step',\n      attachTo: {\n        element: '#tour-4',\n        on: 'top'\n      },\n      buttons: [{\n        action: tour.back,\n        classes: backButtonClass,\n        text: 'Back'\n      }, {\n        action: tour.next,\n        classes: nextButtonClass,\n        text: 'Next'\n      }]\n    });\n    tour.addStep({\n      title: 'Floating modal',\n      text: 'Content of floating modal step',\n      buttons: [{\n        action: tour.back,\n        classes: backButtonClass,\n        text: 'Back'\n      }, {\n        action: tour.next,\n        classes: nextButtonClass,\n        text: 'Next'\n      }]\n    });\n    tour.addStep({\n      title: 'Title of fifth step',\n      text: 'Content of fifth step',\n      attachTo: {\n        element: '#tour-5',\n        on: 'bottom'\n      },\n      buttons: [{\n        action: tour.back,\n        classes: backButtonClass,\n        text: 'Back'\n      }, {\n        action: tour.next,\n        classes: nextButtonClass,\n        text: 'Done'\n      }]\n    });\n    return tour;\n  }\n\n  $('#shepherd-example').click(function () {\n    var tour = new Shepherd.Tour({\n      includeStyles: false,\n      defaultStepOptions: {\n        scrollTo: false,\n        cancelIcon: {\n          enabled: true\n        }\n      },\n      useModalOverlay: true\n    });\n    setupTour(tour).start();\n  });\n});\n\n//# sourceURL=webpack:///./wwwroot/js/ui_tour.js?");

/***/ })

/******/ })));
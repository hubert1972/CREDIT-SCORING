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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/misc_vegasjs.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/misc_vegasjs.js":
/*!************************************!*\
  !*** ./wwwroot/js/misc_vegasjs.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  $('#vegas-example').vegas({\n    slides: [{\n      src: \"/img/bg/1.jpg\"\n    }, {\n      src: \"/img/bg/2.jpg\"\n    }, {\n      src: \"/img/bg/3.jpg\"\n    }, {\n      src: \"/img/bg/4.jpg\"\n    }, {\n      src: \"/img/bg/5.jpg\"\n    }],\n    transition: ['fade', 'zoomOut', 'zoomIn', 'blur'],\n    animation: ['kenburnsUp', 'kenburnsDown', 'kenburnsLeft', 'kenburnsRight']\n  }); // Progess color\n\n  $('#vegas-example .vegas-timer-progress').css('background', 'rgba(0,0,0,.2)'); // Overlays\n\n  $('#vegas-dark-overlay-example, #vegas-light-overlay-example').vegas({\n    overlay: true,\n    timer: false,\n    shuffle: true,\n    slides: [{\n      src: \"/img/bg/1.jpg\"\n    }, {\n      src: \"/img/bg/2.jpg\"\n    }, {\n      src: \"/img/bg/3.jpg\"\n    }, {\n      src: \"/img/bg/4.jpg\"\n    }, {\n      src: \"/img/bg/5.jpg\"\n    }],\n    transition: ['fade', 'blur']\n  }); // Fixed bg\n\n  $('#vegas-fixed-bg-example').vegas({\n    overlay: false,\n    timer: false,\n    shuffle: true,\n    slides: [{\n      src: \"/img/bg/1.jpg\"\n    }, {\n      src: \"/img/bg/2.jpg\"\n    }, {\n      src: \"/img/bg/3.jpg\"\n    }, {\n      src: \"/img/bg/4.jpg\"\n    }, {\n      src: \"/img/bg/5.jpg\"\n    }],\n    transition: ['fade', 'blur']\n  });\n});\n\n//# sourceURL=webpack:///./wwwroot/js/misc_vegasjs.js?");

/***/ })

/******/ })));
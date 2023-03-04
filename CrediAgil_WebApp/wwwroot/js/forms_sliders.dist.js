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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/forms_sliders.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/forms_sliders.js":
/*!*************************************!*\
  !*** ./wwwroot/js/forms_sliders.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Bootstrap Slider\n$(function () {\n  $('#bs-slider-1').slider({\n    formatter: function formatter(value) {\n      return 'Value: ' + value;\n    }\n  });\n  $('#bs-slider-2').slider();\n  $('#bs-slider-3').slider({\n    reversed: true\n  });\n  $('#bs-slider-4').slider({\n    reversed: true\n  });\n  $('#bs-slider-5').slider();\n  $('#bs-slider-6').slider({\n    ticks: [0, 100, 200, 300, 400],\n    ticks_labels: ['$0', '$100', '$200', '$300', '$400']\n  });\n  $('#bs-slider-7').slider({\n    ticks: [0, 100, 200, 300, 400],\n    ticks_labels: ['$0', '$100', '$200', '$300', '$400'],\n    reversed: true\n  });\n  $('.bs-slider-variant').slider();\n}); // noUiSlider\n\n$(function () {\n  var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';\n  noUiSlider.create(document.getElementById('nouislider-1'), {\n    start: [80],\n    connect: [true, false],\n    direction: isRtl ? 'rtl' : 'ltr',\n    range: {\n      'min': 0,\n      'max': 100\n    }\n  }); // Vertical\n\n  var slider = document.getElementById('nouislider-2');\n  slider.style.height = '200px';\n  slider.style.margin = '0 auto 30px';\n  noUiSlider.create(slider, {\n    start: [1450],\n    connect: [true, false],\n    orientation: 'vertical',\n    direction: 'rtl',\n    step: 150,\n    range: {\n      'min': 1300,\n      'max': 3250\n    }\n  }); // Range\n\n  noUiSlider.create(document.getElementById('nouislider-3'), {\n    start: [4000, 8000],\n    step: 1000,\n    connect: true,\n    direction: isRtl ? 'rtl' : 'ltr',\n    range: {\n      'min': [2000],\n      'max': [10000]\n    }\n  }); // Full\n\n  noUiSlider.create(document.getElementById('nouislider-4'), {\n    start: [1450, 2050, 2350, 3000],\n    connect: true,\n    behaviour: 'tap-drag',\n    step: 150,\n    tooltips: true,\n    range: {\n      'min': 1000,\n      'max': 3750\n    },\n    pips: {\n      mode: 'steps',\n      stepped: true,\n      density: 4\n    },\n    direction: isRtl ? 'rtl' : 'ltr'\n  });\n  var slider2 = document.getElementById('nouislider-5');\n  slider2.style.height = '400px';\n  slider2.style.margin = '0 auto 30px';\n  noUiSlider.create(slider2, {\n    start: [1450, 2050, 2350, 3000],\n    connect: true,\n    direction: 'rtl',\n    orientation: 'vertical',\n    behaviour: 'tap-drag',\n    step: 150,\n    tooltips: true,\n    range: {\n      'min': 1000,\n      'max': 3750\n    },\n    pips: {\n      mode: 'steps',\n      stepped: true,\n      density: 4\n    }\n  }); // Colors\n\n  var slider3 = document.getElementById('nouislider-6');\n  var slider4 = document.getElementById('nouislider-7');\n  var slider5 = document.getElementById('nouislider-8');\n  var slider6 = document.getElementById('nouislider-9');\n  var slider7 = document.getElementById('nouislider-10');\n  var slider8 = document.getElementById('nouislider-11');\n  var slider9 = document.getElementById('nouislider-12');\n  var options = {\n    start: [2050, 3000],\n    connect: true,\n    behaviour: 'tap-drag',\n    step: 150,\n    tooltips: true,\n    range: {\n      'min': 1000,\n      'max': 3750\n    },\n    pips: {\n      mode: 'steps',\n      stepped: true,\n      density: 4\n    },\n    direction: isRtl ? 'rtl' : 'ltr'\n  };\n  noUiSlider.create(slider3, options);\n  noUiSlider.create(slider4, options);\n  noUiSlider.create(slider5, options);\n  noUiSlider.create(slider6, options);\n  noUiSlider.create(slider7, options);\n  noUiSlider.create(slider8, options);\n  noUiSlider.create(slider9, options);\n});\n\n//# sourceURL=webpack:///./wwwroot/js/forms_sliders.js?");

/***/ })

/******/ })));
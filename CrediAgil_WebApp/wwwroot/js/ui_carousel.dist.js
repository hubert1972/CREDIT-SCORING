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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/ui_carousel.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/ui_carousel.js":
/*!***********************************!*\
  !*** ./wwwroot/js/ui_carousel.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Swiper\n$(function () {\n  var defaultSwiper = new Swiper('#swiper-default');\n  var swiperWithArrows = new Swiper('#swiper-with-arrows', {\n    navigation: {\n      nextEl: '.swiper-button-next',\n      prevEl: '.swiper-button-prev'\n    }\n  });\n  var swiperWithPagination = new Swiper('#swiper-with-pagination', {\n    pagination: {\n      el: '.swiper-pagination',\n      clickable: true\n    }\n  });\n  var swiperWithFractionPagination = new Swiper('#swiper-with-fraction-pagination', {\n    pagination: {\n      el: '.swiper-pagination',\n      type: 'fraction'\n    }\n  });\n  var swiperWithProgress = new Swiper('#swiper-with-progress', {\n    pagination: {\n      el: '.swiper-pagination',\n      type: 'progressbar'\n    },\n    navigation: {\n      nextEl: '.swiper-button-next',\n      prevEl: '.swiper-button-prev'\n    }\n  });\n  var swiperWithScrollbar = new Swiper('#swiper-with-scrollbar', {\n    scrollbar: {\n      el: '.swiper-scrollbar',\n      hide: true\n    }\n  });\n  var verticalSwiper = new Swiper('#swiper-vertical', {\n    direction: 'vertical',\n    pagination: {\n      el: '.swiper-pagination',\n      clickable: true\n    }\n  });\n  var swiperMultipleSlides = new Swiper('#swiper-multiple-slides', {\n    slidesPerView: 3,\n    spaceBetween: 30,\n    pagination: {\n      el: '.swiper-pagination',\n      clickable: true\n    }\n  });\n  var swiperFadeEffect = new Swiper('#swiper-fade-effect', {\n    effect: 'fade',\n    pagination: {\n      el: '.swiper-pagination',\n      clickable: true\n    },\n    navigation: {\n      nextEl: '.swiper-button-next',\n      prevEl: '.swiper-button-prev'\n    }\n  });\n  var swiper3dCubeEffect = new Swiper('#swiper-3d-cube-effect', {\n    effect: 'cube',\n    grabCursor: true,\n    cubeEffect: {\n      shadow: true,\n      slideShadows: true,\n      shadowOffset: 20,\n      shadowScale: 0.94\n    },\n    pagination: {\n      el: '.swiper-pagination'\n    }\n  });\n  var swiper3dCoverflowEffect = new Swiper('#swiper-3d-coverflow-effect', {\n    effect: 'coverflow',\n    grabCursor: true,\n    centeredSlides: true,\n    slidesPerView: 'auto',\n    coverflowEffect: {\n      rotate: 50,\n      stretch: 0,\n      depth: 100,\n      modifier: 1,\n      slideShadows: true\n    },\n    pagination: {\n      el: '.swiper-pagination'\n    }\n  });\n  var swiper3dFlipEffect = new Swiper('#swiper-3d-flip-effect', {\n    effect: 'flip',\n    grabCursor: true,\n    pagination: {\n      el: '.swiper-pagination'\n    },\n    navigation: {\n      nextEl: '.swiper-button-next',\n      prevEl: '.swiper-button-prev'\n    }\n  });\n});\n\n//# sourceURL=webpack:///./wwwroot/js/ui_carousel.js?");

/***/ })

/******/ })));
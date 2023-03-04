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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/forms_extras.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/forms_extras.js":
/*!************************************!*\
  !*** ./wwwroot/js/forms_extras.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Autosize\n$(function () {\n  autosize($('#autosize-demo'));\n}); // Vanilla Text Mask\n\n$(function () {\n  // Phone\n  //\n  vanillaTextMask.maskInput({\n    inputElement: $('#text-mask-phone')[0],\n    mask: ['(', /[1-9]/, /\\d/, /\\d/, ')', ' ', /\\d/, /\\d/, /\\d/, '-', /\\d/, /\\d/, /\\d/, /\\d/]\n  }); // Number\n  //\n\n  vanillaTextMask.maskInput({\n    inputElement: $('#text-mask-number')[0],\n    mask: textMaskAddons.createNumberMask({\n      prefix: '$'\n    })\n  }); // Email\n  //\n\n  vanillaTextMask.maskInput({\n    inputElement: $('#text-mask-email')[0],\n    mask: textMaskAddons.emailMask\n  }); // Date\n  //\n\n  vanillaTextMask.maskInput({\n    inputElement: $('#text-mask-date')[0],\n    mask: [/\\d/, /\\d/, '/', /\\d/, /\\d/, '/', /\\d/, /\\d/, /\\d/, /\\d/],\n    pipe: textMaskAddons.createAutoCorrectedDatePipe('mm/dd/yyyy')\n  });\n}); // Knob\n\n$(function () {\n  if (themeSettings.isDarkStyle()) {\n    $('.knob-example input').attr('data-bgcolor', 'rgba(255, 255, 255, .1)').each(function () {\n      if (!$(this).attr('data-fgcolor') || $(this).attr('data-fgcolor') === '#222222') {\n        $(this).attr('data-fgcolor', '#fff');\n      }\n    });\n  }\n\n  $('.knob-example input').knob();\n}); // Bootstrap Maxlength\n\n$(function () {\n  $('.bootstrap-maxlength-example').each(function () {\n    $(this).maxlength({\n      warningClass: 'label label-success',\n      limitReachedClass: 'label label-danger',\n      separator: ' out of ',\n      preText: 'You typed ',\n      postText: ' chars available.',\n      validate: true,\n      threshold: +this.getAttribute('maxlength')\n    });\n  });\n}); // Pwstrength-bootstrap\n\n$(function () {\n  $('#pwstrength-example').pwstrength({\n    ui: {\n      progressExtraCssClasses: 'pwstrength-progress',\n      useVerdictCssClass: true,\n      showErrors: true\n    }\n  });\n});\n\n//# sourceURL=webpack:///./wwwroot/js/forms_extras.js?");

/***/ })

/******/ })));
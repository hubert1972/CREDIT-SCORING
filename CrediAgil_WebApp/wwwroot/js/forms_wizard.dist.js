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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/forms_wizard.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/forms_wizard.js":
/*!************************************!*\
  !*** ./wwwroot/js/forms_wizard.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  $('.smartwizard-example').smartWizard({\n    autoAdjustHeight: false,\n    backButtonSupport: false,\n    useURLhash: false,\n    showStepURLhash: false\n  }); // Change markup for vertical wizards\n  //\n\n  $('#smartwizard-4 .sw-toolbar').appendTo($('#smartwizard-4 .sw-container'));\n  $('#smartwizard-5 .sw-toolbar').appendTo($('#smartwizard-5 .sw-container'));\n}); // With validation\n\n$(function () {\n  var $form = $('#smartwizard-6');\n  var $btnFinish = $('<button class=\"btn-finish btn btn-primary hidden mr-2\" type=\"button\">Finish</button>'); // Set up validator\n\n  $form.validate({\n    errorPlacement: function errorPlacement(error, element) {\n      $(element).parents('.form-group').append(error.addClass('invalid-feedback small d-block'));\n    },\n    highlight: function highlight(element) {\n      $(element).addClass('is-invalid');\n    },\n    unhighlight: function unhighlight(element) {\n      $(element).removeClass('is-invalid');\n    },\n    rules: {\n      'wizard-confirm': {\n        equalTo: 'input[name=\"wizard-password\"]'\n      }\n    }\n  }); // Initialize wizard\n\n  $form.smartWizard({\n    autoAdjustHeight: false,\n    backButtonSupport: false,\n    useURLhash: false,\n    showStepURLhash: false,\n    toolbarSettings: {\n      toolbarExtraButtons: [$btnFinish]\n    }\n  }).on('leaveStep', function (e, anchorObject, stepNumber, stepDirection) {\n    // stepDirection === 'forward' :- this condition allows to do the form validation\n    // only on forward navigation, that makes easy navigation on backwards still do the validation when going next\n    if (stepDirection === 'forward') {\n      return $form.valid();\n    }\n\n    return true;\n  }).on('showStep', function (e, anchorObject, stepNumber, stepDirection) {\n    var $btn = $form.find('.btn-finish'); // Enable finish button only on last step\n\n    if (stepNumber === 3) {\n      $btn.removeClass('hidden');\n    } else {\n      $btn.addClass('hidden');\n    }\n  }); // Click on finish button\n\n  $form.find('.btn-finish').on('click', function () {\n    if (!$form.valid()) {\n      return;\n    } // Submit form\n\n\n    alert(\"Great! We're ready to submit form.\");\n    return false;\n  });\n});\n\n//# sourceURL=webpack:///./wwwroot/js/forms_wizard.js?");

/***/ })

/******/ })));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/forms_validation.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/forms_validation.js":
/*!****************************************!*\
  !*** ./wwwroot/js/forms_validation.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  // Initialize Select2 select box\n  $('select[name=\"validation-select2\"]').select2({\n    allowClear: true,\n    placeholder: 'Select a framework...'\n  }).change(function () {\n    $(this).valid();\n  }); // Initialize Select2 multiselect box\n\n  $('select[name=\"validation-select2-multi\"]').select2({\n    placeholder: 'Select gear...'\n  }).change(function () {\n    $(this).valid();\n  }); // Trigger validation on tagsinput change\n\n  $('input[name=\"validation-bs-tagsinput\"]').on('itemAdded itemRemoved', function () {\n    $(this).valid();\n  }); // Add phone validator\n\n  $.validator.addMethod('phone_format', function (value, element) {\n    return this.optional(element) || /^\\(\\d{3}\\)[ ]\\d{3}\\-\\d{4}$/.test(value);\n  }, 'Invalid phone number.'); // Initialize validation\n\n  $('#validation-form').validate({\n    ignore: '.ignore, .select2-input',\n    focusInvalid: false,\n    rules: {\n      'validation-email': {\n        required: true,\n        email: true\n      },\n      'validation-password': {\n        required: true,\n        minlength: 6,\n        maxlength: 20\n      },\n      'validation-password-confirmation': {\n        required: true,\n        minlength: 6,\n        equalTo: 'input[name=\"validation-password\"]'\n      },\n      'validation-required': {\n        required: true\n      },\n      'validation-url': {\n        required: true,\n        url: true\n      },\n      'validation-phone': {\n        required: true,\n        phone_format: true\n      },\n      'validation-select': {\n        required: true\n      },\n      'validation-multiselect': {\n        required: true,\n        minlength: 2\n      },\n      'validation-select2': {\n        required: true\n      },\n      'validation-select2-multi': {\n        required: true,\n        minlength: 2\n      },\n      'validation-bs-tagsinput': {\n        required: true\n      },\n      'validation-text': {\n        required: true\n      },\n      'validation-file': {\n        required: true\n      },\n      'validation-switcher': {\n        required: true\n      },\n      'validation-radios': {\n        required: true\n      },\n      'validation-radios-custom': {\n        required: true\n      },\n      'validation-checkbox': {\n        required: true\n      },\n      'validation-checkbox-custom': {\n        required: true\n      },\n      // Checkbox groups\n      //\n      'validation-checkbox-group-1': {\n        require_from_group: [1, 'input[name=\"validation-checkbox-group-1\"], input[name=\"validation-checkbox-group-2\"]']\n      },\n      'validation-checkbox-group-2': {\n        require_from_group: [1, 'input[name=\"validation-checkbox-group-1\"], input[name=\"validation-checkbox-group-2\"]']\n      },\n      'validation-checkbox-custom-group-1': {\n        require_from_group: [1, 'input[name=\"validation-checkbox-custom-group-1\"], input[name=\"validation-checkbox-custom-group-2\"]']\n      },\n      'validation-checkbox-custom-group-2': {\n        require_from_group: [1, 'input[name=\"validation-checkbox-custom-group-1\"], input[name=\"validation-checkbox-custom-group-2\"]']\n      }\n    },\n    // Errors\n    //\n    errorPlacement: function errorPlacement(error, element) {\n      var $parent = $(element).parents('.form-group'); // Do not duplicate errors\n\n      if ($parent.find('.jquery-validation-error').length) {\n        return;\n      }\n\n      $parent.append(error.addClass('jquery-validation-error small form-text invalid-feedback'));\n    },\n    highlight: function highlight(element) {\n      var $el = $(element);\n      var $parent = $el.parents('.form-group');\n      $el.addClass('is-invalid'); // Select2 and Tagsinput\n\n      if ($el.hasClass('select2-hidden-accessible') || $el.attr('data-role') === 'tagsinput') {\n        $el.parent().addClass('is-invalid');\n      }\n    },\n    unhighlight: function unhighlight(element) {\n      $(element).parents('.form-group').find('.is-invalid').removeClass('is-invalid');\n    }\n  });\n});\n\n//# sourceURL=webpack:///./wwwroot/js/forms_validation.js?");

/***/ })

/******/ })));
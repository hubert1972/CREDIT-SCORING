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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/ui_cropper.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/ui_cropper.js":
/*!**********************************!*\
  !*** ./wwwroot/js/ui_cropper.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  $('[data-toggle=\"cropper-example-tooltip\"]').tooltip({\n    container: 'body'\n  });\n  var URL = window.URL || window.webkitURL;\n  var $image = $('#cropper-example-image');\n  var $download = $('#cropper-example-download');\n  var options = {\n    aspectRatio: 16 / 9,\n    preview: '.cropper-example-preview',\n    crop: function crop(e) {\n      $('#cropper-example-dataX').val(Math.round(e.detail.x));\n      $('#cropper-example-dataY').val(Math.round(e.detail.y));\n      $('#cropper-example-dataHeight').val(Math.round(e.detail.height));\n      $('#cropper-example-dataWidth').val(Math.round(e.detail.width));\n      $('#cropper-example-dataRotate').val(e.detail.rotate);\n      $('#cropper-example-dataScaleX').val(e.detail.scaleX);\n      $('#cropper-example-dataScaleY').val(e.detail.scaleY);\n    }\n  };\n  var originalImageURL = $image.attr('src');\n  var uploadedImageURL; // Cropper\n\n  $image.cropper(options); // IE10 fix\n\n  if (typeof document.documentMode === 'number' && document.documentMode < 11) {\n    options = $.extend({}, options, {\n      zoomOnWheel: false\n    });\n    setTimeout(function () {\n      $image.cropper('destroy').cropper(options);\n    }, 1000);\n  } // Buttons\n\n\n  if (!$.isFunction(document.createElement('canvas').getContext)) {\n    $('button[data-method=\"getCroppedCanvas\"]').prop('disabled', true);\n  }\n\n  if (typeof document.createElement('cropper').style.transition === 'undefined') {\n    $('button[data-method=\"rotate\"]').prop('disabled', true);\n    $('button[data-method=\"scale\"]').prop('disabled', true);\n  } // Download\n\n\n  if (typeof $download[0].download === 'undefined') {\n    $download.addClass('disabled');\n  } // Methods\n\n\n  $('.cropper-example-buttons').on('click', '[data-method]', function () {\n    var $this = $(this);\n    var data = $this.data();\n    var result;\n\n    if ($this.prop('disabled') || $this.hasClass('disabled')) {\n      return;\n    }\n\n    if ($image.data('cropper') && data.method) {\n      data = $.extend({}, data); // Clone a new one\n\n      if (data.method === 'rotate') {\n        $image.cropper('clear');\n      }\n\n      result = $image.cropper(data.method, data.option, data.secondOption);\n\n      if (data.method === 'rotate') {\n        $image.cropper('crop');\n      }\n\n      switch (data.method) {\n        case 'scaleX':\n        case 'scaleY':\n          $(this).data('option', -data.option);\n          break;\n\n        case 'getCroppedCanvas':\n          if (result) {\n            // Bootstrap's Modal\n            $('#cropper-example-getCroppedCanvasModal').modal().find('.modal-body').html(result);\n\n            if (!$download.hasClass('disabled')) {\n              $download.attr('href', result.toDataURL('image/jpeg'));\n            }\n          }\n\n          break;\n\n        case 'destroy':\n          if (uploadedImageURL) {\n            URL.revokeObjectURL(uploadedImageURL);\n            uploadedImageURL = '';\n            $image.attr('src', originalImageURL);\n          }\n\n          break;\n      }\n    }\n  }); // Import image\n\n  var $inputImage = $('#cropper-example-inputImage');\n\n  if (URL) {\n    $inputImage.change(function () {\n      var files = this.files;\n      var file;\n\n      if (!$image.data('cropper')) {\n        return;\n      }\n\n      if (files && files.length) {\n        file = files[0];\n\n        if (/^image\\/\\w+$/.test(file.type)) {\n          if (uploadedImageURL) {\n            URL.revokeObjectURL(uploadedImageURL);\n          }\n\n          uploadedImageURL = URL.createObjectURL(file);\n          $image.cropper('destroy').attr('src', uploadedImageURL).cropper(options);\n          $inputImage.val('');\n        } else {\n          window.alert('Please choose an image file.');\n        }\n      }\n    });\n  } else {\n    $inputImage.prop('disabled', true).parent().addClass('disabled');\n  }\n});\n\n//# sourceURL=webpack:///./wwwroot/js/ui_cropper.js?");

/***/ })

/******/ })));
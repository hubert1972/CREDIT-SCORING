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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/forms_pickers.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/forms_pickers.js":
/*!*************************************!*\
  !*** ./wwwroot/js/forms_pickers.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Bootstrap Datepicker\n$(function () {\n  var isRtl = $('html').attr('dir') === 'rtl';\n  $('#datepicker-base').datepicker({\n    orientation: isRtl ? 'auto right' : 'auto left'\n  });\n  $('#datepicker-features').datepicker({\n    calendarWeeks: true,\n    todayBtn: 'linked',\n    daysOfWeekDisabled: '1',\n    clearBtn: true,\n    todayHighlight: true,\n    multidate: true,\n    daysOfWeekHighlighted: '1,2',\n    orientation: isRtl ? 'auto left' : 'auto right',\n    beforeShowMonth: function beforeShowMonth(date) {\n      if (date.getMonth() === 8) {\n        return false;\n      }\n    },\n    beforeShowYear: function beforeShowYear(date) {\n      if (date.getFullYear() === 2014) {\n        return false;\n      }\n    }\n  });\n  $('#datepicker-range').datepicker({\n    orientation: isRtl ? 'auto right' : 'auto left'\n  });\n  $('#datepicker-inline').datepicker();\n}); // Flatpickr\n\n$(function () {\n  // Date\n  $('#flatpickr-date').flatpickr({\n    altInput: true\n  }); // Time\n\n  $('#flatpickr-time').flatpickr({\n    enableTime: true,\n    noCalendar: true,\n    altInput: true\n  }); // Datetime\n\n  $('#flatpickr-datetime').flatpickr({\n    enableTime: true,\n    altInput: true\n  }); // Full\n\n  $('#flatpickr-full').flatpickr({\n    weekNumbers: true,\n    enableTime: true,\n    mode: 'multiple',\n    minDate: 'today',\n    altInput: true\n  }); // Range\n\n  $('#flatpickr-range').flatpickr({\n    mode: 'range',\n    altInput: true\n  }); // Inline\n\n  $('#flatpickr-inline').flatpickr({\n    inline: true,\n    altInput: true,\n    allowInput: false\n  });\n}); // Bootstrap Daterangepicker\n\n$(function () {\n  var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';\n  $('#daterange-1').daterangepicker({\n    opens: isRtl ? 'left' : 'right',\n    showWeekNumbers: true\n  });\n  $('#daterange-2').daterangepicker({\n    timePicker: true,\n    timePickerIncrement: 30,\n    locale: {\n      format: 'MM/DD/YYYY h:mm A'\n    },\n    opens: isRtl ? 'left' : 'right'\n  });\n  $('#daterange-3').daterangepicker({\n    singleDatePicker: true,\n    showDropdowns: true,\n    opens: isRtl ? 'left' : 'right'\n  }, function (start, end, label) {\n    var years = moment().diff(start, 'years');\n    alert(\"You are \" + years + \" years old.\");\n  }); // Button\n\n  var start = moment().subtract(29, 'days');\n  var end = moment();\n\n  function cb(start, end) {\n    $('#daterange-4').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));\n  }\n\n  $('#daterange-4').daterangepicker({\n    startDate: start,\n    endDate: end,\n    ranges: {\n      'Today': [moment(), moment()],\n      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],\n      'Last 7 Days': [moment().subtract(6, 'days'), moment()],\n      'Last 30 Days': [moment().subtract(29, 'days'), moment()],\n      'This Month': [moment().startOf('month'), moment().endOf('month')],\n      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]\n    },\n    opens: isRtl ? 'left' : 'right'\n  }, cb);\n  cb(start, end);\n}); // Bootstrap Material DateTimePicker\n\n$(function () {\n  $('#b-m-dtp-date').bootstrapMaterialDatePicker({\n    weekStart: 0,\n    time: false,\n    clearButton: true\n  });\n  $('#b-m-dtp-time').bootstrapMaterialDatePicker({\n    date: false,\n    shortTime: false,\n    format: 'HH:mm'\n  });\n  $('#b-m-dtp-datetime').bootstrapMaterialDatePicker({\n    weekStart: 1,\n    format: 'dddd DD MMMM YYYY - HH:mm',\n    shortTime: true,\n    nowButton: true,\n    minDate: new Date()\n  });\n}); // jQuery Timepicker\n\n$(function () {\n  var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';\n  $('#timepicker-example-1').timepicker({\n    scrollDefault: 'now',\n    orientation: isRtl ? 'r' : 'l'\n  });\n  $('#timepicker-example-2').timepicker({\n    minTime: '2:00pm',\n    maxTime: '11:30pm',\n    showDuration: true,\n    orientation: isRtl ? 'r' : 'l'\n  });\n  $('#timepicker-example-3').timepicker({\n    disableTimeRanges: [['1am', '2am'], ['3am', '4:01am']],\n    orientation: isRtl ? 'r' : 'l'\n  });\n  $('#timepicker-example-4').timepicker({\n    'timeFormat': 'H:i:s',\n    orientation: isRtl ? 'r' : 'l'\n  });\n  $('#timepicker-example-5').timepicker({\n    'timeFormat': 'h:i A',\n    orientation: isRtl ? 'r' : 'l'\n  });\n  $('#timepicker-example-6').timepicker({\n    'step': 15,\n    orientation: isRtl ? 'r' : 'l'\n  });\n}); // Minicolors\n\n$(function () {\n  var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';\n  $('#minicolors-hue').minicolors({\n    control: 'hue',\n    position: 'bottom ' + (isRtl ? 'right' : 'left')\n  });\n  $('#minicolors-saturation').minicolors({\n    control: 'saturation',\n    position: 'bottom ' + (isRtl ? 'left' : 'right')\n  });\n  $('#minicolors-wheel').minicolors({\n    control: 'wheel',\n    position: 'top ' + (isRtl ? 'left' : 'right')\n  });\n  $('#minicolors-opacity').minicolors({\n    control: 'wheel',\n    opacity: true,\n    position: 'bottom ' + (isRtl ? 'right' : 'left')\n  });\n  $('#minicolors-brightness').minicolors({\n    control: 'brightness',\n    position: 'top ' + (isRtl ? 'right' : 'left')\n  });\n  $('#minicolors-hidden').minicolors({\n    position: 'top ' + (isRtl ? 'right' : 'left')\n  });\n});\n\n//# sourceURL=webpack:///./wwwroot/js/forms_pickers.js?");

/***/ })

/******/ })));
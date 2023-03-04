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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/pages_tickets_list.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/pages_tickets_list.js":
/*!******************************************!*\
  !*** ./wwwroot/js/pages_tickets_list.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  $('#tickets-list').dataTable({\n    ajax: '/json/pages_tickets_list.json',\n    columnDefs: [{\n      targets: [6],\n      orderable: false,\n      searchable: false\n    }],\n    createdRow: function createdRow(row, data, index) {\n      // Add extra padding and set minimum width\n      $('td', row).addClass('py-3').eq(1).css('min-width', '300px'); // *********************************************************************\n      // Setup priorities\n\n      var priorityColors = {\n        1: 'btn-danger',\n        2: 'btn-success',\n        3: 'btn-warning'\n      }; // Priority dropdown\n\n      var priorityDropdown = $('<div class=\"ticket-priority btn-group\">' + '<button type=\"button\" class=\"btn btn-xs md-btn-flat dropdown-toggle\" data-toggle=\"dropdown\"></button>' + '<div class=\"dropdown-menu\">' + '<a class=\"dropdown-item\" href=\"javascript:void(0)\" data-priority=\"1\">High</a>' + '<a class=\"dropdown-item\" href=\"javascript:void(0)\" data-priority=\"2\">Medium</a>' + '<a class=\"dropdown-item\" href=\"javascript:void(0)\" data-priority=\"3\">Low</a>' + '</div>' + '</div>'); // Set up active priority\n\n      priorityDropdown.find('.dropdown-toggle').addClass(priorityColors[data[4]]).text(priorityDropdown.find('[data-priority=\"' + data[4] + '\"]').addClass('active').text()); // Append dropdown\n\n      $('td', row).eq(4).html('').append(priorityDropdown); // *********************************************************************\n      // Setup statuses\n      // Status dropdown\n\n      var statusDropdown = $('<div class=\"ticket-status btn-group\">' + '<button type=\"button\" class=\"btn btn-outline-secondary btn-xs md-btn-flat dropdown-toggle\" data-toggle=\"dropdown\"></button>' + '<div class=\"dropdown-menu\">' + '<a class=\"dropdown-item\" href=\"javascript:void(0)\" data-status=\"1\">Open</a>' + '<a class=\"dropdown-item\" href=\"javascript:void(0)\" data-status=\"2\">Reopened</a>' + '<a class=\"dropdown-item\" href=\"javascript:void(0)\" data-status=\"3\">In progress</a>' + '<a class=\"dropdown-item\" href=\"javascript:void(0)\" data-status=\"4\">Closed</a>' + '</div>' + '</div>'); // Set up active priority\n\n      statusDropdown.find('.dropdown-toggle').text(statusDropdown.find('[data-status=\"' + data[5] + '\"]').addClass('active').text()); // Append dropdown\n\n      $('td', row).eq(5).html('').append(statusDropdown); // *********************************************************************\n      // Setup actions\n\n      $('td', row).eq(6).html('').append('<a href=\"javascript:void(0)\" class=\"btn btn-default btn-xs icon-btn md-btn-flat product-tooltip\" title=\"Edit\"><i class=\"ion ion-md-create\"></i></a>&nbsp;' + '<a href=\"javascript:void(0)\" class=\"btn btn-default btn-xs icon-btn md-btn-flat product-tooltip\" title=\"Remove\"><i class=\"ion ion-md-close\"></i></a>');\n    }\n  }); // Datepicker\n\n  $('#tickets-list-created').daterangepicker({\n    ranges: {\n      'Today': [moment(), moment()],\n      'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],\n      'Last 7 Days': [moment().subtract(6, 'days'), moment()],\n      'Last 30 Days': [moment().subtract(29, 'days'), moment()],\n      'This Month': [moment().startOf('month'), moment().endOf('month')],\n      'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]\n    },\n    opens: $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl' ? 'right' : 'left'\n  }); // Tooltips\n\n  $('body').tooltip({\n    selector: '.product-tooltip'\n  });\n});\n\n//# sourceURL=webpack:///./wwwroot/js/pages_tickets_list.js?");

/***/ })

/******/ })));
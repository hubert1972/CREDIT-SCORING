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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/pages_users_list.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/pages_users_list.js":
/*!****************************************!*\
  !*** ./wwwroot/js/pages_users_list.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';\n  var roles = {\n    1: 'User',\n    2: 'Author',\n    3: 'Staff',\n    4: 'Admin'\n  };\n  var statuses = {\n    1: ['Active', 'success'],\n    2: ['Banned', 'danger'],\n    3: ['Deleted', 'default']\n  };\n  $('#user-list').dataTable({\n    ajax: '/json/pages_users_list.json',\n    columnDefs: [{\n      targets: [8],\n      orderable: false,\n      searchable: false\n    }],\n    createdRow: function createdRow(row, data, index) {\n      // *********************************************************************\n      // Account link\n      $('td', row).eq(1).html('').append('<a href=\"javascript:void(0)\">' + data[1] + '</a>'); // *********************************************************************\n      // Verified\n\n      $('td', row).eq(5).html('').append('<span class=\"ion ion-md-' + (data[5] ? 'checkmark text-primary' : 'close text-light') + '\">'); // *********************************************************************\n      // Role\n\n      $('td', row).eq(6).html('').append(roles[data[6]]); // *********************************************************************\n      // Status\n\n      $('td', row).eq(7).html('').append('<span class=\"badge badge-outline-' + statuses[data[7]][1] + '\">' + statuses[data[7]][0] + '</span>'); // *********************************************************************\n      // Actions\n\n      $('td', row).eq(8).addClass('text-center text-nowrap').html('').append('<button type=\"button\" class=\"btn btn-default btn-xs icon-btn md-btn-flat user-tooltip\" title=\"Edit\"><i class=\"ion ion-md-create\"></i></button>&nbsp;&nbsp;' + '<div class=\"btn-group\">' + '<button type=\"button\" class=\"btn btn-default btn-xs icon-btn md-btn-flat dropdown-toggle hide-arrow user-tooltip\" title=\"Actions\" data-toggle=\"dropdown\"><i class=\"ion ion-ios-settings\"></i></button>' + '<div class=\"dropdown-menu' + (isRtl ? '' : ' dropdown-menu-right') + '\">' + '<a class=\"dropdown-item\" href=\"javascript:void(0)\">View profile</a>' + '<a class=\"dropdown-item\" href=\"javascript:void(0)\">Ban user</a>' + '<a class=\"dropdown-item\" href=\"javascript:void(0)\">Remove</a>' + '</div>' + '</div>');\n    }\n  }); // Tooltips\n\n  $('body').tooltip({\n    selector: '.user-tooltip'\n  }); // Filters\n\n  $('#user-list-latest-activity').daterangepicker({\n    opens: isRtl ? 'right' : 'left',\n    autoUpdateInput: false,\n    locale: {\n      cancelLabel: 'Clear'\n    }\n  });\n  $('#user-list-latest-activity').on('apply.daterangepicker', function (ev, picker) {\n    $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));\n  });\n  $('#user-list-latest-activity').on('cancel.daterangepicker', function (ev, picker) {\n    $(this).val('');\n  });\n});\n\n//# sourceURL=webpack:///./wwwroot/js/pages_users_list.js?");

/***/ })

/******/ })));
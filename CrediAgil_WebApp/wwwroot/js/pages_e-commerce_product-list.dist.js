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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/pages_e-commerce_product-list.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/pages_e-commerce_product-list.js":
/*!*****************************************************!*\
  !*** ./wwwroot/js/pages_e-commerce_product-list.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  var isRtl = $('body').attr('dir') === 'rtl' || $('html').attr('dir') === 'rtl';\n  var statuses = {\n    1: ['Published', 'success'],\n    2: ['Out of stock', 'danger'],\n    3: ['Pending', 'info']\n  };\n  $('#product-list').dataTable({\n    ajax: '/json/pages_e-commerce_product-list.json',\n    \"columns\": [{\n      \"data\": \"1\"\n    }, {\n      \"data\": \"2\"\n    }, {\n      \"data\": \"3\"\n    }, {\n      \"data\": \"4\"\n    }, {\n      \"data\": \"5\"\n    }, {\n      \"data\": \"6\"\n    }, {\n      \"data\": \"7\"\n    }, {\n      \"data\": \"8\"\n    }],\n    order: [[1, 'desc']],\n    columnDefs: [{\n      targets: [7],\n      orderable: false,\n      searchable: false\n    }],\n    createdRow: function createdRow(row, data, index) {\n      // Add extra padding and set minimum width\n      $('td', row).addClass('py-2 align-middle').eq(0).css('min-width', '300px'); // *********************************************************************\n      // Product name\n\n      $('td', row).eq(0).html('').append('<div class=\"media align-items-center\">' + '<img class=\"ui-w-40 d-block\" src=\"/img/uikit/' + data[0] + '\" alt=\"\">' + '<a href=\"javascript:void(0)\" class=\"media-body d-block text-body ml-3\">' + data[1] + '</a>' + '</div>'); // *********************************************************************\n      // Price\n\n      $('td', row).eq(3).html('').append(numeral(data[4]).format('$0,0.00')); // *********************************************************************\n      // Views\n\n      $('td', row).eq(5).html('').append(numeral(data[6]).format('0,0')); // *********************************************************************\n      // Status\n\n      $('td', row).eq(6).html('').append('<span class=\"badge badge-outline-' + statuses[data[7]][1] + '\">' + statuses[data[7]][0] + '</span>'); // *********************************************************************\n      // Actions\n\n      $('td', row).eq(7).addClass('text-nowrap').html('').append('<a href=\"javascript:void(0)\" class=\"btn btn-default btn-xs icon-btn md-btn-flat product-tooltip\" title=\"Show\"><i class=\"ion ion-md-eye\"></i></a>&nbsp;' + '<a href=\"javascript:void(0)\" class=\"btn btn-default btn-xs icon-btn md-btn-flat product-tooltip\" title=\"Edit\"><i class=\"ion ion-md-create\"></i></a>');\n    }\n  }); // Filters\n\n  noUiSlider.create(document.getElementById('product-sales-slider'), {\n    start: [10, 834],\n    step: 10,\n    connect: true,\n    tooltips: true,\n    direction: isRtl ? 'rtl' : 'ltr',\n    range: {\n      'min': [10],\n      'max': [834]\n    },\n    format: {\n      to: function to(value) {\n        return Math.round(value);\n      },\n      from: function from(value) {\n        return value;\n      }\n    }\n  }).on('update', function (values) {\n    document.getElementById('product-sales-slider-value').innerHTML = values.join(' - ');\n  });\n  noUiSlider.create(document.getElementById('product-price-slider'), {\n    start: [10, 2000],\n    step: 50,\n    connect: true,\n    tooltips: true,\n    direction: isRtl ? 'rtl' : 'ltr',\n    range: {\n      'min': [10],\n      'max': [2000]\n    },\n    format: {\n      to: function to(value) {\n        return numeral(value).format('$0,0');\n      },\n      from: function from(value) {\n        return value.replace(/[\\$\\,]/g, '');\n      }\n    }\n  }).on('update', function (values) {\n    document.getElementById('product-price-slider-value').innerHTML = values.join(' - ');\n  }); // Tooltips\n\n  $('body').tooltip({\n    selector: '.product-tooltip'\n  });\n});\n\n//# sourceURL=webpack:///./wwwroot/js/pages_e-commerce_product-list.js?");

/***/ })

/******/ })));
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/tables_bootstrap-table.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/tables_bootstrap-table.js":
/*!**********************************************!*\
  !*** ./wwwroot/js/tables_bootstrap-table.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  var $table = $('#bootstrap-table-example');\n  var $remove = $('#bootstrap-table-remove');\n  var selections = [];\n\n  function getIdSelections() {\n    return $.map($table.bootstrapTable('getSelections'), function (row) {\n      return row.id;\n    });\n  }\n\n  $table.bootstrapTable({\n    height: 500,\n    iconsPrefix: 'opacity-75 ion',\n    icons: {\n      paginationSwitchDown: 'ion-ios-arrow-down icon-chevron-down',\n      paginationSwitchUp: 'ion-ios-arrow-up icon-chevron-up',\n      refresh: 'ion-md-refresh icon-refresh',\n      columns: 'ion-md-apps icon-th',\n      detailOpen: 'ion-md-add icon-plus',\n      detailClose: 'ion-md-remove icon-minus',\n      export: 'ion-md-cloud-download icon-share'\n    },\n    detailFormatter: function detailFormatter(index, row) {\n      var html = [];\n      $.each(row, function (key, value) {\n        html.push('<p><b>' + key + ':</b> ' + (typeof value === 'undefined' ? false : value) + '</p>');\n      });\n      return html.join('');\n    },\n    columns: [[{\n      field: 'state',\n      checkbox: true,\n      rowspan: 2,\n      align: 'center',\n      valign: 'middle'\n    }, {\n      title: 'Item ID',\n      field: 'id',\n      rowspan: 2,\n      align: 'center',\n      valign: 'middle',\n      sortable: true,\n      footerFormatter: function totalTextFormatter(data) {\n        return 'Total';\n      }\n    }, {\n      title: 'Item Detail',\n      colspan: 3,\n      align: 'center'\n    }], [{\n      field: 'name',\n      title: 'Item Name',\n      sortable: true,\n      editable: true,\n      footerFormatter: function totalNameFormatter(data) {\n        return data.length;\n      },\n      align: 'center'\n    }, {\n      field: 'price',\n      title: 'Item Price',\n      sortable: true,\n      align: 'center',\n      editable: {\n        type: 'text',\n        title: 'Item Price',\n        validate: function validate(value) {\n          value = $.trim(value);\n\n          if (!value) {\n            return 'This field is required';\n          }\n\n          if (!/^\\$/.test(value)) {\n            return 'This field needs to start width $.';\n          }\n\n          var data = $table.bootstrapTable('getData');\n          var index = $(this).parents('tr').data('index'); // console.log(data[index]);\n\n          return '';\n        }\n      },\n      footerFormatter: function totalPriceFormatter(data) {\n        var total = 0;\n        $.each(data, function (i, row) {\n          total += +row.price.substring(1);\n        });\n        return '$' + total;\n      }\n    }, {\n      field: 'operate',\n      title: 'Item Operate',\n      align: 'center',\n      events: {\n        'click .like': function clickLike(e, value, row, index) {\n          alert('You click like action, row: ' + JSON.stringify(row));\n        },\n        'click .remove': function clickRemove(e, value, row, index) {\n          $table.bootstrapTable('remove', {\n            field: 'id',\n            values: [row.id]\n          });\n        }\n      },\n      formatter: function operateFormatter(value, row, index) {\n        return ['<a class=\"btn btn-xs icon-btn btn-outline-default borderless like\" href=\"javascript:void(0)\" title=\"Like\">', '<i class=\"ion ion-md-heart\"></i>', '</a>  ', '<a class=\"btn btn-xs icon-btn btn-outline-danger borderless remove\" href=\"javascript:void(0)\" title=\"Remove\">', '<i class=\"ion ion-md-close\"></i>', '</a>'].join('');\n      }\n    }]]\n  }); // sometimes footer render error.\n\n  setTimeout(function () {\n    $table.bootstrapTable('resetView');\n  }, 200);\n  $table.on('check.bs.table uncheck.bs.table ' + 'check-all.bs.table uncheck-all.bs.table', function () {\n    $remove.prop('disabled', !$table.bootstrapTable('getSelections').length); // save your data, here just save the current page\n\n    selections = getIdSelections(); // push or splice the selections if you want to save all data selections\n  });\n  $table.on('all.bs.table', function (e, name, args) {// console.log(name, args);\n  });\n  $remove.click(function () {\n    var ids = getIdSelections();\n    $table.bootstrapTable('remove', {\n      field: 'id',\n      values: ids\n    });\n    $remove.prop('disabled', true);\n  });\n});\n\n//# sourceURL=webpack:///./wwwroot/js/tables_bootstrap-table.js?");

/***/ })

/******/ })));
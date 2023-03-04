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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/dashboards_dashboard-3.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/dashboards_dashboard-3.js":
/*!**********************************************!*\
  !*** ./wwwroot/js/dashboards_dashboard-3.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  var isDark = themeSettings.isDarkStyle();\n  var chart1 = new Chart(document.getElementById('statistics-chart-1').getContext(\"2d\"), {\n    type: 'line',\n    data: {\n      labels: ['2016-09', '2016-10', '2016-11', '2016-12', '2017-01', '2017-02', '2017-03', '2017-04', '2017-05', '2017-06', '2017-07', '2017-08', '2017-09', '2017-10', '2017-11', '2017-12', '2018-01', '2018-02'],\n      datasets: [{\n        label: 'Sales',\n        data: [137, 187, 85, 72, 85, 120, 183, 89, 143, 105, 116, 77, 76, 180, 158, 172, 143, 164],\n        borderWidth: 2,\n        backgroundColor: 'rgba(87, 181, 255, .85)',\n        borderColor: 'rgba(87, 181, 255, 1)',\n        pointBackgroundColor: 'rgba(0,0,0,0)',\n        pointBorderColor: 'rgba(0,0,0,0)',\n        pointRadius: 10\n      }]\n    },\n    options: {\n      scales: {\n        xAxes: [{\n          gridLines: {\n            display: false\n          },\n          ticks: {\n            fontColor: isDark ? '#fff' : '#aaa',\n            autoSkipPadding: 50\n          }\n        }],\n        yAxes: [{\n          gridLines: {\n            display: false\n          },\n          ticks: {\n            fontColor: isDark ? '#fff' : '#aaa',\n            maxTicksLimit: 5\n          }\n        }]\n      },\n      legend: {\n        display: false\n      },\n      responsive: false,\n      maintainAspectRatio: false\n    }\n  });\n  var chart2 = new Chart(document.getElementById('statistics-chart-2').getContext(\"2d\"), {\n    type: 'line',\n    data: {\n      datasets: [{\n        data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61, 38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 60],\n        borderWidth: 1,\n        backgroundColor: 'rgba(103, 58, 183, .2)',\n        borderColor: 'rgba(103, 58, 183, 1)',\n        pointBorderColor: 'rgba(0,0,0,0)',\n        pointRadius: 1,\n        lineTension: 0\n      }],\n      labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']\n    },\n    options: {\n      scales: {\n        xAxes: [{\n          display: false\n        }],\n        yAxes: [{\n          display: false\n        }]\n      },\n      legend: {\n        display: false\n      },\n      tooltips: {\n        enabled: false\n      },\n      responsive: false,\n      maintainAspectRatio: false\n    }\n  });\n  var chart3 = new Chart(document.getElementById('statistics-chart-3').getContext(\"2d\"), {\n    type: 'line',\n    data: {\n      datasets: [{\n        data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61, 38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 60],\n        borderWidth: 1,\n        backgroundColor: 'rgba(206, 221, 54, .2)',\n        borderColor: 'rgba(206, 221, 54, 1)',\n        pointBorderColor: 'rgba(0,0,0,0)',\n        pointRadius: 1,\n        lineTension: 0\n      }],\n      labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']\n    },\n    options: {\n      scales: {\n        xAxes: [{\n          display: false\n        }],\n        yAxes: [{\n          display: false\n        }]\n      },\n      legend: {\n        display: false\n      },\n      tooltips: {\n        enabled: false\n      },\n      responsive: false,\n      maintainAspectRatio: false\n    }\n  });\n  var chart4 = new Chart(document.getElementById('statistics-chart-4').getContext(\"2d\"), {\n    type: 'line',\n    data: {\n      datasets: [{\n        data: [24, 92, 77, 90, 91, 78, 28, 49, 23, 81, 15, 97, 94, 16, 99, 61, 38, 34, 48, 3, 5, 21, 27, 4, 33, 40, 46, 47, 48, 60],\n        borderWidth: 1,\n        backgroundColor: 'rgba(136, 151, 170, .2)',\n        borderColor: 'rgba(136, 151, 170, 1)',\n        pointBorderColor: 'rgba(0,0,0,0)',\n        pointRadius: 1,\n        lineTension: 0\n      }],\n      labels: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '']\n    },\n    options: {\n      scales: {\n        xAxes: [{\n          display: false\n        }],\n        yAxes: [{\n          display: false\n        }]\n      },\n      legend: {\n        display: false\n      },\n      tooltips: {\n        enabled: false\n      },\n      responsive: false,\n      maintainAspectRatio: false\n    }\n  }); // Resizing charts\n\n  function resizeCharts() {\n    chart1.resize();\n    chart2.resize();\n    chart3.resize();\n    chart4.resize();\n  } // Initial resize\n\n\n  resizeCharts(); // For performance reasons resize charts on delayed resize event\n\n  window.layoutHelpers.on('resize.dashboard-3', resizeCharts);\n});\n\n//# sourceURL=webpack:///./wwwroot/js/dashboards_dashboard-3.js?");

/***/ })

/******/ })));
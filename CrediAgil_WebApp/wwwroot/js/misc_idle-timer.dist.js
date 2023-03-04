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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/misc_idle-timer.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/misc_idle-timer.js":
/*!***************************************!*\
  !*** ./wwwroot/js/misc_idle-timer.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Idle on document\n//\n$(function () {\n  var docTimeout = 5000; // Handle raised idle/active events\n\n  $(document).on(\"idle.idleTimer\", function (event, elem, obj) {\n    $(\"#idletimer-doc-Status\").val(function (i, v) {\n      return v + \"Idle @ \" + moment().format() + \" \\n\";\n    }).removeClass(\"alert-success\").addClass(\"alert-warning\");\n  });\n  $(document).on(\"active.idleTimer\", function (event, elem, obj, e) {\n    $('#idletimer-doc-Status').val(function (i, v) {\n      return v + \"Active [\" + e.type + \"] [\" + e.target.nodeName + \"] @ \" + moment().format() + \" \\n\";\n    }).addClass(\"alert-success\").removeClass(\"alert-warning\");\n  }); // Handle button events\n\n  $(\"#idletimer-doc-Pause\").click(function () {\n    $(document).idleTimer(\"pause\");\n    $('#idletimer-doc-Status').val(function (i, v) {\n      return v + \"Paused @ \" + moment().format() + \" \\n\";\n    });\n    $(this).blur();\n    return false;\n  });\n  $(\"#idletimer-doc-Resume\").click(function () {\n    $(document).idleTimer(\"resume\");\n    $('#idletimer-doc-Status').val(function (i, v) {\n      return v + \"Resumed @ \" + moment().format() + \" \\n\";\n    });\n    $(this).blur();\n    return false;\n  });\n  $(\"#idletimer-doc-Elapsed\").click(function () {\n    $('#idletimer-doc-Status').val(function (i, v) {\n      return v + \"Elapsed (since becoming active): \" + $(document).idleTimer(\"getElapsedTime\") + \" \\n\";\n    });\n    $(this).blur();\n    return false;\n  });\n  $(\"#idletimer-doc-Destroy\").click(function () {\n    $(document).idleTimer(\"destroy\");\n    $('#idletimer-doc-Status').val(function (i, v) {\n      return v + \"Destroyed: @ \" + moment().format() + \" \\n\";\n    }).removeClass(\"alert-success\").removeClass(\"alert-warning\");\n    $(this).blur();\n    return false;\n  });\n  $(\"#idletimer-doc-Init\").click(function () {\n    // for demo purposes show init with just object\n    $(document).idleTimer({\n      timeout: docTimeout\n    });\n    $('#idletimer-doc-Status').val(function (i, v) {\n      return v + \"Init: @ \" + moment().format() + \" \\n\";\n    }); //Apply classes for default state\n\n    if ($(document).idleTimer(\"isIdle\")) {\n      $('#idletimer-doc-Status').removeClass(\"alert-success\").addClass(\"alert-warning\");\n    } else {\n      $('#idletimer-doc-Status').addClass(\"alert-success\").removeClass(\"alert-warning\");\n    }\n\n    $(this).blur();\n    return false;\n  }); //Clear old statuses\n\n  $('#idletimer-doc-Status').val(''); //Start timeout, passing no options\n  //Same as $.idleTimer(docTimeout, docOptions);\n\n  $(document).idleTimer(docTimeout); //For demo purposes, style based on initial state\n\n  if ($(document).idleTimer(\"isIdle\")) {\n    $(\"#idletimer-doc-Status\").val(function (i, v) {\n      return v + \"Initial Idle State @ \" + moment().format() + \" \\n\";\n    }).removeClass(\"alert-success\").addClass(\"alert-warning\");\n  } else {\n    $('#idletimer-doc-Status').val(function (i, v) {\n      return v + \"Initial Active State @ \" + moment().format() + \" \\n\";\n    }).addClass(\"alert-success\").removeClass(\"alert-warning\");\n  }\n}); // Idle on element\n//\n\n$(function () {\n  var elTimeout = 3000; // Handle raised idle/active events\n\n  $('#idletimer-el-Status').on(\"idle.idleTimer\", function (event, elem, obj) {\n    //If you dont stop propagation it will bubble up to document event handler\n    event.stopPropagation();\n    $('#idletimer-el-Status').val(function (i, v) {\n      return v + \"Idle @ \" + moment().format() + \" \\n\";\n    }).removeClass(\"alert-success\").addClass(\"alert-warning\");\n  });\n  $('#idletimer-el-Status').on(\"active.idleTimer\", function (event) {\n    //If you dont stop propagation it will bubble up to document event handler\n    event.stopPropagation();\n    $('#idletimer-el-Status').val(function (i, v) {\n      return v + \"Active @ \" + moment().format() + \" \\n\";\n    }).addClass(\"alert-success\").removeClass(\"alert-warning\");\n  }); // Handle button events\n\n  $(\"#idletimer-el-Reset\").click(function () {\n    $('#idletimer-el-Status').idleTimer(\"reset\").val(function (i, v) {\n      return v + \"Reset @ \" + moment().format() + \" \\n\";\n    }); //Apply classes for default state\n\n    if ($(\"#idletimer-el-Status\").idleTimer(\"isIdle\")) {\n      $('#idletimer-el-Status').removeClass(\"alert-success\").addClass(\"alert-warning\");\n    } else {\n      $('#idletimer-el-Status').addClass(\"alert-success\").removeClass(\"alert-warning\");\n    }\n\n    $(this).blur();\n    return false;\n  });\n  $(\"#idletimer-el-Remaining\").click(function () {\n    $('#idletimer-el-Status').val(function (i, v) {\n      return v + \"Remaining: \" + $(\"#idletimer-el-Status\").idleTimer(\"getRemainingTime\") + \" \\n\";\n    });\n    $(this).blur();\n    return false;\n  });\n  $(\"#idletimer-el-LastActive\").click(function () {\n    $('#idletimer-el-Status').val(function (i, v) {\n      return v + \"LastActive: \" + $(\"#idletimer-el-Status\").idleTimer(\"getLastActiveTime\") + \" \\n\";\n    });\n    $(this).blur();\n    return false;\n  });\n  $(\"#idletimer-el-State\").click(function () {\n    $('#idletimer-el-Status').val(function (i, v) {\n      return v + \"State: \" + ($(\"#idletimer-el-Status\").idleTimer(\"isIdle\") ? \"idle\" : \"active\") + \" \\n\";\n    });\n    $(this).blur();\n    return false;\n  }); //Clear value if there was one cached & start time\n\n  $('#idletimer-el-Status').val('').idleTimer(elTimeout); //For demo purposes, show initial state\n\n  if ($(\"#idletimer-el-Status\").idleTimer(\"isIdle\")) {\n    $(\"#idletimer-el-Status\").val(function (i, v) {\n      return v + \"Initial Idle @ \" + moment().format() + \" \\n\";\n    }).removeClass(\"alert-success\").addClass(\"alert-warning\");\n  } else {\n    $('#idletimer-el-Status').val(function (i, v) {\n      return v + \"Initial Active @ \" + moment().format() + \" \\n\";\n    }).addClass(\"alert-success\").removeClass(\"alert-warning\");\n  }\n});\n\n//# sourceURL=webpack:///./wwwroot/js/misc_idle-timer.js?");

/***/ })

/******/ })));
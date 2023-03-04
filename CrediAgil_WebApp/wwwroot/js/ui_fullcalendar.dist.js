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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/ui_fullcalendar.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/ui_fullcalendar.js":
/*!***************************************!*\
  !*** ./wwwroot/js/ui_fullcalendar.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(function () {\n  var today = new Date();\n  var y = today.getFullYear();\n  var m = today.getMonth();\n  var d = today.getDate();\n  var eventList = [{\n    title: 'All Day Event',\n    start: new Date(y, m, d - 12)\n  }, {\n    title: 'Long Event',\n    start: new Date(y, m, d - 8),\n    end: new Date(y, m, d - 5),\n    className: 'fc-event-warning'\n  }, {\n    id: 999,\n    title: 'Repeating Event',\n    start: new Date(y, m, d - 6, 16, 0)\n  }, {\n    id: 999,\n    title: 'Repeating Event',\n    start: new Date(y, m, d + 1, 16, 0),\n    className: 'fc-event-success'\n  }, {\n    title: 'Conference',\n    start: new Date(y, m, d - 4),\n    end: new Date(y, m, d - 2)\n  }, {\n    title: 'Meeting',\n    start: new Date(y, m, d - 3, 10, 30),\n    end: new Date(y, m, d - 3, 12, 30),\n    className: 'fc-event-danger'\n  }, {\n    title: 'Lunch',\n    start: new Date(y, m, d - 3, 12, 0),\n    className: 'fc-event-info'\n  }, {\n    title: 'Meeting',\n    start: new Date(y, m, d - 3, 14, 30),\n    className: 'fc-event-dark'\n  }, {\n    title: 'Happy Hour',\n    start: new Date(y, m, d - 3, 17, 30)\n  }, {\n    title: 'Dinner',\n    start: new Date(y, m, d - 3, 20, 0)\n  }, {\n    title: 'Birthday Party',\n    start: new Date(y, m, d - 2, 7, 0)\n  }, {\n    title: 'Background event',\n    start: new Date(y, m, d + 5),\n    end: new Date(y, m, d + 7),\n    rendering: 'background'\n  }, {\n    title: 'Click for Google',\n    url: 'http://google.com/',\n    start: new Date(y, m, d + 13)\n  }]; // Default view\n  // color classes: [ fc-event-success | fc-event-info | fc-event-warning | fc-event-danger | fc-event-dark ]\n\n  var defaultCalendar = new Calendar($('#fullcalendar-default-view')[0], {\n    plugins: [calendarPlugins.bootstrap, calendarPlugins.dayGrid, calendarPlugins.timeGrid, calendarPlugins.interaction],\n    dir: $('html').attr('dir') || 'ltr',\n    // Bootstrap styling\n    themeSystem: 'bootstrap',\n    bootstrapFontAwesome: {\n      close: ' ion ion-md-close',\n      prev: ' ion ion-ios-arrow-back scaleX--1-rtl',\n      next: ' ion ion-ios-arrow-forward scaleX--1-rtl',\n      prevYear: ' ion ion-ios-arrow-dropleft-circle scaleX--1-rtl',\n      nextYear: ' ion ion-ios-arrow-dropright-circle scaleX--1-rtl'\n    },\n    header: {\n      left: 'title',\n      center: 'dayGridMonth,timeGridWeek,timeGridDay',\n      right: 'prev,next today'\n    },\n    defaultDate: today,\n    navLinks: true,\n    // can click day/week names to navigate views\n    selectable: true,\n    weekNumbers: true,\n    // Show week numbers\n    nowIndicator: true,\n    // Show \"now\" indicator\n    firstDay: 1,\n    // Set \"Monday\" as start of a week\n    businessHours: {\n      dow: [1, 2, 3, 4, 5],\n      // Monday - Friday\n      start: '9:00',\n      end: '18:00'\n    },\n    editable: true,\n    eventLimit: true,\n    // allow \"more\" link when too many events\n    events: eventList,\n    views: {\n      dayGrid: {\n        eventLimit: 5\n      }\n    },\n    select: function select(selectionData) {\n      $('#fullcalendar-default-view-modal').on('shown.bs.modal', function () {\n        $(this).find('input[type=\"text\"]').trigger('focus');\n      }).on('hidden.bs.modal', function () {\n        $(this).off('shown.bs.modal hidden.bs.modal submit').find('input[type=\"text\"], select').val('');\n        defaultCalendar.unselect();\n      }).on('submit', function (e) {\n        e.preventDefault();\n        var title = $(this).find('input[type=\"text\"]').val();\n        var className = $(this).find('select').val() || null;\n\n        if (title) {\n          var eventData = {\n            title: title,\n            start: selectionData.startStr,\n            end: selectionData.endStr,\n            className: className\n          };\n          defaultCalendar.addEvent(eventData);\n        }\n\n        $(this).modal('hide');\n      }).modal('show');\n    },\n    eventClick: function eventClick(calEvent) {\n      alert('Event: ' + calEvent.event.title);\n    }\n  });\n  defaultCalendar.render(); // List view\n  // color classes: [ fc-event-success | fc-event-info | fc-event-warning | fc-event-danger | fc-event-dark ]\n\n  var listCalendar = new Calendar($('#fullcalendar-list-view')[0], {\n    plugins: [calendarPlugins.bootstrap, calendarPlugins.list],\n    dir: $('html').attr('dir') || 'ltr',\n    // Bootstrap styling\n    themeSystem: 'bootstrap',\n    bootstrapFontAwesome: {\n      close: ' ion ion-md-close',\n      prev: ' ion ion-ios-arrow-back scaleX--1-rtl',\n      next: ' ion ion-ios-arrow-forward scaleX--1-rtl',\n      prevYear: ' ion ion-ios-arrow-dropleft-circle scaleX--1-rtl',\n      nextYear: ' ion ion-ios-arrow-dropright-circle scaleX--1-rtl'\n    },\n    header: {\n      left: 'title',\n      center: 'listDay,listWeek,listMonth',\n      right: 'prev,next today'\n    },\n    // customize the button names,\n    views: {\n      listDay: {\n        buttonText: 'list day'\n      },\n      listWeek: {\n        buttonText: 'list week'\n      },\n      listMonth: {\n        buttonText: 'month'\n      }\n    },\n    defaultView: 'listMonth',\n    firstDay: 1,\n    // Set \"Monday\" as start of a week\n    navLinks: true,\n    // can click day/week names to navigate views\n    events: eventList\n  });\n  listCalendar.render(); // List view\n  // color classes: [ fc-event-success | fc-event-info | fc-event-warning | fc-event-danger | fc-event-dark ]\n\n  var timelineCalendar = new Calendar($('#fullcalendar-timeline-view')[0], {\n    plugins: [calendarPlugins.bootstrap, calendarPlugins.interaction, calendarPlugins.timeline],\n    dir: $('html').attr('dir') || 'ltr',\n    // Bootstrap styling\n    themeSystem: 'bootstrap',\n    bootstrapFontAwesome: {\n      close: ' ion ion-md-close',\n      prev: ' ion ion-ios-arrow-back scaleX--1-rtl',\n      next: ' ion ion-ios-arrow-forward scaleX--1-rtl',\n      prevYear: ' ion ion-ios-arrow-dropleft-circle scaleX--1-rtl',\n      nextYear: ' ion ion-ios-arrow-dropright-circle scaleX--1-rtl'\n    },\n    header: {\n      left: 'title',\n      center: 'timelineYear,timelineMonth,timelineWeek,timelineDay',\n      right: 'prev,next today'\n    },\n    defaultView: 'timelineMonth',\n    firstDay: 1,\n    // Set \"Monday\" as start of a week\n    navLinks: true,\n    // can click day/week names to navigate views\n    editable: true,\n    events: eventList\n  });\n  timelineCalendar.render();\n});\n\n//# sourceURL=webpack:///./wwwroot/js/ui_fullcalendar.js?");

/***/ })

/******/ })));
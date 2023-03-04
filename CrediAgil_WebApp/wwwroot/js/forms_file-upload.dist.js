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
/******/ 	return __webpack_require__(__webpack_require__.s = "./wwwroot/js/forms_file-upload.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./wwwroot/js/forms_file-upload.js":
/*!*****************************************!*\
  !*** ./wwwroot/js/forms_file-upload.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Dropzone\n$(function () {\n  $('#dropzone-demo').dropzone({\n    parallelUploads: 2,\n    maxFilesize: 50000,\n    filesizeBase: 1000,\n    addRemoveLinks: true\n  }); // Mock the file upload progress (only for the demo)\n  //\n\n  Dropzone.prototype.uploadFiles = function (files) {\n    var minSteps = 6;\n    var maxSteps = 60;\n    var timeBetweenSteps = 100;\n    var bytesPerStep = 100000;\n    var isUploadSuccess = Math.round(Math.random());\n    var self = this;\n\n    for (var i = 0; i < files.length; i++) {\n      var file = files[i];\n      var totalSteps = Math.round(Math.min(maxSteps, Math.max(minSteps, file.size / bytesPerStep)));\n\n      for (var step = 0; step < totalSteps; step++) {\n        var duration = timeBetweenSteps * (step + 1);\n        setTimeout(function (file, totalSteps, step) {\n          return function () {\n            file.upload = {\n              progress: 100 * (step + 1) / totalSteps,\n              total: file.size,\n              bytesSent: (step + 1) * file.size / totalSteps\n            };\n            self.emit('uploadprogress', file, file.upload.progress, file.upload.bytesSent);\n\n            if (file.upload.progress == 100) {\n              if (isUploadSuccess) {\n                file.status = Dropzone.SUCCESS;\n                self.emit('success', file, 'success', null);\n              } else {\n                file.status = Dropzone.ERROR;\n                self.emit('error', file, 'Some upload error', null);\n              }\n\n              self.emit('complete', file);\n              self.processQueue();\n            }\n          };\n        }(file, totalSteps, step), duration);\n      }\n    }\n  };\n}); // Flow.js\n\n$(function () {\n  var r = new Flow({\n    target: 'http://posttestserver.com/post.php',\n    permanentErrors: [500, 501],\n    maxChunkRetries: 1,\n    chunkRetryInterval: 5000,\n    simultaneousUploads: 1\n  }); // Flow.js isn't supported, fall back on a different method\n\n  if (!r.support) {\n    $('.flow-error').show();\n    return;\n  } // Show a place for dropping/selecting files\n\n\n  $('.flow-drop').show();\n  r.assignDrop($('.flow-drop')[0]);\n  r.assignBrowse($('.flow-browse')[0]);\n  r.assignBrowse($('.flow-browse-folder')[0], true);\n  r.assignBrowse($('.flow-browse-image')[0], false, false, {\n    accept: 'image/*'\n  }); // Handle file add event\n\n  r.on('fileAdded', function (file) {\n    // Show progress bar\n    $('.flow-progress, .flow-list').removeClass('d-none'); // Add the file to the list\n\n    $('.flow-list').append('<li class=\"flow-file list-group-item flow-file-' + file.uniqueIdentifier + '\">' + '<div class=\"flow-progress media\">' + '<div class=\"media-body\">' + '<div><strong class=\"flow-file-name\"></strong> - <em class=\"flow-file-progress\"><span class=\"text-muted\">Waiting...</span></em></div>' + '<div><small class=\"flow-file-size text-muted\"></small></div>' + '</div>' + '<div class=\"ml-3 align-self-center\">' + '<button type=\"button\" class=\"flow-file-download btn btn-sm icon-btn btn-outline-primary\"><i class=\"ion ion-md-download\"></i></button>' + '<button type=\"button\" class=\"flow-file-pause btn btn-sm icon-btn btn-outline-warning\"><i class=\"ion ion-md-pause\"></i></button> ' + '<button type=\"button\" class=\"flow-file-resume btn btn-sm icon-btn btn-outline-success\"><i class=\"ion ion-md-play\"></i></button> ' + '<button type=\"button\" class=\"flow-file-cancel btn btn-sm icon-btn btn-outline-danger\"><i class=\"ion ion-md-close\"></i></button>' + '</div>' + '</div>' + '</li>');\n    var $self = $('.flow-file-' + file.uniqueIdentifier);\n    $self.find('.flow-file-name').text(file.name);\n    $self.find('.flow-file-size').text(readablizeBytes(file.size));\n    $self.find('.flow-file-download').attr('href', '/download/' + file.uniqueIdentifier).hide();\n    $self.find('.flow-file-pause').on('click', function () {\n      file.pause();\n      $self.find('.flow-file-pause').hide();\n      $self.find('.flow-file-resume').show();\n    });\n    $self.find('.flow-file-resume').on('click', function () {\n      file.resume();\n      $self.find('.flow-file-pause').show();\n      $self.find('.flow-file-resume').hide();\n    }).hide();\n    $self.find('.flow-file-cancel').on('click', function () {\n      file.cancel();\n      $self.remove();\n    });\n  });\n  r.on('filesSubmitted', function (file) {\n    r.upload();\n  });\n  r.on('complete', function () {\n    // Hide pause/resume when the upload has completed\n    $('.flow-progress .progress-resume-link, .flow-progress .progress-pause-link').hide();\n  });\n  r.on('fileSuccess', function (file, message) {\n    var $self = $('.flow-file-' + file.uniqueIdentifier); // Reflect that the file upload has completed\n\n    $self.find('.flow-file-progress').text('(completed)');\n    $self.find('.flow-file-pause, .flow-file-resume').remove();\n    $self.find('.flow-file-download').attr('href', '/download/' + file.uniqueIdentifier).show();\n  });\n  r.on('fileError', function (file, message) {\n    // Reflect that the file upload has resulted in error\n    $('.flow-file-' + file.uniqueIdentifier + ' .flow-file-progress').addClass('text-danger').text('(file could not be uploaded: ' + message + ')');\n  });\n  r.on('fileProgress', function (file) {\n    // if (!file.averageSpeed || file.averageSpeed.indexOf('undefined') !== -1) { return; }\n    console.log(file.averageSpeed); // Handle progress for both the file and the overall upload\n\n    $('.flow-file-' + file.uniqueIdentifier + ' .flow-file-progress').html(Math.floor(file.progress() * 100) + '% ' + readablizeBytes(file.averageSpeed) + '/s ' + secondsToStr(file.timeRemaining()) + ' remaining');\n    $('.flow-progress .progress-bar').css({\n      width: Math.floor(r.progress() * 100) + '%'\n    });\n  });\n  r.on('uploadStart', function () {\n    // Show pause, hide resume\n    $('.flow-progress .progress-resume-link').hide();\n    $('.flow-progress .progress-pause-link').show();\n  });\n  r.on('catchAll', function () {\n    console.log.apply(console, arguments);\n  });\n  window.r = {\n    pause: function pause() {\n      r.pause(); // Show resume, hide pause\n\n      $('.flow-file-resume').show();\n      $('.flow-file-pause').hide();\n      $('.flow-progress .progress-resume-link').show();\n      $('.flow-progress .progress-pause-link').hide();\n    },\n    cancel: function cancel() {\n      r.cancel();\n      $('.flow-progress .progress-resume-link').hide();\n      $('.flow-progress .progress-pause-link').hide();\n      $('.flow-progress .progress-bar').css({\n        width: '0%'\n      });\n      $('.flow-file').remove();\n    },\n    upload: function upload() {\n      $('.flow-file-pause').show();\n      $('.flow-file-resume').hide();\n      r.resume();\n    },\n    flow: r\n  };\n\n  function readablizeBytes(bytes) {\n    if (!bytes) {\n      return '0 kB';\n    }\n\n    var s = ['bytes', 'kB', 'MB', 'GB', 'TB', 'PB'];\n    var e = Math.floor(Math.log(bytes) / Math.log(1024));\n    return (bytes / Math.pow(1024, e)).toFixed(2) + \" \" + s[e];\n  }\n\n  function secondsToStr(temp) {\n    function numberEnding(number) {\n      return number > 1 ? 's' : '';\n    }\n\n    var years = Math.floor(temp / 31536000);\n\n    if (years) {\n      return years + ' year' + numberEnding(years);\n    }\n\n    var days = Math.floor((temp %= 31536000) / 86400);\n\n    if (days) {\n      return days + ' day' + numberEnding(days);\n    }\n\n    var hours = Math.floor((temp %= 86400) / 3600);\n\n    if (hours) {\n      return hours + ' hour' + numberEnding(hours);\n    }\n\n    var minutes = Math.floor((temp %= 3600) / 60);\n\n    if (minutes) {\n      return minutes + ' minute' + numberEnding(minutes);\n    }\n\n    var seconds = temp % 60;\n    return seconds + ' second' + numberEnding(seconds);\n  }\n});\n\n//# sourceURL=webpack:///./wwwroot/js/forms_file-upload.js?");

/***/ })

/******/ })));
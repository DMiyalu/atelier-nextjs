module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/contacts/[id]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/contacts.js":
/*!*************************!*\
  !*** ./lib/contacts.js ***!
  \*************************/
/*! exports provided: contacts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contacts", function() { return contacts; });
const contacts = [{
  id: 1,
  fname: 'Christian',
  lname: 'Lisangola'
}, {
  id: 2,
  fname: 'Colt',
  lname: 'Steel'
}, {
  id: 3,
  fname: 'Nebra',
  lname: 'Matthieu'
}, {
  id: 4,
  fname: 'Maximillian',
  lname: 'Shwarzmuller'
}, {
  id: 5,
  fname: 'Stephen',
  lname: 'Grider'
}, {
  id: 6,
  fname: 'Mosh',
  lname: 'Hamednani'
}, {
  id: 7,
  fname: 'Ryan',
  lname: 'Dahl'
}, {
  id: 8,
  fname: 'Brendan',
  lname: 'Eich'
}, {
  id: 9,
  fname: 'Rasmus',
  lname: 'Lerdof'
}, {
  id: 10,
  fname: 'John',
  lname: 'Resig'
}, {
  id: 11,
  fname: 'Bjarn',
  lname: 'Strouph'
}, {
  id: 12,
  fname: 'Machin',
  lname: 'Russo'
}];

/***/ }),

/***/ "./pages/api/contacts/[id]/index.js":
/*!******************************************!*\
  !*** ./pages/api/contacts/[id]/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_contacts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/contacts */ "./lib/contacts.js");

/* harmony default export */ __webpack_exports__["default"] = ((req, res) => {
  const {
    id
  } = req.query;
  const contact = _lib_contacts__WEBPACK_IMPORTED_MODULE_0__["contacts"].find(cont => cont.id === parseInt(id));
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(contact));
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL2NvbnRhY3RzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2FwaS9jb250YWN0cy8vaW5kZXguanMiXSwibmFtZXMiOlsiY29udGFjdHMiLCJpZCIsImZuYW1lIiwibG5hbWUiLCJyZXEiLCJyZXMiLCJxdWVyeSIsImNvbnRhY3QiLCJmaW5kIiwiY29udCIsInBhcnNlSW50Iiwic3RhdHVzQ29kZSIsInNldEhlYWRlciIsImVuZCIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFPLE1BQU1BLFFBQVEsR0FBRyxDQUN0QjtBQUFFQyxJQUFFLEVBQUUsQ0FBTjtBQUFTQyxPQUFLLEVBQUUsV0FBaEI7QUFBNkJDLE9BQUssRUFBRTtBQUFwQyxDQURzQixFQUV0QjtBQUFFRixJQUFFLEVBQUUsQ0FBTjtBQUFTQyxPQUFLLEVBQUUsTUFBaEI7QUFBd0JDLE9BQUssRUFBRTtBQUEvQixDQUZzQixFQUd0QjtBQUFFRixJQUFFLEVBQUUsQ0FBTjtBQUFTQyxPQUFLLEVBQUUsT0FBaEI7QUFBeUJDLE9BQUssRUFBRTtBQUFoQyxDQUhzQixFQUl0QjtBQUFFRixJQUFFLEVBQUUsQ0FBTjtBQUFTQyxPQUFLLEVBQUUsYUFBaEI7QUFBK0JDLE9BQUssRUFBRTtBQUF0QyxDQUpzQixFQUt0QjtBQUFFRixJQUFFLEVBQUUsQ0FBTjtBQUFTQyxPQUFLLEVBQUUsU0FBaEI7QUFBMkJDLE9BQUssRUFBRTtBQUFsQyxDQUxzQixFQU10QjtBQUFFRixJQUFFLEVBQUUsQ0FBTjtBQUFTQyxPQUFLLEVBQUUsTUFBaEI7QUFBd0JDLE9BQUssRUFBRTtBQUEvQixDQU5zQixFQU90QjtBQUFFRixJQUFFLEVBQUUsQ0FBTjtBQUFTQyxPQUFLLEVBQUUsTUFBaEI7QUFBd0JDLE9BQUssRUFBRTtBQUEvQixDQVBzQixFQVF0QjtBQUFFRixJQUFFLEVBQUUsQ0FBTjtBQUFTQyxPQUFLLEVBQUUsU0FBaEI7QUFBMkJDLE9BQUssRUFBRTtBQUFsQyxDQVJzQixFQVN0QjtBQUFFRixJQUFFLEVBQUUsQ0FBTjtBQUFTQyxPQUFLLEVBQUUsUUFBaEI7QUFBMEJDLE9BQUssRUFBRTtBQUFqQyxDQVRzQixFQVV0QjtBQUFFRixJQUFFLEVBQUUsRUFBTjtBQUFVQyxPQUFLLEVBQUUsTUFBakI7QUFBeUJDLE9BQUssRUFBRTtBQUFoQyxDQVZzQixFQVd0QjtBQUFFRixJQUFFLEVBQUUsRUFBTjtBQUFVQyxPQUFLLEVBQUUsT0FBakI7QUFBMEJDLE9BQUssRUFBRTtBQUFqQyxDQVhzQixFQVl0QjtBQUFFRixJQUFFLEVBQUUsRUFBTjtBQUFVQyxPQUFLLEVBQUUsUUFBakI7QUFBMkJDLE9BQUssRUFBRTtBQUFsQyxDQVpzQixDQUFqQixDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUFBO0FBQUE7QUFFZSxnRUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEtBQWM7QUFDM0IsUUFBTTtBQUFFSjtBQUFGLE1BQVNHLEdBQUcsQ0FBQ0UsS0FBbkI7QUFDQSxRQUFNQyxPQUFPLEdBQUdQLHNEQUFRLENBQUNRLElBQVQsQ0FBZUMsSUFBRCxJQUFVQSxJQUFJLENBQUNSLEVBQUwsS0FBWVMsUUFBUSxDQUFDVCxFQUFELENBQTVDLENBQWhCO0FBQ0FJLEtBQUcsQ0FBQ00sVUFBSixHQUFpQixHQUFqQjtBQUNBTixLQUFHLENBQUNPLFNBQUosQ0FBYyxjQUFkLEVBQThCLGtCQUE5QjtBQUNBUCxLQUFHLENBQUNRLEdBQUosQ0FBUUMsSUFBSSxDQUFDQyxTQUFMLENBQWVSLE9BQWYsQ0FBUjtBQUNELENBTkQsRSIsImZpbGUiOiJwYWdlcy9hcGkvY29udGFjdHMvW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2NvbnRhY3RzL1tpZF0vaW5kZXguanNcIik7XG4iLCJleHBvcnQgY29uc3QgY29udGFjdHMgPSBbXHJcbiAgeyBpZDogMSwgZm5hbWU6ICdDaHJpc3RpYW4nLCBsbmFtZTogJ0xpc2FuZ29sYScgfSxcclxuICB7IGlkOiAyLCBmbmFtZTogJ0NvbHQnLCBsbmFtZTogJ1N0ZWVsJyB9LFxyXG4gIHsgaWQ6IDMsIGZuYW1lOiAnTmVicmEnLCBsbmFtZTogJ01hdHRoaWV1JyB9LFxyXG4gIHsgaWQ6IDQsIGZuYW1lOiAnTWF4aW1pbGxpYW4nLCBsbmFtZTogJ1Nod2Fyem11bGxlcicgfSxcclxuICB7IGlkOiA1LCBmbmFtZTogJ1N0ZXBoZW4nLCBsbmFtZTogJ0dyaWRlcicgfSxcclxuICB7IGlkOiA2LCBmbmFtZTogJ01vc2gnLCBsbmFtZTogJ0hhbWVkbmFuaScgfSxcclxuICB7IGlkOiA3LCBmbmFtZTogJ1J5YW4nLCBsbmFtZTogJ0RhaGwnIH0sXHJcbiAgeyBpZDogOCwgZm5hbWU6ICdCcmVuZGFuJywgbG5hbWU6ICdFaWNoJyB9LFxyXG4gIHsgaWQ6IDksIGZuYW1lOiAnUmFzbXVzJywgbG5hbWU6ICdMZXJkb2YnIH0sXHJcbiAgeyBpZDogMTAsIGZuYW1lOiAnSm9obicsIGxuYW1lOiAnUmVzaWcnIH0sXHJcbiAgeyBpZDogMTEsIGZuYW1lOiAnQmphcm4nLCBsbmFtZTogJ1N0cm91cGgnIH0sXHJcbiAgeyBpZDogMTIsIGZuYW1lOiAnTWFjaGluJywgbG5hbWU6ICdSdXNzbycgfSxcclxuXTtcclxuIiwiaW1wb3J0IHsgY29udGFjdHMgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvY29udGFjdHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgKHJlcSwgcmVzKSA9PiB7XHJcbiAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5O1xyXG4gIGNvbnN0IGNvbnRhY3QgPSBjb250YWN0cy5maW5kKChjb250KSA9PiBjb250LmlkID09PSBwYXJzZUludChpZCkpO1xyXG4gIHJlcy5zdGF0dXNDb2RlID0gMjAwO1xyXG4gIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XHJcbiAgcmVzLmVuZChKU09OLnN0cmluZ2lmeShjb250YWN0KSk7XHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=
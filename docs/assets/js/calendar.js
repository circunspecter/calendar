(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("Calendar", [], factory);
	else if(typeof exports === 'object')
		exports["Calendar"] = factory();
	else
		root["Calendar"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateTime = function () {
  function DateTime() {
    var date = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Date();

    _classCallCheck(this, DateTime);

    this.date = new Date(date);
  }

  /**
   * Get milliseconds elapsed since 1 January 1970 00:00:00 UTC.
   * @return {number}
   */


  _createClass(DateTime, [{
    key: "getTime",
    value: function getTime() {
      return this.date.getTime();
    }

    /**
     * Get month. 0 for january ... 11 for december.
     * @return {number}
     */

  }, {
    key: "getMonth",
    value: function getMonth() {
      return this.date.getMonth();
    }

    /**
     * Get year.
     * @return {number}
     */

  }, {
    key: "getYear",
    value: function getYear() {
      return this.date.getFullYear();
    }

    /**
     * Set day.
     * @param {number} day Day to be established.
     * @return {DateTime}
     */

  }, {
    key: "setDay",
    value: function setDay(day) {
      this.date = new Date(this.date.setDate(day));
      return this;
    }
  }]);

  return DateTime;
}();

exports.default = DateTime;
module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Month = __webpack_require__(2);

var _Month2 = _interopRequireDefault(_Month);

var _Week = __webpack_require__(4);

var _Week2 = _interopRequireDefault(_Week);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Calendar = function () {
  function Calendar(config) {
    var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new Date();

    _classCallCheck(this, Calendar);

    this.date = new Date(date);
    this.config = Object.assign({
      // Month defaults handled by Month class.
      month: {},
      // Week defaults handled by Week class.
      week: {}
    }, config);

    this.week = new _Week2.default(this.config.week, this.config.weekStartDay);
    this.month = new _Month2.default(this.config.month, this.week, this.date);
  }

  /**
   * Set month.
   * @param {Date} date Selected month.
   */


  _createClass(Calendar, [{
    key: 'setDate',
    value: function setDate(date) {
      this.date = this.month.date = date;
    }
  }]);

  return Calendar;
}();

exports.default = Calendar;
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DateTime2 = __webpack_require__(0);

var _DateTime3 = _interopRequireDefault(_DateTime2);

var _Day = __webpack_require__(3);

var _Day2 = _interopRequireDefault(_Day);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Month = function (_DateTime) {
  _inherits(Month, _DateTime);

  function Month(config, week) {
    var date = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Date();

    _classCallCheck(this, Month);

    var _this = _possibleConstructorReturn(this, (Month.__proto__ || Object.getPrototypeOf(Month)).call(this, date));

    _this.week = week;
    _this.config = Object.assign({
      namesType: 'large',
      names: {
        large: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        short: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.']
      }
    }, config);
    return _this;
  }

  /**
   * Return the days for the month.
   * @return {array} Days collection.
   */


  _createClass(Month, [{
    key: 'getDays',
    value: function getDays() {
      var days = [];

      // Previous month days to show.
      var weekDays = [0, 1, 2, 3, 4, 5, 6];
      weekDays = weekDays.slice(this.week.getStartDay()).concat(weekDays.slice(0, this.week.getStartDay()));
      var prevMonthDays = weekDays.indexOf(this.getFirstDay().getWeekDay());

      // Days collection.
      var dateFrom = this.getFirstDay().setDay(-prevMonthDays).date;
      Array.apply(null, { length: 42 }).map(function () {
        return days.push(new _Day2.default(dateFrom.setDate(dateFrom.getDate() + 1)));
      });

      return days;
    }

    /**
     * Return the name of the month.
     * @param {string} type Configured names key.
     * @return {string} Name of month.
     */

  }, {
    key: 'getName',
    value: function getName(type) {
      return this.getNameByIndex(this.getMonth(), type);
    }

    /**
     * Return the name of the specified month.
     * @param {number} index 0 for january ... 11 for december.
     * @param {string} type Configured names key.
     * @return {string} Name of month.
     */

  }, {
    key: 'getNameByIndex',
    value: function getNameByIndex(index, type) {
      index = parseInt(index, 10);
      if (isNaN(index) || index < 0 || index > 11) {
        throw new Error('Month index must be a number between 0 and 11.');
      }
      return this.getNames(type)[index];
    }

    /**
     * Return the number of days for the month.
     * @return {number}
     */

  }, {
    key: 'getLength',
    value: function getLength() {
      return this.getLastDay().getNumber();
    }

    /**
     * Return the first day of the month.
     * @return {Day}
     */

  }, {
    key: 'getFirstDay',
    value: function getFirstDay() {
      return new _Day2.default(new Date(this.getYear(), this.getMonth(), 1));
    }

    /**
     * Return the last day of the month.
     * @return {Day}
     */

  }, {
    key: 'getLastDay',
    value: function getLastDay() {
      return new _Day2.default(new Date(this.getYear(), this.getMonth() + 1, 0));
    }

    /**
     * Return the month at specified position from the current one.
     * @param {number} diff Sibling distance.
     * @return {Month}
     */

  }, {
    key: 'getSibling',
    value: function getSibling(diff) {
      return new Month(this.config, this.week, new Date(this.getYear(), this.getMonth() + diff, 1));
    }

    /**
     * Return names of months.
     * @param {string} type Configured names key.
     * @return {array} Names of months.
     */

  }, {
    key: 'getNames',
    value: function getNames() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.config.namesType;

      var names = this.config.names[type];
      if (!names) {
        throw new Error('\'' + type + '\' is not a valid Month name type.');
      }
      return names;
    }
  }]);

  return Month;
}(_DateTime3.default);

exports.default = Month;
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DateTime2 = __webpack_require__(0);

var _DateTime3 = _interopRequireDefault(_DateTime2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Day = function (_DateTime) {
  _inherits(Day, _DateTime);

  function Day() {
    _classCallCheck(this, Day);

    return _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).apply(this, arguments));
  }

  _createClass(Day, [{
    key: 'getNumber',

    /**
     * Get day number.
     * @return {number}
     */
    value: function getNumber() {
      return this.date.getDate();
    }

    /**
     * Get week day. 0 for sunday ... 6 for saturday.
     * @return {number}
     */

  }, {
    key: 'getWeekDay',
    value: function getWeekDay() {
      return this.date.getDay();
    }

    /**
     * Get the start of the day.
     * @return {Date}
     */

  }, {
    key: 'getStart',
    value: function getStart() {
      return new Date(this.getYear(), this.getMonth(), this.getNumber(), 0, 0, 0, 0);
    }

    /**
     * Get the end of the day.
     * @return {Date}
     */

  }, {
    key: 'getEnd',
    value: function getEnd() {
      return new Date(this.getYear(), this.getMonth(), this.getNumber(), 23, 59, 59, 999);
    }
  }]);

  return Day;
}(_DateTime3.default);

exports.default = Day;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Week = function () {
  function Week(config) {
    _classCallCheck(this, Week);

    this.config = Object.assign({
      startDay: 0,
      namesType: 'large',
      names: {
        large: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        short: ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Fri.', 'Sat.'],
        mini: ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']
      }
    }, config);
  }

  /**
   * Return week start day.
   * @return {number}
   */


  _createClass(Week, [{
    key: 'getStartDay',
    value: function getStartDay() {
      var day = parseInt(this.config.startDay, 10);
      if (isNaN(day) || day < 0 || day > 6) {
        throw new Error('Week start day must be a number between 0 and 6.');
      }
      return day;
    }

    /**
     * Return week days names starting from week start day.
     * @param {string} type Configured names key.
     * @return {array} Name of days.
     */

  }, {
    key: 'getDays',
    value: function getDays() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.config.namesType;

      var names = this.config.names[type];
      if (!names) {
        throw new Error('\'' + type + '\' is not a valid Week name type.');
      }
      return names.slice(this.getStartDay()).concat(names.slice(0, this.getStartDay()));
    }
  }]);

  return Week;
}();

exports.default = Week;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=calendar.js.map
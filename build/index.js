module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var DAYS_OF_WEEK = exports.DAYS_OF_WEEK = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var MONTHS = exports.MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _CalendarColumn = __webpack_require__(5);

var _CalendarColumn2 = _interopRequireDefault(_CalendarColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalendarBody = function (_React$Component) {
  _inherits(CalendarBody, _React$Component);

  function CalendarBody(props) {
    _classCallCheck(this, CalendarBody);

    return _possibleConstructorReturn(this, (CalendarBody.__proto__ || Object.getPrototypeOf(CalendarBody)).call(this, props));
  }

  _createClass(CalendarBody, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: styles },
        _react2.default.createElement(_CalendarColumn2.default, {
          dayOfWeek: 'Sunday',
          month: this.props.month,
          year: this.props.year
        }),
        _react2.default.createElement(_CalendarColumn2.default, {
          dayOfWeek: 'Monday',
          month: this.props.month,
          year: this.props.year
        }),
        _react2.default.createElement(_CalendarColumn2.default, {
          dayOfWeek: 'Tuesday',
          month: this.props.month,
          year: this.props.year
        }),
        _react2.default.createElement(_CalendarColumn2.default, {
          dayOfWeek: 'Wednesday',
          month: this.props.month,
          year: this.props.year
        }),
        _react2.default.createElement(_CalendarColumn2.default, {
          dayOfWeek: 'Thursday',
          month: this.props.month,
          year: this.props.year
        }),
        _react2.default.createElement(_CalendarColumn2.default, {
          dayOfWeek: 'Friday',
          month: this.props.month,
          year: this.props.year
        }),
        _react2.default.createElement(_CalendarColumn2.default, {
          dayOfWeek: 'Saturday',
          month: this.props.month,
          year: this.props.year
        })
      );
    }
  }]);

  return CalendarBody;
}(_react2.default.Component);

var styles = {
  // display: 'grid'
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'stretch'
};
exports.default = CalendarBody;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _constants = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalendarHeader = function (_React$Component) {
  _inherits(CalendarHeader, _React$Component);

  function CalendarHeader(props) {
    _classCallCheck(this, CalendarHeader);

    var _this = _possibleConstructorReturn(this, (CalendarHeader.__proto__ || Object.getPrototypeOf(CalendarHeader)).call(this, props));

    var now = new Date();
    _this.state = { month: now.getMonth(), year: now.getFullYear() };
    _this.monthChange = _this.monthChange.bind(_this);
    _this.yearChange = _this.yearChange.bind(_this);
    return _this;
  }

  _createClass(CalendarHeader, [{
    key: 'monthChange',
    value: function monthChange(event) {
      this.setState({ month: event.target.value });
      this.props.onMonthChange(event.target.value);
    }
  }, {
    key: 'yearChange',
    value: function yearChange(event) {
      this.setState({ year: event.target.value });
      this.props.onYearChange(event.target.value);
    }
  }, {
    key: 'renderMonths',
    value: function renderMonths() {
      var months = [];
      return _constants.MONTHS.map(function (month, index) {
        return _react2.default.createElement(
          'option',
          { value: index },
          month
        );
      });
    }
  }, {
    key: 'renderYears',
    value: function renderYears() {
      var years = [];
      for (var i = 2000; i <= 2017; i++) {
        years.push(_react2.default.createElement(
          'option',
          { value: i },
          i
        ));
      }
      return years;
    }
  }, {
    key: 'render',
    value: function render() {
      console.log(this.state);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'select',
          { onChange: this.monthChange, value: this.state.month },
          _react2.default.createElement(
            'option',
            { value: '0' },
            'January'
          ),
          _react2.default.createElement(
            'option',
            { value: '1' },
            'February'
          ),
          _react2.default.createElement(
            'option',
            { value: '2' },
            'March'
          ),
          _react2.default.createElement(
            'option',
            { value: '3' },
            'April'
          ),
          _react2.default.createElement(
            'option',
            { value: '4' },
            'May'
          ),
          _react2.default.createElement(
            'option',
            { value: '5' },
            'June'
          ),
          _react2.default.createElement(
            'option',
            { value: '6' },
            'July'
          ),
          _react2.default.createElement(
            'option',
            { value: '7' },
            'August'
          ),
          _react2.default.createElement(
            'option',
            { value: '8' },
            'September'
          ),
          _react2.default.createElement(
            'option',
            { value: '9' },
            'October'
          ),
          _react2.default.createElement(
            'option',
            { value: '10' },
            'November'
          ),
          _react2.default.createElement(
            'option',
            { value: '11' },
            'December'
          )
        ),
        _react2.default.createElement(
          'select',
          { onChange: this.yearChange, value: this.state.year },
          this.renderYears()
        )
      );
    }
  }]);

  return CalendarHeader;
}(_react2.default.Component);

exports.default = CalendarHeader;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalendarOuter = function (_React$Component) {
  _inherits(CalendarOuter, _React$Component);

  function CalendarOuter() {
    _classCallCheck(this, CalendarOuter);

    return _possibleConstructorReturn(this, (CalendarOuter.__proto__ || Object.getPrototypeOf(CalendarOuter)).apply(this, arguments));
  }

  _createClass(CalendarOuter, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: styles },
        this.props.children
      );
    }
  }]);

  return CalendarOuter;
}(_react2.default.Component);

var styles = {
  display: 'grid',
  gridTemplateRows: '1fr 4fr',
  boxSizing: 'border-box',
  border: '1px solid black',
  height: '100%'
};
exports.default = CalendarOuter;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _CalendarDay = __webpack_require__(6);

var _CalendarDay2 = _interopRequireDefault(_CalendarDay);

var _constants = __webpack_require__(1);

var _utils = __webpack_require__(8);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalendarColumn = function (_React$Component) {
  _inherits(CalendarColumn, _React$Component);

  function CalendarColumn() {
    _classCallCheck(this, CalendarColumn);

    return _possibleConstructorReturn(this, (CalendarColumn.__proto__ || Object.getPrototypeOf(CalendarColumn)).apply(this, arguments));
  }

  _createClass(CalendarColumn, [{
    key: 'renderColumn',
    value: function renderColumn() {
      var dowIndex = _constants.DAYS_OF_WEEK.indexOf(this.props.dayOfWeek);
      var numDays = (0, _utils.daysInMonth)(this.props.month, this.props.year);
      var numDaysAdded = 0;
      var cells = [];
      for (var i = 1; i <= numDays; i++) {
        var date = new Date(this.props.year, this.props.month, i);
        var dow = date.getDay();
        if (_constants.DAYS_OF_WEEK[dow] === this.props.dayOfWeek) {
          if (!cells.length && i > dowIndex + 1) {
            cells.push(_react2.default.createElement(_CalendarDay2.default, null));
          }
          cells.push(_react2.default.createElement(_CalendarDay2.default, {
            key: this.props.year + '-' + this.props.month + '-' + i,
            year: this.props.year,
            month: this.props.month,
            day: i
          }));
        }
      }
      console.log(this.props);
      return cells;
    }
    // renderColumn() {
    //   let dowIndex = DAYS_OF_WEEK.indexOf(this.props.dayOfWeek);
    //   console.log(this.props.dayOfWeek, dowIndex);
    //   let numDays = daysInMonth(this.props.month, this.props.year);
    //   let numDaysAdded = 0;
    //   let cells = [];
    //   for (let i = 1; i <= numDays; i++) {
    //     let date = new Date(this.props.year, this.props.month, i);
    //     let dow = date.getDay();
    //     if (DAYS_OF_WEEK[dow] === this.props.dayOfWeek) {
    //       if (!cells.length && i > dowIndex + 1) {
    //         cells.push(<CalendarDay />);
    //       }
    //       cells.push(
    //         <CalendarDay
    //           key={`${this.props.year}-${this.props.month}-${i}`}
    //           year={this.props.year}
    //           month={this.props.month}
    //           day={i}
    //         />
    //       );
    //     }
    //   }
    //   console.log(this.props);
    //   return cells;
    // }

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: styles.wrap },
        _react2.default.createElement(
          'div',
          { style: styles.header },
          this.props.dayOfWeek
        ),
        this.renderColumn()
      );
    }
  }]);

  return CalendarColumn;
}(_react2.default.Component);

var styles = {
  wrap: {
    textAlign: 'center',
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // alignItems: 'stretch',
    border: '1px solid red'
  },
  header: {
    flex: 1
  }
};

exports.default = CalendarColumn;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CalendarDay = function (_React$Component) {
  _inherits(CalendarDay, _React$Component);

  function CalendarDay() {
    _classCallCheck(this, CalendarDay);

    return _possibleConstructorReturn(this, (CalendarDay.__proto__ || Object.getPrototypeOf(CalendarDay)).apply(this, arguments));
  }

  _createClass(CalendarDay, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: styles },
        _react2.default.createElement(
          'div',
          null,
          this.props.day
        )
      );
    }
  }]);

  return CalendarDay;
}(_react2.default.Component);

var styles = {
  border: '1px solid blue',
  flex: 1
};
exports.default = CalendarDay;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _CalendarOuter = __webpack_require__(4);

var _CalendarOuter2 = _interopRequireDefault(_CalendarOuter);

var _CalendarHeader = __webpack_require__(3);

var _CalendarHeader2 = _interopRequireDefault(_CalendarHeader);

var _CalendarBody = __webpack_require__(2);

var _CalendarBody2 = _interopRequireDefault(_CalendarBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AvailabilityCalendar = function (_React$Component) {
  _inherits(AvailabilityCalendar, _React$Component);

  function AvailabilityCalendar(props) {
    _classCallCheck(this, AvailabilityCalendar);

    var _this = _possibleConstructorReturn(this, (AvailabilityCalendar.__proto__ || Object.getPrototypeOf(AvailabilityCalendar)).call(this, props));

    _this.state = { month: 9, year: 2017 };
    _this.onMonthChange = _this.onMonthChange.bind(_this);
    _this.onYearChange = _this.onYearChange.bind(_this);
    return _this;
  }

  _createClass(AvailabilityCalendar, [{
    key: 'onMonthChange',
    value: function onMonthChange(month) {
      this.setState({ month: month });
    }
  }, {
    key: 'onYearChange',
    value: function onYearChange(year) {
      this.setState({ year: year });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _CalendarOuter2.default,
        null,
        _react2.default.createElement(_CalendarHeader2.default, {
          onMonthChange: this.onMonthChange,
          onYearChange: this.onYearChange
        }),
        _react2.default.createElement(_CalendarBody2.default, { month: this.state.month, year: this.state.year })
      );
    }
  }]);

  return AvailabilityCalendar;
}(_react2.default.Component);

exports.default = AvailabilityCalendar;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.daysInMonth = daysInMonth;
exports.dateIsDayOfWeek = dateIsDayOfWeek;
exports.mapDays = mapDays;
exports.binDates = binDates;

var _constants = __webpack_require__(1);

function daysInMonth(year, month) {
  var zeroIndexed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  // need month to not be zero indexed for this function to work
  month = zeroIndexed ? month + 1 : month;
  return new Date(year, month, 0).getDate();
}

// check if a given date is a given day of the week
function dateIsDayOfWeek(year, month, date, dayOfWeek) {
  var zeroIndexed = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;

  // different behavior here is needed than in #daysInMonth. here, we need the
  // month to be zero-indexed
  month = zeroIndexed ? month : month - 1;
  var d = new Date(year, month, date);
  var index = d.getDay();
  return dayOfWeek === _constants.DAYS_OF_WEEK[index];
}

function mapDays(days) {
  var obj = {};
  _constants.DAYS_OF_WEEK.forEach(function (day) {
    return obj[day] = [];
  });
  return _constants.DAYS_OF_WEEK.reduce(function (result, day) {
    result[day] = [];
    return result;
  }, {});
}

function binDates(year, month) {
  var zeroIndexed = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  month = zeroIndexed ? month : month - 1;
  var date = new Date(year, month, 0);
  var bins = mapDays(_constants.DAYS_OF_WEEK);
  var numDays = daysInMonth(year, month);
  var firstDayIndex = 0;
  var lastDayIndex = 0;

  for (var i = 1; i <= numDays; i++) {
    var dow = _constants.DAYS_OF_WEEK[new Date(year, month, i).getDay()];
    if (i === 1) firstDayIndex = _constants.DAYS_OF_WEEK.indexOf(dow);else if (i === numDays) lastDayIndex = _constants.DAYS_OF_WEEK.indexOf(dow);
    bins[dow].push(i);
  }

  Object.keys(bins).forEach(function (bin) {
    var dowIndex = _constants.DAYS_OF_WEEK.indexOf(bin);
    if (dowIndex < firstDayIndex) {
      bins[bin].unshift(0);
    } else if (dowIndex > lastDayIndex) {
      bins[bin].push(0);
    }
  });

  return bins;
}

/***/ })
/******/ ]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
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

var JANUARY = exports.JANUARY = 0;
var FEBRUARY = exports.FEBRUARY = 1;
var MARCH = exports.MARCH = 2;
var APRIL = exports.APRIL = 3;
var MAY = exports.MAY = 4;
var JUNE = exports.JUNE = 5;
var JULY = exports.JULY = 6;
var AUGUST = exports.AUGUST = 7;
var SEPTEMBER = exports.SEPTEMBER = 8;
var OCTOBER = exports.OCTOBER = 9;
var NOVEMBER = exports.NOVEMBER = 10;
var DECEMBER = exports.DECEMBER = 11;

/***/ }),
/* 2 */
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
  return 32 - new Date(year, month, 32).getDate();
}

// check if a given date is a given day of the week
function dateIsDayOfWeek(year, month, date, dayOfWeek) {
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

  var numWeeks = Object.keys(bins).reduce(function (max, bin) {
    if (bins[bin].length > max) max = bins[bin].length;
    return max;
  }, 0);

  Object.keys(bins).forEach(function (bin) {
    var dowIndex = _constants.DAYS_OF_WEEK.indexOf(bin);
    if (dowIndex < firstDayIndex) {
      bins[bin].unshift(0);
    }
    if (dowIndex > lastDayIndex) {
      bins[bin].push(0);
    }
  });

  return bins;
}

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

var _CalendarColumn = __webpack_require__(6);

var _CalendarColumn2 = _interopRequireDefault(_CalendarColumn);

var _constants = __webpack_require__(1);

var _utils = __webpack_require__(2);

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
    key: 'renderColumns',
    value: function renderColumns() {
      var _this2 = this;

      return _constants.DAYS_OF_WEEK.map(function (dow) {
        var key = [_this2.props.year, _this2.props.month, dow].join('-');
        return _react2.default.createElement(_CalendarColumn2.default, {
          key: 'calendar-column-' + key,
          year: _this2.props.year,
          month: _this2.props.month,
          dayOfWeek: dow,
          days: _this2.props.bins[dow],
          onChangeView: _this2.props.onChangeView,
          events: _this2.props.events
        });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { style: styles },
        this.renderColumns()
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
/* 4 */
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
          { value: index, key: 'month-' + month },
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
          { value: i, key: 'year-' + i },
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
        { className: 'calendar-header' },
        _react2.default.createElement(
          'select',
          { onChange: this.monthChange, value: this.state.month },
          this.renderMonths()
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _CalendarDay = __webpack_require__(7);

var _CalendarDay2 = _interopRequireDefault(_CalendarDay);

var _constants = __webpack_require__(1);

var _utils = __webpack_require__(2);

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
      var _this2 = this;

      return this.props.days.map(function (day) {
        if (!day) return _react2.default.createElement(_CalendarDay2.default, {
          color: _this2.props.color,
          key: 'column-' + _this2.props.year + '-' + _this2.props.month + '-' + day + '-' + _this2.props.dayOfWeek + '-' + Math.floor(Math.random() * 1000)
        });else return _react2.default.createElement(_CalendarDay2.default, {
          color: _this2.props.color,
          key: 'day-' + _this2.props.year + '-' + _this2.props.month + '-' + day + '-' + _this2.props.dayOfWeek,
          year: _this2.props.year,
          month: _this2.props.month,
          day: day,
          onChangeView: _this2.props.onChangeView,
          events: _this2.props.events
        });
      });
    }
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
        _react2.default.createElement(
          'div',
          null,
          this.renderColumn()
        )
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
    justifyContent: 'flex-start'
  },
  header: {
    flex: 1,
    backgroundColor: '#555',
    padding: '3px 0px',
    fontSize: '0.6rem',
    textTransform: 'uppercase',
    // backgroundColor: 'rgb(253, 0, 67)',
    color: 'white'
  }
};

exports.default = CalendarColumn;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_STYLE = {
  cell: {
    cursor: 'pointer',
    boxSizing: 'border-box',
    border: '1px solid rgba(200, 200, 200, 0.4)',
    flex: 1,
    height: 'calc(100vw / 14)'
  },
  date: {
    fontSize: '0.8em',
    textAlign: 'right',
    padding: '2px 5px',
    backgroundColor: 'rgba(200, 200, 200, 0.3)'
  }
};

var CalendarDay = function (_React$Component) {
  _inherits(CalendarDay, _React$Component);

  function CalendarDay(props) {
    _classCallCheck(this, CalendarDay);

    var _this = _possibleConstructorReturn(this, (CalendarDay.__proto__ || Object.getPrototypeOf(CalendarDay)).call(this, props));

    _this.state = {
      styles: JSON.parse(JSON.stringify(DEFAULT_STYLE))
    };

    _this.eventkey = _this.props.year + '-' + (_this.props.month + 1) + '-' + _this.props.day;

    _this.onMouseOver = _this.onMouseOver.bind(_this);
    _this.onMouseOut = _this.onMouseOut.bind(_this);

    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(CalendarDay, [{
    key: 'hasEvents',
    value: function hasEvents() {
      return this.props.events.hasOwnProperty(this.eventkey);
    }
  }, {
    key: 'hasAllDayEvent',
    value: function hasAllDayEvent(eventDay) {
      if (eventDay.constructor === Array) {
        for (var i = 0; i < eventDay.length; i++) {
          if (eventDay[i].hasOwnProperty('title') && eventDay[i].isAllDay) {
            return true;
          }
        }
      } else if ((typeof eventDay === 'undefined' ? 'undefined' : _typeof(eventDay)) === 'object' && eventDay.hasOwnProperty('title')) {
        return !!eventDay.isAllDay;
      }
      return false;
    }
  }, {
    key: 'isAvailable',
    value: function isAvailable() {
      return !this.hasEvents() || this.hasEvents() && !this.hasAllDayEvent(this.props.events[this.eventkey]);
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      if (this.isAvailable()) {
        this.props.onChangeView('form');
      }
    }
  }, {
    key: 'onMouseOver',
    value: function onMouseOver() {
      var styles = JSON.parse(JSON.stringify(DEFAULT_STYLE));
      styles.date.backgroundColor = 'rgb(253, 0, 67)';
      styles.date.color = 'white';
      // styles.cell.backgroundColor = 'rgba(200, 200, 200, 0.3)';
      this.setState({ styles: styles });
    }
  }, {
    key: 'onMouseOut',
    value: function onMouseOut() {
      var styles = JSON.parse(JSON.stringify(DEFAULT_STYLE));
      this.setState({ styles: styles });
    }
  }, {
    key: 'render',
    value: function render() {
      if (typeof this.props.day === 'number') {
        return _react2.default.createElement(
          'div',
          {
            style: this.state.styles.cell,
            onMouseOver: this.onMouseOver,
            onMouseOut: this.onMouseOut,
            onClick: this.onClick
          },
          _react2.default.createElement(
            'div',
            { style: this.state.styles.date },
            this.props.day
          )
        );
      } else {
        return _react2.default.createElement(
          'div',
          { style: this.state.styles.cell },
          _react2.default.createElement(
            'div',
            null,
            '\xA0'
          )
        );
      }
    }
  }]);

  return CalendarDay;
}(_react2.default.Component);

exports.default = CalendarDay;

// rgb(253, 0, 67)
// rgb(242, 225, 50)

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _CalendarOuter = __webpack_require__(5);

var _CalendarOuter2 = _interopRequireDefault(_CalendarOuter);

var _Calendar = __webpack_require__(9);

var _Calendar2 = _interopRequireDefault(_Calendar);

var _CalendarForm = __webpack_require__(10);

var _CalendarForm2 = _interopRequireDefault(_CalendarForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULTS = {
  fontFamily: 'Times New Roman'
};

var AvailabilityCalendar = function (_React$Component) {
  _inherits(AvailabilityCalendar, _React$Component);

  function AvailabilityCalendar(props) {
    _classCallCheck(this, AvailabilityCalendar);

    var _this = _possibleConstructorReturn(this, (AvailabilityCalendar.__proto__ || Object.getPrototypeOf(AvailabilityCalendar)).call(this, props));

    _this.state = { view: 'calendar' };
    var userStyles = _this.gatherUserStyles();
    _this.styles = Object.assign(DEFAULTS, userStyles);
    _this.changeView = _this.changeView.bind(_this);
    return _this;
  }

  _createClass(AvailabilityCalendar, [{
    key: 'changeView',
    value: function changeView(view) {
      this.setState({ view: view });
    }
  }, {
    key: 'gatherUserStyles',
    value: function gatherUserStyles() {
      var _this2 = this;

      var userStyles = {};
      var styles = Object.keys(DEFAULTS);
      styles.forEach(function (style) {
        if (_this2.props.hasOwnProperty(style)) {
          userStyles[style] = _this2.props[style];
        }
      });
      return userStyles;
    }
  }, {
    key: 'renderForm',
    value: function renderForm() {
      return _react2.default.createElement(_CalendarForm2.default, { onChangeView: this.changeView, events: this.props.events });
    }
  }, {
    key: 'renderCalendar',
    value: function renderCalendar() {
      return _react2.default.createElement(_Calendar2.default, { onChangeView: this.changeView, events: this.props.events });
    }
  }, {
    key: 'renderView',
    value: function renderView() {
      switch (this.state.view) {
        case 'form':
          return this.renderForm();
        case 'calendar':
        default:
          return this.renderCalendar();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _CalendarOuter2.default,
        { style: this.styles },
        this.renderView()
      );
    }
  }]);

  return AvailabilityCalendar;
}(_react2.default.Component);

exports.default = AvailabilityCalendar;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _CalendarHeader = __webpack_require__(4);

var _CalendarHeader2 = _interopRequireDefault(_CalendarHeader);

var _CalendarBody = __webpack_require__(3);

var _CalendarBody2 = _interopRequireDefault(_CalendarBody);

var _utils = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Calendar = function (_React$Component) {
  _inherits(Calendar, _React$Component);

  function Calendar(props) {
    _classCallCheck(this, Calendar);

    var _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));

    _this.state = { month: 9, year: 2017, bins: (0, _utils.mapDays)() };
    _this.onMonthChange = _this.onMonthChange.bind(_this);
    _this.onYearChange = _this.onYearChange.bind(_this);
    return _this;
  }

  _createClass(Calendar, [{
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
      var bins = (0, _utils.binDates)(this.state.year, this.state.month);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_CalendarHeader2.default, {
          onMonthChange: this.onMonthChange,
          onYearChange: this.onYearChange
        }),
        _react2.default.createElement(_CalendarBody2.default, {
          month: this.state.month,
          year: this.state.year,
          bins: bins,
          onChangeView: this.props.onChangeView,
          events: this.props.events
        })
      );
    }
  }]);

  return Calendar;
}(_react2.default.Component);

exports.default = Calendar;

/***/ }),
/* 10 */
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

var CalendarForm = function (_React$Component) {
  _inherits(CalendarForm, _React$Component);

  function CalendarForm(props) {
    _classCallCheck(this, CalendarForm);

    var _this = _possibleConstructorReturn(this, (CalendarForm.__proto__ || Object.getPrototypeOf(CalendarForm)).call(this, props));

    _this.onCancelForm = _this.onCancelForm.bind(_this);
    return _this;
  }

  _createClass(CalendarForm, [{
    key: 'onCancelForm',
    value: function onCancelForm(e) {
      this.props.onChangeView('calendar');
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          null,
          'CalendarForm'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'button',
            { onClick: this.onCancelForm },
            'Cancel'
          )
        )
      );
    }
  }]);

  return CalendarForm;
}(_react2.default.Component);

exports.default = CalendarForm;

/***/ })
/******/ ]);
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testDayViewRangeValidation = testDayViewRangeValidation;
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _chai = require("chai");
var _utils = require("@mui/monorepo/test/utils");
var _pickersUtils = require("test/utils/pickers-utils");
var _jsxRuntime = require("react/jsx-runtime");
const _excluded = ["defaultCalendarMonth"],
  _excluded2 = ["defaultCalendarMonth"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const isDisable = el => el.getAttribute('disabled') !== null;
const testDisabledDate = (day, expectedAnswer, isDesktop) => {
  (0, _chai.expect)(_utils.screen.getAllByText(day).map(isDisable)).to.deep.equal(isDesktop ? expectedAnswer : expectedAnswer.slice(0, 1));
};
const testMonthSwitcherAreDisable = areDisable => {
  const prevMonthElement = _utils.screen.getAllByLabelText('Previous month')[0];
  const nbCalendars = _utils.screen.getAllByLabelText('Next month').length;
  const nextMonthElement = _utils.screen.getAllByLabelText('Next month')[nbCalendars - 1];
  // Test prev month
  if (areDisable[0]) {
    (0, _chai.expect)(prevMonthElement).to.have.attribute('disabled');
  } else {
    (0, _chai.expect)(prevMonthElement).not.to.have.attribute('disabled');
  }
  // Test next month
  if (areDisable[1]) {
    (0, _chai.expect)(nextMonthElement).to.have.attribute('disabled');
  } else {
    (0, _chai.expect)(nextMonthElement).not.to.have.attribute('disabled');
  }
};
function testDayViewRangeValidation(ElementToTest, getOptions) {
  describe('validation in day view:', () => {
    const {
      componentFamily,
      views,
      variant = 'desktop'
    } = getOptions();
    if (!views.includes('day') || componentFamily === 'field') {
      return;
    }
    const isDesktop = variant === 'desktop';
    const defaultProps = {
      defaultCalendarMonth: _pickersUtils.adapterToUse.date(new Date(2018, 2, 12)),
      open: true
    };
    it('should apply shouldDisableDate', function test() {
      const {
        render
      } = getOptions();
      render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, (0, _extends2.default)({}, defaultProps, {
        shouldDisableDate: date => _pickersUtils.adapterToUse.isAfter(date, _pickersUtils.adapterToUse.date(new Date(2018, 2, 10)))
      })));
      testDisabledDate('10', [false, true], isDesktop);
      testDisabledDate('11', [true, true], isDesktop);
    });
    it('should apply disablePast', function test() {
      const {
        render,
        clock
      } = getOptions();
      let now;
      function WithFakeTimer(props) {
        now = _pickersUtils.adapterToUse.date(new Date());
        const otherProps = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, (0, _extends2.default)({
          value: [now, null]
        }, otherProps));
      }
      const {
        setProps
      } = render( /*#__PURE__*/(0, _jsxRuntime.jsx)(WithFakeTimer, (0, _extends2.default)({}, defaultProps, {
        disablePast: true
      })));
      const tomorrow = _pickersUtils.adapterToUse.addDays(now, 1);
      const yesterday = _pickersUtils.adapterToUse.addDays(now, -1);
      testDisabledDate(_pickersUtils.adapterToUse.format(now, 'dayOfMonth'), [false, false], isDesktop);
      testDisabledDate(_pickersUtils.adapterToUse.format(tomorrow, 'dayOfMonth'), [false, false], isDesktop);
      if (!_pickersUtils.adapterToUse.isSameMonth(yesterday, tomorrow)) {
        setProps({
          value: [yesterday, null]
        });
        clock.runToLast();
      }
      testDisabledDate(_pickersUtils.adapterToUse.format(yesterday, 'dayOfMonth'), [true, false], isDesktop);
    });
    it('should apply disableFuture', function test() {
      const {
        render,
        clock
      } = getOptions();
      let now;
      function WithFakeTimer(props) {
        now = _pickersUtils.adapterToUse.date(new Date());
        const otherProps = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded2);
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, (0, _extends2.default)({
          value: [now, null]
        }, otherProps));
      }
      const {
        setProps
      } = render( /*#__PURE__*/(0, _jsxRuntime.jsx)(WithFakeTimer, (0, _extends2.default)({}, defaultProps, {
        disableFuture: true
      })));
      const tomorrow = _pickersUtils.adapterToUse.addDays(now, 1);
      const yesterday = _pickersUtils.adapterToUse.addDays(now, -1);
      testDisabledDate(_pickersUtils.adapterToUse.format(now, 'dayOfMonth'), [false, true], isDesktop);
      testDisabledDate(_pickersUtils.adapterToUse.format(tomorrow, 'dayOfMonth'), [true, true], isDesktop);
      if (!_pickersUtils.adapterToUse.isSameMonth(yesterday, tomorrow)) {
        setProps({
          value: [yesterday, null]
        });
        clock.runToLast();
      }
      testDisabledDate(_pickersUtils.adapterToUse.format(yesterday, 'dayOfMonth'), [false, true], isDesktop);
    });
    it('should apply minDate', function test() {
      const {
        render
      } = getOptions();
      render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, (0, _extends2.default)({}, defaultProps, {
        defaultCalendarMonth: _pickersUtils.adapterToUse.date(new Date(2019, 5, 15)),
        minDate: _pickersUtils.adapterToUse.date(new Date(2019, 5, 4))
      })));
      testDisabledDate('1', [true, false], isDesktop);
      testDisabledDate('3', [true, false], isDesktop);
      testDisabledDate('4', [false, false], isDesktop);
      testDisabledDate('15', [false, false], isDesktop);
      testMonthSwitcherAreDisable([true, false]);
    });
    it('should apply maxDate', function test() {
      const {
        render
      } = getOptions();
      render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, (0, _extends2.default)({}, defaultProps, {
        defaultCalendarMonth: _pickersUtils.adapterToUse.date(new Date(2019, 5, 15)),
        maxDate: _pickersUtils.adapterToUse.date(new Date(2019, 5, 4))
      })));
      testDisabledDate('1', [false, true], isDesktop);
      testDisabledDate('4', [false, true], isDesktop);
      testDisabledDate('5', [true, true], isDesktop);
      testDisabledDate('15', [true, true], isDesktop);
      testMonthSwitcherAreDisable([false, true]);
    });
  });
}
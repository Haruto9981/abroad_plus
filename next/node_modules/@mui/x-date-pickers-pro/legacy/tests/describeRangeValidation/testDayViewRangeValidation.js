import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _extends from "@babel/runtime/helpers/esm/extends";
var _excluded = ["defaultCalendarMonth"],
  _excluded2 = ["defaultCalendarMonth"];
import * as React from 'react';
import { expect } from 'chai';
import { screen } from '@mui/monorepo/test/utils';
import { adapterToUse } from 'test/utils/pickers-utils';
import { jsx as _jsx } from "react/jsx-runtime";
var isDisable = function isDisable(el) {
  return el.getAttribute('disabled') !== null;
};
var testDisabledDate = function testDisabledDate(day, expectedAnswer, isDesktop) {
  expect(screen.getAllByText(day).map(isDisable)).to.deep.equal(isDesktop ? expectedAnswer : expectedAnswer.slice(0, 1));
};
var testMonthSwitcherAreDisable = function testMonthSwitcherAreDisable(areDisable) {
  var prevMonthElement = screen.getAllByLabelText('Previous month')[0];
  var nbCalendars = screen.getAllByLabelText('Next month').length;
  var nextMonthElement = screen.getAllByLabelText('Next month')[nbCalendars - 1];
  // Test prev month
  if (areDisable[0]) {
    expect(prevMonthElement).to.have.attribute('disabled');
  } else {
    expect(prevMonthElement).not.to.have.attribute('disabled');
  }
  // Test next month
  if (areDisable[1]) {
    expect(nextMonthElement).to.have.attribute('disabled');
  } else {
    expect(nextMonthElement).not.to.have.attribute('disabled');
  }
};
export function testDayViewRangeValidation(ElementToTest, getOptions) {
  describe('validation in day view:', function () {
    var _getOptions = getOptions(),
      componentFamily = _getOptions.componentFamily,
      views = _getOptions.views,
      _getOptions$variant = _getOptions.variant,
      variant = _getOptions$variant === void 0 ? 'desktop' : _getOptions$variant;
    if (!views.includes('day') || componentFamily === 'field') {
      return;
    }
    var isDesktop = variant === 'desktop';
    var defaultProps = {
      defaultCalendarMonth: adapterToUse.date(new Date(2018, 2, 12)),
      open: true
    };
    it('should apply shouldDisableDate', function test() {
      var _getOptions2 = getOptions(),
        render = _getOptions2.render;
      render( /*#__PURE__*/_jsx(ElementToTest, _extends({}, defaultProps, {
        shouldDisableDate: function shouldDisableDate(date) {
          return adapterToUse.isAfter(date, adapterToUse.date(new Date(2018, 2, 10)));
        }
      })));
      testDisabledDate('10', [false, true], isDesktop);
      testDisabledDate('11', [true, true], isDesktop);
    });
    it('should apply disablePast', function test() {
      var _getOptions3 = getOptions(),
        render = _getOptions3.render,
        clock = _getOptions3.clock;
      var now;
      function WithFakeTimer(props) {
        now = adapterToUse.date(new Date());
        var defaultCalendarMonth = props.defaultCalendarMonth,
          otherProps = _objectWithoutProperties(props, _excluded);
        return /*#__PURE__*/_jsx(ElementToTest, _extends({
          value: [now, null]
        }, otherProps));
      }
      var _render = render( /*#__PURE__*/_jsx(WithFakeTimer, _extends({}, defaultProps, {
          disablePast: true
        }))),
        setProps = _render.setProps;
      var tomorrow = adapterToUse.addDays(now, 1);
      var yesterday = adapterToUse.addDays(now, -1);
      testDisabledDate(adapterToUse.format(now, 'dayOfMonth'), [false, false], isDesktop);
      testDisabledDate(adapterToUse.format(tomorrow, 'dayOfMonth'), [false, false], isDesktop);
      if (!adapterToUse.isSameMonth(yesterday, tomorrow)) {
        setProps({
          value: [yesterday, null]
        });
        clock.runToLast();
      }
      testDisabledDate(adapterToUse.format(yesterday, 'dayOfMonth'), [true, false], isDesktop);
    });
    it('should apply disableFuture', function test() {
      var _getOptions4 = getOptions(),
        render = _getOptions4.render,
        clock = _getOptions4.clock;
      var now;
      function WithFakeTimer(props) {
        now = adapterToUse.date(new Date());
        var defaultCalendarMonth = props.defaultCalendarMonth,
          otherProps = _objectWithoutProperties(props, _excluded2);
        return /*#__PURE__*/_jsx(ElementToTest, _extends({
          value: [now, null]
        }, otherProps));
      }
      var _render2 = render( /*#__PURE__*/_jsx(WithFakeTimer, _extends({}, defaultProps, {
          disableFuture: true
        }))),
        setProps = _render2.setProps;
      var tomorrow = adapterToUse.addDays(now, 1);
      var yesterday = adapterToUse.addDays(now, -1);
      testDisabledDate(adapterToUse.format(now, 'dayOfMonth'), [false, true], isDesktop);
      testDisabledDate(adapterToUse.format(tomorrow, 'dayOfMonth'), [true, true], isDesktop);
      if (!adapterToUse.isSameMonth(yesterday, tomorrow)) {
        setProps({
          value: [yesterday, null]
        });
        clock.runToLast();
      }
      testDisabledDate(adapterToUse.format(yesterday, 'dayOfMonth'), [false, true], isDesktop);
    });
    it('should apply minDate', function test() {
      var _getOptions5 = getOptions(),
        render = _getOptions5.render;
      render( /*#__PURE__*/_jsx(ElementToTest, _extends({}, defaultProps, {
        defaultCalendarMonth: adapterToUse.date(new Date(2019, 5, 15)),
        minDate: adapterToUse.date(new Date(2019, 5, 4))
      })));
      testDisabledDate('1', [true, false], isDesktop);
      testDisabledDate('3', [true, false], isDesktop);
      testDisabledDate('4', [false, false], isDesktop);
      testDisabledDate('15', [false, false], isDesktop);
      testMonthSwitcherAreDisable([true, false]);
    });
    it('should apply maxDate', function test() {
      var _getOptions6 = getOptions(),
        render = _getOptions6.render;
      render( /*#__PURE__*/_jsx(ElementToTest, _extends({}, defaultProps, {
        defaultCalendarMonth: adapterToUse.date(new Date(2019, 5, 15)),
        maxDate: adapterToUse.date(new Date(2019, 5, 4))
      })));
      testDisabledDate('1', [false, true], isDesktop);
      testDisabledDate('4', [false, true], isDesktop);
      testDisabledDate('5', [true, true], isDesktop);
      testDisabledDate('15', [true, true], isDesktop);
      testMonthSwitcherAreDisable([false, true]);
    });
  });
}
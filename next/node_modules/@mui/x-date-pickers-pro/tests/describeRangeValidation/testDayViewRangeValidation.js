import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/esm/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/esm/extends";
const _excluded = ["defaultCalendarMonth"],
  _excluded2 = ["defaultCalendarMonth"];
import * as React from 'react';
import { expect } from 'chai';
import { screen } from '@mui/monorepo/test/utils';
import { adapterToUse } from 'test/utils/pickers-utils';
import { jsx as _jsx } from "react/jsx-runtime";
const isDisable = el => el.getAttribute('disabled') !== null;
const testDisabledDate = (day, expectedAnswer, isDesktop) => {
  expect(screen.getAllByText(day).map(isDisable)).to.deep.equal(isDesktop ? expectedAnswer : expectedAnswer.slice(0, 1));
};
const testMonthSwitcherAreDisable = areDisable => {
  const prevMonthElement = screen.getAllByLabelText('Previous month')[0];
  const nbCalendars = screen.getAllByLabelText('Next month').length;
  const nextMonthElement = screen.getAllByLabelText('Next month')[nbCalendars - 1];
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
      defaultCalendarMonth: adapterToUse.date(new Date(2018, 2, 12)),
      open: true
    };
    it('should apply shouldDisableDate', function test() {
      const {
        render
      } = getOptions();
      render( /*#__PURE__*/_jsx(ElementToTest, _extends({}, defaultProps, {
        shouldDisableDate: date => adapterToUse.isAfter(date, adapterToUse.date(new Date(2018, 2, 10)))
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
        now = adapterToUse.date(new Date());
        const otherProps = _objectWithoutPropertiesLoose(props, _excluded);
        return /*#__PURE__*/_jsx(ElementToTest, _extends({
          value: [now, null]
        }, otherProps));
      }
      const {
        setProps
      } = render( /*#__PURE__*/_jsx(WithFakeTimer, _extends({}, defaultProps, {
        disablePast: true
      })));
      const tomorrow = adapterToUse.addDays(now, 1);
      const yesterday = adapterToUse.addDays(now, -1);
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
      const {
        render,
        clock
      } = getOptions();
      let now;
      function WithFakeTimer(props) {
        now = adapterToUse.date(new Date());
        const otherProps = _objectWithoutPropertiesLoose(props, _excluded2);
        return /*#__PURE__*/_jsx(ElementToTest, _extends({
          value: [now, null]
        }, otherProps));
      }
      const {
        setProps
      } = render( /*#__PURE__*/_jsx(WithFakeTimer, _extends({}, defaultProps, {
        disableFuture: true
      })));
      const tomorrow = adapterToUse.addDays(now, 1);
      const yesterday = adapterToUse.addDays(now, -1);
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
      const {
        render
      } = getOptions();
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
      const {
        render
      } = getOptions();
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
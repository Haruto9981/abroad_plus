import _extends from "@babel/runtime/helpers/esm/extends";
import _construct from "@babel/runtime/helpers/esm/construct";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import * as React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { screen } from '@mui/monorepo/test/utils';
import { adapterToUse } from 'test/utils/pickers-utils';
import { jsx as _jsx } from "react/jsx-runtime";
var testInvalidStatus = function testInvalidStatus(expectedAnswer, isSingleInput) {
  var answers = isSingleInput ? [expectedAnswer[0] || expectedAnswer[1]] : expectedAnswer;
  var textBoxes = screen.getAllByRole('textbox');
  answers.forEach(function (answer, index) {
    var textBox = textBoxes[index];
    expect(textBox).to.have.attribute('aria-invalid', answer ? 'true' : 'false');
  });
};
var dateParser = function dateParser(value) {
  return value.map(function (date) {
    return date === null ? date : adapterToUse.date(_construct(Date, _toConsumableArray(date)));
  });
};
export var testTextFieldRangeValidation = function testTextFieldRangeValidation(ElementToTest, getOptions) {
  var _getOptions = getOptions(),
    componentFamily = _getOptions.componentFamily,
    render = _getOptions.render,
    isSingleInput = _getOptions.isSingleInput,
    withDate = _getOptions.withDate,
    withTime = _getOptions.withTime;
  if (!['picker', 'field'].includes(componentFamily)) {
    return;
  }
  describe('text field:', function () {
    it('should accept single day range', function () {
      var onErrorMock = spy();
      render( /*#__PURE__*/_jsx(ElementToTest, {
        onError: onErrorMock,
        value: dateParser([[2018, 0, 1, 10, 15, 0], [2018, 0, 1, 10, 15, 0]])
      }));
      expect(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
    });
    it('should not accept end date prior to start state', function () {
      var onErrorMock = spy();
      render( /*#__PURE__*/_jsx(ElementToTest, {
        onError: onErrorMock,
        value: dateParser([[2018, 0, 2], [2018, 0, 1]])
      }));
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['invalidRange', 'invalidRange']);
      testInvalidStatus([true, true], isSingleInput);
    });
    it('should apply shouldDisableDate', function test() {
      if (!withDate) {
        return;
      }
      var onErrorMock = spy();
      var _render = render( /*#__PURE__*/_jsx(ElementToTest, {
          onError: onErrorMock,
          value: dateParser([[2018, 2, 9], [2018, 2, 10]]),
          shouldDisableDate: function shouldDisableDate(date) {
            return adapterToUse.isAfter(date, adapterToUse.date(new Date(2018, 2, 10)));
          }
        })),
        setProps = _render.setProps;
      expect(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 9], [2018, 2, 13]])
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'shouldDisableDate']);
      testInvalidStatus([false, true], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 12], [2018, 2, 13]])
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['shouldDisableDate', 'shouldDisableDate']);
      testInvalidStatus([true, true], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 12], [2018, 2, 13]]),
        shouldDisableDate: function shouldDisableDate(date) {
          return adapterToUse.isBefore(date, adapterToUse.date(new Date(2018, 2, 13)));
        }
      });
      expect(onErrorMock.callCount).to.equal(3);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['shouldDisableDate', null]);
      testInvalidStatus([true, false], isSingleInput);
    });
    it('should apply shouldDisableDate specifically on end date', function test() {
      if (!withDate) {
        return;
      }
      var onErrorMock = spy();
      var _render2 = render( /*#__PURE__*/_jsx(ElementToTest, {
          onError: onErrorMock,
          value: dateParser([[2018, 2, 9], [2018, 2, 10]]),
          shouldDisableDate: function shouldDisableDate(date, position) {
            return position === 'end' ? adapterToUse.isAfter(date, adapterToUse.date(new Date(2018, 2, 10))) : false;
          }
        })),
        setProps = _render2.setProps;
      expect(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 9], [2018, 2, 13]])
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'shouldDisableDate']);
      testInvalidStatus([false, true], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 12], [2018, 2, 13]])
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'shouldDisableDate']);
      testInvalidStatus([false, true], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 12], [2018, 2, 13]]),
        shouldDisableDate: function shouldDisableDate(date, position) {
          return position === 'end' ? adapterToUse.isBefore(date, adapterToUse.date(new Date(2018, 2, 13))) : false;
        }
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, null]);
      testInvalidStatus([false, false], isSingleInput);
    });
    it('should apply shouldDisableDate specifically on start date', function test() {
      if (!withDate) {
        return;
      }
      var onErrorMock = spy();
      var _render3 = render( /*#__PURE__*/_jsx(ElementToTest, {
          onError: onErrorMock,
          value: dateParser([[2018, 2, 9], [2018, 2, 10]]),
          shouldDisableDate: function shouldDisableDate(date, position) {
            return position === 'start' ? adapterToUse.isAfter(date, adapterToUse.date(new Date(2018, 2, 10))) : false;
          }
        })),
        setProps = _render3.setProps;
      expect(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 9], [2018, 2, 13]])
      });
      expect(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 12], [2018, 2, 13]])
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['shouldDisableDate', null]);
      testInvalidStatus([true, false], isSingleInput);
      setProps({
        shouldDisableDate: function shouldDisableDate(date, position) {
          return position === 'start' ? adapterToUse.isBefore(date, adapterToUse.date(new Date(2018, 2, 13))) : false;
        }
      });
      expect(onErrorMock.callCount).to.equal(1);
      testInvalidStatus([true, false], isSingleInput);
    });
    it('should apply disablePast', function test() {
      var onErrorMock = spy();
      var now;
      function WithFakeTimer(props) {
        now = adapterToUse.date(new Date());
        return /*#__PURE__*/_jsx(ElementToTest, _extends({
          value: [now, now]
        }, props));
      }
      var _render4 = render( /*#__PURE__*/_jsx(WithFakeTimer, {
          disablePast: true,
          onError: onErrorMock
        })),
        setProps = _render4.setProps;
      var past = null;
      if (withDate) {
        past = adapterToUse.addDays(now, -1);
      } else if (adapterToUse.isSameDay(adapterToUse.addHours(now, -1), now)) {
        past = adapterToUse.addHours(now, -1);
      }
      if (past === null) {
        return;
      }
      setProps({
        value: [past, now]
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['disablePast', null]);
      testInvalidStatus([true, false], isSingleInput);
      setProps({
        value: [past, past]
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['disablePast', 'disablePast']);
      testInvalidStatus([true, true], isSingleInput);
    });
    it('should apply disableFuture', function test() {
      var onErrorMock = spy();
      var now;
      function WithFakeTimer(props) {
        now = adapterToUse.date(new Date());
        return /*#__PURE__*/_jsx(ElementToTest, _extends({
          value: [now, now]
        }, props));
      }
      var _render5 = render( /*#__PURE__*/_jsx(WithFakeTimer, {
          disableFuture: true,
          onError: onErrorMock
        })),
        setProps = _render5.setProps;
      var future = null;
      if (withDate) {
        future = adapterToUse.addDays(now, 1);
      } else if (adapterToUse.isSameDay(adapterToUse.addHours(now, 1), now)) {
        future = adapterToUse.addHours(now, 1);
      }
      if (future === null) {
        return;
      }
      setProps({
        value: [now, future]
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'disableFuture']);
      testInvalidStatus([false, true], isSingleInput);
      setProps({
        value: [future, future]
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['disableFuture', 'disableFuture']);
      testInvalidStatus([true, true], isSingleInput);
    });
    it('should apply minDate', function test() {
      if (!withDate) {
        return;
      }
      var onErrorMock = spy();
      var _render6 = render( /*#__PURE__*/_jsx(ElementToTest, {
          onError: onErrorMock,
          value: dateParser([[2018, 2, 9], [2018, 2, 10]]),
          minDate: adapterToUse.date(new Date(2018, 2, 15))
        })),
        setProps = _render6.setProps;
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['minDate', 'minDate']);
      testInvalidStatus([true, true], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 9], [2018, 2, 15]])
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['minDate', null]);
      testInvalidStatus([true, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 16], [2018, 2, 17]])
      });
      expect(onErrorMock.callCount).to.equal(3);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, null]);
      testInvalidStatus([false, false], isSingleInput);
    });
    it('should apply minDate when only first field is filled', function test() {
      if (!withDate) {
        return;
      }
      var onErrorMock = spy();
      var _render7 = render( /*#__PURE__*/_jsx(ElementToTest, {
          onError: onErrorMock,
          value: dateParser([[2018, 2, 9], null]),
          minDate: adapterToUse.date(new Date(2018, 2, 11))
        })),
        setProps = _render7.setProps;
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['minDate', null]);
      testInvalidStatus([true, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 16], null])
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, null]);
      testInvalidStatus([false, false], isSingleInput);
    });
    it('should apply minDate when only second field is filled', function test() {
      if (!withDate) {
        return;
      }
      var onErrorMock = spy();
      var _render8 = render( /*#__PURE__*/_jsx(ElementToTest, {
          onError: onErrorMock,
          value: dateParser([null, [2018, 2, 9]]),
          minDate: adapterToUse.date(new Date(2018, 2, 15))
        })),
        setProps = _render8.setProps;
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'minDate']);
      testInvalidStatus([false, true], isSingleInput);
      setProps({
        value: dateParser([null, [2018, 2, 16]])
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, null]);
      testInvalidStatus([false, false], isSingleInput);
    });
    it('should apply maxDate', function test() {
      if (!withDate) {
        return;
      }
      var onErrorMock = spy();
      var _render9 = render( /*#__PURE__*/_jsx(ElementToTest, {
          onError: onErrorMock,
          value: dateParser([[2018, 2, 9], [2018, 2, 10]]),
          maxDate: adapterToUse.date(new Date(2018, 2, 15))
        })),
        setProps = _render9.setProps;
      expect(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 15], [2018, 2, 17]])
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'maxDate']);
      testInvalidStatus([false, true], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 16], [2018, 2, 17]])
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['maxDate', 'maxDate']);
      testInvalidStatus([true, true], isSingleInput);
    });
    it('should apply minTime', function test() {
      if (!withTime) {
        return;
      }
      var onErrorMock = spy();
      var _render10 = render( /*#__PURE__*/_jsx(ElementToTest, {
          onError: onErrorMock,
          value: dateParser([[2018, 2, 10, 9, 0, 0], [2018, 2, 10, 10, 0, 0]]),
          minTime: adapterToUse.date(new Date(2018, 2, 10, 12, 0))
        })),
        setProps = _render10.setProps;
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['minTime', 'minTime']);
      testInvalidStatus([true, true], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 10, 9, 0, 0], [2018, 2, 10, 12, 5, 0]])
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['minTime', null]);
      testInvalidStatus([true, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 10, 12, 15, 0], [2018, 2, 10, 18, 0, 0]])
      });
      expect(onErrorMock.callCount).to.equal(3);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, null]);
      testInvalidStatus([false, false], isSingleInput);
    });
    it('should ignore date when applying minTime', function test() {
      if (!withTime) {
        return;
      }
      var onErrorMock = spy();
      var _render11 = render( /*#__PURE__*/_jsx(ElementToTest, {
          onError: onErrorMock,
          value: dateParser([[2018, 2, 5, 9, 0, 0], [2018, 2, 15, 10, 0, 0]]),
          minTime: adapterToUse.date(new Date(2018, 2, 10, 12, 0))
        })),
        setProps = _render11.setProps;
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['minTime', 'minTime']);
      testInvalidStatus([true, true], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 5, 15, 0, 0], [2018, 2, 15, 16, 5, 0]])
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, null]);
      testInvalidStatus([false, false], isSingleInput);
    });
    it('should apply minTime when only first field is filled', function test() {
      if (!withTime) {
        return;
      }
      var onErrorMock = spy();
      var _render12 = render( /*#__PURE__*/_jsx(ElementToTest, {
          onError: onErrorMock,
          value: dateParser([[2018, 1, 1, 15], null]),
          minTime: adapterToUse.date(new Date(2018, 1, 1, 12))
        })),
        setProps = _render12.setProps;
      expect(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 1, 1, 5], null])
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['minTime', null]);
      testInvalidStatus([true, false], isSingleInput);
    });
    it('should apply minTime when only second field is filled', function test() {
      if (!withTime) {
        return;
      }
      var onErrorMock = spy();
      var _render13 = render( /*#__PURE__*/_jsx(ElementToTest, {
          onError: onErrorMock,
          value: dateParser([null, [2018, 1, 1, 15]]),
          minTime: adapterToUse.date(new Date(2018, 1, 1, 12))
        })),
        setProps = _render13.setProps;
      expect(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      setProps({
        value: dateParser([null, [2018, 1, 1, 5]])
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'minTime']);
      testInvalidStatus([false, true], isSingleInput);
    });
    it('should apply maxTime', function test() {
      if (!withTime) {
        return;
      }
      var onErrorMock = spy();
      var _render14 = render( /*#__PURE__*/_jsx(ElementToTest, {
          onError: onErrorMock,
          value: dateParser([[2018, 2, 10, 9, 0, 0], [2018, 2, 10, 10, 0, 0]]),
          maxTime: adapterToUse.date(new Date(2018, 2, 10, 12, 0))
        })),
        setProps = _render14.setProps;
      expect(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 10, 9, 0, 0], [2018, 2, 10, 12, 5, 0]])
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'maxTime']);
      testInvalidStatus([false, true], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 10, 12, 15, 0], [2018, 2, 10, 18, 0, 0]])
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['maxTime', 'maxTime']);
      testInvalidStatus([true, true], isSingleInput);
    });
    it('should ignore date when applying maxTime', function test() {
      if (!withTime) {
        return;
      }
      var onErrorMock = spy();
      var _render15 = render( /*#__PURE__*/_jsx(ElementToTest, {
          onError: onErrorMock,
          value: dateParser([[2018, 2, 5, 9, 0, 0], [2018, 2, 15, 10, 0, 0]]),
          maxTime: adapterToUse.date(new Date(2018, 2, 10, 12, 0))
        })),
        setProps = _render15.setProps;
      expect(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 5, 15, 0, 0], [2018, 2, 15, 16, 5, 0]])
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['maxTime', 'maxTime']);
      testInvalidStatus([true, true], isSingleInput);
    });
    it('should apply maxDateTime', function test() {
      if (!withDate || !withTime) {
        // prop only available on DateTime pickers
        return;
      }
      var onErrorMock = spy();
      var _render16 = render( /*#__PURE__*/_jsx(ElementToTest, {
          onError: onErrorMock,
          value: dateParser([[2018, 2, 1, 9, 0, 0], [2018, 2, 2, 12, 0, 0]]),
          maxDateTime: adapterToUse.date(new Date(2018, 2, 2, 13, 0))
        })),
        setProps = _render16.setProps;
      expect(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      setProps({
        maxDateTime: adapterToUse.date(new Date(2018, 2, 2, 8, 0))
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'maxTime']);
      testInvalidStatus([false, true], isSingleInput);
      setProps({
        maxDateTime: adapterToUse.date(new Date(2018, 2, 1, 5, 0))
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['maxTime', 'maxDate']);
      testInvalidStatus([true, true], isSingleInput);
    });
    it('should apply minDateTime', function test() {
      if (!withDate || !withTime) {
        // prop only available on DateTime pickers
        return;
      }
      var onErrorMock = spy();
      var _render17 = render( /*#__PURE__*/_jsx(ElementToTest, {
          onError: onErrorMock,
          value: dateParser([[2018, 2, 1, 9, 0, 0], [2018, 2, 2, 12, 0, 0]]),
          minDateTime: adapterToUse.date(new Date(2018, 2, 2, 13, 0))
        })),
        setProps = _render17.setProps;
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['minDate', 'minTime']);
      testInvalidStatus([true, true], isSingleInput);
      setProps({
        minDateTime: adapterToUse.date(new Date(2018, 2, 2, 8, 0))
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['minDate', null]);
      testInvalidStatus([true, false], isSingleInput);
      setProps({
        minDateTime: adapterToUse.date(new Date(2018, 2, 1, 5, 0))
      });
      expect(onErrorMock.callCount).to.equal(3);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, null]);
      testInvalidStatus([false, false], isSingleInput);
    });
  });
};
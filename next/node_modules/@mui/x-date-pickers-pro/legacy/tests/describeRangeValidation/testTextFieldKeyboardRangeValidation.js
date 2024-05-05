import _construct from "@babel/runtime/helpers/esm/construct";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import * as React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { screen } from '@mui/monorepo/test/utils';
import { adapterToUse } from 'test/utils/pickers-utils';
import { act } from '@mui/monorepo/test/utils/createRenderer';
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
export var testTextFieldKeyboardRangeValidation = function testTextFieldKeyboardRangeValidation(ElementToTest, getOptions) {
  var _getOptions = getOptions(),
    componentFamily = _getOptions.componentFamily,
    render = _getOptions.render,
    isSingleInput = _getOptions.isSingleInput,
    withDate = _getOptions.withDate,
    withTime = _getOptions.withTime,
    inputValue = _getOptions.inputValue;
  if (componentFamily !== 'field' || !inputValue) {
    return;
  }
  describe('text field keyboard:', function () {
    it('should not accept end date prior to start state', function () {
      var onErrorMock = spy();
      render( /*#__PURE__*/_jsx(ElementToTest, {
        onError: onErrorMock
      }));
      expect(onErrorMock.callCount).to.equal(0);
      act(function () {
        dateParser([[2018, 0, 2, 12, 0, 0], [2018, 0, 1, 11, 0, 0]]).forEach(function (date, index) {
          inputValue(date, {
            setEndDate: index === 1
          });
        });
      });
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
          shouldDisableDate: function shouldDisableDate(date) {
            return adapterToUse.isAfter(date, adapterToUse.date(new Date(2018, 2, 11)));
          }
        })),
        setProps = _render.setProps;
      act(function () {
        dateParser([[2018, 2, 9], [2018, 2, 10]]).forEach(function (date, index) {
          inputValue(date, {
            setEndDate: index === 1
          });
        });
      });
      expect(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      act(function () {
        inputValue(adapterToUse.date(new Date(2018, 2, 13)), {
          setEndDate: true
        });
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'shouldDisableDate']);
      testInvalidStatus([false, true], isSingleInput);
      act(function () {
        inputValue(adapterToUse.date(new Date(2018, 2, 12)));
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['shouldDisableDate', 'shouldDisableDate']);
      testInvalidStatus([true, true], isSingleInput);
      setProps({
        shouldDisableDate: function shouldDisableDate(date) {
          return adapterToUse.isBefore(date, adapterToUse.date(new Date(2018, 2, 13)));
        }
      });
      expect(onErrorMock.callCount).to.equal(3);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['shouldDisableDate', null]);
      testInvalidStatus([true, false], isSingleInput);
    });
    it('should apply disablePast', function test() {
      var onErrorMock = spy();
      var now = adapterToUse.date(new Date());
      render( /*#__PURE__*/_jsx(ElementToTest, {
        disablePast: true,
        onError: onErrorMock
      }));
      var past = null;
      if (withDate) {
        past = adapterToUse.addDays(now, -1);
      } else if (adapterToUse.isSameDay(adapterToUse.addHours(now, -1), now)) {
        past = adapterToUse.addHours(now, -1);
      }
      if (past === null) {
        return;
      }
      act(function () {
        inputValue(adapterToUse.date(past));
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['disablePast', null]);
      testInvalidStatus([true, false], isSingleInput);
      act(function () {
        inputValue(adapterToUse.date(past), {
          setEndDate: true
        });
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['disablePast', 'disablePast']);
      testInvalidStatus([true, true], isSingleInput);
      act(function () {
        inputValue(adapterToUse.date(now));
      });
      expect(onErrorMock.callCount).to.equal(3);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'disablePast']);
      testInvalidStatus([false, true], isSingleInput);
    });
    it('should apply disableFuture', function test() {
      var onErrorMock = spy();
      var now = adapterToUse.date(new Date());
      render( /*#__PURE__*/_jsx(ElementToTest, {
        disableFuture: true,
        onError: onErrorMock
      }));
      var future = null;
      if (withDate) {
        future = adapterToUse.addDays(now, 1);
      } else if (adapterToUse.isSameDay(adapterToUse.addHours(now, 1), now)) {
        future = adapterToUse.addHours(now, 1);
      }
      if (future === null) {
        return;
      }
      act(function () {
        inputValue(adapterToUse.date(future), {
          setEndDate: true
        });
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'disableFuture']);
      testInvalidStatus([false, true], isSingleInput);
      act(function () {
        inputValue(adapterToUse.date(future));
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['disableFuture', 'disableFuture']);
      testInvalidStatus([true, true], isSingleInput);
      act(function () {
        inputValue(adapterToUse.date(now));
      });
      expect(onErrorMock.callCount).to.equal(3);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'disableFuture']);
      testInvalidStatus([false, true], isSingleInput);
    });
    it('should apply minDate', function test() {
      if (!withDate) {
        return;
      }
      var onErrorMock = spy();
      render( /*#__PURE__*/_jsx(ElementToTest, {
        onError: onErrorMock,
        minDate: adapterToUse.date(new Date(2018, 2, 15))
      }));
      act(function () {
        dateParser([[2018, 2, 9], [2018, 2, 10]]).forEach(function (date, index) {
          inputValue(date, {
            setEndDate: index === 1
          });
        });
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['minDate', 'minDate']);
      testInvalidStatus([true, true], isSingleInput);
      act(function () {
        inputValue(adapterToUse.date(new Date(2018, 2, 15)));
      });
      expect(onErrorMock.callCount).to.equal(3);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'minDate']);
      testInvalidStatus([false, true], isSingleInput);
      act(function () {
        inputValue(adapterToUse.date(new Date(2018, 2, 16)), {
          setEndDate: true
        });
      });
      expect(onErrorMock.callCount).to.equal(4);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, null]);
      testInvalidStatus([false, false], isSingleInput);
    });
    it('should apply maxDate', function test() {
      if (!withDate) {
        return;
      }
      var onErrorMock = spy();
      render( /*#__PURE__*/_jsx(ElementToTest, {
        onError: onErrorMock,
        maxDate: adapterToUse.date(new Date(2018, 2, 15))
      }));
      act(function () {
        dateParser([[2018, 2, 15], [2018, 2, 17]]).forEach(function (date, index) {
          inputValue(date, {
            setEndDate: index === 1
          });
        });
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'maxDate']);
      testInvalidStatus([false, true], isSingleInput);
      act(function () {
        inputValue(adapterToUse.date(new Date(2018, 2, 16)));
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
      render( /*#__PURE__*/_jsx(ElementToTest, {
        onError: onErrorMock,
        minTime: adapterToUse.date(new Date(2018, 2, 10, 12, 0, 0))
      }));
      act(function () {
        dateParser([[2018, 2, 10, 9, 0, 0], [2018, 2, 10, 10, 0, 0]]).forEach(function (date, index) {
          inputValue(date, {
            setEndDate: index === 1
          });
        });
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['minTime', 'minTime']);
      testInvalidStatus([true, true], isSingleInput);
      act(function () {
        inputValue(adapterToUse.date(new Date(2018, 2, 10, 12, 10, 0)), {
          setEndDate: true
        });
      });
      expect(onErrorMock.callCount).to.equal(3);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['minTime', null]);
      testInvalidStatus([true, false], isSingleInput);
      act(function () {
        inputValue(adapterToUse.date(new Date(2018, 2, 10, 12, 5, 0)));
      });
      expect(onErrorMock.callCount).to.equal(4);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, null]);
      testInvalidStatus([false, false], isSingleInput);
    });
    it('should apply maxTime', function test() {
      if (!withTime) {
        return;
      }
      var onErrorMock = spy();
      render( /*#__PURE__*/_jsx(ElementToTest, {
        onError: onErrorMock,
        maxTime: adapterToUse.date(new Date(2018, 2, 10, 12, 0))
      }));
      act(function () {
        dateParser([[2018, 2, 10, 9, 0, 0], [2018, 2, 10, 12, 15, 0]]).forEach(function (date, index) {
          inputValue(date, {
            setEndDate: index === 1
          });
        });
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'maxTime']);
      testInvalidStatus([false, true], isSingleInput);
      act(function () {
        inputValue(adapterToUse.date(new Date(2018, 2, 10, 12, 5, 0)));
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['maxTime', 'maxTime']);
      testInvalidStatus([true, true], isSingleInput);
    });
  });
};
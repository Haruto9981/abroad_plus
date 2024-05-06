import * as React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { screen } from '@mui/monorepo/test/utils';
import { adapterToUse } from 'test/utils/pickers-utils';
import { act } from '@mui/monorepo/test/utils/createRenderer';
import { jsx as _jsx } from "react/jsx-runtime";
const testInvalidStatus = (expectedAnswer, isSingleInput) => {
  const answers = isSingleInput ? [expectedAnswer[0] || expectedAnswer[1]] : expectedAnswer;
  const textBoxes = screen.getAllByRole('textbox');
  answers.forEach((answer, index) => {
    const textBox = textBoxes[index];
    expect(textBox).to.have.attribute('aria-invalid', answer ? 'true' : 'false');
  });
};
const dateParser = value => {
  return value.map(date => date === null ? date : adapterToUse.date(new Date(...date)));
};
export const testTextFieldKeyboardRangeValidation = (ElementToTest, getOptions) => {
  const {
    componentFamily,
    render,
    isSingleInput,
    withDate,
    withTime,
    inputValue
  } = getOptions();
  if (componentFamily !== 'field' || !inputValue) {
    return;
  }
  describe('text field keyboard:', () => {
    it('should not accept end date prior to start state', () => {
      const onErrorMock = spy();
      render( /*#__PURE__*/_jsx(ElementToTest, {
        onError: onErrorMock
      }));
      expect(onErrorMock.callCount).to.equal(0);
      act(() => {
        dateParser([[2018, 0, 2, 12, 0, 0], [2018, 0, 1, 11, 0, 0]]).forEach((date, index) => {
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
      const onErrorMock = spy();
      const {
        setProps
      } = render( /*#__PURE__*/_jsx(ElementToTest, {
        onError: onErrorMock,
        shouldDisableDate: date => adapterToUse.isAfter(date, adapterToUse.date(new Date(2018, 2, 11)))
      }));
      act(() => {
        dateParser([[2018, 2, 9], [2018, 2, 10]]).forEach((date, index) => {
          inputValue(date, {
            setEndDate: index === 1
          });
        });
      });
      expect(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      act(() => {
        inputValue(adapterToUse.date(new Date(2018, 2, 13)), {
          setEndDate: true
        });
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'shouldDisableDate']);
      testInvalidStatus([false, true], isSingleInput);
      act(() => {
        inputValue(adapterToUse.date(new Date(2018, 2, 12)));
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['shouldDisableDate', 'shouldDisableDate']);
      testInvalidStatus([true, true], isSingleInput);
      setProps({
        shouldDisableDate: date => adapterToUse.isBefore(date, adapterToUse.date(new Date(2018, 2, 13)))
      });
      expect(onErrorMock.callCount).to.equal(3);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['shouldDisableDate', null]);
      testInvalidStatus([true, false], isSingleInput);
    });
    it('should apply disablePast', function test() {
      const onErrorMock = spy();
      const now = adapterToUse.date(new Date());
      render( /*#__PURE__*/_jsx(ElementToTest, {
        disablePast: true,
        onError: onErrorMock
      }));
      let past = null;
      if (withDate) {
        past = adapterToUse.addDays(now, -1);
      } else if (adapterToUse.isSameDay(adapterToUse.addHours(now, -1), now)) {
        past = adapterToUse.addHours(now, -1);
      }
      if (past === null) {
        return;
      }
      act(() => {
        inputValue(adapterToUse.date(past));
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['disablePast', null]);
      testInvalidStatus([true, false], isSingleInput);
      act(() => {
        inputValue(adapterToUse.date(past), {
          setEndDate: true
        });
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['disablePast', 'disablePast']);
      testInvalidStatus([true, true], isSingleInput);
      act(() => {
        inputValue(adapterToUse.date(now));
      });
      expect(onErrorMock.callCount).to.equal(3);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'disablePast']);
      testInvalidStatus([false, true], isSingleInput);
    });
    it('should apply disableFuture', function test() {
      const onErrorMock = spy();
      const now = adapterToUse.date(new Date());
      render( /*#__PURE__*/_jsx(ElementToTest, {
        disableFuture: true,
        onError: onErrorMock
      }));
      let future = null;
      if (withDate) {
        future = adapterToUse.addDays(now, 1);
      } else if (adapterToUse.isSameDay(adapterToUse.addHours(now, 1), now)) {
        future = adapterToUse.addHours(now, 1);
      }
      if (future === null) {
        return;
      }
      act(() => {
        inputValue(adapterToUse.date(future), {
          setEndDate: true
        });
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'disableFuture']);
      testInvalidStatus([false, true], isSingleInput);
      act(() => {
        inputValue(adapterToUse.date(future));
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['disableFuture', 'disableFuture']);
      testInvalidStatus([true, true], isSingleInput);
      act(() => {
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
      const onErrorMock = spy();
      render( /*#__PURE__*/_jsx(ElementToTest, {
        onError: onErrorMock,
        minDate: adapterToUse.date(new Date(2018, 2, 15))
      }));
      act(() => {
        dateParser([[2018, 2, 9], [2018, 2, 10]]).forEach((date, index) => {
          inputValue(date, {
            setEndDate: index === 1
          });
        });
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['minDate', 'minDate']);
      testInvalidStatus([true, true], isSingleInput);
      act(() => {
        inputValue(adapterToUse.date(new Date(2018, 2, 15)));
      });
      expect(onErrorMock.callCount).to.equal(3);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'minDate']);
      testInvalidStatus([false, true], isSingleInput);
      act(() => {
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
      const onErrorMock = spy();
      render( /*#__PURE__*/_jsx(ElementToTest, {
        onError: onErrorMock,
        maxDate: adapterToUse.date(new Date(2018, 2, 15))
      }));
      act(() => {
        dateParser([[2018, 2, 15], [2018, 2, 17]]).forEach((date, index) => {
          inputValue(date, {
            setEndDate: index === 1
          });
        });
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'maxDate']);
      testInvalidStatus([false, true], isSingleInput);
      act(() => {
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
      const onErrorMock = spy();
      render( /*#__PURE__*/_jsx(ElementToTest, {
        onError: onErrorMock,
        minTime: adapterToUse.date(new Date(2018, 2, 10, 12, 0, 0))
      }));
      act(() => {
        dateParser([[2018, 2, 10, 9, 0, 0], [2018, 2, 10, 10, 0, 0]]).forEach((date, index) => {
          inputValue(date, {
            setEndDate: index === 1
          });
        });
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['minTime', 'minTime']);
      testInvalidStatus([true, true], isSingleInput);
      act(() => {
        inputValue(adapterToUse.date(new Date(2018, 2, 10, 12, 10, 0)), {
          setEndDate: true
        });
      });
      expect(onErrorMock.callCount).to.equal(3);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['minTime', null]);
      testInvalidStatus([true, false], isSingleInput);
      act(() => {
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
      const onErrorMock = spy();
      render( /*#__PURE__*/_jsx(ElementToTest, {
        onError: onErrorMock,
        maxTime: adapterToUse.date(new Date(2018, 2, 10, 12, 0))
      }));
      act(() => {
        dateParser([[2018, 2, 10, 9, 0, 0], [2018, 2, 10, 12, 15, 0]]).forEach((date, index) => {
          inputValue(date, {
            setEndDate: index === 1
          });
        });
      });
      expect(onErrorMock.callCount).to.equal(1);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'maxTime']);
      testInvalidStatus([false, true], isSingleInput);
      act(() => {
        inputValue(adapterToUse.date(new Date(2018, 2, 10, 12, 5, 0)));
      });
      expect(onErrorMock.callCount).to.equal(2);
      expect(onErrorMock.lastCall.args[0]).to.deep.equal(['maxTime', 'maxTime']);
      testInvalidStatus([true, true], isSingleInput);
    });
  });
};
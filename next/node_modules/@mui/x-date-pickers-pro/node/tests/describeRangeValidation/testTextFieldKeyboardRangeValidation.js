"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testTextFieldKeyboardRangeValidation = void 0;
var React = _interopRequireWildcard(require("react"));
var _chai = require("chai");
var _sinon = require("sinon");
var _utils = require("@mui/monorepo/test/utils");
var _pickersUtils = require("test/utils/pickers-utils");
var _createRenderer = require("@mui/monorepo/test/utils/createRenderer");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
const testInvalidStatus = (expectedAnswer, isSingleInput) => {
  const answers = isSingleInput ? [expectedAnswer[0] || expectedAnswer[1]] : expectedAnswer;
  const textBoxes = _utils.screen.getAllByRole('textbox');
  answers.forEach((answer, index) => {
    const textBox = textBoxes[index];
    (0, _chai.expect)(textBox).to.have.attribute('aria-invalid', answer ? 'true' : 'false');
  });
};
const dateParser = value => {
  return value.map(date => date === null ? date : _pickersUtils.adapterToUse.date(new Date(...date)));
};
const testTextFieldKeyboardRangeValidation = (ElementToTest, getOptions) => {
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
      const onErrorMock = (0, _sinon.spy)();
      render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock
      }));
      (0, _chai.expect)(onErrorMock.callCount).to.equal(0);
      (0, _createRenderer.act)(() => {
        dateParser([[2018, 0, 2, 12, 0, 0], [2018, 0, 1, 11, 0, 0]]).forEach((date, index) => {
          inputValue(date, {
            setEndDate: index === 1
          });
        });
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['invalidRange', 'invalidRange']);
      testInvalidStatus([true, true], isSingleInput);
    });
    it('should apply shouldDisableDate', function test() {
      if (!withDate) {
        return;
      }
      const onErrorMock = (0, _sinon.spy)();
      const {
        setProps
      } = render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        shouldDisableDate: date => _pickersUtils.adapterToUse.isAfter(date, _pickersUtils.adapterToUse.date(new Date(2018, 2, 11)))
      }));
      (0, _createRenderer.act)(() => {
        dateParser([[2018, 2, 9], [2018, 2, 10]]).forEach((date, index) => {
          inputValue(date, {
            setEndDate: index === 1
          });
        });
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      (0, _createRenderer.act)(() => {
        inputValue(_pickersUtils.adapterToUse.date(new Date(2018, 2, 13)), {
          setEndDate: true
        });
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'shouldDisableDate']);
      testInvalidStatus([false, true], isSingleInput);
      (0, _createRenderer.act)(() => {
        inputValue(_pickersUtils.adapterToUse.date(new Date(2018, 2, 12)));
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(2);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['shouldDisableDate', 'shouldDisableDate']);
      testInvalidStatus([true, true], isSingleInput);
      setProps({
        shouldDisableDate: date => _pickersUtils.adapterToUse.isBefore(date, _pickersUtils.adapterToUse.date(new Date(2018, 2, 13)))
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(3);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['shouldDisableDate', null]);
      testInvalidStatus([true, false], isSingleInput);
    });
    it('should apply disablePast', function test() {
      const onErrorMock = (0, _sinon.spy)();
      const now = _pickersUtils.adapterToUse.date(new Date());
      render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        disablePast: true,
        onError: onErrorMock
      }));
      let past = null;
      if (withDate) {
        past = _pickersUtils.adapterToUse.addDays(now, -1);
      } else if (_pickersUtils.adapterToUse.isSameDay(_pickersUtils.adapterToUse.addHours(now, -1), now)) {
        past = _pickersUtils.adapterToUse.addHours(now, -1);
      }
      if (past === null) {
        return;
      }
      (0, _createRenderer.act)(() => {
        inputValue(_pickersUtils.adapterToUse.date(past));
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['disablePast', null]);
      testInvalidStatus([true, false], isSingleInput);
      (0, _createRenderer.act)(() => {
        inputValue(_pickersUtils.adapterToUse.date(past), {
          setEndDate: true
        });
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(2);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['disablePast', 'disablePast']);
      testInvalidStatus([true, true], isSingleInput);
      (0, _createRenderer.act)(() => {
        inputValue(_pickersUtils.adapterToUse.date(now));
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(3);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'disablePast']);
      testInvalidStatus([false, true], isSingleInput);
    });
    it('should apply disableFuture', function test() {
      const onErrorMock = (0, _sinon.spy)();
      const now = _pickersUtils.adapterToUse.date(new Date());
      render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        disableFuture: true,
        onError: onErrorMock
      }));
      let future = null;
      if (withDate) {
        future = _pickersUtils.adapterToUse.addDays(now, 1);
      } else if (_pickersUtils.adapterToUse.isSameDay(_pickersUtils.adapterToUse.addHours(now, 1), now)) {
        future = _pickersUtils.adapterToUse.addHours(now, 1);
      }
      if (future === null) {
        return;
      }
      (0, _createRenderer.act)(() => {
        inputValue(_pickersUtils.adapterToUse.date(future), {
          setEndDate: true
        });
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'disableFuture']);
      testInvalidStatus([false, true], isSingleInput);
      (0, _createRenderer.act)(() => {
        inputValue(_pickersUtils.adapterToUse.date(future));
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(2);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['disableFuture', 'disableFuture']);
      testInvalidStatus([true, true], isSingleInput);
      (0, _createRenderer.act)(() => {
        inputValue(_pickersUtils.adapterToUse.date(now));
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(3);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'disableFuture']);
      testInvalidStatus([false, true], isSingleInput);
    });
    it('should apply minDate', function test() {
      if (!withDate) {
        return;
      }
      const onErrorMock = (0, _sinon.spy)();
      render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        minDate: _pickersUtils.adapterToUse.date(new Date(2018, 2, 15))
      }));
      (0, _createRenderer.act)(() => {
        dateParser([[2018, 2, 9], [2018, 2, 10]]).forEach((date, index) => {
          inputValue(date, {
            setEndDate: index === 1
          });
        });
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(2);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['minDate', 'minDate']);
      testInvalidStatus([true, true], isSingleInput);
      (0, _createRenderer.act)(() => {
        inputValue(_pickersUtils.adapterToUse.date(new Date(2018, 2, 15)));
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(3);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'minDate']);
      testInvalidStatus([false, true], isSingleInput);
      (0, _createRenderer.act)(() => {
        inputValue(_pickersUtils.adapterToUse.date(new Date(2018, 2, 16)), {
          setEndDate: true
        });
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(4);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, null]);
      testInvalidStatus([false, false], isSingleInput);
    });
    it('should apply maxDate', function test() {
      if (!withDate) {
        return;
      }
      const onErrorMock = (0, _sinon.spy)();
      render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        maxDate: _pickersUtils.adapterToUse.date(new Date(2018, 2, 15))
      }));
      (0, _createRenderer.act)(() => {
        dateParser([[2018, 2, 15], [2018, 2, 17]]).forEach((date, index) => {
          inputValue(date, {
            setEndDate: index === 1
          });
        });
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'maxDate']);
      testInvalidStatus([false, true], isSingleInput);
      (0, _createRenderer.act)(() => {
        inputValue(_pickersUtils.adapterToUse.date(new Date(2018, 2, 16)));
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(2);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['maxDate', 'maxDate']);
      testInvalidStatus([true, true], isSingleInput);
    });
    it('should apply minTime', function test() {
      if (!withTime) {
        return;
      }
      const onErrorMock = (0, _sinon.spy)();
      render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        minTime: _pickersUtils.adapterToUse.date(new Date(2018, 2, 10, 12, 0, 0))
      }));
      (0, _createRenderer.act)(() => {
        dateParser([[2018, 2, 10, 9, 0, 0], [2018, 2, 10, 10, 0, 0]]).forEach((date, index) => {
          inputValue(date, {
            setEndDate: index === 1
          });
        });
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(2);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['minTime', 'minTime']);
      testInvalidStatus([true, true], isSingleInput);
      (0, _createRenderer.act)(() => {
        inputValue(_pickersUtils.adapterToUse.date(new Date(2018, 2, 10, 12, 10, 0)), {
          setEndDate: true
        });
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(3);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['minTime', null]);
      testInvalidStatus([true, false], isSingleInput);
      (0, _createRenderer.act)(() => {
        inputValue(_pickersUtils.adapterToUse.date(new Date(2018, 2, 10, 12, 5, 0)));
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(4);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, null]);
      testInvalidStatus([false, false], isSingleInput);
    });
    it('should apply maxTime', function test() {
      if (!withTime) {
        return;
      }
      const onErrorMock = (0, _sinon.spy)();
      render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        maxTime: _pickersUtils.adapterToUse.date(new Date(2018, 2, 10, 12, 0))
      }));
      (0, _createRenderer.act)(() => {
        dateParser([[2018, 2, 10, 9, 0, 0], [2018, 2, 10, 12, 15, 0]]).forEach((date, index) => {
          inputValue(date, {
            setEndDate: index === 1
          });
        });
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'maxTime']);
      testInvalidStatus([false, true], isSingleInput);
      (0, _createRenderer.act)(() => {
        inputValue(_pickersUtils.adapterToUse.date(new Date(2018, 2, 10, 12, 5, 0)));
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(2);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['maxTime', 'maxTime']);
      testInvalidStatus([true, true], isSingleInput);
    });
  });
};
exports.testTextFieldKeyboardRangeValidation = testTextFieldKeyboardRangeValidation;
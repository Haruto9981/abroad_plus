"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.testTextFieldRangeValidation = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var React = _interopRequireWildcard(require("react"));
var _chai = require("chai");
var _sinon = require("sinon");
var _utils = require("@mui/monorepo/test/utils");
var _pickersUtils = require("test/utils/pickers-utils");
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
const testTextFieldRangeValidation = (ElementToTest, getOptions) => {
  const {
    componentFamily,
    render,
    isSingleInput,
    withDate,
    withTime
  } = getOptions();
  if (!['picker', 'field'].includes(componentFamily)) {
    return;
  }
  describe('text field:', () => {
    it('should accept single day range', () => {
      const onErrorMock = (0, _sinon.spy)();
      render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        value: dateParser([[2018, 0, 1, 10, 15, 0], [2018, 0, 1, 10, 15, 0]])
      }));
      (0, _chai.expect)(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
    });
    it('should not accept end date prior to start state', () => {
      const onErrorMock = (0, _sinon.spy)();
      render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        value: dateParser([[2018, 0, 2], [2018, 0, 1]])
      }));
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
        value: dateParser([[2018, 2, 9], [2018, 2, 10]]),
        shouldDisableDate: date => _pickersUtils.adapterToUse.isAfter(date, _pickersUtils.adapterToUse.date(new Date(2018, 2, 10)))
      }));
      (0, _chai.expect)(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 9], [2018, 2, 13]])
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'shouldDisableDate']);
      testInvalidStatus([false, true], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 12], [2018, 2, 13]])
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(2);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['shouldDisableDate', 'shouldDisableDate']);
      testInvalidStatus([true, true], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 12], [2018, 2, 13]]),
        shouldDisableDate: date => _pickersUtils.adapterToUse.isBefore(date, _pickersUtils.adapterToUse.date(new Date(2018, 2, 13)))
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(3);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['shouldDisableDate', null]);
      testInvalidStatus([true, false], isSingleInput);
    });
    it('should apply shouldDisableDate specifically on end date', function test() {
      if (!withDate) {
        return;
      }
      const onErrorMock = (0, _sinon.spy)();
      const {
        setProps
      } = render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        value: dateParser([[2018, 2, 9], [2018, 2, 10]]),
        shouldDisableDate: (date, position) => position === 'end' ? _pickersUtils.adapterToUse.isAfter(date, _pickersUtils.adapterToUse.date(new Date(2018, 2, 10))) : false
      }));
      (0, _chai.expect)(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 9], [2018, 2, 13]])
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'shouldDisableDate']);
      testInvalidStatus([false, true], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 12], [2018, 2, 13]])
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'shouldDisableDate']);
      testInvalidStatus([false, true], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 12], [2018, 2, 13]]),
        shouldDisableDate: (date, position) => position === 'end' ? _pickersUtils.adapterToUse.isBefore(date, _pickersUtils.adapterToUse.date(new Date(2018, 2, 13))) : false
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(2);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, null]);
      testInvalidStatus([false, false], isSingleInput);
    });
    it('should apply shouldDisableDate specifically on start date', function test() {
      if (!withDate) {
        return;
      }
      const onErrorMock = (0, _sinon.spy)();
      const {
        setProps
      } = render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        value: dateParser([[2018, 2, 9], [2018, 2, 10]]),
        shouldDisableDate: (date, position) => position === 'start' ? _pickersUtils.adapterToUse.isAfter(date, _pickersUtils.adapterToUse.date(new Date(2018, 2, 10))) : false
      }));
      (0, _chai.expect)(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 9], [2018, 2, 13]])
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 12], [2018, 2, 13]])
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['shouldDisableDate', null]);
      testInvalidStatus([true, false], isSingleInput);
      setProps({
        shouldDisableDate: (date, position) => position === 'start' ? _pickersUtils.adapterToUse.isBefore(date, _pickersUtils.adapterToUse.date(new Date(2018, 2, 13))) : false
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      testInvalidStatus([true, false], isSingleInput);
    });
    it('should apply disablePast', function test() {
      const onErrorMock = (0, _sinon.spy)();
      let now;
      function WithFakeTimer(props) {
        now = _pickersUtils.adapterToUse.date(new Date());
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, (0, _extends2.default)({
          value: [now, now]
        }, props));
      }
      const {
        setProps
      } = render( /*#__PURE__*/(0, _jsxRuntime.jsx)(WithFakeTimer, {
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
      setProps({
        value: [past, now]
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['disablePast', null]);
      testInvalidStatus([true, false], isSingleInput);
      setProps({
        value: [past, past]
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(2);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['disablePast', 'disablePast']);
      testInvalidStatus([true, true], isSingleInput);
    });
    it('should apply disableFuture', function test() {
      const onErrorMock = (0, _sinon.spy)();
      let now;
      function WithFakeTimer(props) {
        now = _pickersUtils.adapterToUse.date(new Date());
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, (0, _extends2.default)({
          value: [now, now]
        }, props));
      }
      const {
        setProps
      } = render( /*#__PURE__*/(0, _jsxRuntime.jsx)(WithFakeTimer, {
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
      setProps({
        value: [now, future]
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'disableFuture']);
      testInvalidStatus([false, true], isSingleInput);
      setProps({
        value: [future, future]
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(2);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['disableFuture', 'disableFuture']);
      testInvalidStatus([true, true], isSingleInput);
    });
    it('should apply minDate', function test() {
      if (!withDate) {
        return;
      }
      const onErrorMock = (0, _sinon.spy)();
      const {
        setProps
      } = render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        value: dateParser([[2018, 2, 9], [2018, 2, 10]]),
        minDate: _pickersUtils.adapterToUse.date(new Date(2018, 2, 15))
      }));
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['minDate', 'minDate']);
      testInvalidStatus([true, true], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 9], [2018, 2, 15]])
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(2);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['minDate', null]);
      testInvalidStatus([true, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 16], [2018, 2, 17]])
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(3);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, null]);
      testInvalidStatus([false, false], isSingleInput);
    });
    it('should apply minDate when only first field is filled', function test() {
      if (!withDate) {
        return;
      }
      const onErrorMock = (0, _sinon.spy)();
      const {
        setProps
      } = render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        value: dateParser([[2018, 2, 9], null]),
        minDate: _pickersUtils.adapterToUse.date(new Date(2018, 2, 11))
      }));
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['minDate', null]);
      testInvalidStatus([true, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 16], null])
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(2);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, null]);
      testInvalidStatus([false, false], isSingleInput);
    });
    it('should apply minDate when only second field is filled', function test() {
      if (!withDate) {
        return;
      }
      const onErrorMock = (0, _sinon.spy)();
      const {
        setProps
      } = render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        value: dateParser([null, [2018, 2, 9]]),
        minDate: _pickersUtils.adapterToUse.date(new Date(2018, 2, 15))
      }));
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'minDate']);
      testInvalidStatus([false, true], isSingleInput);
      setProps({
        value: dateParser([null, [2018, 2, 16]])
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(2);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, null]);
      testInvalidStatus([false, false], isSingleInput);
    });
    it('should apply maxDate', function test() {
      if (!withDate) {
        return;
      }
      const onErrorMock = (0, _sinon.spy)();
      const {
        setProps
      } = render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        value: dateParser([[2018, 2, 9], [2018, 2, 10]]),
        maxDate: _pickersUtils.adapterToUse.date(new Date(2018, 2, 15))
      }));
      (0, _chai.expect)(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 15], [2018, 2, 17]])
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'maxDate']);
      testInvalidStatus([false, true], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 16], [2018, 2, 17]])
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
      const {
        setProps
      } = render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        value: dateParser([[2018, 2, 10, 9, 0, 0], [2018, 2, 10, 10, 0, 0]]),
        minTime: _pickersUtils.adapterToUse.date(new Date(2018, 2, 10, 12, 0))
      }));
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['minTime', 'minTime']);
      testInvalidStatus([true, true], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 10, 9, 0, 0], [2018, 2, 10, 12, 5, 0]])
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(2);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['minTime', null]);
      testInvalidStatus([true, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 10, 12, 15, 0], [2018, 2, 10, 18, 0, 0]])
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(3);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, null]);
      testInvalidStatus([false, false], isSingleInput);
    });
    it('should ignore date when applying minTime', function test() {
      if (!withTime) {
        return;
      }
      const onErrorMock = (0, _sinon.spy)();
      const {
        setProps
      } = render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        value: dateParser([[2018, 2, 5, 9, 0, 0], [2018, 2, 15, 10, 0, 0]]),
        minTime: _pickersUtils.adapterToUse.date(new Date(2018, 2, 10, 12, 0))
      }));
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['minTime', 'minTime']);
      testInvalidStatus([true, true], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 5, 15, 0, 0], [2018, 2, 15, 16, 5, 0]])
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(2);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, null]);
      testInvalidStatus([false, false], isSingleInput);
    });
    it('should apply minTime when only first field is filled', function test() {
      if (!withTime) {
        return;
      }
      const onErrorMock = (0, _sinon.spy)();
      const {
        setProps
      } = render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        value: dateParser([[2018, 1, 1, 15], null]),
        minTime: _pickersUtils.adapterToUse.date(new Date(2018, 1, 1, 12))
      }));
      (0, _chai.expect)(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 1, 1, 5], null])
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['minTime', null]);
      testInvalidStatus([true, false], isSingleInput);
    });
    it('should apply minTime when only second field is filled', function test() {
      if (!withTime) {
        return;
      }
      const onErrorMock = (0, _sinon.spy)();
      const {
        setProps
      } = render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        value: dateParser([null, [2018, 1, 1, 15]]),
        minTime: _pickersUtils.adapterToUse.date(new Date(2018, 1, 1, 12))
      }));
      (0, _chai.expect)(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      setProps({
        value: dateParser([null, [2018, 1, 1, 5]])
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'minTime']);
      testInvalidStatus([false, true], isSingleInput);
    });
    it('should apply maxTime', function test() {
      if (!withTime) {
        return;
      }
      const onErrorMock = (0, _sinon.spy)();
      const {
        setProps
      } = render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        value: dateParser([[2018, 2, 10, 9, 0, 0], [2018, 2, 10, 10, 0, 0]]),
        maxTime: _pickersUtils.adapterToUse.date(new Date(2018, 2, 10, 12, 0))
      }));
      (0, _chai.expect)(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 10, 9, 0, 0], [2018, 2, 10, 12, 5, 0]])
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'maxTime']);
      testInvalidStatus([false, true], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 10, 12, 15, 0], [2018, 2, 10, 18, 0, 0]])
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(2);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['maxTime', 'maxTime']);
      testInvalidStatus([true, true], isSingleInput);
    });
    it('should ignore date when applying maxTime', function test() {
      if (!withTime) {
        return;
      }
      const onErrorMock = (0, _sinon.spy)();
      const {
        setProps
      } = render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        value: dateParser([[2018, 2, 5, 9, 0, 0], [2018, 2, 15, 10, 0, 0]]),
        maxTime: _pickersUtils.adapterToUse.date(new Date(2018, 2, 10, 12, 0))
      }));
      (0, _chai.expect)(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      setProps({
        value: dateParser([[2018, 2, 5, 15, 0, 0], [2018, 2, 15, 16, 5, 0]])
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['maxTime', 'maxTime']);
      testInvalidStatus([true, true], isSingleInput);
    });
    it('should apply maxDateTime', function test() {
      if (!withDate || !withTime) {
        // prop only available on DateTime pickers
        return;
      }
      const onErrorMock = (0, _sinon.spy)();
      const {
        setProps
      } = render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        value: dateParser([[2018, 2, 1, 9, 0, 0], [2018, 2, 2, 12, 0, 0]]),
        maxDateTime: _pickersUtils.adapterToUse.date(new Date(2018, 2, 2, 13, 0))
      }));
      (0, _chai.expect)(onErrorMock.callCount).to.equal(0);
      testInvalidStatus([false, false], isSingleInput);
      setProps({
        maxDateTime: _pickersUtils.adapterToUse.date(new Date(2018, 2, 2, 8, 0))
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, 'maxTime']);
      testInvalidStatus([false, true], isSingleInput);
      setProps({
        maxDateTime: _pickersUtils.adapterToUse.date(new Date(2018, 2, 1, 5, 0))
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(2);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['maxTime', 'maxDate']);
      testInvalidStatus([true, true], isSingleInput);
    });
    it('should apply minDateTime', function test() {
      if (!withDate || !withTime) {
        // prop only available on DateTime pickers
        return;
      }
      const onErrorMock = (0, _sinon.spy)();
      const {
        setProps
      } = render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ElementToTest, {
        onError: onErrorMock,
        value: dateParser([[2018, 2, 1, 9, 0, 0], [2018, 2, 2, 12, 0, 0]]),
        minDateTime: _pickersUtils.adapterToUse.date(new Date(2018, 2, 2, 13, 0))
      }));
      (0, _chai.expect)(onErrorMock.callCount).to.equal(1);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['minDate', 'minTime']);
      testInvalidStatus([true, true], isSingleInput);
      setProps({
        minDateTime: _pickersUtils.adapterToUse.date(new Date(2018, 2, 2, 8, 0))
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(2);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal(['minDate', null]);
      testInvalidStatus([true, false], isSingleInput);
      setProps({
        minDateTime: _pickersUtils.adapterToUse.date(new Date(2018, 2, 1, 5, 0))
      });
      (0, _chai.expect)(onErrorMock.callCount).to.equal(3);
      (0, _chai.expect)(onErrorMock.lastCall.args[0]).to.deep.equal([null, null]);
      testInvalidStatus([false, false], isSingleInput);
    });
  });
};
exports.testTextFieldRangeValidation = testTextFieldRangeValidation;
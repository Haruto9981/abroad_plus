"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.describeRangeValidation = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _createDescribe = _interopRequireDefault(require("@mui/monorepo/test/utils/createDescribe"));
var _testDayViewRangeValidation = require("./testDayViewRangeValidation");
var _testTextFieldRangeValidation = require("./testTextFieldRangeValidation");
var _testTextFieldKeyboardRangeValidation = require("./testTextFieldKeyboardRangeValidation");
/* eslint-env mocha */

const TEST_SUITES = [_testDayViewRangeValidation.testDayViewRangeValidation, _testTextFieldRangeValidation.testTextFieldRangeValidation, _testTextFieldKeyboardRangeValidation.testTextFieldKeyboardRangeValidation];
function innerDescribeRangeValidation(ElementToTest, getOptions) {
  const {
    after: runAfterHook = () => {},
    views
  } = getOptions();
  after(runAfterHook);
  function getTestOptions() {
    return (0, _extends2.default)({}, getOptions(), {
      withDate: views.includes('year') || views.includes('month') || views.includes('day'),
      withTime: views.includes('hours') || views.includes('minutes') || views.includes('seconds')
    });
  }
  TEST_SUITES.forEach(testSuite => {
    testSuite(ElementToTest, getTestOptions);
  });
}

/**
 * Tests various aspects of the range picker validation.
 */
const describeRangeValidation = (0, _createDescribe.default)('Range pickers validation API', innerDescribeRangeValidation);
exports.describeRangeValidation = describeRangeValidation;
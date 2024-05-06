import _extends from "@babel/runtime/helpers/esm/extends";
/* eslint-env mocha */

import createDescribe from '@mui/monorepo/test/utils/createDescribe';
import { testDayViewRangeValidation } from './testDayViewRangeValidation';
import { testTextFieldRangeValidation } from './testTextFieldRangeValidation';
import { testTextFieldKeyboardRangeValidation } from './testTextFieldKeyboardRangeValidation';
var TEST_SUITES = [testDayViewRangeValidation, testTextFieldRangeValidation, testTextFieldKeyboardRangeValidation];
function innerDescribeRangeValidation(ElementToTest, getOptions) {
  var _getOptions = getOptions(),
    _getOptions$after = _getOptions.after,
    runAfterHook = _getOptions$after === void 0 ? function () {} : _getOptions$after,
    views = _getOptions.views;
  after(runAfterHook);
  function getTestOptions() {
    return _extends({}, getOptions(), {
      withDate: views.includes('year') || views.includes('month') || views.includes('day'),
      withTime: views.includes('hours') || views.includes('minutes') || views.includes('seconds')
    });
  }
  TEST_SUITES.forEach(function (testSuite) {
    testSuite(ElementToTest, getTestOptions);
  });
}

/**
 * Tests various aspects of the range picker validation.
 */
export var describeRangeValidation = createDescribe('Range pickers validation API', innerDescribeRangeValidation);
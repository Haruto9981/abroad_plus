"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/app/src/pages/index.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\nvar Index = function Index() {\n  _s();\n  var url = 'http://localhost:3000/api/v1/diaries';\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(url, _utils__WEBPACK_IMPORTED_MODULE_1__.fetcher),\n    data = _useSWR.data,\n    error = _useSWR.error;\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: \"An error has occurred.\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 21\n  }, _this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 21\n  }, _this);\n  var diaries = camelcaseKeys(data.diaries);\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: \"Rails\\u758E\\u901A\\u78BA\\u8A8D\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: [\"\\u30EC\\u30B9\\u30DD\\u30F3\\u30B9\\u30E1\\u30C3\\u30BB\\u30FC\\u30B8: \", data.message]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n_s(Index, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_0__[\"default\"]];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFd0I7QUFDUztBQUFBO0FBQUE7QUFFakMsSUFBTU0sS0FBZSxHQUFHLFNBQWxCQSxLQUFlQSxDQUFBLEVBQVM7RUFBQUMsRUFBQTtFQUM1QixJQUFNQyxHQUFHLEdBQUcsc0NBQXNDO0VBQ2xELElBQUFDLE9BQUEsR0FBd0JULCtDQUFNLENBQUNRLEdBQUcsRUFBRVAsMkNBQU8sQ0FBQztJQUFwQ1MsSUFBSSxHQUFBRCxPQUFBLENBQUpDLElBQUk7SUFBRUMsS0FBSyxHQUFBRixPQUFBLENBQUxFLEtBQUs7RUFDbkIsSUFBSUEsS0FBSyxFQUFFLE9BQU9SLHNFQUFBO0lBQUFTLFFBQUEsRUFBSztFQUFzQjtJQUFBQyxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsR0FBQUMsS0FBSyxDQUFDO0VBQ25ELElBQUksQ0FBQ1AsSUFBSSxFQUFFLE9BQU9QLHNFQUFBO0lBQUFTLFFBQUEsRUFBSztFQUFVO0lBQUFDLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxHQUFBQyxLQUFLLENBQUM7RUFFdkMsSUFBTUMsT0FBTyxHQUFHQyxhQUFhLENBQUNULElBQUksQ0FBQ1EsT0FBTyxDQUFDO0VBRTNDLE9BQ0VmLHNFQUFBLENBQUFFLG9FQUFBO0lBQUFPLFFBQUEsR0FDRVQsc0VBQUE7TUFBQVMsUUFBQSxFQUFLO0lBQVM7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLEdBQUFDLEtBQUssQ0FBQyxFQUNwQmQsc0VBQUE7TUFBQVMsUUFBQSxHQUFLLGdFQUFZLEVBQUNGLElBQUksQ0FBQ1UsT0FBTztJQUFBO01BQUFQLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxHQUFBQyxLQUFNLENBQUM7RUFBQSxlQUNyQyxDQUFDO0FBRVAsQ0FBQztBQUFBVixFQUFBLENBZEtELEtBQWU7RUFBQSxRQUVLTiwyQ0FBTTtBQUFBO0FBQUFxQixFQUFBLEdBRjFCZixLQUFlO0FBZ0JyQiwrREFBZUEsS0FBSztBQUFBLElBQUFlLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRQYWdlIH0gZnJvbSAnbmV4dCdcblxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnQC91dGlscydcblxuY29uc3QgSW5kZXg6IE5leHRQYWdlID0gKCkgPT4ge1xuICBjb25zdCB1cmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS92MS9kaWFyaWVzJ1xuICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IodXJsLCBmZXRjaGVyKVxuICBpZiAoZXJyb3IpIHJldHVybiA8ZGl2PkFuIGVycm9yIGhhcyBvY2N1cnJlZC48L2Rpdj5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG5cbiAgY29uc3QgZGlhcmllcyA9IGNhbWVsY2FzZUtleXMoZGF0YS5kaWFyaWVzKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+UmFpbHPnlo7pgJrnorroqo08L2Rpdj5cbiAgICAgIDxkaXY+44Os44K544Od44Oz44K544Oh44OD44K744O844K4OiB7ZGF0YS5tZXNzYWdlfTwvZGl2PlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXSwibmFtZXMiOlsidXNlU1dSIiwiZmV0Y2hlciIsImpzeERFViIsIl9qc3hERVYiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsIkluZGV4IiwiX3MiLCJ1cmwiLCJfdXNlU1dSIiwiZGF0YSIsImVycm9yIiwiY2hpbGRyZW4iLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfdGhpcyIsImRpYXJpZXMiLCJjYW1lbGNhc2VLZXlzIiwibWVzc2FnZSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});
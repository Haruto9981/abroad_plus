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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var camelcase_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! camelcase-keys */ \"./node_modules/camelcase-keys/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/core/index.mjs\");\n/* harmony import */ var _components_DiaryCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/DiaryCard */ \"./src/components/DiaryCard.tsx\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils */ \"./src/utils/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/app/src/pages/index.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar Index = function Index() {\n  _s();\n  var url = 'http://localhost:3000/api/v1/diaries';\n  var _useSWR = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url, _utils__WEBPACK_IMPORTED_MODULE_3__.fetcher),\n    data = _useSWR.data,\n    error = _useSWR.error;\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    children: \"An error has occurred.\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 21\n  }, _this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    children: \"Loading...\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 26,\n    columnNumber: 21\n  }, _this);\n  var diaries = (0,camelcase_keys__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(data.diaries);\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Box, {\n    sx: {\n      backgroundColor: '#ffe0b6',\n      minHeight: '100vh'\n    },\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Container, {\n      maxWidth: \"md\",\n      sx: {\n        pt: 6\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n        container: true,\n        spacing: 4,\n        children: diaries.map(function (diary, i) {\n          return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Grid, {\n            item: true,\n            xs: 12,\n            md: 12,\n            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n              href: '/diaries/' + diary.id,\n              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_DiaryCard__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                title: diary.title,\n                content: diary.content,\n                word_count: diary.wordCcount,\n                fromToday: diary.fromToday,\n                userName: diary.user.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 37,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 15\n            }, _this)\n          }, i, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n_s(Index, \"r2QYs02BSrn+Eu/1uMGZi8N+HnQ=\", false, function () {\n  return [swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]];\n});\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU07QUFBQTtBQUFBeUMsRUFBQSxHQUYxQnBDLEtBQWU7QUErQnJCLCtEQUFlQSxLQUFLO0FBQUEsSUFBQW9DLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEdyaWQsIENvbnRhaW5lciB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5pbXBvcnQgY2FtZWxjYXNlS2V5cyBmcm9tICdjYW1lbGNhc2Uta2V5cydcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXG5pbXBvcnQgRGlhcnlDYXJkIGZyb20gJ0AvY29tcG9uZW50cy9EaWFyeUNhcmQnXG5pbXBvcnQgeyBmZXRjaGVyIH0gZnJvbSAnQC91dGlscydcblxudHlwZSBEaWFyeVByb3BzID0ge1xuICBpZDogbnVtYmVyXG4gIHRpdGxlOiBzdHJpbmdcbiAgY29udGVudDogc3RyaW5nXG4gIGltYWdlVXJsOiBzdHJpbmdcbiAgd29yZENvdW50OiBudW1iZXJcbiAgY3JlYXRlZEF0OiBzdHJpbmdcbiAgZnJvbVRvZGF5OiBzdHJpbmdcbiAgdXNlcjoge1xuICAgIG5hbWU6IHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IEluZGV4OiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgdXJsID0gJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdjEvZGlhcmllcydcbiAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gdXNlU1dSKHVybCwgZmV0Y2hlcilcbiAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5BbiBlcnJvciBoYXMgb2NjdXJyZWQuPC9kaXY+XG4gIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxuXG4gIGNvbnN0IGRpYXJpZXMgPSBjYW1lbGNhc2VLZXlzKGRhdGEuZGlhcmllcylcblxuICByZXR1cm4gKFxuICAgIDxCb3ggc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnI2ZmZTBiNicsIG1pbkhlaWdodDogJzEwMHZoJyB9fT5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJtZFwiIHN4PXt7IHB0OiA2IH19PlxuICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17NH0+XG4gICAgICAgICAge2RpYXJpZXMubWFwKChkaWFyeTogRGlhcnlQcm9wcywgaTogbnVtYmVyKSA9PiAoXG4gICAgICAgICAgICA8R3JpZCBrZXk9e2l9IGl0ZW0geHM9ezEyfSBtZD17MTJ9PlxuICAgICAgICAgICAgICA8TGluayBocmVmPXsnL2RpYXJpZXMvJyArIGRpYXJ5LmlkfT5cbiAgICAgICAgICAgICAgICA8RGlhcnlDYXJkXG4gICAgICAgICAgICAgICAgICB0aXRsZT17ZGlhcnkudGl0bGV9XG4gICAgICAgICAgICAgICAgICBjb250ZW50PXtkaWFyeS5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgd29yZF9jb3VudD17ZGlhcnkud29yZENjb3VudH1cbiAgICAgICAgICAgICAgICAgIGZyb21Ub2RheT17ZGlhcnkuZnJvbVRvZGF5fVxuICAgICAgICAgICAgICAgICAgdXNlck5hbWU9e2RpYXJ5LnVzZXIubmFtZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L0dyaWQ+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvR3JpZD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4XG4iXSwibmFtZXMiOlsiQm94IiwiR3JpZCIsIkNvbnRhaW5lciIsImNhbWVsY2FzZUtleXMiLCJMaW5rIiwidXNlU1dSIiwiRGlhcnlDYXJkIiwiZmV0Y2hlciIsImpzeERFViIsIl9qc3hERVYiLCJJbmRleCIsIl9zIiwidXJsIiwiX3VzZVNXUiIsImRhdGEiLCJlcnJvciIsImNoaWxkcmVuIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3RoaXMiLCJkaWFyaWVzIiwic3giLCJiYWNrZ3JvdW5kQ29sb3IiLCJtaW5IZWlnaHQiLCJtYXhXaWR0aCIsInB0IiwiY29udGFpbmVyIiwic3BhY2luZyIsIm1hcCIsImRpYXJ5IiwiaSIsIml0ZW0iLCJ4cyIsIm1kIiwiaHJlZiIsImlkIiwidGl0bGUiLCJjb250ZW50Iiwid29yZF9jb3VudCIsIndvcmRDY291bnQiLCJmcm9tVG9kYXkiLCJ1c2VyTmFtZSIsInVzZXIiLCJuYW1lIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});
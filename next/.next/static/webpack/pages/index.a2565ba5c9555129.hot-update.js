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

/***/ "./src/components/DiaryCard.tsx":
/*!**************************************!*\
  !*** ./src/components/DiaryCard.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/app/src/components/DiaryCard.tsx\",\n  _this = undefined;\n\n\nvar omit = function omit(text) {\n  return function (len) {\n    return function (ellipsis) {\n      return text.length >= len ? text.slice(0, len - ellipsis.length) + ellipsis : text;\n    };\n  };\n};\nvar DiaryCard = function DiaryCard(props) {\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        sx: {\n          display: 'flex',\n          justifyContent: 'space-between'\n        },\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n          component: \"h3\",\n          sx: {\n            mb: 2,\n            fontSize: 20,\n            fontWeight: 'bold',\n            lineHeight: 1.5\n          },\n          children: omit(props.title)(40)('...')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n          sx: {\n            fontSize: 16\n          },\n          children: [props.wordCount, \" words\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 31,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n        sx: {\n          mb: 2\n        },\n        children: omit(props.content)(200)('...')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        sx: {\n          display: 'flex',\n          justifyContent: 'space-between'\n        },\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n          sx: {\n            fontSize: 12\n          },\n          children: props.userName\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n          sx: {\n            fontSize: 12\n          },\n          children: props.fromToday\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, _this);\n};\n_c = DiaryCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DiaryCard);\nvar _c;\n$RefreshReg$(_c, \"DiaryCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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N0QsQ0FBQztJQUFBO01BQUFKLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxHQUFBQyxLQUNLO0VBQUM7SUFBQUosUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLEdBQUFDLEtBQ1YsQ0FBQztBQUVYLENBQUM7QUFBQUssRUFBQSxHQTVCS3JCLFNBQVM7QUE4QmYsK0RBQWVBLFNBQVM7QUFBQSxJQUFBcUIsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRGlhcnlDYXJkLnRzeD85M2RhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgQ2FyZCwgQ2FyZENvbnRlbnQsIFR5cG9ncmFwaHkgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuXG50eXBlIGRpYXJ5Q2FyZFByb3BzID0ge1xuICB0aXRsZTogc3RyaW5nXG4gIGNvbnRlbnQ6IHN0cmluZ1xuICBpbWFnZVVybDogc3RyaW5nXG4gIHdvcmRDb3VudDogbnVtYmVyXG4gIGZyb21Ub2RheTogc3RyaW5nXG4gIHVzZXJOYW1lOiBzdHJpbmdcbn1cblxuY29uc3Qgb21pdCA9ICh0ZXh0OiBzdHJpbmcpID0+IChsZW46IG51bWJlcikgPT4gKGVsbGlwc2lzOiBzdHJpbmcpID0+XG4gIHRleHQubGVuZ3RoID49IGxlbiA/IHRleHQuc2xpY2UoMCwgbGVuIC0gZWxsaXBzaXMubGVuZ3RoKSArIGVsbGlwc2lzIDogdGV4dFxuXG5jb25zdCBEaWFyeUNhcmQgPSAocHJvcHM6IGRpYXJ5Q2FyZFByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPENhcmQ+XG4gICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICBjb21wb25lbnQ9XCJoM1wiXG4gICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICBtYjogMixcbiAgICAgICAgICAgICAgZm9udFNpemU6IDIwLFxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge29taXQocHJvcHMudGl0bGUpKDQwKSgnLi4uJyl9XG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRTaXplOiAxNiB9fT57cHJvcHMud29yZENvdW50fSB3b3JkczwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IG1iOiAyIH19PlxuICAgICAgICAgIHtvbWl0KHByb3BzLmNvbnRlbnQpKDIwMCkoJy4uLicpfVxuICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgIDxCb3ggc3g9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRTaXplOiAxMiB9fT57cHJvcHMudXNlck5hbWV9PC9UeXBvZ3JhcGh5PlxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHN4PXt7IGZvbnRTaXplOiAxMiB9fT57cHJvcHMuZnJvbVRvZGF5fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWFyeUNhcmRcbiJdLCJuYW1lcyI6WyJCb3giLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJUeXBvZ3JhcGh5IiwianN4REVWIiwiX2pzeERFViIsIm9taXQiLCJ0ZXh0IiwibGVuIiwiZWxsaXBzaXMiLCJsZW5ndGgiLCJzbGljZSIsIkRpYXJ5Q2FyZCIsInByb3BzIiwiY2hpbGRyZW4iLCJzeCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImNvbXBvbmVudCIsIm1iIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsInRpdGxlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3RoaXMiLCJ3b3JkQ291bnQiLCJjb250ZW50IiwidXNlck5hbWUiLCJmcm9tVG9kYXkiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/DiaryCard.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/app/src/components/DiaryCard.tsx\",\n  _this = undefined;\n\n\nvar omit = function omit(text) {\n  return function (len) {\n    return function (ellipsis) {\n      return text.length >= len ? text.slice(0, len - ellipsis.length) + ellipsis : text;\n    };\n  };\n};\nvar DiaryCard = function DiaryCard(props) {\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        sx: {\n          display: 'flex',\n          justifyContent: 'space-between',\n          mb: 4\n        },\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n          sx: {\n            fontSize: 12\n          },\n          children: props.userName\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 20,\n          columnNumber: 11\n        }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n          sx: {\n            fontSize: 12\n          },\n          children: props.fromToday\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 9\n      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        sx: {\n          display: 'flex',\n          justifyContent: 'space-between'\n        },\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n          component: \"h3\",\n          sx: {\n            mb: 2,\n            fontSize: 20,\n            fontWeight: 'bold',\n            lineHeight: 1.5\n          },\n          children: omit(props.title)(45)('...')\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 11\n        }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n          sx: {\n            fontSize: 16\n          },\n          children: [props.wordCount, \" words\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n        sx: {\n          mb: 2\n        },\n        children: omit(props.content)(45)('...')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 5\n  }, _this);\n};\n_c = DiaryCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DiaryCard);\nvar _c;\n$RefreshReg$(_c, \"DiaryCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WUFBQTtNQUFBLEdBQUFDLEtBQWEsQ0FBQztJQUFBO01BQUFKLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxHQUFBQyxLQUM3RDtFQUFDO0lBQUFKLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxHQUFBQyxLQUNWLENBQUM7QUFFWCxDQUFDO0FBQUFRLEVBQUEsR0ExQktyQixTQUFTO0FBNEJmLCtEQUFlQSxTQUFTO0FBQUEsSUFBQXFCLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0RpYXJ5Q2FyZC50c3g/OTNkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIENhcmQsIENhcmRDb250ZW50LCBUeXBvZ3JhcGh5IH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcblxudHlwZSBkaWFyeUNhcmRQcm9wcyA9IHtcbiAgdGl0bGU6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbiAgaW1hZ2VVcmw6IHN0cmluZ1xuICB3b3JkQ291bnQ6IG51bWJlclxuICBmcm9tVG9kYXk6IHN0cmluZ1xuICB1c2VyTmFtZTogc3RyaW5nXG59XG5cbmNvbnN0IG9taXQgPSAodGV4dDogc3RyaW5nKSA9PiAobGVuOiBudW1iZXIpID0+IChlbGxpcHNpczogc3RyaW5nKSA9PlxuICB0ZXh0Lmxlbmd0aCA+PSBsZW4gPyB0ZXh0LnNsaWNlKDAsIGxlbiAtIGVsbGlwc2lzLmxlbmd0aCkgKyBlbGxpcHNpcyA6IHRleHRcblxuY29uc3QgRGlhcnlDYXJkID0gKHByb3BzOiBkaWFyeUNhcmRQcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxDYXJkPlxuICAgICAgPENhcmRDb250ZW50PlxuICAgICAgICA8Qm94IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJywgbWI6IDQgfX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDEyIH19Pntwcm9wcy51c2VyTmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDEyIH19Pntwcm9wcy5mcm9tVG9kYXl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICAgIGNvbXBvbmVudD1cImgzXCJcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIG1iOiAyLFxuICAgICAgICAgICAgICBmb250U2l6ZTogMjAsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogMS41LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7b21pdChwcm9wcy50aXRsZSkoNDUpKCcuLi4nKX1cbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDE2IH19Pntwcm9wcy53b3JkQ291bnR9IHdvcmRzPC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgbWI6IDIgfX0+e29taXQocHJvcHMuY29udGVudCkoNDUpKCcuLi4nKX08L1R5cG9ncmFwaHk+XG4gICAgICA8L0NhcmRDb250ZW50PlxuICAgIDwvQ2FyZD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBEaWFyeUNhcmRcbiJdLCJuYW1lcyI6WyJCb3giLCJDYXJkIiwiQ2FyZENvbnRlbnQiLCJUeXBvZ3JhcGh5IiwianN4REVWIiwiX2pzeERFViIsIm9taXQiLCJ0ZXh0IiwibGVuIiwiZWxsaXBzaXMiLCJsZW5ndGgiLCJzbGljZSIsIkRpYXJ5Q2FyZCIsInByb3BzIiwiY2hpbGRyZW4iLCJzeCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIm1iIiwiZm9udFNpemUiLCJ1c2VyTmFtZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl90aGlzIiwiZnJvbVRvZGF5IiwiY29tcG9uZW50IiwiZm9udFdlaWdodCIsImxpbmVIZWlnaHQiLCJ0aXRsZSIsIndvcmRDb3VudCIsImNvbnRlbnQiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/DiaryCard.tsx\n"));

/***/ })

});
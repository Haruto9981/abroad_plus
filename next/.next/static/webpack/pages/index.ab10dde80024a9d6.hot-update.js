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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/app/src/components/DiaryCard.tsx\",\n  _this = undefined;\n\n\nvar omit = function omit(text) {\n  return function (len) {\n    return function (ellipsis) {\n      return text.length >= len ? text.slice(0, len - ellipsis.length) + ellipsis : text;\n    };\n  };\n};\nvar DiaryCard = function DiaryCard(props) {\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Card, {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.CardContent, {\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n        component: \"h3\",\n        sx: {\n          mb: 2,\n          minHeight: 48,\n          fontSize: 16,\n          fontWeight: 'bold',\n          lineHeight: 1.5\n        },\n        children: omit(props.title)(45)('...')\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 9\n      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Box, {\n        sx: {\n          display: 'flex',\n          justifyContent: 'space-between'\n        },\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n          sx: {\n            fontSize: 12\n          },\n          children: props.userName\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 11\n        }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n          sx: {\n            fontSize: 12\n          },\n          children: props.fromToday\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, _this);\n};\n_c = DiaryCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DiaryCard);\nvar _c;\n$RefreshReg$(_c, \"DiaryCard\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9EaWFyeUNhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtFO0FBQUE7QUFRbEUsSUFBTU0sSUFBSSxHQUFHLFNBQVBBLElBQUlBLENBQUlDLElBQVk7RUFBQSxPQUFLLFVBQUNDLEdBQVc7SUFBQSxPQUFLLFVBQUNDLFFBQWdCO01BQUEsT0FDL0RGLElBQUksQ0FBQ0csTUFBTSxJQUFJRixHQUFHLEdBQUdELElBQUksQ0FBQ0ksS0FBSyxDQUFDLENBQUMsRUFBRUgsR0FBRyxHQUFHQyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxHQUFHRCxRQUFRLEdBQUdGLElBQUk7SUFBQTtFQUFBO0FBQUE7QUFFN0UsSUFBTUssU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUlDLEtBQXFCLEVBQUs7RUFDM0MsT0FDRVIsc0VBQUEsQ0FBQ0osK0NBQUk7SUFBQWEsUUFBQSxFQUNIVCxzRUFBQSxDQUFDSCxzREFBVztNQUFBWSxRQUFBLEdBQ1ZULHNFQUFBLENBQUNGLHFEQUFVO1FBQ1RZLFNBQVMsRUFBQyxJQUFJO1FBQ2RDLEVBQUUsRUFBRTtVQUNGQyxFQUFFLEVBQUUsQ0FBQztVQUNMQyxTQUFTLEVBQUUsRUFBRTtVQUNiQyxRQUFRLEVBQUUsRUFBRTtVQUNaQyxVQUFVLEVBQUUsTUFBTTtVQUNsQkMsVUFBVSxFQUFFO1FBQ2QsQ0FBRTtRQUFBUCxRQUFBLEVBRURSLElBQUksQ0FBQ08sS0FBSyxDQUFDUyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLO01BQUM7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLEdBQUFDLEtBQ25CLENBQUMsRUFDYnRCLHNFQUFBLENBQUNMLDhDQUFHO1FBQUNnQixFQUFFLEVBQUU7VUFBRVksT0FBTyxFQUFFLE1BQU07VUFBRUMsY0FBYyxFQUFFO1FBQWdCLENBQUU7UUFBQWYsUUFBQSxHQUM1RFQsc0VBQUEsQ0FBQ0YscURBQVU7VUFBQ2EsRUFBRSxFQUFFO1lBQUVHLFFBQVEsRUFBRTtVQUFHLENBQUU7VUFBQUwsUUFBQSxFQUFFRCxLQUFLLENBQUNpQjtRQUFRO1VBQUFQLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxHQUFBQyxLQUFhLENBQUMsRUFDL0R0QixzRUFBQSxDQUFDRixxREFBVTtVQUFDYSxFQUFFLEVBQUU7WUFBRUcsUUFBUSxFQUFFO1VBQUcsQ0FBRTtVQUFBTCxRQUFBLEVBQUVELEtBQUssQ0FBQ2tCO1FBQVM7VUFBQVIsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLEdBQUFDLEtBQWEsQ0FBQztNQUFBO1FBQUFKLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxHQUFBQyxLQUM3RCxDQUFDO0lBQUE7TUFBQUosUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLEdBQUFDLEtBQ0s7RUFBQztJQUFBSixRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsR0FBQUMsS0FDVixDQUFDO0FBRVgsQ0FBQztBQUFBSyxFQUFBLEdBdkJLcEIsU0FBUztBQXlCZiwrREFBZUEsU0FBUztBQUFBLElBQUFvQixFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9EaWFyeUNhcmQudHN4PzkzZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDYXJkLCBDYXJkQ29udGVudCwgVHlwb2dyYXBoeSB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXG5cbnR5cGUgZGlhcnlDYXJkUHJvcHMgPSB7XG4gIHRpdGxlOiBzdHJpbmdcbiAgZnJvbVRvZGF5OiBzdHJpbmdcbiAgdXNlck5hbWU6IHN0cmluZ1xufVxuXG5jb25zdCBvbWl0ID0gKHRleHQ6IHN0cmluZykgPT4gKGxlbjogbnVtYmVyKSA9PiAoZWxsaXBzaXM6IHN0cmluZykgPT5cbiAgdGV4dC5sZW5ndGggPj0gbGVuID8gdGV4dC5zbGljZSgwLCBsZW4gLSBlbGxpcHNpcy5sZW5ndGgpICsgZWxsaXBzaXMgOiB0ZXh0XG5cbmNvbnN0IERpYXJ5Q2FyZCA9IChwcm9wczogZGlhcnlDYXJkUHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8Q2FyZD5cbiAgICAgIDxDYXJkQ29udGVudD5cbiAgICAgICAgPFR5cG9ncmFwaHlcbiAgICAgICAgICBjb21wb25lbnQ9XCJoM1wiXG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIG1iOiAyLFxuICAgICAgICAgICAgbWluSGVpZ2h0OiA0OCxcbiAgICAgICAgICAgIGZvbnRTaXplOiAxNixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge29taXQocHJvcHMudGl0bGUpKDQ1KSgnLi4uJyl9XG4gICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicgfX0+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDEyIH19Pntwcm9wcy51c2VyTmFtZX08L1R5cG9ncmFwaHk+XG4gICAgICAgICAgPFR5cG9ncmFwaHkgc3g9e3sgZm9udFNpemU6IDEyIH19Pntwcm9wcy5mcm9tVG9kYXl9PC9UeXBvZ3JhcGh5PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ2FyZENvbnRlbnQ+XG4gICAgPC9DYXJkPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERpYXJ5Q2FyZFxuIl0sIm5hbWVzIjpbIkJveCIsIkNhcmQiLCJDYXJkQ29udGVudCIsIlR5cG9ncmFwaHkiLCJqc3hERVYiLCJfanN4REVWIiwib21pdCIsInRleHQiLCJsZW4iLCJlbGxpcHNpcyIsImxlbmd0aCIsInNsaWNlIiwiRGlhcnlDYXJkIiwicHJvcHMiLCJjaGlsZHJlbiIsImNvbXBvbmVudCIsInN4IiwibWIiLCJtaW5IZWlnaHQiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwidGl0bGUiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfdGhpcyIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInVzZXJOYW1lIiwiZnJvbVRvZGF5IiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/DiaryCard.tsx\n"));

/***/ })

});
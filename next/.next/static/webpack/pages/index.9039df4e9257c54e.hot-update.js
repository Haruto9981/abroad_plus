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

/***/ "./src/components/HomeLinkTab.tsx":
/*!****************************************!*\
  !*** ./src/components/HomeLinkTab.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Tab */ \"./node_modules/@mui/material/Tab/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/app/src/components/HomeLinkTab.tsx\",\n  _this = undefined;\n\n\n\n\n\nvar LinkTab = function LinkTab(_ref) {\n  var label = _ref.label,\n    href = _ref.href,\n    value = _ref.value,\n    selected = _ref.selected;\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n      href: href,\n      legacyBehavior: true,\n      children: selected ? (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        label: label,\n        value: value,\n        className: \"Mui-selected\",\n        sx: {\n          color: '#f15922',\n          borderBottom: '4px solid #f15922',\n          mx: 4,\n          textTransform: 'none'\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }, _this) : (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        label: label,\n        value: value,\n        sx: {\n          mx: 4\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n_c = LinkTab;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkTab);\nvar _c;\n$RefreshReg$(_c, \"LinkTab\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Ib21lTGlua1RhYi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1DO0FBQ0g7QUFDUDtBQUFBO0FBQUE7QUFTekIsSUFBTU8sT0FBd0IsR0FBRyxTQUEzQkEsT0FBd0JBLENBQUFDLElBQUEsRUFBeUM7RUFBQSxJQUFuQ0MsS0FBSyxHQUFBRCxJQUFBLENBQUxDLEtBQUs7SUFBRUMsSUFBSSxHQUFBRixJQUFBLENBQUpFLElBQUk7SUFBRUMsS0FBSyxHQUFBSCxJQUFBLENBQUxHLEtBQUs7SUFBRUMsUUFBUSxHQUFBSixJQUFBLENBQVJJLFFBQVE7RUFDOUQsT0FDRVIsc0VBQUEsQ0FBQUUsb0VBQUE7SUFBQU8sUUFBQSxFQUNFVCxzRUFBQSxDQUFDSCxrREFBUTtNQUFDUyxJQUFJLEVBQUVBLElBQUs7TUFBQ0ksY0FBYztNQUFBRCxRQUFBLEVBQ2pDRCxRQUFRLEdBQ1BSLHNFQUFBLENBQUNKLHlEQUFHO1FBQ0ZTLEtBQUssRUFBRUEsS0FBTTtRQUNiRSxLQUFLLEVBQUVBLEtBQU07UUFDYkksU0FBUyxFQUFDLGNBQWM7UUFDeEJDLEVBQUUsRUFBRTtVQUNGQyxLQUFLLEVBQUUsU0FBUztVQUNoQkMsWUFBWSxFQUFFLG1CQUFtQjtVQUNqQ0MsRUFBRSxFQUFFLENBQUM7VUFDTEMsYUFBYSxFQUFFO1FBQ2pCO01BQUU7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLEdBQUFDLEtBQ0gsQ0FBQyxHQUVGckIsc0VBQUEsQ0FBQ0oseURBQUc7UUFBQ1MsS0FBSyxFQUFFQSxLQUFNO1FBQUNFLEtBQUssRUFBRUEsS0FBTTtRQUFDSyxFQUFFLEVBQUU7VUFBRUcsRUFBRSxFQUFFO1FBQUU7TUFBRTtRQUFBRSxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsR0FBQUMsS0FBRTtJQUNsRDtNQUFBSixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FDTztFQUFDLGdCQUNYLENBQUM7QUFFUCxDQUFDO0FBQUFDLEVBQUEsR0F0QktuQixPQUF3QjtBQXdCOUIsK0RBQWVBLE9BQU87QUFBQSxJQUFBbUIsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSG9tZUxpbmtUYWIudHN4P2I1MTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRhYiBmcm9tICdAbXVpL21hdGVyaWFsL1RhYidcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGxhYmVsOiBzdHJpbmdcbiAgaHJlZjogc3RyaW5nXG4gIHZhbHVlPzogc3RyaW5nXG4gIHNlbGVjdGVkPzogYm9vbGVhblxufVxuXG5jb25zdCBMaW5rVGFiOiBSZWFjdC5GQzxQcm9wcz4gPSAoeyBsYWJlbCwgaHJlZiwgdmFsdWUsIHNlbGVjdGVkIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5leHRMaW5rIGhyZWY9e2hyZWZ9IGxlZ2FjeUJlaGF2aW9yPlxuICAgICAgICB7c2VsZWN0ZWQgPyAoXG4gICAgICAgICAgPFRhYlxuICAgICAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiTXVpLXNlbGVjdGVkXCJcbiAgICAgICAgICAgIHN4PXt7XG4gICAgICAgICAgICAgIGNvbG9yOiAnI2YxNTkyMicsXG4gICAgICAgICAgICAgIGJvcmRlckJvdHRvbTogJzRweCBzb2xpZCAjZjE1OTIyJyxcbiAgICAgICAgICAgICAgbXg6IDQsXG4gICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06ICdub25lJyxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8VGFiIGxhYmVsPXtsYWJlbH0gdmFsdWU9e3ZhbHVlfSBzeD17eyBteDogNCB9fSAvPlxuICAgICAgICApfVxuICAgICAgPC9OZXh0TGluaz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rVGFiXG4iXSwibmFtZXMiOlsiVGFiIiwiTmV4dExpbmsiLCJSZWFjdCIsImpzeERFViIsIl9qc3hERVYiLCJGcmFnbWVudCIsIl9GcmFnbWVudCIsIkxpbmtUYWIiLCJfcmVmIiwibGFiZWwiLCJocmVmIiwidmFsdWUiLCJzZWxlY3RlZCIsImNoaWxkcmVuIiwibGVnYWN5QmVoYXZpb3IiLCJjbGFzc05hbWUiLCJzeCIsImNvbG9yIiwiYm9yZGVyQm90dG9tIiwibXgiLCJ0ZXh0VHJhbnNmb3JtIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3RoaXMiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/HomeLinkTab.tsx\n"));

/***/ })

});
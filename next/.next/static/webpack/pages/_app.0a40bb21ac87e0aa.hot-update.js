"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/LinkTab.tsx":
/*!************************************!*\
  !*** ./src/components/LinkTab.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material_Tab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Tab */ \"./node_modules/@mui/material/Tab/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/app/src/components/LinkTab.tsx\",\n  _this = undefined;\n\n\n\n\n\nvar LinkTab = function LinkTab(_ref) {\n  var label = _ref.label,\n    href = _ref.href,\n    value = _ref.value,\n    selected = _ref.selected;\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {\n      href: href,\n      legacyBehavior: true,\n      children: selected ? (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        label: label,\n        value: value,\n        className: \"Mui-selected\",\n        sx: {\n          color: '#f15922',\n          borderBottom: '4px solid #f15922',\n          mx: 10\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 11\n      }, _this) : (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_mui_material_Tab__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        label: label,\n        value: value\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n_c = LinkTab;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LinkTab);\nvar _c;\n$RefreshReg$(_c, \"LinkTab\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9MaW5rVGFiLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUM7QUFDSDtBQUNQO0FBQUE7QUFBQTtBQVN6QixJQUFNTyxPQUF3QixHQUFHLFNBQTNCQSxPQUF3QkEsQ0FBQUMsSUFBQSxFQUF5QztFQUFBLElBQW5DQyxLQUFLLEdBQUFELElBQUEsQ0FBTEMsS0FBSztJQUFFQyxJQUFJLEdBQUFGLElBQUEsQ0FBSkUsSUFBSTtJQUFFQyxLQUFLLEdBQUFILElBQUEsQ0FBTEcsS0FBSztJQUFFQyxRQUFRLEdBQUFKLElBQUEsQ0FBUkksUUFBUTtFQUM5RCxPQUNFUixzRUFBQSxDQUFBRSxvRUFBQTtJQUFBTyxRQUFBLEVBQ0VULHNFQUFBLENBQUNILGtEQUFRO01BQUNTLElBQUksRUFBRUEsSUFBSztNQUFDSSxjQUFjO01BQUFELFFBQUEsRUFDakNELFFBQVEsR0FDUFIsc0VBQUEsQ0FBQ0oseURBQUc7UUFDRlMsS0FBSyxFQUFFQSxLQUFNO1FBQ2JFLEtBQUssRUFBRUEsS0FBTTtRQUNiSSxTQUFTLEVBQUMsY0FBYztRQUN4QkMsRUFBRSxFQUFFO1VBQUVDLEtBQUssRUFBRSxTQUFTO1VBQUVDLFlBQVksRUFBRSxtQkFBbUI7VUFBRUMsRUFBRSxFQUFFO1FBQUc7TUFBRTtRQUFBQyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsR0FBQUMsS0FDckUsQ0FBQyxHQUVGcEIsc0VBQUEsQ0FBQ0oseURBQUc7UUFBQ1MsS0FBSyxFQUFFQSxLQUFNO1FBQUNFLEtBQUssRUFBRUE7TUFBTTtRQUFBUyxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsR0FBQUMsS0FBRTtJQUNuQztNQUFBSixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FDTztFQUFDLGdCQUNYLENBQUM7QUFFUCxDQUFDO0FBQUFDLEVBQUEsR0FqQktsQixPQUF3QjtBQW1COUIsK0RBQWVBLE9BQU87QUFBQSxJQUFBa0IsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvTGlua1RhYi50c3g/MzdhMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGFiIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGFiJ1xuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxudHlwZSBQcm9wcyA9IHtcbiAgbGFiZWw6IHN0cmluZ1xuICBocmVmOiBzdHJpbmdcbiAgdmFsdWU/OiBzdHJpbmdcbiAgc2VsZWN0ZWQ/OiBib29sZWFuXG59XG5cbmNvbnN0IExpbmtUYWI6IFJlYWN0LkZDPFByb3BzPiA9ICh7IGxhYmVsLCBocmVmLCB2YWx1ZSwgc2VsZWN0ZWQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TmV4dExpbmsgaHJlZj17aHJlZn0gbGVnYWN5QmVoYXZpb3I+XG4gICAgICAgIHtzZWxlY3RlZCA/IChcbiAgICAgICAgICA8VGFiXG4gICAgICAgICAgICBsYWJlbD17bGFiZWx9XG4gICAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJNdWktc2VsZWN0ZWRcIlxuICAgICAgICAgICAgc3g9e3sgY29sb3I6ICcjZjE1OTIyJywgYm9yZGVyQm90dG9tOiAnNHB4IHNvbGlkICNmMTU5MjInLCBteDogMTAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxUYWIgbGFiZWw9e2xhYmVsfSB2YWx1ZT17dmFsdWV9IC8+XG4gICAgICAgICl9XG4gICAgICA8L05leHRMaW5rPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtUYWJcbiJdLCJuYW1lcyI6WyJUYWIiLCJOZXh0TGluayIsIlJlYWN0IiwianN4REVWIiwiX2pzeERFViIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwiTGlua1RhYiIsIl9yZWYiLCJsYWJlbCIsImhyZWYiLCJ2YWx1ZSIsInNlbGVjdGVkIiwiY2hpbGRyZW4iLCJsZWdhY3lCZWhhdmlvciIsImNsYXNzTmFtZSIsInN4IiwiY29sb3IiLCJib3JkZXJCb3R0b20iLCJteCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl90aGlzIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/LinkTab.tsx\n"));

/***/ })

});
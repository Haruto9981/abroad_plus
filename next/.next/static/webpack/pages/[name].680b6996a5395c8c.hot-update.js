"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[name]",{

/***/ "./src/pages/[name].tsx":
/*!******************************!*\
  !*** ./src/pages/[name].tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Error__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Error */ \"./src/components/Error.tsx\");\n/* harmony import */ var _components_Loading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Loading */ \"./src/components/Loading.tsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles */ \"./src/styles/index.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\nvar _jsxFileName = \"/app/src/pages/[name].tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\nvar UserProfile = function UserProfile() {\n  _s();\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();\n  //   const url =\n  //     process.env.NEXT_PUBLIC_API_BASE_URL + 'users' + router.query.userId\n  //   const { data, error } = useSWR(url, fetcher)\n  if (error) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Error__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 21\n  }, _this);\n  if (!data) return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_Loading__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 21\n  }, _this);\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n    css: _styles__WEBPACK_IMPORTED_MODULE_3__.styles.pageMinHeight,\n    sx: {\n      backgroundColor: '#ffe0b6',\n      display: 'flex'\n    },\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {\n      maxWidth: \"sm\",\n      sx: {\n        pt: 6\n      },\n      children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n        children: \"Hello\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 9\n      }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Typography, {\n        children: router.query.userId\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 18,\n    columnNumber: 5\n  }, _this);\n};\n_s(UserProfile, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter];\n});\n_c = UserProfile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserProfile);\nvar _c;\n$RefreshReg$(_c, \"UserProfile\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvW25hbWVdLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUEwRDtBQUVuQjtBQUVEO0FBQ0k7QUFDVDtBQUFBO0FBR2pDLElBQU1TLFdBQXFCLEdBQUcsU0FBeEJBLFdBQXFCQSxDQUFBLEVBQVM7RUFBQUMsRUFBQTtFQUNsQyxJQUFNQyxNQUFNLEdBQUdSLHNEQUFTLENBQUMsQ0FBQztFQUMxQjtFQUNBO0VBQ0E7RUFDQSxJQUFJUyxLQUFLLEVBQUUsT0FBT0osc0VBQUEsQ0FBQ0oseURBQUs7SUFBQVMsUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLEdBQUFDLEtBQUUsQ0FBQztFQUMzQixJQUFJLENBQUNDLElBQUksRUFBRSxPQUFPVixzRUFBQSxDQUFDSCwyREFBTztJQUFBUSxRQUFBLEVBQUFDLFlBQUE7SUFBQUMsVUFBQTtJQUFBQyxZQUFBO0VBQUEsR0FBQUMsS0FBRSxDQUFDO0VBQzdCLE9BQ0VULHNFQUFBLENBQUNSLDhDQUFHO0lBQ0ZtQixHQUFHLEVBQUViLDJDQUFNLENBQUNjLGFBQWM7SUFDMUJDLEVBQUUsRUFBRTtNQUFFQyxlQUFlLEVBQUUsU0FBUztNQUFFQyxPQUFPLEVBQUU7SUFBTyxDQUFFO0lBQUFDLFFBQUEsRUFFcERoQixzRUFBQSxDQUFDTixvREFBUztNQUFDdUIsUUFBUSxFQUFDLElBQUk7TUFBQ0osRUFBRSxFQUFFO1FBQUVLLEVBQUUsRUFBRTtNQUFFLENBQUU7TUFBQUYsUUFBQSxHQUNyQ2hCLHNFQUFBLENBQUNQLHFEQUFVO1FBQUF1QixRQUFBLEVBQUM7TUFBSztRQUFBWCxRQUFBLEVBQUFDLFlBQUE7UUFBQUMsVUFBQTtRQUFBQyxZQUFBO01BQUEsR0FBQUMsS0FBWSxDQUFDLEVBQzlCVCxzRUFBQSxDQUFDUCxxREFBVTtRQUFBdUIsUUFBQSxFQUFFYixNQUFNLENBQUNnQixLQUFLLENBQUNDO01BQU07UUFBQWYsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLEdBQUFDLEtBQWEsQ0FBQztJQUFBO01BQUFKLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxHQUFBQyxLQUNyQztFQUFDO0lBQUFKLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxHQUFBQyxLQUNULENBQUM7QUFFVixDQUFDO0FBQUFQLEVBQUEsQ0FsQktELFdBQXFCO0VBQUEsUUFDVk4sa0RBQVM7QUFBQTtBQUFBMEIsRUFBQSxHQURwQnBCLFdBQXFCO0FBb0IzQiwrREFBZUEsV0FBVztBQUFBLElBQUFvQixFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvW25hbWVdLnRzeD85MmIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVHlwb2dyYXBoeSwgQ29udGFpbmVyIH0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcbmltcG9ydCBFcnJvciBmcm9tICdAL2NvbXBvbmVudHMvRXJyb3InXG5pbXBvcnQgTG9hZGluZyBmcm9tICdAL2NvbXBvbmVudHMvTG9hZGluZydcbmltcG9ydCB7IHN0eWxlcyB9IGZyb20gJ0Avc3R5bGVzJ1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJ0AvdXRpbHMnXG5cbmNvbnN0IFVzZXJQcm9maWxlOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgLy8gICBjb25zdCB1cmwgPVxuICAvLyAgICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMICsgJ3VzZXJzJyArIHJvdXRlci5xdWVyeS51c2VySWRcbiAgLy8gICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IodXJsLCBmZXRjaGVyKVxuICBpZiAoZXJyb3IpIHJldHVybiA8RXJyb3IgLz5cbiAgaWYgKCFkYXRhKSByZXR1cm4gPExvYWRpbmcgLz5cbiAgcmV0dXJuIChcbiAgICA8Qm94XG4gICAgICBjc3M9e3N0eWxlcy5wYWdlTWluSGVpZ2h0fVxuICAgICAgc3g9e3sgYmFja2dyb3VuZENvbG9yOiAnI2ZmZTBiNicsIGRpc3BsYXk6ICdmbGV4JyB9fVxuICAgID5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJzbVwiIHN4PXt7IHB0OiA2IH19PlxuICAgICAgICA8VHlwb2dyYXBoeT5IZWxsbzwvVHlwb2dyYXBoeT5cbiAgICAgICAgPFR5cG9ncmFwaHk+e3JvdXRlci5xdWVyeS51c2VySWR9PC9UeXBvZ3JhcGh5PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9Cb3g+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGVcbiJdLCJuYW1lcyI6WyJCb3giLCJUeXBvZ3JhcGh5IiwiQ29udGFpbmVyIiwidXNlUm91dGVyIiwiRXJyb3IiLCJMb2FkaW5nIiwic3R5bGVzIiwianN4REVWIiwiX2pzeERFViIsIlVzZXJQcm9maWxlIiwiX3MiLCJyb3V0ZXIiLCJlcnJvciIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl90aGlzIiwiZGF0YSIsImNzcyIsInBhZ2VNaW5IZWlnaHQiLCJzeCIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJjaGlsZHJlbiIsIm1heFdpZHRoIiwicHQiLCJxdWVyeSIsInVzZXJJZCIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/[name].tsx\n"));

/***/ })

});
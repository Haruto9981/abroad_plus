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

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useGlobalState */ \"./src/hooks/useGlobalState.ts\");\n/* harmony import */ var _emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react/jsx-dev-runtime */ \"./node_modules/@emotion/react/jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js\");\n\nvar _jsxFileName = \"/app/src/components/Header.tsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\n\nvar Header = function Header() {\n  _s();\n  var _useUserState = (0,_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_3__.useUserState)(),\n    _useUserState2 = (0,_app_node_modules_next_dist_compiled_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_useUserState, 1),\n    user = _useUserState2[0];\n  return (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.AppBar, {\n    position: \"sticky\",\n    sx: {\n      backgroundColor: 'white',\n      color: 'black',\n      boxShadow: 'none'\n    },\n    children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Container, {\n      maxWidth: \"lg\",\n      sx: {\n        px: 2\n      },\n      children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n        sx: {\n          display: 'flex',\n          justifyContent: 'space-between',\n          alignItems: 'center'\n        },\n        children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n          children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n            href: \"/\",\n            children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n              src: \"/logo.png\",\n              width: 85,\n              height: 85,\n              alt: \"logo\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, _this), user.isFetched && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n          children: [!user.isSignedIn && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            children: [(0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n              href: \"/sign_in\",\n              children: (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                color: \"warning\",\n                variant: \"contained\",\n                sx: {\n                  color: 'white',\n                  textTransform: 'none',\n                  fontSize: 16,\n                  borderRadius: 2,\n                  boxShadow: 'none'\n                },\n                children: \"Sign in\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 52,\n              columnNumber: 19\n            }, _this), (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Button, {\n              color: \"warning\",\n              variant: \"outlined\",\n              sx: {\n                textTransform: 'none',\n                fontSize: 16,\n                borderRadius: 2,\n                boxShadow: 'none',\n                border: '1.5px solid #f5a500',\n                ml: 2\n              },\n              children: \"Sign Up\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 67,\n              columnNumber: 19\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 51,\n            columnNumber: 17\n          }, _this), user.isSignedIn && (0,_emotion_react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__.Box, {\n            children: user.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 35\n          }, _this)]\n        }, void 0, true)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n_s(Header, \"UKrGTS+2tpbFdkCrn7luqsvYRv8=\", false, function () {\n  return [_hooks_useGlobalState__WEBPACK_IMPORTED_MODULE_3__.useUserState];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7Y0FBQXZCLFFBQUEsRUFDSDtZQUVEO2NBQUFXLFFBQUEsRUFBQUMsWUFBQTtjQUFBQyxVQUFBO2NBQUFDLFlBQUE7WUFBQSxHQUFBQyxLQUFRLENBQUM7VUFBQTtZQUFBSixRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsR0FBQUMsS0FDTixDQUNOLEVBQ0FyQixJQUFJLENBQUN1QixVQUFVLElBQUkvQixzRUFBQSxDQUFDUCw4Q0FBRztZQUFBcUIsUUFBQSxFQUFFTixJQUFJLENBQUM4QjtVQUFJO1lBQUFiLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxHQUFBQyxLQUFNLENBQUM7UUFBQSxlQUMxQyxDQUNIO01BQUE7UUFBQUosUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBLEdBQUFDLEtBQ0U7SUFBQztNQUFBSixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FDRztFQUFDO0lBQUFKLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxHQUFBQyxLQUNOLENBQUM7QUFFYixDQUFDO0FBQUF6QixFQUFBLENBbkVLRCxNQUFNO0VBQUEsUUFDS0wsK0RBQVk7QUFBQTtBQUFBeUMsRUFBQSxHQUR2QnBDLE1BQU07QUFxRVosK0RBQWVBLE1BQU07QUFBQSxJQUFBb0MsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLnRzeD9hNjk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcnRpY2xlSWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0FydGljbGUnXG5pbXBvcnQgTG9nb3V0IGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvTG9nb3V0J1xuaW1wb3J0IFBlcnNvbkljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9QZXJzb24nXG5pbXBvcnQge1xuICBBcHBCYXIsXG4gIEF2YXRhcixcbiAgQm94LFxuICBCdXR0b24sXG4gIENvbnRhaW5lcixcbiAgRGl2aWRlcixcbiAgSWNvbkJ1dHRvbixcbiAgTWVudSxcbiAgTWVudUl0ZW0sXG4gIExpc3RJdGVtSWNvbixcbiAgVHlwb2dyYXBoeSxcbn0gZnJvbSAnQG11aS9tYXRlcmlhbCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVXNlclN0YXRlIH0gZnJvbSAnQC9ob29rcy91c2VHbG9iYWxTdGF0ZSdcblxuY29uc3QgSGVhZGVyID0gKCkgPT4ge1xuICBjb25zdCBbdXNlcl0gPSB1c2VVc2VyU3RhdGUoKVxuXG4gIHJldHVybiAoXG4gICAgPEFwcEJhclxuICAgICAgcG9zaXRpb249XCJzdGlja3lcIlxuICAgICAgc3g9e3tcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICBjb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIHN4PXt7IHB4OiAyIH19PlxuICAgICAgICA8Qm94XG4gICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvbG9nby5wbmdcIiB3aWR0aD17ODV9IGhlaWdodD17ODV9IGFsdD1cImxvZ29cIiAvPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICAgIHt1c2VyLmlzRmV0Y2hlZCAmJiAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICB7IXVzZXIuaXNTaWduZWRJbiAmJiAoXG4gICAgICAgICAgICAgICAgPEJveD5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbl9pblwiPlxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTYsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgU2lnbiBpblxuICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ3YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3tcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IDE2LFxuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogMixcbiAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxLjVweCBzb2xpZCAjZjVhNTAwJyxcbiAgICAgICAgICAgICAgICAgICAgICBtbDogMixcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2lnbiBVcFxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHt1c2VyLmlzU2lnbmVkSW4gJiYgPEJveD57dXNlci5uYW1lfTwvQm94Pn1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Db250YWluZXI+XG4gICAgPC9BcHBCYXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG4iXSwibmFtZXMiOlsiQXBwQmFyIiwiQm94IiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiSW1hZ2UiLCJMaW5rIiwidXNlVXNlclN0YXRlIiwianN4REVWIiwiX2pzeERFViIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwiSGVhZGVyIiwiX3MiLCJfdXNlVXNlclN0YXRlIiwiX3VzZVVzZXJTdGF0ZTIiLCJfc2xpY2VkVG9BcnJheSIsInVzZXIiLCJwb3NpdGlvbiIsInN4IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJib3hTaGFkb3ciLCJjaGlsZHJlbiIsIm1heFdpZHRoIiwicHgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiaHJlZiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3RoaXMiLCJpc0ZldGNoZWQiLCJpc1NpZ25lZEluIiwidmFyaWFudCIsInRleHRUcmFuc2Zvcm0iLCJmb250U2l6ZSIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsIm1sIiwibmFtZSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Header.tsx\n"));

/***/ })

});